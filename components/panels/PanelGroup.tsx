"use client";
import { useState } from "react";
import Panel from "@/components/panels/Panel";
import PanelResizer from "@/components/panels/PanelResizer";
import PanelGroupProps from "@/types/PanelGroupProps";


const PanelGroup: React.FC<PanelGroupProps> = ({panels, ratios}: PanelGroupProps) => {
    const [leftWidth, setLeftWidth] = useState(300); 
    const [isResizing, setIsResizing] = useState(false); 

    return (
        <div className="panel-group flex flex-row gap-4 h-screen"> 
            {panels.map((Panel, i) => (
                <>
                    <div className="flex-${ratios[i]} p-4 text-center h-full " style={{ width: leftWidth }}>
                        <Panel />
                    </div>
                    <PanelResizer></PanelResizer>
                </>
            ))}




            


          <div className="flex-1 p-4 text-center h-full"><Panel></Panel></div>
        </div>
    );
}

export default PanelGroup;