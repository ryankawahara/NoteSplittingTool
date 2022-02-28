function splitRow() {
  var ss = SpreadsheetApp.getActive();
  var alternateSheet= SpreadsheetApp.getActiveSheet();
  var sh = ss.getActiveSheet();
  var rangeData=sh.getDataRange();
  var cell = sh.getActiveCell().getValue();
  var lastRow=rangeData.getLastRow();
  cell=cell.split(", ");

  for (var rowIterate=2; rowIterate<=lastRow;rowIterate=rowIterate+1){
    var rowSelected= SpreadsheetApp.getActiveSheet().getRange(rowIterate,2,1,1).getValue()
    var shotName= SpreadsheetApp.getActiveSheet().getRange(rowIterate,1,1,1).getValue()

    console.log("row:"+rowIterate)


    SpreadsheetApp.getActiveSheet().getRange(rowIterate,3,1,1).setValue("Comp");
    SpreadsheetApp.getActiveSheet().getRange(rowIterate,4,1,1).setValue("Read");

    if(rowSelected.includes(",")){
      rowSelected=rowSelected.split(", ")
  
    for (var counter=rowIterate; counter<(rowIterate+rowSelected.length-1); counter=counter+1){
      console.log("iterate:"+rowIterate)
      sh.insertRowAfter(rowIterate);
    }
 
  
    for (var newCounter=rowIterate; newCounter<(rowIterate+rowSelected.length); newCounter=newCounter+1){
     console.log(newCounter)
     SpreadsheetApp.getActiveSheet().getRange(newCounter,1,1,1).setValue(shotName);
     SpreadsheetApp.getActiveSheet().getRange(newCounter,2,1,1).setValue(rowSelected[newCounter-rowIterate]);
     SpreadsheetApp.getActiveSheet().getRange(newCounter,3,1,1).setValue("Comp");
     SpreadsheetApp.getActiveSheet().getRange(newCounter,4,1,1).setValue("Read");
    }

    rowIterate=rowIterate+rowSelected.length-1
    }

    rangeData=sh.getDataRange();
    lastRow=rangeData.getLastRow();
    console.log("last row2 | "+lastRow)

  }

}

