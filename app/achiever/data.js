/* ═══════════════════════════════════
   Young Achievers — Central Data Store
   data.js  |  Used by all achiever pages
═══════════════════════════════════ */

/* ── READ & WRITE ── */
var PHONICS_DATA=[
  {em:'🐱',word:'CAT',sound:'cat'},{em:'🐶',word:'DOG',sound:'dog'},
  {em:'📌',word:'PIN',sound:'pin'},{em:'🐷',word:'PIG',sound:'pig'},
  {em:'🧢',word:'CAP',sound:'cap'},{em:'🏃',word:'RUN',sound:'run'},
  {em:'🌞',word:'SUN',sound:'sun'},{em:'🐜',word:'ANT',sound:'ant'},
  {em:'🏺',word:'POT',sound:'pot'},{em:'🐠',word:'FIN',sound:'fin'},
  {em:'🛏',word:'BED',sound:'bed'},{em:'🕳',word:'DIG',sound:'dig'},
  {em:'🍯',word:'JAM',sound:'jam'},{em:'🎩',word:'HAT',sound:'hat'},
  {em:'🥚',word:'EGG',sound:'egg'},{em:'🐝',word:'BUG',sound:'bug'},
  {em:'🥫',word:'CAN',sound:'can'},{em:'🌹',word:'BUD',sound:'bud'},
  {em:'🔴',word:'RED',sound:'red'},{em:'🍋',word:'WET',sound:'wet'}
];

var SIGHT_WORDS_46=[
  ['they','They are happy'],['with','Come with me'],['have','I have a toy'],
  ['this','This is fun'],['from','I came from home'],['that','I like that'],
  ['she','She runs fast'],['for','This is for you'],['on','It is on the table'],
  ['are','We are friends'],['at','Look at me'],['be','Can it be?'],
  ['had','She had a ball'],['his','This is his book'],['not','I am not tired'],
  ['but','Small but fast'],['what','What is that?'],['all','We all played'],
  ['were','They were happy'],['we','We love school'],['when','When do we eat?'],
  ['your','This is your pen'],['can','Can you jump?'],['said','She said hello'],
  ['each','Each child smiled'],['which','Which one is yours?'],['their','Their school is big'],
  ['will','I will help you'],['other','The other friend'],['about','Tell me about it']
];

var BLEND_DATA=[
  {blend:'BL',em:'🔵',words:['Blue','Black','Blow','Blink']},
  {blend:'CR',em:'🦀',words:['Crab','Crow','Crop','Cry']},
  {blend:'FL',em:'🌸',words:['Flag','Flat','Flog','Flip']},
  {blend:'GR',em:'🌿',words:['Grass','Grab','Gray','Grip']},
  {blend:'PL',em:'🌱',words:['Play','Plan','Plot','Plug']},
  {blend:'SL',em:'🛷',words:['Slip','Sled','Slap','Slug']},
  {blend:'ST',em:'⭐',words:['Star','Step','Stop','Stem']},
  {blend:'TR',em:'🌳',words:['Tree','Trap','Trip','Trim']},
  {blend:'BR',em:'🧱',words:['Brick','Brag','Brim','Bred']},
  {blend:'CL',em:'🎪',words:['Clap','Clay','Club','Clog']},
  {blend:'DR',em:'🥁',words:['Drum','Drop','Draw','Drip']},
  {blend:'FR',em:'🐸',words:['Frog','From','Free','Fray']},
  {blend:'PR',em:'🎁',words:['Pray','Pram','Prep','Prom']},
  {blend:'SC',em:'🔭',words:['Scan','Scam','Scat','Scop']},
  {blend:'SW',em:'🦢',words:['Swim','Swap','Swan','Swam']}
];

var RHYME_FAMILIES=[
  {family:'-AT',words:['Cat','Bat','Hat','Mat','Rat','Sat']},
  {family:'-AN',words:['Can','Fan','Man','Pan','Ran','Van']},
  {family:'-OG',words:['Dog','Fog','Hog','Log','Jog','Bog']},
  {family:'-IG',words:['Big','Dig','Fig','Pig','Wig','Jig']},
  {family:'-UN',words:['Bun','Fun','Gun','Run','Sun','Pun']},
  {family:'-OP',words:['Cop','Hop','Mop','Pop','Top','Bop']},
  {family:'-EN',words:['Ben','Den','Hen','Men','Pen','Ten']},
  {family:'-IP',words:['Dip','Hip','Lip','Rip','Sip','Tip']},
  {family:'-OT',words:['Cot','Dot','Got','Hot','Lot','Not']},
  {family:'-ED',words:['Bed','Fed','Led','Red','Ted','Wed']},
  {family:'-IN',words:['Bin','Din','Fin','Pin','Sin','Tin']},
  {family:'-UG',words:['Bug','Dug','Hug','Jug','Mug','Rug']}
];

var SPELL_WORDS=[
  {em:'🐱',word:'CAT',hint:'A furry pet that says meow'},
  {em:'⭐',word:'STAR',hint:'Shines in the night sky'},
  {em:'🌍',word:'EARTH',hint:'The planet we live on'},
  {em:'🍎',word:'APPLE',hint:'A red or green fruit'},
  {em:'🌈',word:'RAINBOW',hint:'Appears after rain'},
  {em:'🐘',word:'ELEPHANT',hint:'Biggest land animal'},
  {em:'🚂',word:'TRAIN',hint:'Runs on a railway track'},
  {em:'🌸',word:'FLOWER',hint:'Pretty and smells nice'},
  {em:'📚',word:'BOOK',hint:'You read to learn'},
  {em:'🎵',word:'MUSIC',hint:'Beautiful sounds'},
  {em:'🏠',word:'HOUSE',hint:'Where you live'},
  {em:'🌙',word:'MOON',hint:'Shines at night'},
  {em:'🐬',word:'DOLPHIN',hint:'Smart sea animal'},
  {em:'🦁',word:'LION',hint:'King of the jungle'},
  {em:'🍓',word:'STRAWBERRY',hint:'Red juicy berry'},
  {em:'✏️',word:'PENCIL',hint:'You write with it'},
  {em:'🎨',word:'COLOUR',hint:'Red, blue, green...'},
  {em:'🦋',word:'BUTTERFLY',hint:'Flies from flower to flower'},
  {em:'🏔️',word:'MOUNTAIN',hint:'Very tall land mass'},
  {em:'🌞',word:'SUNSHINE',hint:'Warm light from the sun'}
];

/* ── WORD POWER ── */
var OPPOSITES_46=[
  {w1:'Big',e1:'🐘',w2:'Small',e2:'🐭'},{w1:'Hot',e1:'🔥',w2:'Cold',e2:'🧊'},
  {w1:'Day',e1:'☀️',w2:'Night',e2:'🌙'},{w1:'Happy',e1:'😊',w2:'Sad',e2:'😢'},
  {w1:'Fast',e1:'🐆',w2:'Slow',e2:'🐢'},{w1:'Up',e1:'⬆️',w2:'Down',e2:'⬇️'},
  {w1:'Open',e1:'📂',w2:'Closed',e2:'📁'},{w1:'Full',e1:'🥣',w2:'Empty',e2:'🫙'},
  {w1:'Clean',e1:'✨',w2:'Dirty',e2:'🪣'},{w1:'Tall',e1:'🦒',w2:'Short',e2:'🐾'},
  {w1:'Heavy',e1:'🏋️',w2:'Light',e2:'🪶'},{w1:'Hard',e1:'🪨',w2:'Soft',e2:'🧸'},
  {w1:'Wet',e1:'💧',w2:'Dry',e2:'🌵'},{w1:'New',e1:'🆕',w2:'Old',e2:'📜'},
  {w1:'Push',e1:'🚪',w2:'Pull',e2:'⛓️'},{w1:'Left',e1:'⬅️',w2:'Right',e2:'➡️'},
  {w1:'Strong',e1:'💪',w2:'Weak',e2:'😮'},{w1:'Wide',e1:'🛣️',w2:'Narrow',e2:'🪜'},
  {w1:'Begin',e1:'🟢',w2:'End',e2:'🏁'},{w1:'Love',e1:'❤️',w2:'Hate',e2:'💔'}
];

var SYNONYMS_DATA=[
  {word:'Happy',synonyms:['Joyful','Pleased','Glad','Cheerful'],em:'😊'},
  {word:'Big',synonyms:['Large','Huge','Giant','Enormous'],em:'🐘'},
  {word:'Small',synonyms:['Tiny','Little','Mini','Petite'],em:'🐭'},
  {word:'Fast',synonyms:['Quick','Swift','Rapid','Speedy'],em:'🐆'},
  {word:'Brave',synonyms:['Bold','Fearless','Daring','Courageous'],em:'🦁'},
  {word:'Cold',synonyms:['Chilly','Icy','Frosty','Cool'],em:'🧊'},
  {word:'Angry',synonyms:['Mad','Furious','Cross','Upset'],em:'😠'},
  {word:'Pretty',synonyms:['Beautiful','Lovely','Cute','Gorgeous'],em:'🌸'},
  {word:'Smart',synonyms:['Clever','Bright','Wise','Intelligent'],em:'🎓'},
  {word:'Tired',synonyms:['Sleepy','Weary','Worn out','Drowsy'],em:'😴'},
  {word:'Funny',synonyms:['Silly','Amusing','Hilarious','Comic'],em:'🤣'},
  {word:'Strong',synonyms:['Powerful','Mighty','Tough','Sturdy'],em:'💪'},
  {word:'Kind',synonyms:['Gentle','Caring','Friendly','Helpful'],em:'🤗'},
  {word:'Noisy',synonyms:['Loud','Rowdy','Boisterous','Clamorous'],em:'📢'},
  {word:'Strange',synonyms:['Odd','Weird','Unusual','Peculiar'],em:'🤔'}
];

var WORD_FAMILIES=[
  {root:'-IGHT',words:[{word:'Light',em:'💡'},{word:'Night',em:'🌙'},{word:'Bright',em:'✨'},{word:'Right',em:'✅'},{word:'Sight',em:'👁️'},{word:'Fight',em:'🥊'}]},
  {root:'-OUN',words:[{word:'Sound',em:'🔊'},{word:'Round',em:'⭕'},{word:'Found',em:'🔍'},{word:'Ground',em:'🌍'},{word:'Bound',em:'⛓️'},{word:'Mound',em:'⛰️'}]},
  {root:'-AKE',words:[{word:'Lake',em:'🏞️'},{word:'Cake',em:'🎂'},{word:'Make',em:'🔨'},{word:'Take',em:'✋'},{word:'Bake',em:'🍪'},{word:'Wake',em:'⏰'}]},
  {root:'-OOL',words:[{word:'Pool',em:'🏊'},{word:'Cool',em:'🌬️'},{word:'Tool',em:'🔧'},{word:'Fool',em:'🤡'},{word:'School',em:'🏫'},{word:'Stool',em:'🪑'}]},
  {root:'-EAT',words:[{word:'Eat',em:'🍽️'},{word:'Heat',em:'🔥'},{word:'Meat',em:'🥩'},{word:'Beat',em:'🥁'},{word:'Seat',em:'💺'},{word:'Treat',em:'🍭'}]},
  {root:'-AIL',words:[{word:'Mail',em:'📬'},{word:'Tail',em:'🦊'},{word:'Sail',em:'⛵'},{word:'Rail',em:'🚂'},{word:'Trail',em:'🥾'},{word:'Snail',em:'🐌'}]}
];

var COMPOUND_WORDS=[
  {w1:'Sun',w2:'Flower',compound:'Sunflower',em:'🌻'},{w1:'Rain',w2:'Bow',compound:'Rainbow',em:'🌈'},
  {w1:'Star',w2:'Fish',compound:'Starfish',em:'⭐'},{w1:'Sand',w2:'Box',compound:'Sandbox',em:'🏖️'},
  {w1:'Cup',w2:'Cake',compound:'Cupcake',em:'🧁'},{w1:'Fire',w2:'Fly',compound:'Firefly',em:'🪲'},
  {w1:'Butter',w2:'Fly',compound:'Butterfly',em:'🦋'},{w1:'Sea',w2:'Shell',compound:'Seashell',em:'🐚'},
  {w1:'Book',w2:'Worm',compound:'Bookworm',em:'📚'},{w1:'Moon',w2:'Light',compound:'Moonlight',em:'🌕'},
  {w1:'Snow',w2:'Flake',compound:'Snowflake',em:'❄️'},{w1:'Water',w2:'Fall',compound:'Waterfall',em:'🌊'},
  {w1:'Over',w2:'Night',compound:'Overnight',em:'🌙'},{w1:'Play',w2:'Ground',compound:'Playground',em:'🛝'},
  {w1:'Eye',w2:'Brow',compound:'Eyebrow',em:'🤨'},{w1:'Foot',w2:'Print',compound:'Footprint',em:'👣'},
  {w1:'Note',w2:'Book',compound:'Notebook',em:'📒'},{w1:'Hand',w2:'Bag',compound:'Handbag',em:'👜'},
  {w1:'Door',w2:'Bell',compound:'Doorbell',em:'🔔'},{w1:'Week',w2:'End',compound:'Weekend',em:'🎉'}
];

var VOCAB_QUIZ_46=[
  {em:'🌧️',q:'What do we call water falling from the sky?',opts:['Rain','Wind','Fog','Snow'],a:0},
  {em:'🌍',q:'What is the name of the big ball we live on?',opts:['Moon','Star','Earth','Mars'],a:2},
  {em:'🐛',q:'What does a caterpillar turn into?',opts:['Bird','Butterfly','Bee','Bat'],a:1},
  {em:'🌡️',q:'What do we use to measure how hot it is?',opts:['Scale','Clock','Thermometer','Ruler'],a:2},
  {em:'🌊',q:'What covers most of the Earth\'s surface?',opts:['Sand','Ice','Water','Grass'],a:2},
  {em:'🌙',q:'What do we call the shape of the moon when fully round?',opts:['Half Moon','New Moon','Full Moon','Quarter Moon'],a:2},
  {em:'🐝',q:'What do bees make?',opts:['Milk','Honey','Butter','Juice'],a:1},
  {em:'🌱',q:'What does a seed need to grow into a plant?',opts:['Only water','Only sunlight','Water, soil & sun','Just soil'],a:2},
  {em:'🌈',q:'How many colours are in a rainbow?',opts:['5','6','7','8'],a:2},
  {em:'🐠',q:'What do fish use to breathe underwater?',opts:['Nose','Gills','Lungs','Mouth'],a:1},
  {em:'🦴',q:'What is the hardest part inside our body?',opts:['Muscle','Bone','Skin','Fat'],a:1},
  {em:'🌡️',q:'Which season is the hottest?',opts:['Winter','Monsoon','Spring','Summer'],a:3},
  {em:'🌿',q:'What is the green part of a plant that makes food?',opts:['Root','Stem','Leaf','Flower'],a:2},
  {em:'🐸',q:'An animal that lives both in water and on land is called?',opts:['Reptile','Amphibian','Mammal','Bird'],a:1},
  {em:'⭕',q:'How many sides does a circle have?',opts:['1','0','2','4'],a:1},
  {em:'🕐',q:'How many minutes are in one hour?',opts:['30','45','60','100'],a:2},
  {em:'📅',q:'How many days are in a week?',opts:['5','6','7','8'],a:2},
  {em:'🗓️',q:'Which month comes after March?',opts:['May','February','January','April'],a:3},
  {em:'🌏',q:'Which is the largest continent?',opts:['Africa','Australia','Asia','Europe'],a:2},
  {em:'🦋',q:'What is the stage before a butterfly?',opts:['Egg','Larva','Caterpillar','Pupa'],a:2}
];

/* ── SCIENCE WORLD ── */
var BODY_PARTS=[
  {em:'👁️',part:'Eyes',fact:'We see with our eyes'},
  {em:'👂',part:'Ears',fact:'We hear with our ears'},
  {em:'👃',part:'Nose',fact:'We smell with our nose'},
  {em:'👅',part:'Tongue',fact:'We taste with our tongue'},
  {em:'🦷',part:'Teeth',fact:'We chew food with teeth'},
  {em:'🦶',part:'Feet',fact:'We walk with our feet'},
  {em:'🤲',part:'Hands',fact:'We hold things with hands'},
  {em:'🫀',part:'Heart',fact:'Pumps blood through the body'},
  {em:'🫁',part:'Lungs',fact:'Help us breathe air'},
  {em:'🧠',part:'Brain',fact:'Controls everything we do'},
  {em:'🦴',part:'Bones',fact:'Give our body its shape'},
  {em:'💪',part:'Muscles',fact:'Help us move and be strong'},
  {em:'🩸',part:'Blood',fact:'Carries oxygen everywhere'},
  {em:'🦻',part:'Ear',fact:'Also helps with balance'},
  {em:'🔬',part:'Skin',fact:'Protects us from germs'}
];

var BODY_QUIZ=[
  {em:'👁️',q:'How many eyes do we have?',opts:['1','2','3','4'],a:1},
  {em:'🦷',q:'What do we use to chew our food?',opts:['Lips','Tongue','Teeth','Cheeks'],a:2},
  {em:'🫀',q:'What organ pumps blood through our body?',opts:['Brain','Lungs','Stomach','Heart'],a:3},
  {em:'🧠',q:'Which organ controls everything we think and feel?',opts:['Heart','Lungs','Brain','Stomach'],a:2},
  {em:'🫁',q:'What do we use to breathe?',opts:['Heart','Lungs','Kidneys','Liver'],a:1},
  {em:'🦴',q:'How many bones are in the human body?',opts:['50','100','206','300'],a:2},
  {em:'👁️',q:'What is the coloured part of your eye called?',opts:['Pupil','Iris','Retina','Cornea'],a:1},
  {em:'🤲',q:'What is on the tips of our fingers?',opts:['Nails','Scales','Feathers','Claws'],a:0},
  {em:'👃',q:'What do we use to smell flowers?',opts:['Eyes','Ears','Nose','Mouth'],a:2},
  {em:'👅',q:'What helps us taste sweet and sour?',opts:['Nose','Tongue','Teeth','Lips'],a:1},
  {em:'💪',q:'What makes our body move?',opts:['Bones','Skin','Muscles','Blood'],a:2},
  {em:'🩸',q:'What colour is blood?',opts:['Blue','Yellow','Green','Red'],a:3},
  {em:'🦶',q:'How many toes does a person have in total?',opts:['5','8','10','12'],a:2},
  {em:'🧠',q:'Which is the largest organ in the human body?',opts:['Heart','Brain','Liver','Skin'],a:3},
  {em:'🫀',q:'How many times does the heart beat per minute (approx)?',opts:['30','60-100','120-200','200+'],a:1}
];

var PLANTS_DATA=[
  {em:'🌱',part:'Seed',fact:'Plants grow from seeds'},
  {em:'🌿',part:'Root',fact:'Roots absorb water from soil'},
  {em:'🪵',part:'Stem',fact:'The stem carries water to leaves'},
  {em:'🍃',part:'Leaf',fact:'Leaves make food using sunlight'},
  {em:'🌸',part:'Flower',fact:'Flowers help make new plants'},
  {em:'🍎',part:'Fruit',fact:'Fruits contain seeds inside'}
];

var PLANTS_QUIZ=[
  {em:'🌱',q:'What do plants need to make their own food?',opts:['Darkness','Sunlight','Cold air','Sand'],a:1},
  {em:'💧',q:'Which part of the plant absorbs water from the soil?',opts:['Leaves','Flowers','Roots','Stem'],a:2},
  {em:'🌿',q:'What is the process called when plants make food?',opts:['Digestion','Photosynthesis','Respiration','Cooking'],a:1},
  {em:'🍃',q:'What gas do plants give out that we breathe?',opts:['Carbon dioxide','Nitrogen','Oxygen','Hydrogen'],a:2},
  {em:'🌸',q:'Which part of a plant makes new seeds?',opts:['Root','Stem','Leaf','Flower'],a:3},
  {em:'🌧️',q:'What do plants need along with sunlight to grow?',opts:['Only light','Water & soil','Just soil','Nothing'],a:1},
  {em:'🌵',q:'What type of plant can store water in its stem?',opts:['Rose','Cactus','Mango tree','Banyan'],a:1},
  {em:'🪴',q:'What is the green colour in leaves called?',opts:['Melanin','Chlorophyll','Carotene','Pigment'],a:1},
  {em:'🍂',q:'Why do some trees lose their leaves in autumn?',opts:['To grow faster','To save water & energy','Because of rain','They are sick'],a:1},
  {em:'🌻',q:'Which plant turns to face the sun?',opts:['Rose','Lotus','Sunflower','Cactus'],a:2}
];

var ANIMALS_DATA=[
  {em:'🦁',name:'Lion',habitat:'Grassland',food:'Meat',type:'Mammal'},
  {em:'🐬',name:'Dolphin',habitat:'Ocean',food:'Fish',type:'Mammal'},
  {em:'🦅',name:'Eagle',habitat:'Mountains',food:'Meat',type:'Bird'},
  {em:'🐸',name:'Frog',habitat:'Pond',food:'Insects',type:'Amphibian'},
  {em:'🐍',name:'Snake',habitat:'Forest',food:'Rodents',type:'Reptile'},
  {em:'🦋',name:'Butterfly',habitat:'Garden',food:'Nectar',type:'Insect'},
  {em:'🐘',name:'Elephant',habitat:'Forest',food:'Plants',type:'Mammal'},
  {em:'🦜',name:'Parrot',habitat:'Forest',food:'Seeds',type:'Bird'},
  {em:'🐢',name:'Tortoise',habitat:'Land/Water',food:'Plants',type:'Reptile'},
  {em:'🐝',name:'Bee',habitat:'Garden',food:'Nectar',type:'Insect'},
  {em:'🦈',name:'Shark',habitat:'Ocean',food:'Fish',type:'Fish'},
  {em:'🐧',name:'Penguin',habitat:'Antarctica',food:'Fish',type:'Bird'},
  {em:'🦓',name:'Zebra',habitat:'Grassland',food:'Grass',type:'Mammal'},
  {em:'🦎',name:'Lizard',habitat:'Desert',food:'Insects',type:'Reptile'},
  {em:'🐺',name:'Wolf',habitat:'Forest',food:'Meat',type:'Mammal'}
];

var ANIMALS_QUIZ=[
  {em:'🦁',q:'What is a group of lions called?',opts:['Herd','Pack','Pride','Flock'],a:2},
  {em:'🐝',q:'What do bees collect from flowers?',opts:['Water','Nectar','Juice','Dew'],a:1},
  {em:'🦋',q:'What is the stage before a butterfly?',opts:['Egg','Caterpillar','Pupa','All of these'],a:3},
  {em:'🐧',q:'Which bird cannot fly but can swim?',opts:['Eagle','Parrot','Penguin','Sparrow'],a:2},
  {em:'🦈',q:'What are fish\'s breathing organs called?',opts:['Lungs','Gills','Nostrils','Fins'],a:1},
  {em:'🐍',q:'Which animal sheds its skin?',opts:['Dog','Fish','Snake','Rabbit'],a:2},
  {em:'🦅',q:'Which bird can see very far and hunts from the sky?',opts:['Parrot','Pigeon','Eagle','Sparrow'],a:2},
  {em:'🐸',q:'What is an animal that lives both in water and on land?',opts:['Reptile','Amphibian','Mammal','Fish'],a:1},
  {em:'🐘',q:'What is the largest land animal?',opts:['Giraffe','Rhinoceros','Elephant','Hippopotamus'],a:2},
  {em:'🦁',q:'Which is the fastest land animal?',opts:['Lion','Cheetah','Tiger','Leopard'],a:1}
];

var WEATHER_DATA=[
  {em:'☀️',name:'Sunny',desc:'Hot and bright, good for playing outside'},
  {em:'🌧️',name:'Rainy',desc:'Water falls from clouds, plants get water'},
  {em:'⛅',name:'Cloudy',desc:'Clouds cover the sun, not too bright'},
  {em:'🌨️',name:'Snowy',desc:'Ice crystals fall from the sky'},
  {em:'💨',name:'Windy',desc:'Air moves fast, can fly a kite'},
  {em:'🌩️',name:'Stormy',desc:'Rain, thunder and lightning together'},
  {em:'🌈',name:'Rainbow',desc:'Appears when sun shines after rain'},
  {em:'🌫️',name:'Foggy',desc:'Thick mist makes it hard to see far'}
];

var SEASONS_DATA=[
  {em:'🌸',name:'Spring',months:'March–May',desc:'Flowers bloom, weather gets warmer'},
  {em:'☀️',name:'Summer',months:'June–Aug',desc:'Hot days, schools have holidays'},
  {em:'🍂',name:'Autumn',months:'Sep–Nov',desc:'Leaves change colour and fall'},
  {em:'❄️',name:'Winter',months:'Dec–Feb',desc:'Cold and frosty, wear coats'}
];

var WEATHER_QUIZ=[
  {em:'⛈️',q:'What causes thunder and lightning?',opts:['Wind','Clouds bumping','Electrical storm','Rain'],a:2},
  {em:'🌈',q:'What must happen for a rainbow to appear?',opts:['Just rain','Just sunshine','Sun + Rain together','Wind + Clouds'],a:2},
  {em:'❄️',q:'What is frozen rain called?',opts:['Hail','Snow','Sleet','Ice'],a:1},
  {em:'☀️',q:'Which layer protects us from the sun\'s harmful rays?',opts:['Atmosphere','Ozone layer','Cloud layer','Troposphere'],a:1},
  {em:'🌡️',q:'In which season is it coldest?',opts:['Spring','Summer','Autumn','Winter'],a:3},
  {em:'🌦️',q:'What is the water cycle?',opts:['Rain only','Water moving from clouds to earth and back','Just evaporation','Just condensation'],a:1},
  {em:'🌬️',q:'What causes wind?',opts:['Earth spinning','Differences in air pressure','Sun heating clouds','Moon gravity'],a:1},
  {em:'🌸',q:'In which season do flowers bloom?',opts:['Summer','Winter','Spring','Autumn'],a:2}
];

var SPACE_DATA=[
  {em:'🌞',name:'Sun',fact:'A giant star, the centre of our solar system'},
  {em:'🌍',name:'Earth',fact:'Our home planet, 3rd from the sun'},
  {em:'🌙',name:'Moon',fact:'Earth\'s natural satellite'},
  {em:'⭐',name:'Stars',fact:'Giant balls of fire far away in the sky'},
  {em:'🪐',name:'Saturn',fact:'Has beautiful rings around it'},
  {em:'🔴',name:'Mars',fact:'The red planet, 4th from the sun'},
  {em:'💫',name:'Galaxy',fact:'A huge collection of billions of stars'},
  {em:'🚀',name:'Rocket',fact:'Spacecraft used to travel to space'}
];

var SPACE_QUIZ=[
  {em:'🌞',q:'What is the centre of our solar system?',opts:['Earth','Moon','Sun','Mars'],a:2},
  {em:'🌍',q:'Which planet do we live on?',opts:['Mars','Venus','Earth','Jupiter'],a:2},
  {em:'🌙',q:'What is the moon?',opts:['A star','A planet','Earth\'s satellite','A galaxy'],a:2},
  {em:'⭐',q:'What are stars made of?',opts:['Ice','Rock','Hot gas and fire','Water'],a:2},
  {em:'🪐',q:'Which planet has rings around it?',opts:['Mars','Jupiter','Earth','Saturn'],a:3},
  {em:'🔴',q:'What colour is Mars?',opts:['Blue','Yellow','Red','Green'],a:2},
  {em:'🚀',q:'How many planets are in our solar system?',opts:['7','8','9','10'],a:1},
  {em:'🌍',q:'Which planet is closest to the Sun?',opts:['Earth','Venus','Mercury','Mars'],a:2},
  {em:'💫',q:'What do we call our galaxy?',opts:['Andromeda','Milky Way','Solar Way','Star Way'],a:1},
  {em:'🌍',q:'How long does Earth take to go around the Sun?',opts:['1 month','6 months','1 year','10 years'],a:2}
];

/* ── WORLD EXPLORER ── */
var CONTINENTS_DATA=[
  {em:'🌍',name:'Africa',countries:54,fact:'Largest number of countries',capital:'Cairo (Egypt)'},
  {em:'🌏',name:'Asia',countries:48,fact:'Largest and most populated continent',capital:'Beijing (China)'},
  {em:'🌍',name:'Europe',countries:44,fact:'Many old countries and cultures',capital:'Paris (France)'},
  {em:'🌎',name:'North America',countries:23,fact:'Third largest continent',capital:'Washington DC (USA)'},
  {em:'🌎',name:'South America',countries:12,fact:'Home to the Amazon rainforest',capital:'Brasília (Brazil)'},
  {em:'🌏',name:'Australia',countries:14,fact:'Smallest continent, has kangaroos',capital:'Canberra (Australia)'},
  {em:'❄️',name:'Antarctica',countries:0,fact:'Coldest place on Earth, no countries',capital:'No capital'}
];

var COUNTRIES_DATA=[
  {em:'🇮🇳',country:'India',capital:'New Delhi',continent:'Asia',fact:'Known for spices and yoga'},
  {em:'🇺🇸',country:'USA',capital:'Washington DC',continent:'N. America',fact:'Has 50 states'},
  {em:'🇬🇧',country:'UK',capital:'London',continent:'Europe',fact:'Home of Big Ben'},
  {em:'🇯🇵',country:'Japan',capital:'Tokyo',continent:'Asia',fact:'Land of cherry blossoms'},
  {em:'🇧🇷',country:'Brazil',capital:'Brasília',continent:'S. America',fact:'Has the Amazon River'},
  {em:'🇦🇺',country:'Australia',capital:'Canberra',continent:'Australia',fact:'Home of kangaroos'},
  {em:'🇫🇷',country:'France',capital:'Paris',continent:'Europe',fact:'Has the Eiffel Tower'},
  {em:'🇨🇳',country:'China',capital:'Beijing',continent:'Asia',fact:'Has the Great Wall'},
  {em:'🇷🇺',country:'Russia',capital:'Moscow',continent:'Europe/Asia',fact:'Largest country'},
  {em:'🇿🇦',country:'South Africa',capital:'Pretoria',continent:'Africa',fact:'Rainbow Nation'},
  {em:'🇲🇽',country:'Mexico',capital:'Mexico City',continent:'N. America',fact:'Known for tacos'},
  {em:'🇮🇹',country:'Italy',capital:'Rome',continent:'Europe',fact:'Has the Colosseum'},
  {em:'🇩🇪',country:'Germany',capital:'Berlin',continent:'Europe',fact:'Known for engineering'},
  {em:'🇨🇦',country:'Canada',capital:'Ottawa',continent:'N. America',fact:'Biggest country in Americas'},
  {em:'🇪🇬',country:'Egypt',capital:'Cairo',continent:'Africa',fact:'Has the Pyramids'},
  {em:'🇸🇦',country:'Saudi Arabia',capital:'Riyadh',continent:'Asia',fact:'Has the holy city Mecca'},
  {em:'🇰🇷',country:'South Korea',capital:'Seoul',continent:'Asia',fact:'Known for K-pop'},
  {em:'🇦🇷',country:'Argentina',capital:'Buenos Aires',continent:'S. America',fact:'Messi\'s country'},
  {em:'🇳🇬',country:'Nigeria',capital:'Abuja',continent:'Africa',fact:'Most populous African country'},
  {em:'🇦🇪',country:'UAE',capital:'Abu Dhabi',continent:'Asia',fact:'Has Burj Khalifa'}
];

var OCEANS_DATA=[
  {em:'🌊',name:'Pacific Ocean',fact:'Largest ocean in the world'},
  {em:'🌊',name:'Atlantic Ocean',fact:'Between America and Europe/Africa'},
  {em:'🌊',name:'Indian Ocean',fact:'Surrounded by India, Africa, Australia'},
  {em:'🌊',name:'Arctic Ocean',fact:'Frozen ocean around the North Pole'},
  {em:'🌊',name:'Southern Ocean',fact:'Around Antarctica at the South Pole'}
];

var WORLD_QUIZ=[
  {em:'🌍',q:'How many continents are there on Earth?',opts:['5','6','7','8'],a:2},
  {em:'🇮🇳',q:'What is the capital of India?',opts:['Mumbai','Chennai','New Delhi','Kolkata'],a:2},
  {em:'🇯🇵',q:'What is the capital of Japan?',opts:['Beijing','Seoul','Bangkok','Tokyo'],a:3},
  {em:'🌊',q:'How many oceans are there?',opts:['3','4','5','6'],a:2},
  {em:'🏔️',q:'Which is the tallest mountain in the world?',opts:['K2','Mount Everest','Alps','Kilimanjaro'],a:1},
  {em:'🌊',q:'Which is the largest ocean?',opts:['Atlantic','Indian','Arctic','Pacific'],a:3},
  {em:'🇫🇷',q:'Which country has the Eiffel Tower?',opts:['UK','Italy','France','Spain'],a:2},
  {em:'🇪🇬',q:'Which country has the famous Pyramids?',opts:['India','Egypt','China','Iraq'],a:1},
  {em:'🌍',q:'Which is the largest continent?',opts:['Africa','Europe','North America','Asia'],a:3},
  {em:'🇦🇺',q:'What is the capital of Australia?',opts:['Sydney','Melbourne','Perth','Canberra'],a:3},
  {em:'🌎',q:'Which continent has the Amazon Rainforest?',opts:['Asia','Africa','South America','Australia'],a:2},
  {em:'🌍',q:'Which is the smallest continent?',opts:['Europe','Antarctica','Australia','South America'],a:2}
];

var WORLD_FACTS=[
  {em:'🏔️',fact:'Mount Everest is the tallest mountain at 8,849 metres'},
  {em:'🌊',fact:'The Pacific Ocean is bigger than all land on Earth combined'},
  {em:'🇷🇺',fact:'Russia is the largest country, covering 11 time zones'},
  {em:'🇻🇦',fact:'Vatican City is the smallest country in the world'},
  {em:'🏜️',fact:'The Sahara is the largest hot desert in the world'},
  {em:'🌍',fact:'Earth has about 7.9 billion people living on it'},
  {em:'🐨',fact:'Koalas are found only in Australia'},
  {em:'🦁',fact:'Lions live in Africa and a small part of India'},
  {em:'🗼',fact:'The Eiffel Tower was built in 1889 in Paris, France'},
  {em:'🏯',fact:'The Great Wall of China is over 21,000 km long'},
  {em:'🌋',fact:'Indonesia has the most volcanoes of any country'},
  {em:'🦘',fact:'Australia has more kangaroos than people'}
];

/* ── LIFE SKILLS ── */
var CLOCK_46=[
  {h:3,m:0,label:"3 o'clock",opts:["2:00","3:00","4:00","5:00"]},
  {h:6,m:0,label:"6 o'clock",opts:["5:00","6:00","7:00","8:00"]},
  {h:9,m:0,label:"9 o'clock",opts:["8:00","9:00","10:00","11:00"]},
  {h:12,m:0,label:"12 o'clock",opts:["11:00","12:00","1:00","2:00"]},
  {h:1,m:0,label:"1 o'clock",opts:["12:00","1:00","2:00","3:00"]},
  {h:7,m:0,label:"7 o'clock",opts:["6:00","7:00","8:00","9:00"]},
  {h:10,m:0,label:"10 o'clock",opts:["9:00","10:00","11:00","12:00"]},
  {h:3,m:30,label:"half past 3",opts:["3:00","3:30","4:00","4:30"]},
  {h:6,m:30,label:"half past 6",opts:["6:00","6:30","7:00","7:30"]},
  {h:9,m:30,label:"half past 9",opts:["9:00","9:30","10:00","10:30"]},
  {h:12,m:30,label:"half past 12",opts:["12:00","12:30","1:00","1:30"]},
  {h:2,m:30,label:"half past 2",opts:["2:00","2:30","3:00","3:30"]}
];

var CALENDAR_DATA={
  days:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
  months:['January','February','March','April','May','June','July','August','September','October','November','December'],
  seasons:[
    {name:'Spring',months:'Mar–May',em:'🌸'},
    {name:'Summer',months:'Jun–Aug',em:'☀️'},
    {name:'Autumn',months:'Sep–Nov',em:'🍂'},
    {name:'Winter',months:'Dec–Feb',em:'❄️'}
  ]
};

var CALENDAR_QUIZ=[
  {em:'📅',q:'How many days are in a week?',opts:['5','6','7','8'],a:2},
  {em:'🗓️',q:'How many months are in a year?',opts:['10','11','12','13'],a:2},
  {em:'📅',q:'Which day comes after Friday?',opts:['Thursday','Sunday','Saturday','Monday'],a:2},
  {em:'🗓️',q:'Which month comes after June?',opts:['May','August','July','September'],a:2},
  {em:'📅',q:'How many days are in February (non-leap year)?',opts:['27','28','29','30'],a:1},
  {em:'🗓️',q:'Which is the first month of the year?',opts:['March','February','January','December'],a:2},
  {em:'📅',q:'Which is the last month of the year?',opts:['November','October','January','December'],a:3},
  {em:'🗓️',q:'How many months have 31 days?',opts:['5','6','7','8'],a:2},
  {em:'📅',q:'What day comes before Wednesday?',opts:['Monday','Thursday','Tuesday','Friday'],a:2},
  {em:'🗓️',q:'Which season has the most school holidays?',opts:['Winter','Autumn','Spring','Summer'],a:3}
];

var MONEY_DATA=[
  {em:'💰',coin:'1 Rupee',value:1,fact:'Smallest common coin'},
  {em:'💰',coin:'2 Rupees',value:2,fact:'Silver coloured coin'},
  {em:'💰',coin:'5 Rupees',value:5,fact:'Common coin for shopping'},
  {em:'💰',coin:'10 Rupees',value:10,fact:'Gold and silver colour'},
  {em:'💵',coin:'₹10 Note',value:10,fact:'Small purple note'},
  {em:'💵',coin:'₹20 Note',value:20,fact:'Green coloured note'},
  {em:'💵',coin:'₹50 Note',value:50,fact:'Fluorescent blue note'},
  {em:'💵',coin:'₹100 Note',value:100,fact:'Lavender coloured note'},
  {em:'💵',coin:'₹500 Note',value:500,fact:'Stone grey note'}
];

var MONEY_QUIZ=[
  {em:'🛒',q:'You have ₹10. A candy costs ₹3. How much is left?',opts:['₹5','₹6','₹7','₹8'],a:2},
  {em:'🍎',q:'An apple costs ₹5. How many can you buy with ₹20?',opts:['2','3','4','5'],a:2},
  {em:'💰',q:'Which is worth more — ₹50 or ₹20?',opts:['₹20','₹50','They are equal','Depends'],a:1},
  {em:'🛒',q:'You buy a book for ₹15. You pay ₹20. What is the change?',opts:['₹3','₹4','₹5','₹6'],a:2},
  {em:'🏪',q:'What do we call money given back when we pay more than price?',opts:['Profit','Change','Tax','Discount'],a:1},
  {em:'💵',q:'How many ₹5 coins make ₹20?',opts:['2','3','4','5'],a:2},
  {em:'🧸',q:'A toy costs ₹25. You have ₹30. How much change do you get?',opts:['₹3','₹4','₹5','₹6'],a:2},
  {em:'💰',q:'2 coins of ₹5 + 1 coin of ₹2 = ?',opts:['₹10','₹11','₹12','₹13'],a:2}
];

var MANNERS_DATA=[
  {em:'🙏',phrase:'Thank you',when:'Someone helps you or gives you something'},
  {em:'😊',phrase:'Please',when:'Asking for something politely'},
  {em:'🤝',phrase:'Sorry',when:'You make a mistake or hurt someone'},
  {em:'👋',phrase:'Excuse me',when:'You want to pass or get attention'},
  {em:'🌅',phrase:'Good morning',when:'You see someone in the morning'},
  {em:'🌙',phrase:'Good night',when:'Before going to sleep'},
  {em:'💚',phrase:'You are welcome',when:'Someone says thank you to you'},
  {em:'🤒',phrase:'Get well soon',when:'Someone is sick'},
  {em:'🎉',phrase:'Happy Birthday',when:'It is someone\'s birthday'},
  {em:'🎊',phrase:'Congratulations',when:'Someone wins or achieves something'}
];

var SAFETY_QUIZ=[
  {em:'🚦',q:'What does a RED traffic light mean?',opts:['Go','Wait','Slow down','Warning'],a:1},
  {em:'🚦',q:'What does a GREEN traffic light mean?',opts:['Stop','Slow','Go','Danger'],a:2},
  {em:'🔥',q:'What should you do if your clothes catch fire?',opts:['Run','Stop Drop Roll','Wave arms','Hide'],a:1},
  {em:'🚪',q:'Should you open the door for strangers?',opts:['Yes always','Only if friendly','Never without parent','If they ask nicely'],a:2},
  {em:'📞',q:'Which number do you call in India during an emergency?',opts:['100/112','999','911','123'],a:0},
  {em:'🏊',q:'What should you always wear when cycling?',opts:['Gloves','Helmet','Scarf','Boots'],a:1},
  {em:'🌊',q:'What should you do if you cannot swim?',opts:['Jump in','Stay near edge','Never near water','Only swim with adult'],a:3},
  {em:'🧴',q:'Why should we wash our hands?',opts:['To look clean','To remove germs','To feel cold','To make them soft'],a:1},
  {em:'☀️',q:'What should you put on before going out in strong sun?',opts:['Moisturiser','Sunscreen','Body lotion','Nothing'],a:1},
  {em:'🤒',q:'What should you do if a stranger offers you sweets?',opts:['Take and eat','Refuse and tell parents','Say thank you','Take and share'],a:1}
];

/* ── THINK HARD ── */
var ANALOGY_DATA=[
  {em:'🐱',q:'Cat is to Kitten as Dog is to ___?',opts:['Puppy','Cub','Calf','Foal'],a:0},
  {em:'🌞',q:'Day is to Sun as Night is to ___?',opts:['Stars','Moon','Sky','Dark'],a:1},
  {em:'🐦',q:'Bird is to Nest as Bee is to ___?',opts:['Web','Burrow','Hive','Den'],a:2},
  {em:'🌊',q:'Fish is to Water as Bird is to ___?',opts:['Land','Sky','Tree','Cloud'],a:1},
  {em:'✏️',q:'Pencil is to Write as Scissors are to ___?',opts:['Draw','Cut','Paint','Stick'],a:1},
  {em:'👁️',q:'Eye is to See as Ear is to ___?',opts:['Smell','Taste','Hear','Touch'],a:2},
  {em:'🌿',q:'Leaf is to Tree as Petal is to ___?',opts:['Root','Stem','Flower','Soil'],a:2},
  {em:'🐸',q:'Tadpole is to Frog as Caterpillar is to ___?',opts:['Moth','Butterfly','Bee','Fly'],a:1},
  {em:'🎵',q:'Ear is to Hear as Nose is to ___?',opts:['Taste','See','Smell','Touch'],a:2},
  {em:'🍞',q:'Flour is to Bread as Milk is to ___?',opts:['Tea','Butter','Water','Juice'],a:1},
  {em:'🚗',q:'Car is to Road as Boat is to ___?',opts:['Air','Land','Water','Rail'],a:2},
  {em:'📚',q:'Author is to Book as Painter is to ___?',opts:['Canvas','Photo','Song','Sculpture'],a:0},
  {em:'👑',q:'King is to Queen as Prince is to ___?',opts:['Duke','Princess','Lady','Duchess'],a:1},
  {em:'🌍',q:'Earth is to Planet as Sun is to ___?',opts:['Moon','Comet','Star','Galaxy'],a:2},
  {em:'🦁',q:'Pride is to Lions as Pack is to ___?',opts:['Elephants','Birds','Wolves','Fish'],a:2}
];

var NUMBER_PATTERNS=[
  {em:'🔢',seq:[2,4,6,8],next:10,opts:[9,10,11,12],hint:'Add 2 each time'},
  {em:'⭐',seq:[1,3,5,7],next:9,opts:[8,9,10,11],hint:'Odd numbers'},
  {em:'🌸',seq:[5,10,15,20],next:25,opts:[22,23,25,28],hint:'Count by 5'},
  {em:'🎈',seq:[10,20,30,40],next:50,opts:[45,48,50,55],hint:'Count by 10'},
  {em:'🦋',seq:[100,90,80,70],next:60,opts:[55,60,65,70],hint:'Take away 10'},
  {em:'🍎',seq:[1,2,4,8],next:16,opts:[12,14,16,18],hint:'Double each time'},
  {em:'🌈',seq:[3,6,9,12],next:15,opts:[13,14,15,16],hint:'Count by 3'},
  {em:'🐠',seq:[4,8,12,16],next:20,opts:[18,19,20,22],hint:'Count by 4'},
  {em:'🌙',seq:[50,45,40,35],next:30,opts:[28,29,30,31],hint:'Take away 5'},
  {em:'🎵',seq:[1,4,9,16],next:25,opts:[20,22,24,25],hint:'Square numbers'},
  {em:'🚂',seq:[2,5,8,11],next:14,opts:[12,13,14,15],hint:'Add 3 each time'},
  {em:'🦁',seq:[64,32,16,8],next:4,opts:[2,4,6,8],hint:'Divide by 2 each time'},
  {em:'🍪',seq:[7,14,21,28],next:35,opts:[32,33,34,35],hint:'Count by 7'},
  {em:'🌻',seq:[20,17,14,11],next:8,opts:[7,8,9,10],hint:'Take away 3'},
  {em:'🐬',seq:[1,1,2,3,5],next:8,opts:[6,7,8,9],hint:'Add the two before'}
];

var WORD_PUZZLES=[
  {em:'🐱',scrambled:'TAC',answer:'CAT',hint:'A furry pet'},
  {em:'⭐',scrambled:'RATS',answer:'STAR',hint:'Shines in the sky'},
  {em:'🌍',scrambled:'HATER',answer:'EARTH',hint:'Our planet'},
  {em:'🍎',scrambled:'PELPA',answer:'APPLE',hint:'A fruit'},
  {em:'🌈',scrambled:'WBNAORI',answer:'RAINBOW',hint:'Colours in the sky'},
  {em:'🐘',scrambled:'TPHNAELE',answer:'ELEPHANT',hint:'Big grey animal'},
  {em:'🚂',scrambled:'NRIAT',answer:'TRAIN',hint:'Runs on tracks'},
  {em:'🌸',scrambled:'OWRELF',answer:'FLOWER',hint:'Beautiful and colourful'},
  {em:'📚',scrambled:'OOKB',answer:'BOOK',hint:'You read this'},
  {em:'🎵',scrambled:'IUMSC',answer:'MUSIC',hint:'Beautiful sounds'},
  {em:'🏠',scrambled:'SUOHE',answer:'HOUSE',hint:'Where you live'},
  {em:'🌙',scrambled:'NOOM',answer:'MOON',hint:'Lights the night sky'},
  {em:'🦁',scrambled:'NOIL',answer:'LION',hint:'King of the jungle'},
  {em:'🍓',scrambled:'YRREBSARWT',answer:'STRAWBERRY',hint:'Red sweet berry'},
  {em:'✏️',scrambled:'ILCNEP',answer:'PENCIL',hint:'For writing'}
];

var LOGIC_PUZZLES=[
  {em:'🔴',q:'Red, Yellow, Green, Red, Yellow, ___?',opts:['Red','Blue','Green','Purple'],a:2},
  {em:'🌞',q:'Tom is taller than Sam. Sam is taller than Jim. Who is tallest?',opts:['Sam','Jim','Tom','All equal'],a:2},
  {em:'🍎',q:'There are 10 apples. 4 are eaten. 2 more are eaten. How many left?',opts:['4','5','6','3'],a:0},
  {em:'🔵',q:'Circle, Square, Circle, Square, ___?',opts:['Triangle','Circle','Square','Star'],a:1},
  {em:'🐱',q:'All cats are animals. Whiskers is a cat. So Whiskers is a ___?',opts:['Dog','Plant','Animal','Bird'],a:2},
  {em:'👨‍👩‍👧',q:'Maya has 2 brothers and 1 sister. How many siblings does she have?',opts:['2','3','4','5'],a:1},
  {em:'🌡️',q:'Monday was hotter than Tuesday. Wednesday was cooler than Tuesday. Which was hottest?',opts:['Tuesday','Wednesday','Monday','All same'],a:2},
  {em:'📦',q:'A box has 3 toys. Add 4 more. Then take 2 away. How many toys?',opts:['3','4','5','6'],a:2},
  {em:'🔢',q:'I am greater than 5 but less than 8. I am even. What number am I?',opts:['5','6','7','8'],a:1},
  {em:'🦁',q:'Lions eat meat. Deer eat grass. Rabbits eat ___?',opts:['Meat','Fish','Plants','Insects'],a:2}
];

var BRAIN_TEASERS=[
  {em:'🌊',riddle:'I have no feet but I run. I have no mouth but I roar. What am I?',answer:'River',opts:['Wind','River','Rain','Waterfall'],a:1},
  {em:'🔑',riddle:'I have many keys but no locks. I have space but no room. What am I?',answer:'Keyboard',opts:['Piano','Keyboard','Phone','Map'],a:1},
  {em:'⭐',riddle:'The more you take away from me, the bigger I get. What am I?',answer:'Hole',opts:['Hole','Mountain','Cloud','Shadow'],a:0},
  {em:'🌙',riddle:'I shine in the sky at night. I am not a star but I give light. What am I?',answer:'Moon',opts:['Star','Moon','Lamp','Planet'],a:1},
  {em:'🌳',riddle:'I have branches but no leaves. I have a trunk but no bark. What am I?',answer:'Bank',opts:['River','Bank','Road','Tree'],a:1},
  {em:'🎭',riddle:'What has hands but cannot clap?',answer:'Clock',opts:['Robot','Clock','Glove','Puppet'],a:1},
  {em:'🔥',riddle:'I am light as a feather, but no one can hold me for 5 minutes. What am I?',answer:'Breath',opts:['Cloud','Breath','Wind','Smoke'],a:1},
  {em:'🪞',riddle:'I speak without a mouth. I have no body, but come alive with wind. What am I?',answer:'Echo',opts:['Echo','Shadow','Reflection','Ghost'],a:0},
  {em:'🌑',riddle:'I follow you everywhere but you cannot catch me. In the dark, I disappear. What am I?',answer:'Shadow',opts:['Ghost','Shadow','Wind','Dream'],a:1},
  {em:'🕐',riddle:'I always run but never walk. I always murmur but never talk. I have a bed but I never sleep. What am I?',answer:'River',opts:['River','Clock','Wind','Car'],a:0}
];

/* ── STORY BUILDER ── */
var STORIES_DATA=[
  {
    title:'The Lion and the Mouse',em:'🦁',
    text:'Once a big lion was sleeping. A tiny mouse ran over him. The lion woke up and caught the mouse.\n\nThe mouse said, "Please let me go! One day I will help you!"\n\nThe lion laughed and let the mouse go.\n\nSoon the lion was caught in a net. He roared for help. The tiny mouse heard him and came running. The mouse nibbled the ropes and set the lion free!',
    moral:'Even the smallest friend can be the biggest help.',
    questions:[
      {q:'What was the lion doing when the mouse ran over him?',opts:['Eating','Sleeping','Running','Playing'],a:1},
      {q:'What did the mouse promise to do?',opts:['Bring food','Help one day','Run away','Play with lion'],a:1},
      {q:'How was the lion caught?',opts:['In a cage','In a net','By hunters','In a trap'],a:1},
      {q:'How did the mouse help the lion?',opts:['Called for help','Nibbled the ropes','Pushed him free','Got other animals'],a:1}
    ]
  },
  {
    title:'The Tortoise and the Hare',em:'🐢',
    text:'One day a hare and a tortoise decided to have a race. Everyone laughed because the tortoise was so slow.\n\nThe hare ran very fast and got far ahead. He thought, "I will rest here. The tortoise is so slow!"\n\nThe hare fell asleep under a tree. The tortoise kept walking slowly but steadily.\n\nWhen the hare woke up, he ran as fast as he could. But the tortoise had already crossed the finish line!\n\nSlow and steady wins the race.',
    moral:'Never give up — slow and steady wins the race.',
    questions:[
      {q:'Who raced against each other?',opts:['Cat and dog','Hare and tortoise','Lion and deer','Rabbit and fox'],a:1},
      {q:'Why did the hare stop?',opts:['He was tired','He was hungry','He thought he would win easily','He lost the path'],a:2},
      {q:'Who won the race?',opts:['Hare','Tortoise','Both tied','Neither'],a:1},
      {q:'What is the lesson of the story?',opts:['Run fast','Slow and steady wins','Sleep is good','Hares are lazy'],a:1}
    ]
  },
  {
    title:'The Three Little Pigs',em:'🐷',
    text:'Three little pigs decided to build their own houses. The first pig built a house of straw. The second pig built a house of sticks. The third pig built a house of bricks.\n\nA big bad wolf came and blew down the straw house. The first pig ran to his brother\'s stick house. The wolf blew that down too!\n\nBoth pigs ran to the brick house. The wolf huffed and puffed but could not blow it down. The clever pig had built the strongest house!',
    moral:'Work hard and prepare well — it pays off!',
    questions:[
      {q:'What did the first pig build his house with?',opts:['Sticks','Bricks','Straw','Mud'],a:2},
      {q:'Which house was the strongest?',opts:['Straw','Sticks','Bricks','Mud'],a:2},
      {q:'Who tried to blow down the houses?',opts:['A lion','A bear','A wolf','A fox'],a:2},
      {q:'What is the lesson of this story?',opts:['Build big houses','Work hard and be prepared','Three is better than one','Pigs are clever'],a:1}
    ]
  }
];

var SEQUENCE_DATA=[
  {
    title:'Making a Sandwich',em:'🥪',
    steps:[
      {em:'🍞',text:'Take two slices of bread'},
      {em:'🧈',text:'Spread butter on both slices'},
      {em:'🥬',text:'Add vegetables and filling'},
      {em:'🍞',text:'Close the sandwich with the top slice'},
      {em:'✂️',text:'Cut it in half and serve'}
    ]
  },
  {
    title:'Planting a Seed',em:'🌱',
    steps:[
      {em:'🪣',text:'Fill a pot with soil'},
      {em:'🕳️',text:'Make a small hole in the soil'},
      {em:'🌰',text:'Place the seed in the hole'},
      {em:'🌿',text:'Cover the seed with soil'},
      {em:'💧',text:'Water it and place in sunlight'}
    ]
  },
  {
    title:'Getting Ready for School',em:'🎒',
    steps:[
      {em:'⏰',text:'Wake up when alarm rings'},
      {em:'🚿',text:'Take a bath and brush teeth'},
      {em:'👕',text:'Wear your school uniform'},
      {em:'🍳',text:'Eat your breakfast'},
      {em:'🎒',text:'Pack your school bag and leave'}
    ]
  }
];

var FILL_BLANK_DATA=[
  {em:'☀️',sentence:'The ___ rises in the east every morning.',answer:'Sun',opts:['Moon','Sun','Star','Cloud']},
  {em:'🐝',sentence:'Bees make ___ from flower nectar.',answer:'Honey',opts:['Milk','Sugar','Honey','Juice']},
  {em:'🌊',sentence:'Fish live and swim in the ___.',answer:'Water',opts:['Sky','Land','Water','Air']},
  {em:'📚',sentence:'We go to ___ to study and learn.',answer:'School',opts:['Park','Home','School','Market']},
  {em:'🎵',sentence:'We use our ears to ___ music.',answer:'Hear',opts:['See','Smell','Hear','Touch']},
  {em:'🌙',sentence:'Owls sleep during the day and come out at ___.',answer:'Night',opts:['Dawn','Night','Noon','Evening']},
  {em:'🌱',sentence:'A plant grows from a tiny ___.',answer:'Seed',opts:['Leaf','Root','Seed','Flower']},
  {em:'🔥',sentence:'Ice melts and turns to water when it gets ___.',answer:'Hot',opts:['Cold','Hot','Wet','Dark']},
  {em:'🦋',sentence:'A caterpillar becomes a ___ after it forms a cocoon.',answer:'Butterfly',opts:['Bee','Moth','Butterfly','Bird']},
  {em:'🌍',sentence:'The ___ is the planet we all live on.',answer:'Earth',opts:['Moon','Sun','Earth','Mars']},
  {em:'🎨',sentence:'Red, blue and yellow are called ___ colours.',answer:'Primary',opts:['Secondary','Primary','Bright','Dark']},
  {em:'💧',sentence:'Two hydrogen and one oxygen make ___.',answer:'Water',opts:['Air','Fire','Water','Soil']}
];

var MORAL_STORIES=[
  {em:'🦁',title:'The Lion and the Mouse',moral:'Even the smallest friend can be the biggest help.',lesson:'Be kind to everyone, no matter how small they are.'},
  {em:'🐢',title:'The Tortoise and the Hare',moral:'Slow and steady wins the race.',lesson:'Never give up. Keep trying and you will succeed.'},
  {em:'🐷',title:'The Three Little Pigs',moral:'Hard work and preparation always pay off.',lesson:'Do things properly the first time — it saves trouble later.'},
  {em:'🦅',title:'The Eagle and the Crow',moral:'Know your own strengths and limits.',lesson:'Do not copy others blindly. You are special in your own way.'},
  {em:'🐦',title:'The Bird and the Pitcher',moral:'Where there is a will, there is a way.',lesson:'Think carefully and keep trying. You can solve any problem.'},
  {em:'🌾',title:'The Ant and the Grasshopper',moral:'Work hard today for a better tomorrow.',lesson:'Always be prepared. Do not leave important things for later.'},
  {em:'🐺',title:'The Boy Who Cried Wolf',moral:'Always tell the truth.',lesson:'If you lie, people will not believe you when you really need help.'},
  {em:'🥂',title:'Thirsty Crow',moral:'Clever thinking solves problems.',lesson:'Use your brain. A smart idea is worth more than strength.'}
];

/* ── CHALLENGE (pool for speed/streak/mixed) ── */
var ALL_QUIZ_POOL = (function(){
  var pool=[];
  VOCAB_QUIZ_46.forEach(function(q){pool.push({cat:'Vocab',q:q.q,opts:q.opts,a:q.a,em:q.em});});
  WORLD_QUIZ.forEach(function(q){pool.push({cat:'World',q:q.q,opts:q.opts,a:q.a,em:q.em});});
  BODY_QUIZ.forEach(function(q){pool.push({cat:'Body',q:q.q,opts:q.opts,a:q.a,em:q.em});});
  PLANTS_QUIZ.forEach(function(q){pool.push({cat:'Plants',q:q.q,opts:q.opts,a:q.a,em:q.em});});
  ANIMALS_QUIZ.forEach(function(q){pool.push({cat:'Animals',q:q.q,opts:q.opts,a:q.a,em:q.em});});
  WEATHER_QUIZ.forEach(function(q){pool.push({cat:'Weather',q:q.q,opts:q.opts,a:q.a,em:q.em});});
  SPACE_QUIZ.forEach(function(q){pool.push({cat:'Space',q:q.q,opts:q.opts,a:q.a,em:q.em});});
  CALENDAR_QUIZ.forEach(function(q){pool.push({cat:'Calendar',q:q.q,opts:q.opts,a:q.a,em:q.em});});
  MONEY_QUIZ.forEach(function(q){pool.push({cat:'Money',q:q.q,opts:q.opts,a:q.a,em:q.em});});
  SAFETY_QUIZ.forEach(function(q){pool.push({cat:'Safety',q:q.q,opts:q.opts,a:q.a,em:q.em});});
  ANALOGY_DATA.forEach(function(q){pool.push({cat:'Analogy',q:q.q,opts:q.opts,a:q.a,em:q.em});});
  LOGIC_PUZZLES.forEach(function(q){pool.push({cat:'Logic',q:q.q,opts:q.opts,a:q.a,em:q.em});});
  return pool;
})();
