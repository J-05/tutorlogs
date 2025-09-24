"use client";

import Panel from "@/components/panels/Panel";
import PanelResizer from "@/components/panels/PanelResizer";
import { useState } from "react";



const PanelGroup: React.FC = () => {
    const [leftWidth, setLeftWidth] = useState(300); 
    const [isResizing, setIsResizing] = useState(false); 

    return (
        <div className="panel-group flex flex-row gap-4 h-screen"> 
            <div className="flex-1 p-4 text-center h-full " style={{ width: leftWidth }}><Panel></Panel></div>

            <PanelResizer></PanelResizer>


          <div className="flex-1 p-4 text-center h-full"><Panel></Panel></div>
        </div>
    );
}

export default PanelGroup;