import { useEffect } from "react"

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // ref가 없거나, 클릭한 대상이 ref 내부에 있으면 무시
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }

    document.addEventListener("mousedown", listener)
    return () => {
      document.removeEventListener("mousedown", listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside
