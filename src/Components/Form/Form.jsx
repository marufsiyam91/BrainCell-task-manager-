import { useState } from "react"
import styles from './Form.module.css'

const Form = () => {

    const [handledData, setHandledData] = useState({
        title: '',
        link: '',
        image: '',
        description: ''
    })

    const [taskData, setTaskData] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setHandledData(prevValue => ({
            ...prevValue,
            [name]: value
        }))
        console.log(handledData.title, handledData.description)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTaskData(prevTasks => ([
            ...prevTasks,
            handledData
        ]))
        setHandledData({
            title: '',
            link: '',
            image: '',
            description: ''
        })
        console.log(taskData)
    }


  return (
        <form className={styles.form_wrapper} onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} name="title" value={handledData.title} placeholder="Add title here"/>
            <input type="text" onChange={handleChange} name="link" value={handledData.link} placeholder="Link here"/>
            <input type="file" onChange={handleChange} name="image" value={handledData.image} placeholder="Image here"/>
            <textarea name="description"onChange={handleChange} value={handledData.description} cols="30" rows="13" placeholder="Add a description"></textarea>
            <button>Add data</button>
        </form>
  )
}

export default Form