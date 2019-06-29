function menuOpenFunc() {
    return function(e) {
        function createDisableBlock() {
            let board = document.createElement("div");
            board.setAttribute("class", "disableBoard");
            board.style.cssText =
                "position:absolute; z-index:1; width: 100%; height: 100%; top:0; left:0;background-color: #0000006b;";
            board.onclick = function() {
                document
                    .querySelectorAll(".toogle")
                    .forEach(btn => btn.classList.remove("toogle_active"));
                document
                    .querySelector(".optional_panel")
                    .classList.toggle("optional_panel_active");
                document
                    .querySelectorAll(".disableBoard")
                    .forEach(board => board.remove());
            };
            document
                .querySelector(".main")
                .insertBefore(board, document.querySelector(".optional_panel"));

            let boardTwo = document.createElement("div");
            boardTwo.setAttribute("class", "disableBoard");
            boardTwo.style.cssText =
                "position:absolute; z-index:1; width: 100%; height: 100%; top:0; left:0;";
            boardTwo.onclick = function() {
                document
                    .querySelectorAll(".toogle")
                    .forEach(btn => btn.classList.remove("toogle_active"));
                document
                    .querySelector(".optional_panel")
                    .classList.toggle("optional_panel_active");
                document
                    .querySelectorAll(".disableBoard")
                    .forEach(boardTwo => boardTwo.remove());
            };

            document
                .querySelector(".menus")
                .insertBefore(
                    boardTwo,
                    document.querySelector(".menusCentered")
                );

            let boardThree = document.createElement("div");
            boardThree.setAttribute("class", "disableBoard");
            boardThree.style.cssText =
                "position:absolute; z-index:1; width: 100%; height: 100%; top:0; left:0;";
            boardThree.onclick = function() {
                document
                    .querySelectorAll(".toogle")
                    .forEach(btn => btn.classList.remove("toogle_active"));
                document
                    .querySelector(".optional_panel")
                    .classList.toggle("optional_panel_active");
                document
                    .querySelectorAll(".disableBoard")
                    .forEach(boardThree => boardThree.remove());
            };

            document
                .querySelector(".divToogle")
                .insertBefore(
                    boardThree,
                    document.querySelector(".divToogleCentered")
                );
        }
        if (
            document
                .querySelector(".optional_panel")
                .classList.contains("optional_panel_active")
        ) {
            if (e.target.classList.contains("toogle_active")) {
                document
                    .querySelectorAll(".disableBoard")
                    .forEach(board => board.remove());
                document
                    .querySelectorAll(".toogle")
                    .forEach(btn => btn.classList.remove("toogle_active"));
                document
                    .querySelector(".optional_panel")
                    .classList.toggle("optional_panel_active");
            } else {
                document
                    .querySelectorAll(".menusCentered > div")
                    .forEach(menu => menu.classList.remove("menu_active"));
                document
                    .querySelectorAll(".toogle")
                    .forEach(btn => btn.classList.remove("toogle_active"));
                Array.from(document.querySelectorAll(".menusCentered > div"))
                    .filter(
                        menu =>
                            menu.className ===
                            `menu${e.target.getAttribute("data-description")}`
                    )[0]
                    .classList.toggle("menu_active");
                e.target.classList.toggle("toogle_active");
            }
        } else {
            createDisableBlock(e.target);
            document
                .querySelectorAll(".menusCentered > div")
                .forEach(menu => menu.classList.remove("menu_active"));
            Array.from(document.querySelectorAll(".menusCentered > div"))
                .filter(
                    menu =>
                        menu.className ===
                        `menu${e.target.getAttribute("data-description")}`
                )[0]
                .classList.toggle("menu_active");
            document
                .querySelector(".optional_panel")
                .classList.toggle("optional_panel_active");
            e.target.classList.toggle("toogle_active");
        }
    };
}

export default menuOpenFunc;
