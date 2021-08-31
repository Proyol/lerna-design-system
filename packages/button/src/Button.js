import styled from 'styled-components';
import { colors } from 'danielg.favero-design-tokens'

export const Button = styled.button`
    background-color: ${colors.green};
    color: #000;

    border: none;
    border-radius: 8px;

    padding: 16px 32px;
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

    cursor: pointer;

    transition: 0.2s ease-in-out;

    &:hover{
        background: #0fff00;
    }
`