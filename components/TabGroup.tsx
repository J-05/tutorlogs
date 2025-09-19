// adapted from https://ivanstepanovic.medium.com/navigation-tabs-in-next-js-react-683a30409f33

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

const TabGroup: React.FC<TabGroupProp> = ({ tabs }: TabGroupProp) => { // declare Tabs component, expects tabs 
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTabKey, setActive] = useState<TabKey>("student1"); //active stores the current tab index
  const activeTab = tabs.find(t => t.key === activeTabKey);
  const tabParam = searchParams.get("tab");


  useEffect(() => { //runs after render + when dependencies change 
    if (tabParam) setActive(tabParam as TabKey);
  }, [tabParam]); // dependencies

  // e = click event, cb = callback function optional
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, newTabKey: TabKey, cb = () => {}) => {
    e.preventDefault(); // prevent browser doing its default function (follow link)
    // build new search params
    const params = new URLSearchParams(window.location.search);
    params.set("tab", newTabKey);
    // push new url
    router.push(`?${params.toString()}`);
    setActive(newTabKey);
    cb && cb(); // run callback if provided
  }

  return (
    <div className="tab_group_body">

      <div className="tab_heads flex gap-1 mt-1">
        {tabs.map((tab, _) => ( // loop through all children and provide a hyperlink
          <a
            href="#"
            key={tab.key}
            className={`tab_head px-4 py-2 rounded-t-lg text-white shadow hover:bg-accent transition-colors duration-700
              ${tab.key === activeTabKey ? 'active bg-accent text-white' : 'bg-primary'}`}
            onClick={e => {
              e.preventDefault(); // prevent default navigation
              handleClick(e, tab.key);
            }}
            >
              {tab.title}
          </a>
        ))}
      </div>

      <div className="tabs__body">{activeTab?.content}</div>

    </div>
  )
}

export default TabGroup;