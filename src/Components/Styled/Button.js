import styled from "styled-components";
import { H1 } from "./H1";

export const StyledButton = styled.button`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
border: 2px solid white;
cursor: pointer;
background-color: ${(props) => props.variant === 'primary' ? '#ffffff' : 'transparent'};
color: ${(props) => props.variant === 'primary' ? '#000000' : '#ffffff'};


`

export const StyledButtonHover = styled(StyledButton)`

&:hover{
    background-color: #fff;
    color: black;
}
`

export const H1Hover = styled(H1)`

&:hover{
    background-color: #fff;
    color: black;
}
`