import React from 'react';
import { Badge } from '@mui/material';
// import Badge from '@mui/material/Badge';
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
    {/* <button type="button" class="btn btn-danger" onClick={() => navigate("/Cart")}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></button> */}
    <button type="button" class="btn btn-danger" onClick={() => navigate("/Cart")}><IconButton id="cartButton" aria-label="cart" onClick={() => navigate("/Cart")}>
     
      <StyledBadge id="car" badgeContent={sums.sum} color="white">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton></button>
    
</div>
        </>
    )
   
}