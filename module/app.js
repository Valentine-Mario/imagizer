const {PythonShell} = require('python-shell')
const imgProcessing=require('./src/image_processing')
let options = {
    scriptPath: 'module/py-files',
   
  };

//check if required dependecies exist
PythonShell.runString('import cv2; import imutils', null, (err)=>{
    if(err){
        console.log("downloading extra python dependecies required...")
        //script to require dependencies
        PythonShell.run('install-package.py', options, (err, result)=>{
            if(err)console.log(err)
            console.log(result)
        })            
    }else{
       imgProcessing.resizeImg('fireball-unsplash.jpg', 'resized', 'processed', 400)
    }
})