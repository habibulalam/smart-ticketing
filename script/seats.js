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



// Coupon

    const couponInputField = document.getElementById('coupon-input');
    couponInputField.addEventListener('keyup', function(event){
        const inputText = event.target.value;
        if(inputText === 'NEW15' || inputText === 'Couple 20'){
            const dlt = document.getElementById('coupon-btn')
            dlt.removeAttribute('disabled')
        }
        else{
            const dlt = document.getElementById('coupon-btn')
            dlt.setAttribute('disabled', true);
        }
        const couponBtn = document.getElementById('coupon-btn')
        couponBtn.addEventListener('click', function(){
            if(inputText === 'NEW15'){
                const discount = document.getElementById('grand-total');
                const discountText = discount.innerText;
                const discountNum = parseFloat(discountText);
                const theDiscount = (15/100 )* discountNum;
                const grandPrice = discountNum - theDiscount
                discount.innerText=grandPrice;
                discount.style.color='darkgreen'
                discount.style.fontSize='30px'
                const label = document.getElementById('input-label')
                        label.style.display='none'
            }
            else if(inputText === 'Couple 20'){
                const discount = document.getElementById('grand-total');
                const discountText = discount.innerText;
                const discountNum = parseFloat(discountText);
                const theDiscount = (20/100) * discountNum;
                const grandPrice = discountNum - theDiscount
                discount.innerText=grandPrice;
                discount.style.color='darkgreen'
                discount.style.fontSize='30px'  
                const label = document.getElementById('input-label')
                    label.style.display='none'
            }
            else{
                const oldTotal = document.getElementById('total-price');
                const newTotal = document.getElementById('grand-total');
                newTotal.innerText = oldTotal.innerText
            }
        })
    })






