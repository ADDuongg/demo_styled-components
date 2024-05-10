import styled from 'styled-components';
const color = ['#FF64AE', '#091156', '#8B8B8B']
export const SectionService = styled.div`
width: 100%;
height: 732px;
margin-top: 4rem;
margin-left: auto;
margin-right: auto;
`

export const DivTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Title = styled.div`
color: ${color[0]};
font-weight: bold;
font-size: 20px;
`

export const SubTitle = styled.div`
color: ${color[1]};
height: 97px;
width: 432px;
font-weight: bold;
font-size: 34px;
text-align: center;
margin-top: 10px;
`
export const Content = styled.div`
width: 900px;
height: 51px;
color: ${color[2]};
font-weight: 400;
font-size: 20px;
text-align: center;
margin: 30px 0;
`

export const DivCardService = styled.div`
    padding: 0 5rem;
    width: 100%;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;

`

export const CardService = styled.div`
box-shadow: 0px 25px 50px 25px #F6F7FF;
    width: 343px;
    height: 458px;
    top: 1210px;
    left: 150px;
    gap: 0px;
    border-radius: 10%;
    opacity: 0px;
    text-align: center;
    ${({ key }) =>
        key &&`
        box-shadow: 0px 25px 50px 25px #F6F7FF;
    `}
    
    `

export const ImgService = styled.img`
width: 166px;
height: 166px;
top: 1269px;
left: 239px;
gap: 0px;
opacity: 0px;
margin-top: 5rem;
border-radius: 50%;
margin-bottom: 2rem;
margin-left: auto;
margin-right: auto
`
export const CardTitle = styled.div`
color: ${color[0]};
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 22.5px;
    text-align: center;

`
export const CardBody = styled.div`
color: ${1};
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.1em;
    text-align: center;
    width: 76%;
    margin: 15px auto;

`







