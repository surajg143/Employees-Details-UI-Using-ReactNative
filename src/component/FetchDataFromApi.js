import React, { useEffect, useState, useMemo } from 'react';
import axios from "axios";
import { colm } from './colm';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import GlobalFiltering from './GlobalFiltering';

function FetchDataFromApi() {

  const [details, setDetails] = useState([]);
  

  useEffect(() => {
    axios.get("http://localhost:8080/demo/all")
      .then(response => {
        setDetails(response.data);
      }
      );
  }, []);

  
  
  const data = useMemo(
    () => details,
    [details]
  )

  const columns = React.useMemo(
    () => colm,
    []
  )


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    nextPage,
    previousPage,
    setGlobalFilter
  } = useTable({ columns, data }, useGlobalFilter,useSortBy, usePagination)

  const {globalFilter}=state;

  return (
    <>
    <GlobalFiltering filter={globalFilter} setFilter={setGlobalFilter}/>
      <table {...getTableProps()} style={{ border: 'solid 1px blue' , marginLeft:120,  marginBottom:100, fontSize:25}}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} style={{ borderRight: 'solid 3px red' }}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div style={{marginBottom:60, marginRight:180, marginTop:-90}}>
        <button style={{marginRight:20}}onClick={()=>previousPage()}>Prev</button>
        <button onClick={()=>nextPage()}>Next</button>
      </div>
      </>
      
  );
}
export default FetchDataFromApi;