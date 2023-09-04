console.log("hello world")

let mv_sum = 0;
let card_count = 0;

function storeManaValues() {
    const numInputs = 16; // Number of input fields


    for (let i = 1; i <= numInputs; i++) {
      const inputID = `mv${i}`;
      const inputValue = parseInt(document.querySelector(`[id="${inputID}"]`).value);
      
      // Check if the inputValue is a valid number (not NaN)
      if (!isNaN(inputValue)) {
        card_count = card_count + inputValue;
        mv_sum = mv_sum + (inputValue * i);

        console.log("mv" + i + " card count:" + card_count)
        console.log(card_count * i)
        console.log(mv_sum)
      }
    }
}

function calcAvg() {
    storeManaValues()

    avgMV = mv_sum / card_count;
    console.log(avgMV)
    document.getElementById('avgManaValue').value = avgMV

    mv_sum = 0;
    card_count = 0;
}

