import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useField } from '../Hooks'



export const CreateNew = (props) => {
    const content = useField('text')
    const author = useField('text')
    const info = useField('text')
    
    const navigate = useNavigate()  
  
    const handleSubmit = (e) => {
      e.preventDefault()
      
      const newAnecdote = {
        content: content.value,
        author: author.value,
        info: info.value,
        votes: 0
      }

      props.addNew(newAnecdote)
      navigate('/')
    }

    const resetField = (event) => {
      event.preventDefault()
      content.reset()
      author.reset()
      info.reset()
    }

    const { reset: resetContent, ...inputcontent } = content
    const { reset: resetAuthor, ...inputauthor } = author
    const { reset: resetInfo, ...inputinfo } = info
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form>
          <div>
            content
            <input {...inputcontent} />
          </div>
          <div>
            author
            <input {...inputauthor} />
          </div>
          <div>
            url for more info
            <input {...inputinfo} />
          </div>
          <button onClick={handleSubmit} >create</button>
          <button onClick={resetField} >reset</button>
        </form>
      </div>
    )
  
  }