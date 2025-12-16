// adapted from https://codesandbox.io/p/sandbox/react-dropdown-w-typescript-example-jt4dh?file=%2Fsrc%2Fcomponents%2FDropDown.tsx%3A23%2C25

'use client';
import React, { useEffect, useState } from 'react';
import { View, ViewKey } from '@/types/Views'

type DropdownProps = {
  options: View[];
  optionSelection: Function;
};

const Dropdown: React.FC<DropdownProps> = ({ options, optionSelection,}: DropdownProps): React.JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const handleClick = (option: View): void => {
    optionSelection(option);
  };

  return (
    <>
      <div className={showDropdown ? 'dropdown' : 'dropdown active'}>
        {options.map(
          (option: View, _: number): React.JSX.Element => {
            return (
              <button
                key={option.key}
                onMouseDown={(): void => {
                  handleClick(option);
                }}
                className='hover:bg-accent'
              >
                {option.title}
              </button>
            );
          }
        )}
      </div>
    </>
  );
};

export default Dropdown;
