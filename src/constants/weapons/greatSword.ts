interface GreatSwords {
    [key: string]: GreatSword
}

interface GreatSword {
    rawAttack: number,
    affinity: number,
    element: string | null,
    elementalAttack: number | null,
    status: string | null,
    statusAttack: number | null,
    sharpness: string,
    slots: number[],
    defense: number,
    skills: Skills[]
}

interface Skills {
    name: string,
    level: number
}

export const greatSwords: GreatSwords = {
    "Esperanza Blade": {
        rawAttack: 210,
        affinity: 0,
        element: null,
        elementalAttack: null,
        status: null,
        statusAttack: null,
        sharpness: "white",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Protective Polish",
                level: 2
            },
            {
                name: "Focus",
                level: 2
            }
        ]
    },
    "Whitefire Rathguard": {
        rawAttack: 210,
        affinity: 15,
        element: "fire",
        elementalAttack: 400,
        status: null,
        statusAttack: null,
        sharpness: "white",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Critical Element",
                level: 1
            },
            {
                name: "'Master's Touch",
                level: 1
            }
        ]
    },
    "Ravager Blade": {
        rawAttack: 220,
        affinity: 0,
        element: null,
        elementalAttack: null,
        status: null,
        statusAttack: null,
        sharpness: "white",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Critcal Draw",
                level: 3
            }
        ]
    },
    "Precipice Metallam": {
        rawAttack: 210,
        affinity: 0,
        element: "ice",
        elementalAttack: 600,
        status: null,
        statusAttack: null,
        sharpness: "white",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Focus",
                level: 3
            }
        ]
    },
    "Firetrail Bladedell": {
        rawAttack: 240,
        affinity: 5,
        element: "fire",
        elementalAttack: 300,
        status: null,
        statusAttack: null,
        sharpness: "blue",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Punishing Draw",
                level: 3
            }
        ]
    },
    "Destrucive Torpor": {
        rawAttack: 200,
        affinity: 0,
        element: null,
        elementalAttack: null,
        status: "paralysis",
        statusAttack: 500,
        sharpness: "blue",
        slots: [3, 3, 1],
        defense: 0,
        skills: [
            {
                name: "Speed Sharpening",
                level: 2
            }
        ]
    },
    "Bone Slasher": {
        rawAttack: 230,
        affinity: 0,
        element: null,
        elementalAttack: null,
        status: null,
        statusAttack: null,
        sharpness: "blue",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Focus",
                level: 3
            },
            {
                name: "Attack Boost",
                level: 1
            }
        ]
    },
    "Abaddonian Krake": {
        rawAttack: 230,
        affinity: -15,
        element: "fire",
        elementalAttack: 400,
        status: null,
        statusAttack: null,
        sharpness: "white",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Protective Polish",
                level: 3
            },
            {
                name: "Speed Sharpening",
                level: 2
            }
        ]
    },
    "Immolator Blade": {
        rawAttack: 200,
        affinity: 15,
        element: null,
        elementalAttack: null,
        status: "sleep",
        statusAttack: 400,
        sharpness: "white",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Offensive Guard",
                level: 2
            },
            {
                name: "Guard",
                level: 1
            }
        ]
    },
    "Prinvrilo's Dessolution": {
        rawAttack: 220,
        affinity: 0,
        element: "water",
        elementalAttack: 300,
        status: null,
        statusAttack: null,
        sharpness: "white",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Critical Draw",
                level: 3
            }
        ]
    },
    "Fellslayer Dangeom": {
        rawAttack: 1152,
        affinity: -10,
        element: null,
        elementalAttack: null,
        status: null,
        statusAttack: null,
        sharpness: "blue",
        slots: [3, 2, 1],
        defense: 20,
        skills: [
            {
                name: "Punishing Draw",
                level: 3
            }
        ]
    },
    "G. Stalwart Lamorak": {
        rawAttack: 240,
        affinity: -10,
        element: "dragon",
        elementalAttack: 300,
        status: null,
        statusAttack: null,
        sharpness: "blue",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Focus",
                level: 2
            }
        ]
    },
    "Stalwart Lamorak": {
        rawAttack: 220,
        affinity: 0,
        element: "dragon",
        elementalAttack: 500,
        status: null,
        statusAttack: null,
        sharpness: "white",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Focus",
                level: 3
            }
        ]
    },
    "Grimslayer Urgeon": {
        rawAttack: 250,
        affinity: -20,
        element: null,
        elementalAttack: null,
        status: null,
        statusAttack: null,
        sharpness: "blue",
        slots: [3, 3, 1],
        defense: 0,
        skills: [
            {
                name: "Focus",
                level: 2
            }
        ]
    },
    "Rooster Decapitator": {
        rawAttack: 220,
        affinity: 0,
        element: "fire",
        elementalAttack: 600,
        status: null,
        statusAttack: null,
        sharpness: "blue",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Charge Master",
                level: 2
            },
            {
                name: "Focus",
                level: 2
            }
        ]
    },
    "Fulgurcleaver Guardiana": {
        rawAttack: 210,
        affinity: 15,
        element: 'thunder',
        elementalAttack: 500,
        status: null,
        statusAttack: null,
        sharpness: "blue",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Critical Element",
                level: 3
            }
        ]
    },
    "Poison King": {
        rawAttack: 230,
        affinity: 0,
        element: null,
        elementalAttack: null,
        status: "poison",
        statusAttack: 500,
        sharpness: "blue",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Critical Draw",
                level: 2
            },
            {
                name: "Punishing Draw",
                level: 2
            }
        ]
    },
    "Sieglinde": {
        rawAttack: 210,
        affinity: 15,
        element: null,
        elementalAttack: null,
        status: "poison",
        statusAttack: 300,
        sharpness: "white",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Critical Status",
                level: 3
            },
            {
                name: "Poison Duration Up",
                level: 1
            }
        ]
    },
    "Rathalos Firesword": {
        rawAttack: 200,
        affinity: 10,
        element: "fire",
        elementalAttack: 500,
        status: null,
        statusAttack: null,
        sharpness: "white",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Critical Boost",
                level: 3
            }
        ]
    },
    "Dusterstolz": {
        rawAttack: 210,
        affinity: 20,
        element: "dragon",
        elementalAttack: 400,
        status: null,
        statusAttack: null,
        sharpness: "white",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Critical Element",
                level: 3
            }
        ]
    },
    "Freezer Speartuna": {
        rawAttack: 220,
        affinity: 0,
        element: "ice",
        elementalAttack: 700,
        status: null,
        statusAttack: null,
        sharpness: "blue",
        slots: [3, 2, 0],
        defense: 0,
        skills: [
            {
                name: "Punishing Draw",
                level: 3
            },
            {
                name: "Slugger",
                level: 2
            }
        ]
    },
    "Giant Jawblade": {
        rawAttack: 240,
        affinity: 0,
        element: null,
        elementalAttack: null,
        status: null,
        statusAttack: null,
        sharpness: "blue",
        slots: [3, 2, 1],
        defense: 0,
        skills: [
            {
                name: "Protective Polish",
                level: 2
            },
            {
                name: "Focus",
                level: 2
            }
        ]
    },
}