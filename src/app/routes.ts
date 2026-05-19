import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Dashboard } from "./components/Dashboard";
import { MatchDiscovery } from "./components/MatchDiscovery";
import { ProfileDetail } from "./components/ProfileDetail";
import { Messages } from "./components/Messages";
import { Insights } from "./components/Insights";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "discover", Component: MatchDiscovery },
      { path: "profile/:id", Component: ProfileDetail },
      { path: "messages", Component: Messages },
      { path: "insights", Component: Insights },
    ],
  },
]);
