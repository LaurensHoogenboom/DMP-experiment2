<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>
                    
<div class="description">
    <h1>Momenten waarin je de tijd verloor.</h1>
    <p>
        Op welke momenten verlies je de tijd in bij wat je doet? Waarneer raak je makkelijk in een "flow"?
    </p>
</div>

<div class="content">
    <div class="moment-list" id="lost_time-moment-list">
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
        <a class="button big" href="/experience/moments/energy.php" onclick="saveMoments('lost_time', '#lost_time-moment-list')">Vorige</a>
    </div>

    <div class="middle">
        
    </div>

    <div class="right">
        <a class="button big" href="/experience/moments/bending.php" onclick="saveMoments('lost_time', '#lost_time-moment-list')">Volgende</a>
    </div>
</div>

<script>
    getMomentsInList('lost_time', $('#lost_time-moment-list'));
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
