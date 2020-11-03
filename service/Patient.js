import React from "react";
class Patient {
  patientData = [
    {
      name: "Ramesh",
      mobile: "989898989898",
      village: "Hyderabad"
    },
    {
      name: "Pavan",
      mobile: "9797979797",
      village: "Bhimavaram"
    },
    {
      name: "Pavan",
      mobile: "9797979797",
      village: "Bhimavaram"
    },
    {
      name: "Gupta",
      mobile: "9393939393",
      village: "Bhimavaram"
    },
    {
      name: "Prasad",
      mobile: "9292929292",
      village: "Kaikaluru"
    },
    {
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
