import React, { useState } from 'react';
import axios from "axios";

function UpdateData() {
    
    const [flag, setFlag] = useState("");
    const [empData, setEmpData] = useState({});

    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;

        setEmpData((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }

    // function editfun() { setFlag(""); }
    function updatefun() {
        axios.put("http://localhost:8080/demo/update", empData)
            .then(response => console.log(response));
        setFlag("none");
        alert("Successfully Data Updated");
        window.location.reload(false);
    }

    return (
        <div style={{margin:20}}>
            {/* <button style={{ marginLeft: 700, backgroundColor: 'green', fontSize: 20 }} onClick={editfun}>Edit</button> */}
            <table style={{ margin: 30, display: flag }}>
                <tbody>
                    <tr>
                        <td><input type="text" placeholder="Id" name="id" onChange={handleChange} /></td>
                        <td><input type="text" placeholder="First Name" name="firstName" onChange={handleChange} /></td>
                        <td><input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} /></td>
                        <td><input type="text" placeholder="Role" name="role" onChange={handleChange} /></td>
                        <td><input type="text" placeholder="Designation" name="designation" onChange={handleChange} /></td>
                        <td><input type="text" placeholder="Doj" name="doj" onChange={handleChange} /></td>
                        <td><input type="text" placeholder="Address" name="address" onChange={handleChange} /></td>
                        <td><input type="Number" placeholder="Salary" name="salary" onChange={handleChange} /></td>
                        <td><button style={{ backgroundColor: 'lightblue', fontSize: 20 }} onClick={updatefun}>Update</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default UpdateData;