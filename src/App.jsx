
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from "./components/Page/Registration";
import Login from "./components/Page/Login";
import firebaseConfig from "./components/firebase/firebaseConfig";
import ForgotPassword from "./components/Page/ForgotPassword";
import Home from "./components/Page/Home";

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
]);
  

  return (
   <>
  <RouterProvider router={router} />,
   </>
  )
}

export default App
