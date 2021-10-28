<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Waar of niet waar:</h1>
    <p>
        Wat in de situatie zorgde ervoor dat je behoefte voor
        <i></r> <span id="need-sentence"></span></i> onder
        druk kwam te staan? (Selecteer er maximaal 2).
    </p>
</div>

<div class="content">
    <label class="form-status hidden"></label>

    <div class="select-list" id="factor-select-list"></div>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/reflection/">Vorige</a>
    </div>

    <div class="middle">

    </div>

    <div class="right">
        <a class="button big" onclick="return saveFactorSelectList('#factor-select-list')">Volgende</a>
    </div>
</div>

<script>
    loadFactorSelectList("#factor-select-list");
    loadNeedsSentence("#need-sentence");
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>