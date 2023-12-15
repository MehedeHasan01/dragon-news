import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorMesage from "../Pages/ErrorMesage/ErrorMesage";
import Home from "../Pages/Home/Home";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRouter from "../PrivetRoute/PrivetRouter";
import About from "../Pages/About/About";
// import About from "../Pages/About/About";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorMesage/>,
        children:[
            {
                path:'/',
                element: <Home/>,
                loader: ()=> fetch('/news.json')
            },
            {
                path: '/newsDetails/:id',
                element: <PrivetRouter><NewsDetails/></PrivetRouter>,
                loader: ()=> fetch('/news.json')
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path:'/register',
                element: <Register/>
            }

        ]
    }
])

export default Route;