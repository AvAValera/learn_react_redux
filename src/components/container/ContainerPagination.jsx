import React from 'react';
import Pagination from '@mui/material/Pagination';


export default function ContainerPagination({status, page, setNumPage, entities}) {
  return (
    <div className='flex justify-center'>
      {status === "received" && <Pagination
        onChange={setNumPage} 
        defaultPage={1}
        page={page === 0 ? 1 : page / 10 + 1}
        count={Math.ceil(entities.length / 10 + 1)} 
        variant="outlined" />}
    </div>
  )
}
