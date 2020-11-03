import React from "react";
class Patient {
  patientData = [
    {
      pid:1,
      name: "Ramesh",
      mobile: "989898989898",
      village: "Hyderabad"
    },
    {
      pid:2,
      name: "Pavan",
      mobile: "9797979797",
      village: "Bhimavaram"
    },
    {
      pid:2,
      name: "Pavan",
      mobile: "9797979797",
      village: "Bhimavaram"
    },
    {
      pid:4,
      name: "Gupta",
      mobile: "9393939393",
      village: "Bhimavaram"
    },
    {
      pid:5,
      name: "Prasad",
      mobile: "9292929292",
      village: "Kaikaluru"
    },
    {
      pid:6,
      name: "Venkat",
      mobile: "9191919191",
      village: "USA"
    }
  ];
  constructor() {
    console.log("Patient");
  }
  SearchData = function(data) {
    return this.patientData;
  };
}

export default Patient;
