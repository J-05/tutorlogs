import { ReactNode } from "react";

interface TabProps {
  title: string;               // The tab label
  onClick?: () => void;        // Optional click callback
  children: ReactNode;         // The content of the tab
}

const Tab : React.FC<TabProps> = ({ children }) =>  {
    return <div>{children}</div>;
};

export default Tab;