/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'

import styled from "@emotion/styled/macro"
import {css} from '@emotion/react'

const textGradient = props => css`
  background: linear-gradient(270deg, #BADDF2 0%, rgba(187, 170, 221, 0.87) 23.34%, #C88BC4 44.34%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const StyledHeader = styled.header`
  background: #1E1E1E;
  border-radius: 50px;
  height: 77px;
  margin: auto;
  max-width: 1170px;
  padding-right: 44px;
  padding-left: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  position: fixed;
  width: 100%;
  top: 20px;
  margin: auto;
  left: 0;
  right: 0;
  z-index: 100;
  img {
    max-width: 42px;
  }
  @media (max-width: 1180px) {
    max-width: calc(100% - 30px)
  }
`

export const StyledHeaderShadow = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  background-image: linear-gradient(#101010 50%, rgba(16, 16, 16, 0));
  height: 77px;
  z-index: 5;
  position: fixed;
`

export const StyledMenuItems = styled.div`
  color: #83879B;
  letter-spacing: 0.48px;
  display: flex;
  position: relative;
  a {
    position: relative;
    padding: 0px 30px;
    color: inherit;
    :not(:last-child):after {
      content: '';
      position: absolute;
      right: 0;
      height: 100%;
      width: 1px;
      background: linear-gradient(180deg, #D9D9D9 0%, rgba(217, 217, 217, 0.00) 100%);
    }
  }
  @media (max-width: 900px) {
    a {
      padding: 0px 15px;
    }
  }
  @media (max-width: 767px) {
    display: none;
  }
`

export const StyledButton = styled.a`
  background: linear-gradient(270deg, #BADDF2 0%, rgba(187, 170, 221, 0.87) 23.34%, #C88BC4 44.34%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 10px 30px;
  border-radius: 50px;
  font-weight: 800;
  text-transform: uppercase;
  border: 1px solid #FFF;
`

export const StyledContainer = styled.div`
  width: 1115px;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1145px) {
    max-width: 100%;
  }
`

export const StyledGreetingContainer = styled.div`
  max-width: 734px;
  margin: auto;
  margin-left: 18.5%;
`

export const StyledGreeting = styled.div`
  background-image: url(${require('assets/img/pc-bg.jpg')});
  background-repeat: no-repeat;
  background-size: contain;
  height: 656px;
  margin-top: 80px;
`

export const StyledGreetingRole = styled.div`
  padding-top: 50px;
  color: #4F4F4F;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 0.9px;
`

export const StyledGreetingTitle = styled.div`
  background: linear-gradient(270deg, #BADDF2 0%, rgba(187, 170, 221, 0.87) 23.34%, #C88BC4 44.34%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const StyledGreetingName = styled.h1`
  padding: 15px 0;
  font-size: 60px;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 1.8px;
  ${textGradient}
`

export const StyledGreetingDescription = styled.div`
  p {
    color: #83879B;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.54px;
    line-height: 1.6em;
  }
`

export const StyledGradientSubtitle = styled.div`
  background: linear-gradient(270deg, #BADDF2 0%, rgba(187, 170, 221, 0.87) 23.34%, #C88BC4 44.34%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 16px;
  font-weight: 800;
  letter-spacing: 0.48px;
  margin-bottom: 15px;
`

export const StyledTitle = styled.h2`
  color: #FFF;
  font-family: Poppins;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 1.2px;
  margin-bottom: 30px;
`

export const StyledScreen = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`

export const StyledPortfolioItems = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const StyledPortfolioItem = styled.div`
  width: 46%;
  position: relative;
  margin-top: 30px;
  @media (max-width: 480px) {
    width: 100%;
    img {
      width: 100%;
    }
  }
`

export const StyledPortfolioLinks = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  right: 4%;
  bottom: 2.5%;
  width: 40%;
  `

export const StyledPortfolioLaunch = styled.a`
  padding: 3px 20px;
  disaply: flex;
  font-size: 14px;
  font-weight: 800!important;
  ${textGradient};
  border: 1px solid #FFF;
  border-radius: 50px;
  cursor: pointer;
`

export const StyledPortfolioGithub = styled.a`
  
`

export const StyledMoreOfMeBlock = styled.div`
  grid-template-columns: repeat(3,1fr);
  display: grid;
  grid-column-gap: 30px;
  grid-row-gap: 35px;
`

export const StyledMoreOfMeItem = styled.a`
  position: relative;
  img {
    min-width: 100%;
    transition: 0.3s;
  }
  cursor: pointer;
  span {
    position: absolute;
    bottom: 0;
    left: 23px;
    bottom: 15%;
    font-size: 30px;
    letter-spacing: 0.9px;
    color: #fff;
    transition: 0.3s;
    z-index: 50;
  }
  :hover {
    img {
      transition: 0.3s;
      opacity: 0.6;
    }
    span {
      opacity: 0.7;
      transition: 0.3s;
    }
  }
`