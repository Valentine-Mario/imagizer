# imagizer

Imagizer is an node js image processing library that harnesses the power of open CV to process images in JavaScript. It is built on Python Open CV and imutils so you don't have to use a powerful computer plus it's super fast.

* Before usage be sure to have python and pip installed before using imagizer
* only jpg, jpeg, png, raw, psd and svg images are supported

## Features
- [x] Image resize
- [x] Image rotate
- [x] Convert Image to black and white
- [x] Blure out image
- [x] Cartoonise image

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
Note: All parameters are required


### Black and white image

```
imagizer.BnW(image_path, new_file_name, folder_destination).then(image_path=>{
    console.log(image_path)
}).catch(err=>{ console.log(err) })

```
Note: All parameters are required

### Rotate Image

```
imagizer.rotateImage(image_path, new_file_name, folder_destination, rotate_angle).then(image_path=>{
    console.log(image_path)
}).catch(err=>{ console.log(err) })

```
Note: All parameters are required

### Blure Image

```
imagizer.BlurrImage(image_path, new_file_name, folder_destination).then(image_path=>{
    console.log(image_path)
}).catch(err=>{ console.log(err) })

```
Note: All parameters are required

### Cartonize Image

```
imagizer.Cartoonize(image_path, new_file_name, folder_destination).then(image_path=>{
    console.log(image_path)
}).catch(err=>{ console.log(err) })

```
Note: All parameters are required

## Author 
[Valentine Oragbakosi](https://github.com/Valentine-Mario)