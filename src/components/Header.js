import React,{useState} from 'react';
import styled from "styled-components";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import{selectCars} from "../Features/car/CarSlivce"
import {useSelector} from "react-redux"
const Header = () => {
    const [burgerStatus,setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    console.log(cars);
    return (
        <Container>
        <a>
            <img src="/Images/logo.svg" alt="" />
        </a>
        <Menu>
            {
                cars && cars.map((car,index)=>(
                    <a href="">{car}</a>
                ))
            }
        
       
        </Menu>

        <RightMenu>
            <a href="#">Shop</a>
            <a href="">Tesla Account</a>
            <CustomMenu onClick={()=>setBurgerStatus(true)} />
            
    
           
        </RightMenu>

        <BurgerNav show={burgerStatus}>
            <CloseWrapper >
            <CustomClose onClick={()=>setBurgerStatus(false)} />
            </CloseWrapper>
    
            <li><a href="#">Existing inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">Model S</a></li>
            <li><a href="#">Model X</a></li>
            <li><a href="#">Model 3</a></li>
            <li><a href="#">Model Y</a></li>
            <li><a href="#">Solar Panel</a></li>
            <li><a href="#">Roof</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">CyberTruck</a></li>
            <li><a href="#">Roadester</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">TestDrive</a></li>
            <li><a href="#">comercial Energy</a></li>
        </BurgerNav>
        </Container>
    )
}

export default Header;

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0px 20px;
top:0;
left:0;
right:0;
z-index:1;
`
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
margin-left:70px;

a{
    font-weight:700;
    text-transform:uppercase;
    font-size:20px;
    padding:0px 10px;
    flex-wrap:no-wrap;
}
@media(max-width:768px){
    display:none;
}

`

const RightMenu = styled.div`
display:flex;
align-items:center;
cursor:pointer;
a{
    font-weight:700;
    text-transform:uppercase;
    font-size:20px;
    margin-right:10px;
    flex-wrap:no-wrap;
}
 `

 const CustomMenu = styled(MenuIcon)`
 `
 const BurgerNav = styled.div`
 position:fixed;
 top:0;
 right:0;
 bottom:0;
 z-index:100;
 background:white;
 width:300px;
 list-style:none;
 padding:20px;
 text-align:start;
 display:flex;
 flex-direction:column;
 transform:${props=>props.show ? 'translateX(0)':'translateX(100%)'};
 transition:transform 0.2s ease-in;
  li{
      padding:15px 0;
      border-bottom:1px solid rgba(0,0,0,0.2);
     

  }
  a{
    font-weight:600;
  }
 
 `
 const CustomClose = styled(CloseIcon)`
    cursor:pointer;

 `


 const CloseWrapper = styled.div`
 display:flex;
 justify-content:flex-end;
 `