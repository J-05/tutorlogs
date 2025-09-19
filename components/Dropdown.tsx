// adapted from https://codesandbox.io/p/sandbox/react-dropdown-w-typescript-example-jt4dh?file=%2Fsrc%2Fcomponents%2FDropDown.tsx%3A23%2C25

'use client';
import React, { useEffect, useState } from 'react';

type DropdownProps = {
  options: string[];
  showDropdown: boolean;
  toggleDropdown: Function;
  optionSelection: Function;
};

const Dropdown: React.FC<DropdownProps> = ({ options, optionSelection,}: DropdownProps): React.JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const onClickHandler = (option: string): void => {
    optionSelection(option);
  };

  useEffect(() => {
    setShowDropdown(showDropdown);
  }, [showDropdown]);

  return (
    <>
      <div className={showDropdown ? 'dropdown' : 'dropdown active'}>
        {options.map(
          (option: string, _: number): React.JSX.Element => {
            return (
              <p
                key={option.toLowerCase()}
                onClick={(): void => {
                  onClickHandler(option);
                }}
              >
                {option}
              </p>
            );
          }
        )}
      </div>
    </>
  );
};

export default Dropdown;
