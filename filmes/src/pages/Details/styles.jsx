import styled from 'styled-components'

export const Container = styled.div`


h1{
    margin:3rem 0 ;
   
}
div{
    display: flex;
    align-items: center;
    justify-content: center;
}
img{
    width: 20%;
    border-radius: 0.5rem;
  
}
.details{
    display: flex;
    flex-direction: column;
    padding-left: 2rem;
    max-width: 50%
   align-items: justify;
}
span{
    padding-bottom: 2rem;
    line-height: 150%;
    font-size: 110%;
}

button{
    padding: 0.5rem 3rem 0.5rem;
    border-radius: 1rem;
    font-weight: bold;
    font-size: 150%;
    text-align: center;
    transition: 0.3s;
}
button: hover{
    background-color: #FBF8F0;
}
`