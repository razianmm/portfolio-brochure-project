import axios from "axios"
import { useEffect, useState } from "react"

import { SiteSection } from "../../../components"
import { Layout } from "../../../layouts"

const mockDataURL = `https://my.api.mockaroo.com/users.json?key=${process.env.REACT_APP_MOCKAROO_API_KEY}`

type MockData = {
  id: number
  first_name: string
  last_name: string
  email: string
}

export const Table = () => {
  const [mockData, setMockData] = useState<MockData[]>([])

  useEffect(() => {
    axios
      .get(mockDataURL)
      .then((result) => {
        const data = JSON.stringify(result.data)

        const parsedData = JSON.parse(data)

        setMockData(parsedData)
      })
      .catch((error) => {
        alert(`Error loading data: ${error}`)
      })
  }, [])

  return (
    <Layout>
      <SiteSection>
        <table>
          <thead>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </thead>
          <tbody>
            {mockData
              ? mockData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.id}</td>
                      <td>{data.first_name}</td>
                      <td>{data.last_name}</td>
                      <td>{data.email}</td>
                    </tr>
                  )
                })
              : ""}
          </tbody>
        </table>
      </SiteSection>
    </Layout>
  )
}
