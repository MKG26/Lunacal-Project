import { Tabs } from "./tabs";

const tabsData = [
  {
    title: "About Me",
    value: "tab1",
    content: (
      <div className="text-gray-400 poppins">
        Hello! I'm Dave, your sales rep here from Salesforce. I've been working
        at this awesome company for 3 years now.
        <br />{" "}
        <span className="mt-4 inline-block ">
          I was born and raised in Albany, NY & have been living in Santa Carla
          for the past 10 years my wife Tiffany and my 4-year-old twin
          daughters—Emma and Ella. Both of them are just starting school, so my
          calendar is usually blocked between 9-10 AM. This is a...
        </span>
      </div>
    ),
  },
  {
    title: "Experiences",
    value: "tab2",
    content: (
      <div className="text-gray-400 poppins">
        Outside of work, I enjoy exploring the local area with my family, trying
        out new restaurants, and staying active. If you need to get in touch
        with me during those blocked hours, feel free to drop me an email, and
        I'll get back to you as soon as possible. Looking forward to working
        with you!
      </div>
    ),
  },
  {
    title: "Recommended",
    value: "tab3",
    content: (
      <div className="text-gray-400 poppins">
        When I’m not working, you can find me spending quality time with my
        family, exploring new spots around Santa Carla, or indulging in my
        hobbies—whether it’s hiking, cooking, or catching up on the latest tech
        trends. I’m always excited to connect with clients and help them find
        the best solutions. If you need to reach me during my blocked hours,
        don’t hesitate to send me an email or leave a message, and I’ll get back
        to you as soon as I can. Looking forward to collaborating with you!
      </div>
    ),
  },
];

const Card = () => {
  return (
    <div className="relative  ">
      <div className="absolute right-0 ">
        <div className="relative mt-[100px] mr-20 w-[720px] h-[316px] bg-[#363c44] rounded-2xl card-shadow">
          {/* Card Content */}
          <div className="p-2"></div>

          <div>
            <Tabs
              tabs={tabsData}
              containerClassName="my-custom-container"
              activeTabClassName="my-active-tab"
              tabClassName="my-tab"
              contentClassName="my-content"
            />
          </div>
        </div>
        <div className="w-[652px] h-1  mt-6 mx-7  bg-[#363c44] rounded-sm hr-line-shadow"></div>
      </div>
    </div>
  );
};

export default Card;
