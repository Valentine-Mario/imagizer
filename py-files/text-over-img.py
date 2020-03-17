import cv2, sys
lines = sys.stdin.readline().replace('\n','')
line_list=lines.split('\'')
import os
cwd = os.getcwd()
font=cv2.FONT_HERSHEY_SIMPLEX
if line_list[9].strip()== "FONT_HERSHEY_SIMPLEX":
    font=cv2.FONT_HERSHEY_SIMPLEX
if line_list[9].strip()=="FONT_HERSHEY_PLAIN":
    font=cv2.FONT_HERSHEY_PLAIN 
if line_list[9].strip()== "FONT_HERSHEY_DUPLEX":
    font=cv2.FONT_HERSHEY_DUPLEX
if line_list[9].strip()== "FONT_HERSHEY_COMPLEX":
    font=cv2.FONT_HERSHEY_COMPLEX
if line_list[9].strip()=="FONT_HERSHEY_TRIPLEX":
    font=cv2.FONT_HERSHEY_TRIPLEX 
if line_list[9].strip()=="FONT_HERSHEY_COMPLEX_SMALL":
    font=cv2.FONT_HERSHEY_COMPLEX_SMALL
if line_list[9].strip()=="FONT_HERSHEY_SCRIPT_SIMPLEX":
    font=cv2.FONT_HERSHEY_SCRIPT_SIMPLEX
if line_list[9].strip()=="FONT_HERSHEY_SCRIPT_COMPLEX":
    font=cv2.FONT_HERSHEY_SCRIPT_COMPLEX
if line_list[9].strip()=="FONT_ITALIC":
    font=cv2.FONT_ITALIC

color=eval(line_list[5])

try:
    img = cv2.imread(cwd+'/'+line_list[0])
    output=img.copy()
    cv2.putText(output, line_list[4], (int(line_list[7]), int(line_list[8])), font, float(line_list[6]), color, 2)
    cv2.imwrite(cwd+'/'+line_list[2]+'/'+line_list[1]+line_list[3], output)
    print(True)
except:
    print(False)


