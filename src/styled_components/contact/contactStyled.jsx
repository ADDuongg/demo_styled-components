import styled from "styled-components";
import BgContact from '../../images/Background-Contact.png'
export const SectionContact = styled.section`
width: 100%;
    height: 1015px;
    gap: 0px;
    border-radius: 50px 0px 0px 0px;
    opacity: 1;
    margin-right: auto;
    position: relative;

`
export const BackgroundContact = styled.div`
position: absolute;
    left: 0;
    bottom: 10%;
    background-image: url(${BgContact});
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    gap: 0px;
    z-index: 1;

`
export const DivContentAbout = styled.div`
width: 497px;
    height: auto;
`
export const FormContact = styled.form`
margin-top: 3rem;
    height: auto;
`
export const InputContact = styled.input`
width: 242.21px;
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
    height: 61.58px;
    top: 3562px;
    left: 770px;
    gap: 0px;
    border-radius: 17px;
    border: 1px 0px 0px 0px;
    border: 1px solid #D9DDFE;
    padding-left: 20px;
    margin-bottom: 35px;`