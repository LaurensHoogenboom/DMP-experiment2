<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Klaar! 🎉</h1>
    <p>
        Ontzettend bedankt dat je deze hele test hebt willen maken. Je helpt me daar mee
        ontzettend voor het onderzoek. <i>Vergeet niet om hieronder op verzenden te klikken.</i>
    </p>
    <p>
        Nog een laatste vraag:
    </p>
</div>

<div class="content">
    <form>
        <p>
            Standaard wordt alleen de beoordeling van de situatie opgeslagen.
            Wel kan jouw beschrijving van de situatie van toegevoegde waarde zijn.
            Deze data kan je eventueel met ons delen, maar het hoeft niet.
        </p>
    
        <div class="checkbox_wrapper">
            <input type="checkbox" id="shareData">
            <label for="shareData">Deel ook de beschrijving van de situatie.</label>
        </div>

        <label>Heb je nog andere feedback over deze test?</label>
        <textarea id="feedback"></textarea>
    </form>

    
</div>

<div class="actions">
    <div class="left">
    </div>

    <div class="middle">
        <a class="button big" href="http://www.laureato.nl/" onclick="saveSubmission('#shareData', '#feedback')">Verzenden</a>
    </div>

    <div class="right">
    </div>
</div>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>