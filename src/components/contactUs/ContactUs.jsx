import React from "react";
import Img from "../../images/contactpic.png"
export default function ContactUs() {
  return (
    <div>
     <div className="row custom-misc-2-con-chart" style={{position:"relative"}}>
				<div className="col-6">
					<h1>
						GET IN TOUCH
						<br />
						<strong>CONTACT US!</strong>
					</h1>

					<div style={{ margin: "15px auto 15px 0" }} className="line2"></div>

					<form action="">
						<div className="row p-2">
							<div className="col-6">
								<input
									type="text"
									placeholder="Full name"
									defaultValue="fullname"
								/>
							</div>
							<div className="col-6">
								
                               
                                <input type="email" placeholder="Email"  />
                               
						
                                
                                
                                	</div>

								</div>
                                <div className="row p-2">
                                <div className="col-6">
								<input type="text" placeholder="Address" />
							</div>
							<div className="col-6">
								<input type="tel" name="" id="" placeholder="Phone" />
							</div>
					
                                </div>

						<div className="row p-2">
							<div className="col-12">
								<textarea
									name=""
									id=""
									style={{ width: "100%" }}
									placeholder="details"
								>
								
								</textarea>
							</div>
							<div className="col-12">
								<button className="btn pill btn-success "  type="submit">SEND NOW</button>
							</div>
                            </div>


</form>
</div>

<img src={Img} alt="" className="transaprent-kid" />
</div>
</div>
       
  )
}
