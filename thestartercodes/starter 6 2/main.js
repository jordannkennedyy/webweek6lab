const path = require("path");
const consoleTest = process.stdout
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
// IOhandler.readDir
    // .then()... 
    // .catch()... 
    // for each funciton in IOhandeler
// IOhandler.unzip
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");
const extracted = path.join(__dirname, "extracted");

IOhandler.unzip(zipFilePath, extracted)
    .then((data) => (IOhandler.readDir(data)))
    .then((data) => (console.log(data)))
    .catch((err) => (console.log(err)))

