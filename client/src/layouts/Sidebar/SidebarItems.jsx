import { Menu, Typography } from "antd";
import React, { useState } from "react";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const items = [
  {
    key: "payment",
    icon: <MailOutlined size={20} weight="bold" />,
    label: (
      <>
        <span>payment</span>
        <Link to={"payment"} />
      </>
    ),
  },
  {
    label: (
      <>
        <span>about</span>
        <Link to={"about"} />
      </>
    ),
    key: "about",
    icon: <AppstoreOutlined size={20} weight="bold" />,
  },
];

const SidebarItems = ({ onClick, selectedKeys }) => {
  return (
    <Menu
      onClick={onClick}
      selectedKeys={selectedKeys}
      mode="verticle"
      items={items}
    />
  );
};

export default SidebarItems;
