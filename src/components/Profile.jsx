import vert_ellipsis from '../assets/icons/vert_ellipsis.png';
import settings from '../assets/icons/settings.png';

function Profile({ img, name, role }) {
  return (
    <div className="flex gap-4 items-center">
      {/* profile */}
      <div className="flex items-center gap-2">
        <img src={img} alt="profile" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col">
          <h6 className="text-[#072635] text-sm font-semibold">{name}</h6>
          <span className="text-[#6B7280] text-sm">{role}</span>
        </div>
      </div>

      {/* vertical divider */}
      <div className="w-px h-10 bg-gray-300" />

      {/* icon settings */}
      <div className="flex items-center gap-2">
        <img src={settings} alt="settings" />
        <img src={vert_ellipsis} alt="options"/>
      </div>
    </div>
  );
}

export default Profile;
