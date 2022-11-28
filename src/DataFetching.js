import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        axios.get('https://thronesapi.com/api/v2/Characters')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        
    }, [])
    return (
    <div>
            {
                posts.map(post => 
                <div key={post.id}>
                <h1>{post.fullName}</h1>
                <h2>{post.title}</h2>
                <h3>{post.family}</h3>
                <img className="circle-img" src={post.imageUrl} alt={post.image} />
                <hr /> 
                </div>)
            }
    </div>
  )
}

export default DataFetching