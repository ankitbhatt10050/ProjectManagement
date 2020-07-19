import React from 'react';
// eslint-disable-next-line
import projectReducer from '../store/reducers/projectReducer';
const ProjectSummary=({project})=>{
    return(
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by net ninja</p>
                    <p className="grey-text">17 july 2020, 2:30pm</p>
                </div>
            </div>
    );
}

export default ProjectSummary;