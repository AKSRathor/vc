import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import DashPage from './Components/UserDashboard/DashPage';
import Rents from './Components/UserDashboard/Rents';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import UserSider from './Components/UserDashboard/UserSider';
import UserOwnedSection from './Components/UserDashboard/UserOwnedSection';
import GovDash from './Components/GovernmentDash/GovDash';
import IssueDoc from './Components/GovernmentDash/IssueDoc';
import ContractDetailsGov from './Components/GovernmentDash/ContractDetailsGov';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="userdash" element={<DashPage />}>
            <Route path="owned" element={<UserOwnedSection />} />
            <Route path="rents" element={<Rents />} />
          </Route>
          <Route path="govdash" element={<GovDash />}>
            <Route path="issue" element={<IssueDoc />} />
            <Route path="contractdetails" element={<ContractDetailsGov />} />

          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
