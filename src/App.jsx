
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from "./components/Page/Registration";
import Login from "./components/Page/Login";
import firebaseConfig from "./components/firebase/firebaseConfig";

function App() {
  const router = createBrowserRouter([
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
  

  return (
   <>
  <RouterProvider router={router} />,
   </>
  )
}

export default App
