import { createBrowserRouter } from "react-router";
import Home from "../page/home";
import MainLayout from "../layouts/MainLayout";
import Login from "../page/Login";
import Register from "../page/Register";
import NotFound from "../page/NotFound";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "login", element: <Login /> },
			{ path: "register", element: <Register /> },
		],
	},
]);
