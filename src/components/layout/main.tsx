import React from "react";
import styled from "@emotion/styled";
import HomePage from "../home";
import ExperiencePage from "../experience";
import SkillsetPage from "../skillset"

const Main = ({page}:{page:string}) => {
    const pageRouter = (pageType) => {
        switch(pageType) {
            case "home":
                return (<HomePage/>)
            case "exp":
                return (<ExperiencePage/>)
            case "skill":
                return (<SkillsetPage/>)
        }
    }

    return (
        <div>
            {pageRouter(page)}
        </div>
    )
}
export default Main;