import {Container, MovieList, Movie} from '../../../src/pages/Home/styles.jsx'

function Home() {
  const movies = [
        {
              title: "Homem-aranha",
              id: 1,
              imageurl: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg"
        },
        {
          title: "Homem-aranha",
          id: 2,
          imageurl: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg"
        },
        {
          title: "Homem-aranha",
          id: 3,
          imageurl: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg"
        }
      ]

    return (
      <>
     
     <Container> 
        <h1>Movies</h1>
        <MovieList>
            <Movie>
                <a href="www.google.com.br"><img src= 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg' alt="spider-man"></img></a>
                <span>Homem-aranha</span>
            </Movie>
                
            <Movie>     
            <a href="www.google.com.br"><img src= 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg' alt="spider-man"></img></a>
            <span>Homem-aranha</span>
                
            </Movie>

            <Movie>
               <a href="www.google.com.br"><img src= 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/60eca3ac155247e21850c7d075d01ebf0f3f5dbf19ccd2a1.jpg' alt="spider-man"></img></a>
                <span>Homem-aranha</span>
            </Movie>
        </MovieList>
        </Container>
  
         
      </>
    )
  }
  
  export default Home
  