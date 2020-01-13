
import styled from 'styled-components';
import {Title} from '../Styles/title';


export const FoodGrid = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
`

export const FoodLabel = styled(Title)`
position:absolute;
background-color:rgba(255,255,255,.8);
padding:5px;

`



export const Food = styled.div`
padding:10px;
height:100px;
font-size:20px;
background-position:center;
background-size:cover;
filter:contrast(100%);
margin-top:5px;
border-radius:7px;
background-image: ${({img}) => `url(${img});`};
border-shadow:0px 0px 10px 0px gray;
transition-property:box-shadow margin-top;
transition-duration:.1s;
&:hover{
  cursor:pointer;
 box-shadow:0px 0px 10px 0px gray;
 margin-top:0px;
 margin-bottom:5px;
}

`
