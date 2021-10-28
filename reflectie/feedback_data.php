<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>
               
<div class="description">
    <h1>Klaar!</h1>
    <p>
        Super. Bedankt voor je tijd! Mede door jouw kan ik weer verder met het onderzoek.
    </p>
    <p>
        Voordat we stoppen nog twee dingen:
    </p>

    <form>   
        <p>
            Standaard wordt alleen de beoordeling van de resultaten opgeslagen. 
            Wel kan jouw beschrijving van de positieve ervaringen en sterke punten van toegevoegde waarde zijn.
            Deze data kan je eventueel met ons delen, maar het hoeft niet.
        </p>

        <div class="checkbox_wrapper">
            <input type="checkbox" id="shareData">
            <label for="shareData">Deel ook de ervaringen en de sterke punten.</label>
        </div>

        <label>Heb je nog vragen of opmerkingen?</label>
        <textarea id="feedback"></textarea>
    </form>
</div>

<div class="actions">
    <div class="left">
        
    </div>

    <div class="middle">
        <a class="button big" href="https://laureato.nl/" onclick="return saveResult();">Verzenden</a>
    </div>

    <div class="right">
        
    </div>
</div>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>
