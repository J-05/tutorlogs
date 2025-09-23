import TabGroup from "@/components/tabs/TabGroup";
import Header from "@/components/header/Header"
import { Tab } from "@/types/Tab"
import PanelGroup from "@/components/panels/PanelGroup"

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

