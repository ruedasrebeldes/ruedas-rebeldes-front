import styled from "styled-components"
import { deviceSizes } from "../../particles/mediaQueries"
export const StyledHero = styled.div`
  margin-top: 10px;
  padding: 5px;
  width: 100%;
  height: 500px;
  display: flex;
  color:white;
  flex-wrap: wrap;
  justify-content: center;
      @media (min-width: 1590px) {
    flex-direction: row;
  }  

  .m-hero__img {
    padding-right: 2em;
    width: 300px;
    height: auto;
    max-height: 500px;
     @media (min-width: 1590px) {
      height: auto;
      width: 400px;
     }
      @media ${deviceSizes.sm} {
      .m-hero__img {
      max-height: 500px;
      }
    }
  }

`

export const StyledDetail = styled.div`
  padding-top: 25px;
  margin: 1em;
  font-weight: bold;
    @media ${deviceSizes.sm} {
    width:80%;
    margin: 0 auto;
    font-weight: bolder;
  }
  

`

export const StyledTitle = styled.h2`
  font-size: 30px;
  font-weight: ${props => props.theme.vars.fontBold};
  margin-bottom: 5px;

  @media ${deviceSizes.sm} {
    font-size: 30px;
  }

  @media ${deviceSizes.md} {
    font-size: 30px;
  }

  @media ${deviceSizes.lg} {
    font-size: 80px;
    margin-bottom: 10px;
  }

  @media ${deviceSizes.xl} {
    font-size: 80px;
  }
`

export const StyledDetailText = styled.p`
  font-size: 25px;
  font-weight:bold;

  @media ${deviceSizes.sm} {
    font-size: 30px;
  }

  @media ${deviceSizes.md} {
    font-size: 35px;
  }

  @media ${deviceSizes.lg} {
    font-size: 35px;
  }

  @media ${deviceSizes.xl} {
    font-size: 35px;
  }
`
