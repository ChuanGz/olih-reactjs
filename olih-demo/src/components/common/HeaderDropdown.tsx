import React from "react";
import { Dropdown } from "antd";
import { SecurityScanOutlined, LogoutOutlined } from "@ant-design/icons";
import { HeaderDropdownProps } from "../../types/HeaderDropdownProps";

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
