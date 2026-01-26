// const searchInput = document.getElementById("#searchInput")
// const fontCards = document.querySelectorAll("#fon-par")

// searchInput.addEventListener("inputt", () => {
//     const value = searchInput.value.toLowerCase();
//     const fontName = fontCards.querySelector("h1").textContent.toLowerCase()

//     if(fontName.includes(value)) {
//         fontCards.style.display ="block";
//     } else{
//         fontCards.style.display = "none"
//     }
  
// });


// const searchInput = document.getElementById("searchInput");
// const fontCards = document.querySelectorAll(".fon-par"); 

// searchInput.addEventListener("input", () => {
//     const value = searchInput.value.toLowerCase();

//     fontCards.forEach(card => {
//         const fontName = card.querySelector("h1").textContent.toLowerCase();
//         if (fontName.includes(value)) {
//             card.style.display = "block";
//         } else {
//             card.style.display = "none";
//         }
//     });
// });

document.querySelectorAll("a").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// const downloadBtns = document.querySelectorAll(".download");

// downloadBtns.forEach(a => {
//   a.onclick = () => {
//     alert("Your font download is starting 🚀");
//   };
// });