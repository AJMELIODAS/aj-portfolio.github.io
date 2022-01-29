let percent = document.querySelectorAll(".percent");
var menu = document.querySelector(".menu");
let items = document.getElementsByClassName("item");
let homeWindow = document.getElementById("Home");
let aboutWindow = document.getElementById("About");
let workWindow = document.getElementById("Work");
let expWindow = document.getElementById("Experience");
let connectWindow = document.getElementById("Connect");
let windows = [homeWindow, aboutWindow, workWindow, expWindow, connectWindow];
let navbar = document.getElementsByClassName("header_navbar")[0];
let menuItems = document.getElementsByClassName("menu-items")[0];
let url = window.location.href;
let loader = document.querySelector(".preloader");
let website = document.querySelector(".website");
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
let links = document.getElementsByTagName("a");
let progress = document.querySelectorAll(".progress");
let pin = document.querySelectorAll(".pin");
let arrow = document.getElementsByClassName("arrow")[0];
let workList = document.querySelectorAll(".work");
let navlinks = {};
let h1 = homeWindow.offsetHeight;
let h2 = h1 + aboutWindow.offsetHeight;
let h3 = h2 + workWindow.offsetHeight;
let h4 = h3 + expWindow.offsetHeight;
let h5 = h4 + connectWindow.offsetHeight;
let counters = document.querySelectorAll(".percent");
let all = document.querySelector(".all");
let footIcons = document.querySelectorAll(".ico");

for (let i = 0; i < links.length; i++) {
  navlinks[i] = links[i].href;
}

menu.addEventListener("click", () => {
  menuItems.classList.toggle("active");
});
var onlyOnce = true;

window.addEventListener("scroll", () => {
  navbar.classList.toggle("sticky", window.scrollY > 0);
  if (window.scrollY > h1 && window.screenY < h2) {
    for (let i = 0; i < progress.length; i++) {
      progress[i].classList.add("active");
      pin[i].classList.add("active");
    }
    if (window.scrollY > h1 && window.screenY < h2 && onlyOnce) {
      counters.forEach((counter) => {
        counter.style.display = "block";
        var percentUpdate = setInterval(updatePercent, 20);
        let count = 0;
        var percentage = counter.getAttribute("data-target");
        function updatePercent() {
          count++;
          counter.innerText = `${count}%`;
          if (count == percentage) {
            clearInterval(percentUpdate);
          }
        }
      });
      counters.forEach((counter) => {
        var percentUpdate = setInterval(updatePercent, 25);
        let count = 0;
        var percentage = counter.getAttribute("data-target");
        function updatePercent() {
          count++;
          counter.innerText = `${count}%`;
          if (count == percentage) {
            clearInterval(percentUpdate);
          }
        }
        counter.innerText = counter.getAttribute("data-target") + "%";
      });
    }
    onlyOnce = false;
  }
});

for (let i = 0; i < progress.length; i++) {
  progress[i].style.width = percent[i].getAttribute("data-target") + "%";
  pin[i].style.right = 100 - percent[i].getAttribute("data-target") + "%";
}

menu.addEventListener("click", () => {
  line1.classList.toggle("active");
  line2.classList.toggle("active");
  line3.classList.toggle("active");
});
window.addEventListener("load", () => {
  loader.style.display = "none";
  document.body.style.display = "block";
  document.body.style.overflow = "scroll";
});

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    for (let j = 0; j < items.length; j++) {
      if (items[j].classList.contains("active")) {
        items[j].classList.remove("active");
      }
    }
    items[i].classList.toggle("active");
    let string = window.location.href;
  });
}

arrow.addEventListener("click", () => {
  window.scrollTo({
    top: homeWindow.offsetHeight,
    left: 0,
    behavior: "smooth",
  });
});

items[0].addEventListener("click", (e) => {
  if (navbar.offsetHeight == homeWindow.offsetTop) {
    e.preventDefault();
  } else {
    e.defaultPrevented = false;
  }
});

workList.forEach((work) => {
  work.addEventListener("click", () => {
    window.open(work.getAttribute("data-url"), "_blank");
  });
});

var removeActive = () => {
  for (let j = 0; j < items.length; j++) {
    if (items[j].classList.contains("active")) {
      items[j].classList.remove("active");
    }
  }
};
var cout = 0;
windows.forEach((win) => {
  cout += win.offsetHeight;

  console.log(win, win.offsetHeight);
});
console.log("Total height:", cout);

window.addEventListener("resize", () => {
  //window.location.reload();
  homeWindow = document.getElementById("Home");
  aboutWindow = document.getElementById("About");
  workWindow = document.getElementById("Work");
  expWindow = document.getElementById("Experience");
  connectWindow = document.getElementById("Connect");
  h1 = homeWindow.offsetHeight;
  h2 = h1 + aboutWindow.offsetHeight;
  h3 = h2 + workWindow.offsetHeight;
  h4 = h3 + expWindow.offsetHeight;
  h5 = h4 + connectWindow.offsetHeight;
});

window.addEventListener("scroll", () => {
  console.log(window.location.href);
  if (window.scrollY < h1) {
    removeActive();
    items[0].classList.add("active");
    if (!window.location.href.endsWith("#Home")) {
      window.history.pushState("new", "", "#Home");
    }
  } else if (window.scrollY < h2) {
    removeActive();
    items[1].classList.add("active");
    if (!window.location.href.endsWith("#About")) {
      window.history.pushState("new", "", "#About");
    }
  } else if (window.scrollY < h3) {
    removeActive();
    items[2].classList.add("active");
    if (!window.location.href.endsWith("#Work")) {
      window.history.pushState("new", "", "#Work");
    }
  } else if (window.scrollY < h4) {
    if (!window.location.href.endsWith("#Experiance")) {
      window.history.pushState("new", "", "#Experiance");
    }
    removeActive();
    items[3].classList.add("active");
  } else if (window.scrollY >= h4) {
    if (!window.location.href.endsWith("#Connect")) {
      window.history.pushState("new", "", "#Connect");
    }
    removeActive();
    items[4].classList.add("active");
  }
});

footIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    window.open(icon.getAttribute("data-open"), "_blank");
  });
});

all.addEventListener("click", () => {
  window.open(all.getAttribute("data-link"), "_blank");
});
