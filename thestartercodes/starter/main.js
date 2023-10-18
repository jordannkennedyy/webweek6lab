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

IOhandler.unzip(zipFilePath, pathUnzipped)
    .then((data) => IOhandler.readDir(data))
    .then((data) => IOhandler.grayScale(data, pathProcessed))
    .catch((err) => (console.log(err)))

