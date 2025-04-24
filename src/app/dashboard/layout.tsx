import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white max-w-screen overflow-x-hidden">
      <Sidebar />
      <main className="flex-1 md:ml-64">{children}</main>
    </div>
  );
}