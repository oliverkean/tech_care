import NavItems from "./NavItems";
import Profile from "./Profile";
import LINKS from "../constants/links";

import TestLogo from "../assets/images/TestLogo.png";
import profile from "../assets/images/profile.png";
function Navbar() {
  return (
    <div className="w-full bg-white rounded-full my-6">
      <div className="flex justify-between items-center px-4 py-3">
        <div>
          <img src={TestLogo} alt="Logo" className="h-10" />
        </div>
        <div>
          <NavItems links={LINKS} />
        </div>
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
