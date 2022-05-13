const express = require("express"); //Import
const app = express();

app.listen(3001, () => { //React runs on port 3000
    console.log("Running server");
});