import FormData from "../Form";
import { json, useLoaderData } from "react-router-dom";

const PaymentPage = () => {
    const { data }: any = useLoaderData();
     

    return (
        <div className="flex p-2 py-12 flex-col items-center  mx-auto container h-screen md:w-[60%] lg:w-[30%]">
            <div className="flex text-slate-800/90 text-center flex-col space-y-4">
                <img
                    className="w-[60px] mx-auto object-cover"
                    src={`${data ?  data.metadata.image_path : "https://public-files-paystack-prod.s3.eu-west-1.amazonaws.com/integration-logos/paystack.jpg"}`}
                    alt=""
                />
                <div>
                    <h1
                        className="text-[1.2rem] font-normal
                   text-slate-800/90"
                    >
                        { data.name }
                    </h1>
                    <p
                        className="text-[.84rem]
                          text-gray-500 tracking-[.1rem]"
                    >
                        BY NOLIFE INTERNATIONAL LIMITED
                    </p>
                </div>
                <p className="text-sm">{data.description}</p>
            </div>
            <FormData data={data}/>
        </div>
    );
};

export default PaymentPage;

export const loader = async ({ params }: any) => {
    const id = params.slag;
    const data = await fetch(`https://api.paystack.co/page/` + id, {
        headers: {
            "Content-Type": "application/json",
            Authorization:
                "Bearer sk_test_88a9e0272a102e5c983c0df0a4754a4b578aeb76",
        },
    });
    if (!data.ok) throw json(data.status);
    return data;
};
