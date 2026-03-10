import { useState, useEffect } from "react"
import { useNavigate, useLocation, useSearchParams } from "react-router"
import useDebounce from "./useDebounce"

const useSearchQuery = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()

  const [query, setQuery] = useState(searchParams.get("movie") ?? "")
  const debouncedQuery = useDebounce(query, 300)

  useEffect(() => {
    if (debouncedQuery.trim()) {
      navigate(`/search?movie=${debouncedQuery}`)
    } else if (location.pathname === "/search") {
      navigate("/")
    }
  }, [debouncedQuery])

  return { query, setQuery }
}

export default useSearchQuery
