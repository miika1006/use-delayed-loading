import React, { useEffect } from 'react'

import { useDelayedLoading } from 'use-delayed-loading'

const App = () => {
  const [loading, setLoading] = useDelayedLoading(true);
  const loadDataFromApi = async () => {

    try{
      setLoading(true);
      const result = await fetch('https://github.com/miika1006/use-delayed-loading');
    }
    finally{
      setLoading(false);
    }
  }
  useEffect(() => loadDataFromApi(),[]);
  return (
    loading ? "Loading" : "Hello there"
  )
}
export default App
