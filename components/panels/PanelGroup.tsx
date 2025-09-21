import Panel from "@/components/Panel"
import Resizer from "@/components/Resizer"
import { useState } from "react";

const [leftWidth, setLeftWidth] = useState(300); 
const [isResizing, setIsResizing] = useState(false); 

const PanelGroup: React.FC = () => {
    return (
        <div className="panel-group flex flex-row gap-4 h-screen"> 
            <div className="flex-1 p-4 text-center h-full " style={{ width: leftWidth }}><Panel></Panel></div>

            <Resizer></Resizer>


          <div className="flex-1 p-4 text-center h-full"><Panel></Panel></div>
        </div>
    );
}

export default PanelGroup;