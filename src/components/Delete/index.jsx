import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { QueryFormData } from '../../api'
import stylles from './Delete.module.scss'

export const Delet = () => {
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
    async function handlerDelete() {
        try {
            navigate('/posts')
            await QueryFormData.delete(`/${postId}`)
        }
        catch {
            alert('error 404');
        }
    }
    return (
        <div className={stylles.delete}>
            <p>Вы действительно хотите удолить этот пост?</p>
            <div className={stylles.delete__button}>
                <button onClick={() => navigate(-1)}>No</button>
                <button onClick={handlerDelete}>Yes</button>
            </div>
        </div>
    )
}
