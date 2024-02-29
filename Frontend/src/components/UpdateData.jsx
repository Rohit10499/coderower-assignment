import { useState } from "react"
import axios from "axios";

const UpdateData = () => {
    const [id,setId]=useState("");
    const [remark,setRemark]=useState('')
    const [result,setResult]=useState({});
    const[api,setApi]=useState('');
  
   
    const handleSubmit=async(e)=>{
        e.preventDefault();
     try {
           let response=await axios.put(`http://localhost:8080/api/configurations/${id}`,{remark})
           setApi(`http://localhost:8080/api/configurations/${id}`)
        //    console.log(response);
           let {data}=response;
           setResult(data);
     } catch (error) {
        console.log(error)
     }
      
       }
 
   

    // console.log("responseData",result);
 
  return (
    <> 
   <div className="update">
    <h1>Update Remark</h1>
    <form  onSubmit={handleSubmit} >
    <div className="textfield" >
        <label>Config To Update (configId):</label>
        <input
        type="text"
        name='id'
        value={id}
        onChange={(e)=>setId(e.target.value)}
        />
    </div>
    <div className="textarea">
        <label>Remark </label>
        <textarea
        value={remark}
        name='remark'
        rows={2}
        cols={25}
        onChange={(e)=>setRemark(e.target.value)}
        />
    </div>
    <div className="btn">
        <button type="submit" >Submit</button>
    </div>
    </form>
 
 <div>{api ? <><h2> PUT: {api}</h2>
     <p className="resultupdate">{result.message}</p>
     </>
 :""}
 
 </div>
</div>

    </>
  )
}

export default UpdateData