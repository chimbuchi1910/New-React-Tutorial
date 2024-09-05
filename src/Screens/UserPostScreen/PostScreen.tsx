import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostScreen = () => {
  const { _id, firstName, lastName, email } = useParams();
  const [userPost, setUserPost] = useState<any>({});
  console.log(userPost);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://fullstack-student-backend.onrender.com/api/auth${_id}`
      );
      setUserPost(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <p>{_id}</p>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
    </div>
  );
};

export default PostScreen;
