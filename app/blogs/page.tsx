import Banner from "../components/Banner";
import BlogCardRoute from "../components/BlogCardRoute";
import { CiSearch } from "react-icons/ci";
import RecentPostCardBlog from "../components/RecentPostBlogCard";
import OfferProductBlogSecCard from "../components/OfferProductBlogSecCard";
import Link from "next/link";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

const name: string[] = ["1", "2", "3"];

export default function Blogs() {
  return (
    <div>
      <Banner
        title="Home"
        title2="Pages"
        heading="Blog Page"
        subheading="Blog Page"
      />

      <div className=" flex flex-wrap md:ml-[50px] xl:ml-[200px] 2xl:ml-[275px] md:mr-[50px] xl:mr-[200px] 2xl:mr-[275px] overflow-hidden pl-5 pr-5">
        <div className="mt-10 lg:mt-20">
          <Link href={`/blogs/${name[0]}`}>
            <BlogCardRoute
              heading="Mauris at orci non vulputate diam tincidunt nec."
              img="/bruce-mars-FWVMhUa_wbY-unsplash 1.png"
            />
          </Link>

          <Link href={`/blogs/${name[1]}`}>
            <BlogCardRoute
              heading="Aenean vitae in aliquam ultrices lectus. Etiam."
              img="/bruce-mars-FWVMhUa_wbY-unsplash 2.png"
            />
          </Link>

          <Link href={`/blogs/${name[2]}`}>
            <BlogCardRoute
              heading="Sit nam congue feugiat nisl, mauris amet nisi."
              img="/bruce-mars-FWVMhUa_wbY-unsplash 3.png"
            />
          </Link>
        </div>

        <div className="mt-4000 lg:mt-20 ml-[0px] 2xl:ml-[58px]">
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

      <div
        className={`${lato.className} flex lg:ml-[688px] gap-[36px] mt-[50px] justify-center lg:justify-normal`}
      >
        <div className="w-[32px] h-[24px] rounded-[2px] bg-[#FB2CA8] flex justify-center items-center text-white">
          1
        </div>
        <div className="w-[32px] h-[24px] rounded-[2px] border-[1px] border-[#E0D3F5] flex justify-center items-center text-[#E0D3F5]">
          2
        </div>
        <div className="w-[32px] h-[24px] rounded-[2px] border-[1px] border-[#E0D3F5] flex justify-center items-center text-[#E0D3F5]">
          3
        </div>
        <div className="w-[32px] h-[24px] rounded-[2px] border-[1px] border-[#E0D3F5] flex justify-center items-center text-[#E0D3F5]">
          4
        </div>
      </div>

      <div className="w-full flex justify-center mt-10 lg:mt-[71px] mb-10 lg:mb-20">
        <img src="/image 1174.png" alt="-" />
      </div>
    </div>
  );
}
