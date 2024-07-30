import { Home } from "../components/Home";
import { Page404 } from "../components/Page404";
import { Setting } from "../components/Setting";
import { UserManageMent } from "../components/UserManagement";

export const HomeRoutes = [
  {
    path: "/",
    children: <Home />,
  },
  {
    path: "/setting",
    children: <Setting />,
  },
  {
    path: "/user_management",
    children: <UserManageMent />,
  },
  {
    path: "*",
    children: <Page404 />,
  },
];
