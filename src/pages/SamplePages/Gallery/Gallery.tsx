import axios from "axios"
import { useEffect, useState } from "react"

const mockImageAPIURL = `https://jsonplaceholder.typicode.com/photos`

import "./Gallery.scss"

type MockImage = {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export const Gallery = () => {
  const [mockData, setMockData] = useState<MockImage[]>([])

  useEffect(() => {
    // TO-DO: Replace the below with https://picsum.photos/

    axios
      .get(mockImageAPIURL)
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
    <div className="gallery">
      {mockData.slice(0, 50).map((image, index) => {
        return (
          <>
            <figure key={index}>
              <img
                src={image.url}
                className="gallery__image"
                alt={image.title}
              />
            </figure>
          </>
        )
      })}
    </div>
  )
}
