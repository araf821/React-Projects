import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await fetch(url)
        const tourList = await response.json()
        setLoading(false)
        console.log(tourList);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <h2>Loading Tours...</h2>
  }

  if (error) {
    return <h2>404 - Resource Not Found :(</h2>
  }

  return <h2>Tours Project Setup</h2>
}

export default App
