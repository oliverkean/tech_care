
function Link({icon, name}) {
  return (
    <a href="" className="text-dark">
        <span><img src={icon} alt="" /></span>
        {name}
    </a>
  )
}

export default Link
