const path = require("path");
const consoleTest = process.stdout
const fs = require("fs")
/*
 * Project: Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date: Oct 11, 2023
 * Author: Jordan Kennedy
 *
 */

const IOhandler = require("./IOhandler");
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");
const extracted = path.join(__dirname, "extracted");

// IOhandler.unzip(zipFilePath, pathUnzipped)
//     .then((data) => IOhandler.readDir(data))
//     // .then((data) => IOhandler.grayScale(data, pathProcessed))
//     .catch((err) => (console.log(err)))

//     IOhandler.readDir
//     .then()... 
//     .catch()... 
//     for each funciton in IOhandeler
// IOhandler.unzip


// const readDir = (unzipPath) => {
//     return new Promise((resolve, reject) => {
//       fs.readdir(unzipPath, (err, files) => {
//             if (err) {
//               reject(err)
//             } else {
//               const pathArray = [];
//               for (const item of files) {
//                 if (item.endsWith(".png")) {
//                   pathArray.push(path.join(__dirname, item))
//                 } 
//               } console.log(pathArray) 
//               resolve(pathArray)
//           }
//       } 
//       )
//     })
//   }
//   ;

// let a = readDir(pathUnzipped)
// console.log(a)

let a = IOhandler.grayScale("./in.png", pathProcessed)
console.log(a)