import axios from 'axios'
import React, { createContext, useState, useEffect } from 'react'


export const CommentContext = createContext()

export default function CommentProvider({ children }) {
    const [comments, setComments] = useState([])
    useEffect(() => {
        const showComments = async () => {
            try {
                const res = await axios.get('http://localhost:5000/showComments')
                if (!res) {
                    console.log("Cannot display comments")
                    return
                }
                setComments(res.data)
            } catch (err) {
                console.log("Cannot display comments", err)
            }
        }
        showComments()
    }, [])

    return (
        <CommentContext.Provider value={{ comments, setComments }}>
            {children}
        </CommentContext.Provider>
    )
}
