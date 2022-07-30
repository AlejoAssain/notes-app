import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ExpandButton from './ExpandButton';


const LinksWrapper = styled.div`
  margin: 10px;
`


const TitleWrapper = styled.div`
  padding: 13px;
  background-color: #323c63;
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
`


const ProjectLink = styled(Link)`
  margin-left: 20px;
  display: block;
  color: #fff;
  text-decoration: none;
  
`

const Title = styled.h4`
  margin: 0;
  padding: 0;
  display: inline;
`

const Links = (props) => {
  const [projectsExpanded, setProjectsExpanded] = useState(false);

  const toggleExpand = () => {
    setProjectsExpanded(!projectsExpanded)
  }

  return (
    <LinksWrapper>
      <TitleWrapper>
        <Title>{ props.title }</Title>
        <ExpandButton onClick={ toggleExpand } projectsExpanded={ projectsExpanded } />
      </TitleWrapper>
      {projectsExpanded ? props.projects.map(project => 
        <ProjectLink to="#" key={ project.projectName }>{ project.projectName }</ProjectLink>
      ) : null}
    </LinksWrapper>
  );
}

export default Links;
