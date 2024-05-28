import styled from "styled-components"


export const StyledHomeMain = styled.main`
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  .p-home-main{
    color: white;
  }
    h1.title-red {
    color: black;
    text-align: center;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
  }
  p.click{
    margin: 0.5em 0;
  }

`
export const StyledHeroBG = styled.main`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

`


export const StyledBackgroundImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`
