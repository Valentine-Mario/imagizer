var app=require("./app")

// app.BnW("../download2.jpg", "file", "../gateman/docs").then(file=>{
//     console.log(file)
// }).catch(err=>{console.log(err)})
app.resizeImg("../download2.jpg", "resize", "../gateman", 230).then(file=>{
    console.log(file)
})