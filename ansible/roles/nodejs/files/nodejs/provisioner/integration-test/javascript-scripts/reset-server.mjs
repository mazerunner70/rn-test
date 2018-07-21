import fs from 'fs';
import es from 'event-stream';
import path from 'path';
import childProcess from 'child_process';
import nodeTail from 'tail';

import expose from './expose';

// This section to read files from filesystem
// https://stackoverflow.com/questions/16010915/parsing-huge-logfiles-in-node-js-read-in-line-by-line?noredirect=1&lq=1
const spawn = childProcess.spawn;
const { __dirname } = expose;
// console.log('path', __dirname);

// stop old nodejs
function stopOldNodejs() {
  console.log('stopping node server');
  const stopNodejsProcess = spawn('npm', ['stop']);
  const responsePromise = new Promise((resolve, reject) => {
    stopNodejsProcess.stdout.setEncoding('utf8');
    stopNodejsProcess.stdout.on('data', (data) => {
      const str = data.toString();
      const found = str.match(/pkill/);
      // console.log(`+++${found}`);
      if (found) {
        console.log('stopped node server');
        resolve('stopped');
      }
      const lines = str.split(/(\r?\n)/g);
      console.log(lines.join(''));
    });
    stopNodejsProcess.stderr.on('data', (data) => {
      const str = data.toString();
      const found = str.match(/-debug.log/);
      // console.log(`+++${found}`);
      if (found) {
        resolve('not running');
      }
      const lines = str.split(/(\r?\n)/g);
      // console.log(lines.join(''));
    });
    // setTimeout(resolve, 1000);
  });
  return responsePromise;
}
// delete db if present
function deleteDb() {
  return new Promise((resolve, reject) => {
    const dbPath = path.resolve(__dirname, '../../db/provisioner.db');
    console.log(dbPath);
    if (fs.existsSync(dbPath)) {
      console.log('removing db');
      fs.unlink(dbPath, (err) => {
        if (err) return console.log(err);
        console.log('removed db');
        return resolve();
      });
    } else {
      console.log('db not present');
      return resolve();
    }
  });
}
function tailLogLines(targetText, fileName) {
  return new Promise((resolve, reject) => {
    const { Tail } = nodeTail;
    const tailedFile = new Tail(fileName);
    tailedFile.on('line', (data) => {
      console.log(data);
      if (data.match(targetText)) {
        console.log('matched');
        tailedFile.unwatch();
        resolve();
      }
    });
  });
}

// let lineNumber = 0;
// console.log(fileName);
// return new Promise((resolve, reject) => {
//   const stream = fs.createReadStream(fileName)
//     .pipe(es.split())
//     .pipe(es.mapSync((line) => {
//       stream.pause();
//       lineNumber += 1;
//       console.log(line);
//       // if (line.match(/Db set up/)) {
//       //   // console.log(line);
//       //   // stream.destroy();
//       //   // resolve();
//       // } else {
//       //   console.log('--', lineNumber, line);
//       stream.resume();
//       // }
//     })
//       .on('error', (err) => {
//         console.log('Error while reading file', err);
//       })
//       .on('end', () => {
//         console.log('read whole file');
//       }));
// });
// }

// start nodejs
async function startNodeJs() {
  return new Promise(async (resolve, reject) => {
    console.log('starting node server');
    const rightNow = new Date();
    const dateString = rightNow.toISOString().replace(/-/g, '').replace(/:/g, '').replace(/\..*$/g, '');
    // console.log(path.resolve(__dirname, '../logs', `test-${dateString}.log`));
    const outPath = path.resolve(__dirname, '../logs', `test-${dateString}.log`);
    const out = fs.openSync(outPath, 'a');
    const err = fs.openSync(path.resolve(__dirname, '../logs', `err-${dateString}.log`), 'a');
    const startNodejsProcess = spawn('npm', ['start'], {
      detached: true,
      stdio: ['ignore', out, err],
    });
    startNodejsProcess.unref();
    await tailLogLines('Db set up', outPath);
    console.log('started node server');
    resolve();
  });
}

async function doWork() {
  console.log('1');
  await stopOldNodejs();
  console.log('2');
  await deleteDb();
  console.log('3');
  await startNodeJs();
}

export default doWork;


