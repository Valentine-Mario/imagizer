var chai = require('chai');
var should = chai.should();
var expect = chai.expect;
var ImgProcessing=require('../app')
var process=require('process')
var test_photo='download.jpg'
var test_photo2='download2.jpg'
var fs=require('fs')
var directory='test/processed'
const path = require('path');
const img_test='img_test'
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

    describe('Text on image', ()=>{
        it('should return path to cartoonized image', done=>{
            var filename='text-image';
            ImgProcessing.TextOver(test_photo, filename, directory, "text", '(0, 0, 0)', 0.9, 90, 90, "FONT_HERSHEY_SCRIPT_COMPLEX").then(img_path=>{
                should.equal(img_path, process.cwd()+'/test/processed/text-image.jpg');
                done()
            }).catch(err=>{
                console.log(err)
            })
        })
    })

    describe("Overlay image over another", ()=>{
        it("should overlay an image over another", done=>{
            var filename='overlay-image';
            ImgProcessing.OverLay(test_photo, test_photo2, filename, 0.9, 0.5, directory).then(img_path=>{
                should.equal(img_path, process.cwd()+'/test/processed/overlay-image.jpg');
                done()
            }).catch(err=>{
                console.log(err)
            })
        })
    })

    describe("create video from images",()=>{
        it("should create video from images", done=>{
            var filename="test_video";
            ImgProcessing.CreateVieo(img_test, filename, directory).then(video_path=>{
                should.equal(video_path, process.cwd()+'/test/processed/test_video.avi');
                done()
            }).catch(err=>{
                console.log(err)
            })
        })
    })

    describe("concatenate image vertically", ()=>{
        it("should concatenate images vertically", done=>{
            var filename="concat-image.jpg"
            ImgProcessing.ConcatImage(test_photo, test_photo2, filename, directory, 'vertical').then(img_path=>{
                done()
            }).catch(err=>{
                console.log(err)
            })
        })
    })

})