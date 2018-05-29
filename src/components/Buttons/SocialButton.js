import React from 'react'
import styled, { css } from 'styled-components'

// create styled-component called Button with styles of .btn-social and .btn-outline classes
// you can find those classes in the stylesheet in public/css/main.css

const Button = styled.a`
  display: inline-block;
  height: 50px;
  width: 50px;
  border: 2px solid white;
  border-radius: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 45px;
  color: white;
  font-size: 20px;
  border: solid 2px white;
  background: transparent;
  transition: all 0.3s ease-in-out;
  &:hover,
  &:focus,
  &:active {
    color: #774EBD;
    background: white;
    border: solid 2px white;
  }
`

export default ({ to, icon, target = "_blank" }) => (
  <Button
    target={target}
    href={to}
    className="btn-social btn-outline"
  >
    <i className={`fa fa-fw fa-${icon}`}></i>
  </Button>
)
