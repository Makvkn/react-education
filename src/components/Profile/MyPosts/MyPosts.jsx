import s from'./MyPosts.module.css'
import MyPost from "./Post/MyPost";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                My Posts
                <div>
                    <textarea name="" id="" cols="50" rows="1"></textarea>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <MyPost message = 'Hi'/>
                <MyPost message = 'Hello'/>
                <MyPost message = 'How do you do, ayo'/>
                <MyPost message = 'lololo'/>
                <MyPost message = 'Good Evening'/>
            </div>
        </div>
    )
}

export default Profile