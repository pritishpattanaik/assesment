import React, { useEffect, useState } from 'react'


export default function Pagination({showPerPage,onPaginationChange,total}) {
  
  const [counter,setCounter] = useState(1);
  var [numberOfButton,setNumberOfButton] = useState(Math.ceil(total/showPerPage));
  console.log(total);
  //const pagesize = Math.ceil(total/showPerPage)
  useEffect(() => {
    const value = showPerPage * counter; 
    
    onPaginationChange(value - showPerPage,value);
  },[counter]);

  useEffect(() => {
    setNumberOfButton(Math.ceil(total/showPerPage));
  },[total]);
 
  const onButtonClick = (type) => {
    if(type === "previous"){
      if(counter === 1){
        setCounter(1);
      }else{
        setCounter(counter-1);
      }
    }
    else if(type === "next"){
      if( numberOfButton === counter){
        
        setCounter(counter);
      }else{
        setCounter(counter+1);
      }
    }
    
  }
  return (
    <div class="container">
      <nav aria-label="...">
  <ul className="pagination  justify-content-center overflow-auto">
    <li className="page-item ">
      <a className="page-link" href="#" onClick={() => onButtonClick("previous")}>Previous</a>
    </li>
   {
      new Array(numberOfButton).fill("").map((el,index)=>(
        <li className={`page-item d-none d-lg-block ${index+1 === counter ? "active" : null}`} key={index}>
          <a className="page-link" href="#" onClick={() => setCounter(index+1)}>{index + 1}</a>
        </li>
      ))
    }
    
    <li className="page-item">
      <a className="page-link" href="#" onClick={() => onButtonClick("next")}>Next</a>
    </li>
  </ul>
</nav>
    </div>
  )
}
