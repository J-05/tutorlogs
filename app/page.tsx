import TabGroup from "@/components/tabs/TabGroup";
import { Tab } from "@/types/tabs/Tab"
import Header from "@/components/header/Header"
import Panel from "@/components/panels/Panel"
import PanelGroupProps from "@/types/panels/PanelGroupProps"
import PanelGroup from "@/components/panels/PanelGroup"
import CoreInfoPanel from "@/features/panels/coreInfo/CoreInfoPanel";
import { StudentInfo } from "@/types/student";

const studentInfoData: StudentInfo[] = [
  { personalInfo : {
    parentName: "Jane Smith",
    studentName: "Amy Smith",
    PreferredName: "Amy",
    prounouns: "She/Her",
  },
  contactInfo : {
    parentPhone: "123-456-7890",
    parentEmail: "jane.smith@example.com", 
  },
  academicInfo : {
    school: "Springfield High",
    yearGroup: "10",
    subjects: ["Math", "Science", "History"],
  },
  serviceInfo : {
    service: "Tutoring",
    frequency: "Weekly",
    subjects: [
      {
        name: "Math",
        examBoard: "AQA",
        tier: "Higher",
        currentGrade: "B",
        goalGrade: "A",
      },
      {
        name: "Science",
        examBoard: "Edexcel",
        tier: "Foundation",
        currentGrade: "C",
        goalGrade: "B",
      },
    ],
  },
  additionalInfo : {
    timings: "Afternoons after 3 PM",
    teachingStyle: "Interactive and engaging",
    challenges: "Struggles with time management",
    strengths: "Strong analytical skills",
    requests: "Focus on exam techniques",
    otherNotes: "Prefers online sessions",
  }}
];

const panelGroupData: PanelGroupProps[] = [
  {panels: [<Panel key="panel-1"> <CoreInfoPanel key="core1" studentInfo={studentInfoData[0]} /> </Panel>, <Panel> <CoreInfoPanel studentInfo={studentInfoData[0]} /> </Panel>], ratios: [1, 2]},
  {panels: [<Panel key="panel-2"> <CoreInfoPanel key="core2" studentInfo={studentInfoData[0]} /> </Panel>, <Panel> <CoreInfoPanel studentInfo={studentInfoData[0]} /> </Panel>], ratios: [1, 1]},
  {panels: [<Panel key="panel-3"> <CoreInfoPanel key="core3" studentInfo={studentInfoData[0]} /> </Panel>, <Panel> <CoreInfoPanel studentInfo={studentInfoData[0]} /> </Panel>], ratios: [2, 1]}

];


const tabData: Tab[] = [
  { key: 'student1', title: 'Amy', content: <PanelGroup {...panelGroupData[0]}></PanelGroup> },
  { key: 'student2', title: 'Andrew', content: <PanelGroup {...panelGroupData[1]}></PanelGroup> },
  { key: 'student3', title: 'Chloe', content: <PanelGroup {...panelGroupData[2]}></PanelGroup> },
];

export default function StudentPage() {
  return (
    <>
    <><h1>Student Information</h1></>
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

