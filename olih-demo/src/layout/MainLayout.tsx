import type { ProSettings } from "@ant-design/pro-components";
import { ProConfigProvider } from "@ant-design/pro-components";
import { ConfigProvider } from "antd";
import { SetStateAction, useState } from "react";
import { CustomProLayout } from "./layout-components/CustomProLayout";
import CustomMenuFooter from "./layout-components/CustomMenuFooter";
import CustomPageContainer from "./layout-components/CustomPageContainer";
import AvatarDropdown from "./layout-components/AvatarDropdown";

const MainLayout = () => {
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
          <CustomProLayout
            pathname={pathname}
            settings={settings}
            num={num}
            setNum={setNum}
            setPathname={setPathname}
          ></CustomProLayout>
        </ConfigProvider>
      </ProConfigProvider>
    </div>
  );
};

export default MainLayout;
