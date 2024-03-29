import React, { useEffect } from "react";
import styled, { useTheme } from "styled-components";

import { useButtonClickedContext } from "./context/buttonClicked";
import { TypingEffect } from "../../effects/typing-effect";
import Text from "../../branding/text-block";

import { LIPSUM } from "../../../constants";

interface Props {
  children: React.ReactNode;
}

interface ContainerProps {
  theme: any;
}

const ContentContainer = styled.div<ContainerProps>`
  flex: 1;
  padding: 2rem;
  color: ${(props: ContainerProps) => props.theme.colors.textPrimary};
`;

const Content: React.FC<Props> = ({ children }) => {
  const { isClicked, setIsClicked } = useButtonClickedContext();
  const theme = useTheme();

  return (
    <ContentContainer theme={theme}>
      {!isClicked && <Text>Click it.</Text>}
      <TypingEffect text={LIPSUM} isClicked={isClicked} speed={10} />
    </ContentContainer>
  );
};

export default Content;