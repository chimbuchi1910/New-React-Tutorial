import React from "react";
import User from "../../Screens/UserScreen/User";
import UserDetailScreen from "../../Screens/UserScreen/UserDetailScreen";
import UserPost from "../../Screens/UserPostScreen/UserPost";
import PostScreen from "../../Screens/UserPostScreen/PostScreen";
import SignUp from "../../Screens/SignUpScreen/SignUp";
import CommentScreen from "../../Screens/commentScreen/CommentScreen";
import UpdateUser from "../../Screens/UserPostScreen/UpdateUser";

const Home = () => {
  return (
    <div>
      {/* <CommentScreen /> */}
      {/* <SignUp /> */}
      <UserPost />
      <PostScreen />

      {/* <User />
      <UserDetailScreen /> */}
    </div>
  );
};

export default Home;
