import { IconGithub } from "./icons"
import { StyledPortfolioGithub, StyledPortfolioItem, StyledPortfolioLaunch, StyledPortfolioLinks } from "components/lib"
import {css} from "@emotion/react"

type PortfolioItem = {
  image: string;
  projectLink: string;
  githubLink: string;
}

function PortifolioItem({image, projectLink, githubLink}: PortfolioItem) {
  return (
    <StyledPortfolioItem>
      <img src={image} />
      <StyledPortfolioLinks>
        <StyledPortfolioLaunch href={projectLink} target="_blank">LAUNCH APP</StyledPortfolioLaunch>
        <StyledPortfolioGithub href={githubLink} target="_blank">
          <IconGithub />
        </StyledPortfolioGithub>
      </StyledPortfolioLinks>
    </StyledPortfolioItem>
  )
}

export {PortifolioItem}