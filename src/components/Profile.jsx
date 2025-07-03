
import vert_ellipsis from '../assets/icons/vert_ellipsis.png'
import settings from '../assets/icons/settings.png'
function Profile({img, name, role}) {
  return (
    <div className="">
        {/* profile */}
        <div>
            <img src={img} alt="" />
            <h6>
                {name}
                <span>{role}</span>
            </h6>
        </div>

        {/* divider */}
        <div>
            |
        </div>

        {/* icon settings */}
        <div>
            <img src={settings} alt="" />
            <img src={vert_ellipsis} alt="" />
        </div>
        
    </div>
  )
}

export default Profile
