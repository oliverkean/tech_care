import search from '../assets/icons/search.svg';
import PatientList from './PatientList';
function Sidebar() {
  return (
    <div className='w-[372px] shadow-md bg-white rounded-xl p-4 flex flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <h4 className='text-2xl font-semibold text-[#072635]'>Patients</h4>
          <span>
            <img src={search} alt="" />
          </span>
        </div>

        <PatientList />
    </div>
  )
}

export default Sidebar
