import styled from "styled-components";


export const DivCardTeam = styled.div`

width: 100%;
margin: 30px auto;
display: flex;
justify-content: space-between;

`

export const CardTeam = styled.div`
width: 424px;
    height: 626px;
    top: 1210px;
    left: 150px;
    gap: 0px;
    border-radius: 10%;
    opacity: 0px;
    text-align: center;
    box-shadow: ${({ index }) => (index % 2 !== 0 ? '0px 25px 50px 25px #F6F7FF' : 'none')};
`
export const ImgTeam = styled.img`
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

