var checkFile=require('./checkFile')
const {PythonShell} = require('python-shell')


class ImgProcessing{
    resizeImg(origin, filename, destination, width){
        if(origin==undefined|| filename==undefined|| destination==undefined|| width==undefined){
            console.log('please pass in all parameters')
        }else{
            var validImgCheck= checkFile.checkFileType(origin)
            if(validImgCheck.value==true){
                let pyshell = new PythonShell('module/py-files/resize.py');
     
            pyshell.send(''+origin+','+''+filename+','+destination+','+width +','+ validImgCheck.fleExt);     
            pyshell.on('message', function (message) {
            console.log('processing image...')
            console.log(message);
            });
            }else{
                console.log('please pass in a valid image')
            }
        } 
    }


    BnW(origin, filename, destination){
        if(origin==undefined|| filename==undefined|| destination==undefined){
            console.log('please pass in all parameters')
        }else{
            var validImgCheck= checkFile.checkFileType(origin)
            if(validImgCheck.value==true){
                let pyshell = new PythonShell('module/py-files/black-and-white.py');
     
            pyshell.send(''+origin+','+''+filename+','+destination+','+ validImgCheck.fleExt);     
            pyshell.on('message', function (message) {
            console.log('processing image...')
            console.log(message);
            });
            }else{
                console.log('please pass in a valid image')
            }
        } 
    }
}
module.exports=new ImgProcessing()