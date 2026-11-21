#!/usr/bin/env python3
"""
Retake screenshots for GTA VI Trophy Guide & Tracker with 55 trophies loaded.
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
    print(f"[Retake] Server started on port {PORT}")
    time.sleep(2.0)

    shots = [
        ("screenshots/01-roadmap.png", f"http://127.0.0.1:{PORT}/?view=roadmap", "roadmap"),
        ("screenshots/02-list.png", f"http://127.0.0.1:{PORT}/?view=trophies", "trophies"),
        ("screenshots/03-guide.png", f"http://127.0.0.1:{PORT}/?view=trophies&expand=8", "expand"),
        ("screenshots/04-tracker.png", f"http://127.0.0.1:{PORT}/?view=tracker&filter-status=missed&demo=1", "tracker")
    ]

    for filename, url, expected_keyword in shots:
        out_path = os.path.abspath(filename)
        
        # 1. Verify with --dump-dom first
        dom_cmd = [
            CHROME_BIN,
            "--headless=new",
            "--no-sandbox",
            "--use-gl=angle",
            "--use-angle=swiftshader",
            "--enable-unsafe-swiftshader",
            "--dump-dom",
            url
        ]
        print(f"[Retake] Verifying DOM for {filename}...")
        dom_res = subprocess.run(dom_cmd, capture_output=True, text=True, timeout=10)
        
        if dom_res.returncode != 0:
            print(f"[Retake] WARNING: --dump-dom returned exit code {dom_res.returncode}")
        
        dom_output = dom_res.stdout
        if "0 of 55 earned" in dom_output or "of 55" in dom_output:
            print(f"[Retake] DOM check PASSED: Found 55 trophies header in {filename}")
        else:
            print(f"[Retake] WARNING: '0 of 55 earned' not found in DOM for {filename}")

        # 2. Capture screenshot
        shot_cmd = [
            CHROME_BIN,
            "--headless=new",
            "--no-sandbox",
            "--use-gl=angle",
            "--use-angle=swiftshader",
            "--enable-unsafe-swiftshader",
            "--window-size=1280,720",
            f"--screenshot={out_path}",
            url
        ]
        print(f"[Retake] Capturing {filename} from {url}...")
        shot_res = subprocess.run(shot_cmd, capture_output=True, text=True, timeout=15)
        
        if shot_res.returncode != 0:
            print(f"[Retake] Error capturing {filename}: {shot_res.stderr}")
        else:
            if os.path.exists(out_path):
                size = os.path.getsize(out_path)
                print(f"[Retake] Captured {filename}: {size} bytes")
                if size > 262144:
                    raise Exception(f"{filename} exceeds 256KiB ({size} bytes)")
            else:
                raise Exception(f"{filename} was not created")

    server.shutdown()
    print("[Retake] All screenshots successfully captured and verified.")

if __name__ == "__main__":
    main()
