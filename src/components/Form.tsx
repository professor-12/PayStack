import { BsCaretDownFill } from "react-icons/bs";
import { useState } from "react";
import PaystackPop from "@paystack/inline-js";

const Form = () => {
    const [name, setname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphonenumber] = useState("");
    const [amount, setamount] = useState("");
    const [Address, setAddress] = useState("");
    const [attend, setattend] = useState("");

    const handlePayWithPayStack = (e: React.FormEvent) => {
        e.preventDefault();
        const paystack = new PaystackPop();
        paystack.newTransaction({
            key: import.meta.env.VITE_APIKEY,
            amount: +amount * 100,
            email,
              firstname: name,
            address:Address,
            lastname,
            onSuccess(transaction) {
                  let message = `Payment Completed! ${transaction.refrence}`;
                  setAddress("")
                  setamount("")
                  setname("")
                  setlastname("")
                  setattend("")
                  alert(message)
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
                        Email
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

                <div className="flex flex-col items-baseline">
                    <p className="text-sm text-slate-800 mb-2 font-medium">
                        Amount to charge
                    </p>
                    <div className="flex w-full gap-3">
                        <div className="border w-[30%] px-3 border-slate-200 flex  items-center justify-between">
                            <div className="text-sm text-slate-600">NGN</div>
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
                <div className="flex-1 space-y-1">
                    <label
                        htmlFor="lastname"
                        className="text-sm text-slate-800 mb-2 font-medium"
                    >
                        Address
                    </label>
                    <input
                        required
                        onChange={(e) => setAddress(e.target.value)}
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
                        Will you be attending
                    </label>
                    <input
                        required
                        value={attend}
                        onChange={(e) => setattend(e.target.value)}
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

export default Form;
