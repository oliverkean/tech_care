import NavItems from "./NavItems";
import Profile from "./Profile";
import LINKS from "../constants/links";

import TestLogo from "../assets/images/TestLogo.png";
import profile from "../assets/images/profile.png";
function Navbar() {
  return (
    <div className="w-full mx-auto bg-white border">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-24 px-4">
        {/* logo */}
        <div>
          <img src={TestLogo} alt="Logo" className="h-10" />
        </div>

        {/* links */}
        <div>
          <NavItems links={LINKS} />
        </div>

        {/* profile */}
        <div>
          <Profile
            img={profile}
            name="Dr. Jose Simmons"
            role="General Practitioner"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
