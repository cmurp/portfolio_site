import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DiGithubAlt } from "react-icons/di";
import TextBlock from "../../branding/text-block";
import DisintegrateText from "../../effects/disentegrate-text";
import { Flipper, Flipped } from 'react-flip-toolkit';
import { CiSquareRemove, CiSquarePlus
 } from "react-icons/ci";


const Container = styled.div`
  display: flex;
  margin-top: 2rem;
  justify-content:center;
  width: 100%;
`;

const ResumeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${(props) => props.theme.fontSizes.md};
  padding: 20px;
  background: ${props => props.theme.colors.secondary};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.colors.textPrimary};
  font-family: ${(props) => props.theme.fonts.code};
  flex: 1;


  /* Define grid template areas */
  grid-template-areas: 
    "header header header"
    "category category category"
    "content content content";
`;

const FilterSection = styled(Flipper)`
 display: flex;
 flex-wrap: wrap;
 grid-area: category;
`;

const FilterTag = styled.button<{ active?: boolean, color?: string }>`
  background-color: ${(props) => 
    props.active ? props.color : props.theme.colors.main
  };
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => 
    props.active ? props.theme.colors.main : props.theme.colors.tertiary
  };
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  margin: 0 ${(props) => props.theme.fontSizes.sm} 0 0;
  padding: 1px 10px;
  transition: background-color 0.3s;

  /* Align icon with text */
    display: flex;
    align-items: center;
    justify-content: center;
    
  &:hover {
    background-color: ${(props) => 
      props.active ? props.theme.colors.main : props.theme.colors.tertiary
    };
    color: ${(props) => 
      props.active ? props.theme.colors.tertiary : props.theme.colors.main
    };
  }
`;

const FilterCount = styled.span`

`


const Title = styled.h2`
  grid-area: header;
  font-size: ${props => props.theme.fontSizes.xxl};
  text-transform: uppercase;
  border-bottom: 2px solid  ${props => props.theme.colors.accent};
  margin-bottom: 0.5em;
  padding-bottom: 0.3em;
  text-align: center;
`;

const Bullets = styled.div`
  grid-area: content;
`

const BulletPoint = styled.section`
  background: ${props => props.theme.colors.tertiary};
  padding: 10px;
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: ${(props) => props.theme.fontSizes.md};
`;

const Tag = styled.span<{ active?: boolean, color?: string }>`
  background-color: ${(props) => props.active ? "white" : "grey" }; /* Example background color */
  color: black; /* Example text color */
  font-size: 0.8em;
  margin-right: 5px;
  padding: 2px 8px;
  border-radius: 12px;
  display: inline-block; /* to display tags inline */
  margin-bottom: 5px; /* space between tags and the text if necessary */
  text-decoration: underline ${props => props.color};
`;

// interface for json data
interface Work {
  text: string;
  tags: string[];
}

interface Tags {
  [key: string]: string;
}

interface WorksData {
  works: Work[];
  tags: Tags;
}

export default function Work() {
  const [works, setWorks] = useState<{ works: { text: string, tags: string[] }[] } | null>(null);
  const [tagColors, setTagColors] = useState<{ [key: string]: string }>({});
  const [filters, setFilters] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
      // Fetching the JSON data from the public folder
      fetch('/data/works.json')
          .then(response => response.json())
          .then((jsonData: WorksData) => {
              setWorks(jsonData);
              setTagColors(jsonData.tags);

              const allTags = new Set<string>();
              jsonData.works.forEach((work: Work) => {
                  work.tags.forEach(tag => allTags.add(tag));
              });

              const initialFilters: { [key: string]: boolean } = {};
              Array.from(allTags).forEach(tag => {
                  initialFilters[tag] = true;
              });

              setFilters(initialFilters);
          })
          .catch(error => {
              console.error("Error fetching the JSON data:", error);
          });
  }, []); 

  const toggleFilter = (tag: string) => {
      setFilters(prev => ({
          ...prev,
          [tag]: !prev[tag]
      }));
  };

  if (!works) return <p>Loading...</p>;

  return (
    <Container>
      <ResumeGrid>
        <Title>Work</Title>
        <FilterSection flipKey={Object.values(filters).join('')}>
          {Object.entries(filters) // This gives you [string, boolean] tuples
            .sort((a, b) => Number(b[1]) - Number(a[1])) // Sort boolean values
            .map(([tag, active]) => (
              <Flipped key={tag} flipId={tag}>
                <FilterTag
                  active={active} // active is boolean
                  color={tagColors[tag] as string} // Cast color as string to ensure type safety
                  onClick={() => toggleFilter(tag)}
                >
                  {tag}
                </FilterTag>
              </Flipped>
            ))}
        </FilterSection>
        <Bullets>
          {works.works.map((work, index) => (
            work.tags.some((tag) => filters[tag]) && (
              <BulletPoint key={index}>
                <div>
                  {work.tags.map((tag, tagIndex) => (
                    <Tag color={tagColors[tag]} active={filters[tag]} key={tagIndex}>{tag}</Tag>
                  ))}
                </div>
                {work.text}
              </BulletPoint>
            )
          ))}
        </Bullets>
      </ResumeGrid>
    </Container>
  );
};