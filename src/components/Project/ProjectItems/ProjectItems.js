import React from 'react'
import { Link } from "react-router-dom";
import projects from "../../../assets/data/project";
import "./index.scss"
const ProjectItems = ({ title, desc, code, link, image, tech }) => {
    return (
        <div className="items_container">
            <img src={image} alt={title} />
            <div className="project_info">
                <Link className="project_title" to="#">{title}</Link>
                <p className="project_desc">
                    {desc}
                </p>
                <div className="project_links">
                    <a href={code} target="_blank" rel="noreferrer">Code</a>
                    <a href={link} target="_blank" rel="noreferrer" className='visit-link'>Visit Project</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectItems
