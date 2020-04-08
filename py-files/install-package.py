import subprocess
import sys

subprocess.check_call([sys.executable, "-m", "pip", "install", 'imutils'])
subprocess.check_call([sys.executable, "-m", "pip", "install", 'opencv-python'])
subprocess.check_call([sys.executable, "-m", "pip", "install", 'Pillow'])