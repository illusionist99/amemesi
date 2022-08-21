const express = require('express');

const app = express();
const port = 4000;

app.get('', (req,res) => {

    res.send("This Works very well");
});



app.listen(port, () => {
    console.log(`listening to port ${port}`);
});


const url = 'https://www.facebook.com/watch/?v=336163045234362';
