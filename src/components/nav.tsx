import React from "react";
import styled from "@emotion/styled";

const NavBar = styled.nav`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
`
const HomeItem = styled.button`
    color:white;
    border:none;
    grid-column: 1;
    font-size: 30px;
    background-color:#51988b;
    text-align: center;
    align-self: end;
    padding: 10px;
    transition: 0.3s;
    :hover {
        padding-bottom: 20px;
    }
`
const ExpItem = styled.button`
    color:white;
    border:none;
    grid-column: 2;
    font-size: 30px;
    background-color:#317c6a;
    text-align: center;
    align-self: end;
    padding: 10px;
    transition: 0.3s;
    :hover {
        padding-bottom: 20px;
    }
`
const SkillItem = styled.button`
    color:white;
    border:none;
    grid-column: 3;
    font-size: 30px;
    background-color:#145a4c;
    text-align: center;
    align-self: end;
    padding: 10px;
    transition: 0.3s;
    :hover {
        padding-bottom: 20px;
    }
`

const NavComponent = () => {
    return (
        <NavBar>
        <HomeItem>
            Home
        </HomeItem>
        <ExpItem>
            Experience
        </ExpItem>
        <SkillItem>
            Skillset
        </SkillItem>
    </NavBar>
    )
}

export default NavComponent