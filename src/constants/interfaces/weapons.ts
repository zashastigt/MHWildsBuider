export interface GreatSword {
    [key: string]: BasicWeapon
}

export interface LongSword {
    [key: string]: BasicWeapon
}

export interface SwordShield {
    [key: string]: BasicWeapon
}

export interface DualBlades {
    [key: string]: BasicWeapon
}

interface BasicWeapon {
    rawAttack: number,
    affinity: number,
    element: string | null,
    elementalAttack: number | null,
    status: string | null,
    statusAttack: number | null,
    sharpness: string,
    slots: number[],
    defense: number,
    skills: Skill[]
}

interface Skill {
    name: string,
    level: number
}