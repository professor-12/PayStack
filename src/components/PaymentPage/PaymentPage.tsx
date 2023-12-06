import Form from "../Form"

const PaymentPage = () => {

  return (
      <div className="flex  px-6 py-12 flex-col items-center  mx-auto container h-screen md:w-[60%] lg:w-[30%]">
          <div className="flex text-slate-800/90 text-center flex-col space-y-4">
              <img
                  className="w-1/2 mx-auto"
                  src="https://public-files-paystack-prod.s3.eu-west-1.amazonaws.com/integration-logos/FYBPg2pKNDMswhX5hrNG "
                  alt=""
              />
              <div>
                          <h1 className="text-[1.2rem] font-normal
                   text-slate-800/90">
                      2024 Wedding Donation
                  </h1>
                  <p
                      className="text-[.84rem]
                          text-gray-500 tracking-[.1rem]"
                  >
                      BY NOLIFE INTERNATIONAL LIMITED
                  </p>
              </div>
              <p className="text-sm">2024 Wedding Donation</p>
          </div>
          <Form />
      </div>
  );
}

export default PaymentPage