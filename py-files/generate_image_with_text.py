import numpy as np
import random, sys, os, cv2
lines = sys.stdin.readline().replace('\n','')
line_list=lines.split('\'')
cwd = os.getcwd()

#rgb image
if line_list[4].strip()=="random":
    rgb_image=(random.randrange(0, 255, 3), random.randrange(0, 255, 3), random.randrange(0, 255, 3))
else:
    rgb_image=eval(line_list[4])

#rgb text
if line_list[5].strip()=="random":
    rgb_text=(random.randrange(0, 255, 3), random.randrange(0, 255, 3), random.randrange(0, 255, 3))
else:
    rgb_text=eval(line_list[5])

font=cv2.FONT_HERSHEY_SIMPLEX
if line_list[10].strip()== "FONT_HERSHEY_SIMPLEX":
    font=cv2.FONT_HERSHEY_SIMPLEX
if line_list[10].strip()=="FONT_HERSHEY_PLAIN":
    font=cv2.FONT_HERSHEY_PLAIN 
if line_list[10].strip()== "FONT_HERSHEY_DUPLEX":
    font=cv2.FONT_HERSHEY_DUPLEX
if line_list[10].strip()== "FONT_HERSHEY_COMPLEX":
    font=cv2.FONT_HERSHEY_COMPLEX
if line_list[10].strip()=="FONT_HERSHEY_TRIPLEX":
    font=cv2.FONT_HERSHEY_TRIPLEX 
if line_list[10].strip()=="FONT_HERSHEY_COMPLEX_SMALL":
    font=cv2.FONT_HERSHEY_COMPLEX_SMALL
if line_list[10].strip()=="FONT_HERSHEY_SCRIPT_SIMPLEX":
    font=cv2.FONT_HERSHEY_SCRIPT_SIMPLEX
if line_list[10].strip()=="FONT_HERSHEY_SCRIPT_COMPLEX":
    font=cv2.FONT_HERSHEY_SCRIPT_COMPLEX
if line_list[10].strip()=="FONT_ITALIC":
    font=cv2.FONT_ITALIC

try:
    height=int(line_list[2])
    width=int(line_list[3])
    blank_image = np.zeros((height,width,3), np.uint8)
    blank_image[:] = rgb_image
    output=blank_image.copy()
    cv2.putText(output, line_list[8], (int(line_list[7]), int(line_list[6])), font, float(line_list[9]), rgb_text, 2)
    cv2.imwrite(cwd+'/'+line_list[1]+'/'+line_list[0]+line_list[11], output)
    print(True)
except:
    print(False)