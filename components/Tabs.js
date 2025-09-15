// taken from https://ivanstepanovic.medium.com/navigation-tabs-in-next-js-react-683a30409f33

'use client'; // mark as client component to use stuff like nav, use state etc

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Children } from "react";
// useRouter; manually change url
// useSearchParams; query params ?eg=test


const Tabs = ({ children }) => { // declare Tabs component, expects children 
  const [active, setActive] = useState(0); //active stores the current tab index, starts at 0
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');


  useEffect(() => { //runs after render + when dependencies change 
    if (!tab) return; // check for tab param

    const index = children.map(child => child.key).indexOf(tab); // find index that matches tab

    if (index < 0) return;

    setActive(index);
  }, [tab, children]) // dependencies

  const handleClick = (e, index, cb = () => {}) => {
    
    e.preventDefault();

    // build new search params
    const params = new URLSearchParams(window.location.search);
    const childrenArr = Children.toArray(children);
    const i = childrenArr.findIndex(child => child.props["data-tabkey"] === index);
    console.log(i, index)
    params.set("tabs", children[i].props["data-tabkey"]);
    console.log("ok3")
    // push new url
    router.push(`?${params.toString()}`);
    
    setActive(i);
    cb && cb(); // run callback if provided
  }

  return (
    <div className="tabs">
      <div className="tabs__navigation flex gap-4 mt-6">
        {children.map((child, index) => ( // loop through all children and provide a hyperlink
          <a href="#" className={`
          px-4 
          py-2 
          rounded-t-md
          bg-cyan-500 
          shadow-lg shadow-cyan-500/50 
          hover:bg-cyan-600
          hover:shadow-cyan-600/50
          transition-colors duration-[0.7s]
          tabs__navigation__item 
          ${index === active
            ? 'active bg-cyan-700 text-white' 
            : ''}`} 
          key={`tab-${index}`} 
          onClick={e => handleClick(e, child.key, child.props.onClick)}>
            {child.props.title}
          </a> // adds active class if its the selected one
        ))}
      </div>
      <div className="tabs__body">{children[active]}</div>  
      {/* only shows body of active tab */}
    </div>
  )
}

export default Tabs;