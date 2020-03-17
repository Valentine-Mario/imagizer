import imutils, cv2, sys
lines = sys.stdin.readline().replace('\n','')
line_list=lines.split('\'')
import os
cwd = os.getcwd()


img1 = cv2.imread(line_list[0])
img2 = cv2.imread(line_list[1])

try:
    img2_resized = cv2.resize(img2, (img1.shape[1], img1.shape[0]))
    dst = cv2.addWeighted(img1, float(line_list[3]), img2_resized, float(line_list[4]), 0)
    cv2.imwrite(cwd+'/'+line_list[5]+'/'+line_list[2]+line_list[6], dst)
    print(True)
except:
   print(False)
