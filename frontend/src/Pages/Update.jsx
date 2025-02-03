import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Update=()=>{
    const [val,setval] =useState([])

    const navigate =useNavigate()

    const loaddata=()=>{
        let api="REACT_APP_API_URL/employee/empDisplay"
        axios.get(api).then((res)=>{
           setval(res.data)
        })
    }

    useEffect(()=>{
        loaddata()
    })

    const mydel=(id)=>{
      let api="REACT_APP_API_URL/employee/empDelete"
      axios.post(api,{id:id}).then(()=>{
        alert("data deleted sucessfully")
        loaddata()
      })
    }

    const myedt=(id)=>{
       navigate(`/edit/${id}`)
    }


    const ans = val.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.empno}</td>
                <td>{key.empname}</td>
                <td>{key.empcity}</td>
                <td>{key.empsubject}</td>
                <td>
                    <button onClick={()=>{mydel(key._id)}}>Delete</button>
                </td>

                <td>
                    <button onClick={()=>{myedt(key._id)}}>Edit</button>
                </td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>This is update page</h1>
        {ans}
        
        </>
    )
}

export default Update;