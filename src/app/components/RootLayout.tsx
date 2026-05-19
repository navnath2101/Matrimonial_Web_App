import { Outlet } from "react-router";
import { Sidebar } from "./Sidebar";
import { InsightsPanel } from "./InsightsPanel";

export function RootLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
        <InsightsPanel />
      </div>
    </div>
  );
}
