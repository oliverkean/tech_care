import img from "../assets/images/profile.png";
import ellipsis from "../assets/icons/ellipsis.png";
import { useEffect, useState } from "react";

function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0" // Replace with your actual token
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPatients(data);
      })
      .catch((error) => {
        console.error("Error fetching patient data:", error);
      });
  }, []);

  return (
    <div className="space-y-2">
      {patients.map((patient, index) => (
        <div key={index} className="flex items-center justify-between gap-2 py-2">
          <div className="flex items-center gap-2">
            <img
              src={patient.profile_picture || img}
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <h6 className="text-[#072635] text-sm font-semibold">
                {patient.name}
              </h6>
              <span className="text-[#6B7280] text-sm">
                {patient.gender}, {patient.age}
              </span>
            </div>
          </div>
          <div>
            <img src={ellipsis} alt="options" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PatientList;
