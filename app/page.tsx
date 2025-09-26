import TabGroup from "@/components/tabs/TabGroup";
import { Tab } from "@/types/tabs/Tab"
import Header from "@/components/header/Header"
import Panel from "@/components/panels/Panel"
import PanelGroupProps from "@/types/panels/PanelGroupProps"
import PanelGroup from "@/components/panels/PanelGroup"
import CoreInfoPanel from "@/features/panels/coreInfo/CoreInfoPanel";

const panelGroupData: PanelGroupProps[] = [
  {panels: [<Panel key="panel-1"> <CoreInfoPanel key="core1"/> </Panel>, <Panel> <CoreInfoPanel /> </Panel>], ratios: [1, 2]},
  {panels: [<Panel key="panel-2"> <CoreInfoPanel key="core2"/> </Panel>, <Panel> <CoreInfoPanel /> </Panel>], ratios: [1, 1]},
  {panels: [<Panel key="panel-3"> <CoreInfoPanel key="core3"/> </Panel>, <Panel> <CoreInfoPanel /> </Panel>], ratios: [2, 1]}
  
  
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

