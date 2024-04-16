import React, { useState } from "react";
import { ConfigProvider, Button } from "antd";
import {
  PageContainer,
  ProCard,
  ProConfigProvider,
  ProLayout,
  ProSettings,
} from "@ant-design/pro-components";
import HeaderDropdown from "./layout-components/HeaderDropdown";
import MenuFooter from "./layout-components/MenuFooter";
import MenuItem from "./layout-components/MenuItem";
import defaultProps from "./layout-components/_defaultProps";

const App: React.FC = () => {
  const [pathname, setPathname] = useState("/list/sub-page/sub-sub-page1");
  const [num, setNum] = useState(40);

  const [settings] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: "mix",
    splitMenus: true,
    title: "OLIH",
  });
  if (typeof document === "undefined") {
    return <div />;
  }

  return (
    <div id="pro-layout" style={{ height: "100vh", overflow: "auto" }}>
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() =>
            document.getElementById("pro-layout") || document.body
          }
        >
          <ProLayout
            prefixCls="my1-prefix"
            bgLayoutImgList={[
              {
                src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
                left: 85,
                bottom: 100,
                height: "303px",
              },
              {
                src: "https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png",
                bottom: -68,
                right: -45,
                height: "303px",
              },
              {
                src: "https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png",
                bottom: 0,
                left: 0,
                width: "331px",
              },
            ]}
            {...defaultProps}
            location={{ pathname }}
            token={{ header: { colorBgMenuItemSelected: "rgba(0,0,0,0.04)" } }}
            siderMenuType="sub"
            menu={{ collapsedShowGroupTitle: false }}
            avatarProps={{
              src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
              size: "small",
              title: "Kendy",
              render: (props, dom) => <HeaderDropdown>{dom}</HeaderDropdown>,
            }}
            menuFooterRender={() => <MenuFooter />}
            onMenuHeaderClick={(e) => console.log(e)}
            menuItemRender={(item, dom) => (
              <MenuItem item={item} setPathname={setPathname} dom={dom} />
            )}
            {...settings}
            logo={true}
          >
            <PageContainer
              token={{ paddingInlinePageContainerContent: num }}
              extra={[
                <Button
                  key="1"
                  type="primary"
                  onClick={() => setNum(num > 0 ? 0 : 40)}
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
              <ProCard style={{ height: "200vh", minHeight: 800 }}>
                <div />
              </ProCard>
            </PageContainer>
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  );
};

export default App;
