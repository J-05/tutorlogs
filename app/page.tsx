import TabGroup from "@/components/tabs/TabGroup";
import { Tab } from "@/types/Tab"
import Header from "@/components/header/Header"
import Panel from "@/components/panels/Panel"
import PanelGroupProps from "@/types/PanelGroupProps"
import PanelGroup from "@/components/panels/PanelGroup"
import CoreInfoPanel from "@/features/coreInfoPanel";

const panelGroupData: PanelGroupProps[] = [
  {panels: [<Panel> <CoreInfoPanel /> </Panel>, <Panel> <CoreInfoPanel /> </Panel>], ratios: [1, 2]},
  {panels: [<Panel> <CoreInfoPanel /> </Panel>, <Panel> <CoreInfoPanel /> </Panel>], ratios: [1, 1]},
  {panels: [<Panel> <CoreInfoPanel /> </Panel>, <Panel> <CoreInfoPanel /> </Panel>], ratios: [2, 1]}
  
  
];


const tabData: Tab[] = [
  { key: 'student1', title: 'Amy', content: <PanelGroup {...panelGroupData[0]}></PanelGroup> },
  { key: 'student2', title: 'Andrew', content: <PanelGroup {...panelGroupData[1]}></PanelGroup> },
  { key: 'student3', title: 'Chloe', content: <PanelGroup {...panelGroupData[2]}></PanelGroup> },
];

export default function StudentPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex  flex-col">
          <Header />
        
          <div className="bg-background text-foreground">
            <TabGroup tabs={tabData} />
          </div>
        </div>

        
      </div>
    </>
  );
}

