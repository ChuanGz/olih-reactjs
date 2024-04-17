import type {
  ActionType,
  EditableFormInstance,
  ProColumns,
  ProFormInstance,
} from "@ant-design/pro-components";
import { EditableProTable, ProCard, ProForm } from "@ant-design/pro-components";
import React, { useRef, useState } from "react";
import CPagination from "./CPagination";
import { Button } from "antd";
import { defaultData } from "./defaultData";
import { DataSourceType } from "./DataSourceType";

const CTable = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => []);
  const formRef = useRef<ProFormInstance<any>>();
  const actionRef = useRef<ActionType>();
  const editableFormRef = useRef<EditableFormInstance>();
  const columns: ProColumns<DataSourceType>[] = [
    {
      title: "Id",
      dataIndex: "friendlyId",
      valueType: "text",
      ellipsis: true,
    },
    {
      title: "Question Bank",
      dataIndex: "associate",
      valueType: "text",
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      valueType: "text",
      ellipsis: true,
    },

    {
      title: "Phân loại",
      key: "type",
      dataIndex: "type",
      valueType: "select",
      valueEnum: {
        multiple: { text: "Default", status: "Default" },
        radio: { text: "Warning", status: "Warning" },
        vacant: {
          text: "Error",
          status: "Error",
        },
        judge: {
          text: "Success",
          status: "Success",
        },
      },
    },
    {
      title: "Question Number",
      dataIndex: "questionsNum",
      valueType: "digit",
    },
    {
      title: "Scoring Method",
      dataIndex: "scoringMethod",
      valueType: "select",
      request: async () => [
        {
          value: "discrete",
          label: "Discrete",
        },
        {
          value: "continuous",
          label: "Continue",
        },
      ],
      fieldProps: (_, { rowIndex }) => {
        return {
          onSelect: () => {
            editableFormRef.current?.setRowData?.(rowIndex, { fraction: [] });
          },
        };
      },
    },
    {
      title: "Fraction",
      width: 150,
      dataIndex: "fraction",
      valueType: (record) => {
        const scoringMethod = record?.scoringMethod;
        if (scoringMethod === "discrete") return "select";
        return "digit";
      },
      fieldProps: {
        mode: "multiple",
      },
      request: async () =>
        ["A", "B", "D", "E", "F"].map((item, index) => ({
          label: item,
          value: index,
        })),
    },
    {
      title: "Last Modified",
      dataIndex: "lastModified",
      valueType: "date",
      ellipsis: true,
    },
    {
      title: "Created At",
      dataIndex: "created",
      valueType: "date",
      ellipsis: true,
    },
    {
      title: "Option",
      valueType: "option",
      render: (_, row) => [
        <a
          key="delete"
          onClick={() => {
            const tableDataSource = formRef.current?.getFieldValue(
              "table"
            ) as DataSourceType[];
            formRef.current?.setFieldsValue({
              table: tableDataSource.filter((item) => item.id !== row?.id),
            });
          }}
        >
          <Button>Delete</Button>
        </a>,
        <a
          key="edit"
          onClick={() => {
            actionRef.current?.startEditable(row.id);
          }}
        >
          <Button>Edit</Button>
        </a>,
      ],
    },
  ];

  return (
    <ProCard>
      <div
        style={{
          maxWidth: 1200,
          margin: "auto",
        }}
      >
        <ProForm<{
          table: DataSourceType[];
        }>
          formRef={formRef}
          initialValues={{
            table: defaultData,
          }}
        >
          <EditableProTable<DataSourceType>
            rowKey="id"
            scroll={{
              x: true,
            }}
            editableFormRef={editableFormRef}
            controlled
            actionRef={actionRef}
            maxLength={10}
            name="table"
            columns={columns}
            recordCreatorProps={{
              record: (index) => {
                return {
                  id: index + 1,
                  friendlyId: "NM_0" + (index + 1).toString(2),
                };
              },
            }}
            editable={{
              type: "multiple",
              editableKeys,
              onChange: setEditableRowKeys,
            }}
          />
          <CPagination></CPagination>
        </ProForm>
      </div>
    </ProCard>
  );
};

export default CTable;
