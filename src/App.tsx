import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Content from "./components/content";
import Navigation from "./components/navigation";
import styles from "./styles";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import Profile from "./pages/profile";

const Layout = () => {
  return (
    <div className={`${styles.boxWidth}`}>
      <Navigation />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Content />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
function App() {
  return (
    <div className={` bg-slate-900 text-white h-screen`}>
      {" "}
      <KindeProvider
        clientId="8e3d17631d4f4e5188e4ec53eae8b9d7"
        domain="https://bnjmn.kinde.com"
        redirectUri="http://localhost:5173"
        logoutUri="http://localhost:5173">
        <RouterProvider router={router} />{" "}
      </KindeProvider>
    </div>
  );
}

export default App;
