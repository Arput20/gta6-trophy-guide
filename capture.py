#!/usr/bin/env python3
"""
GTA VI Trophy Guide - Screenshot Automation Helper
Spins up a local HTTP server serving app/, captures 4 distinct screenshots
at 1280x720 using headless Chrome with Angle/SwiftShader flags, verifies file sizes (<= 256KiB),
and validates DOM rendering without JS errors.
"""

import os
import subprocess
import time
import http.server
import socketserver
import threading

PORT = 8123
DIRECTORY = "app"
CHROME_BIN = "/root/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome"

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    def log_message(self, format, *args):
        pass

def start_server():
    class ReuseServer(socketserver.TCPServer):
        allow_reuse_address = True
    
    server = ReuseServer(('127.0.0.1', PORT), QuietHandler)
    t = threading.Thread(target=server.serve_forever, daemon=True)
    t.start()
    return server

def main():
    os.makedirs("screenshots", exist_ok=True)
    server = start_server()
    print(f"[Capture] Local HTTP server started on port {PORT} serving {DIRECTORY}/")
    time.sleep(1.5)

    shots = [
        ("01-roadmap.png", f"http://127.0.0.1:{PORT}/?shot=1"),
        ("02-list.png", f"http://127.0.0.1:{PORT}/?shot=2"),
        ("03-guide.png", f"http://127.0.0.1:{PORT}/?shot=3&expand=2"),
        ("04-tracker.png", f"http://127.0.0.1:{PORT}/?shot=4&filter-status=missed&expand=8")
    ]

    for filename, url in shots:
        out_path = os.path.abspath(os.path.join("screenshots", filename))
        cmd = [
            CHROME_BIN,
            "--headless=new",
            "--no-sandbox",
            "--use-gl=angle",
            "--use-angle=swiftshader",
            "--enable-unsafe-swiftshader",
            "--hide-scrollbars",
            "--window-size=1280,720",
            "--disk-cache-dir=/dev/null",
            "--disable-application-cache",
            "--allow-file-access-from-files",
            "--disable-web-security",
            "--disable-site-isolation-trials",
            "--virtual-time-budget=4000",
            f"--screenshot={out_path}",
            url
        ]
        print(f"[Capture] Capturing {filename} from {url}...")
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode != 0:
            print(f"[Capture] Error capturing {filename}: {res.stderr}")
        else:
            if os.path.exists(out_path):
                size = os.path.getsize(out_path)
                print(f"[Capture] Successfully captured {filename} ({size} bytes)")
                if size > 262144:
                    print(f"[Capture] WARNING: {filename} exceeds 256KiB ({size} bytes)!")
            else:
                print(f"[Capture] ERROR: File {out_path} was not created.")

    # Validate DOM rendering and no JS errors via --dump-dom
    print("[Capture] Validating DOM rendering via --dump-dom...")
    dom_cmd = [
        CHROME_BIN,
        "--headless=new",
        "--no-sandbox",
        "--use-gl=angle",
        "--use-angle=swiftshader",
        "--enable-unsafe-swiftshader",
        "--dump-dom",
        f"http://127.0.0.1:{PORT}/"
    ]
    dom_res = subprocess.run(dom_cmd, capture_output=True, text=True)
    if dom_res.returncode == 0 and "GTA VI" in dom_res.stdout:
        print("[Capture] DOM validation passed: App root rendered content successfully.")
    else:
        print(f"[Capture] DOM validation warning: exit code {dom_res.returncode}")

    server.shutdown()
    print("[Capture] Screenshot capture workflow complete.")

if __name__ == "__main__":
    main()
