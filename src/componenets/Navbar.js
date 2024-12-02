import React from 'react';
import { Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
export default function Navbar()
{ const navigate =useNavigate()
  debugger
  const sums = useSelector((state) => state.cartSum)
  const dispatch = useDispatch()
  console.log("bbb",sums.sum)
    return(
        <>
         <div id="navigate" class="btn-group btn-group-lg" role="group" aria-label="...">
    <button type="button" class="btn btn-danger" onClick={() => navigate("/")}>Home</button>
    <button type="button" class="btn btn-danger"onClick={() => navigate("/ProductPresentation")}>Products</button>
    <button type="button" class="btn btn-danger" onClick={() => navigate("/About")}>About</button>
    <button type="button" class="btn btn-danger" onClick={() => navigate("/Cart")}><IconButton id="cartButton" aria-label="cart" onClick={() => navigate("/Cart")}>
     
      <StyledBadge id="car" badgeContent={sums.sum} color="white">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton></button>
    
</div>
        </>
    )
   
}