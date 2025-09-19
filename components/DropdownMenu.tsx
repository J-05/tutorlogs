// adapted from https://codesandbox.io/p/sandbox/react-dropdown-w-typescript-example-jt4dh?file=%2Fsrc%2Fcomponents%2FDropDown.tsx%3A23%2C25

'use client';
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { ViewType } from "@/types/Views"

const DropdownMenu: React.FC = (): React.JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<ViewType>("Planner");
  const options = () => {
    return ["Planner", "Financing"];
  };
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };


  const dismissHandler = (e: React.FocusEvent<HTMLButtonElement>): void => {
    if (e.currentTarget === e.target) { // clicked the div and not the child
      setShowDropdown(false);
    }
  };

  const optionSelection = (option: string): void => {
    setSelectedOption(option as ViewType);
  };

  return (
    <div className="flex flex-row gap-4">   
        <p>Current View:</p>

        <div className="relative">
        <button
            className={`${showDropdown ? "active" : ""} bg-tertiary`}
            onClick={(): void => toggleDropdown()}
            onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
            dismissHandler(e)
            }
        >
            <div>{selectedOption} </div>
        </button>
        {showDropdown && (
            <Dropdown
                options={options()}
                showDropdown={false}
                toggleDropdown={(): void => toggleDropdown()}
                optionSelection={optionSelection}
            />
            )}
        </div>
    </div>
  );
};

export default DropdownMenu;
