<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Resultaten</h1>
    <p>
        Beantwoord de vragen hieronder. De antwoorden dienen als beoordeling van de kwaliteit van de resultaten.
    </p>
</div>

<div class="content">
    <form class="item-form">
        <div class="item">
            <h2>Wat je kunt: <span id="valuation-index"></span> van <span id="valuation-count"></span></h2>

            <p id="personal-strength-description">moment beschrijving</p>

            <label class="form-status hidden"></label>

            <label>Maak je al regelmatig gebruik van dit sterke punt? (bijv. bij hobby's, werk, studie etc.) *</label>

            <div class="radio-wrapper">
                <input type="radio" id="used_yes" name="used" value="yes">
                <label for="used_yes">Ja</label>

                <span></span>

                <input type="radio" id="used_no" name="used" value="no" checked>
                <label for="used_no">Nee</label>
            </div>

            <label>Zou je regelmatig gebruik van dit sterke punt willen maken? *</label>

            <div class="radio-wrapper">
                <input type="radio" id="wanted_yes" name="wantedToBeUsed" value="yes">
                <label for="wanted_yes">Ja</label>

                <span></span>
    
                <input type="radio" id="wanted_no" name="wantedToBeUsed" value="no" checked>
                <label for="wanted_no">Nee</label>
            </div>

            <label>
                Hoe belangrijk vind je dit sterke punt voor je? *
            </label>

            <div class="range-wrapper" >
                <label>1</label>
                <input id="grade" type="range" min="1" max="10" value="5">
                <label>10</label>
                <i class="range-description">(1 = niet belangrijk, 10 = heel belangrijk)</i>
            </div>

            <label>Nog andere opmerkingen</label>
            <textarea id="remarks"></textarea>
        </div>
        <label>* verplicht veld</label>
    </form>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/outro/intro.php" for="submit_experience_form"
            onclick="return previousValuation()">Vorige</a>
    </div>

    <div class="middle">

    </div>

    <div class="right">
        <a class="button big" href="/outro/feedback_data.php" for="submit_experience_form"
            onclick="return nextValuation()">Volgende</a>
    </div>
</div>

<script>
    getCurrentValuation();
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>