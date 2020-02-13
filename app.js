const imgProcessing=require('./module/src/image_processing')
// imgProcessing.resizeImg('fireball-unsplash.jpg', 'resized', 'processed', 100).then(val=>{
//     console.log(val)
// }).catch(err=>{console.log(err)})
// imgProcessing.BnW('fireball-unsplash.jpg', 'black-and-white', 'processed').then(val=>{
//     console.log(val)
// }).catch(err=>{console.log(err)})
//imgProcessing.rotateImage('fireball-unsplash.jpg', 'rotated', 'processed', -45)
//imgProcessing.BlurrImage('jurasic.jpg', 'blurred', 'processed')
imgProcessing.Cartoonize('jurasic.jpg', 'cartoon', 'processed').then(val=>{
    console.log(val)
}).catch(err=>{
    console.log(err)
})