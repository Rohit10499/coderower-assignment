import connectDB from "./db/index.js";
import {app} from "./app.js";
const port=8080;

connectDB().then(()=>{
    app.listen(port,()=>{console.log(`Server is running on port : ${port}`)
})
}).catch((err)=>{
    console.log("MONGODB CONNECTON FAILED !!!",err)
})

