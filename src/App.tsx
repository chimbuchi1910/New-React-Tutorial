import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Homepage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetailScreen from "./Screens/UserScreen/UserDetailScreen";
import PostScreen from "./Screens/UserPostScreen/PostScreen";
import UpdateUser from "./Screens/UserPostScreen/UpdateUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/userPost/:firstName/:_id" element={<PostScreen />} /> */}
          <Route path="/UpdateUser/:firstName/:_id" element={<UpdateUser />} />
          <Route path="/userDetail/:id" element={<UserDetailScreen />} />
          {/* <Route path="/userDetail/:id" element={<UserDetailScreen />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
