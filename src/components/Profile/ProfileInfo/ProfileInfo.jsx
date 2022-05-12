import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://planetofhotels.com/guide/sites/default/files/styles/node__blog_post__bp_banner/public/2020-06/Exotic-tropical-beach-sunse.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo