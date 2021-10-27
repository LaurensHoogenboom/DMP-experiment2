<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Momentje...</h1>
    <p>
        Door welk moment ervaarde je deze <span id="pressure-sentence"></span>?
    </p>
    <p>
        Het hoeft net altijd een specifiek moment te zijn. Het kan ook zijn dat een bepaalde periode of proces voor bepaalde druk zorgt.
    </p>
</div>

<div class="content">
    <label class="form-status hidden"></label>

    <form>
        <label>Beschrijf het moment.</label>
        <textarea id="moment-description"></textarea>
    </form>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/pressure/combination.php">Vorige</a>
    </div>

    <div class="middle">

    </div>

    <div class="right">
        <a class="button big" href="/experience/moment/emotion.php" onclick="return saveMomentDescription('#moment-description')">Volgende</a>
    </div>
</div>

<script>
    initializeMoment();
    loadPressureSentence("#pressure-sentence");
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>