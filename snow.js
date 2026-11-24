
(() => {

    // ==============================
    // CONFIGURATION
    // ==============================

    const config = {
        snowflakeCount: 100,
        snowflakeColor: "#ffffff",

        minSize: 1,
        maxSize: 3,

        minSpeed: 1.5,
        maxSpeed: 3.5,

        opacity: 1,

        enableWind: true,
        windStrength: 4,

        blurEffect: true,
        blurAmount: 0.5
    };


    // ==============================
    // CONTENEUR
    // ==============================

    const snowContainer = document.createElement("div");

    snowContainer.id = "falling-snow-container";

    document.body.appendChild(snowContainer);


    // ==============================
    // CREATION DES FLOCONS
    // ==============================

    function createSnowflake() {

        const snowflake = document.createElement("div");

        const size =
            Math.random() * (config.maxSize - config.minSize)
            + config.minSize;

        const positionX = Math.random() * 100;

        const duration =
            Math.random() * (config.maxSpeed - config.minSpeed)
            + config.minSpeed;

        const wind =
            config.enableWind
                ? (Math.random() - 0.5) * config.windStrength * 100
                : 0;

        const delay = Math.random() * -duration;


        // ==============================
        // STYLE DU FLOCON
        // ==============================

        snowflake.classList.add("snowflake");

        snowflake.style.left = positionX + "vw";

        snowflake.style.width = size + "px";

        snowflake.style.height = size + "px";

        snowflake.style.backgroundColor = config.snowflakeColor;

        snowflake.style.opacity = config.opacity;

        snowflake.style.animationDuration = duration + "s";

        snowflake.style.animationDelay = delay + "s";

        snowflake.style.setProperty("--wind", wind + "px");


        if (config.blurEffect) {

            snowflake.style.filter =
                `blur(${config.blurAmount}px)`;

        }


        return snowflake;

    }


    // ==============================
    // GENERATION
    // ==============================

    for (let i = 0; i < config.snowflakeCount; i++) {

        snowContainer.appendChild(createSnowflake());

    }


    // ==============================
    // SUPPRESSION DE LA NEIGE
    // ==============================

    window.removeSnow = function () {

        snowContainer.remove();

    };


})();
