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
    .on("end", () => resolve("Extraction Complete!"))
})
}

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path
 *
 * @param {./unzipped} unzipPath
 * @return {promise}
 */

const readDir = (unzipPath) => {
  return new Promise((resolve, reject) => {
    const pathArray = []
    // readDir will return a buffer, so you need to return file.to string
    fs.readDir(unzipPath, (err, files) => {
          if (err){
            reject(err)
          } else {
            for(files of unzipPath) {
              if(".jpg" in path.extname(files)) {
                pathArray.push(files.toString())
              } else {
                resolve(null)
            } resolve(pathArray)
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

// pathin will be data returned by previous function
const grayScale = (pathIn, pathOut) => {
  return new Promise((resolve, reject) =>{

  })
};







module.exports = {
  unzip,
  readDir,
  grayScale,
};
