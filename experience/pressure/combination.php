<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Stressfactoren combineren</h1>
    <p>
        Vaak worden verschillende soorten stress door eenzelfde situatie veroorzaakt.
    </p>
    <p>
        Als dit het geval is kan je nu meerdere soorten stress die bij elkaar horen selecteren.
    </p>
    <p>
        Horen geen van allen bij elkaar? Dan hoef je niks te selecteren. We gaan dan verder met druk die jij opgaf als meest intens aanwezig.
    </p>
</div>

<div class="content">
    <label class="form-status hidden"></label>

    <div class="select-list" id="select-pressure-combination"></div>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/pressure/inventarisation.php">Vorige</a>
    </div>

    <div class="middle">

    </div>

    <div class="right">
        <a class="button big" href="/experience/moment/moment.php" onclick="return gotoMoment('#select-pressure-combination')">Volgende</a>
    </div>
</div>

<script>
    loadPressureSelectList("#select-pressure-combination");
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>