var app=require("./app");

// app.invertImgColor("../download2.jpg", "serv", "../chat-demo").then(path=>{
//     console.log(path)
// })

app.BnW("./img_test/download.jpg", "men", "../chat-demo").then(path=>{
    app.Cartoonize(path, "cartoon_bnw", "py-files").then(new_path=>{
        console.log(new_path)
       app.rotateImage(new_path, "rotate", "test", 180).then(final_path=>{
           console.log(final_path)
       })
    })
})