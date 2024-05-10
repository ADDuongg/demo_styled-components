import styled from 'styled-components';
import image1 from '../../images/Background.png'
const color = ['#FF64AE', '#091156', '#8B8B8B']
export const DivMainSlide = styled.section`
    height: 805px;
    width: 100%;
    background-image: url(${image1});
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TextTitle = styled.div`
    color: ${color[1]};
    font-weight: bold;
    font-size: 3rem;
    width: 430px;
    height: 128px;
`;
export const TextSubTitle = styled.div`
    color: ${color[0]};
    height: 54px;
    width: 474px;
    margin: 15px 0;
`;

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
export const ButtonSlide = styled.button`

display: flex;
justify-content: center;
align-items: center;
height: 10px;
width: 100%;

`







