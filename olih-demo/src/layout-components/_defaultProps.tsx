import {
  ApartmentOutlined,
  AuditOutlined,
  BankOutlined,
  CloudServerOutlined,
  IdcardOutlined,
  ProductOutlined,
} from "@ant-design/icons";

const MyFirstData = {
  route: {
    path: "/",
    routes: [
      {
        path: "/admin",
        name: "Admin",
        icon: <CloudServerOutlined />,
        access: "canAdmin",
        component: "./Admin",
        routes: [
          {
            path: "/admin/sub-page1",
            name: "1 - Branches",
            icon: <ApartmentOutlined />,
            component: "./Welcome",
          },
          {
            path: "/admin/sub-page2",
            name: "2 - Partners",
            icon: <IdcardOutlined />,
            component: "./Welcome",
          },
          {
            path: "/admin/sub-page3",
            name: "3 - Items",
            icon: <ProductOutlined />,
            component: "./Welcome",
          },
          {
            path: "/admin/sub-page4",
            name: "4 - Banks",
            icon: <BankOutlined />,
            component: "./Welcome",
          },
          {
            path: "/admin/sub-page5",
            name: "5- Orders",
            icon: <AuditOutlined />,
            component: "./Welcome",
          },
        ],
      },
    ],
  },
  location: {
    pathname: "/",
  },
};

export default MyFirstData;
