import os
import subprocess
import time
import http.server
import threading

PORT = 8099
DIRECTORY = "app"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    def log_message(self, format, *args):
        pass

server = http.server.HTTPServer(('127.0.0.1', PORT), Handler)
t = threading.Thread(target=server.serve_forever, daemon=True)
t.start()
print(f"Server started on port {PORT}")
time.sleep(1)

os.makedirs("screenshots", exist_ok=True)

chrome_bin = "/root/.cache/ms-playwright/chromium-1208/chrome-linux64/chrome"

shots = [
    ("01-roadmap.png", "http://127.0.0.1:8099/?tab=roadmap"),
    ("02-list.png", "http://127.0.0.1:8099/"),
    ("03-guide.png", "http://127.0.0.1:8099/?expand=2"),
    ("04-tracker.png", "http://127.0.0.1:8099/?demo=1")
]

for filename, url in shots:
    out_path = os.path.abspath(os.path.join("screenshots", filename))
    cmd = [
        chrome_bin,
        "--headless=new",
        "--no-sandbox",
        "--hide-scrollbars",
        "--window-size=1280,720",
        "--virtual-time-budget=4000",
        f"--screenshot={out_path}",
        url
    ]
    print(f"Capturing {filename} from {url}...")
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Error capturing {filename}: {res.stderr}")
    else:
        size = os.path.getsize(out_path)
        print(f"Captured {filename} ({size} bytes)")

server.shutdown()
print("Screenshot capture complete.")
