const express = require("express");

const app = express();

app.get('/' , (req,res) => {
	res.send("hello");
})

app.listen(8888, () => {
	console.log("Server running on port 8888");
})