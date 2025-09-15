import Tab from "@/components/Tab";
import Tabs from "@/components/Tabs";

export default function Test() {
  return (
    <div className="bg-background text-foreground">
      <Tabs>
        <div key="info" data-tabkey="info" title="Customer info">
            <p>We are showing customer info here</p>
        </div>
        <div key="payment-history" data-tabkey="payment-history" title="Payment history">
            <p>We are showing customer payment history here</p>
        </div>
        <div key="payment-methods" data-tabkey="payment-methods" title="Payment methods">
            <p>We are showing customer payment methods here</p>
        </div>
     </Tabs>
    </div>
  );
}

