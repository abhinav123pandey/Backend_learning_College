// To fetch the data using the Promise
// const fetchData = new Promise((resolve, reject)=>{
//     const success = false;

//     if(success){
//         resolve();
//         console.log("Data found");
//     }
//     else{
//         reject();
//         console.log("Data not found");
//     }
// }).catch(console.log("Data not found catched"));


// CallBack Hell
// const login = () => {
//     return new Promise((resolve) => {
//         resolve(true);
//     });
// };

// const userName = () => {
//     return new Promise((resolve) => {
//         resolve("Abhinav");
//     });
// };

// const welcome = (username) => {
//     return new Promise((resolve) => {
//         resolve("Welcome! " + username);
//     });
// };

// login().then(() => {
//     console.log("user logged in!");
//     userName().then((res) => {
//         console.log(res);
//         welcome(res).then((msg) => {
//             console.log(msg);
//         });
//     });
// });

// // Solution for CallBack Hell 
// login() .then(() => { 
//     console.log("user logged in!");
//      return userName(); 
//     }) 
//      .then((name) => {
//          console.log(name); 
//          return welcome(name);
//          }) 
//          .then((msg) => { 
//             console.log(msg);
//          }) 
//             .catch((err) => { 
//                 console.error(err); 
//             });


// Async and Await in place of Promises. 

    // const example=async()=>{
    //     console.log("Started");
    //     await fetch("https://jsonplaceholder.typicode.com/posts/1")
    //         .then((resp)=> resp.json())
    //         .then((json)=> console.log(json));
    //     console.log("Ended");
    // };

    // console.log("Started -------1");
    // example();
    // console.log("Started -------2");

//Sequencial Execution -- Matlab await function one by one execute honge.
    // const sample=async()=>{
    //     console.log("Started");
    //     await fetch("https://jsonplaceholder.typicode.com/posts/1")
    //         .then((resp)=> resp.json())
    //         .then((json)=> console.log(json));
        
    //     await fetch("https://jsonplaceholder.typicode.com/posts/1")
    //         .then((resp)=> resp.json())
    //         .then((json)=> console.log(json));
    //     console.log("Ended");
    // };

    // console.log("Started -------1");
    // sample();
    // console.log("Started -------2");

//Horizontal Execution -- Matlab await function ek sath execute honge.
    // const sample2 = async () => {
    //     console.log("Started");

    //     // Start both fetches together
    //     const fun1 = fetch("https://jsonplaceholder.typicode.com/posts/1");
    //     const fun2 = fetch("https://jsonplaceholder.typicode.com/posts/1");

    //     // Await both results
    //     const a = await fun1;
    //     const b = await fun2;

    //     console.log(await a.json());
    //     console.log(await b.json());

    //     console.log("Ended");
    // };

    // console.log("Started -------1");
    // sample2();
    // console.log("Started -------2");



// URL information
 // https:// -> Protocals
 // www.flipkart.com -> Domain
 // /clothing-and-accessories/topwear/tshirt/pr -> path param
 // ?sid=clo,ash,ank&p[]=facets.ideal_for%255B%255D%3DBoys&p[]=facets.ideal_for%255B%255D%3DBoys%2B%2526%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys%2B%2526%2BBaby%2BGirls&p[]=facets.ideal_for%255B%255D%3DBaby%2BBoys&otracker=categorytree&otracker=nmenu_sub_Baby%20%26%20Kids_0_T-Shirts -> Query params