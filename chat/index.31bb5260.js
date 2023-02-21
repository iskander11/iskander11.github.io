const messageSendForm = document.querySelector(".main-form");
const messageSend = (event)=>{
    event.preventDefault();
    const value = event.target.querySelector(".main-form_input").value.trim();
    if (value.length < 1) {
        console.log("Ошибка");
        return;
    }
};
messageSendForm.addEventListener("submit", messageSend);

//# sourceMappingURL=index.31bb5260.js.map
