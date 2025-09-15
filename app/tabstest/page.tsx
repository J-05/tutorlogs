import Tab from "@/components/Tab";
import Tabs from "@/components/Tabs";

const tabData = [
  { key: 'info', title: 'Customer info', content: <p>We are showing customer info here</p> },
  { key: 'payment-history', title: 'Payment history', content: <p>We are showing customer payment history here</p> },
  { key: 'payment-methods', title: 'Payment methods', content: <p>We are showing customer payment methods here</p> },
];

export default function Test() {
  return (
    <div className="bg-background text-foreground">
      <Tabs tabs={tabData} />
    </div>
  );
}

