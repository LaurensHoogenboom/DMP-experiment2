<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Stress versus emotie.</h1>
    <p>
        Stress is geen emotie. Stress heeft wel invloed op je emoties.
        Deze emoties hebben als functie, dat ze ons helpen bij het bepalen hoe we met iets om moeten gaan.
    </p>
    <p>
        <i>
            &quot;
            <span id="moment-description"></span>
            &quot;
        </i>
    </p>
</div>

<div class="content">
    <form>
        <label class="form-status hidden"></label>

        <label>Hoe voelde je vooral in dit moment?</label>
        <select id="emotion">
            <option selected disabled hidden>Kies een emotie</option>
            <option value="happy">Blij</option>
            <option value="angry">Boos</option>
            <option value="affraid">Bang</option>
            <option value="sad">Bedroefd</option>
        </select>

        <label>Hoe intens was deze emotie ongeveer?</label>
        <div class="range-wrapper">
            <label>1</label>
            <input id="emotionIntensity" type="range" min="1" max="10" value="1">
            <label>10</label>
            <i class="range-description">(1 = niet aanwezig, 10 = enorm aanwezig)</i>
        </div>
    </form>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/moment/moment.php">Vorige</a>
    </div>

    <div class="middle">

    </div>

    <div class="right">
        <a class="button big" href="/experience/moment/emotion.php"
            onclick="return saveMomentEmotion('#emotion', '#emotionIntensity')">Volgende</a>
    </div>
</div>

<script>
    getMomentDescription("text", "#moment-description");
    getMomentEmotion('#emotion', '#emotionIntensity');
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>