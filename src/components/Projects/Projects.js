import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project) => {
        return (
          <BlogCard id={project.id} key={project.id}>
            <Img src={project.image} />
            <TitleContent>
              <HeaderThree>{project.title}</HeaderThree>
              <Hr></Hr>
            </TitleContent>
            <CardInfo>{project.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {project.tags.map((tag, i) => {
                  return <Tag key={i}>{tag}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              {project.visit !== "" && (
                <ExternalLinks href={project.visit}>Code</ExternalLinks>
              )}
              {project.source !== "" && (
                <ExternalLinks href={project.source}>Source</ExternalLinks>
              )}
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
    <br />
    <SectionDivider />
  </Section>
);

export default Projects;
