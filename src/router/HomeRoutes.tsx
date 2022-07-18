import { Home } from "../componetns/pages/Home";
import { Setting } from "../componetns/pages/Setting";
import { UserManagement } from "../componetns/pages/UserManagement";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: true,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: true,
    children: <Setting />
  }
];
