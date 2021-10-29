<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Waarom je iets doet.</h1>
    <p>
        In de situatie die je eerder beschreef, had je behoeften aan <span id="need-sentence"></span>.
    </p>
    <p>
        Behoeften zijn een uiting van wat we belangrijk vinden. Dit worden ook wel eindwaarden genoemd.
    </p>
    <p>
        Wat past volgens jouw het beste bij de situatie? (Kies er maximaal 2).
    </p>
    <p>
        <i>
            "<span id="moment-description"></span>"
        </i>
    </p>
</div>

<div class="content">
    <label class="form-status hidden"></label>

    <div class="select-list" id="select-terminal-values">
    </div>

    <div class="load-more">
        <label class="button big" onclick="loadMoreValues('terminal', '#select-terminal-values')">Meer</label>
    </div>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/values/instrumental_values.php"
            onclick="return checkIfAnyValuesOtherwiseRedirect('instrumental', '/experience/values/needs.php')">Vorige</a>
    </div>

    <div class="middle">
    </div>

    <div class="right">
        <a class="button big" href="/reflection/" onclick="return saveValuesSelection('#select-terminal-values', 'terminal')">Volgende</a>
    </div>
</div>

<script>
    checkIfAnyValuesOtherwiseRedirect("instrumental", "/experience/values/terminal_values.php");
    getMomentDescription("text", "#moment-description");
    loadNeedsSentence("#need-sentence");
    loadValueSelectList("terminal", "#select-terminal-values");
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>