import React, { useContext} from "react";

import { ButtonGroup, Button, styled } from "@mui/material";
import CartContext from "../../context/cart-context";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

const GroupedButton = ({item,id}) => {
    console.log(item);
    const cartCtx=useContext(CartContext);

    const handleIncrement = () => {
        cartCtx.addItem(item);
    };

    const handleDecrement = () => {
         cartCtx.removeItem(id);
    };

    return (
        <Component>
            <StyledButton onClick={() => handleDecrement()} disabled={item.quantity === 0}>-</StyledButton>
            <Button disabled>{item.quantity}</Button>
            <StyledButton onClick={() => handleIncrement()}>+</StyledButton>
        </Component>
    );
}

export default GroupedButton;