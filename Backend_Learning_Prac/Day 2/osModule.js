const os=require('os');

console.log("Plateform", os.platform);
console.log("arch",os.arch());
console.log("Memory",os.freemem());
// console.log("cpu",os.cpus());

const freeMemoryInGb =(os.freemem()/1024/1024/1024)
console.log("Free memory in Gb",freeMemoryInGb);