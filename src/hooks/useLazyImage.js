import { useEffect, useRef } from "react"

const useLazyImage = () => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const src = entry.target.getAttribute("data-src")
            entry.target.src = src
            observer.unobserve(entry.target) // 한 번 로드되면 관찰 중단
          }
        })
      },
      {
        rootMargin: "100px",
        threshold: 0.01,
      },
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return ref
}

export default useLazyImage
