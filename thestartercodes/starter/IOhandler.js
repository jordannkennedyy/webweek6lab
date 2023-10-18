/*
 * Project: Milestone 1
 * File Name: IOhandler.js
 * Description: Collection of functions for files input/output related operations
 *
 * Created Date: Oct 17, 2023
 * Author: Jordan Kennedy
 *
 */

const unzipper = require("unzipper")
const fs = require("fs")
const PNG = require("pngjs").PNG
const path = require("path");

/**
 * Description: decompress file from given pathIn, write to given pathOut
 *
 * @param {string} pathIn
 * @param {string} pathOut
 * @return {promise}
 */
const unzip = (pathIn, pathOut) => {
return new Promise((resolve, reject) => {
  fs.createReadStream(pathIn)
    .on("error", (err) => reject(err))
    .pipe(unzipper.Extract({path: pathOut}))
    .on("error", (err) => reject(err))
    .on("end", () => resolve(pathOut))
})
}

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path
 *
 * @param {./unzipped} unzipPath
 * @return {promise}
 */

// read from unzipped path, add .png files into list with added path functionality, resolve list to to fed into grayscale
const readDir = (unzipPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(unzipPath, (err, files) => {
          if (err) {
            reject(err)
          } else {
            const pathArray = [];
            for (const item of files) {
              if (item.endsWith(".png")) {
                pathArray.push(path.join(__dirname, "\\unzipped", item))
              } 
            } console.log(pathArray) 
            resolve(pathArray)
        }
    } 
    )
  })
}
;

/**
 * Description: Read in png file by given pathIn,
 * convert to grayscale and write to given pathOut
 *
 * @param {string} filePath
 * @param {string} pathProcessed
 * @return {promise}
 */

// pathin will be data returned by previous readdir, loop each item, apply pngjs module to grayout image
// write to path out (grayscale folder) with new file name.
const grayScale = (pathIn, pathOut) => {
  return new Promise((resolve, reject) =>{
    for (var item of pathIn) {
      fs.createReadStream(item)
        .on("error", (err) => reject(err))
        .pipe(new PNG({filterType: 4}))
        .on("parsed", function() {
          for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
              var idx = (this.width * y + x) << 2; 

              const gray = (this.data[idx] + this.data[idx + 1] + this.data[idx + 2]) / 3
              this.data[idx] = gray;
              this.data[idx + 1] = gray;
              this.data[idx + 2] = gray;
          }
        } 
        this.pack().pipe(fs.createWriteStream(pathOut + "//gray.png"))
  
      }) .on("finish", () => resolve())
    } 

  })}


module.exports = {
  unzip,
  readDir,
  grayScale,
};
