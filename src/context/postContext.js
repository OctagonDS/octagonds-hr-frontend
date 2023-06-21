import { useState, createContext } from 'react'
// import axios from 'axios'

const PostContext = createContext()

export default PostContext

export const PostProvider = ({ children }) => {
  const [successForm, setSuccessForm] = useState(false)
  const [errorForm, setErrorForm] = useState(false)

  const sendFeedback = async (e) => {
    e.preventDefault()
    //     const FormData = require('form-data')
    //     let data = new FormData()
    //     data.append('fields[name_1]', e.target['fields[name_1]'].value)
    //     data.append(
    //       'fields[496277_1][271003]',
    //       e.target['fields[496277_1][271003]'].value
    //     )
    //     data.append(
    //       'fields[496275_1][270991]',
    //       e.target['fields[496275_1][270991]'].value
    //     )
    //     data.append('fields[note_2]', e.target['fields[note_2]'].value)
    //     data.append('form_id', '1155370')
    //     data.append('hash', '09650a668fcb6773fdbcf966ce5f3d4f')
    //     data.append(
    //       'user_origin',
    //       '{"datetime":' +
    //         new Date().toLocaleString() +
    //         ',"referer":"https://octagonds.amocrm.ru/"}'
    //     )
    //     await axios
    //       .post(`https://forms.amocrm.ru/queue/add`, data)
    //       .then((t) => {
    //         console.log(t)
    //       })
    //       .catch((error) => {
    //         console.log(error)
    //       })
    setSuccessForm(true)
    setTimeout(() => {
      setSuccessForm(false)
    }, 10000)
  }

  let contextData = {
    sendFeedback: sendFeedback,
    successForm: successForm,
    errorForm: errorForm,
  }

  return (
    <PostContext.Provider value={contextData}>{children}</PostContext.Provider>
  )
}
