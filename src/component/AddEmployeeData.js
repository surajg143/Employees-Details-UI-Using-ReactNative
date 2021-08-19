import React, { useState } from 'react';
import axios from "axios";
import UpdateData from './UpdateData';

function AddEmployeeData() {
    const [flag, setFlag] = useState("none");
    const [empData, setEmpData] = useState({});
    const [disp, setDisp] = useState("none");

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
    function editfun(){setDisp("");}
    function addfun() { setFlag(""); }
    function save() {
        axios.post("http://localhost:8080/demo/add", empData)
            .then(response => console.log(response));
        setFlag("none");
        alert("Successfully Data Added");
        window.location.reload(false);
    }

    return (
        <div>
            <h1 style={{marginRight:250}}>Employee Details</h1>
            <button style={{ marginLeft: 700, backgroundColor: 'green', fontSize: 20 }} onClick={addfun}>Add</button>
            <button style={{ marginLeft: 20, backgroundColor: 'blue', fontSize: 20 }} onClick={editfun}>Edit</button>
            <div style={{display:disp}}><UpdateData/></div>
            <table style={{ margin: 30, display: flag }}>
                <tbody>
                    <tr>
                        <td><input type="text" placeholder="First Name" name="firstName" onChange={handleChange} /></td>
                        <td><input type="text" placeholder="Last Name" name="lastName" onChange={handleChange} /></td>
                        <td><input type="text" placeholder="Role" name="role" onChange={handleChange} /></td>
                        <td><input type="text" placeholder="Designation" name="designation" onChange={handleChange} /></td>
                        <td><input type="text" placeholder="Doj" name="doj" onChange={handleChange} /></td>
                        <td><input type="text" placeholder="Address" name="address" onChange={handleChange} /></td>
                        <td><input type="Number" placeholder="Salary" name="salary" onChange={handleChange} /></td>
                        <td><button style={{ marginLeft: 85, backgroundColor: 'lightblue', fontSize: 20 }} onClick={save}>Save</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default AddEmployeeData;