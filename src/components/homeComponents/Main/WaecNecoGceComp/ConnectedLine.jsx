import React from "react";

const ConnectedLine = () => {
  return (
    <div className="relative z-[-1] mx-auto h-full w-[75%] rounded-b-full rounded-t-full border border-dashed border-[#ACACAC] sm:w-[70%]">
      <div className="SliderResponsiveHeader absolute left-[50%] top-0 z-20 -translate-y-[50%] translate-x-[-50%] bg-white p-3">
        SSCE/GCE/NECO
      </div>
      <div className="SliderResponsiveHeader absolute left-0 top-[50%] z-20 translate-x-[-50%] bg-white p-3">
        Admission
      </div>
      <div className="SliderResponsiveHeader absolute right-0 top-[50%] z-20 translate-x-[50%] bg-white p-3">
        UTME
      </div>
      <div className="SliderResponsiveHeader absolute bottom-0 left-[50%] z-20 translate-x-[-50%] translate-y-[50%] bg-white p-3">
        Post UTME
      </div>
    </div>
  );
};

export default ConnectedLine;
