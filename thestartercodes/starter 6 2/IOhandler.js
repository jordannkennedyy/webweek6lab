/*
 * Project: Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 *
 * Created Date: Oct 11, 2023
 * Author: Jordan Kennedy
 *
 */

const unzipper = require("unzipper")
const fs = require("fs")
const PNG = require("pngjs")
const path = require("path");

/**
 * Description: decompress file from given pathIn, write to given pathOut
 *
 * @param {"./myfile.zip"} pathIn
 * @param {"./unzipped"} pathOut
 * @return {promise}
 */
const unzip = (pathIn, pathOut) => {
return new Promise((reject, resolve) => {
  fs.createReadStream(pathIn)
    .on("error", (err) => reject(err))
    .pipe(unzipper.Extract({pathOut}))
    .on("error", (err) => reject(err))
    .on("end", () => resolve("Extraction Complete!"))
})
}

unzip(pathIn, pathOut)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path
 *
 * @param {./unzipped} unzipPath
 * @return {promise}
 */
const readDir = (unzipPath) => {
  return new Promise((reject, resolve) => {
    fs.readDir(unzipPath, (err, files) => {
          if (err){
            reject(err)
          } else {
            if (".jpg" in path.extname(files)) {
              resolve(files)
            } else {
              resolve(null)
            }
          }
      })
    })
};

/**
 * Description: Read in png file by given pathIn,
 * convert to grayscale and write to given pathOut
 *
 * @param {string} filePath
 * @param {string} pathProcessed
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {};

module.exports = {
  unzip,
  readDir,
  grayScale,
};
