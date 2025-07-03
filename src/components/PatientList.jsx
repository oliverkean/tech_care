import { usePatients } from "../hooks/usePatient";
import PatientItem from "./PatientItem";

function PatientList() {
  const { patients, error } = usePatients();

  if (error) {
    return <p className="text-red-600">Error loading patients.</p>;
  }

  return (
    <div className="max-h-[calc(100vh-200px)] overflow-y-auto space-y-2 pr-2">
      {patients.map((patient, index) => (
        <PatientItem key={index} patient={patient} />
      ))}
    </div>
  );
}

export default PatientList;
