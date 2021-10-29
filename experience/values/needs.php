<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Behoefte aan...</h1>
    <p>
        Gevolgen van of in een situatie hebben altijd gevolgen voor bepaalde behoeften.
        Deze behoeften worden als gevolg van de situatie wel of niet vervuld.
    </p>
    <p>
        Op basis van je eerder keuzes, hebben we een aantal behoeften geselecteerd.
        Hoe belangrijk waren voor jou de onderstaande behoeften tijdens de situatie (1 = niet belangrijk, 10 = van levensbelang)?
    </p>
    <p>
        <i>
            "<span id="moment-description"></span>"
        </i>
    </p>
</div>

<div class="content">
    <label class="form-status hidden"></label>

    <form class="intensityList" id="needs-intensity">
    </form>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/values/concequences.php">Vorige</a>
    </div>

    <div class="middle">
    </div>

    <div class="right">
        <a class="button big" href="/experience/values/instrumental_values.php"  onclick="return saveNeedSelection('#needs-intensity')">Volgende</a>
    </div>
</div>

<script>
    getMomentDescription("text", "#moment-description");
    loadNeedRangeList("#needs-intensity");
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>