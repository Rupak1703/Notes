
const express = require("express");
const app = express();
const userRouter = require("./src/routes/userRoutes");
const noteRouter = require("./src/routes/noteRoutes");
const dotenv = require("dotenv")
const cors = require("cors");

dotenv.config();

const mongoose = require("mongoose")


app.use(express.json()); // the body(string) of our response is converted into json

app.use(cors());

app.use("/users" , userRouter);
app.use("/note" , noteRouter);


const PORT = process.env.PORT || 5000;

app.get("/" , (req , res) => {
    res.send("Notes API..!")
})

mongoose.connect(process.env.MONGO_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => {
        app.listen(PORT , ()=> {
            console.log("server started on port no " + PORT);
        });
}).catch((error) => {
    console.log(error);
})
