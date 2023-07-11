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
    const JWT =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImU4ODY1YjZlZjJiZjAyZjU1ZDBhZWQ2ZGUwNjk2NGQ4MjFkOGMyYTgyNTZmMjZkZjEwYjUxNzc1NjNhZjRlZjU2MGQyOTc0NzgzYzlkNTExIn0.eyJhdWQiOiJhOWI3MWQ4ZC0yMTliLTRmYTUtYWY5OC1iYTBmY2E3NzRkNmEiLCJqdGkiOiJlODg2NWI2ZWYyYmYwMmY1NWQwYWVkNmRlMDY5NjRkODIxZDhjMmE4MjU2ZjI2ZGYxMGI1MTc3NTYzYWY0ZWY1NjBkMjk3NDc4M2M5ZDUxMSIsImlhdCI6MTY4OTA3ODY1NywibmJmIjoxNjg5MDc4NjU3LCJleHAiOjE2ODkxNjUwNTcsInN1YiI6Ijk0MTU5MjIiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MzA5NjAwMjIsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6InYxIiwic2NvcGVzIjpbInB1c2hfbm90aWZpY2F0aW9ucyIsImZpbGVzIiwiY3JtIiwiZmlsZXNfZGVsZXRlIiwibm90aWZpY2F0aW9ucyJdfQ.kZUb4eDWC1nXUASGfVOQZNqwRqC5GDW_eSVJxhaKWfrpOVc-u351ZrNDyQTY5X5Bqgv5cmzHWqjkqgku2ouIBA2JlYQr9hW6NsV_f-65sR1Kh6dC9RyGZHxlCX6U6MguLJHfKJoauMLgk67cURjvBeFpD2tInZGUNvFS935LgiWd8oNhdGWKKCxSkqiR2edWEo1Np7zP2o4Us5tfsDaYydnBCp2hmpxnjQktgY5SiO2SDfikxwSstSZqmSsNC4e3NNGAlKbOjnEkEhXvi1RBWDHHTseUdPIhJ_XVc4YEOjmAYLZYgU6EOCPK1GoGUu_TZdZqF-T5Lj8lKUPlRHxi-Q'
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
    await axios
      .get(`https://geolocation-db.com/json/`)
      .then((res) => (ip = res.data.IPv4))

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
        ip: ip,
        form_id: 'b06msjbn1dvbvf1784q8ayf5xe835jp3a77d',
        form_sent_at: now,
        form_name: 'HR форма',
        form_page: 'HR форма',
        referer: 'https://octagonds.amocrm.ru',
      },
    }
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${JWT}`,
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
