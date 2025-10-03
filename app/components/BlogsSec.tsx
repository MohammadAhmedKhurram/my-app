import BlogsCard from "./BlogCard";

export default function BlogsSec() {
  return (
    <div className="mt-10 lg:mt-20 mb-8 lg:mb-16 p-4">
      <h1 className="text-[30px] xl:text-[42px] flex justify-center text-left font-bold text-[#151875]">
        Leatest Blog
      </h1>

      <div className="flex justify-center flex-wrap gap-4 lg:gap-16 mt-8 lg:mt-16">
        <BlogsCard
          image="/Blogs/1.png"
          title="Top esssential Trends in 2021"
          author="SaberAli"
          date="21 August,2020"
          description="More off this less hello samlande lied much
            over tightly circa horse taped mightly"
          subHeading="Read More"
        />
        <BlogsCard
          image="/Blogs/2.png"
          title="Top esssential Trends in 2021"
          author="Surfauxion"
          date="21 August,2020"
          description="More off this less hello samlande lied much
            over tightly circa horse taped mightly"
          subHeading="Read More"
        />
        <BlogsCard
          image="/Blogs/3.png"
          title="Top esssential Trends in 2021"
          author="SaberAli"
          date="21 August,2020"
          description="More off this less hello samlande lied much
            over tightly circa horse taped mightly"
          subHeading="Read More"
        />
      </div>
    </div>
  );
}
