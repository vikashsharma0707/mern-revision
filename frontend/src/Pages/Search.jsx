import axios from "axios";
import { useEffect, useState } from "react";



const Search=()=>{

    const [empno,setempno] =useState("")
    const [val,setdata] =useState([])

    const handleSearch=()=>{
        let api="http://localhost:8005/employee/empSearch"
        axios.post(api,{empno:empno}).then((res)=>{
          setdata(res.data)
          console.log(res.data)
        })
    }

    useEffect(()=>{
        handleSearch()
    },[])

    const ans = val.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.empno}</td>
                <td>{key.empname}</td>
                <td>{key.empcity}</td>
                <td>{key.empsubject}</td>
                
            </tr>
            
            
            </>
        )
    })


    return(
        <>
        <h1>This is search page</h1>

        <input type="text" value={empno}  onChange={(e)=>{setempno(e.target.value)}}/>
        <button  onClick={handleSearch}>Search</button>

        {ans}
        </>
    )
}

export default Search;