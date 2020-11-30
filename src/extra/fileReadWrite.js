// import * as RNFS from 'react-native-fs';

// var path=RNFS.DocumentDirectoryPath+'/test.text';

// //write the file
// RNFS.writeFile(path,'hjhjhjhgjhgj','utf8')
//         .then((success)=>{
//             console.log("Written")
//         }).catch((err)=>{
//             console.log(err)
//         })

        //write
 import FileSystem from 'react-native-filesystem';
 async function writeToFile() {
          const fileContents = 'This is a my content.';
          await FileSystem.writeToFile('my-directory/my-file.txt', fileContents);
          console.log('file is written');
        }
//read
async function readFile() {
    const fileContents = await FileSystem.readFile('my-directory/my-file.txt');
    console.log(`read from file: ${fileContents}`);
  }
//delete
async function deleteFile() {
    await FileSystem.delete('my-directory/my-file.txt');
    console.log('file is deleted');
  }
//exit
async function checkIfFileExists() {
    const fileExists = await FileSystem.fileExists('my-directory/my-file.txt');
    const directoryExists = await FileSystem.directoryExists('my-directory/my-file.txt');
    console.log(`file exists: ${fileExists}`);
    console.log(`directory exists: ${directoryExists}`);
  }

  writeToFile();