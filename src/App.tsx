import "./App.css";
import ErrorPage from "./components/ErrorPage";
import PaymentPage, { loader as PaymentPageLoader} from "./components/PaymentPage/PaymentPage";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
function App() {
    const router = createBrowserRouter([
        {
            errorElement: <ErrorPage/> , 
            loader: PaymentPageLoader ,
            path: "/pay/:slag",
            element: <PaymentPage />,
        },
    ]);
    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    );
}

export default App;
