import {Link, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {apikey} from '../../config/key.jsx'

import {Container} from '../Details/styles.jsx'


function Details(){
const image_path = 'https://image.tmdb.org/t/p/w500'
const {id} = useParams()
const [movie, setMovie] = useState({})
useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
        const movie = {
            id,
            title: data.title,
            sinopse: data.overview,
            releasedate: data.release_date,
            image: `${image_path}${data.poster_path}`
        }
        setMovie(movie)
    }
    
    )
},[id])

    return(
        <Container>

            <div>
                <img  src={movie.image} alt={movie.title}></img>
                <div className='details'>
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.sinopse}</span>
                    <span>Data lançamento: {movie.releasedate}</span>
                    <Link to={'/'}> <button>Voltar</button></Link>
                  
                </div>
            </div>
        </Container>
    )
}

export default Details