import React from "react";
class TransData {
  tranData = [
    {
      transId: 1,
      transDate: "2020-11-4",
      pid: "1",
      name: "Demo",
      did: "1",
      docname: "Demo",
      symptom: "Fever",
      diagnos: "good",
      prescription: "dosage",
      fee: 0,
      medicine: 0,
      total: 0,
      despatch: "N",
      paid: "N"
    }
  ];
  constructor() {
    console.log("TransData cons");
    if (localStorage.getItem("tranData") == null) {
      localStorage.setItem("tranData", JSON.stringify(this.tranData));
    } else {
      this.doctortData = eval(localStorage.getItem("tranData"));
    }
    console.log(JSON.stringify(this.tranData));
  }
  SearchData = function(data) {
    return this.data;
  };
  addTrans(data) {
    this.tranData = [...this.tranData, data];
    localStorage.setItem("tranData", JSON.stringify(this.data));
  }
}

export default TransData;
