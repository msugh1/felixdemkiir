import { createBrowserRouter, Outlet } from "react-router";
import Home from "./pages/Home";
import FindingsArchive from "./pages/FindingsArchive";
import PrestaShopDocs from "./pages/projects/PrestaShopDocs";
import MetasploitableDocs from "./pages/projects/MetasploitableDocs";
import DVWADocs from "./pages/projects/DVWADocs";
import OpenVASDocs from "./pages/projects/OpenVASDocs";
import WiresharkDocs from "./pages/projects/WiresharkDocs";
import KafitechDocs from "./pages/projects/KafitechDocs";
import MalwareDocs from "./pages/projects/MalwareDocs";

function Root() {
  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "findings", Component: FindingsArchive },
      { path: "projects/prestashop-aws", Component: PrestaShopDocs },
      { path: "projects/vulnerability-exploitation", Component: MetasploitableDocs },
      { path: "projects/dvwa-web-scan", Component: DVWADocs },
      { path: "projects/openvas-scan", Component: OpenVASDocs },
      { path: "projects/wireshark-analysis", Component: WiresharkDocs },
      { path: "projects/kafitech-network-design", Component: KafitechDocs },
      { path: "projects/malware-log-investigation", Component: MalwareDocs },
    ],
  },
]);
