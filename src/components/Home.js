import React from 'react';
import styled from "styled-components";
import Section from './Section';

function Home() {
    return (
        <Container>
       <Section 
       title="Model S"
       description="Order Online For Touchless Delivery"
       backgroundImg="model-s.jpg"
       leftBtnText= "cutome order"
       rightBtnText="Existing inventory"

       />
    
       <Section 
        title="Model Y"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText= "cutome order"
        rightBtnText="Existing inventory"
       />
       <Section 
        title="Model 3"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText= "cutome order"
        rightBtnText="Existing inventory"
       />
       <Section 
        title="Model X"
        description="Order Online For Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText= "cutome order"
        rightBtnText="Existing inventory"
       />
        <Section 
        title="Lowest Cost Solar Panel in America"
        description="money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText= "order now"
        rightBtnText="learn now"
       />
       <Section 
        title="Solar for new Roofs"
        description="Solar Roof Cost Less Then a new Roof plus solar panel"
        backgroundImg="solar-roof.jpg"
        leftBtnText= "order now"
        rightBtnText="learn now"
       />
       <Section 
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText= "shop now"
        
       />
       

       
        </Container>
            
        
    )
}

export default Home;

const Container = styled.div`
  height:100vh;
  `
