import React from "react";
import { WrapperButton } from "./BackSide";
import Link from "../Link";
import { GrLinkNext } from "react-icons/gr";

const DetailsLink = ({ flight }) => {
  return (
    <div>
      <Link to={`/flightdetails/${flight.id}`}>
        <WrapperButton aria-label={"Check Details"}>
          <GrLinkNext />
          <p>CHECK DETAILS</p>
        </WrapperButton>
      </Link>
    </div>
  );
};

export default DetailsLink;
