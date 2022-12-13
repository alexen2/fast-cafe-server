require("dotenv").config();
const express = require("express");
const router = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api", router);

const start = async () => {
	try {
		app.listen(PORT, () => { 
			console.log(`Server start on port ${PORT}`); 
		});
	} catch(e) {
		console.log(e);
	}
};

start();