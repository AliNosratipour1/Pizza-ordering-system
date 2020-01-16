import React from 'react';
import styled from 'styled-components';


const QuantityInputstyled = styled.input`
font-size:18px;

`;
export function QuantityInput({quantity}){
return (
<div>
<div>Quantity:</div>
<QuantityInputstyled {...quantity}/>
</div>
);
}