var checkFile=require('./src/checkFile')
const {PythonShell} = require('python-shell')
var path = require('path')  
const TEMPLATE_DIR = path.join(__dirname,  'py-files') 

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
                rej("be sure to have open cv and imutils installed on your system")
            }else{
                if(width==undefined)  { throw new Error('provide width'); }
                if(typeof(width)!=='number') {throw new Error('width should be a type of number')}
                if(origin==undefined) { throw new Error(' Provide path for image')}
                if(filename==undefined || filename=='') {throw new Error('Provide a valid file name')}
                if(destination == undefined) {throw new Error('provide file destination')}

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
                    rej("be sure to have open cv and imutils installed on your system")              
                }else{
           
                if(origin==undefined) { throw new Error(' Provide path for image')}
                if(filename==undefined || filename=='') {throw new Error('Provide a valid file name')}
                if(destination == undefined) {throw new Error('provide file destination')}

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
                    rej("be sure to have open cv and imutils installed on your system")                                            
                }else{
                    if(angle==undefined)  { throw new Error('provide angle'); }
                    if(typeof(angle)!=='number') {throw new Error('angle should be a type of number')}
                    if(origin==undefined) { throw new Error(' Provide path for image')}
                    if(filename==undefined || filename=='') {throw new Error('Provide file name')}
                    if(destination == undefined) {throw new Error('provide file destination')}

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
                    rej("be sure to have open cv and imutils installed on your system")                         
                }else{

                    if(origin==undefined) { throw new Error(' Provide path for image')}
                    if(filename==undefined || filename=='') {throw new Error('Provide file name')}
                    if(destination == undefined) {throw new Error('provide file destination')}

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

    /** Feature to Cartoonize image 
     * 
     */

    Cartoonize(origin, filename, destination){
        return new Promise((res, rej)=>{
            PythonShell.runString('import cv2; import imutils', null, (err)=>{
                if(err){
                    rej("be sure to have open cv and imutils installed on your system")                                     
                }else{
           
                    if(origin==undefined) { throw new Error(' Provide path for image')}
                    if(filename==undefined || filename=='') {throw new Error('Provide file name')}
                    if(destination == undefined) {throw new Error('provide file destination')}

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
        }
module.exports=new Imagizer()