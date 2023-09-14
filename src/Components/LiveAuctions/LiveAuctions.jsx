import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const LiveAuctions = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    fetch("Auctions.json")
      .then((res) => res.json())
      .then((data) => setAuctions(data));
  }, []);
  console.log(auctions);

  return (
    <div className="text-white mt-10">
      <h1 className="text-3xl font-bold leading-9 mb-5">Live Auctions</h1>
      <hr />
    </div>
  );
};

LiveAuctions.propTypes = {};

export default LiveAuctions;
