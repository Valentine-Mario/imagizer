# imagizer

Imagizer is an node js image processing library that harnesses the power of open CV to process images in JavaScript. It is built on Python Open CV and imutils so you don't have to use a powerful computer plus it's super fast.

* Before usage be sure to have python 3 and pip installed before using imagizer
* only jpg, jpeg, png, raw, psd and svg images are supported

## Features
- [x] Image resize
- [x] Image rotate
- [x] Convert Image to black and white
- [x] Blure out image
- [x] Cartoonise image
- [x] Text on image
- [x] Merge images together
- [x] Convert images to video
- [x] concat 2 images vertically orhorizontally

## Installation

```
npm i imagizer-javascript

```

## Usage

Before using the package, be sure to import it:

```
const imagizer=require('imagizer-javascript')

```
### Resizing an image

```
imagizer.resizeImg(image_path, new_file_name, folder_destination, resize_width).then(image_path=>{
    console.log(image_path)
}).catch(err=>{ console.log(err) })

```
#### sample image and resized image
![unprocessed image](https://res.cloudinary.com/rchain/image/upload/v1582042402/download.jpg)
![resized image](https://res.cloudinary.com/rchain/image/upload/v1582042745/test.jpg)

Note: All parameters are required


### Black and white image

```
imagizer.BnW(image_path, new_file_name, folder_destination).then(image_path=>{
    console.log(image_path)
}).catch(err=>{ console.log(err) })

```
#### sample image and black-white image
![unprocessed image](https://res.cloudinary.com/rchain/image/upload/v1582042402/download.jpg)
![black and white](https://res.cloudinary.com/rchain/image/upload/v1582042896/test2.jpg)
Note: All parameters are required

### Rotate Image

```
imagizer.rotateImage(image_path, new_file_name, folder_destination, rotate_angle).then(image_path=>{
    console.log(image_path)
}).catch(err=>{ console.log(err) })

```

#### sample image and rotated image (90 degree)
![unprocessed image](https://res.cloudinary.com/rchain/image/upload/v1582042402/download.jpg)
![black and white](https://res.cloudinary.com/rchain/image/upload/v1582043258/tester.jpg)
Note: All parameters are required

### Blure Image

```
imagizer.BlurrImage(image_path, new_file_name, folder_destination).then(image_path=>{
    console.log(image_path)
}).catch(err=>{ console.log(err) })

```
#### sample image and blured image
![unprocessed image](https://res.cloudinary.com/rchain/image/upload/v1582042402/download.jpg)
![blurred image](https://res.cloudinary.com/rchain/image/upload/v1582043702/blured.jpg)
Note: All parameters are required

### Cartonize Image

```
imagizer.Cartoonize(image_path, new_file_name, folder_destination).then(image_path=>{
    console.log(image_path)
}).catch(err=>{ console.log(err) })

```

#### sample image and cartoon image
![unprocessed image](https://res.cloudinary.com/rchain/image/upload/v1582042402/download.jpg)
![cartoon image](https://res.cloudinary.com/rchain/image/upload/v1582043805/cartoon.jpg)
Note: All parameters are required

### Text on image

```
imagizer.TextOver(image_path, new_file_name, folder_destination, text, rgb_for_text, text_size, X_coordinate, y_coordinate, text_font).then(image_path=>{
    console.log(image_path)
})

```

#### available font include:
* "FONT_HERSHEY_SIMPLEX"
* "FONT_HERSHEY_PLAIN"
* "FONT_HERSHEY_DUPLEX"
* "FONT_HERSHEY_COMPLEX"
* "FONT_HERSHEY_TRIPLEX"
* "FONT_HERSHEY_COMPLEX_SMALL"
* "FONT_HERSHEY_SCRIPT_SIMPLEX"
* "FONT_HERSHEY_SCRIPT_COMPLEX"
* "FONT_ITALIC"

### sample image and text image
![unprocessed image](https://res.cloudinary.com/rchain/image/upload/v1582042402/download.jpg)
![text image](https://res.cloudinary.com/rchain/image/upload/v1583495476/text.jpg)
Note:
* All parameters are required
* rgb should be sent as a string eg '(0, 0, 0)'
* text_size goes from 0.1 to greater (but for average text size, 0.5- 1 would be okay)
* To use the default rgb, let rgb be undefined


### Merge 2 images overlay

```
imagizer.OverLay(image_one, image_two, new_file_name, image_one_opacity, image_two_opacity, file_destination).then(img_path=>{
    console.log(img_path)
})

```

#### sample images
![unprocessed image](https://res.cloudinary.com/rchain/image/upload/v1582042402/download.jpg)
![unprocessed image 2](https://res.cloudinary.com/rchain/image/upload/v1584451137/download2.jpg)

##### resulting merged image
![overlay image](https://res.cloudinary.com/rchain/image/upload/v1584451148/overlay.jpg)
Note:
* All parameters are required
* opacity can take the values 0.1, 0.9, 1.3, etc 

### Create Video from Images

* This feature takes a folder that contains images and convert them to an avi video

```
imagizer.CreateVieo(image_folder, video_name, video_destination).then(video_path=>{
    console.log(video_path)
})
```
Note:
* All parameters are required
* The video always has an avi file extension

### Concatenate 2 images vertically or horizontally

* For vertical concatenation

```
 imagizer.ConcatImage(image_one, image_two, filename.jpg, file_destination, 'vertical').then(img_path=>{
                console.log(img_path)
            })
```
* For horizontal concatenation

```
imagizer.ConcatImage(image_one, image_two, new_filename.jpg, file_destination, 'horizontal').then(img_path=>{
                console.log(img_path)
            })
```

### resulting image
![vertical image](https://res.cloudinary.com/rchain/image/upload/v1588754378/stuff.jpg)
![horizontal image 2](https://res.cloudinary.com/rchain/image/upload/v1588754387/stuff2.jpg)

Note:
* All parameters are required
* Specify the file extenstion for the new file name


## Author 
[Valentine Oragbakosi](https://github.com/Valentine-Mario)