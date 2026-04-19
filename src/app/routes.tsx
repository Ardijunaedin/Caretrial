import { createBrowserRouter } from "react-router";
import { Landing } from "./components/Landing";
import { Auth } from "./components/Auth";
import { RoleSelection } from "./components/RoleSelection";
import { ProfileSetup } from "./components/ProfileSetup";
import { WifePairing } from "./components/WifePairing";
import { HusbandPairing } from "./components/HusbandPairing";
import { HusbandInvite } from "./components/HusbandInvite";
import { WifeDashboard } from "./components/WifeDashboard";
import { HusbandDashboard } from "./components/HusbandDashboard";
import { MissionComplete } from "./components/MissionComplete";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/auth",
    Component: Auth,
  },
  {
    path: "/onboarding",
    Component: RoleSelection,
  },
  {
    path: "/profile-setup",
    Component: ProfileSetup,
  },
  {
    path: "/wife-pairing",
    Component: WifePairing,
  },
  {
    path: "/husband-pairing",
    Component: HusbandPairing,
  },
  {
    path: "/husband-invite/:wifeName",
    Component: HusbandInvite,
  },
  {
    path: "/wife-dashboard",
    Component: WifeDashboard,
  },
  {
    path: "/husband-dashboard",
    Component: HusbandDashboard,
  },
  {
    path: "/mission-complete",
    Component: MissionComplete,
  },
]);
