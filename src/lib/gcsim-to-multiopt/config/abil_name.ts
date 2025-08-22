export type AbilsType = Record<string, string[]>;

const defaultAbils: AbilsType = {

    // melee
    "Normal 0": ["normal", "0"],
    "Normal 1": ["normal", "1"],
    "Normal 2": ["normal", "2"],
    "Normal 3": ["normal", "3"],
    "Normal 4": ["normal", "4"],
    "Charge": ["charged", "dmg"],
    "Charge Attack": ["charged", "dmg"],
    "Charge 0": ["charged", "dmg"],    
    "Charge 1": ["charged", "dmg"],
    "Charge 2": ["charged", "dmg"],
    "Charge 3": ["charged", "dmg"],
    "Plunge Collision": ["plunging","dmg"],
    "Low Plunge": ["plunging","low"],
    "High Plunge": ["plunging","high"],
    
    // bow
    "Aimed Shot": ["charged","aimed"],
    "Fully-Charged Aimed Shot": ["charged","aimedCharged"],

    // reactions
    "burning": ["reaction", "burning"],
    "bloom": ["reaction", "bloom"],
    "hyperbloom": ["reaction", "hyperbloom"],
    "burgeon": ["reaction", "burgeon"],
    "overload": ["reaction", "overloaded"],
    "electrocharged": ["reaction", "electrocharged"],
    "swirl-pyro": ["reaction","pyroSwirl"],
    "swirl-hydro": ["reaction","hydroSwirl"],
    "swirl-electro": ["reaction","electroSwirl"],
    "swirl-cryo": ["reaction","cryoSwirl"],
    "superconduct": ["reaction", "superconduct"],
    "shatter":["reaction","shattered"],
    // artifacts
    "Sea-Dyed Foam": ["artifact:OceanHuedClam", "heal"],
};

const characterAbils: Record<string, AbilsType> = {
    chiori: {
        "Fluttering Hasode (Upward Sweep)": ["skill", "sweepDmg"],
        "Fluttering Hasode (Tamato - Construct)": ["skill", "turretDmg"],
        "Fluttering Hasode (Tamato)": ["skill", "turretDmg"],
        "Hiyoku: Twin Blades": ["burst", "bloomDmg"],
        "Fluttering Hasode (Seize the Moment)": ["passive1", "dollDmg"],
        "Fluttering Hasode (Kinu)": ["constellation2", "dollDmg"],
    },

    kokomi: {
        "Bake-Kurage": ["skill", "dmg"],
        "Nereid's Ascension": ["burst", "dmg"],
        "At Water's Edge (C1)": ["constellation1", "dmg"],
    },

    nilou: {
        "Water Wheel": ["skill", "wheelDmg"],
        "Sword Dance 0": ["skill", "dance1Dmg"],
        "Sword Dance 1": ["skill", "dance2Dmg"],
        "Dance of Haftkarsvar": ["skill", "skillDmg"],
        "Lingering Aeon": ["burst", "aeonDmg"],
        "Dance of Abzendegi: Distant Dreams, Listening Spring": ["burst", "skillDmg"],
    },

    ayaka: {
        "Charge": ["charged", "dmg1"],
        "Hyouka": ["skill", "press"],
        "C2 Mini-Frostflake Seki no To (Bloom)": ["constellation2", "bloom"],
        "Soumetsu (Bloom)": ["burst", "bloom"],
        "C2 Mini-Frostflake Seki no To (Cutting)": ["constellation2", "dmg"],
        "Soumetsu (Cutting)": ["burst", "cutting"],
    },

    neuvillette: {
        "Charged Attack: Equitable Judgment": ["charged", "judgmentDmg"],
        "O Tides, I Have Returned: Waterfall DMG": ["burst", "waterfallDmg"],
        "O Tides, I Have Returned: Skill DMG": ["burst", "skillDmg"],
        "Spiritbreath Thorn (Neuvillette)": ["skill", "thornDmg"],
        "O Tears, I Shall Repay": ["skill", "skillDmg"],
    },

    hutao: {
        "Blood Blossom": ["skill", "dmg"],
        // sim doesn't have different names for <50% hp and >50% hp hu tao bursts
        "Spirit Soother": ["burst", "dmg"],
    },

    mavuika: {
        "Flamestrider Charged Attack (Cyclic)":["skill", "chargedCyclicDmg"],
        "Flamestrider Sprint":["skill", "sprintDmg"],
        "Flamestrider Charged Attack (Final)":["skill","chargedFinalDmg"],
        "Flamestrider Normal 0":["skill","normal1Dmg"],
        "Flamestrider Normal 1":["skill","normal2Dmg"],
        "Flamestrider Normal 2":["skill","normal3Dmg"],
        "Flamestrider Normal 3":["skill","normal4Dmg"],
        "Flamestrider Normal 4":["skill","normal5Dmg"],
        "Flamestrider Plunge":["skill","plungeDmg"],
        "Rings of Searing Radiance":["skill", "radianceDmg"],
        "The Named Moment":["skill", "skillDmg"],
        "The Named Moment (Flamestrider)":["skill", "skillDmg"],
        "Sunfell Slice":["burst", "skillDmg"],
    },

    fischl: {
        "Oz (Summon)":["skill", "summonDmg"],
        "Oz (Skill)":["skill", "ozDmg"],
        "Oz (Burst)":["skill", "ozDmg"],
        "Fischl A4":["passive2", "dmg"],
        "Fischl C1":["constellation1","dmg"],
        "Fischl C6":["constellation6","ozActiveCharDmg"],
        "Midnight Phantasmagoria":["burst", "dmg"],
        "Her Pilgrimage of Bleak (C4)":["constellation4","burstAdditionalDmg"],
    },

    alhaitham: {
        "Universality: An Elaboration on Form (Hold)":["skill","rushDmg"],
        "Universality: An Elaboration on Form (Press)":["skill","rushDmg"],
        "Particular Field: Fetters of Phenomena":["burst","instanceDmg"],
        "Chisel-Light Mirror: Projection Attack 1":["skill","mirrorDmg1"],
        "Chisel-Light Mirror: Projection Attack 2":["skill","mirrorDmg1"],
        "Chisel-Light Mirror: Projection Attack 3":["skill","mirrorDmg1"],
    },

    albedo: {
        "Rite of Progeniture: Tectonic Tide":["burst", "dmg"],
        "Rite of Progeniture: Tectonic Tide (Blossom)":["burst", "blossom"],
        "Abiogenesis: Solar Isotoma":["skill","dmg"],
        "Abiogenesis: Solar Isotoma (Tick)":["skill","blossom"],
    },

    amber: {
        "Baron Bunny":["skill", "dmg"],
        "Baron Bunny (Manual Explosion)":["constellation2","manualDetonationDmg"],
        "Fiery Rain":["burst","dmgPerWave"],
    },

    skirk: {
        "Normal (Skill) 0":["skill","0"],
        "Normal (Skill) 1":["skill","1"],
        "Normal (Skill) 2":["skill","2"],
        "Normal (Skill) 3":["skill","3"],
        "Normal (Skill) 4":["skill","4"],
        "Charge (Skill) 0":["skill","chargedDmg"],
        "Charge (Skill) 1":["skill","chargedDmg"],
        "Charge (Skill) 2":["skill","chargedDmg"],
        "Havoc: Ruin (DoT)":["burst","skillDmg"],
        "Havoc: Ruin (Final)":["burst","finalDmg"]
    },

    furina: {
        "Salon Member: Surintendante Chevalmarin":["skill","chevalDmg"],
        "Salon Member: Gentilhomme Usher":["skill", "usherDmg"],
        "Salon Member: Mademoiselle Crabaletta":["skill","crabDmg"],
        "Salon Solitaire: Ousia Bubble":["skill","bubbleDmg"],
        "Let the People Rejoice":["burst", "skillDmg"],
    },

    kazuha: {
        "Kazuha Slash (Dot)":["burst","dot"],
        "Kazuha Slash (Absorb Dot)":["burst","absorb"],
        "Kazuha Slash":["burst","dmg"],
        "Kazuha A1":["passive1","absorb"],
        "Chihayaburu":["skill","press"],

        // TODO: add chihayaburu hold
        
    },

    ganyu: {
        "Celestial Shower":["burst","dmg"],
        "Frostflake Arrow Bloom":["charged","frostflakeBloom"],
        "Ice Lotus":["skill","dmg"],
        "Frostflake Arrow":["charged","frostflake"],

        // TODO: add frostflake arrow hold lvl 1
    },

    escoffier: {
        "Frosty Parfait":["skill","parfaitDmg"],
        "Scoring Cuts":["burst","skillDmg"],
        "Surging Blade (Escoffier)":["skill","bladeDmg"],
        "Low-Temperature Cooking":["skill","skillDmg"],
    },

    ayato : {
        "Kamisato Art: Suiyuu":["burst","dmg"],
        "Kamisato Art: Kyouka":["skill","illusionDmg"],
        "Normal 0": ["skill", "dmg1"],
        "Normal 1": ["skill", "dmg2"],
        "Normal 2": ["skill", "dmg3"],

        // TODO: distinguish between skill and non skill normal attacks
    },

    yunjin: {
        "Opening Flourish Press (E)":["skill","dmg"],
        "Opening Flourish Level 1 (E)":["skill","dmg1"],
        "Opening Flourish Level 2 (E)":["skill","dmg2"],
        "Cliffbreaker's Banner":["burst","dmg"],
    },

    xilonen: {
        "Blade Roller 0":["normal","ns0"],
        "Blade Roller 1":["normal","ns1"],
        "Blade Roller 2":["normal","ns2"],
        "Blade Roller 3":["normal","ns3"],
        "Yohual's Scratch":["skill","rushDmg"],
        "Ocelotlicue Point!":["burst","skillDmg"],
    },

    kaeya: {
        "Charge 0":["charged","dmg1"],
        "Charge 1":["charged","dmg2"],
        "Frostgnaw":["skill","dmg"],
        "Glacial Waltz":["burst","dmg"],
    },

    chongyun: {
        "Spirit Blade: Chonghua's Layered Frost":["skill","dmg"],
        "Spirit Blade: Chonghua's Layered Frost (A4)":["passive2","dmg"],
        "Spirit Blade: Cloud-Parting Star":["burst","dmg"],
        "Chongyun C1":["constellation1","dmg"],
    },

    shenhe: {
        "Spring Spirit Summoning (Press)":["skill","press"],
        "Spring Spirit Summoning (Hold)":["skill","hold"],
        "Divine Maiden's Deliverance (Initial)":["burst","dmg"],
        "Divine Maiden's Deliverance (DoT)":["burst","dot"],
    },

    xiao: {
        "Lemniscatic Wind Cycling":["skill","press"],
    },

    faruzan: {
        "Pressurized Collapse":["skill","vortexDmg"],
        "Wind Realm of Nasamjnin (E)":["skill","skillDmg"],
        "The Wind's Secret Ways (Q)":["burst","dmg"],
    },

    rosaria: {
        "Rites of Termination (DoT)":["burst","dotDmg"],
        "Rites of Termination (Hit 1)":["burst","hit1"],
        "Rites of Termination (Hit 2)":["burst","hit2"],
        "Ravaging Confession (Hit 1)":["skill","hit1"],
        "Ravaging Confession (Hit 2)":["skill","hit2"],
    },

    xianyun: {
        "Skyladder":["skill","trailDmg"],
        "Driftcloud Wave (1 Leaps)":["skill","firstLeapDmg"],
        "Driftcloud Wave (2 Leaps)":["skill","secondLeapDmg"],
        "Driftcloud Wave (3 Leaps)":["skill","thirdLeapDmg"],
        "Stars Gather at Dusk (Initial)":["burst","instantDmg"],
        "Starwicker":["burst","coordinatedDmg"],
    },

    yoimiya: {
        "Aurous Blaze":["burst","dmg"],
        "Aurous Blaze (Explode)":["burst","exp"],
    },

    emilie: {
        "Lumidouce Case (Summon)":["skill","skillDmg"],
        "Lumidouce Case (Level 1)":["skill","level1Dmg"],
        "Lumidouce Case (Level 2)":["skill","level2Dmg"],
        "Lumidouce Case (Level 3)":["burst","level3Dmg"],
        "Spiritbreath Thorn":["skill","thornDmg"],
        "Cleardew Cologne (A1)":["passive1","dmg"],
    },

    lanyan: {
        "Feathermoon Ring (C1)":["skill", "ringDmg"],
        "Feathermoon Ring (C1) (pyro)":["passive1","pyro"],
        "Feathermoon Ring (C1) (hydro)":["passive1","hydro"],
        "Feathermoon Ring (C1) (electro)":["passive1","electro"],
        "Feathermoon Ring (C1) (cryo)":["passive1","cryo"],
        "Feathermoon Ring":["skill", "ringDmg"],
        "Feathermoon Ring (pyro)":["passive1","pyro"],
        "Feathermoon Ring (hydro)":["passive1","hydro"],
        "Feathermoon Ring (electro)":["passive1","electro"],
        "Feathermoon Ring (cryo)":["passive1","cryo"],
        "Swallow-Wisp Pinion Dance: Detect":["burst","dmg"],
    },

    bennett: {
        "Passion Overload (Press)":["skill","press"],
        "Passion Overload (Level 1)":["skill","hold1_1"],
        "Passion Overload (Level 2)":["skill","hold2_1"],
        "Passion Overload (C4)": ["constellation4","dmg"],

        //TODO: add Passion Overload (Level 2) Explosion

        "Fantastic Voyage":["burst","dmg"],
    },

    gaming: {
        "Charmed Cloudstrider":["skill","cloudstriderDmg"],
        "Suanni's Gilded Dance (Q)":["burst","smashDmg"],
    },

    citlali: {
        "Frostfall Storm DMG":["skill","frostfallStormDmg"],
        "Spiritvessel Skull DMG":["burst","skullDmg"],
        "Ice Storm DMG":["burst","iceStormDmg"],
        "Obsidian Tzitzimitl DMG":["skill","obsidianDmg"],
    },

    chevreuse: {
        "Secondary Explosive Shell":["burst","shellDmg"],
        "Explosive Grenade":["burst","grenadeDmg"],
        "Sniper Induced Explosion (C2)":["constellation2","dmg"],
        "Surging Blade (Chevreuse)":["skill","bladeDmg"],
        "Short-Range Rapid Interdiction Fire [Hold]":["skill","holdDmg"],
        "Short-Range Rapid Interdiction Fire [Press]":["skill","pressDmg"],
        "Short-Range Rapid Interdiction Fire [Overcharged]":["skill","ballDmg"],
    },

    diona: {
        "Signature Mix (Tick)":["burst","fieldDmg"],
        "Signature Mix (Initial)":["burst","skillDmg"],
        "Icy Paw":["skill","skillDmg"],
    },

    nahida: {
        "All Schemes to Know (Press)":["skill","pressDmg"],
        "All Schemes to Know (Hold)":["skill","holdDmg"],
        "Trikarma Purification":["skill","karmaDmg"],    
    },

    raiden: {
        "Eye of Stormy Judgement":["skill","dmg"],
        "Eye of Stormy Judgement (Strike)":["skill","coorDmg"],
        "Musou Isshin 0":["burst","hit1"],
        "Musou Isshin 1":["burst","hit2"],
        "Musou Isshin 2":["burst","hit3"],
        "Musou Isshin 3":["burst","hit41"],
        "Musou Isshin 4":["burst","hit5"],
        "Musou Isshin (Charged Attack)":["burst","charged1"],
        "Musou Shinsetsu":["burst","dmg"],

        
        //TODO : add 2nd hit of musou isshin charged attack and musou isshin 4th hit
    },

    thoma: {
        "Fiery Collapse":["burst","collapseDmg"],
        "Crimson Ooyoroi":["burst","pressDmg"],
        "Blazing Blessing":["skill","dmg"],
    },

    mualani: {
        "Sharky's Surging Bite":["skill","surgingDmg"],
        "Boomsharka-laka":["burst","dmg"],
    },

    candace: {
        "Sacred Rite: Heron's Sanctum (E)":["skill","basicDmg"],
        "Sacred Rite: Heron's Sanctum Charged Up (E)":["skill","chargedDmg"],
        "The Overflow (C6)":["constellation6","dmg"],
        "Sacred Rite: Wagtail's Tide (Wave)":["burst","waveDmg"],
        "Sacred Rite: Wagtail's Tide (Q)":["burst","skillDmg"],
    },

    sucrose: {
        "Astable Anemohypostasis Creation-6308":["skill","press"],
        "Forbidden Creation-Isomer 75/Type II":["burst","dot"],
        "Forbidden Creation-Isomer 75/Type II (Absorb)":["burst","hydro"],

        //TODO: distinguish between absorbed elements
    },

    xiangling: {
        "Guoba":["skill","press"],
        "Pyronado":["burst","dmgNado"],
        "Pyronado Hit 3":["burst","dmg3"],
        "Pyronado Hit 2":["burst","dmg2"],
        "Pyronado Hit 1":["burst","dmg1"],
        "Oil Meets Fire (C2)":["constellation2","dmg"],
    },

    collei: {
        "Floral Sidewinder (A1)":["passive1","dmg"],
        "Floral Brush":["skill","dmg"],
        "Forest of Falling Arrows (C6)":["constellation6","dmg"],
        "Trump-Card Kitty (Leap)":["burst","leapDmg"],
        "Trump-Card Kitty (Explosion)":["burst","explosionDmg"],
    },

    kuki: {
        "Grass Ring of Sanctification":["skill","ringDmg"],
        "Thundergrass Mark":["constellation4","markDmg"],
        "Gyoei Narukami Kariyama Rite":["burst","singleDmg"],
        "Sanctifying Ring":["skill","pressDmg"],
    },

    xingqiu: {
        "Guhua Sword: Raincutter":["burst","dmg"],
        "Guhua Sword: Fatal Rainscreen":["skill","press1"],

        //TODO: distinguish between two hits of Xingqiu's skill
    },

    kaveh: {
        "Pairidaeza's Dreams (C6)":["constellation6","dmg"],
        "Artistic Ingenuity (E)":["skill","dmg"],
        "Painted Dome (Q)":["burst","dmg"],
    },

    kinich: {
        "Loop Shot 0":["skill","shotDmg"],
        "Scalespiker Cannon":["skill","cannonDmg"],
        "Loop Shot 1":["skill","shotDmg"],
        "Hail to the Almighty Dragonlord (Dragon Breath DMG)":["burst","laserDmg"],
        "Hail to the Almighty Dragonlord (Skill DMG)":["burst","skillDmg"],
    },

    ororon: {
        "Hypersense":["passive1","dmg"],
        "Soundwave Collision DMG":["burst","soundwaveDmg"],
        "Ritual DMG":["burst","activationDmg"],
        "Hypersense (C6)":["constellation6","dmg"],
        "Spirit Orb DMG":["skill","dmg"],
    },

    tighnari: {
        "Secondary Tanglevine Shaft":["burst","secondaryDmg"],
        "Fully-Charged Aimed Shot (Wreath Arrow)":["charged","wreath"],
        "Tanglevine Shaft":["burst","primaryDmg"],
        "Clusterbloom Arrow":["charged","cluster"],
        "Vijnana-Phala Mine":["skill","dmg"],
    },

    kirara: {
        "Tail-Flicking Flying Kick":["skill","tailDmg"],
        "Cat Grass Cardamom Explosion":["burst","explosionDmg"],
        "Steed of Skanda":["constellation4","dmg"],
        "Secret Art: Surprise Dispatch":["burst","skillDmg"],
        "Flipclaw Strike":["skill","strikeDmg"],
        "Urgent Neko Parcel":["skill","parcelDmg"],
    },

    chasca: {
        "Shadowhunt Shell":["skill","shellDmg"],
        "Shining Shadowhunt Shell (hydro)":["skill","shiningShellDmg_hydro"],
        "Shining Shadowhunt Shell (pyro)":["skill","shiningShellDmg_pyro"],
        "Shining Shadowhunt Shell (cryo)":["skill","shiningShellDmg_cryo"],
        "Shining Shadowhunt Shell (electro)":["skill","shiningShellDmg_electro"],
        "Spirit Reins, Shadow Hunt":["skill","activationDmg"],
        "Soulseeker Shell":["burst","shellDmg"],
        "Radiant Soulseeker Shell (hydro)":["burst","radiantDmg_hydro"],
        "Radiant Soulseeker Shell (cryo)":["burst","radiantDmg_cryo"],
        "Radiant Soulseeker Shell (electro)":["burst","radiantDmg_electro"],
        "Radiant Soulseeker Shell (pyro)":["burst","radiantDmg_pyro"],
        "Galesplitting Soulseeker Shell":["burst","galeSplittingDmg"],
        "Burning Shadowhunt Shell":["passive2","anemo"],
        "Burning Shadowhunt Shell (pyro)":["passive2","pyro"],
        "Burning Shadowhunt Shell (hydro)":["passive2","hydro"],
        "Burning Shadowhunt Shell (electro)":["passive2","electro"],
        "Burning Shadowhunt Shell (cryo)":["passive2","cryo"],
    },

    keqing: {
        "Thunderclap Slash":["skill","thunderclap"],
        "Stellar Restoration":["skill","stiletto"],
        "Starward Sword (Last Attack)":["burst","final"],
        "Starward Sword (Consecutive Slash)":["burst","slash"],
        "Stellar Restoration (Slashing)":["skill","slash"],
        "Starward Sword (Initial)":["burst","initial"],
        "Charge 0": ["charged", "dmg1"],
        "Charge 1": ["charged", "dmg2"],
    },

    xinyan: {
        "Sweeping Fervor":["skill","dmg"],
        "Sweeping Fervor (DoT)":["skill","lvl3Dmg"],
        "Riff Revolution":["burst","pressPhysDmg"],
        "Riff Revolution (DoT)":["burst","dotPyroDmg"],
    },

    noelle: {
        "Breastplate (C4)":["constellation4","dmg"],
        "Sweeping Time (Skill)":["burst","skillDmg"],
        "Sweeping Time (Burst)":["burst","burstDmg"],
        "Breastplate":["skill","dmg"],
        "Charge Attack":["charged","spinningDmg"],
        "Charge Attack (Finisher)":["charged","finalDmg"],
    },

    gorou: {
        "Crystal Collapse":["burst","crystalCollapse"],
        "Inuzaka All-Round Defense":["skill","dmg"],
        "Juuga: Forward Unto Victory":["burst","dmg"],
        "Fully-Charged Aimed Shot":["charged","fully"],
    },
};

export default function (charName?: string) {
    if (!charName || !characterAbils[charName]) {
        return defaultAbils;
    }
    // some abils have the same name in gcsim, but different paths in go
    // like charged (["charged", "dmg"] for most characters, but ["charged", "dmg1"] for ayaka)
    return { ...defaultAbils, ...characterAbils[charName] };
}