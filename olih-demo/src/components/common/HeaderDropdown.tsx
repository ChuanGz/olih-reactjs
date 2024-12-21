import React from "react";
import { Dropdown, Menu } from "antd";
import { SecurityScanOutlined, LogoutOutlined } from "@ant-design/icons";
import { HeaderDropdownType } from "../../types/DropdownType";

const HeaderDropdown: React.FC<HeaderDropdownType> = ({ children }) => {
  const handleItemClick = (key: string) => {
    // Handle the click event based on the key
    if (key === "profile") {
      alert("test profile");
    } else if (key === "logout") {
      alert("test log out");
    }
  };

  return (
    <Menu>
      <Menu.Item
        key="profile"
        icon={<SecurityScanOutlined />}
        onClick={() => handleItemClick("profile")}
      >
        Profile
      </Menu.Item>
      <Menu.Item
        key="logout"
        icon={<LogoutOutlined />}
        onClick={() => handleItemClick("logout")}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
};

export default HeaderDropdown;