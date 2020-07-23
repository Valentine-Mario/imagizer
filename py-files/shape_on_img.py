import cv2, sys
lines = sys.stdin.readline().replace('\n','')
line_list=lines.split('\'')
import os
cwd = os.getcwd()
image=cv2.imread(line_list[0])
output = image.copy()
point_1=eval(line_list[3])
point_2=eval(line_list[4])
rgb=eval(line_list[5])

try:
    if line_list[7].strip()=='rectangle':
        rectangle=  cv2.rectangle(output, point_1, point_2, rgb, int(line_list[6]))
        cv2.imwrite(cwd+'/'+line_list[2]+'/'+line_list[1]+line_list[8], rectangle)
        print(True)
    elif line_list[7].strip()=='line':
        rectangle=  cv2.line(output, point_1, point_2, rgb, int(line_list[6]))
        cv2.imwrite(cwd+'/'+line_list[2]+'/'+line_list[1]+line_list[8], rectangle)
        print(True)
    elif line_list[7].strip()=='arrow':
        rectangle=  cv2.arrowedLine(output, point_1, point_2, rgb, int(line_list[6]))
        cv2.imwrite(cwd+'/'+line_list[2]+'/'+line_list[1]+line_list[8], rectangle)
        print(True)
    elif line_list[7].strip()=='circle':
        rectangle=  cv2.circle(output, point_1, point_2, rgb, int(line_list[6]))
        cv2.imwrite(cwd+'/'+line_list[2]+'/'+line_list[1]+line_list[8], rectangle)
        print(True)
    else:
        print(False) 
except :
    print(False)
