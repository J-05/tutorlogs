import TabGroup from "@/components/TabGroup";

const tabData = [
  { key: 'student1', title: 'Amy', content: <p>We are showing customer info here</p> },
  { key: 'student2', title: 'Andrew', content: <p>We are showing customer payment history here</p> },
  { key: 'student3', title: 'Chloe', content: <p>We are showing customer payment methods here</p> },
];

export default function StudentPage() {
  return (
    <div className="bg-background text-foreground">
      <TabGroup tabs={tabData} />
    </div>
  );
}

