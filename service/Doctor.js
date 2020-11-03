import React from "react";
class Doctor {
  doctortData = [
    {
      pid: 1,
      name: "Ramesh",
      mobile: "989898989898",
      village: "Hyderabad"
    }
  ];
  constructor() {
    console.log("doctort cons");
    if (localStorage.getItem("doctortData") == null) {
      localStorage.setItem("doctortData", JSON.stringify(this.doctortData));
    } else {
      this.doctortData = eval(localStorage.getItem("doctortData"));
    }
  }
  SearchData = function(data) {
    return this.doctortData;
  };
  addDoctor(data) {
    this.doctortData = [...this.doctortData, data];
    localStorage.setItem("doctortData", JSON.stringify(this.doctortData));
  }
}

export default Doctor;
