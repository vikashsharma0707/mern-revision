import axios from "axios";
import { useEffect, useState } from "react";



const Display=()=>{

    const [val,setval]=useState([])

    const loaddata=()=>{
        let api="REACT_APP_API_URL/employee/empDisplay"
        axios.get(api).then((res)=>{
              setval(res.data)
        })
    }

    useEffect(()=>{
        loaddata()
    })


// this cide
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
        
        
        {ans}
        </>
    )
}

export default Display;