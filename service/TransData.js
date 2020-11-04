import React from "react";
class TransData {
  tranData = [
    {
      transId: 1,
      name: "Demo",
      qualification: "Demo",
      mobile: "108",
      reg: "108-911",
      email: "demo@doc.com",
      address: "108,india"
    }
  ];
  constructor() {
    console.log("doctort cons");
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
