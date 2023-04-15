// import Topbar from "./Components/topbar/TopBar";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "./context/Context";
import Upload from "./pages/UploaderScreen/upload";
import ListDisplay from "./pages/lists/List";
import Display from "./pages/DisplayScreen/Display";
import Dash from "./Dashboard/App";
import Topbar from "./Dashboard/scenes/global/Topbar";
import Sidebar from "./Dashboard/scenes/global/Sidebar";
import Dashboard from "./Dashboard/scenes/dashboard";
import Team from "./Dashboard/scenes/team";
import Invoices from "./Dashboard/scenes/invoices";
import Contacts from "./Dashboard/scenes/contacts";
import Bar from "./Dashboard/scenes/bar";
import Form from "./Dashboard/scenes/form";
import Line from "./Dashboard/scenes/line";
import Pie from "./Dashboard/scenes/pie";
import FAQ from "./Dashboard/scenes/faq";

import Geography from "./Dashboard/scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Dashboard/theme";
import Calendar from "./Dashboard/scenes/calendar/calendar";
import TopBars from "./Components/topbar/TopBars";
import List from "./pages/List";
import About from "./Components/Search/about";
import Details from "./Components/Search/Details";
import Request from "./Components/Request/App";
import PostsCard from "./Components/post/PostsCard";
import Requests from "./Components/post/Requests";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBars />
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="Dashboard_app">
            <main className="content">
              {/* <Topbar setIsSidebar={setIsSidebar} /> */}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/lawyers" element={<Homepage />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route
                  path="/login"
                  element={user ? <Homepage /> : <Login />}
                ></Route>
                <Route
                  path="/register"
                  element={user ? <Homepage /> : <Register />}
                ></Route>
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/post/:id" element={<Single />} />
                <Route path="/LawyerList" element={<List />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="/Details" element={<Details />} />
                <Route path="/Request" element={<Request />} />
                <Route path="/postcard" element={<PostsCard />} />
                <Route path="/requestlist" element={<Requests />} />
                <Route path="/lawyers/:id" element={<About />} />
                <Route path="/settings" element={<Settings />}></Route>
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Router>
    // <ColorModeContext.Provider value={colorMode}>
    //   <ThemeProvider theme={theme}>
    //     <CssBaseline />
    //     <div className="Dashboard_app">
    //       <Sidebar isSidebar={isSidebar} />
    //       <main className="content">
    //         <Topbar setIsSidebar={setIsSidebar} />
    // <Router>
    //   {/* <Topbar /> */}
    //   <Routes>
    //           <Route path="/dash" element={<Dashboard />} />
    //           <Route path="/team" element={<Team />} />
    //           <Route path="/contacts" element={<Contacts />} />
    //           <Route path="/invoices" element={<Invoices />} />
    //           <Route path="/form" element={<Form />} />
    //           <Route path="/bar" element={<Bar />} />
    //           <Route path="/pie" element={<Pie />} />
    //           <Route path="/line" element={<Line />} />
    //           <Route path="/faq" element={<FAQ />} />
    //           <Route path="/calendar" element={<Calendar />} />
    //           <Route path="/geography" element={<Geography />} />
    //     <Route exact path="/" element={   <Homepage />}>

    //     </Route>
    //     <Route path="/posts" element={<Homepage />}>

    //     </Route>
    //     {/* <Route path="/dash" element={user ? <Dash/> : <Register />}>

    //       </Route> */}
    //     <Route path="/register" element={user ? <Homepage /> : <Register />}>

    //     </Route>
    //     <Route path="/login" element={user ? <Homepage /> : <Login />}></Route>
    //     <Route path="/post/:id" element={<Single />}>

    //     </Route>
    //     <Route path="/write" element={user ? <Write /> : <Login />}></Route>
    //     <Route path="/settings"
    //        element={user ? <Settings /> : <Login />}>
    //     </Route>
    //     <Route path="/upload"
    //        element={user ? <Upload /> : <Login />}>
    //     </Route>
    //     <Route path="/videolist"
    //        element={user ? <ListDisplay /> : <Login />}>
    //     </Route>
    //     <Route path="/Display"
    //        element={user ? <Display /> : <Login />}>
    //     </Route>
    //   </Routes>
    // </Router>
    // </main>
    //     </div>
    //   </ThemeProvider>
    // </ColorModeContext.Provider>
  );
}

export default App;
