<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>
                    
<div class="description">
    <h1>Momenten waar je zin in hebt.</h1>
    <p>
        Zijn er momenten waar je naar uit kijkt? De momenten waar je écht zin in hebt.
    </p>
</div>

<div class="content">
    <div class="moment-list" id="looking_forward-moment-list">
        <div class="list">
            <div class="moment">
                <Textarea placeholder="Beschrijf het moment"></Textarea>
                <button class="button remove">X</button>
            </div>
        </div>

        <button class="button" id="add-moment">Toevoegen</button>
    </div>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/moments/bending.php" onclick="saveMoments('looking_forward', '#looking_forward-moment-list')">Vorige</a>
    </div>

    <div class="middle">
        
    </div>

    <div class="right">
        <a class="button big" href="/experience/moments/selection.php" onclick="saveMoments('looking_forward', '#looking_forward-moment-list')">Volgende</a>
    </div>
</div>

<script>
    getMomentsInList('looking_forward', $('#looking_forward-moment-list'));
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
