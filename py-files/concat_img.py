import cv2, sys, os
lines = sys.stdin.readline().replace('\n','')
line_list=lines.split('\'')
cwd = os.getcwd()

im1 = cv2.imread(cwd+'/'+line_list[0])
im2 = cv2.imread(cwd+'/'+line_list[1])

def vconcat_resize_min(im_list, interpolation=cv2.INTER_CUBIC):
    w_min = min(im.shape[1] for im in im_list)
    im_list_resize = [cv2.resize(im, (w_min, int(im.shape[0] * w_min / im.shape[1])), interpolation=interpolation)
                      for im in im_list]
    return cv2.vconcat(im_list_resize)

def hconcat_resize_min(im_list, interpolation=cv2.INTER_CUBIC):
    h_min = min(im.shape[0] for im in im_list)
    im_list_resize = [cv2.resize(im, (int(im.shape[1] * h_min / im.shape[0]), h_min), interpolation=interpolation)
                      for im in im_list]
    return cv2.hconcat(im_list_resize)



if line_list[4]=='vertical':
    try:
        im_v_resize = vconcat_resize_min([im1, im2])
        cv2.imwrite(cwd+'/'+line_list[3]+'/'+line_list[2], im_v_resize)
        print(True)
    except:
        print(False)
else:
    try:
        im_h_resize = hconcat_resize_min([im1, im2])
        cv2.imwrite(cwd+'/'+line_list[3]+'/'+line_list[2], im_h_resize)
        print(True)
    except:
        print(False)


