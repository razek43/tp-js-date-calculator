//convert today  daye to input format
const today  = new Date().toISOString().split("T")[0];


start_date.min = today;



const nextDay = () => {
let tomorrow = new Date(start_date.value);
tomorrow.setDate(tomorrow.getDate() + 1);


//convert to input format
let tomorrowFormat = tomorrow.toISOString().split("T")[0];



end_date.min = tomorrowFormat;
}





start_date.addEventListener("change", (e) => {

    nextDay()
    

});



const bookingCalc = () => {
    let diffTime = Math.abs(
        new Date(end_date.value) - new Date(start_date.value)
        );

    let diffDays = Math.ceil (diffTime / (1000 * 60 * 60 * 24));

if (isNaN(diffTime)) {
    total.textContent = "0";
} else {
   total.textContent = diffDays * nightPrice.textContent
}


};

start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);

bookingCalc();
