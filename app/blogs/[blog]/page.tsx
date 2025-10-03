import Banner from "@/app/components/Banner";
import OfferProductBlogSecCard from "@/app/components/OfferProductBlogSecCard";
import RecentPostCardBlog from "@/app/components/RecentPostBlogCard";
import { CiSearch } from "react-icons/ci";
import { FaPenNib, FaRegCalendarAlt } from "react-icons/fa";
import { Lato } from "next/font/google";


const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

export default function Blog({ params }: { params: { blog: string } }) {
  const blogs = [
    {
      name: "1",
      Name: "Mauris at orci non vulputate diam tincidunt nec.",
      Img: "/bruce-mars-FWVMhUa_wbY-unsplash 1.png",
    },
    {
      name: "2",
      Name: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      Img: "/bruce-mars-FWVMhUa_wbY-unsplash 2.png",
    },
    {
      name: "3",
      Name: "Sit nam congue feugiat nisl, mauris amet nisi.",
      Img: "/bruce-mars-FWVMhUa_wbY-unsplash 3.png",
    },
  ];

  const selectedBlog = blogs.find((blog) => blog.name === params.blog);

  if (!selectedBlog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div className="mb-[83px]">
      <Banner
        title="Home"
        title2="Pages"
        heading="Single Blog"
        subheading="Single Blog"
      />

      <div className="flex flex-wrap md:ml-[50px] xl:ml-[200px] 2xl:ml-[275px] md:mr-[50px] xl:mr-[200px] 2xl:mr-[275px] overflow-hidden pl-5 pr-5">
        <div className="lg:w-[870px]">
          <img
            src={selectedBlog.Img}
            alt="-"
            className="w-full h-453px mt-10 lg:mt-20"
          />

          <div className="flex items-center justify-between lg:w-[360px] mt-[27px]">
            <div className="flex items-center gap-2 text-[#151875]">
              <FaPenNib className="text-[#FB2E86] w-[11.33px] h-[11.33px]" />
              <span className="font-medium lg:w-[160px] lg:h-[23px] text-[10px] lg:text-sm bg-[#FFE7F9] flex justify-center items-center">
                Surf Auxion
              </span>
            </div>

            <div className="flex items-center gap-2 text-[#151875]">
              <FaRegCalendarAlt className="text-[#FFA454] w-[16px] h-[16px]" />
              <span className="text-[10px] lg:text-sm font-medium bg-[#FFECE2] lg:w-[127px] lg:h-[23px] flex justify-center items-center">
                Aug 09 2020
              </span>
            </div>
          </div>
          <h3 className="text-[18px] lg:text-[30px] text-[#151875] font-bold leading-[30px] text-left mt-[28px]">
            {selectedBlog.Name}
          </h3>
          <p
            className={` ${lato.className} text-[#8A8FB9] text-[12px] lg:text-[16px] font-normal leading-[25.6px] text-left mt-[23px] mb-[0px]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
            malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
            purus, cursus vulputate id id dictum at.
          </p>
          <p
            className={` ${lato.className} text-[#8A8FB9] text-[12px] lg:text-[16px] font-normal leading-[25.6px] text-left mt-[50px] mb-[0px]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra. Sit
            morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
            posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Velit dapibus est, nunc, montes, lacus consequat integer
            viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec
            vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Velit dapibus est, nunc,
          </p>
          <div className="w-full h-[141px] border-l-2 border-l-[#FC45A0] flex flex-col items-center justify-center mt-[43px]">
            <p className="text-[14px] lg:text-[18px] leading-[30px] text-left lg:w-[832px] h-[88px] text-[#969CB4]">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              dictum sapien, amet, consequat. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Commodo dictum sapien, amet,
              consequat toamk risusu”
            </p>
          </div>
          <div className="flex justify-between lg:w-full mt-[43px] flex-wrap">
            <img
              src="/Rectangle 70.png"
              alt="--"
              className="w-[417.74px] h-[245px]"
            />
            <img
              src="/Rectangle 71.png"
              alt="--"
              className="w-[417.74px] h-[245px]"
            />
          </div>
          <p
            className={` ${lato.className} text-[#8A8FB9] text-[12px] lg:text-[16px] font-normal leading-[25.6px] text-left mb-[23px] mt-[45px]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra. Sit
            morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
            posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Velit dapibus est, nunc, montes, lacus consequat integer
            viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec
            vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Velit dapibus est, nunc,
          </p>

          <div className="flex w-full justify-between mt-[51px] flex-wrap ">
            <img src="/Group 247.png" alt="--" />
            <img src="/Group 248.png" alt="--" />
            <img src="/Group 249.png" alt="--" />
            <img src="/Group 250.png" alt="--" />
          </div>
          <p
            className={` ${lato.className} text-[#8A8FB9] text-[12px] lg:text-[16px] font-normal leading-[25.6px] text-left mt-[44px]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra. Sit
            morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
            posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Velit dapibus est, nunc, montes, lacus consequat integer
            viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec
            vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Velit dapibus est, nunc,
          </p>
          <p
            className={` ${lato.className} text-[#8A8FB9] text-[12px] lg:text-[16px] font-normal leading-[25.6px] text-left lg:w-[871px] mt-[32px]`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
            dapibus est, nunc, montes, lacus consequat integer viverra. Sit
            morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante
            posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Velit dapibus est, nunc, montes, lacus consequat integer
            viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec
            vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Velit dapibus est, nunc,
          </p>


        </div>

        <div className="mt-10 lg:mt-20 ml-[0px] 2xl:ml-[58px]">
          <h3 className="text-[22px] leading-[25.78px] text-left text-[#151875] font-semibold">
            Search
          </h3>
          <div className="flex items-center border-[1px] rounded-[2px] text-red-700 mt-[15px]">
            <input
              type="text"
              placeholder="Search For Posts"
              style={{ color: "#151875", opacity: "0.1" }}
              className="w-[270px] h-[40px] pl-3 text-sm text-red-700 bg-white"
            />
            <CiSearch className="text-gray-500 text-lg mr-5 w-4 h-4" />
          </div>
          <h3 className="text-[22px] leading-[25.78px] text-left text-[#151875] font-semibold mt-[52px]">
            Categories
          </h3>

          <div className="flex gap-[10px] mt-[25px]">
            <div>
              <p className="flex pl-[9px] rounded-[3px] items-center w-[122px] h-[30px] bg-[#F939BF] text-[#FFFFFF] text-[14px] font-normal leading-[14px] text-left">
                Hobbies (14)
              </p>
              <p className="flex pl-[9px] rounded-[3px] items-center w-[122px] h-[30px] mt-3 mb-3 text-[#3F509E] text-[14px] font-normal leading-[14px] text-left">
                Women (21)
              </p>
              <p className="flex pl-[9px] rounded-[3px] items-center w-[122px] h-[30px]  text-[#3F509E] text-[14px] font-normal leading-[14px] text-left">
                Women (21)
              </p>
            </div>
            <div>
              <p className="flex pl-[9px] rounded-[3px] items-center w-[122px] h-[30px]  text-[#3F509E] text-[14px] font-normal leading-[14px] text-left">
                Women (21)
              </p>
              <p className="flex pl-[9px] rounded-[3px] items-center w-[122px] h-[30px] mt-3 mb-3 text-[#3F509E] text-[14px] font-normal leading-[14px] text-left">
                Women (21)
              </p>
              <p className="flex pl-[9px] rounded-[3px] items-center w-[122px] h-[30px]  text-[#3F509E] text-[14px] font-normal leading-[14px] text-left">
                Women (21)
              </p>
            </div>
          </div>

          <h3 className="text-[22px] leading-[25.78px] text-left text-[#151875] font-semibold mt-[37px]">
            Recent Post
          </h3>
          <div className="mt-[37px]">
            <div className="mb-[22px]">
              <RecentPostCardBlog
                img="/Rectangle 126.png"
                heading="It is a long established fact"
              />
            </div>
            <div className="mb-[22px]">
              <RecentPostCardBlog
                img="/Rectangle 127.png"
                heading="It is a long established fact"
              />
            </div>
            <div className="mb-[22px]">
              <RecentPostCardBlog
                img="/Rectangle 128.png"
                heading="It is a long established fact"
              />
            </div>
            <RecentPostCardBlog
              img="/Rectangle 129.png"
              heading="It is a long established fact"
            />
          </div>

          <h3 className="text-[22px] leading-[25.78px] text-left text-[#151875] font-semibold mt-[37px]">
            Sale Product
          </h3>

          <div className="mt-[37px]">
            <div className="mb-[15px]">
              <RecentPostCardBlog
                img="/Rectangle 10.png"
                heading="It is a long established fact"
              />
            </div>
            <div className="mb-[15px]">
              <RecentPostCardBlog
                img="/Rectangle 11.png"
                heading="It is a long established fact"
              />
            </div>
            <RecentPostCardBlog
              img="/Rectangle 12.png"
              heading="It is a long established fact"
            />
          </div>

          <h3 className="text-[22px] leading-[25.78px] text-left text-[#151875] font-semibold mt-[37px]">
            Offer product
          </h3>

          <div className="flex gap-[15px]">
            <div className="flex flex-col gap-[30px]">
              <OfferProductBlogSecCard
                img="/p0OlRAAYXLY.png"
                heading="Duis lectus est."
              />
              <OfferProductBlogSecCard
                img="/p0OlRAAYXLY (1).png"
                heading="Sed placerat."
              />
            </div>
            <div className="flex flex-col gap-[30px]">
              <OfferProductBlogSecCard
                img="/p0OlRAAYXLY (2).png"
                heading="Netus proin."
              />
              <OfferProductBlogSecCard
                img="/p0OlRAAYXLY (3).png"
                heading="Platea in."
              />
            </div>
          </div>

          <h3 className="text-[22px] leading-[25.78px] text-left text-[#151875] font-semibold mt-[37px]">
            Follow
          </h3>
          <img
            src="/Group 224.png"
            alt="--"
            className="w-[126px] h-[46px] mt-[15px]"
          />

          <h3 className="text-[22px] leading-[25.78px] text-left text-[#151875] font-semibold mt-[37px]">
            Tags
          </h3>

          <div className="flex flex-col ">
            <div className={`${lato.className}`}>
              <div className="flex gap-[41px] mt-[18px]">
                <p className="text-[16px] font-normal leading-[25.6px] text-left underline decoration-solid decoration-skip-ink-none underline-offset-from-font text-[#151875]">
                  General
                </p>
                <p className="text-[16px] font-normal leading-[25.6px] text-left underline decoration-solid decoration-skip-ink-none underline-offset-from-font text-[#FB2E86]">
                  Atsanil
                </p>
                <p className="text-[16px] font-normal leading-[25.6px] text-left underline decoration-solid decoration-skip-ink-none underline-offset-from-font text-[#151875]">
                  Insas.
                </p>
              </div>
              <div className="flex gap-[47px] mt-[12px]">
                <p className="text-[16px] font-normal leading-[25.6px] text-left underline decoration-solid decoration-skip-ink-none underline-offset-from-font text-[#151875]">
                  Bibsaas
                </p>
                <p className="text-[16px] font-normal leading-[25.6px] text-left underline decoration-solid decoration-skip-ink-none underline-offset-from-font text-[#151875]">
                  Nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-10 lg:mt-[71px] mb-10 lg:mb-20">
        <img src="/image 1174.png" alt="-" />
      </div>
    </div>
  );
}
