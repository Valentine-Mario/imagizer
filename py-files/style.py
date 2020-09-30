import cv2, sys, os
lines = sys.stdin.readline().replace('\n','')
line_list=lines.split('\'')
cwd = os.getcwd()
img = cv2.imread(line_list[0])


try:
    styled_img = cv2.stylization(img, sigma_s=10, sigma_r=0.15)
    cv2.imwrite(cwd+'/'+line_list[2]+'/'+line_list[1]+line_list[3], styled_img)
    print(True)
except:
    print(False)