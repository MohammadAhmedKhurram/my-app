import Banner from "../components/Banner";

export default function Login() {
  return (
    <div>
      <div>
        <Banner
          title="Home"
          title2="Pages"
          heading="My Account"
          subheading="My Account"
        />
      </div>
      <div className="w-full flex justify-center items-center mt-[123px] mb-[123px] overflow-hidden">
        <div className="md:w-[544px] h-[474px] bg-white p-8 px-14 py-[70px] text-[#9096B2]">
          <h1 className="text-black font-bold mb-0 text-[32px] leading-[37.5px] text-center">
            Login
          </h1>
          <p className="mb-6 text-center">
            Please login using account details below.
          </p>
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full h-[52px] pl-3 text-sm text-[#9096B2] outline-none bg-white pr-[60px] border-[1px] border-[#C2C5E1] mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full h-[52px] pl-3 text-sm text-[#9096B2] outline-none bg-white pr-[60px] border-[1px] border-[#C2C5E1] mb-4"
          />
          <p className=" mb-4 cursor-pointer">Forgot your password?</p>

          <button className="bg-[#FB2E86] text-[#ECF0F1] border-2 border-[#FB2E86] tracking-[0.020em] font-normal rounded-[3px] cursor-pointer flex items-center justify-center w-full h-[47px] text-[17px] leading-[19.92px] text-left">
            Submit
          </button>
          <p className="mt-6 text-center">
            Don’t have an Account?{" "}
            <span className="cursor-pointer">Create account</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-[100%] h-[100px] mb-[123px]">
        <img src="/image 1174.png" alt="--" className="w-[904px] h-[93px]" />
      </div>
    </div>
  );
}
