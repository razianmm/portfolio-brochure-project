import axios from "axios"
import { useEffect, useState } from "react"

import { Layout } from "../../../layouts"
import { SiteSection } from "../../../components"

const mockImageAPIURL = `https://picsum.photos/v2/list`

import "./Gallery.scss"
import clsx from "clsx"

type MockImage = {
  id: string
  author: string
  width: number
  height: number
  url: string
  download_url: string
  isLoaded: boolean
}

export const Gallery = () => {
  const [mockData, setMockData] = useState<MockImage[]>([])

  const [numberOfOptionsToDisplay, setNumberOfOptionsToDisplay] =
    useState<number>(5)

  useEffect(() => {
    axios
      .get(mockImageAPIURL)
      .then((result) => {
        const data = JSON.stringify(result.data)

        const parsedData = JSON.parse(data)

        const dataWithLoadingFlag = parsedData.map((image: MockImage) => {
          const imageWithLoadingFlag = { ...image, isLoaded: false }

          return imageWithLoadingFlag
        })

        setMockData(dataWithLoadingFlag)
      })
      .catch((error) => {
        alert(`Error loading data: ${error}`)
      })
  }, [])

  return (
    <Layout>
      <SiteSection>
        <p className="gallery__intro">
          This page demonstrates a typical gallery view of items, as might be
          found on an e-commerce website.
        </p>
        <p className="gallery__intro">
          There is a maximum number of 20 photos that can be displayed on this
          page. The number of photos can be toggled using the Select element
          below.
        </p>
        <p className="gallery__intro">
          In addition to the default fallback image provided by the browser,
          there is a loading shimmer that is displayed when the image is taking
          time to load.
        </p>

        <div className="gallery__select__wrapper">
          <label htmlFor="options-select">Number of options to display: </label>
          <select
            id="options-select"
            onChange={(e) => {
              console.log(e.target.value)

              const valueToSet = Number(e.target.value)

              setNumberOfOptionsToDisplay(valueToSet)
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        <div className="gallery">
          {mockData.slice(0, numberOfOptionsToDisplay).map((image, index) => {
            return (
              <>
                <figure>
                  <img
                    key={index}
                    src={image.download_url}
                    className={clsx(
                      "gallery__image",
                      !mockData[index].isLoaded && "loading"
                    )}
                    alt={`Random image number ${index} pulled from API`}
                    onLoad={() => {
                      const mockImages = [...mockData]

                      mockData[index].isLoaded = true

                      setMockData(mockImages)
                    }}
                  />
                </figure>
              </>
            )
          })}
        </div>
      </SiteSection>
    </Layout>
  )
}
