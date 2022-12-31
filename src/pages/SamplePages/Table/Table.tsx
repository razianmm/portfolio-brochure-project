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

const TablePageIntro = ({
  isLoading,
  isError,
  setIsLoading,
  setIsError,
}: {
  isLoading: boolean
  isError: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setIsError: React.Dispatch<React.SetStateAction<Error>>
}) => {
  const [dataIsToggled, setDataIsToggled] = useState<boolean>(false)

  const [errorIsToggled, setErrorIsToggled] = useState<boolean>(false)

  return (
    <div className="table__wrapper--page">
      <p className="table__intro">
        This page demonstrates an example UI for displaying table loaded from an
        API.
      </p>
      <p className="table__intro">
        The data is mock data pulled using mock API service
        <a> Mockaroo. </a>
        There is a check to see whether the data is cached in localStorage.
      </p>
      <p className="table__intro">
        In addition, this page contains logic to both display a loader in
        circumstances where connection may prohibit data being fetched in a
        timely manner, and to display an error state when the data is unable to
        be loaded successfully. These two states can be demo'ed using the two
        togges below.
      </p>
      <div className="table__toggles__wrapper">
        <input
          type="checkbox"
          id="switch-loading"
          className="table__switch"
          checked={dataIsToggled}
          onChange={() => {
            setDataIsToggled(!dataIsToggled)
            if (errorIsToggled) {
              setErrorIsToggled(false)
              setIsError({ isError: false, errorMessage: "" })
            }
            setIsLoading(!isLoading)
          }}
        />
        <label htmlFor="switch-loading">Data loading</label>
        <p>Data loading</p>
        <input
          type="checkbox"
          id="switch-error"
          className="table__switch"
          checked={errorIsToggled}
          onChange={() => {
            setErrorIsToggled(!errorIsToggled)
            if (dataIsToggled) {
              setDataIsToggled(false)
              setIsLoading(false)
            }
            if (!isError) {
              setIsError({
                isError: true,
                errorMessage: "This is a sample error message",
              })
            } else {
              setIsError({ isError: false, errorMessage: "" })
            }
          }}
        />
        <label htmlFor="switch-error">Error message</label>
        <p>Error message</p>
      </div>
    </div>
  )
}

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
        <TablePageIntro
          isLoading={isLoading}
          isError={isError.isError}
          setIsError={setIsError}
          setIsLoading={setIsLoading}
        />
        {isLoading && (
          <div className="loader__wrapper">
            <div className="loader"></div>
          </div>
        )}
        {!isLoading && !isError.isError && mockData ? (
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
        {isError.isError && (
          <div className="error__wrapper">
            <p>{isError.errorMessage}</p>
          </div>
        )}
      </SiteSection>
    </Layout>
  )
}
