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

const OrderContainer = styled.div`
padding:10px 0px;
border-bottom:1px solid gray;
`;


const OrderItem = styled.div`
padding:10px 0px;


`;

export function Order({orders}){
    return(
       
    <OrderStyled>
            {orders.length === 0 ? (
                <OrderContent> Your basket is empty</OrderContent> 
                
            ) : (
            <OrderContent>
            {""}
            <OrderContainer>Your Order:</OrderContainer>{""}
              {orders.map(order => (
                  <OrderContainer>
                     <OrderItem>
                         {order.name}
                     </OrderItem>
                  </OrderContainer>
              ))}
            </OrderContent>
            )}
            
            <DialogFooter>
                <ConfirmButton>CheckOut</ConfirmButton>
            </DialogFooter>
        
    </OrderStyled>
        
    )
}