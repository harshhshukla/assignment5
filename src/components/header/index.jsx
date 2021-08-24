import React from 'react'

export default function header() {
    return (
        <div className="row header_container_dark ">
<div className="col-4 d-flex ">
<div className="icon">

<i class="fab fa-facebook-f"></i>
<i class="fab fa-linkedin-in"></i>
<i class="fa fa-twitter-square" aria-hidden="true"></i>

</div>

<div className="phone_head">
+91 8000000005
</div>
</div>
 <div className="col-4">
 <i class="fa fa-apple " aria-hidden="true"></i>
 </div>

<div className="col-4">
<div className="login_signup_container">

{/* dropdown here */}

<button>
<i class="far fa-user"></i>
        &nbsp;
        {/* space */}
    SIGNUP</button>
<button><i class="fas fa-lock"></i> &nbsp; LOGIN</button>

</div>

</div>


            
        </div>
    )
    
}
