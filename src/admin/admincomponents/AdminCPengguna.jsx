import axios from 'axios';
import React from 'react'
import { useEffect, useState} from "react"


function AdminCPengguna() {
    const api_url = "https://63528ae6a9f3f34c37409536.mockapi.io/logres";
    const [apiUser, setApiUser] = useState([])
    const [totalSum, setTotalSum] = useState(0);


    useEffect(() => {
        const data = axios(api_url).then (result => {
            // console.log(result.data)
            setApiUser(data)
            // setTotalSum = result.data.length 
            // console.log(result.data.length)
            setTotalSum(result.data.length)
        })
    }, [])

 

    return (
    <>
    
      {/* <!-- Begin Page Content --> */}
    <div className="crudd">

        {/* <!-- Page Heading --> */}
        <div className="ms-4">
            <h1 className="text-gray-800">Pengguna</h1>
        </div>


        {/* <!-- /.container-fluid --> */}
        <table class="table  table-striped-columns my-table tablee">
            <thead >
            <tr>
                <th>No.</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1.</td>
                <td>Doe</td>
                <td>john@example.com</td>
                <td>123</td>
                <td><a><i class="fa fa-trash" aria-hidden="true"></i></a></td>
                
            </tr>
            <tr>
                <td>2.</td>
                <td>Moe</td>
                <td>mary@example.com</td>
                <td>234</td>
                <td><a><i class="fa fa-trash" aria-hidden="true"></i></a></td>

            </tr>
            </tbody>
    </table>
    
</div>


    </>
    )
}

export default AdminCPengguna