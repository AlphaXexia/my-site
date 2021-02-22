const Portfolio = (function () {
  function makeWords() {
    var words = [
      {
        text: "css",
        weight: 19,
      },
      {
        text: "javascript",
        weight: 24,
      },
      {
        text: "cyber security",
        weight: 10,
      },
      {
        text: "public speaking",
        weight: 12,
      },
      {
        text: "programming",
        weight: 34,
      },
      {
        text: "debate",
        weight: 14,
      },
      {
        text: "trigonometry",
        weight: 12,
      },
      {
        text: "history",
        weight: 6,
      },
    ];
    return words;
  }

  function makeWordCloud(words) {
    $(".teaching-domains").jQCloud(words, { delay: 300 });
  }

  function displayWordCloud() {
    var count = 1;
    $(window).on("scroll", function () {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test = 1800; // set to whatever you want it to be
      var words = makeWords();
      if (y_scroll_pos > scroll_pos_test && count <= 1) {
        makeWordCloud(words);
        count++;
      }
    });
  }

  function designForm() {
    $("#my-modal form").addClass("my-form");
  }

  function typeAnimation() {
    Typed.new("#writing-text", {
      strings: [
        "am aiming to be a Full-Stack Web Developer.    ",
        "i also aim to be a CyberSecurity Expert.    ",
        "love coding and learning new technologies.",
        "solve problems.",
      ],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 1,
      contentType: "text",
      callback: function () {
        $("#writing-text").css({
          color: "#fff",
          "background-color": "var(--border-primary)",
        });
      },
      preStringTyped: function () {},
      onStringTyped: function () {},
    });
  }

  return {
    displayWordCloud: displayWordCloud,
    typeAnimation: typeAnimation,
  };
})();

Portfolio.displayWordCloud();
Portfolio.typeAnimation();

jQuery(document).ready(function ($) {
  // Get page title
  var pageTitle = $("title").text();

  // Change page title on blur
  $(window).blur(function () {
    $("title").text("Hey, come back!(｡•́︿•̀｡)");
  });

  // Change page title back on focus
  $(window).focus(function () {
    $("title").text(pageTitle);
  });
});

const themeMap = {
  dark: "light",
  light: "dark",
};

let theme =
  localStorage.getItem("theme") ||
  ((tmp = Object.keys(themeMap)[0]), localStorage.setItem("theme", tmp), tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

toggleTheme = () => {
  const current = localStorage.getItem("theme");
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem("theme", next);
};

// let theme = "dark";

// const toggleTheme = () => {
//   theme = theme == "dark" ? "light" : "dark";

//   alert(theme);
//   document.getElementById("body").style.backgroundColor =
//     theme == "dark" ? "#000" : "#FFF";
//   document.getElementById("themeButtonToggler").style.color =
//     theme == "dark" ? "#FFF" : "#000";
// };

changethemebutton = () => {
  if (document.getElementById("themeSymbol").classList.contains("fa-moon-o")) {
    document.getElementById("themeSymbol").classList.remove("fa-moon-o");
    document.getElementById("themeSymbol").classList.add("fa-sun-o");
    document.getElementById("profile-picture").src =
      "assets/images/profile-light.png";

    console.log("changed theme to light");
  } else if (
    document.getElementById("themeSymbol").classList.contains("fa-sun-o")
  ) {
    document.getElementById("themeSymbol").classList.remove("fa-sun-o");
    document.getElementById("themeSymbol").classList.add("fa-moon-o");
    document.getElementById("profile-picture").src =
      "assets/images/profile-dark.png";

    console.log("changed theme to dark");
  }
  if (document.getElementById("body").classList.contains("light")) {
    document.getElementById("profile-picture").src =
      "assets/images/profile-light.png";
  } else if (document.getElementById("body").classList.contains("dark")) {
    document.getElementById("profile-picture").src =
      "assets/images/profile-dark.png";
  }
};

document.getElementById("themeSymbol").onclick = toggleTheme;
document.getElementById("themeButton").onclick = changethemebutton;

defaultpicture = () => {
  if (document.getElementById("body").classList.contains("light")) {
    document.getElementById("profile-picture").src =
      "assets/images/profile-light.png";
  } else if (document.getElementById("body").classList.contains("dark")) {
    document.getElementById("profile-picture").src =
      "assets/images/profile-dark.png";
  }
};
window.onload = defaultpicture();
// function myFunction{
// 			document.getElementById("top").classList.remove("stop-scrolling");
// 		}

var $window = $(window);
var $elem = $(".animation");

function isScrolledIntoView($elem, $window) {
  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();

  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}
$(document).on("scroll", function () {
  if (isScrolledIntoView($elem, $window)) {
    $elem.addClass("animate");
  }
});
