import { useState, createContext } from 'react'
import strEmpty from '../utils/strEmpty'
import axios from 'axios'
import randomGenerator from '../utils/randomGenerator'

const PostContext = createContext()

export default PostContext

export const PostProvider = ({ children }) => {
  const [successForm, setSuccessForm] = useState(false)
  const [errorForm, setErrorForm] = useState(false)

  const sendFeedback = async (e) => {
    e.preventDefault()
    const now = Math.floor(Date.now() / 1000)
    const name = e.target.name.value
    const email = e.target.email.value
    const phone = e.target.phone.value
    const messenger = e.target.messenger.value
    let ip = ''
    const jwt =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjE3MmIwNzU0NDFjMDEyMDhhN2MxNGUwNmIxYTA5YTFlZDE1ZjU5Mzk5NTY2OTNlOWFmMzlhZGVlMDU0ZDc0YjE5NTM4OTRiZGFlOTA4ZGE0In0.eyJhdWQiOiIwYmJlNmI3Mi1jYjRlLTQxZWYtOGE5Ny0yODQ5OTQ4ZjEwNWEiLCJqdGkiOiIxNzJiMDc1NDQxYzAxMjA4YTdjMTRlMDZiMWEwOWExZWQxNWY1OTM5OTU2NjkzZTlhZjM5YWRlZTA1NGQ3NGIxOTUzODk0YmRhZTkwOGRhNCIsImlhdCI6MTY4OTMxNjE5MywibmJmIjoxNjg5MzE2MTkzLCJleHAiOjE2ODk0MDI1OTMsInN1YiI6Ijk0MTU5MjIiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MzA5NjAwMjIsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6InYxIiwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.Rx0JfULnqoSO7rbIhia6esOo9hWdj4NONILKXy0LZwGuB7gNLSsLPNJIDuC3YJs-ywgGZpj3MjH2GBPWCOukrzaM010wzJ6NiEE86yZuMW9yKjUwcCbAHk74NS3X3yJeAfrJe6cNmJTK2Kn1Pft_1d_U8NdnyKHUGI3XcY8urScPWKee9ObUesEzly0mLfEJ3FDZhiohIhQYhDl7wWNAHiiUzPJE4E8V26CXcG90xEQBvhX89jes7PLtM7gRD_1XkpDk8PSdhyPNzY3inIMTBsTxhAtDib3DIWcp5C5zvMnT4060aQmXsBm9Vz9HeFCBdFczto3J3aQbOt5tdP7vsA'
    // console.log(strEmpty(name))
    // console.log(strEmpty(messenger))
    if (!strEmpty(email)) {
      console.log(222)
      // const data = {
      //   name: name,
      //   email: email,
      // }
      // await axios
      //   .post(`https://hr.octagonds.tech:8001/api/email/send`, data)
      //   .catch((error) => {
      //     console.log(error)
      //   })
    }
    // await axios
    //   .get(`https://geolocation-db.com/json/`)
    //   .then((res) => (ip = res.data.IPv4))

    const amoData = {
      request_id: now,
      source_name: 'Octagon DS',
      source_uid: randomGenerator(32),
      pipeline_id: 7009146,
      created_at: now,
      _embedded: {
        contacts: [
          {
            name: name,
            custom_fields_values: [
              {
                field_code: 'PHONE',
                values: [
                  {
                    value: phone,
                  },
                ],
              },
              {
                field_code: 'EMAIL',
                values: [
                  {
                    value: email,
                  },
                ],
              },
              {
                field_code: 'USER_AGREEMENT',
                values: [
                  {
                    value: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      metadata: {
        // ip: ip,
        form_id: 'b06msjbn1dvbvf1784q8ayf5xe835jp3a77d',
        form_sent_at: now,
        form_name: 'HR форма',
        form_page: 'HR форма',
        referer: 'https://octagonds.amocrm.ru',
      },
    }
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    }

    await axios
      .post(
        `https://octagonds.amocrm.ru/api/v4/leads/unsorted/forms`,
        amoData,
        {
          headers: headers,
        }
      )
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error)
      })

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
