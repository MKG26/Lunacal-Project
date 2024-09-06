import { Tabs } from "@/components/ui/tabs";
import Card from "@/components/ui/card";
import SecondCard from "@/components/ui/secondCard";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#272c31] to-[#131418] min-h-screen text-white p-4">
      <Card />
      <SecondCard />
    </div>
  );
}
