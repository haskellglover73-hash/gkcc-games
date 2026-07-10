import LichessPgnViewer from "./lichess-pgn-viewer.min.js";

const params = new URLSearchParams(window.location.search);

const game = params.get("game");

fetch("games/" + game)
    .then(r => r.text())
    .then(pgn => {

        LichessPgnViewer(
            document.getElementById("board"),
            {
                pgn: pgn,
                showMoves: "right"
            }
        );

    });
