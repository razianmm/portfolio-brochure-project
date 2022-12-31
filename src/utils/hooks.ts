import { useEffect, useRef, useState } from "react"

export const useTriggerOnScroll = () => {
  const [isIntersecting, setIsIntersection] = useState(false)

  const ref = useRef(null)

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries

    setIsIntersection(entry.isIntersecting)
  }

  const options = {
    threshold: 0.5,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, options)

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [ref])

  return { ref, isIntersecting }
}
