export const LANGUAGES = [
  "Tamil", "Hindi", "Bengali", "Telugu", "Kannada", "Marathi", "Gujarati", "Punjabi"
] as const;

export const SUBJECTS = ["Mathematics", "Science", "Social Studies", "English"] as const;
export const GRADES = Array.from({ length: 10 }, (_, i) => i + 1);

export const sampleLessons = [
  { id: "1", title: "Fractions — Kavya learns to share", subject: "Mathematics", language: "Tamil", grade: 4, content: "Kavya has 8 idlis and wants to share them equally among her 4 friends. How many idlis does each friend get? This is what fractions help us understand — dividing things into equal parts.\n\nA fraction has two parts: the numerator (top number) tells us how many parts we have, and the denominator (bottom number) tells us the total parts.\n\nWhen Kavya divides 8 idlis among 4 friends, each gets 8/4 = 2 idlis. But what if she has only 3 idlis for 4 friends? Then each gets 3/4 of an idli — that's a fraction less than 1!", duration_mins: 15 },
  { id: "2", title: "The Water Cycle — A Tamil monsoon story", subject: "Science", language: "Tamil", grade: 5, content: "Every year, the monsoon brings rain to Tamil Nadu. But where does this rain come from? The answer lies in the water cycle.\n\nThe sun heats water from the Bay of Bengal (evaporation). The water vapor rises and forms clouds (condensation). Wind carries these clouds over land. When clouds become heavy, rain falls (precipitation). This water flows into rivers like the Cauvery and back to the sea (collection).\n\nThe cycle repeats endlessly — that's why we call it a cycle!", duration_mins: 12 },
  { id: "3", title: "Addition with Carrying — Market math with Arjun", subject: "Mathematics", language: "Hindi", grade: 4, content: "Arjun goes to the sabzi mandi with his mother. She buys vegetables worth ₹47 and fruits worth ₹35. How much do they spend in total?\n\nLet's add 47 + 35:\nStep 1: Add the ones place: 7 + 5 = 12. Write 2, carry 1.\nStep 2: Add the tens place: 4 + 3 + 1 (carried) = 8.\nAnswer: ₹82\n\nArjun now helps his mother count change at the market every week!", duration_mins: 10 },
  { id: "4", title: "Our Solar System — A Hindi journey to the stars", subject: "Science", language: "Hindi", grade: 6, content: "Imagine you are on a rocket launching from Sriharikota, just like ISRO's Chandrayaan! As you fly higher, you pass through Earth's atmosphere and enter space.\n\nOur solar system has 8 planets orbiting the Sun. The inner rocky planets are Mercury, Venus, Earth, and Mars. The outer gas giants are Jupiter, Saturn, Uranus, and Neptune.\n\nIndia's Mangalyaan mission reached Mars in 2014, making ISRO only the 4th space agency to do so — and on the first attempt!", duration_mins: 18 },
  { id: "5", title: "Shapes Around Us — Rangoli geometry", subject: "Mathematics", language: "Tamil", grade: 5, content: "Have you noticed the beautiful kolam (rangoli) patterns drawn outside Tamil homes every morning? These patterns use many geometric shapes!\n\nA triangle has 3 sides. A square has 4 equal sides. A circle has no sides at all — it's perfectly round. A hexagon has 6 sides, and you can see it in honeycomb patterns.\n\nNext time you draw a kolam, count the shapes. You'll find triangles, squares, and circles all working together to create beauty!", duration_mins: 14 },
  { id: "6", title: "Plants and Photosynthesis — The banyan tree's secret", subject: "Science", language: "Hindi", grade: 6, content: "The great banyan tree in Kolkata's botanical garden is over 250 years old. How does such a giant tree feed itself? The answer is photosynthesis.\n\nLeaves contain chlorophyll (the green pigment). Chlorophyll captures sunlight energy. The leaf takes in CO₂ from air through tiny stomata. Roots absorb water from the soil.\n\nUsing sunlight energy, the leaf combines CO₂ and water to make glucose (food) and releases oxygen. This is why trees are called the lungs of our planet!", duration_mins: 16 },
];

export const sampleQuizQuestions: Record<string, Array<{ question: string; options: string[]; correct: number }>> = {
  "1": [
    { question: "If Kavya has 6 chapatis and divides them equally among 3 friends, how many does each friend get?", options: ["1", "2", "3", "6"], correct: 1 },
    { question: "In the fraction 3/4, what is the numerator?", options: ["4", "3", "7", "1"], correct: 1 },
    { question: "What does the denominator in a fraction tell us?", options: ["How many parts we have", "The total number of equal parts", "The biggest number", "The answer"], correct: 1 },
    { question: "Which of these is a proper fraction?", options: ["5/3", "7/4", "3/8", "9/2"], correct: 2 },
    { question: "Kavya ate 2 slices of a pizza cut into 8 slices. What fraction did she eat?", options: ["2/6", "2/8", "8/2", "6/8"], correct: 1 },
  ],
  "2": [
    { question: "What is the first step of the water cycle?", options: ["Condensation", "Precipitation", "Evaporation", "Collection"], correct: 2 },
    { question: "What causes water to evaporate from oceans?", options: ["Wind", "The Moon", "The Sun's heat", "Fish"], correct: 2 },
    { question: "When water vapor forms clouds, this process is called:", options: ["Evaporation", "Condensation", "Precipitation", "Transpiration"], correct: 1 },
    { question: "What happens when clouds become too heavy with water?", options: ["They float higher", "Rain falls", "They disappear", "They turn into fog"], correct: 1 },
    { question: "Where does rainwater eventually flow back to?", options: ["Space", "Underground only", "Rivers and oceans", "It disappears"], correct: 2 },
  ],
};

export const sampleStudents = [
  { id: "s1", name: "Kavya", grade: 4, language: "Tamil", lastActive: "2 hours ago", avgScore: 85, status: "On Track" as const },
  { id: "s2", name: "Arjun", grade: 6, language: "Hindi", lastActive: "1 day ago", avgScore: 62, status: "Needs Attention" as const },
  { id: "s3", name: "Meera", grade: 5, language: "Bengali", lastActive: "3 days ago", avgScore: 41, status: "At Risk" as const },
];
