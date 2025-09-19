// taken from https://ivanstepanovic.medium.com/navigation-tabs-in-next-js-react-683a30409f33

'use client'; // mark as client component to use stuff like nav, use state etc

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Children } from "react";
// useRouter; manually change url
// useSearchParams; query params ?eg=test
import {Tab, TabKey} from "@/types/Tab"

interface TabGroupProp {
    tabs: Tab[];
}

const TabGroup = ({ tabs }: TabGroupProp) => { // declare Tabs component, expects tabs 
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTabKey, setActive] = useState<TabKey>("student1"); //active stores the current tab index
  const activeTab = tabs.find(t => t.key === activeTabKey);
  const tabParam = searchParams.get("tab");


  useEffect(() => { //runs after render + when dependencies change 
    if (!tabParam) return;
    setActive(tabParam as TabKey);
  }, [tabParam, tabs]) // dependencies

  // e = click event, cb = callback function optional
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, newTabKey: TabKey, cb = () => {}) => {
    e.preventDefault(); // prevent browser doing its default function (follow link)
    // build new search params
    const params = new URLSearchParams(window.location.search);
    params.set("tabs", newTabKey);
    // push new url
    router.push(`?${params.toString()}`);
    setActive(newTabKey);
    cb && cb(); // run callback if provided
  }

  return (
    <div className="tabs">

      <div className="tabs__navigation flex gap-4 mt-6">
        {tabs.map((tab, _) => ( // loop through all children and provide a hyperlink
          <a href="#" key={tab.key} className={` // # is a placeholder link, preventdefault overrides it anyway
            px-4 
            py-2 
            rounded-t-md
            bg-cyan-500 
            shadow-lg shadow-cyan-500/50 
            hover:bg-cyan-600
            hover:shadow-cyan-600/50
            transition-colors duration-[0.7s]
            tabs__navigation__item 
            ${tab.key === activeTabKey
              ? 'active bg-cyan-700 text-white' 
              : ''}`
          } onClick={e => handleClick(e, tab.key)}> {tab.title} </a> // adds active class if its the selected one
        ))}
      </div>

      <div className="tabs__body">{activeTab?.content}</div>
      
    </div>
  )
}

export default TabGroup;