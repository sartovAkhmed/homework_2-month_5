import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import { QueryFormData } from '../../api'

export const SinglPost = () => {
    const [post, setPost] = useState({})
    const { postId } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        async function getPost() {
            try {
                const response = await QueryFormData.get(`/${postId}`)
                setPost(response.data)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log(error.response?.data.errText, 'error');
                } else if (error instanceof Error) {
                    console.log(error.message);
                }
            }  
        }
        getPost()
    }, [])
    return (
        <div className='post'>
            <div className="container">
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}} className="post__item">
                    <span>{post.id}</span>
                    <h3>{post.title}</h3>
                </div>
                <p>{post.body}</p>
                <div className="post__button">
                    <button onClick={() => navigate(-1)}>prev</button>
                    <Link to={`delete`}>delete</Link>
                </div>
                <Outlet />
            </div>
        </div>
    )
}
