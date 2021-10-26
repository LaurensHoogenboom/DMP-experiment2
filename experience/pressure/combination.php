<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Stressfactoren combineren</h1>
    <p>
        Vaak worden verschillende soorten stress door eenzelfde situatie veroorzaakt.
    </p>
    <p>
        Als dit het geval is kan je nu meerdere soorten stress selecteren die bij elkaar horen.
    </p>
    <p>
        Horen geen allen bijelkaar? Dan gaan we door met het type stress wat je opgaf als het meest intens.
    </p>
</div>

<div class="content">
    <div class="select-list" id="select-pressure-combination"></div>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/pressure/inventarisation.php">Vorige</a>
    </div>

    <div class="middle">

    </div>

    <div class="right">
        <a class="button big" onclick="return savePressureSelection('#select-pressure-combination')">Volgende</a>
    </div>
</div>

<script>
    loadPressureSelectList("#select-pressure-combination");
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>