const path = require("path");
const consoleTest = process.stdout
const fs = require("fs")
/*
 * Project: Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date: Oct 17, 2023
 * Author: Jordan Kennedy
 *
 */


// path constants
const IOhandler = require("./IOhandler");
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");

// unzip files, read unzipped files, add png to list, feed list into grayscale to gray out
// save to folder grayscale
IOhandler.unzip(zipFilePath, pathUnzipped)
    .then((data) => IOhandler.readDir(data))
    .then((data) => IOhandler.grayScale(data, pathProcessed))
    .catch((err) => (console.log(err)))

