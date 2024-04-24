import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
// import { action as signInAction } from "./features/user/SignInForm";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
