import React, { useEffect, useState } from 'react'
import { QueryFormData } from '../../api'
import { useNavigate } from 'react-router-dom'

export const CreatePosts = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const navigate = useNavigate()
    function handlerSubmit(event) {
        event.preventDefault()
        async function postQuery() {
            try {
                await QueryFormData.post('/add', {
                    title: title,
                    body: body,
                    userId: 6
                })
                navigate('/posts')
            } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log(error.response?.data.errText, 'error');
            } else if (error instanceof Error) {
                console.log(error.message);
            }
        }  
        }
        postQuery()
    }
    return (
        <div className="container">
            <form onSubmit={handlerSubmit}>
                <input value={title} type="text" 
                onChange={(event) => setTitle(event.target.value)} />
                <input value={body} type="text" 
                onChange={(event) => setBody(event.target.value)} />
                <button type='submit'>added post</button>
            </form>
        </div>
    )
}
