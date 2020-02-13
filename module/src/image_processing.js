var checkFile=require('./checkFile')
const {PythonShell} = require('python-shell')
var process=require('process')
cwd=process.cwd();

class ImgProcessing{
    
    resizeImg(origin, filename, destination, width){
        return new Promise((res, rej)=>{
            if(origin==undefined|| filename==undefined|| destination==undefined|| width==undefined){
                rej('please pass in all parameters')
            }else{
                var validImgCheck= checkFile.checkFileType(origin)
                if(validImgCheck.value==true){
                        let pyshell = new PythonShell(cwd+'/module/py-files/resize.py');
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
        })
       
    }


    BnW(origin, filename, destination){
        return new Promise((res, rej)=>{
            if(origin==undefined|| filename==undefined|| destination==undefined){
                rej('please pass in all parameters')
            }else{
                var validImgCheck= checkFile.checkFileType(origin)
                if(validImgCheck.value==true){
                        let pyshell = new PythonShell(cwd+'/module/py-files/black-and-white.py');
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
        })
        
    }

    rotateImage(origin, filename, destination, angle){
        return new Promise((res, rej)=>{
            if(origin==undefined|| filename==undefined|| destination==undefined|| angle==undefined){
                rej('please pass in all parameters')
            }else{
                var validImgCheck= checkFile.checkFileType(origin)
                if(validImgCheck.value==true){
                        let pyshell = new PythonShell(cwd+'/module/py-files/rotate-img.py');
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
        })
    }

    BlurrImage(origin, filename, destination){
        return new Promise((res, rej)=>{
            if(origin==undefined|| filename==undefined|| destination==undefined){
                rej('please pass in all parameters')
            }else{
                var validImgCheck= checkFile.checkFileType(origin)
                if(validImgCheck.value==true){
                        let pyshell = new PythonShell(cwd+'/module/py-files/blurr-img.py');
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
        })
    }

    Cartoonize(origin, filename, destination){
        return new Promise((res, rej)=>{
            if(origin==undefined|| filename==undefined|| destination==undefined){
                rej('all parameters are required')
            }else{
                var validImgCheck= checkFile.checkFileType(origin)
                if(validImgCheck.value==true){
                        let pyshell = new PythonShell(cwd+'/module/py-files/cartoon.py');
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
        })
        
    }
}
module.exports=new ImgProcessing()