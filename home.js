const themeButton = document.getElementById("theme-button");

    const darkTheme = "dark-theme"
    const iconTheme = "uil-sun"

    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    const getcurrentTheme = () => document.body.classList.contains(darkTheme)? "dark" : "light"
    const getcurrentIcon = () => themebutton.classList.contains(iconTheme)? "uil-moon" : "uil-sun"

    if (selectedTheme){
        document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
        themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme)
    }

    themeButton.addEventListener("click", () =>{
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)

        localStorage.setItem("selected-theme", getcurrentTheme())
        localStorage.setItem("set-icon", getcurrentIcon())

    })