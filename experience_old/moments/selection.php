<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>
                    
<div class="description">
    <h1>Momenten selecteren.</h1>
    <p class="selection-description">
        Super! Je hebt nu een aantal momenten verzameld, die jij fijn vond. Nu moeten we een selectie maken.
    </p>
    <p class="selection-description">
        Selecteer jouw beste momenten (maximaal 3). Probeer momenten te selecteren waarop jij op je best was. Probeer ook om zo verschillend mogelijke momenten te kiezen.
    </p>
</div>

<div class="content">
    <div class="moment-select-list" id="select-most-important-moments">
    </div>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/moments/looking_forward.php" onclick="saveMomentsSelection('#select-most-important-moments')">Vorige</a>
    </div>

    <div class="middle">
        
    </div>

    <div class="right">
        <a class="button big hidden" id="next-selection" href="/experience/completion/intro.php" onclick="return saveMomentsSelection('#select-most-important-moments')">Volgende</a>
    </div>
</div>

<script>
    getMomentsInSelectList($('#select-most-important-moments'));
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
