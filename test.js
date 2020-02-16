var app=require('./app')
app.resizeImg('jurasic.jpg', 'test', 'app', 300).then(image_path=>{
    console.log(image_path)
}).catch(err=>{ console.log(err) })
