import cv2, sys
lines = sys.stdin.readline().replace('\n','')
line_list=lines.split('\'')
import os
cwd = os.getcwd()
image=cv2.imread(line_list[0])

try:
    invert_color=cv2.bitwise_not(image)
    cv2.imwrite(cwd+'/'+line_list[2]+'/'+line_list[1]+line_list[3], invert_color)
    print(True)
except:
    print(False)