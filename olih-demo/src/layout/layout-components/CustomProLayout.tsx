import React, { useRef } from "react";
import { ProLayout } from "@ant-design/pro-layout";
import CustomMenuItemRenderer from "./CustomMenuItemRenderer";
import CustomMenuFooter from "./CustomMenuFooter";
import AvatarDropdown from "./AvatarDropdown";
import CustomPageContainer from "./CustomPageContainer";

interface CustomProLayoutProps {
  pathname: string;
  settings: any;
  num: number;
  setNum: React.Dispatch<React.SetStateAction<number>>;
  setPathname: React.Dispatch<React.SetStateAction<string>>;
}

export const CustomProLayout: React.FC<CustomProLayoutProps> = ({
  pathname,
  settings,
  num,
  setNum,
  setPathname,
}) => {
  return (
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
      location={{ pathname }}
      token={{
        header: {
          colorBgMenuItemSelected: "rgba(0,0,0,1.04)",
        },
      }}
      siderMenuType="sub"
      menu={{ collapsedShowGroupTitle: true }}
      avatarProps={() => {}}
      menuFooterRender={(props) => {}}
      menuItemRender={(item, dom) => (
        <CustomMenuItemRenderer item={item} setPathname={setPathname}>
          {dom}
        </CustomMenuItemRenderer>
      )}
      {...settings}
      logo={false}
      onMenuHeaderClick={(e) => console.log(e)}
    >
      <CustomPageContainer num={num} setNum={setNum}></CustomPageContainer>
    </ProLayout>
  );
};
