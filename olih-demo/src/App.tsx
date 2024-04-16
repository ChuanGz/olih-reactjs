import { LogoutOutlined, SecurityScanOutlined } from "@ant-design/icons";
import type { ProSettings } from "@ant-design/pro-components";
import {
  PageContainer,
  ProCard,
  ProConfigProvider,
  ProLayout,
} from "@ant-design/pro-components";
import { Button, ConfigProvider, Dropdown } from "antd";
import { useState } from "react";
import defaultProps from "./_defaultProps";

const MyApp = () => {
  const [settings] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: "mix",
    splitMenus: true,
    title: "OLIH",
  });

  const [pathname, setPathname] = useState("/list/sub-page/sub-sub-page1");
  const [num, setNum] = useState(40);
  if (typeof document === "undefined") {
    return <div />;
  }
  return (
    <div
      id="test-pro-layout"
      style={{
        height: "100vh",
        overflow: "auto",
      }}
    >
      <ProConfigProvider hashed={false}>
        <ConfigProvider
          getTargetContainer={() => {
            return document.getElementById("test-pro-layout") || document.body;
          }}
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
            location={{
              pathname,
            }}
            token={{
              header: {
                colorBgMenuItemSelected: "rgba(0,0,0,0.04)",
              },
            }}
            siderMenuType="sub"
            menu={{
              collapsedShowGroupTitle: true,
            }}
            avatarProps={{
              src: "https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg",
              size: "small",
              title: "Kendy",
              render: (props, dom) => {
                return (
                  <Dropdown
                    menu={{
                      items: [
                        {
                          key: "profile",
                          icon: <SecurityScanOutlined />,
                          label: "profile",
                        },
                        {
                          key: "logout",
                          icon: <LogoutOutlined />,
                          label: "logout",
                        },
                      ],
                    }}
                  >
                    {dom}
                  </Dropdown>
                );
              },
            }}
            menuFooterRender={(props) => {
              if (props?.collapsed) return undefined;
              return (
                <div
                  style={{
                    textAlign: "center",
                    paddingBlockStart: 12,
                  }}
                >
                  <div>© 2024 Olih</div>
                </div>
              );
            }}
            onMenuHeaderClick={(e) => console.log(e)}
            menuItemRender={(item, dom) => (
              <div
                onClick={() => {
                  setPathname(item.path || "/welcome");
                }}
              >
                {dom}
              </div>
            )}
            {...settings}
            logo={false}
          >
            <PageContainer
              token={{
                paddingInlinePageContainerContent: num,
              }}
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

            {/* <SettingDrawer
              pathname={pathname}
              enableDarkTheme
              getContainer={(e: any) => {
                if (typeof window === "undefined") return e;
                return document.getElementById("test-pro-layout");
              }}
              settings={settings}
              onSettingChange={(changeSetting) => {
                setSetting(changeSetting);
              }}
              disableUrlParams={false}
            /> */}
          </ProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  );
};

export default MyApp;
