const imgProcessing=require('./module/src/image_processing')
//imgProcessing.resizeImg('fireball-unsplash.jpg', 'resized', 'processed', 100)
imgProcessing.BnW('fireball-unsplash.jpg', 'black-and-white', 'processed')
