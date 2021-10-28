//pressure
const pressureTypes = ["time","emotion","archievement","responsibility","adjustment","political"];

//concequences
const concequenceTypes = [
    {
        name: "physical",
        displayName: "lichamelijk",
        description: "Deze situatie had gevolgen voor mijn gezondheid, veiligheid of zekerheid."
    },
    {
        name: "emotional",
        displayName: "emotioneel",
        description: "Deze situatie had gevolgen voor mijn sociale contacten, of had invloed op mijn waardering of erkenning door mensen om mij heen."
    },
    {
        name: "cognitive",
        displayName: "cognitief",
        description: "Deze situatie had gevolgen voor erkenning en waardering door mensen om mij heen, of op mijn doelen of uitdagingen."
    },
    {
        name: "fullfillment",
        displayName: "zingeving",
        description: "Deze situatie had gevolgen voor in hoeverre ik kon streven naar de dingen die ik belangrijk vind."
    }
]

//needs

const needTypes = [
    {
        name: "physiological",
        displayName: "lichamelijk",
        concequenceTypes: ["physical"],
        description: "Eten, slaap, ontspanning, plezier, kleding."
    },
    {
        name: "safety-and-certainty",
        displayName: "veiligheid en zekerheid",
        concequenceTypes: ["physical"],
        description: "Veiligheid, zekerheid, orde, stabiliteit"
    },
    {
        name: "social-interaction",
        displayName: "sociale contacten",
        concequenceTypes: ["emotional"],
        description: "Liefde, erbij horen, genegenheid, familie en vrienden."
    },
    {
        name: "recognition-and-appreciation",
        displayName: "erkenning en waardering",
        concequenceTypes: ["emotional", "cognitive"],
        description: "Status, prestige, succes, zelfwaardering, respect voor anderen, jezelf en je omgeving."
    },
    {
        name: "self-actualization",
        displayName: "najagen van dromen en doelen, en/of zingeving",
        concequenceTypes: ["cognitive", "fullfillment"],
        description: "Studie, werk, doelen, ethish handelen, problemen oplossen, jezelf zijn"
    },
]

// value domains

const valueDomainTypes = [
    {
        name: "pleassure",
        needTypes: ["physiological"]
    },
    {
        name: "safety",
        needTypes: ["physiological", "safety-and-certainty"]
    },
    {
        name: "social-influence",
        needTypes: ["social-interaction", "safety-and-certainty"]
    },
    {
        name: "pro-social",
        needTypes: ["social-interaction"]
    },
    {
        name: "restrictive-conformism",
        needTypes: ["social-interaction", "recognition-and-appreciation"]
    },
    {
        name: "prestige",
        needTypes: ["recognition-and-appreciation", "self-actualization"]
    },
    {
        name: "self-determination",
        needTypes: ["self-actualization"]
    },
    {
        name: "maturation",
        needTypes: ["self-actualization"]
    }
]

// values

const values = [
    {
        name: "pleasure",
        displayName: "plezier",
        valueDomainTypes: ["pleassure"],
        type: "terminal"
    },
    {
        name: "comfort",
        displayName: "comfort",
        valueDomainTypes: ["pleassure"],
        type: "terminal"
    },
    {
        name: "inner-harmony",
        displayName: "innerlijke rust of harmonie",
        valueDomainTypes: ["safety"],
        type: "terminal"
    },
    {
        name: "social-security",
        displayName: "geborgenheid",
        valueDomainTypes: ["safety"],
        type: "terminal"
    },
    {
        name: "national-security",
        displayName: "landelijke veiligheid",
        valueDomainTypes: ["safety"],
        type: "terminal"
    },
    {
        name: "world-at-security",
        displayName: "wereldvrede",
        valueDomainTypes: ["safety"],
        type: "terminal"
    },
    {
        name: "self-determination",
        displayName: "zelfbeschikking",
        valueDomainTypes: ["social-influence"],
        type: "terminal"
    },
    {
        name: "equality",
        displayName: "gelijkheid",
        valueDomainTypes: ["social-influence", "pro-social"],
        type: "terminal"
    },
    {
        name: "justice",
        displayName: "rechtvaardigheid",
        valueDomainTypes: ["social-influence"],
        type: "terminal"
    },
    {
        name: "helpfulness",
        displayName: "hulpvaardigheid",
        valueDomainTypes: ["pro-social"],
        type: "instrumental"
    },
    {
        name: "forgiving",
        displayName: "vergevingsgezindheid",
        valueDomainTypes: ["pro-social"],
        type: "instrumental"
    },
    {
        name: "loving",
        displayName: "liefhebbend",
        valueDomainTypes: ["pro-social"],
        type: "instrumental"
    },
    {
        name: "obedient",
        displayName: "gehoorzaamheid",
        valueDomainTypes: ["restrictive-conformism"],
        type: "instrumental"
    },
    {
        name: "polite",
        displayName: "beleefdheid",
        valueDomainTypes: ["restrictive-conformism"],
        type: "instrumental"
    },
    {
        name: "clean",
        displayName: "netheid of schoon zijn",
        valueDomainTypes: ["restrictive-conformism"],
        type: "instrumental"
    },
    {
        name: "self-control",
        displayName: "zelfbeheersing",
        valueDomainTypes: ["restrictive-conformism"],
        type: "instrumental"
    },
    {
        name: "capability",
        displayName: "vaardigheid",
        valueDomainTypes: ["prestige"],
        type: "instrumental"
    },
    {
        name: "ambition",
        displayName: "ambitie",
        valueDomainTypes: ["prestige"],
        type: "instrumental"
    },
    {
        name: "recognition",
        displayName: "sociale erkenning",
        valueDomainTypes: ["prestige"],
        type: "terminal"
    },
    {
        name: "imagination",
        displayName: "verbeeldingskracht",
        valueDomainTypes: ["self-determination"],
        type: "instrumental"
    },
    {
        name: "independent",
        displayName: "onafhankelijkheid",
        valueDomainTypes: ["self-determination"],
        type: "instrumental"
    },
    {
        name: "intellectual",
        displayName: "intellect",
        valueDomainTypes: ["self-determination"],
        type: "intstrumental"
    },
    {
        name: "logical-thinking",
        displayName: "logisch denken",
        valueDomainTypes: ["self-determination"],
        type: "instrumental"
    },
    {
        name: "broadminded",
        displayName: "verdraagzaamheid",
        valueDomainTypes: ["maturation"],
        type: "instrumental"
    },
    {
        name: "mature-love",
        displayName: "volwassen liefde",
        valueDomainTypes: ["maturation"],
        type: "terminal"
    },
    {
        name: "wisdom",
        displayName: "wijsheid",
        valueDomainTypes: ["maturation"],
        type: "terminal"
    },
    {
        name: "world-of-beauty",
        displayName: "Wereld-vol-schoonheid",
        valueDomainTypes: ["maturation"],
        type: "terminal"
    },
    {
        name: "brave",
        displayName: "moedig",
        valueDomainTypes: ["maturation"],
        type: "terminal"
    },
]


