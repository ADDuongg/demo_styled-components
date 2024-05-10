import styled from 'styled-components';
const color = ['#FF64AE', '#091156', '#8B8B8B']
export const Button = styled.button`
    background-color: ${color[0]};
    color: white;
    border-radius: 5rem;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
        &:hover{
            border: 1px solid ${color[0]};
            background-color: white;
            color: ${color[0]};
        }
`







