import ellipsis from "../assets/icons/ellipsis.png";

function PatientItem({ patient }) {
  const profilePic = patient.profile_picture || img;

  return (
    <div className="flex items-center justify-between gap-2 py-2">
      <div className="flex items-center gap-2">
        <img src={profilePic} alt="profile" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col">
          <h6 className="text-[#072635] text-sm font-semibold">
            {patient.name}
          </h6>
          <span className="text-[#6B7280] text-sm">
            {patient.gender}, {patient.age}
          </span>
        </div>
      </div>
      <img src={ellipsis} alt="options" />
    </div>
  );
}

export default PatientItem;