import Landing from "./pages/Landing";
import Error from "./pages/Error";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,

  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
