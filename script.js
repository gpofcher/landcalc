console.log("hello world")

// function storeManaValues() {
//     const numInputs = 16; // Number of input fields


//     for (let i = 1; i <= numInputs; i++) {
//       const inputID = `mv${i}`;
//       const inputValue = parseInt(document.querySelector(`[id="${inputID}"]`).value);
      
//       // Check if the inputValue is a valid number (not NaN)
//       if (!isNaN(inputValue)) {
//         card_count = card_count + inputValue;
//         mv_sum = mv_sum + (inputValue * i);

//         console.log("mv" + i + " card count:" + card_count)
//         console.log(card_count * i)
//         console.log(mv_sum)
//       }
//     }
// }

function calcAvg() {
    const numInputs = 16; // Number of input fields
    let mv_sum = 0;
    let card_count = 0;

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

    avgMV = mv_sum / card_count;
    console.log(avgMV)
    document.getElementById('avgManaValue').value = avgMV

    mv_sum = 0;
    card_count = 0;
}

function calcLands() {
    decksize = document.getElementById('decksize').value
    cheapDraw = document.getElementById('cheapDraw').value
    avgMV = document.getElementById('avgManaValue').value

    landcount = (decksize / 60) * (19.59 + 1.90 * avgMV) - 0.28 * cheapDraw
    console.log(landcount)
    document.getElementById("landcount").innerText = landcount
}