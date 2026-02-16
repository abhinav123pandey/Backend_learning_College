import fs from "fs";

console.log("File System Module Practice");

//const fileContent = fs.readFileSync("file.txt","utf-8");

const readSyncFile = ()=>{
    //reading file Content
    const fileContent = fs.readFileSync("file.txt","utf-8");
    console.log("File Content:",fileContent);

    //wrting new content
    fs.writeFileSync("file.txt","New Content written");
    const newFileContent = fs.readFileSync("file.txt","utf-8");
    console.log("New File Content: ",newFileContent);

    //append new content in the file
    fs.appendFileSync("file.txt","\nNew Line");
    const newAppendedContent = fs.readFileSync("file.txt","utf-8")
    console.log("Appended Content: ",newAppendedContent);
}


const readAsyncFile = () => {
  fs.readFile("file.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("File Content:", data);

    fs.writeFile("file.txt", "New Content written", (err) => {
      if (err) throw err;

      fs.readFile("file.txt", "utf-8", (err, newData) => {
        if (err) throw err;
        console.log("New File Content:", newData);

        fs.appendFile("file.txt", "\nNew Line", (err) => {
          if (err) throw err;

          fs.readFile("file.txt", "utf-8", (err, finalData) => {
            if (err) throw err;
            console.log("Appended Content:", finalData);
          });
        });
      });
    });
  });
};


export default readAsyncFile;