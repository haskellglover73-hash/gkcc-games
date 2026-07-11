import "https://cdn.jsdelivr.net/npm/lichess-pgn-viewer@2.4.5/dist/lichess-pgn-viewer.css";

import LichessPgnViewer from
    "https://cdn.jsdelivr.net/npm/lichess-pgn-viewer@2.4.5/dist/lichess-pgn-viewer.min.js";

const params = new URLSearchParams(window.location.search);
const game = params.get("game");

if (!game) {
    document.getElementById("board").textContent =
        "No game was selected.";
} else {
    fetch("games/" + game)
        .then(response => {
            if (!response.ok) {
                throw new Error("Could not load PGN file: " + game);
            }

            return response.text();
        })
        .then(pgn => {
            LichessPgnViewer(
                document.getElementById("board"),
                {
                    pgn: pgn,
                    showMoves: "right"
                }
            );
        })
        .catch(error => {
            console.error(error);

            document.getElementById("board").textContent =
                error.message;
        });
}
