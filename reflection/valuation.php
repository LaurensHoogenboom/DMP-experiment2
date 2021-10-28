<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Hebben we 't begrepen... 🤔</h1>
    <p>
        Als conclusie hebben we de volgende zin geformuleerd.
        Geef alsjeblieft hieronder aan in hoeverre dit voor jouw de <i>hele</i> situatie dekt.
    </p>
</div>

<div class="content">
    <label class="form-status hidden"></label>

    <p>Als ik in deze situatie:</p>

    <p>
        <i>
            &quot;<span id="situation"></span>&quot;
        </i>
    </p>

    <p>...minder of geen van deze soorten druk zou voelen:</p>

    <div class="block-list" id="pressure"></div>

    <p>...en er geen sprake is van:</p>

    <div class="block-list" id="factors"></div>

    <p>...dan zou ik:</p>

    <p>...op de volgende manieren te werk kunnen gaan:</p>

    <div class="block-list" id="instrumental"></div>

    <p>...en aan deze dingen kunnen werken:</p>

    <div class="block-list" id="terminal"></div>

    <form class="valuation-form">
        <label>Dekt deze zin de hele situatie? (1 = totaal niet, 10 = helemaal)</label>

        <div class="range-wrapper">
            <label>1</label>
            <input type="range" id="coverageGrade" min="1" max="10" value="1">
            <label>10</label>
        </div>

        <label>Zou je nog wat willen toevoegen of veranderen?</label>
        <textarea id="coverageRemarks"></textarea>

        <label>Zou het weten van het bovenstaande je kunnen helpen in een toekomstige vergelijkbare situatie? (1 =
            totaal niet, 10 = helemaal)</label>

        <div class="range-wrapper">
            <label>1</label>
            <input type="range" id="usabilityGrade" min="1" max="10" value="1">
            <label>10</label>
        </div>

        <label>Waarom wel of niet?</label>
        <textarea id="usabilityRemarks"></textarea>
    </form>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/reflection/factors.php">Vorige</a>
    </div>

    <div class="middle">

    </div>

    <div class="right">
        <a class="button big" href="/reflection/ending.php" onclick="return saveValuation('#coverageGrade', '#coverageRemarks', '#usabilityGrade', '#usabilityRemarks')">Volgende</a>
    </div>
</div>

<script>
    loadEndSentence("#situation", "#pressure", "#factors", "#instrumental", "#terminal");
    loadValuation('#coverageGrade', '#coverageRemarks', '#usabilityGrade', '#usabilityRemarks');
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>