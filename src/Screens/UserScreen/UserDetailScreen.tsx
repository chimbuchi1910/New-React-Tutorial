import axios from "axios";
import { useEffect, useState } from "react";

import React from "react";
import { useParams } from "react-router-dom";

const UserDetailScreen = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState<any>({});
  console.log(userInfo);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUserInfo(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <p>{userInfo?.id}</p>
      <p>{userInfo?.email}</p>
      <p>{userInfo?.name}</p>
      <p>{userInfo?.address}</p>
    </div>
  );
};

export default UserDetailScreen;
