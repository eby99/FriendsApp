import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [frnd,changeFrnd] = useState([])
    const fetchData = () =>{
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (response) => {
                console.log(response.data)
                changeFrnd(response.data)
            }
        ).catch((error) =>{
            console.error("Error in Fetching Data",error)
            alert("Failed to fetch data. Please try again later.");
        }

        ).finally((error) =>{
            console.log("Fetching Completed")
        })
    }
useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    {/* <th scope="col">#</th> */}
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                           
                            {
                                frnd.map(
                                    (value,i)=>{
                                        return  <tr>
                                        {/* <th scope="row">1</th> */}
                                        <td>{value.name}</td>
                                        <td>{value.friendName}</td>
                                        <td>{value.friendNickName}</td>
                                        <td>{value.DescribeYourFriend}</td>
                                    </tr>
                                    }
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default View