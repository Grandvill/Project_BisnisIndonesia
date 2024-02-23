'use client';
import React from 'react';
// import pool from '../../server/connect';
import { useEffect, useState } from 'react';

interface User {
  firstname: string;
  lastname: string;
  username: string;
}

async function fetchData() {
  try {
    const response = await fetch('http://localhost:3001/data');
    if (!response.ok) {
      throw new Error('HTTP Error' + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data : ', error);
    throw error;
  }
}

export default function Page() {
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await fetchData();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data : ', error);
      }
    };
    fetchUserData();
  }, []);
  return (
    <main>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <main className="container-fluid">
          <a className="navbar-brand" href="">
            <img src="/bisnis.png" alt="" width="150" height="50" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link  ms-3" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link ms-3" href="./Features">
                Features
              </a>
              <a className="nav-link active ms-3" href="./Pricing">
                Pricing
              </a>
              <a className="nav-link ms-3" href="./About">
                About
              </a>
            </div>
          </div>
        </main>

        <div className=" justify-content-md-end">
          <button className="btn btn-light me-md-3" type="button">
            LOGIN
          </button>
        </div>
      </nav>

      <div className="container p-5">
        <h4>Hoverable rows</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">User Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container p-5 ">
        <h4>Responsive tables</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Name</th>
              <th>User Name</th>
              <th>User Name</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.username}</td>
                <td>{user.username}</td>
                <td>{user.username}</td>
                {/* <td className="flex"></td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

// const fetchDataFromDB = async () => {
//   try {
//     const client = await pool.connect();
//     console.log('Connected to the database');

//     const result = await client.query('SELECT * FROM Customer');
//     const data = result.rows;
//     console.log('Fetched data: ', data);

//     client.release();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data: ', error);
//     throw error;
//   }
// };

// // calling fetchdatafromDB and handling its result
// fetchDataFromDB()
//   .then((data) => {
//     console.log('Received data: ', data);
//   })
//   .catch((error) => {
//     console.log('Received data: ', error);
//   });
