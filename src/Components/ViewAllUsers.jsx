import React, { useEffect, useState } from 'react'
import UserNavbar from './UserNavbar'
import axios from 'axios'

const ViewAllUsers = () => {

  const [viewallusersData, setviewallusersData] = new useState([])

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (response) => {
        setviewallusersData(response.data)
      }
    ).catch()
  }

  useEffect(() => {fetchData()} , [])
  return (
    <div>
      <UserNavbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Email id</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Username</th>
                </tr>
              </thead>
              <tbody>


                {viewallusersData.map(
                  (value, index) => {
                    return (
                      <tr>
                        <th scope="row">{value.id}</th>
                        <td>{value.name}</td>
                        <td>{value.email}</td>
                        <td>{value.phone}</td>
                        <td>{value.username}</td>
                      </tr>
                    )
                  }
                )}

              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAllUsers