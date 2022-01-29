import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})  //это хук useState. Здест можно создать управляеммый компонент

    const addNewPost = (e) => {
        e.preventDefault() // убирает дефолтное поведение браузера, страница не обновляется когда нажимаю создать пост
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            {/*value и onChange - делаем двухстороннее связование*/}
            {/*onChange - функция которая меняет состояние*/}
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />

            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            <MyButton onClick={addNewPost}>Create a post</MyButton>
        </form>
    );
};

export default PostForm;