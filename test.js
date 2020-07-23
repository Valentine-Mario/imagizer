var app=require("./app")

// app.resizeImg("../download2.jpg", "file", "../gateman/docs", 100).then(file=>{
//     console.log(file)
// }).catch(err=>{console.log(err)})
app.drawMarkerOnImg("download.jpg", "draw2", "", "(50, 80)", "(0, 0, 0)", "MARKER_TILTED_CROSS ", 45, 2).then(file=>{
    console.log(file)
})