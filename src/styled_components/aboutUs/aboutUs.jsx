import styled from 'styled-components';
import backgoundUs from '../../images/Background-AboutUs.png'
const color = ['#FF64AE', '#091156', '#8B8B8B']
export const SectionAboutUs = styled.section`
width: 100%;
height: 700px;
gap: 0px;
border-radius: 50px 0px 0px 0px;
opacity: 1;
margin-left: auto;
position: relative;
`
export const BackGroundAbout = styled.div`
position: absolute;
    right: 0;
    bottom: 10%;
    background-image: url(${backgoundUs});
    background-repeat: no-repeat;
    width: 948.15px;
    height: 100%;
    gap: 0px;
    z-index: 1;
`
export const DivContentAbout = styled.div`
display: flex;
    width: 100%;
    z-index: 10;
    position: absolute;
    padding-top: 10rem;
    padding-left: 5rem;
    align-items: start;
`
/* export const SectionAboutUs = styled.section`
width: 100%;
height: 700px;
gap: 0px;
border-radius: 50px 0px 0px 0px;
opacity: 1;
margin-left: auto;
position: relative;
`

 */






