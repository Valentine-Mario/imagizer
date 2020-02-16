import cv2, sys
lines = sys.stdin.readline().replace('\n','')
line_list=lines.split('\'')
import os
cwd = os.getcwd()

try:
  image = cv2.imread(cwd+'/'+line_list[0])
  gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
  cv2.imwrite(cwd+'/'+line_list[2]+'/'+line_list[1]+line_list[3], gray)
  print(True)
except:
  print(False)