import { BsCaretDownFill } from "react-icons/bs";
import { useState } from "react";
import PaystackPop from "@paystack/inline-js";

const FormData = ({ data }: any) => {
    const [name, setname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphonenumber] = useState("");
    const [amount, setamount] = useState("");
    const [inputValues, setInputValues] = useState(
        data.custom_fields.reduce((acc: any, field: any) => {
            acc[field.variable_name] = ""; // Initialize with empty values
            return acc;
        }, {})
    );

    const handleCustomInput = (value: string, identifier: string) => {
        setInputValues({
            ...inputValues,
            [identifier]: value,
        });
    };

    const handlePayWithPayStack = (e: React.FormEvent) => {
        e.preventDefault();
        const paystack = new PaystackPop();
        paystack.newTransaction({
            key: import.meta.env.VITE_API_KEY,
            amount: +amount * 100,
            email,
            firstname: name,
            lastname,
            slug: "adewale",
            onSuccess(transaction) {
                let message = `Payment Completed! ${transaction.refrence}`;
                setamount("");
                setname("");
                setlastname("");
                alert(message);
            },
            onCancel() {
                alert("You have Canceled it");
            },
        });
    };

    return (
        <>
            <form
                onSubmit={handlePayWithPayStack}
                className="border w-full  my-30 rounded bg-[#fbfbfb] p-6 mt-10 space-y-3"
            >
                <div className="flex justify-between w-full  gap-2 ">
                    <div className="flex-1 space-y-1">
                        <label
                            htmlFor="name"
                            className="text-sm text-slate-800 mb-2 font-medium"
                        >
                            First Name
                        </label>
                        <input
                            required
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            className="border focus:outline-none 
                        flex-1
                        w-full
                        focus:border-blue-600
                      border-slate-300 p-[0.3rem]"
                            type="text"
                            name="name"
                            id="name"
                        />
                    </div>
                    <div className="flex-1 space-y-1">
                        <label
                            htmlFor="lastname"
                            className="text-sm text-slate-800 mb-2 font-medium"
                        >
                            Last Name
                        </label>
                        <input
                            required
                            value={lastname}
                            onChange={(e) => setlastname(e.target.value)}
                            className="border focus:outline-none 
                        flex-1
                        w-full
                        focus:border-blue-600
                      border-slate-300 p-[0.3rem]"
                            type="text"
                            name="name"
                            id="name"
                        />
                    </div>
                </div>
                <div className="flex-1 space-y-1">
                    <label
                        htmlFor="lastname"
                        className="text-sm text-slate-800 mb-2 font-medium"
                    >
                        Email Address
                    </label>
                    <input
                        required
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        className="border focus:outline-none 
                        flex-1
                        w-full
                        focus:border-blue-600
                      border-slate-300 p-[0.3rem]"
                        type="email"
                        name="name"
                        id="name"
                    />
                </div>
                {data.collect_phone && (
                    <div className="flex-1 space-y-1">
                        <label
                            htmlFor="lastname"
                            className="text-sm text-slate-800 mb-2 font-medium"
                        >
                            Phone Number
                        </label>
                        <input
                            required
                            value={phone}
                            onChange={(e) => setphonenumber(e.target.value)}
                            className="border focus:outline-none 
                        flex-1
                        w-full
                        focus:border-blue-600
                      border-slate-300 p-[0.3rem]"
                            type="tel"
                            name="name"
                            id="name"
                        />
                    </div>
                )}

                <div className="flex flex-col items-baseline">
                    <p className="text-sm text-slate-800 mb-2 font-medium">
                        Amount to charge
                    </p>
                    <div className="flex w-full gap-3">
                        <div className="border w-[30%] px-3 border-slate-200 flex  items-center justify-between">
                            <div className="text-sm text-slate-600">
                                {data.currency}
                            </div>
                            <span className="text-slate-400 text-sm">
                                <BsCaretDownFill />
                            </span>
                        </div>
                        <input
                            required
                            value={amount}
                            onChange={(e) => setamount(e.target.value)}
                            className="border focus:outline-none 
                        flex-1
                        w-full
                        focus:border-blue-600
                      border-slate-300 p-[0.3rem]"
                            type="number"
                            name="name"
                            id="name"
                        />
                    </div>
                </div>

                {data.custom_fields &&
                    data.custom_fields.map((value: any, i: number) => (
                        <div
                            key={value.variable_name + i}
                            className="flex-1 space-y-1"
                        >
                            <label
                                htmlFor="lastname"
                                className="text-sm text-slate-800 mb-2 font-medium"
                            >
                                {value.variable_name}
                            </label>
                            <input
                                required
                                value={inputValues[value.variable_name]}
                                onChange={(e) =>
                                    handleCustomInput(
                                        e.target.value,
                                        value.variable_name
                                    )
                                }
                                className="border focus:outline-none 
                        flex-1
                        w-full
                        focus:border-blue-600
                      border-slate-300 p-[0.3rem]"
                                type="text"
                                name="name"
                                id="name"
                            />
                        </div>
                    ))}

                <div className="flex pt-5">
                    <button className="bg-[#3bb75e] px-3 p-[0.6rem] mx-auto text-white font-semibold text-sm rounded">
                        Pay Now
                    </button>
                </div>
            </form>
            <a
                target="_blank"
                className="my-12"
                href="https://paystack.com/what-is-paystack"
            >
                <img
                    alt="Paystack secured badge"
                    src="https://paystack.com/assets/payment/img/paystack-badge-cards-ngn.png"
                />
            </a>
        </>
    );
};

export default FormData;
