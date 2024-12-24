import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import FragrancePicks from "./components/FragrancePicks";
import RachelRuston from "./components/profiles/RachelRuston";
import KateTschirhart from "./components/profiles/KateTschirhart";
import LynaTran from "./components/profiles/LynaTran";
import Vocab from "./components/Vocab";

const profileComponents = {
  "rachel-ruston": RachelRuston,
  "kate-tschirhart": KateTschirhart,
  "lyna-tran": LynaTran,
};

function ProfileLoader() {
  const { profileId } = useParams();
  const ProfileComponent = profileComponents[profileId];

  return ProfileComponent ? <ProfileComponent /> : <p>Profile not found</p>;
}

function ScrollToTopWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
}

function App() {
  return (
    <Router>
      <ScrollToTopWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chapters" element={<FragrancePicks />} />
          <Route path="/chapters/:profileId" element={<ProfileLoader />} />
          <Route path="/vocab" element={<Vocab />} />
        </Routes>
      </ScrollToTopWrapper>
    </Router>
  );
}

export default App;
