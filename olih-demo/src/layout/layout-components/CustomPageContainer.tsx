import React from "react";
import { PageContainer, ProCard } from "@ant-design/pro-components";
import { Button } from "antd";

interface CustomPageContainerProps {
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
}

const CustomPageContainer: React.FC<CustomPageContainerProps> = ({
  num,
  setNum,
}) => {
  return (
    <PageContainer
      token={{ paddingInlinePageContainerContent: num }}
      extra={[
        <Button
          key="1"
          type="primary"
          onClick={() => {
            setNum(num > 0 ? 0 : 40);
          }}
        >
          Create New
        </Button>,
        <Button key="2">Edit</Button>,
      ]}
      subTitle="No Implementation"
      footer={[
        <Button key="2" type="primary">
          OK
        </Button>,
        <Button key="3">CANCEL</Button>,
      ]}
    >
      <ProCard
        style={{
          height: "200vh",
          minHeight: 800,
        }}
      >
        <div />
      </ProCard>
    </PageContainer>
  );
};

export default CustomPageContainer;
