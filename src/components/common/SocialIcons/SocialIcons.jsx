import { socialIcons } from '../../../Data'
import './SocialIcons.scss'

export default function SocialIcons() {
    return (
        <div className='social_icons'>
            {socialIcons.map((socialIcon, index) => {
                return (
                    <a key={index} href={socialIcon.link} target='_blank' rel='noreferrer'>
                        {socialIcon.icon}
                    </a>
                )
            })}
        </div>
    )
}
