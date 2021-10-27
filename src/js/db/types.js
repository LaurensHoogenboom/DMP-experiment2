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
        concequenceTypes: ["physical"]
    },
    {
        name: "safety-and-certainty",
        displayName: "veiligheid en zekerheid",
        concequenceTypes: ["physical"]
    },
    {
        name: "social-interaction",
        displayName: "sociale contacten",
        concequenceTypes: ["emotional"]
    },
    {
        name: "recognition-and-appreciation",
        displayName: "erkenning en waardering",
        concequenceTypes: ["emotional", "cognitive"]
    },
    {
        name: "self-actualization",
        displayName: "najagen van dromen en doelen, zingeving",
        concequenceTypes: ["cognitive", "fullfillment"]
    },
]


