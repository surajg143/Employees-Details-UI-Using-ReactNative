import React from 'react';

function GlobalFiltering({filter,setFilter})
{
    return(
        <span>
            Search:{' '}
            <input  style={{margin:20, marginRight:300}} value={filter || ''} onChange={(e)=>setFilter(e.target.value)}/>
        </span>
    );
}
export default GlobalFiltering;