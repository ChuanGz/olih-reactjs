import { MenuDataItem } from "@ant-design/pro-components";
import React from "react";

interface MenuItemProps {
  item: MenuDataItem & {
    isUrl: boolean;
    onClick: () => void;
  };
  setPathname: (path: string) => void;
  dom: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, setPathname, dom }) => {
  return <div onClick={() => setPathname(item.path || "/welcome")}>{dom}</div>;
};

export default MenuItem;
