import React from 'react'

export const AdminDashboard = () => {
    return (
        <div>
            
            <table class="table">
  <thead>
    <tr>
      <th scope="col">SN</th>
      <th scope="col">StockNames</th>
      <th scope="col">RatePerUnit</th>
      <th scope="col">Actions</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>
          <button class="btn btn-primary">Edit</button>
          <button class="btn btn-danger">Delete</button>
      </td>
      
    </tr>
    
    <tr>
      <th scope="row">2</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>
          <button class="btn btn-primary">Edit</button>
          <button class="btn btn-danger">Delete</button>
      </td>
      
    </tr>

    <tr>
      <th scope="row">3</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>
          <button class="btn btn-primary">Edit</button>
          <button class="btn btn-danger">Delete</button>
      </td>
      
    </tr>
    
  </tbody>
</table>


        </div>
    )
}
