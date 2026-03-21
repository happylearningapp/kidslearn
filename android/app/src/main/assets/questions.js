/* ═══════════════════════════════════════════
   Happy Learning World — Central Question Bank
   questions.js
   Used by: quiz.html, think.html, numbers.html, games.html
═══════════════════════════════════════════ */

/* ══════════════════════════════
   FROM quiz.html
══════════════════════════════ */
var GKCAT = [
  {n:"About Me",      i:"&#128102;", c:"#E91E63", bg:"#FCE4EC", br:"#F48FB1"},
  {n:"Colors",        i:"&#127912;", c:"#F9A825", bg:"#FFFDE7", br:"#FFE082"},
  {n:"Numbers",       i:"&#128290;", c:"#1976D2", bg:"#E3F2FD", br:"#90CAF9"},
  {n:"Shapes",        i:"&#128311;", c:"#9C27B0", bg:"#F3E5F5", br:"#CE93D8"},
  {n:"Animals",       i:"&#128062;", c:"#FF8E53", bg:"#FFF3E0", br:"#FFCC80"},
  {n:"Birds",         i:"&#128038;", c:"#29B6F6", bg:"#E1F5FE", br:"#81D4FA"},
  {n:"Fruits",        i:"&#127822;", c:"#FF6B6B", bg:"#FFEBEE", br:"#EF9A9A"},
  {n:"Vegetables",    i:"&#129382;", c:"#43A047", bg:"#E8F5E9", br:"#A5D6A7"},
  {n:"Transport",     i:"&#128663;", c:"#F57C00", bg:"#FFF3E0", br:"#FFCC80"},
  {n:"Body Parts",    i:"&#129485;", c:"#E91E63", bg:"#FCE4EC", br:"#F48FB1"},
  {n:"India GK",      i:"&#127470;&#127475;", c:"#FF6B00", bg:"#FFF3E0", br:"#FFCC80"},
  {n:"Brain Teasers", i:"&#128161;", c:"#6A1B9A", bg:"#F3E5F5", br:"#CE93D8"}
];
/* Question format: [emoji, question, answer] */
var GKQ = [
  /* ── About Me (10) ── */
  ["&#128102;","What is your name?","Reyan Dutta"],
  ["&#127880;","How old are you?","3 years old"],
  ["&#127470;&#127475;","Which country do you live in?","India"],
  ["&#127750;","Which city do you live in?","Hyderabad"],
  ["&#128716;","Where do you sleep at night?","On my bed"],
  ["&#128167;","What do you drink when you are thirsty?","Water"],
  ["&#129447;","What do you use to brush your teeth?","Toothbrush"],
  ["&#128099;","What do you wear on your feet?","Shoes"],
  ["&#127979;","Where do you go to study every day?","School"],
  ["&#127890;","What carries your books to school?","A bag"],
  /* ── Colors (15) ── */
  ["&#9728;","What color is the sun?","Yellow"],
  ["&#127807;","What color is grass?","Green"],
  ["&#127780;","What color is the sky?","Blue"],
  ["&#129379;","What color is milk?","White"],
  ["&#10052;","What color is snow?","White"],
  ["&#127820;","What color is a banana?","Yellow"],
  ["&#127822;","What color is an apple?","Red"],
  ["&#127818;","What color is an orange?","Orange"],
  ["&#127851;","What color is chocolate?","Brown"],
  ["&#127827;","What color is a strawberry?","Red"],
  ["&#127815;","What color are grapes?","Green or Purple"],
  ["&#129365;","What color is a carrot?","Orange"],
  ["&#127813;","What color is a tomato?","Red"],
  ["&#127819;","What color is a lemon?","Yellow"],
  ["&#128293;","What color is fire?","Orange and Red"],
  /* ── Numbers (15) ── */
  ["&#128290;","What comes after 1?","2"],
  ["&#128290;","What comes after 5?","6"],
  ["&#128290;","What comes before 10?","9"],
  ["&#128400;","How many fingers are on one hand?","5 fingers"],
  ["&#128064;","How many eyes do we have?","2 eyes"],
  ["&#128066;","How many ears do we have?","2 ears"],
  ["&#128053;","How many legs does a dog have?","4 legs"],
  ["&#128690;","How many wheels does a bicycle have?","2 wheels"],
  ["&#128663;","How many wheels does a car have?","4 wheels"],
  ["&#128197;","How many days are in a week?","7 days"],
  ["&#128197;","How many months are in a year?","12 months"],
  ["&#128290;","What comes after 10?","11"],
  ["&#128290;","What comes before 5?","4"],
  ["&#128290;","Which is bigger: 8 or 3?","8 is bigger"],
  ["&#128290;","Which is smaller: 2 or 7?","2 is smaller"],
  /* ── Shapes (10) ── */
  ["&#11093;","Which shape looks like a ball?","Circle"],
  ["&#128314;","Which shape has 3 sides?","Triangle"],
  ["&#128998;","Which shape has 4 equal sides?","Square"],
  ["&#128682;","What shape is a door?","Rectangle"],
  ["&#129370;","Which shape looks like an egg?","Oval"],
  ["&#11088;","Which shape has 5 points?","Star"],
  ["&#129689;","What shape are coins?","Circle"],
  ["&#129695;","What shape are windows?","Square or Rectangle"],
  ["&#127829;","What shape is a pizza slice?","Triangle"],
  ["&#128142;","Which shape looks like a kite?","Diamond"],
  /* ── Animals (20) ── */
  ["&#128049;","Which animal says meow?","Cat"],
  ["&#128053;","Which animal says woof?","Dog"],
  ["&#128046;","Which animal says moo?","Cow"],
  ["&#129409;","Which animal is the king of the jungle?","Lion"],
  ["&#128024;","Which animal has a long trunk?","Elephant"],
  ["&#129427;","Which animal has black and white stripes?","Zebra"],
  ["&#128056;","Which animal jumps and croaks?","Frog"],
  ["&#129379;","Which animal gives us milk?","Cow"],
  ["&#129426;","Which animal has a very long neck?","Giraffe"],
  ["&#128018;","Which animal likes bananas?","Monkey"],
  ["&#129436;","Which animal has humps on its back?","Camel"],
  ["&#128047;","Which animal roars?","Tiger and Lion"],
  ["&#129432;","Which animal carries its baby in a pouch?","Kangaroo"],
  ["&#128034;","Which animal moves very slowly?","Turtle"],
  ["&#128031;","Which animal lives in water and has fins?","Fish"],
  ["&#128018;","Which animal swings on trees?","Monkey"],
  ["&#128051;","Which is the biggest animal in the ocean?","Whale"],
  ["&#128055;","Which pink animal likes to roll in mud?","Pig"],
  ["&#128052;","Which animal says neigh?","Horse"],
  ["&#129409;","Which animal is called the king of the jungle?","Lion"],
  /* ── Birds (10) ── */
  ["&#129434;","Which is the national bird of India?","Peacock"],
  ["&#129414;","Which bird says quack?","Duck"],
  ["&#129417;","Which bird hoots at night?","Owl"],
  ["&#129412;","Which green bird can talk?","Parrot"],
  ["&#128038;","Which small bird chirps in the morning?","Sparrow"],
  ["&#128038;","Which black bird says caw?","Crow"],
  ["&#129370;","Which birds lay eggs?","All birds lay eggs"],
  ["&#129413;","Which bird flies very high in the sky?","Eagle"],
  ["&#129442;","Which beautiful white bird swims on water?","Swan"],
  ["&#129441;","Which pink bird has very long legs?","Flamingo"],
  /* ── Fruits (10) ── */
  ["&#127820;","Which fruit is yellow and long?","Banana"],
  ["&#127822;","Which fruit a day keeps the doctor away?","Apple"],
  ["&#129389;","Which is the national fruit of India?","Mango"],
  ["&#127815;","Which fruit grows in bunches?","Grapes"],
  ["&#127817;","Which fruit is red inside and green outside?","Watermelon"],
  ["&#127821;","Which fruit has a crown on top?","Pineapple"],
  ["&#129381;","What grows on a coconut tree?","Coconut"],
  ["&#127818;","Which fruit is orange in color?","Orange"],
  ["&#127827;","Which small red fruit grows on a plant?","Strawberry"],
  ["&#127826;","Which small red fruit grows in pairs?","Cherry"],
  /* ── Vegetables (10) ── */
  ["&#129365;","Which orange vegetable do rabbits love?","Carrot"],
  ["&#129485;","Which vegetable makes you cry when you cut it?","Onion"],
  ["&#129364;","Which vegetable is used to make fries?","Potato"],
  ["&#127813;","Which vegetable is round and red?","Tomato"],
  ["&#129382;","Name a green leafy vegetable","Spinach"],
  ["&#127814;","Which vegetable is purple in color?","Brinjal (Eggplant)"],
  ["&#129362;","Which vegetable is long and green?","Cucumber"],
  ["&#129364;","Which vegetable grows underground?","Potato"],
  ["&#129382;","Which vegetable looks like a small tree?","Broccoli"],
  ["&#127805;","Which yellow vegetable has kernels in a row?","Corn"],
  /* ── Transport (10) ── */
  ["&#9992;","Which vehicle flies in the sky?","Airplane"],
  ["&#128642;","Which vehicle runs on tracks?","Train"],
  ["&#9973;","Which vehicle sails on water?","Boat"],
  ["&#128690;","Which vehicle has 2 wheels and you pedal?","Bicycle"],
  ["&#128652;","Which vehicle takes children to school?","School Bus"],
  ["&#128658;","Which vehicle puts out fire?","Fire Truck"],
  ["&#128657;","Which vehicle takes sick people to hospital?","Ambulance"],
  ["&#128641;","Which vehicle flies with rotating blades?","Helicopter"],
  ["&#128663;","Which vehicle runs on roads with 4 wheels?","Car"],
  ["&#128674;","Which vehicle travels under the sea?","Submarine"],
  /* ── Body Parts (10) ── */
  ["&#128064;","Which body part helps you see?","Eyes"],
  ["&#128066;","Which body part helps you hear?","Ears"],
  ["&#128067;","Which body part helps you smell?","Nose"],
  ["&#128069;","Which body part helps you taste?","Tongue"],
  ["&#129459;","Which body part helps you walk?","Legs"],
  ["&#128080;","Which body part helps you hold things?","Hands"],
  ["&#129504;","Which organ helps you think?","Brain"],
  ["&#10084;","Which organ pumps our blood?","Heart"],
  ["&#129463;","What do we brush every day?","Teeth"],
  ["&#129401;","Which organ helps us breathe?","Lungs"],
  /* ── India GK (10) ── */
  ["&#127757;","What is the name of our country?","India"],
  ["&#128104;","Who is the Prime Minister of India?","Narendra Modi"],
  ["&#128047;","Which is the national animal of India?","Tiger"],
  ["&#129434;","Which is the national bird of India?","Peacock"],
  ["&#129455;","Which is the national flower of India?","Lotus"],
  ["&#129389;","Which is the national fruit of India?","Mango"],
  ["&#127926;","What is the national anthem of India?","Jana Gana Mana"],
  ["&#127881;","What do we celebrate on 15th August?","Independence Day"],
  ["&#127881;","What do we celebrate on 26th January?","Republic Day"],
  ["&#127470;&#127475;","What are the three colors of the Indian flag?","Saffron, White and Green"],
  /* ── Brain Teasers (20) ── */
  ["&#9730;","What do we use when it rains?","Umbrella"],
  ["&#129137;","What do we wear when it is cold?","Jacket"],
  ["&#128716;","What do we sleep on?","Bed"],
  ["&#9986;","What is used to cut paper?","Scissors"],
  ["&#9200;","What is used to tell time?","Clock"],
  ["&#128241;","What do we use to call someone far away?","Phone"],
  ["&#128294;","What do we use to see in the dark?","Torch"],
  ["&#128394;","What is used to write on a board?","Chalk or Marker"],
  ["&#129447;","What is used to clean our teeth?","Toothbrush"],
  ["&#128273;","What is used to open a lock?","Key"],
  ["&#129490;","What is used to cook food?","Stove"],
  ["&#129379;","What do we drink every morning?","Milk"],
  ["&#128218;","What do we read to learn stories?","Book"],
  ["&#129529;","What is used to clean the floor?","Broom"],
  ["&#128717;","What do we use to carry groceries?","Bag"],
  ["&#127741;","What do we use to dry our body after a bath?","Towel"],
  ["&#129516;","What is used to wash our hands?","Soap"],
  ["&#128300;","What is used to see things far away?","Binoculars"],
  ["&#9999;","What do we use to draw pictures?","Crayons"],
  ["&#127925;","What do we use to listen to music?","Speaker"]
];
var GKBN = [0, 10, 25, 40, 50, 70, 80, 90, 100, 110, 120, 130, 150];

var MCQD = [
  {e:"&#128049;",q:"Which animal says Meow?",o:["Dog","Cat","Cow","Goat"],a:1},
  {e:"&#127780;",q:"What color is the sky?",o:["Red","Green","Blue","Yellow"],a:2},
  {e:"&#128053;",q:"How many legs does a dog have?",o:["2","4","6","8"],a:1},
  {e:"&#127820;",q:"Which fruit is yellow and long?",o:["Apple","Orange","Banana","Mango"],a:2},
  {e:"&#129447;",q:"What do we use to brush our teeth?",o:["Comb","Toothbrush","Soap","Cloth"],a:1},
  {e:"&#128024;",q:"Which animal has a long trunk?",o:["Giraffe","Elephant","Hippo","Rhino"],a:1},
  {e:"&#11093;",q:"What shape is a ball?",o:["Square","Triangle","Circle","Star"],a:2},
  {e:"&#129434;",q:"What is the national bird of India?",o:["Eagle","Crow","Peacock","Parrot"],a:2},
  {e:"&#9730;",q:"What do we use when it rains?",o:["Sunglasses","Umbrella","Hat","Jacket"],a:1},
  {e:"&#127769;",q:"When do we sleep?",o:["Morning","Afternoon","Night","Evening"],a:2},
  {e:"&#127822;",q:"Which fruit is red and round?",o:["Banana","Apple","Mango","Grapes"],a:1},
  {e:"&#128293;",q:"What should NOT be touched?",o:["Water","Toy","Fire","Book"],a:2},
  {e:"&#127979;",q:"Where do you go to study?",o:["Hospital","Zoo","School","Market"],a:2},
  {e:"&#128657;",q:"Which vehicle helps sick people?",o:["Fire Truck","Ambulance","Bus","Train"],a:1},
  {e:"&#127807;",q:"What color is grass?",o:["Red","Blue","Yellow","Green"],a:3},
  {e:"&#9728;",q:"Where does the sun rise?",o:["West","North","East","South"],a:2},
  {e:"&#129379;",q:"What color is milk?",o:["Yellow","White","Blue","Brown"],a:1},
  {e:"&#128047;",q:"What is the national animal of India?",o:["Elephant","Lion","Tiger","Leopard"],a:2},
  {e:"&#127765;",q:"What do we see in the sky at night?",o:["Sun","Moon","Rainbow","Cloud"],a:1},
  {e:"&#128064;",q:"How many eyes do we have?",o:["1","2","3","4"],a:1},
  {e:"&#128197;",q:"How many days are in a week?",o:["5","6","7","8"],a:2},
  {e:"&#127818;",q:"What color is an orange?",o:["Red","Yellow","Orange","Green"],a:2},
  {e:"&#128056;",q:"Which animal jumps near water and croaks?",o:["Cat","Frog","Dog","Cow"],a:1},
  {e:"&#128642;",q:"Which vehicle runs on tracks?",o:["Car","Boat","Train","Airplane"],a:2},
  {e:"&#127855;",q:"What do bees make?",o:["Water","Honey","Milk","Juice"],a:1},
  {e:"&#10084;",q:"Which organ pumps blood in our body?",o:["Brain","Lungs","Heart","Tummy"],a:2},
  {e:"&#127874;",q:"What do we eat on birthdays?",o:["Pizza","Cake","Sandwich","Rice"],a:1},
  {e:"&#128290;",q:"What comes after 5?",o:["4","6","7","8"],a:1},
  {e:"&#128059;",q:"Where do bears sleep in winter?",o:["Tree","Cave","Sea","Sky"],a:1},
  {e:"&#127752;",q:"How many colors are in a rainbow?",o:["5","6","7","8"],a:2}
];

/* ══════════════════════════════
   FROM think.html
══════════════════════════════ */
var PAT_DATA=[
  {seq:['🐱','🐶','🐱','🐶'],ans:'🐱',opts:['🐱','🦊','🐸']},
  {seq:['⭐','❤️','⭐','❤️'],ans:'⭐',opts:['🌙','⭐','❤️']},
  {seq:['🔴','🔵','🔴','🔵'],ans:'🔴',opts:['🔴','🟡','🟢']},
  {seq:['🌙','⭐','🌙','⭐'],ans:'🌙',opts:['☀️','🌙','⭐']},
  {seq:['🍎','🍊','🍎','🍊'],ans:'🍎',opts:['🍎','🍋','🍇']},
  {seq:['🐘','🐱','🐱','🐘'],ans:'🐱',opts:['🐱','🐶','🐘']},
  {seq:['🌻','🌸','🌸','🌻'],ans:'🌸',opts:['🌷','🌸','🌻']},
  {seq:['🍕','🍕','🍔','🍕'],ans:'🍕',opts:['🍕','🍣','🍔']},
  {seq:['🚗','🚂','🚗','🚂'],ans:'🚗',opts:['✈️','🚗','🚂']},
  {seq:['🔴','🟡','🔵','🔴'],ans:'🟡',opts:['🔵','🟡','🔴']},
  {seq:['🐶','🐱','🐸','🐶'],ans:'🐱',opts:['🐸','🐱','🐶']},
  {seq:['🌞','🌧️','🌈','🌞'],ans:'🌧️',opts:['🌈','🌧️','🌞']}
];

var SEQ_DATA=[
  {steps:['🥚','🐣'],ans:'🐔',opts:[{e:'🐔',l:'Hen'},{e:'🦋',l:'Butterfly'},{e:'🌱',l:'Plant'},{e:'🐟',l:'Fish'}],q:'Egg ➜ Chick ➜ ?'},
  {steps:['🌱','🌿'],ans:'🌳',opts:[{e:'🌳',l:'Tree'},{e:'🍎',l:'Apple'},{e:'🌸',l:'Flower'},{e:'🌊',l:'Wave'}],q:'Seed ➜ Plant ➜ ?'},
  {steps:['🐛','🫘'],ans:'🦋',opts:[{e:'🦋',l:'Butterfly'},{e:'🐝',l:'Bee'},{e:'🐢',l:'Turtle'},{e:'🐟',l:'Fish'}],q:'Caterpillar ➜ Cocoon ➜ ?'},
  {steps:['👶','🧒'],ans:'🧑',opts:[{e:'🧑',l:'Adult'},{e:'👴',l:'Old man'},{e:'🍼',l:'Bottle'},{e:'🐣',l:'Chick'}],q:'Baby ➜ Child ➜ ?'},
  {steps:['☁️','🌧️'],ans:'🌈',opts:[{e:'🌈',l:'Rainbow'},{e:'❄️',l:'Snow'},{e:'☀️',l:'Sun'},{e:'🌪️',l:'Storm'}],q:'Cloud ➜ Rain ➜ ?'},
  {steps:['🌑','🌓'],ans:'🌕',opts:[{e:'🌕',l:'Full Moon'},{e:'🌑',l:'New Moon'},{e:'⭐',l:'Star'},{e:'☀️',l:'Sun'}],q:'New Moon ➜ Half Moon ➜ ?'},
  {steps:['❄️','💧'],ans:'☁️',opts:[{e:'☁️',l:'Steam/Cloud'},{e:'❄️',l:'Ice'},{e:'🌊',l:'Sea'},{e:'🌧️',l:'Rain'}],q:'Ice ➜ Water ➜ ?'},
  {steps:['🌸','🍃'],ans:'🍁',opts:[{e:'🍁',l:'Autumn leaf'},{e:'🌸',l:'Blossom'},{e:'❄️',l:'Snow'},{e:'🌱',l:'Sprout'}],q:'Spring ➜ Summer ➜ ?'},
  {steps:['🥣','🍽️'],ans:'😊',opts:[{e:'😊',l:'Happy'},{e:'😢',l:'Sad'},{e:'😴',l:'Sleepy'},{e:'😡',l:'Angry'}],q:'Empty bowl ➜ Eating ➜ ?'},
  {steps:['🌱','🌷'],ans:'🌹',opts:[{e:'🌹',l:'Rose'},{e:'🌲',l:'Pine'},{e:'🍎',l:'Apple'},{e:'🌿',l:'Leaf'}],q:'Bud ➜ Opening ➜ ?'}
];

var FEEL_DATA=[
  {em:'🎂🎉',text:'It is your birthday today!',ans:0,opts:[{e:'😊',l:'Happy'},{e:'😢',l:'Sad'},{e:'😡',l:'Angry'},{e:'😨',l:'Scared'}]},
  {em:'🤕',text:'You fell down and hurt your knee.',ans:1,opts:[{e:'😊',l:'Happy'},{e:'😢',l:'Sad'},{e:'😴',l:'Sleepy'},{e:'😮',l:'Surprised'}]},
  {em:'👻🌑',text:'You are alone in a very dark room at night.',ans:3,opts:[{e:'😊',l:'Happy'},{e:'😢',l:'Sad'},{e:'😡',l:'Angry'},{e:'😨',l:'Scared'}]},
  {em:'🍦🎈',text:'You got your favourite ice cream!',ans:0,opts:[{e:'😊',l:'Happy'},{e:'😢',l:'Sad'},{e:'😡',l:'Angry'},{e:'😴',l:'Sleepy'}]},
  {em:'🧸💔',text:'Your favourite toy broke.',ans:1,opts:[{e:'😊',l:'Happy'},{e:'😢',l:'Sad'},{e:'😎',l:'Cool'},{e:'😮',l:'Surprised'}]},
  {em:'😤🧒',text:'Someone took your toy without asking.',ans:2,opts:[{e:'😊',l:'Happy'},{e:'😢',l:'Sad'},{e:'😡',l:'Angry'},{e:'😴',l:'Sleepy'}]},
  {em:'🎁✨',text:'You got a big surprise gift!',ans:3,opts:[{e:'😊',l:'Happy'},{e:'😢',l:'Sad'},{e:'😡',l:'Angry'},{e:'😮',l:'Surprised'}]},
  {em:'🌙⏰',text:'You played all day and now it is late night.',ans:2,opts:[{e:'😊',l:'Happy'},{e:'😢',l:'Sad'},{e:'😴',l:'Sleepy'},{e:'😡',l:'Angry'}]},
  {em:'🐕🤝',text:'You made a new friend today!',ans:0,opts:[{e:'😊',l:'Happy'},{e:'😢',l:'Sad'},{e:'😡',l:'Angry'},{e:'😴',l:'Sleepy'}]},
  {em:'🏥💉',text:'The doctor gives you a small shot.',ans:3,opts:[{e:'😊',l:'Happy'},{e:'😢',l:'Sad'},{e:'😮',l:'Surprised'},{e:'😨',l:'Scared'}]},
  {em:'🍪🚫',text:'Mum says no more cookies today.',ans:2,opts:[{e:'😊',l:'Happy'},{e:'😢',l:'Sad'},{e:'😡',l:'Upset'},{e:'😴',l:'Sleepy'}]},
  {em:'🌈✨',text:'You see a beautiful rainbow after the rain!',ans:3,opts:[{e:'😢',l:'Sad'},{e:'😡',l:'Angry'},{e:'😴',l:'Sleepy'},{e:'😮',l:'Amazed'}]}
];

var SPOT_DATA=[
  {row:['🍎','🍎','🍊','🍎','🍎'],odd:2},
  {row:['🐶','🐶','🐶','🐱','🐶'],odd:3},
  {row:['⭐','⭐','🌙','⭐','⭐'],odd:2},
  {row:['🔴','🔴','🔴','🔴','🔵'],odd:4},
  {row:['🚗','🚗','✈️','🚗','🚗'],odd:2},
  {row:['🍌','🍌','🍌','🍇','🍌'],odd:3},
  {row:['🌸','🌻','🌸','🌸','🌸'],odd:1},
  {row:['🐱','🐱','🐱','🐱','🐶'],odd:4},
  {row:['❤️','❤️','⭐','❤️','❤️'],odd:2},
  {row:['🌙','🌙','🌙','☀️','🌙'],odd:3},
  {row:['🎈','🎈','🎈','🎁','🎈'],odd:3},
  {row:['🍕','🍔','🍕','🍕','🍕'],odd:1},
  {row:['🦁','🦁','🐯','🦁','🦁'],odd:2},
  {row:['🌊','🌊','🌊','🌊','🔥'],odd:4}
];

var SIZE_DATA=[
  {items:[{e:'🐜',l:'Ant'},{e:'🐈',l:'Cat'},{e:'🐘',l:'Elephant'}]},
  {items:[{e:'🌱',l:'Sprout'},{e:'🌿',l:'Plant'},{e:'🌳',l:'Tree'}]},
  {items:[{e:'🍇',l:'Grape'},{e:'🍊',l:'Orange'},{e:'🍉',l:'Watermelon'}]},
  {items:[{e:'🐁',l:'Mouse'},{e:'🐇',l:'Rabbit'},{e:'🐄',l:'Cow'}]},
  {items:[{e:'🏠',l:'House'},{e:'🏢',l:'Building'},{e:'🗼',l:'Tower'}]},
  {items:[{e:'🧒',l:'Child'},{e:'👨',l:'Adult'},{e:'👴',l:'Grandpa'}]},
  {items:[{e:'🐠',l:'Fish'},{e:'🐬',l:'Dolphin'},{e:'🐋',l:'Whale'}]},
  {items:[{e:'🫐',l:'Berry'},{e:'🍊',l:'Orange'},{e:'🍉',l:'Melon'}]},
  {items:[{e:'🌰',l:'Nut'},{e:'🌷',l:'Flower'},{e:'🌲',l:'Pine'}]},
  {items:[{e:'🦟',l:'Mosquito'},{e:'🐓',l:'Chicken'},{e:'🦒',l:'Giraffe'}]}
];

var WHY_DATA=[
  {em:'🌧️',cause:'It is raining heavily outside',ans:'The ground gets wet',wrong:['The sky turns green','Fish start flying','We get very hungry']},
  {em:'🍦☀️',cause:'Ice cream is left in the hot sun',ans:'It melts and becomes liquid',wrong:['It gets bigger and bigger','It starts to sing','It turns into a ball']},
  {em:'🌱💧',cause:'You water the plant every single day',ans:'The plant grows tall and healthy',wrong:['The plant turns into an animal','The plant flies away','The plant makes music']},
  {em:'😴',cause:'You stayed up very, very late at night',ans:'You feel tired and sleepy',wrong:['You feel very hungry','You can run faster','You feel super cold']},
  {em:'🏃',cause:'You run very fast for a long time',ans:'You breathe fast and feel tired',wrong:['You feel very cold','You stop growing','You feel hungry right away']},
  {em:'🎁🎂',cause:'Today is your birthday!',ans:'You feel excited and happy',wrong:['You feel bored','You want to sleep all day','You feel worried']},
  {em:'🤧',cause:'You played in cold rain without your jacket',ans:'You might catch a cold and sneeze',wrong:['You become very fast','You grow wings','You get stronger immediately']},
  {em:'🌙⭐',cause:'The sun sets and it becomes night time',ans:'We can see the moon and stars',wrong:['We can see the rainbow','The birds start singing louder','It gets very hot and sunny']},
  {em:'🚿🧼',cause:'You wash your hands with soap and water',ans:'Your hands become clean and germ-free',wrong:['Your hands turn blue','Your hands become bigger','Your hands start to itch']},
  {em:'😢🧸',cause:'You dropped your favourite toy and it broke',ans:'You feel sad',wrong:['You feel happy and laugh','You fall asleep immediately','You jump with joy']},
  {em:'📚✏️',cause:'You study and practice reading every day',ans:'You become smarter and learn more',wrong:['You grow taller overnight','You stop feeling hungry','You start flying in dreams']},
  {em:'🌱☀️',cause:'Plants get sunlight and water every day',ans:'They grow, make food and give oxygen',wrong:['They walk to the market','They turn into animals','They start dancing at night']}
];

var MORE_DATA=[
  {left:2,right:5,ans:'right',em:'⭐'},
  {left:7,right:3,ans:'left',em:'🍎'},
  {left:4,right:8,ans:'right',em:'🐟'},
  {left:6,right:2,ans:'left',em:'❤️'},
  {left:3,right:9,ans:'right',em:'🌸'},
  {left:8,right:4,ans:'left',em:'🎈'},
  {left:1,right:6,ans:'right',em:'🐱'},
  {left:5,right:2,ans:'left',em:'🌙'},
  {left:3,right:7,ans:'right',em:'🍭'},
  {left:9,right:4,ans:'left',em:'🌟'},
  {left:2,right:8,ans:'right',em:'🦋'},
  {left:6,right:3,ans:'left',em:'🚗'}
];

/* ══════════════════════════════
   FROM numbers.html
══════════════════════════════ */
var ADDP=[
  {a:1,ae:"&#127822;",b:1,be:"&#127822;",ans:2},
  {a:2,ae:"&#128049;",b:1,be:"&#128049;",ans:3},
  {a:1,ae:"&#127820;",b:2,be:"&#127820;",ans:3},
  {a:2,ae:"&#11088;", b:2,be:"&#11088;", ans:4},
  {a:3,ae:"&#128056;",b:1,be:"&#128056;",ans:4},
  {a:2,ae:"&#128053;",b:3,be:"&#128053;",ans:5},
  {a:3,ae:"&#127827;",b:2,be:"&#127827;",ans:5},
  {a:4,ae:"&#127800;",b:1,be:"&#127800;",ans:5},
  {a:1,ae:"&#127822;",b:3,be:"&#127822;",ans:4},
  {a:2,ae:"&#11088;", b:3,be:"&#11088;", ans:5}
];
var PATP=[
  {seq:["&#128308;","&#128309;","&#128308;","&#128309;"],missing:3,ans:"&#128309;",opts:["&#128309;","&#128993;","&#128994;"]},
  {seq:["&#128993;","&#128994;","&#128993;","&#128994;"],missing:3,ans:"&#128994;",opts:["&#128308;","&#128994;","&#128309;"]},
  {seq:["&#11088;","&#127769;","&#11088;","&#127769;"],  missing:2,ans:"&#11088;", opts:["&#11088;","&#127752;","&#127769;"]},
  {seq:["&#128049;","&#128053;","&#128049;","&#128053;"],missing:3,ans:"&#128053;",opts:["&#128049;","&#128053;","&#128056;"]},
  {seq:["&#127822;","&#127820;","&#127822;","&#127820;"],missing:2,ans:"&#127822;",opts:["&#127822;","&#127818;","&#127820;"]},
  {seq:["&#128314;","&#11093;","&#128314;","&#11093;"],  missing:3,ans:"&#11093;", opts:["&#128314;","&#11093;","&#128998;"]},
  {seq:["&#9728;","&#127769;","&#9728;","&#127769;"],    missing:2,ans:"&#9728;",  opts:["&#9728;","&#127769;","&#11088;"]},
  {seq:["&#128024;","&#128045;","&#128024;","&#128045;"],missing:3,ans:"&#128045;",opts:["&#128024;","&#128047;","&#128045;"]}
];
var CMPP=[
  {q:"Which is BIGGER?",       a:{e:"&#128024;",n:1,l:"Elephant"},  b:{e:"&#128045;",n:1,l:"Mouse"},    ans:"a",msg:"Elephant is BIGGER!"},
  {q:"Which group has MORE?",  a:{e:"&#127822;",n:4,l:"4 Apples"},  b:{e:"&#127822;",n:2,l:"2 Apples"}, ans:"a",msg:"4 is MORE than 2!"},
  {q:"Which is SMALLER?",      a:{e:"&#128049;",n:1,l:"Cat"},        b:{e:"&#129409;",n:1,l:"Lion"},     ans:"a",msg:"Cat is SMALLER!"},
  {q:"Which group has LESS?",  a:{e:"&#11088;", n:2,l:"2 Stars"},   b:{e:"&#11088;", n:5,l:"5 Stars"},  ans:"a",msg:"2 is LESS than 5!"},
  {q:"Which is TALLER?",       a:{e:"&#129426;",n:1,l:"Giraffe"},   b:{e:"&#128034;",n:1,l:"Turtle"},   ans:"a",msg:"Giraffe is TALLER!"},
  {q:"Which is SHORTER?",      a:{e:"&#128027;",n:1,l:"Worm"},      b:{e:"&#128013;",n:1,l:"Snake"},    ans:"a",msg:"Worm is SHORTER!"},
  {q:"Which is FASTER?",       a:{e:"&#128008;",n:1,l:"Cheetah"},   b:{e:"&#128012;",n:1,l:"Snail"},    ans:"a",msg:"Cheetah is FASTER!"},
  {q:"Which is HEAVIER?",      a:{e:"&#128663;",n:1,l:"Car"},        b:{e:"&#127880;",n:1,l:"Balloon"},  ans:"a",msg:"Car is HEAVIER!"},
  {q:"Which group has MORE?",  a:{e:"&#11088;", n:6,l:"6 Stars"},   b:{e:"&#11088;", n:3,l:"3 Stars"},  ans:"a",msg:"6 is MORE than 3!"},
  {q:"Which is LONGER?",       a:{e:"&#128013;",n:1,l:"Snake"},      b:{e:"&#128027;",n:1,l:"Worm"},     ans:"a",msg:"Snake is LONGER!"},
  {q:"Which is SMALLER?",      a:{e:"&#128028;",n:1,l:"Ant"},        b:{e:"&#128054;",n:1,l:"Dog"},      ans:"a",msg:"Ant is SMALLER!"},
  {q:"Which group has LESS?",  a:{e:"&#127850;",n:1,l:"1 Candy"},   b:{e:"&#127850;",n:4,l:"4 Candies"},ans:"a",msg:"1 is LESS than 4!"},
  {q:"Which is BIGGER?",       a:{e:"&#127757;",n:1,l:"Earth"},      b:{e:"&#128138;",n:1,l:"Ball"},     ans:"a",msg:"Earth is BIGGER!"},
  {q:"Which is TALLER?",       a:{e:"&#127795;",n:1,l:"Tree"},       b:{e:"&#127804;",n:1,l:"Flower"},   ans:"a",msg:"Tree is TALLER!"},
  {q:"Which group has MORE?",  a:{e:"&#128153;",n:5,l:"5 Hearts"},  b:{e:"&#128153;",n:2,l:"2 Hearts"},  ans:"a",msg:"5 is MORE than 2!"}
];

/* ══════════════════════════════
   FROM games.html
══════════════════════════════ */
var ODD=[{q:"Which one does NOT live in water?",i:[{e:"&#128031;",l:"Fish",o:false},{e:"&#128044;",l:"Dolphin",o:false},{e:"&#128024;",l:"Elephant",o:true},{e:"&#129416;",l:"Shark",o:false},{e:"&#129585;",l:"Octopus",o:false},{e:"&#128056;",l:"Frog",o:false}]},{q:"Which one is NOT a fruit?",i:[{e:"&#127822;",l:"Apple",o:false},{e:"&#127820;",l:"Banana",o:false},{e:"&#129365;",l:"Carrot",o:true},{e:"&#127815;",l:"Grapes",o:false},{e:"&#127818;",l:"Orange",o:false},{e:"&#127827;",l:"Strawberry",o:false}]},{q:"Which ones can FLY?",i:[{e:"&#128053;",l:"Dog",o:true},{e:"&#129413;",l:"Eagle",o:false},{e:"&#128049;",l:"Cat",o:true},{e:"&#129419;",l:"Butterfly",o:false},{e:"&#128046;",l:"Cow",o:true},{e:"&#9992;",l:"Airplane",o:false}],multi:true,correct:[1,3,5]},{q:"Which one is NOT a color?",i:[{e:"&#128308;",l:"Red",o:false},{e:"&#127795;",l:"Tree",o:true},{e:"&#128309;",l:"Blue",o:false},{e:"&#128993;",l:"Yellow",o:false},{e:"&#127769;",l:"Moon",o:true},{e:"&#128994;",l:"Green",o:false}]},{q:"Which ones are vehicles?",i:[{e:"&#128047;",l:"Tiger",o:true},{e:"&#128663;",l:"Car",o:false},{e:"&#127800;",l:"Flower",o:true},{e:"&#128652;",l:"Bus",o:false},{e:"&#127829;",l:"Pizza",o:true},{e:"&#9992;",l:"Airplane",o:false}],multi:true,correct:[1,3,5]},{q:"Which one is NOT an animal?",i:[{e:"&#129409;",l:"Lion",o:false},{e:"&#127846;",l:"Ice Cream",o:true},{e:"&#128024;",l:"Elephant",o:false},{e:"&#11088;",l:"Star",o:true},{e:"&#128047;",l:"Tiger",o:false},{e:"&#128038;",l:"Bird",o:false}]}];
var CTD=[{q:"How many apples?",e:"&#127822;",n:3},{q:"How many stars?",e:"&#11088;",n:5},{q:"How many frogs?",e:"&#128056;",n:2},{q:"How many flowers?",e:"&#127800;",n:4},{q:"How many balls?",e:"&#9917;",n:6},{q:"How many hearts?",e:"&#10084;",n:1},{q:"How many fish?",e:"&#128031;",n:7},{q:"How many clouds?",e:"&#9729;",n:3},{q:"How many suns?",e:"&#9728;",n:2},{q:"How many butterflies?",e:"&#129419;",n:4}];
var GQD=[{q:"Which animal says Meow?",o:["Dog","Cat","Cow","Duck"],a:1},{q:"What color is the sky?",o:["Red","Green","Blue","Yellow"],a:2},{q:"How many legs does a dog have?",o:["2","4","6","8"],a:1},{q:"Which fruit is yellow and long?",o:["Apple","Orange","Banana","Mango"],a:2},{q:"What do we use to brush teeth?",o:["Comb","Toothbrush","Soap","Cloth"],a:1},{q:"Which animal has a long trunk?",o:["Giraffe","Elephant","Hippo","Rhino"],a:1},{q:"What shape is a ball?",o:["Square","Triangle","Circle","Star"],a:2},{q:"National bird of India?",o:["Eagle","Crow","Peacock","Parrot"],a:2},{q:"What do we use when it rains?",o:["Sunglasses","Umbrella","Hat","Jacket"],a:1},{q:"When do we sleep?",o:["Morning","Afternoon","Night","Evening"],a:2},{q:"Which fruit is red and round?",o:["Banana","Apple","Mango","Grapes"],a:1},{q:"What should NOT be touched?",o:["Water","Toy","Fire","Book"],a:2},{q:"Where do you go to study?",o:["Hospital","Zoo","School","Market"],a:2},{q:"Which helps sick people?",o:["Fire Truck","Ambulance","Bus","Train"],a:1},{q:"What color is grass?",o:["Red","Blue","Yellow","Green"],a:3},{q:"How many fingers on one hand?",o:["3","4","5","6"],a:2},{q:"What color is milk?",o:["Yellow","White","Blue","Brown"],a:1},{q:"National animal of India?",o:["Elephant","Lion","Tiger","Leopard"],a:2},{q:"What do we see at night?",o:["Sun","Moon","Rainbow","Cloud"],a:1},{q:"How many eyes do we have?",o:["1","2","3","4"],a:1},{q:"How many days in a week?",o:["5","6","7","8"],a:2},{q:"What color is an orange?",o:["Red","Yellow","Orange","Green"],a:2},{q:"Which animal jumps near water?",o:["Cat","Frog","Dog","Cow"],a:1},{q:"Which vehicle runs on tracks?",o:["Car","Boat","Train","Airplane"],a:2},{q:"What do bees make?",o:["Water","Honey","Milk","Juice"],a:1},{q:"Which shape has 3 sides?",o:["Circle","Square","Triangle","Rectangle"],a:2},{q:"Which bird can talk?",o:["Eagle","Crow","Parrot","Penguin"],a:2},{q:"What comes after 4?",o:["3","5","6","7"],a:1},{q:"Where do fish live?",o:["Trees","Sky","Water","Desert"],a:2},{q:"What do we wear on feet?",o:["Hat","Gloves","Shoes","Scarf"],a:2},{q:"Biggest planet?",o:["Earth","Mars","Jupiter","Saturn"],a:2},{q:"How many months in a year?",o:["10","11","12","13"],a:2},{q:"Which animal says Moo?",o:["Sheep","Cow","Horse","Pig"],a:1},{q:"What color is a carrot?",o:["Purple","Green","Orange","Red"],a:2},{q:"Which vehicle flies?",o:["Car","Boat","Train","Airplane"],a:3},{q:"What do plants need?",o:["Sand","Water and Sun","Stones","Ice"],a:1},{q:"Fastest animal on land?",o:["Lion","Elephant","Cheetah","Horse"],a:2},{q:"Baby cat is called?",o:["Cub","Puppy","Kitten","Foal"],a:2},{q:"Capital of India?",o:["Mumbai","New Delhi","Kolkata","Chennai"],a:1},{q:"Which part helps you smell?",o:["Eyes","Ears","Nose","Mouth"],a:2},{q:"Shape of a pizza slice?",o:["Circle","Triangle","Square","Oval"],a:1},{q:"Season with snow?",o:["Summer","Spring","Winter","Autumn"],a:2},{q:"What comes before 10?",o:["8","9","11","12"],a:1},{q:"Fruit on coconut tree?",o:["Mango","Banana","Coconut","Orange"],a:2},{q:"What cuts paper?",o:["Spoon","Scissors","Pencil","Ruler"],a:1},{q:"Animal with black and white stripes?",o:["Tiger","Giraffe","Zebra","Leopard"],a:2},{q:"What is 3 plus 2?",o:["4","5","6","7"],a:1},{q:"Which part pumps blood?",o:["Brain","Lungs","Heart","Tummy"],a:2},{q:"15 August in India is?",o:["Diwali","Holi","Independence Day","Republic Day"],a:2},{q:"King of the jungle?",o:["Tiger","Elephant","Lion","Bear"],a:2}];
var WMD=[{e:"&#127822;",w:"APPLE",o:["APPLE","MANGO","GRAPE","LEMON"]},{e:"&#128024;",w:"ELEPHANT",o:["TIGER","ELEPHANT","GIRAFFE","MONKEY"]},{e:"&#127769;",w:"MOON",o:["STAR","SUN","MOON","CLOUD"]},{e:"&#128663;",w:"CAR",o:["BUS","CAR","TRAIN","BOAT"]},{e:"&#127820;",w:"BANANA",o:["BANANA","ORANGE","MANGO","PEACH"]},{e:"&#128049;",w:"CAT",o:["DOG","COW","CAT","PIG"]},{e:"&#127800;",w:"FLOWER",o:["TREE","LEAF","GRASS","FLOWER"]},{e:"&#11088;",w:"STAR",o:["MOON","STAR","SUN","CLOUD"]},{e:"&#128031;",w:"FISH",o:["FISH","BIRD","FROG","CRAB"]},{e:"&#127968;",w:"HOUSE",o:["SCHOOL","HOUSE","MARKET","PARK"]},{e:"&#127818;",w:"ORANGE",o:["ORANGE","LEMON","MANGO","PEACH"]},{e:"&#129409;",w:"LION",o:["BEAR","WOLF","TIGER","LION"]},{e:"&#9728;",w:"SUN",o:["MOON","RAIN","SUN","WIND"]},{e:"&#127880;",w:"BALLOON",o:["KITE","BALL","BALLOON","BUBBLE"]},{e:"&#127752;",w:"RAINBOW",o:["RAIN","CLOUD","STORM","RAINBOW"]},{e:"&#128053;",w:"DOG",o:["CAT","COW","DOG","GOAT"]},{e:"&#9999;",w:"PENCIL",o:["PEN","PENCIL","CHALK","BOOK"]},{e:"&#127829;",w:"PIZZA",o:["CAKE","BREAD","PIZZA","RICE"]},{e:"&#129419;",w:"BUTTERFLY",o:["DRAGONFLY","BEE","ANT","BUTTERFLY"]},{e:"&#127874;",w:"CAKE",o:["CAKE","BREAD","COOKIE","MUFFIN"]}];
var SHDW=[{ans:"&#129409;",opts:["&#129409;","&#128056;","&#128049;"],lbl:"Lion"},{ans:"&#128024;",opts:["&#128024;","&#129426;","&#128018;"],lbl:"Elephant"},{ans:"&#127822;",opts:["&#127822;","&#127820;","&#127818;"],lbl:"Apple"},{ans:"&#128663;",opts:["&#128663;","&#128652;","&#128642;"],lbl:"Car"},{ans:"&#128049;",opts:["&#128049;","&#128053;","&#128046;"],lbl:"Cat"},{ans:"&#127820;",opts:["&#127820;","&#127819;","&#129389;"],lbl:"Banana"},{ans:"&#128056;",opts:["&#128056;","&#128034;","&#128013;"],lbl:"Frog"},{ans:"&#9992;",opts:["&#9992;","&#128641;","&#9973;"],lbl:"Airplane"},{ans:"&#129413;",opts:["&#129413;","&#129417;","&#129412;"],lbl:"Eagle"},{ans:"&#127815;",opts:["&#127815;","&#127827;","&#127817;"],lbl:"Grapes"},{ans:"&#128047;",opts:["&#128047;","&#129409;","&#128058;"],lbl:"Tiger"},{ans:"&#128640;",opts:["&#128640;","&#9992;","&#128641;"],lbl:"Rocket"},{ans:"&#129427;",opts:["&#129427;","&#128059;","&#129426;"],lbl:"Zebra"},{ans:"&#127817;",opts:["&#127817;","&#127815;","&#127822;"],lbl:"Watermelon"},{ans:"&#128018;",opts:["&#128018;","&#128060;","&#128040;"],lbl:"Monkey"},{ans:"&#128652;",opts:["&#128652;","&#128663;","&#128667;"],lbl:"Bus"},{ans:"&#129434;",opts:["&#129434;","&#129441;","&#129442;"],lbl:"Peacock"},{ans:"&#127829;",opts:["&#127829;","&#127874;","&#127869;"],lbl:"Pizza"},{ans:"&#128059;",opts:["&#128059;","&#128060;","&#128040;"],lbl:"Bear"},{ans:"&#127813;",opts:["&#127813;","&#127822;","&#127818;"],lbl:"Tomato"}];
var MISS=[{items:["&#127822;","&#127820;","&#128049;","&#11088;"]},{items:["&#128053;","&#128056;","&#9728;","&#127800;"]},{items:["&#128663;","&#129409;","&#127817;","&#128038;"]},{items:["&#127752;","&#128024;","&#127829;","&#129432;"]},{items:["&#128640;","&#127813;","&#129417;","&#128652;"]},{items:["&#129426;","&#127815;","&#128641;","&#128046;"]},{items:["&#128047;","&#127819;","&#129442;","&#128663;"]},{items:["&#9917;","&#128018;","&#127874;","&#128057;"]},{items:["&#129427;","&#127827;","&#128652;","&#128064;"]},{items:["&#129413;","&#127821;","&#129364;","&#128059;"]},{items:["&#128056;","&#127805;","&#128642;","&#129441;"]},{items:["&#127795;","&#128031;","&#127878;","&#128661;"]},{items:["&#129382;","&#128034;","&#127880;","&#128053;"]},{items:["&#9728;","&#128039;","&#127826;","&#128663;"]},{items:["&#127769;","&#128055;","&#129389;","&#128641;"]},{items:["&#128013;","&#127822;","&#129413;","&#128652;"]},{items:["&#128040;","&#127825;","&#9992;","&#128056;"]},{items:["&#128060;","&#127817;","&#128038;","&#128663;"]},{items:["&#128016;","&#127820;","&#128641;","&#11088;"]},{items:["&#129432;","&#127827;","&#128640;","&#128049;"]}];
var SORT_CATS=[{lbl:"Animals",em:"&#128062;",bg:"#FF8E53",items:["&#129409;","&#128024;","&#128047;","&#128056;","&#128049;","&#128053;","&#129426;","&#129427;","&#128018;","&#128059;"]},{lbl:"Fruits",em:"&#127822;",bg:"#E53935",items:["&#127822;","&#127820;","&#127818;","&#127815;","&#127817;","&#127827;","&#127825;","&#129389;","&#127819;","&#127826;"]},{lbl:"Vehicles",em:"&#128663;",bg:"#1976D2",items:["&#128663;","&#128652;","&#128642;","&#9992;","&#128641;","&#128640;","&#9973;","&#128690;","&#128657;","&#128658;"]},{lbl:"Birds",em:"&#128038;",bg:"#43A047",items:["&#129413;","&#129417;","&#129412;","&#128039;","&#129441;","&#129434;","&#129442;","&#129414;","&#128037;","&#128038;"]}];
var SORT_POOL=[];
SORT_CATS.forEach(function(cat,ci){cat.items.forEach(function(em){SORT_POOL.push({em:em,ci:ci});});});
var TFD=[{em:"&#128049;",stmt:"A cat can fly",ans:false},{em:"&#128056;",stmt:"A frog can jump",ans:true},{em:"&#9728;",stmt:"The sun is cold",ans:false},{em:"&#128024;",stmt:"An elephant is bigger than a mouse",ans:true},{em:"&#128038;",stmt:"Birds have wings",ans:true},{em:"&#127820;",stmt:"A banana is red",ans:false},{em:"&#128053;",stmt:"A dog says Meow",ans:false},{em:"&#127822;",stmt:"An apple is a fruit",ans:true},{em:"&#9992;",stmt:"Airplanes can fly",ans:true},{em:"&#128046;",stmt:"A cow gives us milk",ans:true},{em:"&#127813;",stmt:"A tomato is blue",ans:false},{em:"&#128039;",stmt:"Penguins can fly high in the sky",ans:false},{em:"&#127752;",stmt:"A rainbow has many colors",ans:true},{em:"&#128013;",stmt:"A snake has legs",ans:false},{em:"&#128034;",stmt:"A turtle moves very slowly",ans:true},{em:"&#127815;",stmt:"Grapes grow in bunches",ans:true},{em:"&#128642;",stmt:"A train runs on roads",ans:false},{em:"&#129434;",stmt:"Peacock is the national bird of India",ans:true},{em:"&#128047;",stmt:"Tiger is the national animal of India",ans:true},{em:"&#127769;",stmt:"We can see the moon at night",ans:true},{em:"&#128293;",stmt:"Fire is safe to touch",ans:false},{em:"&#129426;",stmt:"A giraffe has a very long neck",ans:true},{em:"&#128031;",stmt:"A fish can live on land",ans:false},{em:"&#129432;",stmt:"A kangaroo carries its baby in a pouch",ans:true},{em:"&#127817;",stmt:"A watermelon is green outside and red inside",ans:true},{em:"&#128640;",stmt:"Rockets go to space",ans:true},{em:"&#128046;",stmt:"A cow can fly",ans:false},{em:"&#128018;",stmt:"Monkeys like bananas",ans:true},{em:"&#9728;",stmt:"The sun rises in the West",ans:false},{em:"&#128167;",stmt:"We should drink water every day",ans:true}];

/* ══════════════════════════════
   EXAM POOL — questions tagged with type + difficulty
   diff 1=Easy  diff 2=Medium  diff 3=Hard
══════════════════════════════ */
var EXAM_POOL = (function(){
  var pool = [];
  /* Easy — visual MCQ with emoji */
  MCQD.forEach(function(q){ pool.push({type:'mcq',diff:1,d:q}); });
  /* Easy — True/False */
  TFD.forEach(function(q){ pool.push({type:'tf',diff:1,d:q}); });
  /* Easy — Feelings */
  FEEL_DATA.forEach(function(q){ pool.push({type:'feelings',diff:1,d:q}); });
  /* Easy — Compare Big/Small */
  CMPP.forEach(function(q){ pool.push({type:'compare',diff:1,d:q}); });
  /* Easy — Which is More */
  MORE_DATA.forEach(function(q){ pool.push({type:'more',diff:1,d:q}); });
  /* Medium — text MCQ (no emoji in source, add placeholder) */
  GQD.forEach(function(q){ pool.push({type:'mcq',diff:2,d:{e:'&#10067;',q:q.q,o:q.o,a:q.a}}); });
  /* Medium — Spot It */
  SPOT_DATA.forEach(function(q){ pool.push({type:'spotit',diff:2,d:q}); });
  /* Medium — Emoji Patterns */
  PAT_DATA.forEach(function(q){ pool.push({type:'pattern',diff:2,d:q}); });
  /* Medium — Number Patterns */
  PATP.forEach(function(q){ pool.push({type:'numpattern',diff:2,d:q}); });
  /* Medium — Addition */
  ADDP.forEach(function(q){ pool.push({type:'add',diff:2,d:q}); });
  /* Hard — Life-cycle Sequences */
  SEQ_DATA.forEach(function(q){ pool.push({type:'sequence',diff:3,d:q}); });
  /* Hard — Why? Because! */
  WHY_DATA.forEach(function(q){ pool.push({type:'why',diff:3,d:q}); });
  return pool;
})();
