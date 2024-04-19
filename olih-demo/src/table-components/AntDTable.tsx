import React, { useState } from "react";
import { Button, Table, TableColumnsType, Tag } from "antd";
import { defaultData } from "./fakeData/QuestionData";
import { QuestionType } from "../user-types/QuestionType";

const AntDTable = () => {
  const columns: TableColumnsType<QuestionType> = [
    {
      title: "Friend Id",
      dataIndex: "friendlyId",
      ellipsis: true,
      fixed: true,
      width: "auto",
    },
    {
      title: "Question Bank",
      dataIndex: "associate",
      ellipsis: true,
      fixed: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      ellipsis: true,
      render: (_, row) => {
        if (row?.status!.length > 7) {
          return (
            <Tag key={row?.status} color="green">
              {row?.status}
            </Tag>
          );
        } else {
          return (
            <Tag key={row?.status} color="orange">
              {row?.status}
            </Tag>
          );
        }
      },
      fixed: true,
      width: "auto",
      align: "center",
    },
    {
      title: "Category",
      key: "type",
      dataIndex: "type",
      ellipsis: true,
    },
    {
      title: "Question Number",
      dataIndex: "questionsNum",
      ellipsis: true,
    },
    {
      title: "Scoring Method",
      dataIndex: "scoringMethod",
      ellipsis: true,
    },
    {
      title: "Fraction",
      width: 150,
      dataIndex: "fraction",
      ellipsis: true,
    },
    {
      title: "Last Modified",
      dataIndex: "lastModified",
      ellipsis: true,
    },
    {
      title: "Created At",
      dataIndex: "created",
      ellipsis: true,
    },
    {
      title: "Option",
      fixed: "right",
      width: 200,
      ellipsis: true,
      render: (_, row) => [
        <Button size="small" type="primary">
          <b>View</b>
        </Button>,
        <Button size="small">
          <b>Edit</b>
        </Button>,
        <Button size="small" danger>
          <b>Delete</b>
        </Button>,
      ],
    },
  ];
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <Table<QuestionType>
      rowKey="id"
      rowSelection={rowSelection}
      columns={columns}
      dataSource={defaultData}
    />
  );
};

export default AntDTable;
