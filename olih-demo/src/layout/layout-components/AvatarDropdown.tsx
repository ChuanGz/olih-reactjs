import React from "react";
import { Dropdown, Button } from "antd"; // Import your Dropdown and Button components
import { LogoutOutlined, SecurityScanOutlined } from "@ant-design/icons";

interface AvatarDropdownProps {
  src: string;
  title: string;
  render: (props: {
    src: string;
    title: string;
    children: JSX.Element;
  }) => JSX.Element;
}

const AvatarDropdown: React.FC<AvatarDropdownProps> = ({
  src,
  title,
  render,
}) => {
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
      {render({ src, title, children: <Button>{title}</Button> })}
    </Dropdown>
  );
};

export default AvatarDropdown;
