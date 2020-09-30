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
- [x] Concat 2 images vertically orhorizontally
- [x] Convert an image to pencil sketch
- [x] generate blank image
- [x] generate blank image with text
- [x] draw shape over image
- [x] draw marker over image
- [x] invert image colour
- [x] change image contrast
- [x] crop image
- [x] enhance image
- [x] water color image

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
### sample image and text image
![unprocessed image](https://res.cloudinary.com/rchain/image/upload/v1582042402/download.jpg)
![text image](https://res.cloudinary.com/rchain/image/upload/v1583495476/text.jpg)
Note:
* All parameters are required
* rgb should be sent as a string eg '(0, 0, 0)'
* text_size goes from 0.1 to greater (but for average text size, 0.5- 1 would be okay)
* To use the default rgb, let rgb be undefined

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


### Pencil Sketch image

```
imagizer.PencilSketchImg(image_path, new_file_name, folder_destination).then(image_path=>{
    console.log(image_path)
}).catch(err=>{ console.log(err) })

```
#### sample image and pencil-sketch image
![unprocessed image](https://res.cloudinary.com/rchain/image/upload/v1582042402/download.jpg)
![sketch image](https://res.cloudinary.com/rchain/image/upload/v1591868931/hey.jpg)
Note: All parameters are required




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
 imagizer.ConcatImage(image_one, image_two, new_filename.jpg, file_destination, 'vertical').then(img_path=>{
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


### Generate blank image
* This feature helps you create a blank image

```
imagizer.generateBlankImg(new_filename, file_destination, img_height, img_width, background_rgb).then(image_path=>{
    console.log(image_path)
})

```
* All parameters are required
* set backgroung_rgb to undefined to use default rgb value
* rgb should be sent as a string eg '(0, 0, 0)'
* set rgb to "random" to use randomly generated rgb
* all generated image are have a ".jpg" file extension


### sample image
![sample image](https://res.cloudinary.com/rchain/image/upload/v1593812310/gen.jpg)

### Generate blank image with text
* This feature hekps you generate blank images with text over it

```
imagizer.generateBlankImgWithText(new_filename, file_destination, img_height, img_width, image_rgb, text_rgb, text_y_coordinate, text_x_coordinate, text, text_size, font).then(image_path=>{
    console.log(img_path)
})
```

* All parameters are required
* set rgb to undefined to use default rgb value
* rgb should be sent as a string eg '(0, 0, 0)'
* set rgb to "random" to use randomly generated rgb
* all generated image are have a ".jpg" file extension

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

### sample image
![sample image](https://res.cloudinary.com/rchain/image/upload/v1593812310/joe.jpg)

### Draw shape on image
* This feature helps draw sapes over images

```
imagizer.drawShapeOverImg(file_origin, new_filename, file_destination, point1, point2, rgb, thickness, shape).then(img_path=>{
    console.log(img_path)
})

```
* point 1 and point 2 take in string in the format (x, y) eg "(20, 100)". Point 1 is the starting point of the shape while point 2 is the ending point
* rgb takes in a string in the format "(0, 0, 0)". This is the rgb value of the shape
* thickness takes in an int that specifies the shape thickness (for most cases, 1-4 would suffice)
* shape takes in a string of the shape to be drawn which includes: "circle", "rectangle", "line", and "arrow"

### sample image
![sample image](https://res.cloudinary.com/rchain/image/upload/v1595505129/draw.jpg)


### Draw marker over image
* This feature adds a marker over image

```
imagizer.drawMarkerOnImg(file_origin, new_filename, file_destination, point, rgb, marker_type, marker_size, thickness).then(img_path=>{
    console.log(img_path)
})

```
* Point takes in string in the format "(10, 20)" which specifies the x and y coordinate
* rgb takes in a string in the format "(0, 0, 0)". This is the rgb value of the marker
* marker type is the marker type to be used. Available options include: "MARKER_CROSS", "MARKER_TILTED_CROSS", "MARKER_STAR", "MARKER_DIAMOND", "MARKER_SQUARE", "MARKER_TRIANGLE_UP", and "MARKER_TRIANGLE_DOWN"
* marker size takes in int that specifies the marker size
* thickness takes in an int that specifies the marker thickness (for most cases, 1-4 would suffice)

### sample image
![sample image](https://res.cloudinary.com/rchain/image/upload/v1595507759/draw2.jpg)

### Invert image color
* This feature inverts an image colour

```
imagizer.invertImgColor(file_origin, new_filename, file_destination)

```
### sample image
![sample image](https://res.cloudinary.com/rchain/image/upload/v1595509434/inverted.jpg)


### Change Image Contrast
* This feature changes the image contrast

```
imagizer.contrastImg(file_origin, new_filename, file_destination, contrast_value).then(img_path=>{
    console.log(img_path)
})

```
* Contrast value takes in a number usually between 1.0-5.0 based on your preference

### sample images
![unprocessed image](https://res.cloudinary.com/rchain/image/upload/v1582042402/download.jpg)
![contrast image](https://res.cloudinary.com/rchain/image/upload/v1599405645/contrast.jpg)


### Crop Image
* This feature crops an image

```
imagizer.cropImg(file_origin, new_filename, file_destination, x1, x2, y1, y2).then(img_path=>{
    console.log(img_path)
})
```
* x1, x2, y1, y2 values take in number parameters. It specifies the start and end point to be cropped eg start from coordinate x1:y1 and end in the coordinate x2:y2

### sample images
![unprocessed image](https://res.cloudinary.com/rchain/image/upload/v1582042402/download.jpg)
![cropped image](https://res.cloudinary.com/rchain/image/upload/v1599406025/crop.jpg)


### Enhance Image
* Enhance image quality

```
imagizer.enhancePhoto(file_origin, new_filename, file_destination).then((img_path) => {
        console.log(img_path)
    })
```

### sample images
![unprocessed image](https://res.cloudinary.com/rchain/image/upload/v1582042402/download.jpg)
![enhanced image](https://res.cloudinary.com/rchain/image/upload/v1601475832/enhanced.jpg)

### Water color image
* Give image a water color effect

```
imagizer.stylePhoto(file_origin, new_filename, file_destination).then(img_path=>{
    console.log(img_path)
})

```
### sample images
![unprocessed image](https://res.cloudinary.com/rchain/image/upload/v1582042402/download.jpg)
![water color image](https://res.cloudinary.com/rchain/image/upload/v1601476116/styled.jpg)

## Author 
[Valentine Oragbakosi](https://github.com/Valentine-Mario)