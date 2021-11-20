    const layout = document.querySelector(".addEventLayout");
    document.getElementById("addEventStyle").addEventListener('click',layoutToggle);
    document.getElementById("closeLayout").addEventListener('click',layoutToggle);
    window.addEventListener("click", windowOnClick);

    function layoutToggle() {
        layout.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === layout) {
            layoutToggle();
        }
    }

	