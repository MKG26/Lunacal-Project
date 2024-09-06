"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GoQuestion } from "react-icons/go";
import { BsGrid3X2GapFill } from "react-icons/bs";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex items-start">
      <div className="flex flex-col items-center justify-start mx-2">
        <GoQuestion size={24} className=" shadow-2xl" />
        {/* Adjust spacing */}
        <BsGrid3X2GapFill
          size={30}
          className="text-gray-600 shadow-2xl rotate-90 mt-[90px] "
        />{" "}
        {/* Adjust spacing */}
      </div>
      <div className="flex flex-col flex-grow">
        <div
          className={cn(
            "flex items-center p-2 no-visible-scrollbar bg-[#161616] justify-center rounded-2xl  mr-10 btn-tabs",
            containerClassName
          )}
        >
          {propTabs.map((tab, idx) => (
            <button
              key={tab.title}
              onClick={() => {
                moveSelectedTabToTop(idx);
              }}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className={cn(
                "relative px-4 py-2 w-[210px] shadow-2xl",
                tabClassName
              )}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {active.value === tab.value && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className={cn(
                    "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-xl btn-tabs-three",
                    activeTabClassName
                  )}
                />
              )}

              <span className="relative block text-black dark:text-white poppins">
                {tab.title}
              </span>
            </button>
          ))}
        </div>
        <ContentDiv
          tabs={tabs}
          active={active}
          className={cn("mt-7 ml-2 mr-5", contentClassName)}
        />
      </div>
    </div>
  );
};

export const ContentDiv = ({
  className,
  tabs,
  active,
}: {
  className?: string;
  tabs: Tab[];
  active: Tab;
}) => {
  return (
    <div className="flex mr-5">
      <div className="w-[650px]">
        {tabs.map((tab, idx) => (
          <div
            key={tab.value}
            className={cn(" ", idx === 0 ? "block" : "hidden", className)}
          >
            {tab.content}
          </div>
        ))}
      </div>
      <div className="w-2 bg-gradient-to-b from-[#888889] to-[#4a4e54] h-14 rounded-md mt-8 vr-line-shadow"></div>
    </div>
  );
};
