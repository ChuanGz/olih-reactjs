import type {
  ActionType,
  EditableFormInstance,
  ProColumns,
  ProFormInstance,
} from "@ant-design/pro-components";
import { EditableProTable, ProCard, ProForm } from "@ant-design/pro-components";
import React, { useRef, useState } from "react";
import AntDPagination from "./AntDPagination";
import { Button, Tag } from "antd";
import { defaultData } from "./fakeData/QuestionData";
import { QuestionType } from "../user-types/QuestionType";

const AntDTable = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => []);
  const formRef = useRef<ProFormInstance<any>>();
  const actionRef = useRef<ActionType>();
  const editableFormRef = useRef<EditableFormInstance>();
  const columns: ProColumns<QuestionType>[] = [
    {
      title: "Friend Id",
      dataIndex: "friendlyId",
      valueType: "text",
      ellipsis: true,
      fixed: true,
      width: "auto",
    },
    {
      title: "Question Bank",
      dataIndex: "associate",
      valueType: "text",
      ellipsis: true,
      fixed: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      valueType: "text",
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
          <Button>Delete</Button>
        </a>,
        <a
          key="edit"
          color="blue"
          onClick={() => {
            debugger;
            actionRef.current?.startEditable(row.id);
          }}
        >
          <Button>Edit</Button>
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
   <ProCard>
     <div
       style={{
         maxWidth: 1200,
         margin: "auto",
       }}
     >
       <ProForm<{
         table: QuestionType[];
       }>
         formRef={formRef}
         initialValues={{
           table: defaultData,
         }}
       >
         <EditableProTable<QuestionType>
           rowKey="id"
           scroll={{
             x: 1400,
             y: 900,
           }}
           rowSelection={rowSelection}
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
               };
             },
           }}
           editable={{
             type: "multiple",
             editableKeys,
             onChange: setEditableRowKeys,
           }}
         />
         <AntDPagination></AntDPagination>
       </ProForm>
     </div>
   </ProCard>
 );
};

export default AntDTable;
