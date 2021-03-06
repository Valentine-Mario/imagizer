var chai = require("chai");
var should = chai.should();
var expect = chai.expect;
var ImgProcessing = require("../app");
var process = require("process");
var test_photo = "img_test/download.jpg";
var test_photo2 = "img_test/download2.jpg";
var fs = require("fs");
var directory = "test/processed";
const path = require("path");
const img_test = "img_test";
describe("Imagizer Test", () => {
  afterEach("ensuring processed folder is empty", (done) => {
    fs.readdir(directory, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join(directory, file), (err) => {
          if (err) throw err;
        });
      }
    });
    done();
  });

  describe("Resize Image", () => {
    it("should return path to resized image", (done) => {
      var filename = "resized-image";
      ImgProcessing.resizeImg(test_photo, filename, directory, 200)
        .then((img_path) => {
          should.equal(
            img_path,
            process.cwd() + "/test/processed/resized-image.jpg"
          );
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  describe("Black and white image", () => {
    it("should return path to black and white image", (done) => {
      var filename = "bnw-image";
      ImgProcessing.BnW(test_photo, filename, directory)
        .then((img_path) => {
          should.equal(
            img_path,
            process.cwd() + "/test/processed/bnw-image.jpg"
          );
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
  describe("Rotate image", () => {
    it("should return path to rotated image", (done) => {
      var filename = "rotated-image";
      ImgProcessing.rotateImage(test_photo, filename, directory, 90)
        .then((img_path) => {
          should.equal(
            img_path,
            process.cwd() + "/test/processed/rotated-image.jpg"
          );
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  describe("Blurr image", () => {
    it("should return the path to blurred image", (done) => {
      var filename = "blurred-image";
      ImgProcessing.BlurrImage(test_photo, filename, directory)
        .then((img_path) => {
          should.equal(
            img_path,
            process.cwd() + "/test/processed/blurred-image.jpg"
          );
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  describe("pencil sketch image", () => {
    it("should pencil sketch image", (done) => {
      var filename = "sketch-image";
      ImgProcessing.BlurrImage(test_photo, filename, directory)
        .then((img_path) => {
          should.equal(
            img_path,
            process.cwd() + "/test/processed/sketch-image.jpg"
          );
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  describe("Cartonize image", () => {
    it("should return path to cartoonized image", (done) => {
      var filename = "cartoon-image";
      ImgProcessing.Cartoonize(test_photo, filename, directory)
        .then((img_path) => {
          should.equal(
            img_path,
            process.cwd() + "/test/processed/cartoon-image.jpg"
          );
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  describe("Text on image", () => {
    it("should return path to cartoonized image", (done) => {
      var filename = "text-image";
      ImgProcessing.TextOver(
        test_photo,
        filename,
        directory,
        "text",
        "(0, 0, 0)",
        0.9,
        90,
        90,
        "FONT_HERSHEY_SCRIPT_COMPLEX"
      )
        .then((img_path) => {
          should.equal(
            img_path,
            process.cwd() + "/test/processed/text-image.jpg"
          );
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  describe("Overlay image over another", () => {
    it("should overlay an image over another", (done) => {
      var filename = "overlay-image";
      ImgProcessing.OverLay(
        test_photo,
        test_photo2,
        filename,
        0.9,
        0.5,
        directory
      )
        .then((img_path) => {
          should.equal(
            img_path,
            process.cwd() + "/test/processed/overlay-image.jpg"
          );
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  describe("create video from images", () => {
    it("should create video from images", (done) => {
      var filename = "test_video";
      ImgProcessing.CreateVieo(img_test, filename, directory)
        .then((video_path) => {
          should.equal(
            video_path,
            process.cwd() + "/test/processed/test_video.avi"
          );
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  describe("concatenate image vertically", () => {
    it("should concatenate images vertically", (done) => {
      var filename = "concat-image";
      ImgProcessing.ConcatImage(
        test_photo,
        test_photo2,
        filename,
        directory,
        "vertical"
      )
        .then((img_path) => {
          should.equal(
            img_path,
            process.cwd() + "/test/processed/concat-image.jpg"
          );
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  describe("generate blank image", () => {
    it("should generate blank image", (done) => {
      var filename = "blank";
      ImgProcessing.generateBlankImg(
        filename,
        directory,
        300,
        500,
        "(10, 20, 200)"
      )
        .then((img_path) => {
          should.equal(img_path, process.cwd() + "/test/processed/blank.jpg");
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  describe("generate blank image with text", () => {
    it("should generate blaqnk image with text", (done) => {
      var filename = "blank_text";
      ImgProcessing.generateBlankImgWithText(
        filename,
        directory,
        300,
        500,
        "(200, 0, 1)",
        "(120, 12, 23)",
        34,
        12,
        "hello world",
        23,
        "FONT_HERSHEY_DUPLEX"
      )
        .then((img_path) => {
          should.equal(
            img_path,
            process.cwd() + "/test/processed/blank_text.jpg"
          );
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  describe("shape on image", () => {
    it("should draw shape over image", (done) => {
      var filename = "draw";
      ImgProcessing.drawShapeOverImg(
        test_photo,
        filename,
        directory,
        "(20, 100)",
        "(40, 150)",
        "(0, 0, 0)",
        2,
        "arrow"
      )
        .then((img_path) => {
          should.equal(img_path, process.cwd() + "/test/processed/draw.jpg");
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  describe("draw marker on image", () => {
    it("should draw marker on image", (done) => {
      var filename = "draw2";
      ImgProcessing.drawMarkerOnImg(
        test_photo,
        filename,
        directory,
        "(23, 100)",
        "(0,0,0)",
        "MARKER_STAR",
        30,
        2
      )
        .then((img_path) => {
          should.equal(img_path, process.cwd() + "/test/processed/draw2.jpg");
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  describe("invert image color", () => {
    it("should invert image colour", (done) => {
      var filename = "inverted";
      ImgProcessing.invertImgColor(test_photo, filename, directory)
        .then((img_path) => {
          should.equal(
            img_path,
            process.cwd() + "/test/processed/inverted.jpg"
          );
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  describe("contrast image", () => {
    it("should contrast image", (done) => {
      var filename = "contrast";
      ImgProcessing.contrastImg(test_photo, filename, directory, 2.1)
        .then((img_path) => {
          should.equal(
            img_path,
            process.cwd() + "/test/processed/contrast.jpg"
          );
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  describe("crop image", () => {
    it("should crop the image", (done) => {
      var filename = "crop";
      ImgProcessing.cropImg(test_photo, filename, directory, 23, 300, 450, 600)
        .then((img_path) => {
          should.equal(img_path, process.cwd() + "/test/processed/crop.jpg");
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  describe("enhance image", () => {
    it("should enhance image", (done) => {
      var filename = "enhanced";
      ImgProcessing.enhancePhoto(test_photo, filename, directory)
        .then((img_path) => {
          should.equal(
            img_path,
            process.cwd() + "/test/processed/enhanced.jpg"
          );
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });

  describe("style image", () => {
    it("should water colour image", (done) => {
      var filename = "styled";
      ImgProcessing.stylePhoto(test_photo, filename, directory)
        .then((img_path) => {
          should.equal(img_path, process.cwd() + "/test/processed/styled.jpg");
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  });
});
