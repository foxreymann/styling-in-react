import React from 'react'
import styled, { css } from 'styled-components'

// styled component can be any HTML element
// eg. span, div, button, input...

const ButtonWrapper = styled.button`
  // styled for your button

  border: 3px solid black;
  border-radius: 5px;
  color: black;
  font-size: 14px;
  margin: 1em;
  padding: 1em;
  
  // you can either change the value of your attribute based on the presence of your prop (if it's value is true)
  
  background: ${props => props.primary ? 'pink' : 'transparent'};
  
  // or you can render a whole block of additional styles 
  
  ${props => props.secondary && css`
    background: darkgreen;
    border: 0;
    color: white;
  `}
    
`

// you can pass any props you like to your Button component and base your styling on those props

const ExampleButton = ({ children, primary, secondary }) => (
    <ButtonWrapper primary={primary} secondary={secondary} >
        {children}
    </ButtonWrapper>
)

export default ExampleButton
