function promptMe() {
    let num = prompt("Please provide 3 numbers in a list seperated by commas");
    
    var array= num.split(",");

    console.log(array);
    
    let dec = prompt("Do you want these numbers in ascending or descending order, Enter 'A' for ascending or 'B for descending");

    if (dec === 'A' || dec === 'a') {
        out = array.sort(function(a, b){return a-b});
      } else if (dec === 'B' || dec === 'b') {
        out = array.sort(function(a, b){return b-a});
      } else {
        out = "error";
      }
    
    alert(out)
  }