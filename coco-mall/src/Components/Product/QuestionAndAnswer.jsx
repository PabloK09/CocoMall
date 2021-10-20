import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import QuestionCard from '../Cards/QuestionCard'

export default function QuestionAndAnswer({ productId }) {
    const [question, setQuestion] = useState([])

    useEffect(async () => {
        axios.get(`/question/${productId}`).then(response => {
            setQuestion(response.data)
        })
    }, [])

    return (
        <div>
            {
                question.length ? question.map(q => {
                    return <QuestionCard question={q.question} answer={q.answer} />
                }) : null
            }
        </div>
    )
}