import React from 'react'
import styled from 'styled-components'
function InputOption({Icon, title, color}) {
    return (
        <InputOptionContainer>
        <Icon style={{ color: color }}/>
        <h4>{title}</h4>
        </InputOptionContainer>
    )
}

export default InputOption
const InputOptionContainer = styled.div`
display: flex;
align-items: center;
margin-top: 15px;
cursor: pointer;
 > h4 {
     margin-left: 5px;
 }
 :hover {
     background-color: whitesmoke;
     border-radius: 10px;
 }
`