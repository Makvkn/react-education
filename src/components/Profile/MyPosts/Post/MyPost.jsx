import s from'./MyPost.module.css'


const MyPost = (props) => {
    return (
            <div className={s.post}>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzpD1j0g5YocuxiWinS5x18H_5QzbI2TGOg&usqp=CAU" alt=""/>
                    {props.message}
                </div>

                <div>
                    <span>Like</span>
                </div>
            </div>
    )
}

export default MyPost