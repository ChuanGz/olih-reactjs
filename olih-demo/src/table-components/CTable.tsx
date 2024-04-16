import type {
  ActionType,
  EditableFormInstance,
  ProColumns,
  ProFormInstance,
} from "@ant-design/pro-components";
import {
  EditableProTable,
  ProCard,
  ProForm,
  ProFormDependency,
  ProFormDigit,
} from "@ant-design/pro-components";
import React, { useRef, useState } from "react";
import CPagination from "./CPagination";

type DataSourceType = {
  id: React.Key;
  associate?: string;
  questionsNum?: number;
  type?: string;
  fraction?: number;
  scoringMethod?: string;
};

const defaultData: DataSourceType[] = [
  {
    id: 1,
    associate: "câu hỏi 01",
    questionsNum: 10,
    type: "multiple",
    scoringMethod: "continuous",
    fraction: 20,
  },
  {
    id: 2,
    associate: "Câu hỏi 02",
    questionsNum: 10,
    scoringMethod: "continuous",
    type: "radio",
    fraction: 20,
  },
  {
    id: 3,
    associate: "Câu hỏi 03",
    questionsNum: 10,
    type: "judge",
    scoringMethod: "continuous",
    fraction: 20,
  },
  {
    id: 4,
    associate: "Câu hỏi 04",
    questionsNum: 10,
    scoringMethod: "continuous",
    type: "vacant",
    fraction: 20,
  },
  {
    id: 5,
    associate: "câu hỏi 05",
    questionsNum: 10,
    type: "multiple",
    scoringMethod: "continuous",
    fraction: 20,
  },
  {
    id: 6,
    associate: "Câu hỏi 06",
    questionsNum: 10,
    scoringMethod: "continuous",
    type: "radio",
    fraction: 20,
  },
  {
    id: 7,
    associate: "Câu hỏi 07",
    questionsNum: 10,
    type: "judge",
    scoringMethod: "continuous",
    fraction: 20,
  },
  {
    id: 8,
    associate: "Câu hỏi 08",
    questionsNum: 10,
    scoringMethod: "continuous",
    type: "vacant",
    fraction: 20,
  },
  {
    id: 9,
    associate: "câu hỏi 09",
    questionsNum: 10,
    type: "multiple",
    scoringMethod: "continuous",
    fraction: 20,
  },
  {
    id: 10,
    associate: "Câu hỏi 10",
    questionsNum: 10,
    scoringMethod: "continuous",
    type: "radio",
    fraction: 20,
  },
  {
    id: 11,
    associate: "Câu hỏi 11",
    questionsNum: 10,
    type: "judge",
    scoringMethod: "continuous",
    fraction: 20,
  },
  {
    id: 12,
    associate: "Câu hỏi 12",
    questionsNum: 10,
    scoringMethod: "continuous",
    type: "vacant",
    fraction: 20,
  },
];

const CTable = () => {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() => []);
  const formRef = useRef<ProFormInstance<any>>();
  const actionRef = useRef<ActionType>();
  const editableFormRef = useRef<EditableFormInstance>();
  const columns: ProColumns<DataSourceType>[] = [
    {
      title: "Question Bank",
      dataIndex: "associate",
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
          Delete
        </a>,
        <a
          key="edit"
          onClick={() => {
            actionRef.current?.startEditable(row.id);
          }}
        >
          Edit
        </a>,
      ],
    },
  ];

  return (
    <ProCard>
      <div
        style={{
          maxWidth: 800,
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
                return { id: index + 1 };
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
