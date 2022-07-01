import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { baseUrl ,imageUrl , API_KEY} from '../../Constants/constants'
import YouTube from 'react-youtube'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlid,seturlId]= useState('')
  useEffect(() => {
    axios.get(baseUrl+props.url).then(response=>{
      // console.log(response.data.results)
      setMovies(response.data.results)
   
    })
    
  },[]);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id)=>{
    console.log(id)
      axios.get(baseUrl+`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        console.table(response.data)
        if(response.data.results.length!==0){
          seturlId(response.data.results[0])
        }else{
          console.log('array empty');
        }
      })
  }
 
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((obj,index)=>{
              
              return (
                
                  <div key={index}>
                <img onClick={(key={index})=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster': 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                </div>
                
                
                
              )
            })}
            </div>
        { urlid &&  <YouTube opts={opts} videoId={urlid.key}/>    }
    </div>
  )
}

export default RowPost