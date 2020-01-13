import React from 'react';
import styled from 'styled-components';
import {DialogContent,DialogFooter,ConfirmButton} from '../FoodDialog/FoodDialog';


const OrderStyled = styled.div`
 position:fixed;
 right:0px;
 top:48px;
 width:340px;
 height:calc(100% - 48px);
 background-color:white;
 box-shadow:4px 0px 5px 5px gray;
 z-index:10;
 display:flex;
 flex-direction:column;

`;

//Show order in our basket
const OrderContent = styled(DialogContent)`
padding:20px;
height:100%;


`;

// footer of our basket
const OrderFooter = styled.div`

`;



export function Order(){
    return(
        <div>
            <OrderStyled>
              
                  <OrderContent>
                      Your basket is empty
                  </OrderContent>
                  <DialogFooter>
                      <ConfirmButton>CheckOut</ConfirmButton>
                  </DialogFooter>
              
            </OrderStyled>
        </div>
    )
}