//How Call Stack Works --

// Call Stack -- It works as a stack(lifo) but it seems and acts like it is working as queue(fifo) because it will hold only 1 commond at a time.


const a = ()=>{
    b();
    console.log("a");
};

const b = () => {
    console.log("b init");
    setTimeout(()=>{
        console.log("b process")
    },0);
    Promise.resolve().then(()=>{
        console.log("b promise portion");
    });
    console.log("b ended");
};

a();
console.log("Ended");

//Empty Stack
    // 1- a is pushed 
    // 2- b is pushed
    // 3- b is executed
    // 4- register useCallback
    // 5- b is poppped
    // 6- a is poppped
    // 7- last line executed


// MacroTask and MicroTask In EventLoop

//MacroTask -- Lower priority in EventLoop
//MicroTask -- Higher priority in EventLoop