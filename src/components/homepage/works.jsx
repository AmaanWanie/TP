import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./IIT.png"
								alt="IIT"
								className="work-image"
							/>
							<div className="work-title">IIT hydrabad</div>
							<div className="work-subtitle">
								Project Intern
							</div>
							<div className="work-duration">Dec 2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./IQasar.jpg"
								alt="IQ"
								className="work-image"
							/>
							<div className="work-title">IQuasar LLC.</div>
							<div className="work-subtitle">
								Project Intern
							</div>
							<div className="work-duration">Jan - April 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
