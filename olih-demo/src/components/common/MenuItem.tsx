import React from "react";
import { MenuItemProps } from "../../types/MenuItemProps";

const MenuItem: React.FC<MenuItemProps> = ({ item, setPathname, dom }) => {
  return <div onClick={() => setPathname(item.path || "/welcome")}>{dom}</div>;
};

export default MenuItem;
