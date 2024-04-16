import {
  HarmonyOSOutlined,
  InfoOutlined,
  ProjectOutlined,
  SlackOutlined,
  SunOutlined,
} from "@ant-design/icons";

const MyFirstData = {
  route: {
    path: "/",
    routes: [
      {
        path: "/admin",
        name: "Admin Helper",
        icon: <HarmonyOSOutlined />,
        access: "canAdmin",
        component: "./Admin",
        routes: [
          {
            path: "/admin/sub-page1",
            name: "1 - Branches",
            icon: <SunOutlined />,
            component: "./Welcome",
          },
          {
            path: "/admin/sub-page2",
            name: "2 - Partners",
            icon: <SlackOutlined />,
            component: "./Welcome",
          },
          {
            path: "/admin/sub-page3",
            name: "3 - Items",
            icon: <ProjectOutlined />,
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
