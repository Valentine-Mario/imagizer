import cv2, sys
lines = sys.stdin.readline().replace('\n','')
line_list=lines.split('\'')
import os
cwd = os.getcwd()


def dodgeV2(image, mask):
    return cv2.divide(image, 255-mask, scale=256)

def render(img_rgb):
    img_gray = cv2.cvtColor(img_rgb, cv2.COLOR_BGR2GRAY)
    img_blur = cv2.GaussianBlur(img_gray, (21,21), 0, 0)
    img_blend = cv2.divide(img_gray, img_blur, scale=256)
    return img_blend

try:
    image = cv2.imread(line_list[0])
    img_gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
    img_gray_inv = 255 - img_gray
    img_blur = cv2.GaussianBlur(img_gray_inv, (21,21), 0, 0)
    img_blend = dodgeV2(img_gray, img_blur)
    sketch= cv2.cvtColor(render(image), cv2.COLOR_GRAY2RGB)
    cv2.imwrite(cwd+'/'+line_list[2]+'/'+line_list[1]+line_list[3], sketch)
    print(True)
except:
    print(False)