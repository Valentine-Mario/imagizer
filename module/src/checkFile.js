var path = require('path')

class CheckFile{
    checkFileType(file){
        var fileExt= path.extname(file)
        if(fileExt=='.png'||'.jpeg'||'.jpg'|| '.psd'|| '.raw'|| '.svg'){
            return {value:true, fleExt:fileExt};
        }else{
            return {value:false};
        }
    }
}
module.exports=new CheckFile()