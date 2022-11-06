import React from "react";
import {VerticalTimeline} from "react-vertical-timeline-component";
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
    return (
        <div className="experience"> 
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="2020 - 2024" 
                iconStyle={{ background: "#e9d35b", color: "black"}}
                icon={<SchoolIcon />}
                >
                
                <h3 className="vertical-timeline-element-title">
                    University of Michigan: Ann Arbor, MI

                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Major: Computer Science
                    <br></br>
                    Minors: French and Asian Studies
                </h4>
                
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="May 2022 - Aug 2022"
                iconStyle={{ background: "#e9d35b", color: "black" }}
                icon={<WorkIcon />}
                >
                <h3 className="vertical-timeline-element-title">
                    IT Intern: Trane Technologies
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Davidson, NC
                </h4>
                <p>- Migrated various reports across multiple teams from a legacy software to tableau, then published the reports to the
                    tableau server. Altered and created SQL statements that queried the database in order to facilitate this migration.
                    <br></br>
                    - Reports were originally created by querying a SQL database and printing the queries to a static webpage. I fixed this
                    outdated process by using a data visualization tool like tableau.
                    <br></br>
                    - Assisted in a SSO project to Microsoft Azure for the IT department</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jan 2022 - present"
                iconStyle={{ background: "#e9d35b", color: "black" }}
                icon={<WorkIcon />}
                >
                <h3 className="vertical-timeline-element-title">
                    Project Member
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Ann Arbor, MI
                </h4>
                <p>- Through the University of Michigan Transportation Research Institute, I worked alongside a team of other undergraduate students and professors to develop statistical models of bone structures to assess how individual bones are affected in car crashes
                    <br></br>
                    - Aimed to use these models to develop safer equipment in cars
                    <br></br>
                    - Segmented, landmarked, and mesh-morphed bone thoracic vertebrae in order to create training data set
                    <br></br>
                    - Used linear regression to predict how T-Spine bone structures look based on BMI, age, weight, and height</p>
                </VerticalTimelineElement>


            </VerticalTimeline>
        </div>
    
    );
}


export default Experience;