// Contact.js
import React from 'react';
import {Link } from "react-router-dom";
function Story() {

  const style = {
    marginTop : "20px",
    marginRight : "20px"
  }
  return (
    <>
    <div style={style}>
        <div class='row'>
          <div class='col col-3'>
            <div class='h1'>List Story</div>
          </div>
          <div class='col col-9'>
            <div class="input-group mb-3 p-2">
              <input type="text" class="form-control" placeholder="Search" aria-label="Username"></input>

            
              <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Filter
              </button>
               <Link to="/story/add" type="button" class='btn btn-primary mx-2'>+ Add Story</Link>
            

              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Filter</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div>
                        <div class='form-group'>
                          <label class='form-label'>Category</label>
                         <select class="form-select" aria-label="Default select example">
                              <option selected>Category</option>
                              <option value="1">Drama</option>
                              <option value="2">Technology</option>
                              <option value="3">Fiction</option>
                          </select>
                        </div>
                        <div class='form-group mt-4'>
                          <label class='form-label'>Status</label>
                         <select class="form-select" aria-label="Default select example">
                              <option selected>Status</option>
                              <option value="1">Draft</option>
                              <option value="2">Public</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="modal-footer">
                      
                            <button type="button" class="btn btn-secondary" >Reset</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary">Filter</button>
                         
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <table class="table table-bordered">
     <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Writes</th>
          <th scope="col">Category</th>
          <th scope="col">Tags</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Anak Durhaka</td>
          <td>Boger</td>
          <td>Drama</td>
          <td>dosa</td>
          <td>Draft</td>
          <td>...</td>
        </tr>
      </tbody>
    </table>
 
    </div>
    </>
    
  
  );}
export default Story;