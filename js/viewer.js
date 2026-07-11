<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/lichess-pgn-viewer@2.4.5/dist/lichess-pgn-viewer.css">

<script type="module">
import LichessPgnViewer from "https://cdn.jsdelivr.net/npm/lichess-pgn-viewer@2.4.5/dist/lichess-pgn-viewer.min.js";
window.LichessPgnViewer = LichessPgnViewer;


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
          <link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/lichess-pgn-viewer@2.4.5/dist/lichess-pgn-viewer.css">

</script>

    });
