const fsPromise = require("node:fs").promises;

/*
fsPromise.readFile("./fileSystem/file.txt")
.then((data) => {
    console.log(data.toString());
}).catch(error => {
    console.log(error);
});
*/

async function readFile(){
    try {
        const data = await fsPromise.readFile("./fileSystem/file.txt");
        console.log(data.toString(), "data");
    }catch(error){
        console.log(error);
    }
}

readFile();

// NOTE: Promise version of FileSystem is slower then the callbackVersion.