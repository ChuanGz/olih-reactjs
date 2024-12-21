import React from "react";
import { MenuItemType } from "../../types/MenuItemType";

const MenuItem: React.FC<MenuItemType> = ({ item, setPathname, dom }) => {
  return <div onClick={() => setPathname(item.path || "/welcome")}>{dom}</div>;
};

export default MenuItem;
