import { json } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const { data }: any = useLoaderData();
    console.log(data);
    return (
        <div className="bg-slate-100  min-h-screen  justify-between items-center">
            <nav className="flex mb-12 justify-between lg:w-[80%] mx-auto  items-center  shadow-md p-6">
                <div className="font-semibold text-lg ">
                    List of Valid Slags
                </div>
                <nav className="text-lg">
                    <ul>
                        <li className="text-xl">Emmanuel-Paystack</li>
                    </ul>
                </nav>
            </nav>

            <table className=" text-slate-600">
                <thead className="table-auto">
                    <tr className="font-semibold">
                        <td className="pl-12">
                            <div className="bg-black p-1 w-2 h-2  aspect-auto rounded-full" />
                        </td>
                        <td>Name</td>
                        <td>Type</td>
                        <td>Slag</td>
                        <td>Link</td>
                    </tr>
                </thead>

                <tbody>
                    {data.map((value: any) => {
                        return (
                            <tr key={value.slug} className="table-auto">
                                <td className="pl-12">
                                    <div className="bg-red-500 p-1 w-2 h-2  aspect-auto rounded-full" />
                                </td>
                                <td>{value.name}</td>
                                <td className="font-normal">{value.type}</td>
                                <td>{value.slug}</td>
                                <td className="text-blue-500">
                                    <a
                                        target="_blank"
                                        className="border px-3 border-slate-300 rounded-xl p-1"
                                        href={
                                            "https://paystack-emmanuel.netlify.app/pay/" +
                                            value.slug
                                        }
                                    >
                                        Link
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Home;

export const ListPayment = async () => {
    const data = await fetch("https://api.paystack.co/page", {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + import.meta.env.VITE_APIKEY,
        },
    });

    if (!data.ok) throw json(data);
    return data;
};
