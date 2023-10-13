import "../style.css";

import { Space } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useEffect, useState } from "react";
import SidebarItems from "./SidebarItems";

const Sidebar = ({ menu }) => {
  const [current, setCurrent] = useState(menu);

  useEffect(() => {
    setCurrent(menu);
  }, [menu]);

  const onClick = (e) => {
    console.log(e.key);
    setCurrent(e.key);
  };
  return (
    <Sider>
      <Space
        direction="vertical"
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <SidebarItems onClick={onClick} selectedKeys={[current]} />
      </Space>
    </Sider>
  );
};

export default Sidebar;
