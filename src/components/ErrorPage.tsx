import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error: any = useRouteError();
    console.log(error);

    if (error.data == 404) {
        return (
            <div className="flex p-12 h-screen bg-slate-50 flex-col items-center">
                <img
                    src="/FourZeroFour.png"
                    className="h-[40%]"
                    alt="404 Image"
                />
                <div className="mt-2">
                    <h1 className="text-center text-2xl ">
                        <span className="text-red-400">oops!</span> Page not
                        found
                    </h1>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex p-12 h-screen bg-slate-50 flex-col items-center">
                <img
                    src="/FourZeroFour.png"
                    className="h-[40%]"
                    alt="404 Image"
                />
                <div className="mt-2">
                    <h1 className="text-center text-2xl ">
                        <span className="text-red-400">oops!</span> Page not
                        found
                    </h1>
                </div>
            </div>
        );
    }
};

export default ErrorPage;
