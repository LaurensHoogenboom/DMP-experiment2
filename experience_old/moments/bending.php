<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>
                    
<div class="description">
    <h1>Positieve draai.</h1>
    <p>
        Zijn er momenten waarin jij voor een positieve wending zorgde? Misschien gebeurde er iets vervelends, maar wist jij er een positieve draai aan te geven.
    </p>
</div>

<div class="content">
    <div class="moment-list" id="bending-moment-list">
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
        <a class="button big" href="/experience/moments/lost_time.php" onclick="saveMoments('bending', '#bending-moment-list')">Vorige</a>
    </div>

    <div class="middle">
        
    </div>

    <div class="right">
        <a class="button big" href="/experience/moments/looking_forward.php" onclick="saveMoments('bending', '#bending-moment-list')">Volgende</a>
    </div>
</div>

<script>
    getMomentsInList('bending', $('#bending-moment-list'));
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
