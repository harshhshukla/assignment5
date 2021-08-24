import React from "react";


import { ReactComponent as Logo2 } from "../../images/logoo.svg";

export default function Header1() {
	return (
		<div>
			<div className="row custom-headdd">
				<div className="col-12 text-center">
					<Logo2 className="custom-logo-misc img-thumbnail" />
				</div>

				<div className="col-12">
					<h1 className="custom-misc-h1-1 text-secondary text-center">
						<span>52165215</span> numbers of supporters worldwide
					</h1>
				</div>

				
				<span className="line2"></span>
			</div>

			
		</div>
	);
}