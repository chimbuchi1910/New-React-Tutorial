import axios from "axios";
import { useEffect, useState } from "react";
import "./UserPost.css";
import { Link } from "react-router-dom";

const UserPost = () => {
  const [userPost, setUserPost] = useState([]);
  console.log(userPost);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://fullstack-student-backend.onrender.com/api/auth"
      );
      setUserPost(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {userPost.map((item: any) => (
        <>
          <Link to={`/UpdateUser/${item?.firstName}/${item?._id}`}>
            <div className="card">
              <div className="card_background_img"></div>
              <div className="card_profile_img"></div>
              <div className="user_details">
                <h3>{item?.firstName}</h3>
                <p>{item?.lastName}</p>
              </div>
              <div className="card_count">
                <div className="count">
                  <div className="fans">
                    <h3>2.4M</h3>
                    <p>Fans</p>
                  </div>
                  <div className="following">
                    <h3>202</h3>
                    <p>Followings</p>
                  </div>
                  <div className="post">
                    <h3>552</h3>
                    <p>Posts</p>
                  </div>
                </div>
                <Link to={"./PostScreen"}>
                  <div className="btn">Follow</div>
                </Link>
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default UserPost;
