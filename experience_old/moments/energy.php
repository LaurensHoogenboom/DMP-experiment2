<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>
                    
<div class="description">
    <h1>Momenten die energie gaven.</h1>
    <p>
        Waar krijg je energie van? Op welke momenten krijg je meer energie terug dan je er in stopt?
    </p>
</div>

<div class="content">
    <div class="moment-list" id="energy-moment-list">
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
        <a class="button big" href="/experience/moments/joy.php" onclick="saveMoments('energy', '#energy-moment-list')">Vorige</a>
    </div>

    <div class="middle">
        
    </div>

    <div class="right">
        <a class="button big" href="/experience/moments/lost_time.php" onclick="saveMoments('energy', '#energy-moment-list')">Volgende</a>
    </div>
</div>

<script>
    getMomentsInList('energy', $('#energy-moment-list'));
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
