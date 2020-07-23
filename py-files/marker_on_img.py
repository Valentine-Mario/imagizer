import cv2, sys
lines = sys.stdin.readline().replace('\n','')
line_list=lines.split('\'')
import os
cwd = os.getcwd()
image=cv2.imread(line_list[0])
output = image.copy()
point=eval(line_list[3])
rgb=eval(line_list[4])

if line_list[5].strip()== "MARKER_CROSS":
    marker=cv2.MARKER_CROSS
elif line_list[5].strip()== "MARKER_TILTED_CROSS":
    marker=cv2.MARKER_TILTED_CROSS 	
elif line_list[5].strip()=="MARKER_STAR":
    marker=cv2.MARKER_STAR
elif line_list[5].strip()=="MARKER_DIAMOND":
    marker=cv2.MARKER_DIAMOND 
elif line_list[5].strip()=="MARKER_SQUARE":
    marker=cv2.MARKER_SQUARE
elif line_list[5].strip=="MARKER_TRIANGLE_UP":
    marker=cv2.MARKER_TRIANGLE_UP
elif line_list[5].strip=="MARKER_TRIANGLE_DOWN":
    marker=cv2.MARKER_TRIANGLE_DOWN
else:
    marker=cv2.MARKER_TILTED_CROSS

try:
   marked_img= cv2.drawMarker(output, point, rgb, marker, int(line_list[6]), int(line_list[7]))
   cv2.imwrite(cwd+'/'+line_list[2]+'/'+line_list[1]+line_list[8], marked_img)
   print(True)
except:
    print(False)