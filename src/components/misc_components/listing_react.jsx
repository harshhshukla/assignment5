import React from "react";

export default function Listing_react() {

 var array1 = [
    { name: "Education", val: 80 },
    { name: "Research", val: 65 },
    { name: "Fund Rasing", val: 90},
    { name: "Culture", val: 48 },
	{ name: "kids", val: 55},
]



	return (
		<div>
			<div className="row custom-misc-2-con-chart ">
				<div className="col-5  ">
					<h1>Where the money goes</h1>
					<h3>current oprations and program</h3>
                    <ul style={{color:"#02b24f" }}>
                        <li>Education</li>
                        <li>Trauma Care </li>
                        <li>Fundrasing</li>
                        <li>Research</li>
                        <li>culture</li>
                    </ul>
                   

					<button
						className="btn btn-primary"
						style={{ backgroundColor: " #33586B", borderRadius: "30px" }}>
				
						DONATE NOW
					</button>
				</div>
				<div className="col-7">
					<div className="heignt-creator">
						{/* array of objects */}

						{array1.map((data) => {
							return (
								<div className="con-chart">
									<div className="bar-chart" style={{ height: `${data.val}%` , color:"white"}}>
										<div>{data.val}%</div>
										<p>{data.name}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}