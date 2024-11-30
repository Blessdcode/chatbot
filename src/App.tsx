import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Content from "./components/content";
import Navigation from "./components/navigation";
import styles from "./styles";




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
     
    ],
  },
]);
function App() {
  return (
    <div className={` bg-slate-900 text-white h-screen`}>
      {" "}
      <RouterProvider router={router} />{" "}
    </div>
  );
}

export default App;
