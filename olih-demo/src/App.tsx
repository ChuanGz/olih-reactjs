import React, { useState } from "react";
import { ConfigProvider, Button } from "antd";
import enUS from "antd/locale/en_US";
import {
  PageContainer,
  ProConfigProvider,
  ProLayout,
  ProSettings,
} from "@ant-design/pro-components";
import HeaderDropdown from "./components/common/HeaderDropdown";
import MenuFooter from "./components/common/MenuFooter";
import MenuItem from "./components/common/MenuItem";
import defaultProps from "./data/LayoutRoutedData";
import AntDTable from "./components/feautures/question/AntDTable";

const App: React.FC = () => {
  const [pathname, setPathname] = useState("/list/sub-page/sub-sub-page1");
  const [num, setNum] = useState(40);

  const [settings] = useState<Partial<ProSettings> | undefined>({
    fixedHeader: true,
    fixSiderbar: true,
    layout: "mix",
    splitMenus: true,
    siderMenuType: "group",
    colorWeak: false,
    colorPrimary: "orange",
    title: "OLIH-Demo",
    navTheme: "light",
    contentWidth: "Fluid",
  });
  if (typeof document === "undefined") {
    return <div />;
  }

  return (
    <div id="pro-layout" style={{ height: "100vh", overflow: "auto" }}>
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          locale={enUS}
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
            menu={{ collapsedShowGroupTitle: true }}
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
                <Button key="1" onClick={() => setNum(num > 0 ? 0 : 40)}>
                  Activate
                </Button>,
                <Button key="2" danger>
                  Remove
                </Button>,
              ]}
              subTitle="No Implementation"
            >
              <AntDTable></AntDTable>
            </PageContainer>
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  );
};

export default App;
