/* Modules */
const express = require('express');
const axios = require('axios');
const { Apify } = require('apify'); // use named export to get the class


/* app Config */
const app = express();
const port = 4000;
const sdk  = new Apify({
    token: process.env.TOKEN,
});



/* default route */
app.get('', async (req, res) => {


    try {
    
        const run = await sdk.call('apify/hello-world', { myInput: 123 });
        console.log(`Received message: ${run.output.body.message}`);
    }
    catch (error) {

        console.log('cant send req ', error);
    }
    res.send("This Works very well");
});


/* Listening */
app.listen(port, () => {

    console.log(`listening to port ${port}`);
});





