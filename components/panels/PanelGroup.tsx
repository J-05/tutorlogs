"use client";
import { useState } from "react";
import Panel from "@/components/panels/Panel";
import PanelResizer from "@/components/panels/PanelResizer";
import PanelGroupProps from "@/types/panels/PanelGroupProps";


const PanelGroup: React.FC<PanelGroupProps> = ({panels, ratios}: PanelGroupProps) => {
    const [leftWidth, setLeftWidth] = useState(300); 
    const [isResizing, setIsResizing] = useState(false); 

    return (
        <div className="panel-group flex flex-row h-screen"> 

            {panels.map((panel, i) => (
                <>
                    <div key={"panel-" + i} style={{ flex: ratios[i]}} className="p-4 text-center h-full ">
                        {panel}
                    </div>
                    <PanelResizer></PanelResizer>
                </>
            ))}
        </div>
    );
}

export default PanelGroup;

            