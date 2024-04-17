import React from "react";
import { Pagination } from "antd";

const CPagination: React.FC = () => (
  <Pagination
    total={1000}
    showSizeChanger
    showQuickJumper
    showTotal={(total) => `Total ${total} items`}
  />
);

export default CPagination;
