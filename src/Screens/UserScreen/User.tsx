import axios from "axios";
import React, { useEffect, useState } from "react";
import "./User.css";
import { Link } from "react-router-dom";

const User = () => {
  const [userInfo, setUserInfo] = useState([]);
  console.log(userInfo);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserInfo(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {userInfo.map((item: any) => (
        <>
          <Link to={`/productDetails/${item?.id}`}>
            <div className="">
              <div className="container d-flex justify-content-center mt-5">
                <div className="card">
                  <div className="top-container">
                    <img
                      src="https://i.imgur.com/G1pXs7D.jpg"
                      className="img-fluid profile-image"
                      width="70"
                    />

                    <div className="ml-3">
                      <h5 className="name">Clarke Jeffery</h5>
                      <p className="mail">clark@zmail.com</p>
                    </div>
                  </div>

                  <div className="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
                    <div className="dollar-div px-3">
                      <div className="round-div">
                        <i className="fa fa-dollar dollar"></i>
                      </div>
                    </div>
                    <div className="d-flex flex-column text-right mr-2">
                      <span className="current-balance">Current Balance</span>
                      <span className="amount">
                        <span className="dollar-sign">$</span>1476
                      </span>
                    </div>
                  </div>

                  <div className="recent-border mt-4">
                    <span className="recent-orders">Recent orders</span>
                  </div>

                  <Link to={`/userDetail`}>
                    {" "}
                    <div className="wishlist-border pt-2">
                      <span className="wishlist">Wishlist</span>
                    </div>
                  </Link>
                  <div className="fashion-studio-border pt-2">
                    <span className="fashion-studio">Fashion studio</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          {/* <p>{item?.id}</p>
          <p>{item?.name}</p>
          <p>{item?.email}</p>
          <p>{item?.address.city}</p>
          <p>{item?.company.name}</p>
          <p>{item?.phone}</p>
          <p>{item?.username}</p>
          <p>{item?.website}</p> */}
        </>
      ))}
    </div>
  );
};

export default User;
