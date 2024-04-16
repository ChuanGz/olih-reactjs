import React from "react";

interface MenuItemRendererProps {
  item: {
    path?: string;
  };
  setPathname: React.Dispatch<React.SetStateAction<string>>;
  children: React.ReactNode;
}

const CustomMenuItemRenderer: React.FC<MenuItemRendererProps> = ({
  item,
  setPathname,
  children,
}) => {
  const handleClick = () => {
    setPathname(item.path || "/welcome");
  };

  return <div onClick={handleClick}>{children}</div>;
};

export default CustomMenuItemRenderer;
