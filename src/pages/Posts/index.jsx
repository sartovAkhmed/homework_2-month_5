import React, { useEffect, useState } from 'react'
import { QueryFormData } from '../../api'
import { Link } from 'react-router-dom'

export const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        async function GetQuery () {
            try {
                const response = await QueryFormData.get()
                setPosts(response.data.posts)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log(error.response?.data.errText, 'error');
                } else if (error instanceof Error) {
                    console.log(error.message);
                }
            }  
        }
        GetQuery()
    }, [])
    return (
        <div className='container'>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '10px'}} className="post__item">
                        <span>{post.id}</span>
                        <h3>{post.title}</h3>
                    </div>
                    <Link to={`/posts/${post.id}`}>Подробнее</Link>
                </div>
            ))}
        </div>
    )
}
