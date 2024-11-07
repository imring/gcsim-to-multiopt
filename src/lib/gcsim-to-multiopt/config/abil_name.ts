export default {
    "Normal 0": ["normal", "0"],
    "Normal 1": ["normal", "1"],
    "Normal 2": ["normal", "2"],
    "Normal 3": ["normal", "3"],

    // reactions
    "bloom": ["reaction", "bloom"],

    // chiori
    "Fluttering Hasode (Upward Sweep)": ["skill", "sweepDmg"],
    "Fluttering Hasode (Tamato - Construct)": ["skill", "turretDmg"],
    "Fluttering Hasode (Tamato)": ["skill", "turretDmg"],
    "Hiyoku: Twin Blades": ["burst", "bloomDmg"],
    "Fluttering Hasode (Seize the Moment)": ["passive1", "dollDmg"],
    "Fluttering Hasode (Kinu)": ["constellation2", "dollDmg"],

    // kokomi
    "Bake-Kurage": ["skill", "dmg"],
    "Nereid's Ascension": ["burst", "dmg"],
    "At Water's Edge (C1)": ["constellation1", "dmg"],

    // nilou
    "Water Wheel": ["skill", "wheelDmg"],
    "Sword Dance 0": ["skill", "dance1Dmg"],
    "Sword Dance 1": ["skill", "dance2Dmg"],
    "Dance of Haftkarsvar": ["skill", "skillDmg"],
    "Lingering Aeon": ["burst", "aeonDmg"],
    "Dance of Abzendegi: Distant Dreams, Listening Spring": ["burst", "skillDmg"],

    // ayaka
    "Charge": ["charged", "dmg1"],
    "Hyouka": ["skill", "press"],
    "C2 Mini-Frostflake Seki no To (Bloom)": ["constellation2", "bloom"],
    "Soumetsu (Bloom)": ["burst", "bloom"],
    "C2 Mini-Frostflake Seki no To (Cutting)": ["constellation2", "dmg"],
    "Soumetsu (Cutting)": ["burst", "cutting"],

    // artifacts
    "Sea-Dyed Foam": ["artifact:OceanHuedClam", "heal"],
} as Record<string, string[]>;