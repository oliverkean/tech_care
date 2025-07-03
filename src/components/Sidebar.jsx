import search from '../assets/icons/search.svg';
import img from '../assets/images/profile.png';
import ellipsis from '../assets/icons/ellipsis.png';
function Sidebar() {
  return (
    <div className='w-[372px] shadow-md bg-white rounded-xl p-4 flex flex-col gap-6 my-4'>
        <div className='flex items-center justify-between'>
          <h4 className='text-2xl font-semibold text-[#072635]'>Patients</h4>
          <span>
            <img src={search} alt="" />
          </span>
        </div>

        <div className='flex items-center justify-between gap-2 py-2'>
            <div className="flex items-center gap-2">
              <img src={img} alt="profile" className="w-10 h-10 rounded-full" />
              <div className="flex flex-col">
                <h6 className="text-[#072635] text-sm font-semibold">Emily Williams</h6>
                <span className="text-[#6B7280] text-sm">Female, 18</span>
              </div>
            </div>

            <div>
              <span>
                <img src={ellipsis} alt="options" />
              </span>
            </div>
        </div>      

    </div>
  )
}

export default Sidebar
