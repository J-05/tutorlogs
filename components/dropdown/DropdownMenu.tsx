// adapted from https://codesandbox.io/p/sandbox/react-dropdown-w-typescript-example-jt4dh?file=%2Fsrc%2Fcomponents%2FDropDown.tsx%3A23%2C25

'use client';
import React, { useState } from "react";
import { ViewType } from "@/types/Views"
import Dropdown from "./Dropdown";
import DropdownMenuProps from "@/types/dropdown/DropdownMenuProps"


const DropdownMenu: React.FC<DropdownMenuProps> = ({ options }): React.JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<ViewType>("Planner");
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };


  const dismissHandler = (e: React.FocusEvent<HTMLButtonElement>): void => {
    console.log(e.currentTarget);
    console.log(e.relatedTarget);
    if (e.currentTarget !== e.relatedTarget) { // clicked the div and not the child
      setShowDropdown(false);
    }
  };

  const optionSelection = (option: string): void => {
    setSelectedOption(option as ViewType);
  };

  return (
    <div className="flex flex-row gap-4 items-center">   
        <p>Current View:</p>

        <div className="relative">
        <button
            className={`${showDropdown ? "active" : ""} bg-accent rounded-md px-3 py-1`}
            onClick={(): void => toggleDropdown()}
            onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
            (dismissHandler(e))
            }
        >
            {selectedOption}
        </button>

        {showDropdown && (
            <Dropdown
                options={options}
                optionSelection={optionSelection}
            />
            )}
        </div>
    </div>
  );
};

export default DropdownMenu;
