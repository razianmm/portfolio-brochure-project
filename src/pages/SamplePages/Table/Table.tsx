import axios from "axios"
import { useEffect, useState } from "react"

import { SiteSection } from "../../../components"
import { Layout } from "../../../layouts"

import "./Table.scss"

const mockDataURL = `https://my.api.mockaroo.com/users.json?key=${process.env.REACT_APP_MOCKAROO_API_KEY}`

type MockData = {
  id: number
  first_name: string
  last_name: string
  email: string
}

type Error = {
  isError: boolean
  errorMessage: string
}

const tablePageIntro = (
  <>
    <p className="table__intro">
      This page demonstrates an example UI for displaying table loaded from an
      API.
    </p>
    <p className="table__intro">
      The data is mock data pulled using mock API service
      <a> Mockaroo. </a>
      There is a check to see whether the data is cached in localStorage.
    </p>
  </>
)

export const Table = () => {
  const [mockData, setMockData] = useState<MockData[]>([])

  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [isError, setIsError] = useState<Error>({
    isError: false,
    errorMessage: "",
  })

  useEffect(() => {
    if (localStorage.getItem("mockData")) {
      const dataFromLocalStorage = localStorage.getItem("mockData")

      const parsedDataFromLocalStorage = JSON.parse(
        dataFromLocalStorage as string
      )

      setIsLoading(false)
      setMockData(parsedDataFromLocalStorage)
    } else {
      axios
        .get(mockDataURL)
        .then((result) => {
          console.log(
            "value of key 'mockData' not found in localStorage. Pulling from API..."
          )

          setIsLoading(false)

          const data = JSON.stringify(result.data)

          localStorage.setItem("mockData", data)

          const parsedData = JSON.parse(data)

          setMockData(parsedData)
        })
        .catch((error) => {
          setIsLoading(false)

          setIsError({ isError: true, errorMessage: `${error}` })
        })
    }
  }, [])

  return (
    <Layout>
      <SiteSection>
        {tablePageIntro}
        {isLoading && (
          <div className="loader__wrapper">
            <div className="loader"></div>
          </div>
        )}
        {mockData ? (
          <div className="table__wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {mockData.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.id}</td>
                      <td>{data.first_name}</td>
                      <td>{data.last_name}</td>
                      <td>{data.email}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
        {isError && (
          <div className="error__wrapper">{isError.errorMessage}</div>
        )}
      </SiteSection>
    </Layout>
  )
}
