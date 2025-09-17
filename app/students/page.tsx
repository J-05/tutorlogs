import TabGroup from "@/components/TabGroup";

const tabData = [
  { key: 'info', title: 'Customer info', content: <p>We are showing customer info here</p> },
  { key: 'payment-history', title: 'Payment history', content: <p>We are showing customer payment history here</p> },
  { key: 'payment-methods', title: 'Payment methods', content: <p>We are showing customer payment methods here</p> },
];

export default function StudentPage() {
  return (
    <div className="bg-background text-foreground">
      <TabGroup tabs={tabData} />
    </div>
  );
}

