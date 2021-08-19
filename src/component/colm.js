import axios from 'axios';
export const colm =[
    {
        Header: 'Id',
        accessor: 'id',
    },
    {
        Header: 'First Name',
        accessor: 'firstName',
    },
    {
        Header: 'Last Name',
        accessor: 'lastName',
    },
    {
        Header: 'Role',
        accessor: 'role',
    },
    {
        Header: 'Designation',
        accessor: 'designation',
    },
    {
        Header: 'Doj',
        accessor: 'doj',
    },
    {
        Header: 'Address',
        accessor: 'address',
    },
    {
        Header: 'Salary',
        accessor: 'salary',
    },
    {
        id: 'delete',
        accessor: 'id',
        Cell: ({value}) => (<button style={{backgroundColor:'red',fontSize:20 }}onClick={()=>{axios.delete("http://localhost:8080/demo/del/"+value);alert
    ("Successfully Data Deleted");window.location.reload(false);}}>Delete</button>)
    },
   
]
