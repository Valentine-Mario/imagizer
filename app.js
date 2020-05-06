var checkFile=require('./src/checkFile')
const {PythonShell} = require('python-shell')
var path = require('path')  
const TEMPLATE_DIR = path.join(__dirname,  'py-files') 
const fs=require("fs")
var process=require('process');
var cwd=process.cwd(); 


/** 
 * Image processing class that sends image path as string to the python file 
 * for processing using opencv and imutils
 */
class Imagizer{
    
    /** Module to resize image;
     * Checks if the python dependencies are present before 
     * the image is sent to be resized
     */
    resizeImg(origin, filename, destination, width){
        return new Promise((res, rej)=>{

        PythonShell.runString('import cv2; import imutils', null, (err)=>{
            if(err){
                throw new Error("be sure to have open cv and imutils installed on your system")
            }else{
                if(width==undefined)  { throw new Error('provide width'); }
                if(typeof(width)!=='number') {throw new Error('width should be a type of number')}
                if(origin==undefined||typeof(origin)!=='string') { throw new Error(' Provide path a valid image')}
                if(filename==undefined || filename==''|| typeof(filename)!=="string") {throw new Error('Provide a valid file name')}
                if(destination == undefined|| typeof(destination)!=='string') {throw new Error('provide file destination')}

                        var validImgCheck= checkFile.checkFileType(origin)
                            if(validImgCheck.value==true){
                                let pyshell = new PythonShell(TEMPLATE_DIR+'/resize.py');
                                pyshell.send(''+origin+'\''+''+filename+'\''+destination+'\''+width +'\''+ validImgCheck.fleExt);     
                                pyshell.on('message', function (message) {
                                 if(message=='True'){
                                     res(cwd+`/${destination}/${filename}${validImgCheck.fleExt}`)
                                 }else{
                                    throw new Error("error processing image")
                                 }
                            })
                        }else{
                            throw new Error('please pass in a valid image')
                        }   
                    }
                })
            })
            }

    /** Module for converting images to black and white using opencv
     * greyscale feature
     */


    BnW(origin, filename, destination){
        return new Promise((res, rej)=>{
            PythonShell.runString('import cv2; import imutils', null, (err)=>{
                if(err){
                    throw new Error("be sure to have open cv and imutils installed on your system")              
                }else{
           
                if(origin==undefined||typeof(origin)!=='string') { throw new Error(' Provide path for image')}
                if(filename==undefined || filename==''|| typeof(filename)!=="string") {throw new Error('Provide a valid file name')}
                if(destination == undefined || typeof(destination)!=='string') {throw new Error('provide file destination')}

                var validImgCheck= checkFile.checkFileType(origin)
                if(validImgCheck.value==true){
                        let pyshell = new PythonShell(TEMPLATE_DIR+'/black-and-white.py');
                        pyshell.send(''+origin+'\''+''+filename+'\''+destination+'\''+ validImgCheck.fleExt);     
                        pyshell.on('message', function (message) {
                        if(message=='True'){
                            res(cwd+`/${destination}/${filename}${validImgCheck.fleExt}`)
                        }else{
                            throw new Error("error processing image")
                        }
                    })
                }else{
                    throw new Error('please pass in a valid image')
                }
            
                }
            })

        })
                
    }

    /** Rotate image to an angel specified when calling the module
     * using imutils
    */

    rotateImage(origin, filename, destination, angle){
        return new Promise((res, rej)=>{
            PythonShell.runString('import cv2; import imutils', null, (err)=>{
                if(err){
                    throw new Error("be sure to have open cv and imutils installed on your system")                                            
                }else{
                    if(angle==undefined)  { throw new Error('provide angle'); }
                    if(typeof(angle)!=='number') {throw new Error('angle should be a type of number')}
                    if(origin==undefined ||typeof(origin)!=='string') { throw new Error(' Provide a valid path')}
                    if(filename==undefined || filename==''|| typeof(filename)!=="string") {throw new Error('Provide file name')}
                    if(destination == undefined || typeof(destination)!=='string') {throw new Error('provide file destination')}

                        var validImgCheck= checkFile.checkFileType(origin)
                       
                            if(validImgCheck.value==true){
                                let pyshell = new PythonShell(TEMPLATE_DIR+'/rotate-img.py');
                                pyshell.send(''+origin+'\''+''+filename+'\''+destination+'\''+ validImgCheck.fleExt+'\''+angle);     
                                pyshell.on('message', function (message) {
                                    if(message=='True'){
                                        res(cwd+`/${destination}/${filename}${validImgCheck.fleExt}`)
                                    }else{
                                        throw new Error("error processing image")
                                    }
                        });
                        
                        }else{
                            throw new Error('please pass in a valid image')
                        }   
                }
            })
                })
            }

    /**  Module to blurr out image  */

    BlurrImage(origin, filename, destination){
        return new Promise((res, rej)=>{
             PythonShell.runString('import cv2; import imutils', null, (err)=>{
                if(err){
                    throw new Error("be sure to have open cv and imutils installed on your system")                         
                }else{

                    if(origin==undefined ||typeof(origin)!=='string') { throw new Error(' Provide path for image')}
                    if(filename==undefined || filename==''|| typeof(filename)!=="string") {throw new Error('Provide file name')}
                    if(destination == undefined || typeof(destination)!=='string') {throw new Error('provide file destination')}

                var validImgCheck= checkFile.checkFileType(origin)
                if(validImgCheck.value==true){
                        let pyshell = new PythonShell(TEMPLATE_DIR+'/blurr-img.py');
                        pyshell.send(''+origin+'\''+''+filename+'\''+destination+'\''+ validImgCheck.fleExt);     
                        pyshell.on('message', function (message) {
                            if(message=='True'){
                                res(cwd+`/${destination}/${filename}${validImgCheck.fleExt}`)
                            }else{
                                throw new Error("error processing image")
                            }
                    })
                
                }else{
                    throw new Error('please pass in a valid image')
                }
             
        }
    })
        })
    }

    /**
     *  Feature to Over lay an image over another 
     */
    OverLay(origin_one, origin_two, filename, opacity_one, opacity_two, destination){
        return new Promise((res, rej)=>{
            PythonShell.runString('import cv2; import imutils', null, (err)=>{
                if(err){
                    throw new Error("be sure to have open cv and imutils installed on your system")
                }else{
                    if(origin_one==undefined||typeof(origin_one)!=="string"){throw new Error("please pass a valid image path")}
                    if(origin_two==undefined||typeof(origin_two)!=="string"){throw new Error("please pass a valid image path")}
                    if(filename==undefined||typeof(filename)!=="string"|| filename==''){throw new Error("please pass in a valid filename")}
                    if(opacity_one==undefined||typeof(opacity_one)!=='number'){throw new Error("please pass in a valid value for opacity")}
                    if(opacity_two==undefined||typeof(opacity_two)!=='number'){throw new Error("please pass in a valid value for opacity")}
                    if(destination==undefined|| typeof(destination)!=="string"){throw new Error("please pass in a valid destination")}
                
                    var validImgCheck= checkFile.checkFileType(origin_two)
                    var validImgCheck2=checkFile.checkFileType(origin_two)

                    if(validImgCheck.value==true && validImgCheck2.value==true){
                        let pyshell=new PythonShell(TEMPLATE_DIR+'/overlay.py');
                        pyshell.send(''+origin_one+'\''+origin_two+'\''+filename+'\''+opacity_one+'\''+opacity_two+'\''+destination+'\''+validImgCheck.fleExt)
                        pyshell.on('message', (message)=>{
                            if(message=="True"){
                                res(cwd+`/${destination}/${filename}${validImgCheck.fleExt}`)
                            }else{
                                throw new Error("error processing image")
                            }
                        })
                    }else{
                        throw new Error("be sure to pass in valid file paths")
                    }
                }
            })
        })
    }

    /** Feature to Cartoonize image 
     * 
     */

    Cartoonize(origin, filename, destination){
        return new Promise((res, rej)=>{
            PythonShell.runString('import cv2; import imutils', null, (err)=>{
                if(err){
                    throw new Error("be sure to have open cv and imutils installed on your system")                                     
                }else{
           
                    if(origin==undefined ||typeof(origin)!=="string") { throw new Error(' Provide path for image')}
                    if(filename==undefined || filename==''||typeof(filename)!=="string") {throw new Error('Provide file name')}
                    if(destination == undefined || typeof(destination)!=="string") {throw new Error('provide file destination')}

                        var validImgCheck= checkFile.checkFileType(origin)
                        if(validImgCheck.value==true){
                                let pyshell = new PythonShell(TEMPLATE_DIR+'/cartoon.py');
                                pyshell.send(''+origin+'\''+''+filename+'\''+destination+'\''+ validImgCheck.fleExt);     
                                pyshell.on('message', function (message) {
                                    if(message=='True'){
                                        res(cwd+`/${destination}/${filename}${validImgCheck.fleExt}`)
                                    }else{
                                        throw new Error("error processing image")
                                    }
                                });
                        
                        }else{
                        throw new Error('please pass in a valid image')
                        }
                      }
                    })
                })
                
            }

            /** 
             * Feature to add text over image 
     * 
     */

            TextOver(origin, filename, destination, text, rgb, text_size, x_coord, y_coord, font){
                return new Promise((res, rej)=>{
                    PythonShell.runString('import cv2; import imutils', null, (err)=>{
                        if(err){
                            throw new Error("be sure to have open cv and imutils installed on your system")                                     
                        }else{
                            if(origin==undefined ||typeof(origin)!=="string") { throw new Error(' Provide path for image')}
                            if(filename==undefined || filename==''||typeof(filename)!=="string") {throw new Error('Provide file name')}
                            if(destination == undefined || typeof(destination)!=="string" ) {throw new Error('provide file destination')}
                            if(text==undefined){throw new Error("provide text")}  
                            if(rgb==undefined){rgb='(0,0,0)'} 
                            if(typeof(rgb)!== 'string'){throw new Error('rgb value must be in a string')}   
                            if(text_size==undefined || text_size==0){throw new Error("text size can't be undefined or 0")}
                            if(typeof(text_size)!=='number'){throw new Error('text size must be a number')}
                            if(x_coord==undefined){throw new Error('x coordinate cannot be undefined')}
                            if(typeof(x_coord)!=='number'){throw new Error('x coordinate must be a number')}
                            if(y_coord==undefined){throw new Error('y coordinate cannot be undefined')}
                            if(typeof(y_coord)!=='number'){throw new Error('x coordinate must be a number')}
                            if(font==undefined){font="FONT_HERSHEY_SIMPLEX"}
                            var validImgCheck= checkFile.checkFileType(origin)
                        if(validImgCheck.value==true){
                                let pyshell = new PythonShell(TEMPLATE_DIR+'/text-over-img.py');
                                pyshell.send(''+origin+'\''+''+filename+'\''+destination+'\''+ validImgCheck.fleExt+'\''+
                                text+'\''+rgb+'\''+text_size+'\''+x_coord+'\''+y_coord+'\''+font);     
                                pyshell.on('message', function (message) {
                                    if(message=='True'){
                                        res(cwd+`/${destination}/${filename}${validImgCheck.fleExt}`)
                                    }else{
                                        throw new Error("error processing image")
                                    }
                                });
                        
                        }else{
                        throw new Error('please pass in a valid image')
                        }
                        }
                    })
                })
            }
          

            CreateVieo(imgFolder, videoName, destination){
                return new Promise((res, rej)=>{
                    PythonShell.runString('import cv2; import PIL', null, (err)=>{
                        if(err){
                            throw new Error("be sure to have open cv and pillow installed on your system")                                     
                        }else{
                            if(imgFolder==undefined||typeof(imgFolder)!=='string'){throw new Error("image folder path cannot be undefined and must be a string")}
                            if(videoName==undefined || typeof(videoName)!=='string')throw new Error("video name cannot be undefined and must be a string")
                            if(destination==undefined || typeof(destination)!=='string'){throw new Error("pass in a video destination as string")}
                            let pyshell=new PythonShell(TEMPLATE_DIR+'/video_create.py');
                            pyshell.send(''+imgFolder+'\''+videoName+'.avi'+'\''+destination);
                            pyshell.on('message', function(message){
                                
                                if(message=='True'){
                                    res(cwd+`/${destination}/${videoName}.avi`)
                                }else{
                                    throw new Error("error creating video")
                                }
                            })
                        }
                })
            })
        }

        ConcatImage(image_one, image_two, filename, destination, concatType){
            return new Promise((res, rej)=>{
                PythonShell.runString('import cv2', null, (err)=>{
                    if(err){
                        throw new Error("be sure to have open cv installed on your system")
                    }else{
                        if(image_one==undefined || typeof(image_one)!== 'string'){throw new Error("please pass in first image path")}
                        if(image_two==undefined || typeof(image_two)!== 'string'){throw new Error("please pass in second image path")}
                        if(filename==undefined || typeof(filename)!=='string'){throw new Error("please provide a file name")}
                        if(destination==undefined||typeof(destination)!=='string')throw new Error("please provide folder destination as string")
                        if(concatType==undefined||typeof(concatType)!=='string'){throw new Error("concatination type must be a string")}
                        if(concatType!='vertical'&& concatType!='horizontal'){throw new Error("concat type must be specified correctly either as vertical or horizontal")}

                        var validImgCheckOne= checkFile.checkFileType(image_one)
                        var validImgCheckTwo= checkFile.checkFileType(image_two)
                       
                            if(validImgCheckOne.value==true && validImgCheckTwo.value==true){
                                let pyshell=new PythonShell(TEMPLATE_DIR+'/concat_img.py');
                            pyshell.send(''+image_one+'\''+image_two+'\''+filename+'\''+destination+'\''+concatType);
                            pyshell.on('message', function(message){
                                if(message=='True'){
                                    res(cwd+`/${destination}/${filename}`)
                                }else{
                                    throw new Error("error creating image")
                                }
                            })
                            }else{
                                throw new Error("please pass a valid image")
                            }
                    }
                })
            })
        }
    }
module.exports=new Imagizer()