const express = require('express');
const app = express();


//Routes
const userRoutes = require('./routes/userRoutes');

// app.get('/', (req, res) => {
//     res.send("Hellow from backend side");
// })

app.use(express.json())

app.use('/', userRoutes);


app.listen(3000, (err) => {
    console.log("Server is runnuing on 3000!");

})