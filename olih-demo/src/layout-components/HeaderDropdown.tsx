import React from "react";
import { Dropdown } from "antd";
import { SecurityScanOutlined, LogoutOutlined } from "@ant-design/icons";

interface HeaderDropdownProps {
  children: React.ReactNode;
}

const HeaderDropdown: React.FC<HeaderDropdownProps> = ({ children }) => {
  return (
    <Dropdown
      menu={{
        items: [
          {
            key: "profile",
            icon: <SecurityScanOutlined />,
            label: "profile",
          },
          {
            key: "logout",
            icon: <LogoutOutlined />,
            label: "logout",
          },
        ],
      }}
    >
      {children}
    </Dropdown>
  );
};

export default HeaderDropdown;