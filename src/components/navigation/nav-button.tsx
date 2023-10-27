import styled from "styled-components";
import React, { useEffect, useRef } from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

type NavButtonProps = {
    opened: boolean;
}

const Icon = styled.div`
    position: absolute;
    left: 25%;
    top: 50%;
    width: 20px;
    height: 2px;
    background-color: ${(props: any) => props.theme.colors.textPrimary};
    transition: all 400ms cubic-bezier(.84,.06,.52,1.8);
`
const Icon1 = styled(Icon)`
  transform: translateY(-8px);
  animation-delay: 100ms;
  &.activated {
    transform: rotate(40deg);
  }
`

const Icon2 = styled(Icon)`
    &.activated {
        opacity: 0;
    }
`

const Icon3 = styled(Icon)`
  transform: translateY(8px);
  animation-delay: 250ms;
  &.activated {
      transform: rotate(-40deg);
  }
`

const Hamburger = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
`

const Clear = styled.div`
  clear: both;
`

export default function NavButton({ opened }: NavButtonProps) {
    const [activated, setActivated] = React.useState(false);

    useEffect(() => {
        if (opened) {
            setActivated(true);
        } else {
            setTimeout(() => {
                setActivated(false);
            }, 100);
        }
    }, [opened]);

    return (
        <Hamburger>
            <Icon1 className={activated ? "activated" : ""}/>
            <Icon2 className={activated ? "activated" : ""}/>
            <Icon3 className={activated ? "activated" : ""}/>
            <Clear />
        </Hamburger>
    );
}