const pages = [
  {
    "slug": "mountain-earth",
    "title": "Mountain Earth",
    "eyebrow": "01 / FOUNDATIONS",
    "description": "Discover what mountains are, how tectonic forces build them, and how erosion and time keep reshaping their forms.",
    "image": "mountain-earth.svg",
    "category": "Earth science",
    "contentFile": "mountain-earth.md",
    "read": "9 min"
  },
  {
    "slug": "world-ranges",
    "title": "World Mountain Ranges",
    "eyebrow": "02 / GLOBAL ATLAS",
    "description": "A guide to the world’s major mountain systems, from the Himalayas and Andes to ancient ranges and island chains.",
    "image": "world-ranges.svg",
    "category": "Atlas",
    "contentFile": "world-ranges.md",
    "read": "7 min"
  },
  {
    "slug": "himalayas",
    "title": "The Himalayas",
    "eyebrow": "REGIONAL ATLAS / ASIA",
    "description": "Young, rising mountains of glaciers, deep valleys, high meadows, sacred landscapes and exceptional biodiversity.",
    "image": "himalayas.svg",
    "category": "Mountain range",
    "contentFile": "himalayas.md",
    "read": "8 min"
  },
  {
    "slug": "andes",
    "title": "The Andes",
    "eyebrow": "REGIONAL ATLAS / SOUTH AMERICA",
    "description": "A vast volcanic and tectonic mountain spine of puna grasslands, cloud forests, glaciers and high plateaus.",
    "image": "andes.svg",
    "category": "Mountain range",
    "contentFile": "andes.md",
    "read": "7 min"
  },
  {
    "slug": "rocky-mountains",
    "title": "The Rocky Mountains",
    "eyebrow": "REGIONAL ATLAS / NORTH AMERICA",
    "description": "Explore the North American cordillera’s forests, alpine basins, headwaters and iconic wildlife.",
    "image": "rocky-mountains.svg",
    "category": "Mountain range",
    "contentFile": "rocky-mountains.md",
    "read": "7 min"
  },
  {
    "slug": "alps",
    "title": "The Alps",
    "eyebrow": "REGIONAL ATLAS / EUROPE",
    "description": "Glacial valleys, limestone walls, high pastures and forest belts across the heart of Europe.",
    "image": "alps.svg",
    "category": "Mountain range",
    "contentFile": "alps.md",
    "read": "7 min"
  },
  {
    "slug": "caucasus",
    "title": "The Caucasus",
    "eyebrow": "REGIONAL ATLAS / EURASIA",
    "description": "A meeting place of climates and biogeographic regions between the Black Sea and Caspian Sea.",
    "image": "caucasus.svg",
    "category": "Mountain range",
    "contentFile": "caucasus.md",
    "read": "6 min"
  },
  {
    "slug": "atlas-mountains",
    "title": "The Atlas Mountains",
    "eyebrow": "REGIONAL ATLAS / NORTH AFRICA",
    "description": "Mediterranean woodlands and dry uplands shaped by seasonal rainfall, grazing and Saharan influence.",
    "image": "atlas-mountains.svg",
    "category": "Mountain range",
    "contentFile": "atlas-mountains.md",
    "read": "6 min"
  },
  {
    "slug": "appalachians",
    "title": "The Appalachians",
    "eyebrow": "REGIONAL ATLAS / EASTERN NORTH AMERICA",
    "description": "An ancient mountain system of rounded ridges, deep valleys, temperate forests and extraordinary stream life.",
    "image": "appalachians.svg",
    "category": "Mountain range",
    "contentFile": "appalachians.md",
    "read": "6 min"
  },
  {
    "slug": "southern-alps",
    "title": "The Southern Alps of New Zealand",
    "eyebrow": "REGIONAL ATLAS / OCEANIA",
    "description": "A rain-sculpted island range of glacial valleys, beech forests, alpine herbfields and endemic species.",
    "image": "southern-alps.svg",
    "category": "Mountain range",
    "contentFile": "southern-alps.md",
    "read": "6 min"
  },
  {
    "slug": "ethiopian-highlands",
    "title": "Ethiopian Highlands & East Africa",
    "eyebrow": "REGIONAL ATLAS / AFRICA",
    "description": "Tropical highlands where giant lobelias, specialised mammals and cold nights create distinctive alpine ecology.",
    "image": "ethiopian-highlands.svg",
    "category": "Mountain region",
    "contentFile": "ethiopian-highlands.md",
    "read": "6 min"
  },
  {
    "slug": "japanese-alps",
    "title": "Japanese Alps & East Asia",
    "eyebrow": "REGIONAL ATLAS / EAST ASIA",
    "description": "Snow-rich mountains with temperate forests, volcanic landscapes and species shaped by island geography.",
    "image": "japanese-alps.svg",
    "category": "Mountain region",
    "contentFile": "japanese-alps.md",
    "read": "6 min"
  },
  {
    "slug": "urals",
    "title": "The Urals",
    "eyebrow": "REGIONAL ATLAS / EURASIA",
    "description": "An eroded, forested range often used to describe the geographic boundary between Europe and Asia.",
    "image": "urals.svg",
    "category": "Mountain range",
    "contentFile": "urals.md",
    "read": "5 min"
  },
  {
    "slug": "other-ranges",
    "title": "Beyond the Famous Ranges",
    "eyebrow": "03 / THE WIDER PLANET",
    "description": "A world tour of Alaska, the Cascades, Rwenzori, Drakensberg, Carpathians, Pamirs and many more.",
    "image": "other-ranges.svg",
    "category": "Atlas",
    "contentFile": "other-ranges.md",
    "read": "6 min"
  },
  {
    "slug": "altitude-zones",
    "title": "The Vertical World",
    "eyebrow": "04 / ECOLOGY BY ELEVATION",
    "description": "Follow the transition from foothill forests to tree line, alpine meadows, bare rock and permanent ice.",
    "image": "altitude-zones.svg",
    "category": "Ecology",
    "contentFile": "altitude-zones.md",
    "read": "10 min"
  },
  {
    "slug": "wildlife",
    "title": "Mountain Wildlife",
    "eyebrow": "05 / LIVING SYSTEMS",
    "description": "Learn how mammals and other animals find food, shelter and safe passage in steep, seasonal terrain.",
    "image": "wildlife.svg",
    "category": "Biodiversity",
    "contentFile": "wildlife.md",
    "read": "8 min"
  },
  {
    "slug": "mountain-birds",
    "title": "Birds of the Mountains",
    "eyebrow": "06 / WINGS & WIND",
    "description": "From alpine specialists to forest songbirds and soaring raptors, birds reveal the structure of mountain habitats.",
    "image": "mountain-birds.svg",
    "category": "Biodiversity",
    "contentFile": "mountain-birds.md",
    "read": "7 min"
  },
  {
    "slug": "forests-plants",
    "title": "Mountain Forests & Plants",
    "eyebrow": "07 / ROOTED LIFE",
    "description": "Explore conifers, broadleaf forests, rhododendrons, cushion plants, lichens and the limits of tree growth.",
    "image": "forests-plants.svg",
    "category": "Botany",
    "contentFile": "forests-plants.md",
    "read": "8 min"
  },
  {
    "slug": "water-climate",
    "title": "Water, Ice & Climate",
    "eyebrow": "08 / THE WATER TOWERS",
    "description": "Understand glaciers, seasonal snow, watersheds, rain shadows and the role of mountains in regional climate.",
    "image": "water-climate.svg",
    "category": "Climate",
    "contentFile": "water-climate.md",
    "read": "9 min"
  },
  {
    "slug": "geology-hazards",
    "title": "Geology & Natural Hazards",
    "eyebrow": "09 / DYNAMIC TERRAIN",
    "description": "Read the forces behind folds, faults, volcanoes, weathering, landslides and mountain hazards.",
    "image": "geology-hazards.svg",
    "category": "Earth science",
    "contentFile": "geology-hazards.md",
    "read": "8 min"
  },
  {
    "slug": "people-culture",
    "title": "Mountain People & Culture",
    "eyebrow": "10 / HUMAN GEOGRAPHY",
    "description": "Meet the knowledge, livelihoods, languages and traditions that connect communities to mountain places.",
    "image": "people-culture.svg",
    "category": "Culture",
    "contentFile": "people-culture.md",
    "read": "7 min"
  },
  {
    "slug": "conservation",
    "title": "Mountain Conservation",
    "eyebrow": "11 / FUTURES & STEWARDSHIP",
    "description": "Explore habitat connectivity, protected areas, climate adaptation, sustainable tourism and community-led care.",
    "image": "conservation.svg",
    "category": "Conservation",
    "contentFile": "conservation.md",
    "read": "8 min"
  },
  {
    "slug": "field-guide",
    "title": "Field Guide & Observation",
    "eyebrow": "12 / LOOK CLOSER",
    "description": "Build the habits of a careful observer: record a landscape, distinguish evidence from interpretation and respect wildlife.",
    "image": "field-guide.svg",
    "category": "Field skills",
    "contentFile": "field-guide.md",
    "read": "5 min"
  },
  {
    "slug": "mountain-explorer",
    "title": "Mountain Elevation Explorer",
    "eyebrow": "INTERACTIVE LAB / ECOLOGY",
    "description": "Move through elevation bands and see how climate, land cover and ecological pressures often change with height.",
    "image": "mountain-explorer.svg",
    "category": "Interactive lab",
    "contentFile": "mountain-explorer.md",
    "read": "Interactive"
  },
  {
    "slug": "climate-and-safety",
    "title": "Mountain Weather & Safety",
    "eyebrow": "13 / PREPAREDNESS",
    "description": "Understand fast-changing weather, exposure, altitude, terrain hazards and responsible choices outdoors.",
    "image": "climate-and-safety.svg",
    "category": "Field skills",
    "contentFile": "climate-and-safety.md",
    "read": "7 min"
  },
  {
    "slug": "glossary",
    "title": "Mountain Science Glossary",
    "eyebrow": "REFERENCE / A–Z",
    "description": "Clear explanations of the geological, ecological and climate vocabulary used throughout this atlas.",
    "image": "glossary.svg",
    "category": "Reference",
    "contentFile": null,
    "read": "Reference"
  },
  {
    "slug": "quiz",
    "title": "Knowledge Check",
    "eyebrow": "LEARN / TEST YOURSELF",
    "description": "Challenge your understanding of mountain formation, habitats, climate, wildlife and conservation.",
    "image": "quiz.svg",
    "category": "Learning lab",
    "contentFile": null,
    "read": "5 min"
  },
  {
    "slug": "references",
    "title": "References & Further Reading",
    "eyebrow": "REFERENCE / SOURCES",
    "description": "Start with trusted scientific, conservation and public-education resources for deeper reading.",
    "image": "references.svg",
    "category": "Reference",
    "contentFile": null,
    "read": "Reference"
  },
  {
    "slug": "about",
    "title": "About this Mountain Atlas",
    "eyebrow": "ABOUT THE PROJECT",
    "description": "A welcoming field-to-library guide to the interconnected systems that make mountains extraordinary.",
    "image": "about.svg",
    "category": "About",
    "contentFile": null,
    "read": "3 min"
  },
  {
    "slug": "plate-tectonics",
    "title": "Plate Tectonics & Mountain Building",
    "eyebrow": "EARTH SCIENCE / DEEP TIME",
    "description": "Understand the moving plates, collisions, subduction zones and uplift that create many of the planet’s largest mountain belts.",
    "image": "plate-tectonics.svg",
    "category": "Earth science",
    "contentFile": "plate-tectonics.md",
    "read": "9 min"
  },
  {
    "slug": "volcanic-mountains",
    "title": "Volcanic Mountains & Magma",
    "eyebrow": "EARTH SCIENCE / VOLCANISM",
    "description": "Explore how magma rises, why volcanoes have different shapes, and how volcanic landscapes combine hazards, fertile soils and new habitats.",
    "image": "volcanic-mountains.svg",
    "category": "Earth science",
    "contentFile": "volcanic-mountains.md",
    "read": "8 min"
  },
  {
    "slug": "rocks-and-minerals",
    "title": "Mountain Rocks, Minerals & the Rock Cycle",
    "eyebrow": "EARTH SCIENCE / MATERIALS",
    "description": "Learn to distinguish igneous, sedimentary and metamorphic rocks, recognise common mountain minerals, and connect rock type with landscape form.",
    "image": "rocks-and-minerals.svg",
    "category": "Earth science",
    "contentFile": "rocks-and-minerals.md",
    "read": "8 min"
  },
  {
    "slug": "glacial-landforms",
    "title": "Glaciers & Glacial Landforms",
    "eyebrow": "WATER / ICE / LANDSCAPE",
    "description": "Read cirques, horns, arêtes, U-shaped valleys and moraines as evidence of moving ice and changing mountain climates.",
    "image": "glacial-landforms.svg",
    "category": "Water and cryosphere",
    "contentFile": "glacial-landforms.md",
    "read": "8 min"
  },
  {
    "slug": "river-systems",
    "title": "Mountain Rivers, Watersheds & Freshwater",
    "eyebrow": "WATER / RIVERS / CATCHMENTS",
    "description": "Follow water from snowfields and springs through headwater streams, wetlands, lakes, reservoirs and downstream plains.",
    "image": "river-systems.svg",
    "category": "Water and climate",
    "contentFile": "river-systems.md",
    "read": "8 min"
  },
  {
    "slug": "mountain-weather",
    "title": "Mountain Weather & Microclimates",
    "eyebrow": "CLIMATE / AIR / EXPOSURE",
    "description": "Understand orographic rain, valley winds, inversions, foehn-like downslope warming, thunderstorms and rapid changes with terrain.",
    "image": "mountain-weather.svg",
    "category": "Climate science",
    "contentFile": "mountain-weather.md",
    "read": "8 min"
  },
  {
    "slug": "alpine-ecology",
    "title": "Alpine Ecology & Life Above the Tree Line",
    "eyebrow": "ECOLOGY / HIGH ELEVATION",
    "description": "Explore the short growing season, cold soils, wind exposure, plant strategies and specialised food webs of alpine environments.",
    "image": "alpine-ecology.svg",
    "category": "Ecology",
    "contentFile": "alpine-ecology.md",
    "read": "7 min"
  },
  {
    "slug": "fungi-and-lichens",
    "title": "Fungi, Lichens, Mosses & Hidden Mountain Life",
    "eyebrow": "LIFE SCIENCES / SMALL ORGANISMS",
    "description": "Look beneath the canopy at fungal partnerships, lichen symbiosis, mosses and microbes that build soil and sustain mountain ecosystems.",
    "image": "fungi-and-lichens.svg",
    "category": "Biodiversity",
    "contentFile": "fungi-and-lichens.md",
    "read": "6 min"
  },
  {
    "slug": "mountain-invertebrates",
    "title": "Mountain Insects & Invertebrates",
    "eyebrow": "LIFE SCIENCES / SMALL ANIMALS",
    "description": "Discover pollinators, decomposers, stream insects and cold-adapted invertebrates that keep mountain ecosystems functioning.",
    "image": "mountain-invertebrates.svg",
    "category": "Biodiversity",
    "contentFile": "mountain-invertebrates.md",
    "read": "6 min"
  },
  {
    "slug": "mountain-food-webs",
    "title": "Mountain Food Webs & Ecological Relationships",
    "eyebrow": "ECOLOGY / INTERACTIONS",
    "description": "Connect plants, herbivores, predators, scavengers and decomposers to understand the flow of energy through mountain habitats.",
    "image": "mountain-food-webs.svg",
    "category": "Ecology",
    "contentFile": "mountain-food-webs.md",
    "read": "7 min"
  },
  {
    "slug": "fire-and-succession",
    "title": "Fire, Forest Disturbance & Ecological Succession",
    "eyebrow": "FORESTS / CHANGE / RECOVERY",
    "description": "Learn why fire can be a natural ecological process in some mountain forests and a damaging disturbance when regimes change.",
    "image": "fire-and-succession.svg",
    "category": "Ecology",
    "contentFile": "fire-and-succession.md",
    "read": "7 min"
  },
  {
    "slug": "mountain-agriculture",
    "title": "Mountain Agriculture, Pastoralism & Food Systems",
    "eyebrow": "LIVELIHOODS / FOOD / LAND",
    "description": "Explore terraces, seasonal grazing, agroforestry, local crop diversity and the adaptations that help communities farm steep terrain.",
    "image": "mountain-agriculture.svg",
    "category": "People and place",
    "contentFile": "mountain-agriculture.md",
    "read": "7 min"
  },
  {
    "slug": "settlements-and-engineering",
    "title": "Mountain Settlements, Roads & Engineering",
    "eyebrow": "BUILT ENVIRONMENTS / RESILIENCE",
    "description": "Study how terrain, water, transport and slope stability shape villages, roads, bridges, tunnels, dams and mountain infrastructure.",
    "image": "settlements-and-engineering.svg",
    "category": "People and place",
    "contentFile": "settlements-and-engineering.md",
    "read": "7 min"
  },
  {
    "slug": "sacred-mountains",
    "title": "Sacred Mountains, Belief & Cultural Landscapes",
    "eyebrow": "CULTURE / MEMORY / RESPECT",
    "description": "Learn how mountains become sacred, symbolic and ceremonial places across many traditions without reducing distinct communities to a single story.",
    "image": "sacred-mountains.svg",
    "category": "People and place",
    "contentFile": "sacred-mountains.md",
    "read": "6 min"
  },
  {
    "slug": "exploration-history",
    "title": "Mountain Exploration, Mapping & Mountaineering History",
    "eyebrow": "HISTORY / MOVEMENT / ETHICS",
    "description": "Trace how mountain knowledge developed through local travel, trade, pilgrimage, surveying, scientific expeditions and modern mountaineering.",
    "image": "exploration-history.svg",
    "category": "People and place",
    "contentFile": "exploration-history.md",
    "read": "7 min"
  },
  {
    "slug": "trails-and-tourism",
    "title": "Mountain Trails, Recreation & Sustainable Tourism",
    "eyebrow": "VISITATION / STEWARDSHIP",
    "description": "Understand trail design, visitor impacts, carrying capacity, local benefits and practical ways to reduce harm during mountain travel.",
    "image": "trails-and-tourism.svg",
    "category": "People and place",
    "contentFile": "trails-and-tourism.md",
    "read": "7 min"
  },
  {
    "slug": "maps-and-remote-sensing",
    "title": "Mountain Maps, GIS & Remote Sensing",
    "eyebrow": "TOOLS / MAPS / DATA",
    "description": "Use contour maps, digital elevation models, GPS and satellite imagery to study terrain while understanding scale, resolution and uncertainty.",
    "image": "maps-and-remote-sensing.svg",
    "category": "Field skills",
    "contentFile": "maps-and-remote-sensing.md",
    "read": "8 min"
  },
  {
    "slug": "field-research",
    "title": "Mountain Field Research & Citizen Science",
    "eyebrow": "METHODS / EVIDENCE",
    "description": "Learn to ask answerable questions, record repeatable observations, choose simple sampling methods and communicate uncertainty honestly.",
    "image": "field-research.svg",
    "category": "Field skills",
    "contentFile": "field-research.md",
    "read": "7 min"
  },
  {
    "slug": "climate-change",
    "title": "Climate Change in Mountain Regions",
    "eyebrow": "CLIMATE / ADAPTATION / FUTURES",
    "description": "Explore observed shifts in snow, glaciers, permafrost, species ranges and hazards, alongside adaptation choices for communities and ecosystems.",
    "image": "climate-change.svg",
    "category": "Climate science",
    "contentFile": "climate-change.md",
    "read": "8 min"
  },
  {
    "slug": "mountain-economies",
    "title": "Mountain Economies & Ecosystem Services",
    "eyebrow": "ECONOMY / SERVICES / TRADE-OFFS",
    "description": "Examine freshwater, farming, forests, tourism, mining, hydropower and the economic dependencies linking uplands with downstream regions.",
    "image": "mountain-economies.svg",
    "category": "People and place",
    "contentFile": "mountain-economies.md",
    "read": "7 min"
  },
  {
    "slug": "wildlife-corridors",
    "title": "Wildlife Corridors & Landscape Connectivity",
    "eyebrow": "HABITAT / MOVEMENT / PLANNING",
    "description": "Understand how ridgelines, valleys, stepping-stone habitats and safe crossings help animals move across changing mountain landscapes.",
    "image": "wildlife-corridors.svg",
    "category": "Conservation",
    "contentFile": "wildlife-corridors.md",
    "read": "6 min"
  },
  {
    "slug": "mountain-photography",
    "title": "Mountain Photography & Visual Observation",
    "eyebrow": "VISUAL FIELD NOTES / PRACTICE",
    "description": "Use photographs to document mountain landscapes, light, weather and ecological change while minimising disturbance and preserving evidence.",
    "image": "mountain-photography.svg",
    "category": "Field skills",
    "contentFile": "mountain-photography.md",
    "read": "5 min"
  },
  {
    "slug": "snow-and-avalanches",
    "title": "Mountain Snowpack, Avalanches & Winter Terrain",
    "eyebrow": "SNOW / TERRAIN / PREPAREDNESS",
    "description": "Learn how snow layers, weather, slope shape and terrain traps combine to create avalanche conditions—and why forecasts and training matter.",
    "image": "snow-and-avalanches.svg",
    "category": "Mountain safety",
    "contentFile": "snow-and-avalanches.md",
    "read": "8 min"
  },
  {
    "slug": "soil-and-erosion",
    "title": "Mountain Soils, Erosion & Slope Processes",
    "eyebrow": "SOILS / LAND SHAPE / STABILITY",
    "description": "Study how parent rock, climate, organisms, slope and time create mountain soils—and how water and gravity move material downhill.",
    "image": "soil-and-erosion.svg",
    "category": "Earth science",
    "contentFile": "soil-and-erosion.md",
    "read": "7 min"
  },
  {
    "slug": "pyrenees",
    "title": "The Pyrenees",
    "eyebrow": "REGIONAL ATLAS / FRANCE & SPAIN",
    "description": "Explore the mountain barrier between the Iberian Peninsula and the rest of Europe, with alpine habitats, pastoral landscapes and varied geology.",
    "image": "pyrenees.svg",
    "category": "Mountain range",
    "contentFile": "pyrenees.md",
    "read": "6 min"
  },
  {
    "slug": "carpathians",
    "title": "The Carpathian Mountains",
    "eyebrow": "REGIONAL ATLAS / CENTRAL & EASTERN EUROPE",
    "description": "Study one of Europe’s major mountain arcs, known for forest landscapes, grasslands, large mammals and cultural diversity.",
    "image": "carpathians.svg",
    "category": "Mountain range",
    "contentFile": "carpathians.md",
    "read": "6 min"
  },
  {
    "slug": "alaska-range",
    "title": "The Alaska Range",
    "eyebrow": "REGIONAL ATLAS / ALASKA",
    "description": "Explore a high-latitude mountain system shaped by tectonics, glaciers, extreme weather and large connected wilderness areas.",
    "image": "alaska-range.svg",
    "category": "Mountain range",
    "contentFile": "alaska-range.md",
    "read": "6 min"
  },
  {
    "slug": "cascade-range",
    "title": "The Cascade Range",
    "eyebrow": "REGIONAL ATLAS / PACIFIC NORTHWEST",
    "description": "Learn how a volcanic arc, wet forests, snowpack and river headwaters shape the landscapes of western North America.",
    "image": "cascade-range.svg",
    "category": "Mountain range",
    "contentFile": "cascade-range.md",
    "read": "6 min"
  },
  {
    "slug": "pamir-karakoram",
    "title": "The Pamirs & Karakoram",
    "eyebrow": "REGIONAL ATLAS / HIGH ASIA",
    "description": "Examine high plateaus, immense peaks, glaciers and ancient travel corridors across the mountainous heart of Asia.",
    "image": "pamir-karakoram.svg",
    "category": "Mountain range",
    "contentFile": "pamir-karakoram.md",
    "read": "6 min"
  },
  {
    "slug": "drakensberg",
    "title": "The Drakensberg",
    "eyebrow": "REGIONAL ATLAS / SOUTHERN AFRICA",
    "description": "Discover basalt escarpments, grassland plateaus, seasonal storms and distinctive mountain biodiversity in southern Africa.",
    "image": "drakensberg.svg",
    "category": "Mountain range",
    "contentFile": "drakensberg.md",
    "read": "5 min"
  },
  {
    "slug": "rwenzori-mountains",
    "title": "The Rwenzori Mountains",
    "eyebrow": "REGIONAL ATLAS / EQUATORIAL AFRICA",
    "description": "Study the “Mountains of the Moon”: equatorial glaciers, bogs, giant groundsel, cloud forest and unusual high-altitude habitats.",
    "image": "rwenzori-mountains.svg",
    "category": "Mountain range",
    "contentFile": "rwenzori-mountains.md",
    "read": "6 min"
  },
  {
    "slug": "sierra-nevada",
    "title": "The Sierra Nevada",
    "eyebrow": "REGIONAL ATLAS / WESTERN NORTH AMERICA",
    "description": "Explore granite peaks, glacial valleys, giant sequoia groves, alpine lakes and water systems of California and Nevada.",
    "image": "sierra-nevada.svg",
    "category": "Mountain range",
    "contentFile": "sierra-nevada.md",
    "read": "6 min"
  },
  {
    "slug": "tian-shan-altai",
    "title": "The Tian Shan & Altai Mountains",
    "eyebrow": "REGIONAL ATLAS / CENTRAL & EAST ASIA",
    "description": "Compare two vast mountain regions of Central and East Asia, where glaciers, steppes, forests and highland cultures meet.",
    "image": "tian-shan-altai.svg",
    "category": "Mountain range",
    "contentFile": "tian-shan-altai.md",
    "read": "6 min"
  },
  {
    "slug": "mountain-geography",
    "title": "Mountain Geography & Landform Reading",
    "eyebrow": "EARTH SCIENCE / LANDSCAPE READING",
    "description": "Learn to read ridges, passes, basins, escarpments, plateaus and valleys as connected landforms.",
    "image": "mountain-geography.svg",
    "category": "Earth science",
    "contentFile": "mountain-geography.md",
    "read": "6 min"
  },
  {
    "slug": "mountain-health-altitude",
    "title": "Human Physiology, Altitude & Acclimatisation",
    "eyebrow": "HUMAN HEALTH / ALTITUDE",
    "description": "Understand why oxygen availability declines with elevation and why fitness alone does not prevent altitude illness.",
    "image": "mountain-health-altitude.svg",
    "category": "Field skills",
    "contentFile": "mountain-health-altitude.md",
    "read": "6 min"
  },
  {
    "slug": "mountain-sounds",
    "title": "Mountain Soundscapes & Seasonal Rhythms",
    "eyebrow": "SENSORY ECOLOGY / FIELD LISTENING",
    "description": "Use birdsong, stream noise, wind, insects and seasonal sound to notice how mountain habitats change over time.",
    "image": "mountain-sounds.svg",
    "category": "Ecology",
    "contentFile": "mountain-sounds.md",
    "read": "5 min"
  },
  {
    "slug": "topics",
    "title": "Explore Every Topic",
    "eyebrow": "THE COMPLETE LEARNING LIBRARY",
    "description": "Browse the full Mountain Atlas library by subject, region, ecology, climate, culture and field skills.",
    "image": "topics.svg",
    "category": "Reference",
    "contentFile": null,
    "read": "Library index"
  }
];

const navGroups = [
  {
    "title": "Start here & foundations",
    "links": [
      [
        "Complete topic library",
        "topics"
      ],
      [
        "Mountain Earth",
        "mountain-earth"
      ],
      [
        "Mountain geography",
        "mountain-geography"
      ],
      [
        "Plate tectonics",
        "plate-tectonics"
      ],
      [
        "Rocks & minerals",
        "rocks-and-minerals"
      ],
      [
        "Volcanic mountains",
        "volcanic-mountains"
      ],
      [
        "Geology & hazards",
        "geology-hazards"
      ],
      [
        "Soils & erosion",
        "soil-and-erosion"
      ],
      [
        "World mountain ranges",
        "world-ranges"
      ],
      [
        "The vertical world",
        "altitude-zones"
      ]
    ]
  },
  {
    "title": "Regional mountain atlas",
    "links": [
      [
        "The Himalayas",
        "himalayas"
      ],
      [
        "The Andes",
        "andes"
      ],
      [
        "Rocky Mountains",
        "rocky-mountains"
      ],
      [
        "The Alps",
        "alps"
      ],
      [
        "The Caucasus",
        "caucasus"
      ],
      [
        "Atlas Mountains",
        "atlas-mountains"
      ],
      [
        "Appalachians",
        "appalachians"
      ],
      [
        "Southern Alps of New Zealand",
        "southern-alps"
      ],
      [
        "Ethiopian Highlands",
        "ethiopian-highlands"
      ],
      [
        "Japanese Alps",
        "japanese-alps"
      ],
      [
        "The Urals",
        "urals"
      ],
      [
        "The Pyrenees",
        "pyrenees"
      ],
      [
        "The Carpathians",
        "carpathians"
      ],
      [
        "Alaska Range",
        "alaska-range"
      ],
      [
        "Cascade Range",
        "cascade-range"
      ],
      [
        "Pamir & Karakoram",
        "pamir-karakoram"
      ],
      [
        "Drakensberg",
        "drakensberg"
      ],
      [
        "Rwenzori Mountains",
        "rwenzori-mountains"
      ],
      [
        "Sierra Nevada",
        "sierra-nevada"
      ],
      [
        "Tian Shan & Altai",
        "tian-shan-altai"
      ],
      [
        "Other mountain systems",
        "other-ranges"
      ]
    ]
  },
  {
    "title": "Landforms, ice & water",
    "links": [
      [
        "Glaciers & glacial landforms",
        "glacial-landforms"
      ],
      [
        "Rivers & watersheds",
        "river-systems"
      ],
      [
        "Water, ice & climate",
        "water-climate"
      ],
      [
        "Mountain weather",
        "mountain-weather"
      ],
      [
        "Snow & avalanches",
        "snow-and-avalanches"
      ],
      [
        "Climate change",
        "climate-change"
      ],
      [
        "Mountain weather & safety",
        "climate-and-safety"
      ]
    ]
  },
  {
    "title": "Wildlife, plants & ecology",
    "links": [
      [
        "Mountain wildlife",
        "wildlife"
      ],
      [
        "Birds of the mountains",
        "mountain-birds"
      ],
      [
        "Mountain forests & plants",
        "forests-plants"
      ],
      [
        "Alpine ecology",
        "alpine-ecology"
      ],
      [
        "Fungi, lichens & mosses",
        "fungi-and-lichens"
      ],
      [
        "Mountain insects & invertebrates",
        "mountain-invertebrates"
      ],
      [
        "Mountain food webs",
        "mountain-food-webs"
      ],
      [
        "Fire & ecological succession",
        "fire-and-succession"
      ],
      [
        "Wildlife corridors",
        "wildlife-corridors"
      ],
      [
        "Mountain conservation",
        "conservation"
      ]
    ]
  },
  {
    "title": "People, culture & livelihoods",
    "links": [
      [
        "People & culture",
        "people-culture"
      ],
      [
        "Sacred mountains",
        "sacred-mountains"
      ],
      [
        "Mountain agriculture",
        "mountain-agriculture"
      ],
      [
        "Settlements & engineering",
        "settlements-and-engineering"
      ],
      [
        "Mountain economies",
        "mountain-economies"
      ],
      [
        "Exploration history",
        "exploration-history"
      ],
      [
        "Trails & sustainable tourism",
        "trails-and-tourism"
      ]
    ]
  },
  {
    "title": "Field skills & interactive labs",
    "links": [
      [
        "Elevation explorer",
        "mountain-explorer"
      ],
      [
        "Field guide & observation",
        "field-guide"
      ],
      [
        "Mountain field research",
        "field-research"
      ],
      [
        "Maps, GIS & remote sensing",
        "maps-and-remote-sensing"
      ],
      [
        "Mountain photography",
        "mountain-photography"
      ],
      [
        "Human physiology at altitude",
        "mountain-health-altitude"
      ],
      [
        "Soundscapes & listening",
        "mountain-sounds"
      ]
    ]
  },
  {
    "title": "Reference & learning",
    "links": [
      [
        "Science glossary",
        "glossary"
      ],
      [
        "Knowledge check quiz",
        "quiz"
      ],
      [
        "References & further reading",
        "references"
      ],
      [
        "About this atlas",
        "about"
      ]
    ]
  }
];

const topNavGroups = [
  {
    "title": "Explore",
    "links": [
      [
        "All topics",
        "topics",
        "Browse the complete learning library"
      ],
      [
        "World ranges",
        "world-ranges",
        "Regional atlas"
      ],
      [
        "Mountain Earth",
        "mountain-earth",
        "Foundations and deep time"
      ],
      [
        "Vertical world",
        "altitude-zones",
        "Ecology by elevation"
      ],
      [
        "Interactive explorer",
        "mountain-explorer",
        "Move through elevation bands"
      ]
    ]
  },
  {
    "title": "Earth science",
    "links": [
      [
        "Plate tectonics",
        "plate-tectonics",
        "How mountain belts form"
      ],
      [
        "Rocks & minerals",
        "rocks-and-minerals",
        "Read the material of a range"
      ],
      [
        "Volcanic mountains",
        "volcanic-mountains",
        "Magma, landforms and hazards"
      ],
      [
        "Mountain geography",
        "mountain-geography",
        "Ridges, basins and passes"
      ],
      [
        "Soils & erosion",
        "soil-and-erosion",
        "Slope processes"
      ],
      [
        "Geology & hazards",
        "geology-hazards",
        "Earth in motion"
      ]
    ]
  },
  {
    "title": "Living world",
    "links": [
      [
        "Mountain wildlife",
        "wildlife",
        "Mammals and ecological roles"
      ],
      [
        "Mountain birds",
        "mountain-birds",
        "Wings, habitats and migration"
      ],
      [
        "Forests & plants",
        "forests-plants",
        "Trees and alpine plants"
      ],
      [
        "Alpine ecology",
        "alpine-ecology",
        "Life above the tree line"
      ],
      [
        "Fungi & lichens",
        "fungi-and-lichens",
        "Hidden relationships"
      ],
      [
        "Food webs",
        "mountain-food-webs",
        "Connections between species"
      ],
      [
        "Wildlife corridors",
        "wildlife-corridors",
        "Movement and connectivity"
      ]
    ]
  },
  {
    "title": "Water & climate",
    "links": [
      [
        "Glacial landforms",
        "glacial-landforms",
        "Evidence left by moving ice"
      ],
      [
        "Rivers & watersheds",
        "river-systems",
        "Headwaters to lowlands"
      ],
      [
        "Mountain weather",
        "mountain-weather",
        "Microclimates and forecasts"
      ],
      [
        "Snow & avalanches",
        "snow-and-avalanches",
        "Winter terrain science"
      ],
      [
        "Climate change",
        "climate-change",
        "Impacts and adaptation"
      ],
      [
        "Water, ice & climate",
        "water-climate",
        "Cryosphere and water towers"
      ]
    ]
  },
  {
    "title": "People & field desk",
    "links": [
      [
        "People & culture",
        "people-culture",
        "Mountain communities"
      ],
      [
        "Sacred mountains",
        "sacred-mountains",
        "Cultural landscapes"
      ],
      [
        "Agriculture & food",
        "mountain-agriculture",
        "Farms and pastoralism"
      ],
      [
        "Exploration history",
        "exploration-history",
        "Routes and expeditions"
      ],
      [
        "Trails & tourism",
        "trails-and-tourism",
        "Responsible recreation"
      ],
      [
        "Maps & remote sensing",
        "maps-and-remote-sensing",
        "Terrain data and GIS"
      ],
      [
        "Field research",
        "field-research",
        "Evidence and methods"
      ],
      [
        "Safety",
        "climate-and-safety",
        "Preparation and hazards"
      ],
      [
        "Glossary",
        "glossary",
        "Terms made clear"
      ],
      [
        "Quiz",
        "quiz",
        "Test what you learned"
      ]
    ]
  }
];

const rangeCards = [
  {
    "slug": "himalayas",
    "name": "Himalayas",
    "region": "Asia",
    "stat": "Everest · 8,848.86 m",
    "note": "Continental collision, glaciers and dramatic ecological gradients",
    "image": "himalayas.svg"
  },
  {
    "slug": "andes",
    "name": "Andes",
    "region": "South America",
    "stat": "A continent-spanning cordillera",
    "note": "Volcanic arcs, puna grasslands and cloud forests",
    "image": "andes.svg"
  },
  {
    "slug": "rocky-mountains",
    "name": "Rocky Mountains",
    "region": "North America",
    "stat": "Canada & United States",
    "note": "Alpine lakes, conifer forests and major headwaters",
    "image": "rocky-mountains.svg"
  },
  {
    "slug": "alps",
    "name": "Alps",
    "region": "Europe",
    "stat": "Six countries and more",
    "note": "Glacial valleys, limestone cliffs and cultural landscapes",
    "image": "alps.svg"
  },
  {
    "slug": "caucasus",
    "name": "Caucasus",
    "region": "Eurasia",
    "stat": "Between two inland seas",
    "note": "High endemism and strong contrasts between slopes",
    "image": "caucasus.svg"
  },
  {
    "slug": "atlas-mountains",
    "name": "Atlas Mountains",
    "region": "North Africa",
    "stat": "Near the Sahara",
    "note": "Seasonal water, cedar forests and semi-arid uplands",
    "image": "atlas-mountains.svg"
  },
  {
    "slug": "appalachians",
    "name": "Appalachians",
    "region": "North America",
    "stat": "An ancient mountain belt",
    "note": "Temperate forests, streams and remarkable salamander diversity",
    "image": "appalachians.svg"
  },
  {
    "slug": "southern-alps",
    "name": "Southern Alps",
    "region": "Oceania",
    "stat": "New Zealand · South Island",
    "note": "Rain-sculpted peaks, beech forests and alpine herbfields",
    "image": "southern-alps.svg"
  },
  {
    "slug": "ethiopian-highlands",
    "name": "Ethiopian Highlands",
    "region": "Africa",
    "stat": "Tropical high-altitude habitats",
    "note": "Geladas, Ethiopian wolves and giant lobelias",
    "image": "ethiopian-highlands.svg"
  },
  {
    "slug": "japanese-alps",
    "name": "Japanese Alps",
    "region": "Asia",
    "stat": "Honshu island mountain chains",
    "note": "Snow, forests, volcanic terrain and island endemics",
    "image": "japanese-alps.svg"
  },
  {
    "slug": "urals",
    "name": "Ural Mountains",
    "region": "Europe & Asia",
    "stat": "A conventional continental boundary",
    "note": "Taiga, tundra and old, eroded ridges",
    "image": "urals.svg"
  },
  {
    "slug": "pyrenees",
    "name": "Pyrenees",
    "region": "Europe",
    "stat": "France · Spain · Andorra",
    "note": "High passes, pastoral valleys and alpine habitats",
    "image": "pyrenees.svg"
  },
  {
    "slug": "carpathians",
    "name": "Carpathians",
    "region": "Europe",
    "stat": "Central & Eastern Europe",
    "note": "Forests, grasslands and large-mammal habitats",
    "image": "carpathians.svg"
  },
  {
    "slug": "alaska-range",
    "name": "Alaska Range",
    "region": "North America",
    "stat": "Alaska · United States",
    "note": "High-latitude glaciers, severe weather and wilderness",
    "image": "alaska-range.svg"
  },
  {
    "slug": "cascade-range",
    "name": "Cascade Range",
    "region": "North America",
    "stat": "Pacific Northwest",
    "note": "Volcanic peaks, wet forests and seasonal snowpack",
    "image": "cascade-range.svg"
  },
  {
    "slug": "pamir-karakoram",
    "name": "Pamir & Karakoram",
    "region": "Asia",
    "stat": "High Asia",
    "note": "Huge peaks, glaciers and transboundary headwaters",
    "image": "pamir-karakoram.svg"
  },
  {
    "slug": "drakensberg",
    "name": "Drakensberg",
    "region": "Africa",
    "stat": "Southern Africa",
    "note": "Basalt cliffs, high grasslands and cultural heritage",
    "image": "drakensberg.svg"
  },
  {
    "slug": "rwenzori-mountains",
    "name": "Rwenzori Mountains",
    "region": "Africa",
    "stat": "Uganda · DR Congo region",
    "note": "Equatorial glaciers, bogs and giant alpine plants",
    "image": "rwenzori-mountains.svg"
  },
  {
    "slug": "sierra-nevada",
    "name": "Sierra Nevada",
    "region": "North America",
    "stat": "California · Nevada",
    "note": "Granite peaks, glacial valleys and key watersheds",
    "image": "sierra-nevada.svg"
  },
  {
    "slug": "tian-shan-altai",
    "name": "Tian Shan & Altai",
    "region": "Asia",
    "stat": "Central & East Asia",
    "note": "Glaciers, steppe, forests and highland routes",
    "image": "tian-shan-altai.svg"
  }
];

const glossary = [
  [
    "Alpine",
    "The high-elevation zone above the climatic tree line, where short growing seasons and exposure limit woody vegetation."
  ],
  [
    "Alluvial fan",
    "A fan-shaped deposit of sand, gravel and finer sediment where a stream leaves a steep valley and spreads onto flatter land."
  ],
  [
    "Aspect",
    "The compass direction a slope faces; it influences sunshine, snowmelt, temperature and moisture."
  ],
  [
    "Avalanche",
    "A rapid movement of snow down a slope; size and danger depend on snowpack, terrain and weather."
  ],
  [
    "Biodiversity",
    "The variety of life, including genes, species, habitats and ecological interactions."
  ],
  [
    "Biogeography",
    "The study of where organisms live and how geological history, climate and barriers shape their distributions."
  ],
  [
    "Cloud forest",
    "A forest frequently immersed in low cloud or mist, often supporting moisture-loving plants such as mosses and epiphytes."
  ],
  [
    "Conservation corridor",
    "A connected strip or network of habitat that helps organisms move between larger habitat areas."
  ],
  [
    "Erosion",
    "The removal and transport of soil or rock by water, ice, wind or gravity."
  ],
  [
    "Endemic",
    "Native to, and naturally restricted to, a particular geographic area."
  ],
  [
    "Fault",
    "A fracture or zone of fractures in Earth’s crust across which rocks have moved."
  ],
  [
    "Glacier",
    "A persistent body of land ice formed from accumulated and compacted snow that deforms and flows under gravity."
  ],
  [
    "Headwaters",
    "The upper source streams and catchments that feed a river system."
  ],
  [
    "Lapse rate",
    "The rate at which air temperature changes with height; the environmental rate varies with atmospheric conditions."
  ],
  [
    "Mass movement",
    "The downslope movement of rock, soil or debris under gravity, including landslides and rockfalls."
  ],
  [
    "Montane",
    "Relating to mountain environments, especially forested elevation belts below the alpine zone."
  ],
  [
    "Orographic precipitation",
    "Rain or snow produced when moist air is forced upward by a mountain barrier, cools and condenses."
  ],
  [
    "Permafrost",
    "Ground that remains at or below 0°C for at least two consecutive years."
  ],
  [
    "Rain shadow",
    "A relatively dry area downwind of a mountain barrier after air loses moisture on the windward side."
  ],
  [
    "Scree / talus",
    "Loose angular rock fragments accumulated at the base of a cliff or steep slope."
  ],
  [
    "Subduction",
    "The descent of one tectonic plate beneath another at a convergent plate boundary."
  ],
  [
    "Tree line",
    "The elevation or latitude beyond which climate prevents trees from growing as a continuous upright forest."
  ],
  [
    "Tectonic uplift",
    "The raising of Earth’s crust through tectonic forces."
  ],
  [
    "Watershed",
    "An area of land that drains water to a common river, lake or outlet; also called a catchment or drainage basin."
  ],
  [
    "Weathering",
    "The physical breakdown or chemical alteration of rock in place, without requiring its transport."
  ],
  [
    "Watershed divide",
    "A ridge or high ground separating drainage basins."
  ],
  [
    "Nival zone",
    "The highest, coldest mountain zone dominated by snow, ice and exposed rock, with very limited plant life."
  ],
  [
    "Albedo",
    "The fraction of incoming sunlight reflected by a surface; bright snow and ice have high albedo."
  ],
  [
    "Glacial retreat",
    "A reduction in a glacier’s area or length when ice loss exceeds its gain over a period."
  ],
  [
    "Ecotone",
    "A transition zone between neighbouring ecological communities, such as forest and alpine meadow."
  ],
  [
    "Accumulation zone",
    "The part of a glacier where snow gain generally exceeds ice loss over a specified period."
  ],
  [
    "Ablation",
    "Loss of snow or ice through processes such as melting, sublimation or calving."
  ],
  [
    "Albedo feedback",
    "A reinforcing effect in which reduced bright snow or ice exposes darker surfaces that absorb more sunlight."
  ],
  [
    "Allometry",
    "The relationship between an organism’s size and the size or form of its parts."
  ],
  [
    "Bedrock",
    "The solid rock beneath loose soil, sediment or weathered material."
  ],
  [
    "Biodiversity hotspot",
    "A region with exceptional endemic plant diversity that faces substantial habitat loss, under formal conservation criteria."
  ],
  [
    "Biomass",
    "The mass of living biological material in a given area or volume."
  ],
  [
    "Catchment",
    "An area from which water drains to a common outlet; also called a watershed or drainage basin."
  ],
  [
    "Cirque",
    "A bowl-shaped hollow commonly formed by glacial erosion near the head of a mountain valley."
  ],
  [
    "Climate normal",
    "A standard reference average of climate variables over a specified multi-decade period."
  ],
  [
    "Colluvium",
    "Loose material accumulated at the base of a slope mainly through gravity-driven movement."
  ],
  [
    "Continental collision",
    "Convergence between continental crustal blocks that may shorten and thicken crust and build high mountain belts."
  ],
  [
    "Cryosphere",
    "The parts of Earth where water occurs as snow, ice, glaciers, permafrost or frozen ground."
  ],
  [
    "Debris flow",
    "A rapid flow of water-saturated sediment and rock fragments down a slope or channel."
  ],
  [
    "Digital elevation model (DEM)",
    "A digital representation of ground elevation, often stored as a grid."
  ],
  [
    "Ecological succession",
    "Change in the composition and structure of a biological community through time."
  ],
  [
    "Ecosystem services",
    "Benefits people obtain from ecosystems, including material resources, regulation, cultural value and supporting processes."
  ],
  [
    "Endemic species",
    "A species whose natural distribution is restricted to a defined region."
  ],
  [
    "Environmental lapse rate",
    "The rate at which ambient air temperature changes with elevation at a particular time and place."
  ],
  [
    "Epiphyte",
    "A plant or other organism that grows on another plant for support without necessarily parasitising it."
  ],
  [
    "Firn",
    "Old compacted snow that has survived at least one melt season and is on its way to becoming glacier ice."
  ],
  [
    "Food web",
    "A network of feeding relationships through which energy and nutrients move among organisms."
  ],
  [
    "Geomorphology",
    "The study of landforms and the processes that shape them."
  ],
  [
    "Glacial erratic",
    "A boulder transported by ice and deposited far from its source rock."
  ],
  [
    "Glacier mass balance",
    "The difference between the mass a glacier gains and loses over a specified period."
  ],
  [
    "Habitat fragmentation",
    "The division of habitat into smaller or more isolated patches."
  ],
  [
    "Isostasy",
    "The tendency of Earth’s lithosphere to adjust vertically to changes in load and buoyancy."
  ],
  [
    "Karst",
    "Terrain shaped by dissolution of soluble rock, commonly limestone or dolomite."
  ],
  [
    "Lichen",
    "A stable association between a fungus and a photosynthetic partner such as an alga or cyanobacterium."
  ],
  [
    "Mass balance",
    "For a glacier, the net result of accumulation and ablation over a stated period."
  ],
  [
    "Microclimate",
    "The climate conditions in a small area, influenced by shade, terrain, wind, moisture and surface properties."
  ],
  [
    "Mycorrhiza",
    "An association between a fungus and plant roots that often affects nutrient and water acquisition."
  ],
  [
    "Orogeny",
    "A period or process of mountain building involving deformation, uplift and related geological change."
  ],
  [
    "Orographic lift",
    "The upward movement of air forced by a mountain or other topographic barrier."
  ],
  [
    "Periglacial",
    "Relating to cold-climate processes around glaciers or in environments where freeze–thaw is important."
  ],
  [
    "Phenology",
    "The timing of recurring biological events such as flowering, migration or breeding."
  ],
  [
    "Pore-water pressure",
    "The pressure exerted by water in the voids between soil or rock particles; it can affect slope stability."
  ],
  [
    "Pyroclastic density current",
    "A fast-moving, ground-hugging mixture of hot volcanic particles and gas."
  ],
  [
    "Remote sensing",
    "Collecting information about the Earth from a distance, commonly with satellite, aircraft or drone sensors."
  ],
  [
    "Resilience",
    "The ability of a system or community to absorb disturbance, adapt and continue functioning."
  ],
  [
    "Rill",
    "A small channel cut by concentrated surface runoff."
  ],
  [
    "Transect",
    "A defined line or route along which observations are systematically recorded."
  ],
  [
    "Trophic cascade",
    "Indirect effects across feeding levels in a food web, sometimes initiated by a change in predator abundance."
  ],
  [
    "Windward slope",
    "The side of a mountain facing the prevailing incoming wind in a given weather situation."
  ],
  [
    "Zonation",
    "The arrangement of habitats or species in bands associated with gradients such as elevation, moisture or exposure."
  ]
];

module.exports = { pages, navGroups, topNavGroups, rangeCards, glossary };
