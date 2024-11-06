import { useState, useEffect } from "react"

function APITest() {

    const [list, setList] = useState([])

    useEffect(() => {
        fetch('http://localhost:1337/api/landing-pages')
        .then((response) => response.json())
        .then((data) => console.log(data))
    }, [])

  return (
    <div className='APITest'>
    </div>
  )
}

export default APITest