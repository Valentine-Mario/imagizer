import imutils, cv2, sys
lines = sys.stdin.readline().replace('\n','')
line_list=lines.split('\'')
import os
cwd = os.getcwd()

try:
  image = cv2.imread(cwd+'/'+line_list[0])
  resized = imutils.resize(image, width=int(line_list[3]))
  cv2.imwrite(cwd+'/'+line_list[2]+'/'+line_list[1]+line_list[4], resized)
  print(True)
except:
  print(False)
