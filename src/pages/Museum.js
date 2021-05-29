import React from "react";
import { Helmet } from "react-helmet";
import { SRLWrapper } from "simple-react-lightbox";

function Museum({data}) {
  console.log(data)
  return (
    <div>
      <Helmet>
        <title>Gallery | Tsuyu Photo Gallery</title>
        <meta name="description" content="Tsuyu photo gallery" />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Helmet>
      <div>
        <SRLWrapper>
          {data && 
            <div className="w-full flex justify-start flex-wrap">
              {data.map((d) => (
                <a href={d.image} className="w-full sm:w-1/2 lg:w-1/3 p-3">
                  <img src={d.thumbnail} alt={d.alt} />
                </a>
              ))}
            </div>
          }
        </SRLWrapper>
      </div>
    </div>
  );
}

export default Museum;

