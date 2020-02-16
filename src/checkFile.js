var path = require('path')
var fs=require('fs')

/** Check if the file exist or has the right file extension*/
class CheckFile{
    checkFileType(file){
        if(fs.existsSync(file)){
            var fileExt= path.extname(file)
        if(fileExt=='.png'||'.jpeg'||'.jpg'|| '.psd'|| '.raw'|| '.svg'){
            return {value:true, fleExt:fileExt};
        }else{
            return {value:false};
        }
        }else{
            return {value:false}
        }
    }
}
module.exports=new CheckFile()
