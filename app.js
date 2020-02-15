var checkFile=require('./src/checkFile')
const {PythonShell} = require('python-shell')
var path = require('path')  
const TEMPLATE_DIR = path.join(__dirname,  'py-files') 
let options = {
    scriptPath: TEMPLATE_DIR,
  };
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
                console.log("downloading extra python dependecies required...")
                //script to require dependencies
                PythonShell.run('install-package.py', options, (err, result)=>{
                    if(err)rej(err)
                    res(result)
                })            
            }else{
                    if(origin==undefined|| filename==undefined|| destination==undefined|| width==undefined){
                        rej('please pass in all parameters')
                    }else{
                        var validImgCheck= checkFile.checkFileType(origin)
                        if(validImgCheck.value==true){
                                let pyshell = new PythonShell(TEMPLATE_DIR+'/resize.py');
                                pyshell.send(''+origin+','+''+filename+','+destination+','+width +','+ validImgCheck.fleExt);     
                                pyshell.on('message', function (message) {
                                 if(message=='True'){
                                     res(cwd+`/${destination}/${filename}${validImgCheck.fleExt}`)
                                 }else{
                                     rej("error processing image")
                                 }
                                
                            })
                        }else{
                            rej('please pass in a valid image')
                        }
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
                    console.log("downloading extra python dependecies required...")
                    //script to require dependencies
                    PythonShell.run('install-package.py', options, (err, result)=>{
                        if(err)rej(err)
                        res(result)
                    })            
                }else{
            if(origin==undefined|| filename==undefined|| destination==undefined){
                rej('please pass in all parameters')
            }else{
                var validImgCheck= checkFile.checkFileType(origin)
                if(validImgCheck.value==true){
                        let pyshell = new PythonShell(TEMPLATE_DIR+'/black-and-white.py');
                        pyshell.send(''+origin+','+''+filename+','+destination+','+ validImgCheck.fleExt);     
                        pyshell.on('message', function (message) {
                        if(message=='True'){
                            res(cwd+`/${destination}/${filename}${validImgCheck.fleExt}`)
                        }else{
                            rej("error processing image")
                        }
                    })
                }else{
                    rej('please pass in a valid image')
                }
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
                    console.log("downloading extra python dependecies required...")
                    //script to require dependencies
                    PythonShell.run('install-package.py', options, (err, result)=>{
                        if(err)rej(err)
                        res(result)
                    })            
                }else{
            if(origin==undefined|| filename==undefined|| destination==undefined|| angle==undefined){
                rej('please pass in all parameters')
            }else{
                var validImgCheck= checkFile.checkFileType(origin)
                if(validImgCheck.value==true){
                        let pyshell = new PythonShell(TEMPLATE_DIR+'/rotate-img.py');
                        pyshell.send(''+origin+','+''+filename+','+destination+','+ validImgCheck.fleExt+','+angle);     
                        pyshell.on('message', function (message) {
                            if(message=='True'){
                                res(cwd+`/${destination}/${filename}${validImgCheck.fleExt}`)
                            }else{
                                rej("error processing image")
                            }
                });
                
                }else{
                    rej('please pass in a valid image')
                }
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
                    console.log("downloading extra python dependecies required...")
                    //script to require dependencies
                    PythonShell.run('install-package.py', options, (err, result)=>{
                        if(err)rej(err)
                        res(result)
                    })            
                }else{
            if(origin==undefined|| filename==undefined|| destination==undefined){
                rej('please pass in all parameters')
            }else{
                var validImgCheck= checkFile.checkFileType(origin)
                if(validImgCheck.value==true){
                        let pyshell = new PythonShell(TEMPLATE_DIR+'/blurr-img.py');
                        pyshell.send(''+origin+','+''+filename+','+destination+','+ validImgCheck.fleExt);     
                        pyshell.on('message', function (message) {
                            if(message=='True'){
                                res(cwd+`/${destination}/${filename}${validImgCheck.fleExt}`)
                            }else{
                                rej("error processing image")
                            }
                    })
                
                }else{
                    rej('please pass in a valid image')
                }
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
                    console.log("downloading extra python dependecies required...")
                    //script to require dependencies
                    PythonShell.run('install-package.py', options, (err, result)=>{
                        if(err)rej(err)
                        res(result)
                    })            
                }else{
            if(origin==undefined|| filename==undefined|| destination==undefined){
                rej('all parameters are required')
            }else{
                var validImgCheck= checkFile.checkFileType(origin)
                if(validImgCheck.value==true){
                        let pyshell = new PythonShell(TEMPLATE_DIR+'/cartoon.py');
                        pyshell.send(''+origin+','+''+filename+','+destination+','+ validImgCheck.fleExt);     
                        pyshell.on('message', function (message) {
                            if(message=='True'){
                                res(cwd+`/${destination}/${filename}${validImgCheck.fleExt}`)
                            }else{
                                rej("error processing image")
                            }
                         });
                
                }else{
                   rej('please pass in a valid image')
                }
            }
        }
    })
        })
        
    }
}
module.exports=new Imagizer()