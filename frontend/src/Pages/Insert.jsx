import { useState } from "react";
import axios from "axios";

const Insert = () => {
    const [input, setinput] = useState({});

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setinput((values) => ({ ...values, [name]: value }));
        console.log(input);
    };

    const handleSubmit = () => {
        let api = "http://localhost:8005/employee/empSave";
        axios.post(api, input).then((res) => {
            alert("Data saved");
        });
    };

    return (
        <>
            

            <input type="text" name="empno" value={input.empno || ""} onChange={handleInput} /><br />
            <input type="text" name="empname" value={input.empname || ""} onChange={handleInput} /><br />
            <input type="text" name="empcity" value={input.empcity || ""} onChange={handleInput} /><br />
            <input type="text" name="empsubject" value={input.empsubject || ""} onChange={handleInput} /><br />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
};

export default Insert;
