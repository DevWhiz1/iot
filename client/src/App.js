import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import EntityForm from "./scenes/form/EntityForm";
import EntitySwitch from "./components/switchLayout/EntitySwitch";
import FloorPlan from "./components/device/FloorPlan";
import Automation from "./components/automation/AutomationLayout";
import CodeEditor from "./components/codeeditor/CodeEditor";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {/* <Route path="/" element={<Dashboard />} /> */}
              <Route path="/" element={<EntitySwitch/>}/>
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/floorplan" element={<FloorPlan/>}/>
              <Route path="/form" element={<Form />} />
              <Route path="/entityform" element={<EntityForm />} />
              <Route path="/mainswitch" element={<EntitySwitch/>}/>
              <Route path="/codeeditor" element={<CodeEditor />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              {/* <Route path="/geography" element={<Geography />} /> */}
              <Route path="/geography" element={<Automation/>} />
              {/* <Route path="/faq" element={<AutomationComponent />} /> */}
            </Routes>
                        
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
