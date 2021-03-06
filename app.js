var checkFile = require("./src/checkFile");
const { PythonShell } = require("python-shell");
var path = require("path");
const TEMPLATE_DIR = path.join(__dirname, "py-files");

/**
 * Image processing class that sends image path as string to the python file
 * for processing using opencv and imutils
 */
class Imagizer {
  /** Module to resize image;
   * Checks if the python dependencies are present before
   * the image is sent to be resized
   */
  resizeImg(origin, filename, destination, width) {
    return new Promise((res, rej) => {
      PythonShell.runString("import cv2; import imutils", null, (err) => {
        if (err) {
          throw new Error(
            "be sure to have open cv and imutils installed on your system"
          );
        } else {
          if (width == undefined) {
            throw new Error("provide width");
          }
          if (typeof width !== "number") {
            throw new Error("width should be a type of number");
          }
          if (origin == undefined || typeof origin !== "string") {
            throw new Error(" Provide path a valid image");
          }
          if (
            filename == undefined ||
            filename == "" ||
            typeof filename !== "string"
          ) {
            throw new Error("Provide a valid file name");
          }
          if (destination == undefined || typeof destination !== "string") {
            throw new Error("provide file destination");
          }

          var validImgCheck = checkFile.checkFileType(origin);
          if (validImgCheck.value == true) {
            origin = path.resolve(origin);
            let pyshell = new PythonShell(TEMPLATE_DIR + "/resize.py");
            pyshell.send(
              "" +
                origin +
                "'" +
                "" +
                filename +
                "'" +
                destination +
                "'" +
                width +
                "'" +
                validImgCheck.fleExt
            );
            pyshell.on("message", function (message) {
              if (message == "True") {
                if (destination == "") {
                  var file_path = path.resolve(
                    `${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                } else {
                  var file_path = path.resolve(
                    `${destination}/${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                }
              } else {
                throw new Error("error processing image");
              }
            });
          } else {
            throw new Error("please pass in a valid image");
          }
        }
      });
    });
  }

  /** Module for converting images to black and white using opencv
   * greyscale feature
   */

  BnW(origin, filename, destination) {
    return new Promise((res, rej) => {
      PythonShell.runString("import cv2; import imutils", null, (err) => {
        if (err) {
          throw new Error(
            "be sure to have open cv and imutils installed on your system"
          );
        } else {
          if (origin == undefined || typeof origin !== "string") {
            throw new Error(" Provide path for image");
          }
          if (
            filename == undefined ||
            filename == "" ||
            typeof filename !== "string"
          ) {
            throw new Error("Provide a valid file name");
          }
          if (destination == undefined || typeof destination !== "string") {
            throw new Error("provide file destination");
          }

          var validImgCheck = checkFile.checkFileType(origin);
          if (validImgCheck.value == true) {
            let pyshell = new PythonShell(TEMPLATE_DIR + "/black-and-white.py");
            origin = path.resolve(origin);
            pyshell.send(
              "" +
                origin +
                "'" +
                "" +
                filename +
                "'" +
                destination +
                "'" +
                validImgCheck.fleExt
            );
            pyshell.on("message", function (message) {
              if (message == "True") {
                if (destination == "") {
                  var file_path = path.resolve(
                    `${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                } else {
                  var file_path = path.resolve(
                    `${destination}/${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                }
              } else {
                throw new Error("error processing image");
              }
            });
          } else {
            throw new Error("please pass in a valid image");
          }
        }
      });
    });
  }

  /** Rotate image to an angel specified when calling the module
   * using imutils
   */

  rotateImage(origin, filename, destination, angle) {
    return new Promise((res, rej) => {
      PythonShell.runString("import cv2; import imutils", null, (err) => {
        if (err) {
          throw new Error(
            "be sure to have open cv and imutils installed on your system"
          );
        } else {
          if (angle == undefined) {
            throw new Error("provide angle");
          }
          if (typeof angle !== "number") {
            throw new Error("angle should be a type of number");
          }
          if (origin == undefined || typeof origin !== "string") {
            throw new Error(" Provide a valid path");
          }
          if (
            filename == undefined ||
            filename == "" ||
            typeof filename !== "string"
          ) {
            throw new Error("Provide file name");
          }
          if (destination == undefined || typeof destination !== "string") {
            throw new Error("provide file destination");
          }

          var validImgCheck = checkFile.checkFileType(origin);

          if (validImgCheck.value == true) {
            let pyshell = new PythonShell(TEMPLATE_DIR + "/rotate-img.py");
            origin = path.resolve(origin);
            pyshell.send(
              "" +
                origin +
                "'" +
                "" +
                filename +
                "'" +
                destination +
                "'" +
                validImgCheck.fleExt +
                "'" +
                angle
            );
            pyshell.on("message", function (message) {
              if (message == "True") {
                if (destination == "") {
                  var file_path = path.resolve(
                    `${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                } else {
                  var file_path = path.resolve(
                    `${destination}/${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                }
              } else {
                throw new Error("error processing image");
              }
            });
          } else {
            throw new Error("please pass in a valid image");
          }
        }
      });
    });
  }

  /**  Module to blurr out image  */

  BlurrImage(origin, filename, destination) {
    return new Promise((res, rej) => {
      PythonShell.runString("import cv2; import imutils", null, (err) => {
        if (err) {
          throw new Error(
            "be sure to have open cv and imutils installed on your system"
          );
        } else {
          if (origin == undefined || typeof origin !== "string") {
            throw new Error(" Provide path for image");
          }
          if (
            filename == undefined ||
            filename == "" ||
            typeof filename !== "string"
          ) {
            throw new Error("Provide file name");
          }
          if (destination == undefined || typeof destination !== "string") {
            throw new Error("provide file destination");
          }

          var validImgCheck = checkFile.checkFileType(origin);
          if (validImgCheck.value == true) {
            let pyshell = new PythonShell(TEMPLATE_DIR + "/blurr-img.py");
            origin = path.resolve(origin);
            pyshell.send(
              "" +
                origin +
                "'" +
                "" +
                filename +
                "'" +
                destination +
                "'" +
                validImgCheck.fleExt
            );
            pyshell.on("message", function (message) {
              if (message == "True") {
                if (destination == "") {
                  var file_path = path.resolve(
                    `${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                } else {
                  var file_path = path.resolve(
                    `${destination}/${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                }
              } else {
                throw new Error("error processing image");
              }
            });
          } else {
            throw new Error("please pass in a valid image");
          }
        }
      });
    });
  }

  /**
   *  Feature to Over lay an image over another
   */
  OverLay(
    origin_one,
    origin_two,
    filename,
    opacity_one,
    opacity_two,
    destination
  ) {
    return new Promise((res, rej) => {
      PythonShell.runString("import cv2; import imutils", null, (err) => {
        if (err) {
          throw new Error(
            "be sure to have open cv and imutils installed on your system"
          );
        } else {
          if (origin_one == undefined || typeof origin_one !== "string") {
            throw new Error("please pass a valid image path");
          }
          if (origin_two == undefined || typeof origin_two !== "string") {
            throw new Error("please pass a valid image path");
          }
          if (
            filename == undefined ||
            typeof filename !== "string" ||
            filename == ""
          ) {
            throw new Error("please pass in a valid filename");
          }
          if (opacity_one == undefined || typeof opacity_one !== "number") {
            throw new Error("please pass in a valid value for opacity");
          }
          if (opacity_two == undefined || typeof opacity_two !== "number") {
            throw new Error("please pass in a valid value for opacity");
          }
          if (destination == undefined || typeof destination !== "string") {
            throw new Error("please pass in a valid destination");
          }

          var validImgCheck = checkFile.checkFileType(origin_two);
          var validImgCheck2 = checkFile.checkFileType(origin_two);

          if (validImgCheck.value == true && validImgCheck2.value == true) {
            let pyshell = new PythonShell(TEMPLATE_DIR + "/overlay.py");
            origin_one = path.resolve(origin_one);
            origin_two = path.resolve(origin_two);
            pyshell.send(
              "" +
                origin_one +
                "'" +
                origin_two +
                "'" +
                filename +
                "'" +
                opacity_one +
                "'" +
                opacity_two +
                "'" +
                destination +
                "'" +
                validImgCheck.fleExt
            );
            pyshell.on("message", (message) => {
              if (message == "True") {
                if (destination == "") {
                  var file_path = path.resolve(
                    `${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                } else {
                  var file_path = path.resolve(
                    `${destination}/${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                }
              } else {
                throw new Error("error processing image");
              }
            });
          } else {
            throw new Error("be sure to pass in valid file paths");
          }
        }
      });
    });
  }

  /** Feature to Cartoonize image
   *
   */

  Cartoonize(origin, filename, destination) {
    return new Promise((res, rej) => {
      PythonShell.runString("import cv2; import imutils", null, (err) => {
        if (err) {
          throw new Error(
            "be sure to have open cv and imutils installed on your system"
          );
        } else {
          if (origin == undefined || typeof origin !== "string") {
            throw new Error(" Provide path for image");
          }
          if (
            filename == undefined ||
            filename == "" ||
            typeof filename !== "string"
          ) {
            throw new Error("Provide file name");
          }
          if (destination == undefined || typeof destination !== "string") {
            throw new Error("provide file destination");
          }

          var validImgCheck = checkFile.checkFileType(origin);
          if (validImgCheck.value == true) {
            let pyshell = new PythonShell(TEMPLATE_DIR + "/cartoon.py");
            origin = path.resolve(origin);
            pyshell.send(
              "" +
                origin +
                "'" +
                "" +
                filename +
                "'" +
                destination +
                "'" +
                validImgCheck.fleExt
            );
            pyshell.on("message", function (message) {
              if (message == "True") {
                if (destination == "") {
                  var file_path = path.resolve(
                    `${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                } else {
                  var file_path = path.resolve(
                    `${destination}/${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                }
              } else {
                throw new Error("error processing image");
              }
            });
          } else {
            throw new Error("please pass in a valid image");
          }
        }
      });
    });
  }

  /**
   * Feature to add text over image
   *
   */

  TextOver(
    origin,
    filename,
    destination,
    text,
    rgb,
    text_size,
    x_coord,
    y_coord,
    font
  ) {
    return new Promise((res, rej) => {
      PythonShell.runString("import cv2; import imutils", null, (err) => {
        if (err) {
          throw new Error(
            "be sure to have open cv and imutils installed on your system"
          );
        } else {
          if (origin == undefined || typeof origin !== "string") {
            throw new Error(" Provide path for image");
          }
          if (
            filename == undefined ||
            filename == "" ||
            typeof filename !== "string"
          ) {
            throw new Error("Provide file name");
          }
          if (destination == undefined || typeof destination !== "string") {
            throw new Error("provide file destination");
          }
          if (text == undefined) {
            throw new Error("provide text");
          }
          if (rgb == undefined) {
            rgb = "(0,0,0)";
          }
          if (typeof rgb !== "string") {
            throw new Error("rgb value must be in a string");
          }
          if (text_size == undefined || text_size == 0) {
            throw new Error("text size can't be undefined or 0");
          }
          if (typeof text_size !== "number") {
            throw new Error("text size must be a number");
          }
          if (x_coord == undefined) {
            throw new Error("x coordinate cannot be undefined");
          }
          if (typeof x_coord !== "number") {
            throw new Error("x coordinate must be a number");
          }
          if (y_coord == undefined) {
            throw new Error("y coordinate cannot be undefined");
          }
          if (typeof y_coord !== "number") {
            throw new Error("x coordinate must be a number");
          }
          if (font == undefined) {
            font = "FONT_HERSHEY_SIMPLEX";
          }
          var validImgCheck = checkFile.checkFileType(origin);
          if (validImgCheck.value == true) {
            let pyshell = new PythonShell(TEMPLATE_DIR + "/text-over-img.py");
            origin = path.resolve(origin);

            pyshell.send(
              "" +
                origin +
                "'" +
                "" +
                filename +
                "'" +
                destination +
                "'" +
                validImgCheck.fleExt +
                "'" +
                text +
                "'" +
                rgb +
                "'" +
                text_size +
                "'" +
                x_coord +
                "'" +
                y_coord +
                "'" +
                font
            );
            pyshell.on("message", function (message) {
              if (message == "True") {
                if (destination == "") {
                  var file_path = path.resolve(
                    `${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                } else {
                  var file_path = path.resolve(
                    `${destination}/${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                }
              } else {
                throw new Error("error processing image");
              }
            });
          } else {
            throw new Error("please pass in a valid image");
          }
        }
      });
    });
  }

  CreateVieo(imgFolder, videoName, destination) {
    return new Promise((res, rej) => {
      PythonShell.runString("import cv2; import PIL", null, (err) => {
        if (err) {
          throw new Error(
            "be sure to have open cv and pillow installed on your system"
          );
        } else {
          if (imgFolder == undefined || typeof imgFolder !== "string") {
            throw new Error(
              "image folder path cannot be undefined and must be a string"
            );
          }
          if (videoName == undefined || typeof videoName !== "string")
            throw new Error(
              "video name cannot be undefined and must be a string"
            );
          if (destination == undefined || typeof destination !== "string") {
            throw new Error("pass in a video destination as string");
          }
          let pyshell = new PythonShell(TEMPLATE_DIR + "/video_create.py");
          imgFolder = path.resolve(imgFolder);
          pyshell.send(
            "" + imgFolder + "'" + videoName + ".avi" + "'" + destination
          );
          pyshell.on("message", function (message) {
            if (message == "True") {
              if (destination == "") {
                var file_path = path.resolve(`${videoName}.avi`);
                res(file_path);
              } else {
                var file_path = path.resolve(`${destination}/${videoName}.avi`);
                res(file_path);
              }
            } else {
              throw new Error("error creating video");
            }
          });
        }
      });
    });
  }

  ConcatImage(image_one, image_two, filename, destination, concatType) {
    return new Promise((res, rej) => {
      PythonShell.runString("import cv2", null, (err) => {
        if (err) {
          throw new Error("be sure to have open cv installed on your system");
        } else {
          if (image_one == undefined || typeof image_one !== "string") {
            throw new Error("please pass in first image path");
          }
          if (image_two == undefined || typeof image_two !== "string") {
            throw new Error("please pass in second image path");
          }
          if (filename == undefined || typeof filename !== "string") {
            throw new Error("please provide a file name");
          }
          if (destination == undefined || typeof destination !== "string")
            throw new Error("please provide folder destination as string");
          if (concatType == undefined || typeof concatType !== "string") {
            throw new Error("concatination type must be a string");
          }
          if (concatType != "vertical" && concatType != "horizontal") {
            throw new Error(
              "concat type must be specified correctly either as vertical or horizontal"
            );
          }

          var validImgCheckOne = checkFile.checkFileType(image_one);
          var validImgCheckTwo = checkFile.checkFileType(image_two);

          if (
            validImgCheckOne.value == true &&
            validImgCheckTwo.value == true
          ) {
            let pyshell = new PythonShell(TEMPLATE_DIR + "/concat_img.py");
            image_one = path.resolve(image_one);
            image_two = path.resolve(image_two);

            pyshell.send(
              "" +
                image_one +
                "'" +
                image_two +
                "'" +
                filename +
                "'" +
                destination +
                "'" +
                concatType +
                "'" +
                validImgCheckOne.fleExt
            );
            pyshell.on("message", function (message) {
              if (message == "True") {
                if (destination == "") {
                  var file_path = path.resolve(
                    `${filename}${validImgCheckOne.fleExt}`
                  );
                  res(file_path);
                } else {
                  var file_path = path.resolve(
                    `${destination}/${filename}${validImgCheckOne.fleExt}`
                  );
                  res(file_path);
                }
              } else {
                throw new Error("error creating image");
              }
            });
          } else {
            throw new Error("please pass a valid image");
          }
        }
      });
    });
  }

  PencilSketchImg(origin, filename, destination) {
    return new Promise((res, rej) => {
      PythonShell.runString("import cv2; import imutils", null, (err) => {
        if (err) {
          throw new Error(
            "be sure to have open cv and imutils installed on your system"
          );
        } else {
          if (origin == undefined || typeof origin !== "string") {
            throw new Error(" Provide path for image");
          }
          if (
            filename == undefined ||
            filename == "" ||
            typeof filename !== "string"
          ) {
            throw new Error("Provide a valid file name");
          }
          if (destination == undefined || typeof destination !== "string") {
            throw new Error("provide file destination");
          }

          var validImgCheck = checkFile.checkFileType(origin);
          if (validImgCheck.value == true) {
            let pyshell = new PythonShell(TEMPLATE_DIR + "/sketch.py");
            origin = path.resolve(origin);
            pyshell.send(
              "" +
                origin +
                "'" +
                "" +
                filename +
                "'" +
                destination +
                "'" +
                validImgCheck.fleExt
            );
            pyshell.on("message", function (message) {
              if (message == "True") {
                if (destination == "") {
                  var file_path = path.resolve(
                    `${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                } else {
                  var file_path = path.resolve(
                    `${destination}/${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                }
              } else {
                throw new Error("error processing image");
              }
            });
          } else {
            throw new Error("please pass in a valid image");
          }
        }
      });
    });
  }

  generateBlankImg(filename, destination, img_height, img_width, rgb) {
    return new Promise((res, rej) => {
      PythonShell.runString("import cv2; import numpy", null, (err) => {
        if (err) {
          throw new Error(
            "be sure to have open cv and numpy installed on your system"
          );
        } else {
          if (
            filename == undefined ||
            filename == "" ||
            typeof filename !== "string"
          ) {
            throw new Error("Provide file name");
          }
          if (destination == undefined || typeof destination !== "string") {
            throw new Error("provide file destination");
          }
          if (rgb == undefined) {
            rgb = "(0,0,0)";
          }
          if (typeof rgb !== "string") {
            throw new Error("rgb value must be in a string");
          }
          if (img_height == undefined || typeof img_height !== "number") {
            throw new Error("provide valid image height");
          }
          if (img_width == undefined || typeof img_width !== "number") {
            throw new Error("provide valid image width");
          }

          let pyshell = new PythonShell(TEMPLATE_DIR + "/generate_image.py");
          pyshell.send(
            "" +
              filename +
              "'" +
              destination +
              "'" +
              img_height +
              "'" +
              img_width +
              "'" +
              rgb +
              "'" +
              ".jpg"
          );
          pyshell.on("message", function (message) {
            if (message == "True") {
              if (destination == "") {
                var file_path = path.resolve(`${filename}.jpg`);
                res(file_path);
              } else {
                var file_path = path.resolve(`${destination}/${filename}.jpg`);
                res(file_path);
              }
            } else {
              throw new Error("error processing image");
            }
          });
        }
      });
    });
  }

  generateBlankImgWithText(
    filename,
    destination,
    img_height,
    img_width,
    rgb_image,
    rgb_text,
    y_coord,
    x_coord,
    text,
    text_size,
    font
  ) {
    return new Promise((res, rej) => {
      PythonShell.runString("import cv2; import numpy", null, (err) => {
        if (err) {
          throw new Error(
            "be sure to have open cv and numpy installed on your system"
          );
        } else {
          if (
            filename == undefined ||
            filename == "" ||
            typeof filename !== "string"
          ) {
            throw new Error("Provide file name");
          }
          if (destination == undefined || typeof destination !== "string") {
            throw new Error("provide file destination");
          }
          if (rgb_image == undefined) {
            rgb = "(0,0,0)";
          }
          if (typeof rgb_image !== "string") {
            throw new Error("rgb value must be in a string");
          }
          if (img_height == undefined || typeof img_height !== "number") {
            throw new Error("provide valid image height");
          }
          if (img_width == undefined || typeof img_width !== "number") {
            throw new Error("provide valid image width");
          }
          if (rgb_text == undefined) {
            rgb = "(10,30,100)";
          }
          if (typeof rgb_text !== "string") {
            throw new Error("rgb value must be in a string");
          }
          if (text_size == undefined || text_size == 0) {
            throw new Error("text size can't be undefined or 0");
          }
          if (typeof text_size !== "number") {
            throw new Error("text size must be a number");
          }
          if (x_coord == undefined) {
            throw new Error("x coordinate cannot be undefined");
          }
          if (typeof x_coord !== "number") {
            throw new Error("x coordinate must be a number");
          }
          if (y_coord == undefined) {
            throw new Error("y coordinate cannot be undefined");
          }
          if (typeof y_coord !== "number") {
            throw new Error("x coordinate must be a number");
          }
          if (font == undefined) {
            font = "FONT_HERSHEY_SIMPLEX";
          }
          if (text == undefined) {
            throw new Error("provide text");
          }

          let pyshell = new PythonShell(
            TEMPLATE_DIR + "/generate_image_with_text.py"
          );
          pyshell.send(
            "" +
              filename +
              "'" +
              destination +
              "'" +
              img_height +
              "'" +
              img_width +
              "'" +
              rgb_image +
              "'" +
              rgb_text +
              "'" +
              y_coord +
              "'" +
              x_coord +
              "'" +
              text +
              "'" +
              text_size +
              "'" +
              font +
              "'" +
              ".jpg"
          );
          pyshell.on("message", function (message) {
            if (message == "True") {
              if (destination == "") {
                var file_path = path.resolve(`${filename}.jpg`);
                res(file_path);
              } else {
                var file_path = path.resolve(`${destination}/${filename}.jpg`);
                res(file_path);
              }
            } else {
              throw new Error("error processing image");
            }
          });
        }
      });
    });
  }

  drawShapeOverImg(
    origin,
    filename,
    destination,
    point1,
    point2,
    rgb,
    thickness,
    shape
  ) {
    return new Promise((res, rej) => {
      PythonShell.runString("import cv2;", null, (err) => {
        if (err) {
          throw new Error(
            "be sure to have open cv and imutils installed on your system"
          );
        } else {
          if (origin == undefined || typeof origin !== "string") {
            throw new Error("provide a valid file path");
          }
          if (
            filename == undefined ||
            typeof filename !== "string" ||
            typeof filename == ""
          ) {
            throw new Error("provide a valid filename");
          }
          if (destination == undefined || typeof destination !== "string") {
            throw new Error("provide valid destination");
          }
          if (point1 == undefined || typeof point1 !== "string") {
            throw new Error("provide point one as a string");
          }
          if (point2 == undefined || typeof point2 !== "string") {
            throw new Error(
              "provide point 2 if shape type is circle, it should be an int"
            );
          }
          if (rgb == undefined || typeof rgb !== "string") {
            throw new Error("provide rgb as string eg (0, 0, 0)");
          }
          if (
            thickness == undefined ||
            typeof thickness !== "number" ||
            thickness <= 0
          ) {
            throw new Error("provide thickness as int");
          }
          if (shape == undefined || typeof shape !== "string") {
            throw new Error("provide shape name as string");
          }
          var validImgCheck = checkFile.checkFileType(origin);
          if (validImgCheck.value == true) {
            let pyshell = new PythonShell(TEMPLATE_DIR + "/shape_on_img.py");
            origin = path.resolve(origin);
            pyshell.send(
              "" +
                origin +
                "'" +
                "" +
                filename +
                "'" +
                destination +
                "'" +
                point1 +
                "'" +
                point2 +
                "'" +
                rgb +
                "'" +
                thickness +
                "'" +
                shape +
                "'" +
                validImgCheck.fleExt
            );
            pyshell.on("message", function (message) {
              if (message == "True") {
                if (destination == "") {
                  var file_path = path.resolve(
                    `${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                } else {
                  var file_path = path.resolve(
                    `${destination}/${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                }
              } else {
                throw new Error("error processing image");
              }
            });
          } else {
            throw new Error("please pass in a valid image");
          }
        }
      });
    });
  }

  drawMarkerOnImg(
    origin,
    filename,
    destination,
    point,
    rgb,
    marker_type,
    marker_size,
    thickness
  ) {
    return new Promise((res, rej) => {
      PythonShell.runString("import cv2;", null, (err) => {
        if (err) {
          throw new Error(
            "be sure to have open cv and imutils installed on your system"
          );
        } else {
          if (origin == undefined || typeof origin !== "string") {
            throw new Error("provide a valid file path");
          }
          if (
            filename == undefined ||
            typeof filename !== "string" ||
            typeof filename == ""
          ) {
            throw new Error("provide a valid filename");
          }
          if (destination == undefined || typeof destination !== "string") {
            throw new Error("provide valid destination");
          }
          if (point == undefined || typeof point !== "string") {
            throw new Error("provide point one as a string");
          }
          if (rgb == undefined || typeof rgb !== "string") {
            throw new Error("provide rgb as string eg (0, 0, 0)");
          }
          if (
            thickness == undefined ||
            typeof thickness !== "number" ||
            thickness <= 0
          ) {
            throw new Error("provide thickness as int");
          }
          if (marker_type == undefined || typeof marker_type !== "string") {
            throw new Error("pass in a valid marker type");
          }
          if (marker_size == undefined || typeof marker_size !== "number") {
            throw new Error("pass in a valid marker size");
          }
          var validImgCheck = checkFile.checkFileType(origin);
          if (validImgCheck.value == true) {
            let pyshell = new PythonShell(TEMPLATE_DIR + "/marker_on_img.py");
            origin = path.resolve(origin);
            pyshell.send(
              "" +
                origin +
                "'" +
                "" +
                filename +
                "'" +
                destination +
                "'" +
                point +
                "'" +
                rgb +
                "'" +
                marker_type +
                "'" +
                marker_size +
                "'" +
                thickness +
                "'" +
                validImgCheck.fleExt
            );
            pyshell.on("message", function (message) {
              if (message == "True") {
                if (destination == "") {
                  var file_path = path.resolve(
                    `${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                } else {
                  var file_path = path.resolve(
                    `${destination}/${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                }
              } else {
                throw new Error("error processing image");
              }
            });
          } else {
            throw new Error("please pass in a valid image");
          }
        }
      });
    });
  }

  invertImgColor(origin, filename, destination) {
    return new Promise((res, rej) => {
      PythonShell.runString("import cv2;", null, (err) => {
        if (err) {
          throw new Error(
            "be sure to have open cv and imutils installed on your system"
          );
        } else {
          if (origin == undefined || typeof origin !== "string") {
            throw new Error("provide a valid file path");
          }
          if (
            filename == undefined ||
            typeof filename !== "string" ||
            typeof filename == ""
          ) {
            throw new Error("provide a valid filename");
          }
          if (destination == undefined || typeof destination !== "string") {
            throw new Error("provide valid destination");
          }
          var validImgCheck = checkFile.checkFileType(origin);
          if (validImgCheck.value == true) {
            let pyshell = new PythonShell(TEMPLATE_DIR + "/invert_img.py");
            origin = path.resolve(origin);
            pyshell.send(
              "" +
                origin +
                "'" +
                filename +
                "'" +
                destination +
                "'" +
                validImgCheck.fleExt
            );
            pyshell.on("message", function (message) {
              if (message == "True") {
                if (destination == "") {
                  var file_path = path.resolve(
                    `${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                } else {
                  var file_path = path.resolve(
                    `${destination}/${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                }
              } else {
                throw new Error("error processing image");
              }
            });
          } else {
            throw new Error("please pass in a valid image");
          }
        }
      });
    });
  }

  contrastImg(origin, filename, destination, contrast) {
    return new Promise((res, rej) => {
      PythonShell.runString("import cv2;", null, (err) => {
        if (err) {
          throw new Error(
            "be sure to have open cv and imutils installed on your system"
          );
        } else {
          if (origin === undefined || typeof origin !== "string") {
            throw new Error("please provide an origin path");
          }
          if (filename === undefined || typeof filename !== "string") {
            throw new Error("please provide a new file name");
          }
          if (destination === undefined || typeof destination !== "string") {
            throw new Error("please provide destination");
          }
          if (contrast === undefined || typeof contrast !== "number") {
            throw new Error("please provide a contrast value");
          }
          var validImgCheck = checkFile.checkFileType(origin);
          if (validImgCheck.value == true) {
            let pyshell = new PythonShell(TEMPLATE_DIR + "/contrast_img.py");
            origin = path.resolve(origin);
            pyshell.send(
              "" +
                origin +
                "'" +
                filename +
                "'" +
                destination +
                "'" +
                contrast +
                "'" +
                validImgCheck.fleExt
            );
            pyshell.on("message", function (message) {
              if (message == "True") {
                if (destination == "") {
                  var file_path = path.resolve(
                    `${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                } else {
                  var file_path = path.resolve(
                    `${destination}/${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                }
              } else {
                throw new Error("error processing image");
              }
            });
          } else {
            throw new Error("please pass in a valid image");
          }
        }
      });
    });
  }

  cropImg(origin, filename, destination, x1, x2, y1, y2) {
    return new Promise((res, rej) => {
      PythonShell.runString("import cv2;", null, (err) => {
        if (err) {
          throw new Error(
            "be sure to have open cv and imutils installed on your system"
          );
        } else {
          if (origin === undefined || typeof origin !== "string") {
            throw new Error("please provide an origin path");
          }
          if (filename === undefined || typeof filename !== "string") {
            throw new Error("please provide a new file name");
          }
          if (destination === undefined || typeof destination !== "string") {
            throw new Error("please provide destination");
          }
          if (
            x1 === undefined ||
            x2 === undefined ||
            y1 === undefined ||
            y2 === undefined
          ) {
            throw new Error("please provide values for x1, x2, y1 and y2");
          }
          var validImgCheck = checkFile.checkFileType(origin);
          if (validImgCheck.value == true) {
            let pyshell = new PythonShell(TEMPLATE_DIR + "/crop_img.py");
            origin = path.resolve(origin);
            pyshell.send(
              "" +
                origin +
                "'" +
                filename +
                "'" +
                destination +
                "'" +
                x1 +
                "'" +
                x2 +
                "'" +
                y1 +
                "'" +
                y2 +
                "'" +
                validImgCheck.fleExt
            );
            pyshell.on("message", function (message) {
              if (message == "True") {
                if (destination == "") {
                  var file_path = path.resolve(
                    `${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                } else {
                  var file_path = path.resolve(
                    `${destination}/${filename}${validImgCheck.fleExt}`
                  );
                  res(file_path);
                }
              } else {
                throw new Error("error processing image");
              }
            });
          } else {
            throw new Error("please pass in a valid image");
          }
        }
      });
    });
  }

  enhancePhoto(origin, filename, destination){
    return new Promise((res, rej) => {
        PythonShell.runString("import cv2;", null, (err) => {
          if (err) {
            throw new Error(
              "be sure to have open cv and imutils installed on your system"
            );
          } else {
            if (origin == undefined || typeof origin !== "string") {
              throw new Error("provide a valid file path");
            }
            if (
              filename == undefined ||
              typeof filename !== "string" ||
              typeof filename == ""
            ) {
              throw new Error("provide a valid filename");
            }
            if (destination == undefined || typeof destination !== "string") {
              throw new Error("provide valid destination");
            }
            var validImgCheck = checkFile.checkFileType(origin);
            if (validImgCheck.value == true) {
              let pyshell = new PythonShell(TEMPLATE_DIR + "/enhance.py");
              origin = path.resolve(origin);
              pyshell.send(
                "" +
                  origin +
                  "'" +
                  filename +
                  "'" +
                  destination +
                  "'" +
                  validImgCheck.fleExt
              );
              pyshell.on("message", function (message) {
                if (message == "True") {
                  if (destination == "") {
                    var file_path = path.resolve(
                      `${filename}${validImgCheck.fleExt}`
                    );
                    res(file_path);
                  } else {
                    var file_path = path.resolve(
                      `${destination}/${filename}${validImgCheck.fleExt}`
                    );
                    res(file_path);
                  }
                } else {
                  throw new Error("error processing image");
                }
              });
            } else {
              throw new Error("please pass in a valid image");
            }
          }
        });
      });
  }

  stylePhoto(origin, filename, destination){
    return new Promise((res, rej) => {
        PythonShell.runString("import cv2;", null, (err) => {
          if (err) {
            throw new Error(
              "be sure to have open cv and imutils installed on your system"
            );
          } else {
            if (origin == undefined || typeof origin !== "string") {
              throw new Error("provide a valid file path");
            }
            if (
              filename == undefined ||
              typeof filename !== "string" ||
              typeof filename == ""
            ) {
              throw new Error("provide a valid filename");
            }
            if (destination == undefined || typeof destination !== "string") {
              throw new Error("provide valid destination");
            }
            var validImgCheck = checkFile.checkFileType(origin);
            if (validImgCheck.value == true) {
              let pyshell = new PythonShell(TEMPLATE_DIR + "/style.py");
              origin = path.resolve(origin);
              pyshell.send(
                "" +
                  origin +
                  "'" +
                  filename +
                  "'" +
                  destination +
                  "'" +
                  validImgCheck.fleExt
              );
              pyshell.on("message", function (message) {
                if (message == "True") {
                  if (destination == "") {
                    var file_path = path.resolve(
                      `${filename}${validImgCheck.fleExt}`
                    );
                    res(file_path);
                  } else {
                    var file_path = path.resolve(
                      `${destination}/${filename}${validImgCheck.fleExt}`
                    );
                    res(file_path);
                  }
                } else {
                  throw new Error("error processing image");
                }
              });
            } else {
              throw new Error("please pass in a valid image");
            }
          }
        });
      });
  }
}
module.exports = new Imagizer();
