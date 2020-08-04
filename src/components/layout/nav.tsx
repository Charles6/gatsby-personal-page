import React from "react";
import styled from "@emotion/styled";

interface NavProps {
    page: string;
    setPage: (pageId:string) => void;
}

const NavBar = styled.nav`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    margin-left: 0.5rem;
`
const NavButton = styled.button`
    cursor:pointer;
    border:none;
    font-size: 30px;
    text-align: center;
    align-self: end;
    padding: 10px;
    transition: 0.3s;
    outline: none;
    :hover {
        padding-bottom: 20px;
    }
`

const NavComponent = ({page, setPage}: NavProps) => {

    return (
        <NavBar>
            <NavButton
                style={{
                    color: (page==="home")? "white" : "black",
                    gridColumn: "1",
                    backgroundColor:"#51988b"
                }}
                onClick={()=>{setPage("home")}}
            >
                Home
            </NavButton>
            <NavButton
                style={{
                    color: (page==="exp")? "white" : "black",
                    gridColumn: "2",
                    backgroundColor:"#317c6a"
                }}
                onClick={()=>{setPage("exp")}}
            >
                Experience
            </NavButton>
            <NavButton
                style={{
                    color: (page==="skill")? "white" : "black",
                    gridColumn: "3",
                    backgroundColor:"#145a4c"
                }}
                onClick={()=>{setPage("skill")}}
            >
                Skillset
            </NavButton>
        </NavBar>
    )
}

export default NavComponent