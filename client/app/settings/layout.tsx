import Navbar from "@/components/agent/Navbar";
import SettingsNav from "@/components/agent/SettingsNav";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex">
        <SettingsNav />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
