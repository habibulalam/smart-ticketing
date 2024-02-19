// Select all seat buttons
const seatButtons = document.querySelectorAll('.btns');
let totalClick = 0;
// Add event listener to each button
seatButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Button bg change
    button.style.backgroundColor = 'lightgreen';
    // Disable button
    button.setAttribute('disabled', 'true');
    // seat left counts
    const seatLeft = document.getElementById('seats-left');
    const currentSeatText = seatLeft.innerText;
    const seatNum = parseInt(currentSeatText);
    const newSeatLeft = seatNum - 1;
    seatLeft.innerText = newSeatLeft;
    // total booked seat
    const allSeat = document.getElementById('book-seat');
    const allSeatText = allSeat.innerText;
    const allSeatNum = parseInt(allSeatText);
    const newSeat = allSeatNum + 1;
    allSeat.innerText = newSeat;
    // Ticket info append
    const seatNo = button.innerText;
    const seatContainer = document.getElementById('seat-no-container');
    const seatNoP = document.createElement('p');
    seatNoP.innerText=seatNo;
    seatContainer.appendChild(seatNoP)

    const seatType = document.getElementById('seat-type');
    const seatTypeP = document.createElement('p');
    seatTypeP.innerText='Economy';
    seatType.appendChild(seatTypeP)

    const seatPrice = document.getElementById('seat-price');
    const seatPriceP = document.createElement('p');
    seatPriceP.innerText='550';
    seatPrice.appendChild(seatPriceP)
    // Total Price
    const totalPrice = document.getElementById('total-price');
    const totalPriceText = totalPrice.innerText;
    const totalPriceNum = parseInt(totalPriceText);
    const sum = totalPriceNum + 550;
    totalPrice.innerText=sum
    // Grand Total
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText=sum
    // Maximum 4 button click
    totalClick = totalClick + 1;
    if (totalClick >= 4) {
        seatButtons.forEach(btn => {
          btn.setAttribute('disabled', 'true');
        });
    }


  });
});
