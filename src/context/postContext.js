import { useState, createContext } from 'react'
import strEmpty from '../utils/strEmpty'
import axios from 'axios'

const PostContext = createContext()

export default PostContext

export const PostProvider = ({ children }) => {
  const [successForm, setSuccessForm] = useState(false)
  const [errorForm, setErrorForm] = useState(false)

  const sendFeedback = async (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const phone = e.target.phone.value
    const messenger = e.target.messenger.value
    // console.log(strEmpty(name))
    // console.log(strEmpty(messenger))
    if (!strEmpty(email)) {
      console.log(222)
      const data = {
        name: name,
        email: email,
      }
      await axios
        .post(`https://hr.octagonds.tech:8001/api/email/send`, data)
        .catch((error) => {
          console.log(error)
        })
    }
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
    e.target.reset()
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
