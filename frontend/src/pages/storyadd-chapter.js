import React from 'react';
import {Link } from "react-router-dom";
function StoryAddChapter() {
  return (
  <div class='m-4'>
    <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item" ><Link  to="/story"> List Story</Link></li>
        <li class="breadcrumb-item " ><Link  to="/story/add"> Add Story</Link></li>
        <li class="breadcrumb-item active" >Add Story Chapter</li>
    </ol>
    </nav>
    <div class ='h2 mt-2'>Add Bab</div>
        <div class='border border-secondary bg-light p-3  rounded'>
        <div class='form-group'>
            <label class='form-label'>Title</label>
            <input class='form-control' placeholder='Title'></input>
        </div>
        <div class='form-group mt-2 '>
                    <label class='form-label'>Story</label>
                    <textarea class="form-control" style={{height:'350px'}}></textarea>
                </div>
       
        </div>
    <div class= 'mt-4 d-flex flex-row-reverse bd-highlight'>
        <button type="button" class="btn btn-primary mx-2 px-3">Save</button>
        <button type="button" class="btn btn-secondary mx-2 px-3">Cancel</button>
        
    </div>
  </div>);
}

export default StoryAddChapter;