import cv2, sys, os
import numpy as np
lines = sys.stdin.readline().replace('\n','')
line_list=lines.split('\'')
cwd = os.getcwd()
img = cv2.imread(line_list[0])

try:
    cropped = img[int(line_list[3]):int(line_list[5]), int(line_list[4]):int(line_list[6])]
    cv2.imwrite(cwd+'/'+line_list[2]+'/'+line_list[1]+line_list[7], cropped)
    print(True)
except:
    print(False)
