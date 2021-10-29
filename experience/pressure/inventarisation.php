<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Stressfactoren</h1>
    <p>
        Welke soorten druk heb jij in de afgelopen 5 dagen ervaren? <br>
        (1 = niet aanwezig, 10 = constant aanwezig)
    </p>
</div>

<div class="content">
    <form id="pressureForm">
        <label class="form-status hidden"></label>

        <label class="has-description">
            Tijdsdruk

            <span class="description-button">?</span>
            <span class="description-content hidden">
                Bijvoorbeeld als het verkeer tegen zit waardoor je niet op tijd op een afspraak komt.
            </span>
        </label>

        <div class="range-wrapper">
            <label>1</label>
            <input id="timePressure" type="range" min="1" max="10" value="1">
            <label>10</label>
        </div>

        <label class="has-description">
            Emotionele druk

            <span class="description-button">?</span>
            <span class="description-content hidden">
                Bijvoorbeeld wanneer je emotineel betrokken raakt in een situatie, maar hier niks voor terugkrijgt of kwijt kan.
            </span>
        </label>

        <div class="range-wrapper">
            <label>1</label>
            <input id="emotionPressure" type="range" min="1" max="10" value="1">
            <label>10</label>
        </div>

        <label class="has-description">
            Prestatiedruk

            <span class="description-button">?</span>
            <span class="description-content hidden">
                Bijvoorbeeld wanneer je iets zo goed mogelijk wil doen, terwijl de situatie dat eigenlijk niet toelaat.
            </span>
        </label>

        <div class="range-wrapper">
            <label>1</label>
            <input id="archievementPressure" type="range" min="1" max="10" value="1">
            <label>10</label>
        </div>

        <label class="has-description">
            Verantwoordelijkheidsgevoel

            <span class="description-button">?</span>
            <span class="description-content hidden">
                Wanneer je jezelf verantwoordelijk voelt voor een situatie, en dus dit zwaar op je weegt.
            </span>
        </label>

        <div class="range-wrapper">
            <label>1</label>
            <input id="responsibilityPressure" type="range" min="1" max="10" value="1">
            <label>10</label>
        </div>

        <label class="has-description">
            Aanpassingsdruk

            <span class="description-button">?</span>
            <span class="description-content hidden">
                Dit doet zich bijvoorbeeld voor als een situatie snel kan veranderen zonder dat je weet waar het heen gaat.
            </span>
        </label>

        <div class="range-wrapper">
            <label>1</label>
            <input id="adjustmentPressure" type="range" min="1" max="10" value="1">
            <label>10</label>
        </div>

        <label class="has-description">
            Politieke druk

            <span class="description-button">?</span>
            <span class="description-content hidden">
                Bijvoorbeeld wanneer je vanwege afspraken of verwachtingen op je werk of op school, aan bepaalde eisen probeert te voeldoen, om geaccepteerd te worden.
            </span>
        </label>

        <div class="range-wrapper">
            <label>1</label>
            <input id="politicalPressure" type="range" min="1" max="10" value="1">
            <label>10</label>
        </div>
    </form>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/index.php">Vorige</a>
    </div>

    <div class="middle">

    </div>

    <div class="right">
        <a class="button big" href="/experience/pressure/combination.php" onclick="return savePressure()">Volgende</a>
    </div>
</div>

<script>
    getPressure();
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>