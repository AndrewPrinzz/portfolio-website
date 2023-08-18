/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'

import { PortifolioItem } from 'components/components'
import { StyledButton, StyledContainer, StyledGradientSubtitle, StyledGreeting, StyledGreetingContainer, StyledGreetingDescription, StyledGreetingName, StyledGreetingRole, StyledHeader, StyledHeaderShadow, StyledMenuItems, StyledMoreOfMeBlock, StyledMoreOfMeItem, StyledPortfolioItems,  StyledScreen, StyledTitle } from 'components/lib'
import React from 'react'
import {css} from '@emotion/react'
import { IconInstagram } from 'components/icons'

function Header(props) {
  return (
    <React.Fragment {...props}>
    <StyledHeaderShadow />
      <StyledHeader>
        <div>
          <img src={require('assets/img/header-image.png')} />
        </div>
        <StyledMenuItems>
          <a href="#portfolio">Portfolio</a>
          <a href="#social-media">Social Media</a>
          <a href="#contact-me">Contact me</a>
        </StyledMenuItems>
        <StyledButton>
          Download CV
        </StyledButton>
      </StyledHeader>
    </React.Fragment>
  )
}

function Greeting(props) {
  return (
    <StyledScreen {...props}>
      <StyledGreeting>
        <StyledGreetingContainer>
          <StyledGreetingRole>
            {'<Software.Engineer />'}
          </StyledGreetingRole>
          <StyledGreetingName color='red'>
            Andrew Prinz
          </StyledGreetingName>
          <StyledGreetingDescription>
            <p>
              I’m Andrew, a self-taught Software Engineer with knowledge of UX/UI
            </p>
            <p>
              I discovered my passion for programming at my University of Science and Technology, where I realized that I wanted my life to be centered around Software Engineering
            </p>
            <p>
              I love learning new things and taking on challenges that are a bit unfamiliar. Besides coding, I really enjoy working on side projects, writing posts on my Instagram, and reading books related to science
            </p>
          </StyledGreetingDescription>
        </StyledGreetingContainer>
      </StyledGreeting>
    </StyledScreen>
  )
}

function Portfolio(props) {
  return (
    <StyledScreen {...props}>
      <StyledGradientSubtitle>Projects —</StyledGradientSubtitle>
      <StyledTitle>Stuff I've worked on</StyledTitle>
      <StyledPortfolioItems>
        <PortifolioItem 
          image={require('assets/img/portfolio/portfolio-duolingo.jpg')} 
          githubLink="https://github.com/AndrewPrinzz/duolingo_clone" 
          projectLink="http://duolingo-clone.andrew-dev.com/" 
        />
        <PortifolioItem 
          image={require('assets/img/portfolio/portfolio-music-app.jpg')} 
          githubLink="https://github.com/AndrewPrinzz/my-spotify-clone-on-react" 
          projectLink="https://spotify-clone.andrew-dev.com/" 
        />
      </StyledPortfolioItems>
    </StyledScreen>
  )
}

function MoreOfMe(props) {
  return (
    <StyledScreen {...props}>
      <StyledGradientSubtitle>See you around the internet —</StyledGradientSubtitle>
      <StyledTitle>More of me</StyledTitle>

      <StyledMoreOfMeBlock>
        <StyledMoreOfMeItem>
          <span>{'<LinkedIn />'}</span>
          <img src={require('assets/img/social-media-image.jpg')} />
        </StyledMoreOfMeItem>
        <StyledMoreOfMeItem>
          <span>{'<GitHub />'}</span>
          <img src={require('assets/img/social-media-image.jpg')} />
        </StyledMoreOfMeItem>
        <StyledMoreOfMeItem>
          <span>{'<Instagram />'}</span>
          <img src={require('assets/img/social-media-image.jpg')} />
        </StyledMoreOfMeItem>
      </StyledMoreOfMeBlock>
    </StyledScreen>
  )
}

function GetInTouch(props) {
  return (
    <StyledScreen {...props}>
      <StyledGradientSubtitle>Contact me —</StyledGradientSubtitle>
      <StyledTitle>Get in touch</StyledTitle>
      <p css={{maxWidth: '780px', letterSpacing: "0.54px", lineHeight: '1.4em'}}>
        The quickest way to reach me is through my  
        <a href="https://instagram.com/andrew_in_code" target="_blank" css={{color: '#83879B', fontWeight: '800'}}>
        <IconInstagram css={{width: '18px', transform: 'translateY(-1px)', marginLeft: 7}} /> Instagram
        </a> <br />
        Feel free to reach me if you have any questions ☺️
      </p>

      <div css={{marginTop: '80px', marginBottom: '60px'}}>
        © {new Date().getFullYear()} Andrew Prinz
      </div>
    </StyledScreen>
  )
}

function App() {
  return (
    <>
      <Header />
      <StyledContainer>
        <Greeting />
        <Portfolio id="portfolio" />
        <MoreOfMe id="social-media" />
        <GetInTouch id="contact-me" />
      </StyledContainer>
    </>
  );
}

export default App