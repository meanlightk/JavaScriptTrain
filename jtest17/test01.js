// 파일 정보 탐색하기
"use strict";

const fs = require('fs');
const path = require('path');

const fileName = 'hello.txt';
const targetPath = path.join(__dirname, 'js');

const filePath = path.join(targetPath, fileName);
console.log(path.parse(filePath));

const isFilePath = (path, fileName, callback) => {
    fs.readdir(path, (err, files) => {
        if (err) return callback(err);

        let isHere = false;
        files.forEach(f => {
            if (f === fileName) isHere = true;
        });

        return callback(null, isHere);
    });
};

isFilePath(path.join(__dirname, 'js'), fileName, (err, isTrue) => {
    if (err || !isTrue) return console.log('파일을 읽을 수 없습니다');

    fs.stat(filePath, (err, fileInfo) => {
        if (err) return console.log(err);

        return console.log(fileInfo);
    });
});