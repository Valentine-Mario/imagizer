 
import os, sys
import cv2 
from PIL import Image 
lines = sys.stdin.readline().replace('\n','')
line_list=lines.split('\'')
cwd = os.getcwd()

# Checking the current directory path 

# Folder which contains all the images 
# from which video is to be generated 
#os.chdir("C:\\Python\\Geekfolder2") 
path = cwd+'/'+line_list[0]

mean_height = 0
mean_width = 0

num_of_images = len(os.listdir(path)) 
# print(num_of_images) 

for file in os.listdir(path): 
	im = Image.open(os.path.join(path, file)) 
	width, height = im.size 
	mean_width += width 
	mean_height += height 
	# im.show() # uncomment this for displaying the image 

# Finding the mean height and width of all images. 
# This is required because the video frame needs 
# to be set with same width and height. Otherwise 
# images not equal to that width height will not get 
# embedded into the video 
mean_width = int(mean_width / num_of_images) 
mean_height = int(mean_height / num_of_images) 

# print(mean_height) 
# print(mean_width) 

# Resizing of the images to give 
# them same width and height 
for file in os.listdir(path): 
	if file.endswith(".jpg") or file.endswith(".jpeg") or file.endswith("png"): 
		# opening image using PIL Image 
		im = Image.open(os.path.join(path, file)) 

		# im.size includes the height and width of image 
		width, height = im.size 

		# resizing 
		imResize = im.resize((mean_width, mean_height), Image.ANTIALIAS) 
		imResize.save( file, 'JPEG', quality = 95) # setting quality 
		# printing each resized image name 


# Video Generating function 
def generate_video(): 
	image_folder = '.' # make sure to use your folder 
	video_name =line_list[2]+'/'+line_list[1]#'mygeneratedvideo.avi'
	
	images = [img for img in os.listdir(image_folder) 
			if img.endswith(".jpg") or
				img.endswith(".jpeg") or
				img.endswith("png")] 
	
	# Array images should only consider 
	# the image files ignoring others if any 

	frame = cv2.imread(os.path.join(image_folder, images[0])) 

	# setting the frame width, height width 
	# the width, height of first image 
	height, width, layers = frame.shape 

	video = cv2.VideoWriter(video_name, 0, 1, (width, height)) 

	# Appending the images to the video one by one 
	for image in images: 
		video.write(cv2.imread(os.path.join(image_folder, image))) 
	
	# Deallocating memories taken for window creation 
	cv2.destroyAllWindows() 
	video.release() # releasing the video generated 


try:
    generate_video()
    print(True)
except:
    print(False)
