console.log("hello world")

function storeManaValues() {
    const numInputs = 16; // Number of input fields
    const manaValues = [];
  
    for (let i = 1; i <= numInputs; i++) {
      const inputName = `mv${i}`;
      const inputValue = parseInt(document.querySelector(`[id="${inputName}"]`).value);
      
      // Check if the inputValue is a valid number (not NaN)
      if (!isNaN(inputValue)) {
        manaValues.push(inputValue);
      }
    }
  
    // Now, manaValues contains the values from the input fields
    console.log(manaValues);
  
    // You can use the manaValues array for further processing as needed
}

function calcAvg() {
    storeManaValues()
}

