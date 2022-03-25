import { GrLinkNext } from "react-icons/gr";
import Link from "../Link";
import React from "react";
import { WrapperButton } from "./BackSide";

const DetailsLink = ({ flight, dropdown }) => {
  return (
    <div>
      <Link to={`/flightdetails/${flight?.id}`}>
        <WrapperButton aria-label={"Check Details"}>
          {!dropdown && <GrLinkNext />}
          <p>CHECK DETAILS</p>
        </WrapperButton>
      </Link>
    </div>
  );
};

export default DetailsLink;
