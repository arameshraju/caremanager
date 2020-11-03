import React from "react";
class Patient {
  patientData = [
    {
      pid: 1,
      name: "Ramesh",
      mobile: "989898989898",
      village: "Hyderabad"
    },
    {
      pid: 2,
      name: "Pavan",
      mobile: "9797979797",
      village: "Bhimavaram"
    },
    {
      pid: 3,
      name: "Gupta",
      mobile: "9393939393",
      village: "Bhimavaram"
    },
    {
      pid: 4,
      name: "Prasad",
      mobile: "9292929292",
      village: "Kaikaluru"
    },
    {
      pid: 5,
      name: "Venkat",
      mobile: "9191919191",
      village: "USA"
    }
  ];
  constructor() {
    console.log("Patient cons");
    if (localStorage.getItem("patientData") == null) {
      localStorage.setItem("patientData", JSON.stringify(this.patientData));
    } else {
      this.patientData = eval(localStorage.getItem("patientData"));
    }
  }
  SearchData = function(data) {
    return this.patientData;
  };
  addPatient(data) {
    this.patientData = [...this.patientData, data];
    localStorage.setItem("patientData", JSON.stringify(this.patientData));
  }
}

export default Patient;
