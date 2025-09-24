import TabGroup from "@/components/tabs/TabGroup";
import { Tab } from "@/types/Tab"
import Header from "@/components/header/Header"
import Panel from "@/components/panels/Panel"
import PanelGroupProps from "@/types/PanelGroupProps"
import PanelGroup from "@/components/panels/PanelGroup"

const panelGroupData: PanelGroupProps[] = [
  {panels: [<Panel></Panel>], ratios: [1, 3]}
  {panels: [<Panel></Panel>], ratios: [1, 1]}
];


const tabData: Tab[] = [
  { key: 'student1', title: 'Amy', content: <PanelGroup></PanelGroup> },
  { key: 'student2', title: 'Andrew', content: <PanelGroup></PanelGroup> },
  { key: 'student3', title: 'Chloe', content: <PanelGroup></PanelGroup> },
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

