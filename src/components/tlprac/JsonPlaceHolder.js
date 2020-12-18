import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const JsonPlaceHolder = () => {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idBtnClick, setIdBtnClick] = useState(1)

    const handleClick = ()=>{
        setIdBtnClick(id)
    }
    useEffect(()=>{
        Axios
        .get(`https://jsonplaceholder.typicode.com/posts/${idBtnClick}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idBtnClick])



    return (
        <div>
            <h1>JsonPlaceHolder</h1>
            {/* 값이 바뀔경우  {id} 조건*/}
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>

            {/* 단순 데이터 변환& 표시 */}
            {/* <ul>
                {
                    posts.map(post =>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    );
};

export default JsonPlaceHolder;