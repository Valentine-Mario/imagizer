var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var ImgProcessing=require('../app')
var process=require('process')
var test_photo='jurasic.jpg'
var fs=require('fs')
var directory='test/processed'
const path = require('path');

describe('Imagizer Test', ()=>{
    afterEach('ensuring processed folder is empty', (done)=>{
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
          
            for (const file of files) {
              fs.unlink(path.join(directory, file), err => {
                if (err) throw err;
              });
            }
          });
        done();
    });

    describe('Resize Image', ()=>{
        it ('should return path to resized image',(done)=>{ 
            var filename='resized-image'           
            ImgProcessing.resizeImg(test_photo, filename, directory, 200).then(img_path=>{
                should.equal(img_path, process.cwd()+'/test/processed/resized-image.jpg');
                done()
            }).catch(err=>{
                console.log(err)
            })
        })
    });

    describe('Black and white image', ()=>{
        it('should return path to black and white image', (done)=>{
            var filename='bnw-image'           
            ImgProcessing.BnW(test_photo, filename, directory).then(img_path=>{
                should.equal(img_path, process.cwd()+'/test/processed/bnw-image.jpg');
                done()
            }).catch(err=>{
                console.log(err)
            })
        })
    })
    describe('Rotate image', ()=>{
        it('should return path to rotated image', done=>{
            var filename='rotated-image';
            ImgProcessing.rotateImage(test_photo, filename, directory, 90).then(img_path=>{
                should.equal(img_path, process.cwd()+'/test/processed/rotated-image.jpg');
                done()
            }).catch(err=>{
                console.log(err)
            })
        })
    })

    describe('Blurr image', ()=>{
        it('should return the path to blurred image', done=>{
            var filename='blurred-image';
            ImgProcessing.BlurrImage(test_photo, filename, directory).then(img_path=>{
                should.equal(img_path, process.cwd()+'/test/processed/blurred-image.jpg');
                done()
            }).catch(err=>{
                console.log(err)
            })
        })
    })

    describe('Cartonize image', ()=>{
        it('should return path to cartoonized image', done=>{
            var filename='cartoon-image';
            ImgProcessing.Cartoonize(test_photo, filename, directory).then(img_path=>{
                should.equal(img_path, process.cwd()+'/test/processed/cartoon-image.jpg');
                done()
            }).catch(err=>{
                console.log(err)
            })
        })
    })

})