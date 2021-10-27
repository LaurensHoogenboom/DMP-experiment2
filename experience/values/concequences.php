<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Gevolgen van...</h1>
    <p>
        Druk voel je vanwege bepaalde (mogelijke) gevolgen van of in een situatie.
        Wat voor soort concequentie had deze situatie vooral? (Kies er maximaal 2).
    </p>
    <p>
        <i>
            "<span id="moment-description"></span>"
        </i>
    </p>
</div>

<div class="content">
    <label class="form-status hidden"></label>

    <div class="select-list" id="select-concequence"></div>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/values/">Vorige</a>
    </div>

    <div class="middle">
    </div>

    <div class="right">
        <a class="button big" href="/experience/values/needs.php" onclick="return saveConcequenceSelection('#select-concequence')">Volgende</a>
    </div>
</div>

<script>
    getMomentDescription("text", "#moment-description");
    loadConcequenceSelectList("#select-concequence");
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>