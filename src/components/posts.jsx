import data from '../mock/data.json'
import React,{useState} from 'react';
import Pagination from './Pagination';
import {CategoryFilter} from './CategoryFilter';

export default function  Posts() {
     
   //pagination
   const [showPerPage,setShowPerPage]= useState(3);
   const [pagination,setPagination] = useState({
     start:0,
     end: showPerPage,
   });
   const onPaginationChange = (start, end) => {
     setPagination({start : start , end : end});
   }; 
  
    
   // category filter
    var [categoryFilter,setCategoryFilter] = useState("")
    const onFilterChange = (FilterValue) => {
      setCategoryFilter(FilterValue);
    }
  
	// posts
    var final_post = [];
    for(var i=0;i<data.posts.length;i++){
      var result = false;
      for(var j=0;j<data.posts[i].categories.length;j++){
        if(data.posts[i].categories[j].name.match(categoryFilter) ){
          result = true;
        }

      }
      if(result == true){
        final_post.push(data.posts[i]);
      }    
    }
    
    const posts_count = final_post.length;
 
  return (
    <>
    <CategoryFilter onFilterChange={onFilterChange} />

    {final_post.slice(pagination.start,pagination.end).map((posts) =>   
      (
       <div className="card overflow-auto">
       <table>
       <tr><td width="10%" align="center">
       <img width="50px" height="50px" src={posts.author.avatar}  alt={posts.author.name} />
       <p>{posts.author.name}</p>
         
       </td>
       <td width="90%">
       <div className="card-body">
         <h5 className="card-title">{posts.title}</h5>
         
         <p className="card-text text-justify">{posts.summary}</p>
         <p>
         {posts.categories.map((category) => (
           <span style={{color:"orange"}} className="" id={category.id} title={category.id}>#{category.name}</span>
         ))
         }
          <span className="text-muted" style={{fontSize:"11px",float:"right",marginTop:"25px"}}>{posts.publishDate}</span> 
         </p>
         
         
       </div>
       </td>
       </tr>
       </table>
     </div>
     ))
     }
     <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={posts_count}/> 
    </>        
 );
}
