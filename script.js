const menuBtn = document.querySelector(".ham");
const cross = document.querySelector(".cross");
const links = document.querySelector(".links");

menuBtn.addEventListener("click", () => {
	links.style.display = "unset";
	menuBtn.style.display = "none";
	cross.style.display = "unset";
});

cross.addEventListener("click", () => {
	links.style.display = "none";
	cross.style.display = "none";
	menuBtn.style.display = "unset";
});
