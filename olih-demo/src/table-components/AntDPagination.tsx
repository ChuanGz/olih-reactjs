import React from "react";
import { Pagination } from "antd";

const AntDPagination: React.FC = () => (
  <Pagination
    total={20}
    showSizeChanger
    showQuickJumper
    showTotal={(total) => `Total ${total} items`}
  />
);

export default AntDPagination;
