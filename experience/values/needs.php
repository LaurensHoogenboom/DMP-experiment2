<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Behoefte aan...</h1>
    <p>
        Gevolgen van van of in een situatie hebben altijd gevolgen voor bepaalde behoeften.
        Deze behoefte worden als gevolg van de situatie wel of niet vervuld.
    </p>
    <p>
        Op basis van je eerder keuzes, hebben we een aantal behoeften geselecteerd.
        Welke passen volgens jouw bij de situatie (selecteer er maximaal 2)?
    </p>
    <p>
        <i>
            "<span id="moment-description"></span>"
        </i>
    </p>
</div>

<div class="content">
    <label class="form-status hidden"></label>

    <div class="select-list" id="select-needs"></div>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/values/concequences.php">Vorige</a>
    </div>

    <div class="middle">
    </div>

    <div class="right">
        <a class="button big" href="/experience/values/instrumental_values.php" onclick="return saveNeedSelection('#select-needs')">Volgende</a>
    </div>
</div>

<script>
    getMomentDescription("text", "#moment-description");
    loadNeedsList("#select-needs");
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>