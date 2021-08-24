import React from "react";
import Cardss from "./components/cardss";
import Imgg from "../../images/banner.jpg"
export default function card2() {
  return (
    <div>
      <div className="row">
        <div className="col-12 custom-card2-mar">
          <div className="d-flex justify-content-evenly custom-md">
            {[
              {
                link: "https://picsum.photos/200/300" ,
                title: "card 1",
                des: "yoookyoook",
                
              },
              {
                link: "https://picsum.photos/200/300",
                title: "card 2",
                des: "yooookkkkk",
                
              },
              {
                link: "https://picsum.photos/200/300",
                title: "cads 3",
                des: "yooooo",
               
              },
            ].map(data=><Cardss
                link={data.link} title={data.title} des={"data.des"} value={data.link}
                 /> )
            
            }

            
          </div>
        </div>
      </div>
    </div>
  );
}
