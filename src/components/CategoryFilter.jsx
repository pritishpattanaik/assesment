import React, { useEffect, useState } from 'react'
import data from '../mock/data.json'

export const CategoryFilter = ({onFilterChange}) => {

  
  
  var posts = data.posts
  var Categories = [];
  for(let i=0;i<posts.length;i++){
    let category = data.posts[i].categories;
    for(let j=0;j<category.length;j++){
      Categories.push(data.posts[i].categories[j].name);
    }
  }
  
  var options = [];
  let uniqueCategories = [...new Set(Categories)];
  Categories = uniqueCategories;
  
  for(let i=0;i<Categories.length;i++){
    options.push(
      <option value={Categories[i]}>{Categories[i]}</option>
    );
  }
  
  
  
  
  return (
    
    <div className="justify-content-center" id="categoryFilterContent"> 
      <label for="CategoryFilter">Category <i class="fa fa-filter"></i>
        <select class="center" name="CategoryFilter" id="CategoryFilter" onChange={(el)=>onFilterChange(el.target.value)}>
          <option value="">--Select--</option>
            {options}
        </select>
        
      </label>
    </div>
  )
  
  
}
