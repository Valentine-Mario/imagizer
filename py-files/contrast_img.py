import cv2, sys, os
import numpy as np
lines = sys.stdin.readline().replace('\n','')
line_list=lines.split('\'')
cwd = os.getcwd()
img = cv2.imread(line_list[0])

try:
    contrast_img = cv2.addWeighted(img, float(line_list[3]), np.zeros(img.shape, img.dtype), 0, 0)
    cv2.imwrite(cwd+'/'+line_list[2]+'/'+line_list[1]+line_list[4], contrast_img)
    print(True)
except :
    print(False)
