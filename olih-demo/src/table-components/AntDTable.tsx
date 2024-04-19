import type { ActionType, ProFormInstance } from "@ant-design/pro-components";
import { ProCard, ProForm } from "@ant-design/pro-components";
import React, { useRef, useState } from "react";
import { Button, Table, TableColumnsType, Tag } from "antd";
import { defaultData } from "./fakeData/QuestionData";
import { QuestionType } from "../user-types/QuestionType";

const AntDTable = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => []);
  const formRef = useRef<ProFormInstance<any>>();
  const actionRef = useRef<ActionType>();
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
        if (row?.status === "Active") {
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
    },
    {
      title: "Question Number",
      dataIndex: "questionsNum",
    },
    {
      title: "Scoring Method",
      dataIndex: "scoringMethod",
    },
    {
      title: "Fraction",
      width: 150,
      dataIndex: "fraction",
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
      render: (_, row) => [
        <a
          key="delete"
          color="red"
          onClick={() => {
            const tableDataSource = formRef.current?.getFieldValue(
              "table"
            ) as QuestionType[];
            formRef.current?.setFieldsValue({
              table: tableDataSource.filter((item) => item.id !== row?.id),
            });
          }}
        >
          Delete |
        </a>,
        <a
          key="edit"
          color="blue"
          onClick={() => {
            actionRef.current?.startEditable(row.id);
          }}
        >
          | Edit
        </a>,
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
      scroll={{
        x: 1400,
        y: 900,
      }}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={defaultData}
    />
  );
};

export default AntDTable;
