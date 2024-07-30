import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManageMent } from "../components/pages/UserManagement";

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
