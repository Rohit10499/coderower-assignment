import axios from "axios";
import { useState} from "react"

const FetchData = () => {
    const [id,setId]=useState("");
    const [result,setResult]=useState(null);
    const [api,setApi]=useState('');

  
   

    const handleSubmit=async(e)=>{
        e.preventDefault()
 
   try {
       let response=await axios.get(`http://localhost:8080/api/configurations/${id}`);
      setApi(`http://localhost:8080/api/configurations/${id}`);
       let {data}=response;
       setResult(data);
   } catch (error) {
    console.log(error);
    
   }
     }

      //    qwertyuiop
  return (<>   
  <div className="container">
  <h1>Fetch Config </h1>
   <div className="fatechData">
    <label>Config To Load (configId): </label>
    <input
    type="text"
    name='id'
    value={id}
    onChange={(e)=>setId(e.target.value)}
    />
   </div>
   <div>
    <button className="btn" onClick={handleSubmit}>Submit</button>
   </div>
  
  <div>
    {api ?<>
        <h2 className="heading">Result :{api}</h2>
        {result.map((item,index)=>(
            <div key={index}>
              {item.map((s1,index)=>(
                <span key={index}>
                    {s1},
                </span>
              ))}
            </div>
        ))}
    </>:""}
  </div>

   </div>

   </>

  )
}

export default FetchData