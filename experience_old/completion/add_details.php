<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/header.php"; 
?>

<div class="description">
    <h1>Ervaringen</h1>
    <p>
        Momenten ervaar je. Een ervaring bestaat uit wat er gebeurde, je dacht, je voelde en deed. Aangezien dit gaat om
        momenten waarin jij op je best was, zegt dit wat over jouw persoonlijke kracht of vaardigheden.
    </p>
</div>

<div class="content">
    <form class="item-form">
        <div class="item">
            <h2>Moment <span id="experience-index"></span> van <span id="experience-count"></span></h2>

            <p id="experience-description">moment beschrijving</p>

            <label class="form-status hidden"></label>

            <label>Wat was jouw rol in dit moment? *</label>
            <textarea id="experience-action" required></textarea>

            <label>Wat dacht je tijdens dit moment? *</label>
            <textarea id="experience-thought" required></textarea>

            <label>Hoe voelde je? *</label>
            <textarea id="experience-feeling" required></textarea>

            <label>Hoe eindigde het?</label>
            <textarea id="experience-ending"></textarea>
        </div>
        <label>* verplicht veld</label>
    </form>
</div>

<div class="actions">
    <div class="left">
        <a class="button big" href="/experience/completion/intro.php" for="submit_experience_form" onclick="return previousExperience()">Vorige</a>
    </div>

    <div class="middle">

    </div>

    <div class="right">
        <a class="button big" href="/personal_strengths/intro.php" for="submit_experience_form" onclick="return nextExperience()">Volgende</a>
    </div>
</div>

<script>
    getCurrentExperience();
</script>

<?php 
    include $_SERVER['DOCUMENT_ROOT'] . "/src/php/footer.php"; 
?>