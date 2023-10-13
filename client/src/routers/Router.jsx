import { Empty, Layout } from "antd";
import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../layouts/Sidebar/Sidebar";
import Payment from "../pages/Payment";
import About from "../pages/About";

const Router = () => {
  const [menu, setMenu] = useState();
  return (
    <BrowserRouter>
      {true ? (
        <Layout
          style={{
            height: "100vh",
          }}
        >
          <Sidebar menu={menu} />
          <Routes>
            <Route path="payment" element={<Payment setMenu={setMenu} />} />
            <Route path="about" element={<About />} />
            <Route path="/" element={<Navigate to="/payment" />} />
          </Routes>
        </Layout>
      ) : (
        <Empty></Empty>
      )}
    </BrowserRouter>
  );
};

export default Router;
