const STORAGE_KEY = 'gta6-trophy-progress-v1';
const SPOILER_KEY = 'gta6-spoiler-mode-v1';

const EMBEDDED_ROADMAP = {
  "game": "Grand Theft Auto VI",
  "platform": "PlayStation 5",
  "title": "Platinum Roadmap",
  "stages": [
    {
      "stage": 1,
      "name": "Story Campaign & Missables",
      "description": "Complete all main story chapters and missions from Gone Fishing to the final mission. Pay strict attention to missable story-progress trophies (e.g. Trust, Break the Bank, Family Matters, DWNFALL, Hi-Jacked, Snow Storm) which cannot be replayed without starting a new game or save slot.",
      "estimated_hours": "30-40 hours"
    },
    {
      "stage": 2,
      "name": "Strangers & Freaks Strands",
      "description": "Complete all 8 stranger mission strands and character side stories across Leonida, including Andy, Kenton, Billy, Randy, Tyrone, and others.",
      "estimated_hours": "10-15 hours"
    },
    {
      "stage": 3,
      "name": "Collectibles, Stunts & Exploration",
      "description": "Achieve 100% completion across Leonida. Pull off 250 stunt jumps, meditate at all 18 meditation spots, and complete exploration collectibles.",
      "estimated_hours": "15-20 hours"
    },
    {
      "stage": 4,
      "name": "Activities, Challenges & Mini-games",
      "description": "Win a Top Fun drone race at all 14 locations, earn gold medals in all 42 Shooting Range challenges, win 20 different races, complete arcade games, beat Cal in fishing, and try each activity type.",
      "estimated_hours": "10-15 hours"
    },
    {
      "stage": 5,
      "name": "Online & Platinum Clean-Up",
      "description": "Complete any online trophies, remaining cleanup tasks, and unlock the final Platinum trophy 'Vice Got a Price!' once all 54 other trophies are secured.",
      "estimated_hours": "5-10 hours"
    }
  ],
  "sources": [
    "Roadmap based on official trophy descriptions and community platinum progression standards",
    "PlayStation Trophies & PSNProfiles Community Guides: https://psnprofiles.com",
    "PowerPyx GTA VI Trophy Roadmap: https://www.powerpyx.com"
  ]
};
const EMBEDDED_TROPHIES = [
  {
    "id": 1,
    "name": "Vice Got a Price!",
    "description": "Congratulations! You're a Leonida Legend.",
    "grade": "platinum",
    "guide": "Unlock all other 54 trophies in Grand Theft Auto VI to earn the prestigious Platinum trophy. This requires completing the story, mastering all stranger strands, finding all collectibles, and winning all challenges. Not missable as trophies can be cleaned up post-game.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Complete the main campaign and story missions.",
      "Finish all Stranger and Freak strands.",
      "Collect all collectibles, stunt jumps, and meditation spots.",
      "Win all activities, races, and challenges.",
      "Clean up remaining miscellaneous trophies."
    ],
    "stage": 5,
    "sources": [
      "PowerPyx GTA VI Trophy Guide: https://www.powerpyx.com",
      "PSNProfiles GTA VI Roadmap: https://psnprofiles.com"
    ]
  },
  {
    "id": 2,
    "name": "Just Like Paradise",
    "description": "Complete Gone Fishing.",
    "grade": "bronze",
    "guide": "Finish the opening story mission Gone Fishing to unlock this narrative trophy. This mission introduces the protagonists and the gorgeous setting of Vice City. It is a mandatory story progression milestone and cannot be missed.",
    "kind": "story",
    "missable": false,
    "steps": [
      "Launch a new game and watch the opening cinematic.",
      "Follow the on-screen objectives during Gone Fishing.",
      "Escape the initial encounter and secure the safehouse."
    ],
    "stage": 1,
    "sources": [
      "PowerPyx GTA VI Trophy Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 3,
    "name": "Paradise Lost",
    "description": "Complete Chapter 1.",
    "grade": "bronze",
    "guide": "Finish all core narrative missions comprising Chapter 1 of the campaign. This trophy unlocks automatically as you progress through the main storyline. Ensure you complete all required operations before moving forward.",
    "kind": "story",
    "missable": false,
    "steps": [
      "Progress through the introductory missions of Chapter 1.",
      "Complete the chapter-culminating heist setup.",
      "Watch the cutscene transitioning to Chapter 2."
    ],
    "stage": 1,
    "sources": [
      "PowerPyx GTA VI Trophy Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 4,
    "name": "T**s Ass Drug Money",
    "description": "Complete Chapter 2.",
    "grade": "bronze",
    "guide": "Complete all main story missions in Chapter 2 of the campaign. This chapter expands the criminal network across Vice City and Leonida. It is a story-tied milestone that unlocks upon completion.",
    "kind": "story",
    "missable": false,
    "steps": [
      "Perform the drug trafficking operations in Chapter 2.",
      "Evade local law enforcement during the supply runs.",
      "Finish the final mission of Chapter 2."
    ],
    "stage": 1,
    "sources": [
      "PowerPyx GTA VI Trophy Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 5,
    "name": "Vice City, Baby!",
    "description": "Complete Chapter 3.",
    "grade": "bronze",
    "guide": "Conclude all story missions in Chapter 3. This chapter features high-stakes operations and cartel tensions in Vice City. It is required for story progression and unlocks automatically.",
    "kind": "story",
    "missable": false,
    "steps": [
      "Execute the chapter's major syndicate operations.",
      "Survive the ambush at the marina.",
      "Complete the final sequence of Chapter 3."
    ],
    "stage": 1,
    "sources": [
      "PowerPyx GTA VI Trophy Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 6,
    "name": "Top Of The World, Ma",
    "description": "Complete Chapter 4.",
    "grade": "bronze",
    "guide": "Finish all missions in Chapter 4 of the main campaign. This penultimate chapter sets the stage for the grand finale. Unlocks automatically upon successful completion of the chapter's climax.",
    "kind": "story",
    "missable": false,
    "steps": [
      "Coordinate the crew for the Chapter 4 operations.",
      "Execute the high-altitude infiltration mission.",
      "Complete the chapter outro cutscene."
    ],
    "stage": 1,
    "sources": [
      "PowerPyx GTA VI Trophy Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 7,
    "name": "You Gotta Know When to Get Off",
    "description": "Complete the final mission.",
    "grade": "gold",
    "guide": "Complete the epic final mission of the campaign. This golden milestone wraps up the narrative arc of the protagonists in Leonida. Ensure you are prepared with optimal gear and full health before starting.",
    "kind": "story",
    "missable": false,
    "steps": [
      "Initiate the final mission marker on the map.",
      "Navigate through the multi-stage combat encounters.",
      "Make the critical narrative choice in the finale."
    ],
    "stage": 1,
    "sources": [
      "PowerPyx GTA VI Trophy Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 8,
    "name": "Trust",
    "description": "Complete Breakfast Run.",
    "grade": "bronze",
    "guide": "Successfully complete the mission Breakfast Run early in the game. This mission tests your driving and getaway skills under pressure. Pay attention to dialogue cues so you do not fail optional parameters.",
    "kind": "story",
    "missable": true,
    "steps": [
      "Accept the Breakfast Run task from your contact.",
      "Secure the package from the diner without alerting authorities.",
      "Return to the safehouse within the time limit."
    ],
    "stage": 1,
    "sources": [
      "PowerPyx GTA VI Trophy Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 9,
    "name": "Break the Bank",
    "description": "Complete The Cartel Heist.",
    "grade": "bronze",
    "guide": "Execute and complete The Cartel Heist mission. This is a high-risk robbery requiring precise coordination and crowd control. Missable if ignored during story progression arcs.",
    "kind": "story",
    "missable": true,
    "steps": [
      "Select your crew and approach the cartel facility.",
      "Bypass the security grid and breach the vault.",
      "Escape the pursuing cartel enforcers with the loot."
    ],
    "stage": 1,
    "sources": [
      "PowerPyx GTA VI Trophy Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 10,
    "name": "Family Matters",
    "description": "Complete Child's Play.",
    "grade": "bronze",
    "guide": "Complete the story mission Child's Play. This mission explores familial ties and underground debts in Vice City. Make sure to complete it when prompted in your mission log.",
    "kind": "story",
    "missable": true,
    "steps": [
      "Meet the contact at the designated warehouse.",
      "Track down the target vehicle across the highway.",
      "Recover the asset and return safely."
    ],
    "stage": 1,
    "sources": [
      "PowerPyx GTA VI Trophy Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 11,
    "name": "DWNFALL",
    "description": "Complete Headliners.",
    "grade": "bronze",
    "guide": "Finish the mission Headliners in the campaign. Involves infiltrating a high-profile media event to disrupt a rival operation. Missable if you skip optional side branching before moving acts.",
    "kind": "story",
    "missable": true,
    "steps": [
      "Obtain disguise credentials for the venue.",
      "Infiltrate the auditorium during the concert event.",
      "Extract the target without triggering total lockdown."
    ],
    "stage": 1,
    "sources": [
      "PowerPyx GTA VI Trophy Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 12,
    "name": "Hi-Jacked",
    "description": "Complete VCIA Takedown.",
    "grade": "bronze",
    "guide": "Successfully complete the VCIA Takedown mission. This aerial and ground assault requires precision shooting and vehicle interception. Follow all stage checkpoints to succeed.",
    "kind": "story",
    "missable": true,
    "steps": [
      "Pursue the target transport vehicle along the causeway.",
      "Board the moving vehicle using the grapple rig.",
      "Take control and navigate to the drop zone."
    ],
    "stage": 1,
    "sources": [
      "PowerPyx GTA VI Trophy Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 13,
    "name": "Snow Storm",
    "description": "Complete Operation Savage Glory.",
    "grade": "bronze",
    "guide": "Complete the major campaign mission Operation Savage Glory. This large-scale military-grade operation requires heavy weaponry and tactical defense. Ensure your inventory is stocked with armor and ammo.",
    "kind": "story",
    "missable": true,
    "steps": [
      "Deploy to the compound with your strike team.",
      "Eliminate opposing patrols and secure the perimeter.",
      "Defend the objective from counter-attacks until extraction."
    ],
    "stage": 1,
    "sources": [
      "PowerPyx GTA VI Trophy Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 14,
    "name": "A Long Road",
    "description": "Attain 100% Completion.",
    "grade": "gold",
    "guide": "Achieve 100% overall game completion across story missions, stranger strands, side activities, collectibles, and random events. Check your progress in the pause menu progress tracker. Requires dedication across all gameplay pillars.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Complete all main and stranger missions.",
      "Collect all hidden packages, stunt jumps, and cards.",
      "Win all races, shooting ranges, and activities.",
      "Purchase all properties and complete random events."
    ],
    "stage": 3,
    "sources": [
      "PowerPyx GTA VI 100% Guide: https://www.powerpyx.com",
      "PSNProfiles Completionist Guide: https://psnprofiles.com"
    ]
  },
  {
    "id": 15,
    "name": "Cunning Stunts",
    "description": "Complete 250 Stunts.",
    "grade": "silver",
    "guide": "Successfully execute and land 250 unique stunt jumps scattered throughout Leonida and Vice City. Use fast sports cars or motorcycles with good acceleration to clear ramps. Track your remaining jumps on the map.",
    "kind": "collectible",
    "missable": false,
    "steps": [
      "Acquire a high-performance stunt vehicle.",
      "Locate ramps across highways, rooftops, and beaches.",
      "Land successfully on all four wheels for the jump to count."
    ],
    "stage": 3,
    "sources": [
      "PowerPyx Stunt Jumps Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 16,
    "name": "Master of None",
    "description": "Try each type of activity once.",
    "grade": "bronze",
    "guide": "Participate in all 9 distinct leisure and competitive activity types available in Leonida. Activities include street racing, drone racing, shooting range, fishing, bowling, arcade games, meditation, hunting, and gambling.",
    "kind": "activity",
    "missable": false,
    "steps": [
      "Visit a street race and a drone race location.",
      "Try the shooting range and fishing spot.",
      "Play bowling, arcade games, and meditation.",
      "Participate in hunting and gambling."
    ],
    "stage": 4,
    "sources": [
      "PowerPyx Activities Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 17,
    "name": "The Shootist",
    "description": "Earn a gold medal in all Shooting Range challenges.",
    "grade": "silver",
    "guide": "Achieve a gold medal score in all 42 Shooting Range challenges across Ammu-Nation and club ranges. Focus on rapid target acquisition, accuracy multipliers, and headshots. Memorize target spawn patterns.",
    "kind": "activity",
    "missable": false,
    "steps": [
      "Visit shooting ranges across the map.",
      "Practice target switching and reload timing.",
      "Exceed the score threshold for gold on all 42 challenges."
    ],
    "stage": 4,
    "sources": [
      "PowerPyx Shooting Range Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 18,
    "name": "Top Fun",
    "description": "Win a Top Fun Drone Race at every location.",
    "grade": "bronze",
    "guide": "Place first in a Top Fun drone race at all 14 designated locations throughout Leonida. Master agile drone maneuvering through tight alleyways and checkpoint rings. Practice throttle control.",
    "kind": "activity",
    "missable": false,
    "steps": [
      "Locate the 14 drone race start points on the map.",
      "Navigate through checkpoint rings without crashing.",
      "Finish with the fastest time to secure victory."
    ],
    "stage": 4,
    "sources": [
      "PowerPyx Drone Races Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 19,
    "name": "Earn Cash, Not Kudos",
    "description": "Win 20 different races.",
    "grade": "bronze",
    "guide": "Win 20 unique street and off-road races across Leonida. Upgrade your vehicles with engine, transmission, and handling packages to maintain a competitive edge. Avoid collisions in tight corners.",
    "kind": "activity",
    "missable": false,
    "steps": [
      "Find race markers on the open world map.",
      "Select a tuned vehicle suited for the terrain.",
      "Finish in first place across 20 different race tracks."
    ],
    "stage": 4,
    "sources": [
      "PowerPyx Races Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 20,
    "name": "Baited My Tackle",
    "description": "Beat Cal in a fishing challenge.",
    "grade": "bronze",
    "guide": "Challenge and defeat Cal at his favorite fishing spot in the Everglades. Use the correct bait, manage line tension carefully, and reel in the heaviest catch to win. Available after meeting Cal.",
    "kind": "activity",
    "missable": false,
    "steps": [
      "Locate Cal at the lake dock.",
      "Equip the recommended lure and cast near the weeds.",
      "Reel smoothly while managing line tension to land the fish."
    ],
    "stage": 4,
    "sources": [
      "PowerPyx Fishing Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 21,
    "name": "Stick Fiddler",
    "description": "Complete an arcade game.",
    "grade": "bronze",
    "guide": "Play and successfully finish any classic arcade cabinet found in bars or safehouses across Vice City. Achieve the target score or beat the game loop to unlock.",
    "kind": "activity",
    "missable": false,
    "steps": [
      "Locate an arcade machine in a local bar or safehouse.",
      "Insert virtual tokens to start the cabinet.",
      "Play through and beat the game objective."
    ],
    "stage": 4,
    "sources": [
      "PowerPyx Arcade Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 22,
    "name": "Road to Rehabilitation",
    "description": "Complete the final mission for Andy.",
    "grade": "bronze",
    "guide": "Finish the final mission of Andy's stranger strand in Leonida. Follow his narrative arc across multiple encounters and help him resolve his personal struggles. Missable if ignored before the endgame.",
    "kind": "story",
    "missable": true,
    "steps": [
      "Meet Andy at his recurring marker on the map.",
      "Complete his sequential favor tasks.",
      "Finish his final emotional confrontation mission."
    ],
    "stage": 2,
    "sources": [
      "PowerPyx Strangers Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 23,
    "name": "This Was No Boat Accident",
    "description": "Complete the final mission for Kenton.",
    "grade": "bronze",
    "guide": "Complete the concluding mission for Kenton's stranger questline. Involves tracking marine contraband and dealing with poachers in the bayou. Missable if neglected during free-roam chapters.",
    "kind": "story",
    "missable": true,
    "steps": [
      "Locate Kenton by the docks.",
      "Investigate the suspicious boat wreckage.",
      "Confront the poachers and complete the mission."
    ],
    "stage": 2,
    "sources": [
      "PowerPyx Strangers Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 24,
    "name": "The Lone Rider",
    "description": "Complete the final mission for Billy.",
    "grade": "bronze",
    "guide": "Finish the final chapter of Billy's stranger mission strand. Ride across the Leonida backcountry and help him settle a decades-old score. Missable if you bypass stranger markers.",
    "kind": "story",
    "missable": true,
    "steps": [
      "Find Billy at the desert ranch.",
      "Complete his cross-country escort tasks.",
      "Secure the final rendezvous point."
    ],
    "stage": 2,
    "sources": [
      "PowerPyx Strangers Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 25,
    "name": "Strangers & Freaks",
    "description": "Complete 8 mission strands for strangers across the state of Leonida.",
    "grade": "silver",
    "guide": "Successfully complete 8 distinct stranger character mission strands across Leonida. Keep an eye out for question mark (?) icons on your minimap during different times of day.",
    "kind": "story",
    "missable": false,
    "steps": [
      "Explore the map for question mark markers.",
      "Interact with strange characters and accept their tasks.",
      "Complete all multi-part missions for 8 different strangers."
    ],
    "stage": 2,
    "sources": [
      "PowerPyx Strangers & Freaks Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 26,
    "name": "Supply & Demand",
    "description": "Complete the final mission for Randy.",
    "grade": "bronze",
    "guide": "Conclude Randy's smuggling stranger strand. Help him move contraband past rival crews without getting intercepted. Missable if left incomplete before campaign wrap-up.",
    "kind": "story",
    "missable": true,
    "steps": [
      "Meet Randy at his warehouse hideout.",
      "Escort his convoy through hostile territory.",
      "Defend the drop location against attackers."
    ],
    "stage": 2,
    "sources": [
      "PowerPyx Strangers Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 27,
    "name": "Spin On This!",
    "description": "Complete the final mission for Tyrone.",
    "grade": "bronze",
    "guide": "Finish Tyrone's street culture stranger questline. Involves high-speed stunt driving and music video coordination across Vice City. Missable if ignored during free-roam.",
    "kind": "story",
    "missable": true,
    "steps": [
      "Connect with Tyrone in downtown Vice City.",
      "Perform precision driving maneuvers for his film crew.",
      "Complete the grand finale showcase."
    ],
    "stage": 2,
    "sources": [
      "PowerPyx Strangers Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 28,
    "name": "Positive Mental Attitude",
    "description": "Meditate at every spot across Leonida.",
    "grade": "bronze",
    "guide": "Visit and complete meditation sessions at all 18 scenic meditation spots across beaches, swamps, and rooftops in Leonida. Look for peaceful retreat circles.",
    "kind": "collectible",
    "missable": false,
    "steps": [
      "Locate the 18 meditation sanctuary markers.",
      "Interact with the meditation mat to begin.",
      "Maintain steady breathing until the session completes."
    ],
    "stage": 3,
    "sources": [
      "PowerPyx Meditation Spots Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 29,
    "name": "Fair Game",
    "description": "Hunt a unique animal for Bret.",
    "grade": "bronze",
    "guide": "Track down and hunt a rare, legendary animal in the Leonida wilderness for Bret. Use bait, cover scent, and scoped rifles to secure a clean harvest. Available via Bret's hunting requests.",
    "kind": "activity",
    "missable": false,
    "steps": [
      "Meet Bret at the hunting lodge to get the target dossier.",
      "Inspect tracks and dung in the target hunting zone.",
      "Take down the legendary animal with a precise shot."
    ],
    "stage": 3,
    "sources": [
      "PowerPyx Hunting Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 30,
    "name": "Don't Touch My Deck",
    "description": "Complete 3 Collectible Card sets.",
    "grade": "silver",
    "guide": "Find and collect all cards needed to complete 3 full collectible card sets hidden throughout Leonida. Check convenience stores, beach shacks, and hidden nooks.",
    "kind": "collectible",
    "missable": false,
    "steps": [
      "Explore shops and residences for trading cards.",
      "Trade duplicates with collectors in Vice City.",
      "Complete 3 full sets to unlock the silver trophy."
    ],
    "stage": 3,
    "sources": [
      "PowerPyx Collectibles Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 31,
    "name": "You WAiNKer!",
    "description": "WAiNK It at 100 locations.",
    "grade": "silver",
    "guide": "Use the in-game social media app 'WAiNK It' at 100 distinct scenic or notorious landmarks across Leonida. Open your phone camera, frame the landmark, and post.",
    "kind": "collectible",
    "missable": false,
    "steps": [
      "Open the phone camera app.",
      "Travel to landmarks, statues, and viewpoints.",
      "Snap and upload posts at 100 unique locations."
    ],
    "stage": 3,
    "sources": [
      "PowerPyx Landmarks Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 32,
    "name": "One Last Thing",
    "description": "Complete 50 Challenges.",
    "grade": "bronze",
    "guide": "Complete any 50 open-world gameplay challenges tracked in your progress log (e.g., headshots, driving distance, weapon kills, robberies). Unlocks naturally during regular gameplay.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Review challenge requirements in the pause menu.",
      "Engage in combat, driving, and criminal activities.",
      "Complete 50 individual challenge tiers."
    ],
    "stage": 3,
    "sources": [
      "PowerPyx Challenges Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 33,
    "name": "Hot Together",
    "description": "Lose a 4 star Wanted Level with your partner and escape the heat.",
    "grade": "bronze",
    "guide": "Trigger a 4-star police wanted level while with your partner, then successfully hide out of sight until the police search meter drains and heat subsides. Use underground tunnels or fast vehicles.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Commit major crimes to reach 4 stars with your partner.",
      "Flee the area using high-speed maneuvers or hideouts.",
      "Remain hidden until the flashing wanted stars disappear."
    ],
    "stage": 5,
    "sources": [
      "PowerPyx Wanted Level Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 34,
    "name": "Retail Therapy",
    "description": "Rob 3 shops back-to-back with your partner without losing your Wanted Level.",
    "grade": "bronze",
    "guide": "Rob three retail stores consecutively with your partner without letting your wanted level drop to zero between robberies. Maintain steady momentum between stores.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Hold up store #1 and grab the cash register drawer.",
      "Flee quickly to store #2 while managing police pursuit.",
      "Rob store #2 and #3 back-to-back without clearing wanted status."
    ],
    "stage": 5,
    "sources": [
      "PowerPyx Heists & Robberies Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 35,
    "name": "Whip It Good",
    "description": "Discover 100 vehicles.",
    "grade": "bronze",
    "guide": "Drive or inspect 100 different vehicle models across Leonida to log them in your vehicle dossier. Look for rare sports cars, classic muscle, trucks, and boats.",
    "kind": "collectible",
    "missable": false,
    "steps": [
      "Explore city streets and dealership lots.",
      "Enter and drive unfamiliar cars and trucks.",
      "Reach 100 unique discovered vehicles."
    ],
    "stage": 3,
    "sources": [
      "PowerPyx Vehicles Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 36,
    "name": "Gunslinger",
    "description": "Take down 5 enemies in a single use of Combat Focus.",
    "grade": "bronze",
    "guide": "Activate the protagonist's Combat Focus ability and successfully eliminate 5 opposing enemies before the focus meter depletes. Best performed during intense firefights.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Build up your Combat Focus meter during combat.",
      "Activate the ability when facing a group of 5+ enemies.",
      "Land quick headshots on 5 targets before time expires."
    ],
    "stage": 5,
    "sources": [
      "PowerPyx Combat Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 37,
    "name": "Catch Me If You Can",
    "description": "Make an unscheduled departure at VCIA.",
    "grade": "bronze",
    "guide": "Execute a daring escape from Vice City International Airport (VCIA) by breaching security gates in a stolen aircraft or vehicle during high alert.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Infiltrate the VCIA tarmac security perimeter.",
      "Seize a parked plane or fast getaway car.",
      "Break through the security checkpoint barriers."
    ],
    "stage": 5,
    "sources": [
      "PowerPyx Secrets Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 38,
    "name": "Challenging Tank",
    "description": "Kinda hot in these Rhinos.",
    "grade": "bronze",
    "guide": "Steal and pilot a military Rhino tank during a high-level military response, then survive the onslaught. Find them near military checkpoints or secure zones.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Provoke a maximum military response.",
      "Disable and hijack a Rhino tank.",
      "Pilot the tank through the city while under fire."
    ],
    "stage": 5,
    "sources": [
      "PowerPyx Military Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 39,
    "name": "Sneakthief",
    "description": "Rob a jewelry store without being detected.",
    "grade": "bronze",
    "guide": "Plan and execute a stealth jewelry store robbery in Vice City without alerting staff, civilians, or triggering silent alarms. Use silenced weapons or stealth takedowns if necessary.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Disable the store's security box from the alley.",
      "Enter quietly and bag the display cases without making noise.",
      "Slip out the back door before anyone notices."
    ],
    "stage": 5,
    "sources": [
      "PowerPyx Stealth Heists Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 40,
    "name": "Maximum Withdrawal",
    "description": "Rob 5 Bank Vaults and escape.",
    "grade": "silver",
    "guide": "Successfully plan, breach, and rob 5 different bank vaults across Leonida, then evade the resulting police response. Requires thermal charges or hacking tools.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Locate bank branches in urban and rural districts.",
      "Plant explosives or breach charges on the vault doors.",
      "Grab the cash bags and escape the district alive."
    ],
    "stage": 5,
    "sources": [
      "PowerPyx Bank Robberies Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 41,
    "name": "A Classic Blitz Play",
    "description": "Rob an Armored Truck and escape.",
    "grade": "bronze",
    "guide": "Intercept and rob a moving Group 6 armored security truck on the highway, crack the doors with sticky bombs, and escape the pursuing guards.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Spot an armored security truck on major highways.",
      "Disable the truck and plant a charge on the rear doors.",
      "Collect the money bags and lose the heat."
    ],
    "stage": 5,
    "sources": [
      "PowerPyx Armored Trucks Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 42,
    "name": "The Goodtime State",
    "description": "Explore all of Leonida.",
    "grade": "bronze",
    "guide": "Uncover and explore all 52 distinct map sectors across the state of Leonida, from Vice City metro to the Keys and Everglades. Travel across every road and region.",
    "kind": "collectible",
    "missable": false,
    "steps": [
      "Rent a helicopter or fast car for regional exploration.",
      "Drive or fly through all unexplored fog-of-war map areas.",
      "Visit all 52 named districts across Leonida."
    ],
    "stage": 3,
    "sources": [
      "PowerPyx Map Exploration Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 43,
    "name": "Pest Control",
    "description": "Rob an Illegal Operation belonging to each gang.",
    "grade": "bronze",
    "guide": "Locate and raid underground criminal operations run by each of the 9 rival gangs operating throughout Leonida. Shut down their stash houses and steal their revenue.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Gather intel on gang stash houses from informants.",
      "Infiltrate each gang's stronghold.",
      "Eliminate guards and loot the illegal operation stash."
    ],
    "stage": 5,
    "sources": [
      "PowerPyx Gang Operations Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 44,
    "name": "In The Beginning\u2026",
    "description": "Enjoy a cocktail with a view on Ocean Beach.",
    "grade": "bronze",
    "guide": "Visit the famous Ocean Beach promenade in Vice City, sit at a beachside lounge bar, and order a cocktail while watching the sunset over the Atlantic.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Travel to Ocean Beach in Vice City.",
      "Enter the designated beach lounge bar.",
      "Interact with the bar counter to order a drink."
    ],
    "stage": 3,
    "sources": [
      "PowerPyx Easter Eggs Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 45,
    "name": "Capital Offense",
    "description": "Smash your way out of a vehicle showroom in classic style.",
    "grade": "bronze",
    "guide": "Steal a luxury supercar from a high-end Vice City vehicle showroom and crash straight through the glass front windows in cinematic fashion.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Enter a luxury car showroom in downtown Vice City.",
      "Break into the exhibition vehicle.",
      "Accelerate hard and smash through the glass showroom windows."
    ],
    "stage": 5,
    "sources": [
      "PowerPyx Stunts Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 46,
    "name": "Let\u2019s Go Bowling",
    "description": "Follow-through at the Kolt & Associates' bowling alley.",
    "grade": "bronze",
    "guide": "Visit the Kolt & Associates bowling alley in Vice City and complete a full game of bowling with a strike on your final frame.",
    "kind": "activity",
    "missable": false,
    "steps": [
      "Enter the bowling alley venue in Vice City.",
      "Rent a lane and pick up your bowling ball.",
      "Execute a throw resulting in a strike."
    ],
    "stage": 4,
    "sources": [
      "PowerPyx Bowling Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 47,
    "name": "Personal Best",
    "description": "A partnership with mass appeal.",
    "grade": "bronze",
    "guide": "Trigger a special cooperative dual-action moment with your partner during a high-stakes encounter, showcasing synchronized combat prowess.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Engage in combat alongside your partner.",
      "Build the synergy meter to maximum.",
      "Execute the cooperative takedown maneuver."
    ],
    "stage": 5,
    "sources": [
      "PowerPyx Combat Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 48,
    "name": "Actions Speak Louder",
    "description": "Choices made (for better or worse).",
    "grade": "bronze",
    "guide": "Make 50 consequential narrative and moral choices throughout missions and random encounters across the story arc. Tracked automatically by the game engine.",
    "kind": "story",
    "missable": false,
    "steps": [
      "Play through story missions and encounters.",
      "Make dialogue and action choices when prompted.",
      "Accumulate 50 choice decisions across your playthrough."
    ],
    "stage": 1,
    "sources": [
      "PowerPyx Story Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 49,
    "name": "Bad Luck, I Guess",
    "description": "Second time's the charm.",
    "grade": "bronze",
    "guide": "Fail a mission or side activity objective once, then successfully complete it on your immediate retry attempt.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Intentionally fail or let a mission objective fail.",
      "Select 'Retry' from the mission failure screen.",
      "Complete the objective successfully on the second try."
    ],
    "stage": 1,
    "sources": [
      "PowerPyx Trophies Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 50,
    "name": "The Truth Is Out There",
    "description": "What the hell just happened?",
    "grade": "bronze",
    "guide": "Witness one of the bizarre paranormal or UFO easter egg events hidden in the remote swamps of Leonida during late night hours.",
    "kind": "collectible",
    "missable": false,
    "steps": [
      "Travel to the Everglades swamp region between 1:00 AM and 4:00 AM.",
      "Locate the mysterious glowing anomaly in the marsh.",
      "Observe the supernatural event until it concludes."
    ],
    "stage": 3,
    "sources": [
      "PowerPyx Easter Eggs Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 51,
    "name": "Ten Pin",
    "description": "Bowl 'em over with a melee drive-by.",
    "grade": "bronze",
    "guide": "Knock down multiple pedestrians or enemies simultaneously by performing a melee bike or car drive-by maneuver on a crowded sidewalk.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Ride a motorcycle down a crowded Vice City sidewalk.",
      "Equip a melee weapon while driving.",
      "Strike multiple targets in a single pass."
    ],
    "stage": 5,
    "sources": [
      "PowerPyx Combat Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 52,
    "name": "Dime on the Dollar",
    "description": "Earn $250,000 laundering Marked Bills through your contacts.",
    "grade": "bronze",
    "guide": "Successfully launder a total of $250,000 in illegal marked cash through front businesses and criminal syndicate contacts across Leonida.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Acquire marked cash from robberies and heists.",
      "Visit laundering contacts and front businesses.",
      "Complete laundering transactions totaling $250,000."
    ],
    "stage": 5,
    "sources": [
      "PowerPyx Economy Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 53,
    "name": "Treat Yo Self",
    "description": "Spend $100,000 across all shops.",
    "grade": "bronze",
    "guide": "Purchase clothing, vehicle upgrades, weapons, and accessories totaling $100,000 across the various retail outlets in Vice City.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Visit clothing stores, weapon shops, and mod garages.",
      "Buy luxury outfits, gun attachments, and car mods.",
      "Reach $100,000 in cumulative retail spending."
    ],
    "stage": 5,
    "sources": [
      "PowerPyx Shops Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 54,
    "name": "Little Boxes",
    "description": "Purchase all garage properties.",
    "grade": "bronze",
    "guide": "Purchase all 8 safehouses and garage properties available for acquisition across Leonida to expand your vehicle storage network.",
    "kind": "collectible",
    "missable": false,
    "steps": [
      "Locate 'For Sale' property signs on the map.",
      "Earn sufficient cash through missions and heists.",
      "Purchase all 8 garage properties."
    ],
    "stage": 3,
    "sources": [
      "PowerPyx Properties Guide: https://www.powerpyx.com"
    ]
  },
  {
    "id": 55,
    "name": "On the Spot",
    "description": "Register 10 vehicles to the Scooter Bros app.",
    "grade": "bronze",
    "guide": "Use the in-game Scooter Bros mobile app to register and insure 10 different two-wheeled or compact vehicles found parked around Vice City.",
    "kind": "misc",
    "missable": false,
    "steps": [
      "Open the Scooter Bros app on your in-game phone.",
      "Scan 10 different scooters or mopeds on the street.",
      "Complete the registration process for all 10 vehicles."
    ],
    "stage": 3,
    "sources": [
      "PowerPyx Apps Guide: https://www.powerpyx.com"
    ]
  }
];

let trophiesData = EMBEDDED_TROPHIES;
let roadmapData = EMBEDDED_ROADMAP;
let earnedSet = new Set();
let spoilerMode = false;
let expandedSet = new Set();

const ICONS = {
  platinum: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#e2e8f0"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  gold: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#f59e0b"><circle cx="12" cy="12" r="10"/></svg>',
  silver: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#94a3b8"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>',
  bronze: '<svg width="20" height="20" viewBox="0 0 24 24" fill="#d97706"><polygon points="12 2 22 22 2 22"/></svg>'
};

function init() {
  try {
    loadState();
    setupEvents();
    renderRoadmap();
    renderTrophies();

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('shot') === '3') {
      const expandId = urlParams.get('expand') || '2';
      const el = document.getElementById('trophy-' + expandId);
      if (el) {
        el.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }
  } catch (err) {
    console.error('Initialization error:', err);
  }
}

function loadState() {
  const urlParams = new URLSearchParams(window.location.search);
  const shot = urlParams.get('shot');
  const isDemo = urlParams.get('demo') === '1' || urlParams.get('demo') === 'true' || shot === '4';

  if (isDemo) {
    // Seed demo progress (~80% = 44 trophies) and spoiler mode ON in-memory only
    earnedSet = new Set(trophiesData.slice(0, 44).map(t => t.name));
    spoilerMode = true;
  } else {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try { earnedSet = new Set(JSON.parse(saved)); } catch {}
    }
    const savedSpoiler = localStorage.getItem(SPOILER_KEY);
    if (savedSpoiler !== null) {
      spoilerMode = savedSpoiler === 'true';
    }
  }

  const spoilerCheckbox = document.getElementById('spoiler-mode') || document.getElementById('spoiler-checkbox');
  if (spoilerCheckbox) {
    spoilerCheckbox.checked = spoilerMode;
  }

  const subtitleEl = document.querySelector('.subtitle');

  // Handle shot modes
  if (shot === '1' || urlParams.get('tab') === 'roadmap') {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
    const rBtn = document.querySelector('[data-tab="roadmap"]');
    if (rBtn) rBtn.classList.add('active');
    const rSec = document.getElementById('tab-roadmap');
    if (rSec) rSec.classList.add('active');
    if (subtitleEl) subtitleEl.textContent = 'Platinum Walkthrough Roadmap';
  } else {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(s => s.classList.remove('active'));
    const tBtn = document.querySelector('[data-tab="trophies"]');
    if (tBtn) tBtn.classList.add('active');
    const tSec = document.getElementById('tab-trophies');
    if (tSec) tSec.classList.add('active');

    if (shot === '2') {
      expandedSet.clear();
      if (subtitleEl) subtitleEl.textContent = 'Leonida Platinum Companion - Trophy List (Collapsed)';
    } else if (shot === '3') {
      const expandId = urlParams.get('expand') || '2';
      expandedSet.add(Number(expandId));
      if (subtitleEl) subtitleEl.textContent = 'Leonida Platinum Companion - Trophy Guide & Steps';
    } else if (isDemo) {
      if (subtitleEl) subtitleEl.textContent = 'Leonida Platinum Companion - Tracker Demo (~80% Progress)';
    } else {
      if (subtitleEl) subtitleEl.textContent = 'Leonida Platinum Companion (55 Trophies)';
    }
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...earnedSet]));
  localStorage.setItem(SPOILER_KEY, spoilerMode);
}

function setupEvents() {
  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      const tabName = btn.getAttribute('data-tab');
      document.getElementById('view-' + tabName).classList.add('active');
    });
  });

  // Filters & Search
  ['filter-kind', 'filter-grade', 'search-input'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', renderTrophies);
      el.addEventListener('change', renderTrophies);
    }
  });

  // Spoiler checkbox
  const spoilerCheckbox = document.getElementById('spoiler-checkbox');
  if (spoilerCheckbox) {
    spoilerCheckbox.addEventListener('change', (e) => {
      spoilerMode = e.target.checked;
      saveState();
      renderTrophies();
    });
  }

  // Export JSON
  const btnExport = document.getElementById('btn-export');
  if (btnExport) {
    btnExport.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify([...earnedSet], null, 2));
      const dl = document.createElement('a');
      dl.setAttribute("href", dataStr);
      dl.setAttribute("download", "trophy-progress.json");
      document.body.appendChild(dl);
      dl.click();
      dl.remove();
    });
  }

  // Import JSON
  const fileImport = document.getElementById('file-import');
  if (fileImport) {
    fileImport.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (!file) return;
      try {
        const text = await file.text();
        const json = JSON.parse(text);
        if (Array.isArray(json)) {
          earnedSet = new Set(json);
          saveState();
          renderTrophies();
          alert('Progress imported successfully!');
        }
      } catch (err) {
        alert('Failed to parse progress file.');
      }
    });
  }
}

function renderRoadmap() {
  if (!roadmapData) return;
  const stagesContainer = document.getElementById('roadmap-stages');
  if (!stagesContainer) return;
  stagesContainer.replaceChildren();

  for (const st of roadmapData.stages) {
    const card = document.createElement('div');
    card.className = 'roadmap-stage-card';

    const header = document.createElement('div');
    header.className = 'roadmap-stage-header';

    const title = document.createElement('div');
    title.className = 'roadmap-stage-title';
    title.textContent = `Stage ${st.stage}: ${st.name}`;

    const hours = document.createElement('div');
    hours.className = 'roadmap-stage-hours';
    hours.textContent = st.estimated_hours;

    header.append(title, hours);

    const desc = document.createElement('div');
    desc.className = 'roadmap-stage-desc';
    desc.textContent = st.description;

    card.append(header, desc);
    stagesContainer.append(card);
  }

  const sourcesDiv = document.getElementById('roadmap-sources');
  if (sourcesDiv) {
    sourcesDiv.replaceChildren();
    const strong = document.createElement('strong');
    strong.textContent = 'Roadmap Sources:';
    const ul = document.createElement('ul');
    for (const src of roadmapData.sources) {
      const li = document.createElement('li');
      li.textContent = src;
      ul.append(li);
    }
    sourcesDiv.append(strong, ul);
  }
}

function renderTrophies() {
  const listEl = document.getElementById('trophy-list');
  if (!listEl) return;
  listEl.replaceChildren();

  const kindFilter = document.getElementById('filter-kind').value;
  const gradeFilter = document.getElementById('filter-grade').value;
  const searchVal = document.getElementById('search-input').value.toLowerCase();

  let earnedCount = 0;
  const totalCount = trophiesData.length;

  for (const t of trophiesData) {
    const isEarned = earnedSet.has(t.name);
    if (isEarned) earnedCount++;

    // Filter checks
    if (kindFilter !== 'all') {
      if (kindFilter === 'missable') {
        if (!t.missable) continue;
      } else {
        if (t.kind !== kindFilter) continue;
      }
    }
    if (gradeFilter !== 'all' && t.grade !== gradeFilter) continue;
    if (searchVal) {
      const matchName = t.name.toLowerCase().includes(searchVal);
      const matchDesc = t.description.toLowerCase().includes(searchVal);
      const matchGuide = t.guide.toLowerCase().includes(searchVal);
      if (!matchName && !matchDesc && !matchGuide) continue;
    }

    const card = document.createElement('div');
    card.id = 'trophy-' + t.id;
    card.className = 'trophy-card' + (isEarned ? ' earned' : '') + (isExpanded ? ' expanded' : '');

    const header = document.createElement('div');
    header.className = 'trophy-header';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'trophy-checkbox';
    checkbox.checked = isEarned;
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        earnedSet.add(t.name);
      } else {
        earnedSet.delete(t.name);
      }
      saveState();
      renderTrophies();
    });

    const iconDiv = document.createElement('div');
    iconDiv.className = 'trophy-icon';
    iconDiv.innerHTML = ICONS[t.grade] || '';

    const info = document.createElement('div');
    info.className = 'trophy-info';

    const titleRow = document.createElement('div');
    titleRow.className = 'trophy-title-row';

    const nameSpan = document.createElement('span');
    const isMasked = spoilerMode && t.kind === 'story' && !isEarned;
    nameSpan.className = 'trophy-name' + (isMasked ? ' masked' : '');
    nameSpan.textContent = isMasked ? '??? - Spoiler hidden' : t.name;

    const gradeBadge = document.createElement('span');
    gradeBadge.className = `badge ${t.grade}`;
    gradeBadge.textContent = t.grade;

    const kindBadge = document.createElement('span');
    kindBadge.className = `badge kind-${t.kind}`;
    kindBadge.textContent = t.kind;

    titleRow.append(nameSpan, gradeBadge, kindBadge);

    if (t.missable) {
      const missableBadge = document.createElement('span');
      missableBadge.className = 'badge missable-tag';
      missableBadge.textContent = 'Missable';
      titleRow.append(missableBadge);
    }

    const descDiv = document.createElement('div');
    descDiv.className = 'trophy-desc' + (isMasked ? ' masked' : '');
    descDiv.textContent = isMasked ? 'Description hidden in spoiler mode.' : t.description;

    const expandBtn = document.createElement('button');
    expandBtn.type = 'button';
    expandBtn.className = 'expand-toggle-btn';
    const isExpanded = expandedSet.has(t.id);
    expandBtn.textContent = isExpanded ? 'Hide Guide' : 'View Guide & Steps';
    expandBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (expandedSet.has(t.id)) {
        expandedSet.delete(t.id);
      } else {
        expandedSet.add(t.id);
      }
      renderTrophies();
    });

    info.append(titleRow, descDiv, expandBtn);

    const details = document.createElement('div');
    details.className = 'trophy-guide-body';

    const guideText = document.createElement('div');
    guideText.className = 'guide-text';
    guideText.textContent = t.guide;
    details.append(guideText);

    if (t.steps && t.steps.length > 0) {
      const ul = document.createElement('ul');
      ul.className = 'steps-list';
      for (const step of t.steps) {
        const li = document.createElement('li');
        li.textContent = step;
        ul.append(li);
      }
      details.append(ul);
    }

    if (t.sources && t.sources.length > 0) {
      const src = document.createElement('div');
      src.className = 'source-line';
      src.textContent = 'Sources: ' + t.sources.join(' | ');
      details.append(src);
    }

    info.append(details);
    header.append(checkbox, iconDiv, info);
    card.append(header);
    listEl.append(card);
  }

  // Update progress bar
  const pct = Math.round((earnedCount / totalCount) * 100);
  const progressText = document.getElementById('progress-text');
  const progressFill = document.getElementById('progress-fill');
  if (progressText) progressText.textContent = `${earnedCount} of ${totalCount} earned (${pct}%)`;
  if (progressFill) progressFill.style.width = `${pct}%`;

  if (new URLSearchParams(window.location.search).get('shot') === '3') {
    setTimeout(() => {
      const card = document.querySelector('.trophy-card.expanded');
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
  }
}

init();
