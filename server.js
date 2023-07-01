const express = require('express')

// const serverConfig = require('./configs/server.config');

const app = express();
//central cratter analogous to securty guard -> app

app.listen(3333, ()=> {

    // console.log(`server started on the PORT number: ${serverConfig.PORT}`);
    console.log("hello");
});


