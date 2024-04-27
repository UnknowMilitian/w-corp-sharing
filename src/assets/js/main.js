let password_shower = document.querySelector(".password_shower")

if (password_shower) {
    password_shower.addEventListener("click", () => {
        input = password_shower.previousElementSibling
        password_shower.firstElementChild.classList.toggle("fa-eye")
        password_shower.firstElementChild.classList.toggle("fa-eye-slash")
        input.type == "password" ? input.type = "text" : input.type = "password"
    })
}
let header_top_location = document.querySelector(".main-current_id_location")


window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }
});

function onSuccess(position) {
    let {
        latitude,
        longitude
    } = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=44f2410a88434e309e68a3345de80d0e`)
        .then(response => response.json()).then(response => {
            let allDetails = response.results[0].components;
            let {
                city,
                postcode,
                country
            } = allDetails;
            fetch(`https://api.mymemory.translated.net/get?q=${city}&langpair=uz|ru`)
                .then(res => res.json()).then(data => {
                    let translatedLocation = data.responseData.translatedText.replace(" -", "")
                    console.log(data.responseData);
                    header_top_location.innerText = `${translatedLocation}`;
                }).catch(() => {});
        }).catch(() => {});
}

function onError(error) {
    if (error.code == 1) {
        header_top_location.innerText = "Manzilingizni kiriting";
    } else if (error.code == 2) {
        header_top_location.innerText = "Manzil mavjud emas";
    } else {
        header_top_location.innerText = "Hatolik roy berdi";
    }
}