interface banner {
  title: string;
  title2: string;
  heading: string;
  subheading: string;
}

export default function Banner(props: banner) {
  return (
    <div className="h-[143px] lg:h-[286px] w-full bg-[#F6F5FF] text-[#101750] flex items-center">
      <div className="ml-7 mr-7 md:ml-[50px] md:mr-[50px] xl:ml-[200px] xl:mr-[200px] 2xl:ml-[371px] 2xl:mr-[371px]">
        <h1 className="text-[30px] lg:text-[36px] font-bold leading-[42.19px] mb-1">
          {props.heading}
        </h1>
        <div className="flex ml-[4px] text-[14px] lg:text-[16px]">
          <span className="text-black">
            {props.title}
            <span className="mx-1">.</span>
            {props.title2}
          </span>
          <span className="text-[#FB2E86]">
            <span className="mx-1">.</span>
            {props.subheading}
          </span>
        </div>
      </div>
    </div>
  );
}
