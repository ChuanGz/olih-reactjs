import { MenuDataItem } from "@ant-design/pro-components";
import React from "react";

export interface MenuItemProps {
  item: MenuDataItem & {
    isUrl: boolean;
    onClick: () => void;
  };
  setPathname: (path: string) => void;
  dom: React.ReactNode;
}
