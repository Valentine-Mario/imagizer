import numpy as np
import random, sys, os, cv2
lines = sys.stdin.readline().replace('\n','')
line_list=lines.split('\'')
cwd = os.getcwd()

if line_list[4].strip()=="random":
    rgb=(random.randrange(0, 255, 3), random.randrange(0, 255, 3), random.randrange(0, 255, 3))
else:
    rgb=eval(line_list[4])

try:
    height=int(line_list[2])
    width=int(line_list[3])
    blank_image = np.zeros((height,width,3), np.uint8)
    blank_image[:] = rgb
    cv2.imwrite(cwd+'/'+line_list[1]+'/'+line_list[0]+line_list[5], blank_image)
    print(True)
except:
    print(False)