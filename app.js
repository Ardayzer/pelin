const pages = {
  home: document.getElementById("page-home"),
  students: document.getElementById("page-students"),
};

const titleText = document.getElementById("titleText");
const titlePill = document.getElementById("titlePill");
const backBtn = document.getElementById("backBtn");
const homeBtn = document.getElementById("homeBtn");
const filterBar = document.getElementById("filterBar");
const profilePop = document.getElementById("profilePop");
const avatarBtn = document.getElementById("avatarBtn");

function showPage(name) {
  Object.values(pages).forEach((p) => p.classList.remove("active"));
  pages[name].classList.add("active");

  if (name === "home") {
    titleText.textContent = "Home";
    backBtn.classList.add("hidden");
    homeBtn.classList.add("hidden");
    filterBar.classList.add("hidden");
    titlePill.style.border = "none";
    titlePill.style.padding = "4px 6px";
  } else if (name === "students") {
    titleText.textContent = "Student Info Center";
    backBtn.classList.remove("hidden");
    homeBtn.classList.remove("hidden");
    filterBar.classList.remove("hidden");
    titlePill.style.border = "1.5px solid #3b5878";
    titlePill.style.padding = "6px 14px";
  }
  profilePop.classList.add("hidden");
  document.getElementById("content").scrollTop = 0;
}

// All home tiles navigate to students page (demo)
document.querySelectorAll("#page-home .tile:not(.placeholder)").forEach((el) => {
  el.addEventListener("click", () => showPage("students"));
});

backBtn.addEventListener("click", () => showPage("home"));
homeBtn.addEventListener("click", () => showPage("home"));

avatarBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  profilePop.classList.toggle("hidden");
});
document.addEventListener("click", (e) => {
  if (!profilePop.contains(e.target) && e.target !== avatarBtn) {
    profilePop.classList.add("hidden");
  }
});

// init
showPage("home");
