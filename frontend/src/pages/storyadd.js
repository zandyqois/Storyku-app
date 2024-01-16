import React from 'react';
import {Link } from "react-router-dom";
function StoryAdd() {
  return (
  
  <div class='m-3'>
    <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item " ><Link  to="/story"> List Story</Link></li>
        <li class="breadcrumb-item " >Add Story</li>
    </ol>
    </nav>
        <div class ='h2 mt-2'>Add Story</div>
        <div class='border border-secondary bg-light p-3  rounded'>
        <div class='row'>
            <div class='col col-6'>
                <div class='form-group'>
                    <label class='form-label'>Title</label>
                    <input class='form-control' placeholder='Title'></input>
                </div>
            </div>
            <div class='col col-6'>
                <div class='form-group'>
                    <label class='form-label'>Writer Name</label>
                    <input class='form-control' placeholder='Writer Name'></input>
                </div>
            </div>
        </div>
        <div class='form-group mt-2 '>
                    <label class='form-label'>Synopsis</label>
                    <textarea class="form-control" placeholder="Synopsis" style={{height:'100px'}}></textarea>
                </div>
        <div class='row mt-2'>
            <div class='col col-6'>
                <div class='form-group'>
                <label class='form-label'>Category</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Category</option>
                        <option value="1">Drama</option>
                        <option value="2">Technology</option>
                        <option value="3">Fiction</option>
                    </select>
                </div>
            </div>
            <div class='col col-6'>
                <div class='form-group'>
                    <label class='form-label'>Tags</label>
                    <input class='form-control' placeholder='tags'></input>
                </div>
            </div>
        </div>
        <div class='row mt-2'>
            <div class='col col-6'>
                <div class='form-group'>
                    <label class='form-label'>Cover Image</label>
                    <input class='form-control' placeholder=''></input>
                </div>
            </div>
            <div class='col col-6'>
                <div class='form-group mt-6'>
                    <label class='form-label'>Status</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Status</option>
                        <option value="1">Draft</option>
                        <option value="2">Public</option>
                    </select>
                </div>
            </div>
        </div>
        <hr></hr>
        <div class='mt-3 d-flex flex-row-reverse bd-highlight'>
            <Link to="/story/add-chapter" type="button" class='btn btn-primary mx-2'>+ Add Story Chapter</Link>
        </div>
        <table class="table table-bordered mt-4 bg-white">
        <thead>
            <tr>
            <th scope="col">Title</th>
            <th scope="col">Last Updated</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Anak Durhaka</td>
            <td>17 Januari 2024</td>
            <td>@</td>
            </tr>
        </tbody>
        </table>
        </div>
        <div class= 'mt-4 d-flex flex-row-reverse bd-highlight'>
            <button type="button" class="btn btn-primary mx-2 px-3">Save</button>
            <button type="button" class="btn btn-secondary mx-2 px-3">Cancel</button>
        </div>
  </div>
  );
}

export default StoryAdd;