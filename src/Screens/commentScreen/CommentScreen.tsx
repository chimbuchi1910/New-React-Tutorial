import React, { useEffect, useState } from "react";
import "./comment.css";
import axios from "axios";
import { Link } from "react-router-dom";

const CommentScreen = () => {
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
        <Link to={`/update/${item?._id}`}>
          <section className="section about-section gray-bg" id="about">
            <div className="container">
              <div className="row align-items-center flex-row-reverse">
                <div className="col-lg-6">
                  <div className="about-text go-to">
                    <h3 className="dark-color">{item?.id}</h3>
                    <h6 className="theme-color lead">{item?.username}</h6>
                    {/* <p>{item?.phone}</p> */}
                    <div className="row about-list">
                      <div className="col-md-6">
                        <div className="media">
                          <label>Name</label>
                          <p>{item?.name}</p>
                        </div>
                        <div className="media">
                          <label>Age</label>
                          <p>22 Yr</p>
                        </div>
                        <div className="media">
                          <label>Residence</label>
                          <p>{item?.address.city}</p>
                        </div>
                        <div className="media">
                          <label>Address</label>
                          <p>{item?.address.street}</p>
                          <p>{item?.address.suite}</p>
                          <p>{item?.address.zipcode}</p>
                          <p>{item?.address.geo.lat}</p>
                          <p>{item?.address.geo.lng}</p>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="media">
                          <label>E-Mail</label>
                          <p>{item?.email}</p>
                        </div>
                        <div className="media">
                          <label>Phone</label>
                          <p>{item?.phone}</p>
                        </div>
                        <div className="media">
                          <label>Website</label>
                          <p>{item?.website}</p>
                        </div>
                        <div className="media">
                          <label>Freelance</label>
                          <p>{item?.company.name}</p>
                          <p>{item?.company.catchPhrase}</p>
                          <p>{item?.company.bs}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-avatar">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      title=""
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="counter">
                <div className="row">
                  <div className="col-6 col-lg-3">
                    <div className="count-data text-center">
                      <h6 className="count h2" data-to="500" data-speed="500">
                        500
                      </h6>
                      <p className="m-0px font-w-600">Happy Clients</p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="count-data text-center">
                      <h6 className="count h2" data-to="150" data-speed="150">
                        150
                      </h6>
                      <p className="m-0px font-w-600">Project Completed</p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="count-data text-center">
                      <h6 className="count h2" data-to="850" data-speed="850">
                        850
                      </h6>
                      <p className="m-0px font-w-600">Photo Capture</p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3">
                    <div className="count-data text-center">
                      <h6 className="count h2" data-to="190" data-speed="190">
                        190
                      </h6>
                      <p className="m-0px font-w-600">Telephonic Talk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Link>
      ))}
    </div>
  );
};

export default CommentScreen;
