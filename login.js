// const STUDENT_CODE = "425260063";

// // ضع الرقم القومي الحقيقي هنا على جهازك
// const NATIONAL_ID = "30505291300584";

// const btn = document.getElementById("loginBtn");
// const errorBox = document.getElementById("errorBox");
// const loadingBox = document.getElementById("loadingBox");

// btn.addEventListener("click", function () {

//     errorBox.classList.add("d-none");
//     errorBox.innerHTML = "";

//     const code = document.getElementById("studentCode").value.trim();
//     const national = document.getElementById("nationalId").value.trim();

//     if (code === "" || national === "") {

//         errorBox.innerHTML = "برجاء إدخال كود الطالب والرقم القومي.";

//         errorBox.classList.remove("d-none");

//         return;
//     }

//     if (code !== STUDENT_CODE || national !== NATIONAL_ID) {

//         errorBox.innerHTML = "كود الطالب أو الرقم القومي غير صحيح.";

//         errorBox.classList.remove("d-none");

//         return;
//     }

//     btn.disabled = true;

//     loadingBox.classList.remove("d-none");

//     sessionStorage.setItem("verified", "true");

//     setTimeout(function () {

//         window.location.href = "FinalYear.html";

//     },10000);

// });

// document.addEventListener("keypress",function(e){

//     if(e.key==="Enter"){

//         btn.click();

//     }

// });




const STUDENT_CODE = "425260063";
const NATIONAL_ID = "30505291300584";

const btn = document.getElementById("loginBtn");
const errorBox = document.getElementById("errorBox");

btn.addEventListener("click", function () {

    errorBox.classList.add("d-none");
    errorBox.innerHTML = "";

    const code = document.getElementById("studentCode").value.trim();
    const national = document.getElementById("nationalId").value.trim();

    if (code === "" || national === "") {

        errorBox.innerHTML = "برجاء إدخال كود الطالب والرقم القومي";
        errorBox.classList.remove("d-none");
        return;

    }

    if (code !== STUDENT_CODE) {

        errorBox.innerHTML = "كود الطالب غير صحيح";
        errorBox.classList.remove("d-none");
        return;

    }

    if (national !== NATIONAL_ID) {

        errorBox.innerHTML = "الرقم القومي غير صحيح";
        errorBox.classList.remove("d-none");
        return;

    }

    btn.disabled = true;
    btn.innerHTML = "جارى التحقق...";

    window.location.href = "Loading.html";

});

document.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        btn.click();

    }

});  
sessionStorage.setItem("verified", "true");
window.location.href = "Loading.html";