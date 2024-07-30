import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login";
import { HomeRoutes } from "./HomeRoutes";
import { Home } from "../components/Home";
import { Page404 } from "../components/Page404";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home*"
        element={
          <Routes>
            {HomeRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.children}
              />
            ))}
          </Routes>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
