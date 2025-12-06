import ProfileCard from "@/components/agent/ProfileCard";
import Chart from "@/components/agent/Chart";
import PerformanceCard from "@/components/agent/PerformanceCard";

export default function Page() {
  return (
    <div className="flex">
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold text-black mb-1">
          Welcome Back, Peter
        </h1>
        <p className="text-md font-medium text-[#5C5C5C] mb-8">
          Here&apos;s your dashboard overview
        </p>

        {/* Performance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <PerformanceCard title="Active Listings" value={4} />
          <PerformanceCard title="Views this week" value={1250} />
          <PerformanceCard title="Inquiries" value={32} />
          <PerformanceCard title="Earnings" value={`245,000`} />
        </div>

        <Chart />
      </div>
      <ProfileCard />
    </div>
  );
}
