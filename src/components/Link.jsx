
function Link({icon, name}) {
  return (
    <a href="" className="text-[#072635] text-xs font-semibold flex items-center gap-2 justify-between hover:bg-[#01F0D0] p-3 rounded-full transition-all duration-300">
        <span className="ml-2"><img src={icon} alt="" /></span>
        {name}
    </a>
  )
}

export default Link
