import { memo, FC } from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "../componetns/pages/Login";
import { Base } from "../componetns/pages/Base";
import { Home } from "../componetns/pages/Home";
import { UserManagement } from "../componetns/pages/UserManagement";
import { Setting } from "../componetns/pages/Setting";
import { Page404 } from "../componetns/pages/Page404";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="home" element={<Base />}>
        <Route index element={<Home />} />
        <Route path="user_management" element={<UserManagement />} />
        <Route path="setting" element={<Setting />} />
      </Route>
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
});
