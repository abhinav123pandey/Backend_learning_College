[
    "node",
    "filename.js",
    "add",
    "1",
    "2"
]

const pr = process.argv[2];
const value1 = process.argv[3];
const value2 = process.argv[4];

if(pr == "add"){
    console.log(Number(value1)+Number(value2));
}

if(pr == "mul"){
    console.log(Number(value1)*Number(value2));
}