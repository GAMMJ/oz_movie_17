import { useState, useEffect } from "react"
import { useNavigate } from "react-router"
import useDebounce from "./useDebounce"

const useSearchQuery = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState("")
  const debouncedQuery = useDebounce(query, 300)

  useEffect(() => {
    debouncedQuery.trim() ? navigate(`/search?movie=${debouncedQuery}`) : navigate("/")
  }, [debouncedQuery])

  return { query, setQuery }
}

export default useSearchQuery
