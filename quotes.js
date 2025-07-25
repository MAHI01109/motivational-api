const quotes = [
    {
        "text": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde",
        "tags": [
            "attributed-no-source",
            "be-yourself",
            "gilbert-perreira",
            "honesty",
            "inspirational",
            "misattributed-oscar-wilde",
            "quote-investigator"
        ]
    },
    {
        "text": "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        "author": "Marilyn Monroe",
        "tags": [
            "attributed-no-source",
            "best",
            "life",
            "love",
            "misattributed-marilyn-monroe",
            "mistakes",
            "out-of-control",
            "truth",
            "worst"
        ]
    },
    {
        "text": "So many books, so little time.",
        "author": "Frank Zappa",
        "tags": [
            "books",
            "humor"
        ]
    },
    {
        "text": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "author": "Albert Einstein",
        "tags": [
            "attributed-no-source",
            "human-nature",
            "humor",
            "infinity",
            "philosophy",
            "science",
            "stupidity",
            "universe"
        ]
    },
    {
        "text": "A room without books is like a body without a soul.",
        "author": "Marcus Tullius Cicero",
        "tags": [
            "attributed-no-source",
            "books",
            "simile",
            "soul"
        ]
    },
    {
        "text": "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        "author": "Bernard M. Baruch",
        "tags": [
            "ataraxy",
            "be-yourself",
            "confidence",
            "fitting-in",
            "individuality",
            "misattributed-dr-seuss",
            "those-who-matter"
        ]
    },
    {
        "text": "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
        "author": "William W. Purkey",
        "tags": [
            "dance",
            "heaven",
            "hurt",
            "inspirational",
            "life",
            "love",
            "sing"
        ]
    },
    {
        "text": "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "author": "Dr. Seuss",
        "tags": [
            "attributed-no-source",
            "dreams",
            "love",
            "reality",
            "sleep"
        ]
    },
    {
        "text": "You only live once, but if you do it right, once is enough.",
        "author": "Mae West",
        "tags": [
            "humor",
            "life"
        ]
    },
    {
        "text": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi",
        "tags": [
            "action",
            "change",
            "inspirational",
            "misattributed-to-gandhi",
            "philosophy",
            "wish"
        ]
    },
    {
        "text": "In three words I can sum up everything I've learned about life: it goes on.",
        "author": "Robert Frost",
        "tags": [
            "life"
        ]
    },
    {
        "text": "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        "author": "J.K. Rowling,",
        "tags": [
            "charles-bayard-mitchell"
        ]
    },
    {
        "text": "Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend",
        "author": "Albert Camus",
        "tags": [
            "attributed-no-source",
            "friends",
            "friendship",
            "misattributed-albert-camus"
        ]
    },
    {
        "text": "If you tell the truth, you don't have to remember anything.",
        "author": "Mark Twain",
        "tags": [
            "lies",
            "lying",
            "memory",
            "truth"
        ]
    },
    {
        "text": "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "author": "Maya Angelou",
        "tags": []
    },
    {
        "text": "Friendship ... is born at the moment when one man says to another \"What! You too? I thought that no one but myself . . .",
        "author": "C.S. Lewis,",
        "tags": [
            "friendship"
        ]
    },
    {
        "text": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde",
        "tags": []
    },
    {
        "text": "A friend is someone who knows all about you and still loves you.",
        "author": "Elbert Hubbard",
        "tags": []
    },
    {
        "text": "Always forgive your enemies; nothing annoys them so much.",
        "author": "Oscar Wilde",
        "tags": [
            "attributed-no-source",
            "enemies",
            "forgiveness",
            "strategy"
        ]
    },
    {
        "text": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        "author": "Martin Luther King Jr.,",
        "tags": [
            "darkness",
            "drive-out",
            "hate",
            "inspirational",
            "light",
            "love",
            "peace"
        ]
    },
    {
        "text": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "author": "Mahatma Gandhi",
        "tags": [
            "carpe-diem",
            "education",
            "inspirational",
            "learning"
        ]
    },
    {
        "text": "We accept the love we think we deserve.",
        "author": "Stephen Chbosky,",
        "tags": [
            "inspirational",
            "love"
        ]
    },
    {
        "text": "Without music, life would be a mistake.",
        "author": "Friedrich Nietzsche,",
        "tags": [
            "inspirational",
            "music",
            "philosophy"
        ]
    },
    {
        "text": "I am so clever that sometimes I don't understand a single word of what I am saying.",
        "author": "Oscar Wilde,",
        "tags": [
            "intelligence",
            "self-deprecation"
        ]
    },
    {
        "text": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "author": "Ralph Waldo Emerson",
        "tags": [
            "accomplishment",
            "attributed-no-source",
            "be-yourself",
            "conformity",
            "individuality"
        ]
    },
    {
        "text": "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
        "author": "Steve Jobs",
        "tags": []
    },
    {
        "text": "Insanity is doing the same thing, over and over again, but expecting different results.",
        "author": "Narcotics Anonymous",
        "tags": [
            "humor",
            "insanity",
            "life",
            "misattributed-ben-franklin",
            "misattributed-mark-twain",
            "misattributed-to-einstein"
        ]
    },
    {
        "text": "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
        "author": "Marilyn Monroe",
        "tags": [
            "attributed-no-source",
            "misattributed-marilyn-monroe"
        ]
    },
    {
        "text": "It is better to be hated for what you are than to be loved for what you are not.",
        "author": "Andre Gide,",
        "tags": [
            "life",
            "love"
        ]
    },
    {
        "text": "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
        "author": "H. Jackson Brown Jr.,",
        "tags": [
            "actions",
            "disappointed",
            "disappointment",
            "dream",
            "dreams",
            "explore",
            "misattributed-mark-twain",
            "sail"
        ]
    },
    {
        "text": "All that is gold does not glitter,Not all those who wander are lost;The old that is strong does not wither,Deep roots are not reached by the frost.From the ashes a fire shall be woken,A light from the shadows shall spring;Renewed shall be blade that was broken,The crownless again shall be king.",
        "author": "J.R.R. Tolkien,",
        "tags": [
            "frost",
            "glitter",
            "gold",
            "lost",
            "poetry",
            "roots",
            "strength",
            "strong",
            "wander",
            "wither"
        ]
    },
    {
        "text": "Only once in your life, I truly believe, you find someone who can completely turn your world around. You tell them things that you’ve never shared with another soul and they absorb everything you say and actually want to hear more. You share hopes for the future, dreams that will never come true, goals that were never achieved and the many disappointments life has thrown at you. When something wonderful happens, you can’t wait to tell them about it, knowing they will share in your excitement. They are not embarrassed to cry with you when you are hurting or laugh with you when you make a fool of yourself. Never do they hurt your feelings or make you feel like you are not good enough, but rather they build you up and show you the things about yourself that make you special and even beautiful. There is never any pressure, jealousy or competition but only a quiet calmness when they are around. You can be yourself and not worry about what they will think of you because they love you for who you are. The things that seem insignificant to most people such as a note, song or walk become invaluable treasures kept safe in your heart to cherish forever. Memories of your childhood come back and are so clear and vivid it’s like being young again. Colours seem brighter and more brilliant. Laughter seems part of daily life where before it was infrequent or didn’t exist at all. A phone call or two during the day helps to get you through a long day’s work and always brings a smile to your face. In their presence, there’s no need for continuous conversation, but you find you’re quite content in just having them nearby. Things that never interested you before become fascinating because you know they are important to this person who is so special to you. You think of this person on every occasion and in everything you do. Simple things bring them to mind like a pale blue sky, gentle wind or even a storm cloud on the horizon. You open your heart knowing that there’s a chance it may be broken one day and in opening your heart, you experience a love and joy that you never dreamed possible. You find that being vulnerable is the only way to allow your heart to feel true pleasure that’s so real it scares you. You find strength in knowing you have a true friend and possibly a soul mate who will remain loyal to the end. Life seems completely different, exciting and worthwhile. Your only hope and security is in knowing that they are a part of your life.",
        "author": "Bob Marley",
        "tags": [
            "love"
        ]
    },
    {
        "text": "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
        "author": "Jane Austen,",
        "tags": [
            "aliteracy",
            "books",
            "classic",
            "humor"
        ]
    },
    {
        "text": "It is our choices, Harry, that show what we truly are, far more than our abilities.",
        "author": "J.K. Rowling,",
        "tags": [
            "abilities"
        ]
    },
    {
        "text": "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
        "author": "Marilyn Monroe",
        "tags": [
            "attributed-no-source",
            "be-yourself",
            "inspirational"
        ]
    },
    {
        "text": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        "author": "Albert Einstein",
        "tags": [
            "attributed-no-source",
            "inspirational",
            "life",
            "live",
            "miracle",
            "miracles"
        ]
    },
    {
        "text": "It does not do to dwell on dreams and forget to live.",
        "author": "J.K. Rowling,",
        "tags": [
            "dreams",
            "life"
        ]
    },
    {
        "text": "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        "author": "Mark Twain",
        "tags": [
            "books",
            "contentment",
            "friends",
            "friendship",
            "life"
        ]
    },
    {
        "text": "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
        "author": "John Green,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "We are all in the gutter, but some of us are looking at the stars.",
        "author": "Oscar Wilde,",
        "tags": [
            "inspirational",
            "optimism",
            "perception",
            "pessimism"
        ]
    },
    {
        "text": "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
        "author": "Neil Gaiman,",
        "tags": [
            "books",
            "dragons",
            "fairy-tales",
            "inspirational",
            "paraphrasing-g-k-chesterton"
        ]
    },
    {
        "text": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        "author": "William Shakespeare,",
        "tags": [
            "wisdom"
        ]
    },
    {
        "text": "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
        "author": "Maurice Switzer,",
        "tags": [
            "misattributed-to-abraham-lincoln",
            "misattributed-to-mark-twain",
            "remaining-silent",
            "wisdom"
        ]
    },
    {
        "text": "Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).",
        "author": "Mark Twain",
        "tags": [
            "individuality",
            "majority",
            "minority",
            "pause",
            "reflect",
            "wisdom"
        ]
    },
    {
        "text": "Life is what happens to us while we are making other plans.",
        "author": "Allen Saunders",
        "tags": [
            "fate",
            "life",
            "misattributed-john-lennon",
            "planning",
            "plans"
        ]
    },
    {
        "text": "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
        "author": "Bill Keane",
        "tags": [
            "attributed-no-source",
            "hope",
            "inspirational",
            "misattributed-eleanor-roosevelt",
            "past",
            "present",
            "widely-misattributed"
        ]
    },
    {
        "text": "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
        "author": "Friedrich Nietzsche",
        "tags": [
            "friendship",
            "lack-of-friendship",
            "lack-of-love",
            "love",
            "marriage",
            "unhappy-marriage"
        ]
    },
    {
        "text": "I have not failed. I've just found 10,000 ways that won't work.",
        "author": "Thomas A. Edison",
        "tags": [
            "edison",
            "failure",
            "inspirational",
            "paraphrased"
        ]
    },
    {
        "text": "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.",
        "author": "Elie Wiesel",
        "tags": [
            "activism",
            "apathy",
            "hate",
            "indifference",
            "inspirational",
            "love",
            "opposite",
            "philosophy"
        ]
    },
    {
        "text": "The man who does not read has no advantage over the man who cannot read.",
        "author": "Mark Twain",
        "tags": [
            "aliteracy",
            "attributed-no-source",
            "literacy"
        ]
    },
    {
        "text": "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
        "author": "Eleanor Roosevelt",
        "tags": [
            "attributed-no-source",
            "misattributed-eleanor-roosevelt"
        ]
    },
    {
        "text": "I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.",
        "author": "Pablo Neruda,",
        "tags": [
            "love",
            "poetry"
        ]
    },
    {
        "text": "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
        "author": "douglas adams,",
        "tags": [
            "life",
            "navigation"
        ]
    },
    {
        "text": "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
        "author": "Groucho Marx,",
        "tags": [
            "animals",
            "books",
            "dogs",
            "friends",
            "humor"
        ]
    },
    {
        "text": "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        "author": "Albert Einstein",
        "tags": [
            "1929",
            "viereck-interview"
        ]
    },
    {
        "text": "I solemnly swear that I am up to no good.",
        "author": "J.K. Rowling,",
        "tags": [
            "mischief"
        ]
    },
    {
        "text": "Love all, trust a few,Do wrong to none: be able for thine enemyRather in power than use; and keep thy friendUnder thy own life's key: be check'd for silence,But never tax'd for speech.",
        "author": "William Shakespeare,",
        "tags": [
            "do-wrong",
            "love",
            "trust",
            "wrong"
        ]
    },
    {
        "text": "Have you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.",
        "author": "Neil Gaiman,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.",
        "author": "Dr. Seuss",
        "tags": [
            "fantasy"
        ]
    },
    {
        "text": "A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.",
        "author": "George R.R. Martin,",
        "tags": [
            "read",
            "readers",
            "reading",
            "reading-books"
        ]
    },
    {
        "text": "A day without sunshine is like, you know, night.",
        "author": "Steve Martin",
        "tags": [
            "humor",
            "obvious",
            "simile"
        ]
    },
    {
        "text": "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        "author": "Lao Tzu",
        "tags": [
            "courage",
            "deeply-loved",
            "love",
            "strength",
            "widely-misattributed"
        ]
    },
    {
        "text": "Never put off till tomorrow what may be done day after tomorrow just as well.",
        "author": "Mark Twain",
        "tags": []
    },
    {
        "text": "That which does not kill us makes us stronger.",
        "author": "Friedrich Nietzsche",
        "tags": [
            "paraphrased",
            "strength"
        ]
    },
    {
        "text": "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
        "author": "Dr. Seuss,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "It is never too late to be what you might have been.",
        "author": "George Eliot",
        "tags": [
            "inspirational",
            "misattributed",
            "source-unknown"
        ]
    },
    {
        "text": "For every minute you are angry you lose sixty seconds of happiness.",
        "author": "Ralph Waldo Emerson",
        "tags": [
            "happiness"
        ]
    },
    {
        "text": "This life is what you make it. No matter what, you're going to mess up sometimes, it's a universal truth. But the good part is you get to decide how you're going to mess it up. Girls will be your friends - they'll act like it anyway. But just remember, some come, some go. The ones that stay with you through everything - they're your true best friends. Don't let go of them. Also remember, sisters make the best friends in the world. As for lovers, well, they'll come and go too. And baby, I hate to say it, most of them - actually pretty much all of them are going to break your heart, but you can't give up because if you give up, you'll never find your soulmate. You'll never find that half who makes you whole and that goes for everything. Just because you fail once, doesn't mean you're gonna fail at everything. Keep trying, hold on, and always, always, always believe in yourself, because if you don't, then who will, sweetie? So keep your head high, keep your chin up, and most importantly, keep smiling, because life's a beautiful thing and there's so much to smile about.",
        "author": "Marilyn Monroe",
        "tags": [
            "attributed-no-source",
            "friends",
            "heartbreak",
            "inspirational",
            "life",
            "love",
            "sisters"
        ]
    },
    {
        "text": "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
        "author": "J.K. Rowling,",
        "tags": [
            "albus-dumbledore",
            "courage",
            "friends"
        ]
    },
    {
        "text": "I love deadlines. I love the whooshing noise they make as they go by.",
        "author": "Douglas Adams,",
        "tags": [
            "deadlines",
            "humor",
            "humour",
            "work",
            "writing"
        ]
    },
    {
        "text": "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.",
        "author": "Friedrich Nietzsche",
        "tags": [
            "lies",
            "lying",
            "trust"
        ]
    },
    {
        "text": "There is no greater agony than bearing an untold story inside you.",
        "author": "Maya Angelou,",
        "tags": [
            "1970",
            "inspirational",
            "stories",
            "writing"
        ]
    },
    {
        "text": "If you judge people, you have no time to love them.",
        "author": "Mother Teresa",
        "tags": [
            "attributed-no-source"
        ]
    },
    {
        "text": "There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.",
        "author": "Sarah Dessen,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "If you can't explain it to a six year old, you don't understand it yourself.",
        "author": "Albert Einstein",
        "tags": [
            "attributed-no-source",
            "simplicity",
            "understand"
        ]
    },
    {
        "text": "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.",
        "author": "Haruki Murakami,",
        "tags": [
            "books",
            "thought"
        ]
    },
    {
        "text": "Love is that condition in which the happiness of another person is essential to your own.",
        "author": "Robert A. Heinlein,",
        "tags": [
            "essential",
            "happiness",
            "love"
        ]
    },
    {
        "text": "Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.",
        "author": "Garrison Keillor",
        "tags": [
            "humor",
            "religion"
        ]
    },
    {
        "text": "Everything you can imagine is real.",
        "author": "Pablo Picasso",
        "tags": [
            "art",
            "imagination",
            "inspirational",
            "life"
        ]
    },
    {
        "text": "I have always imagined that Paradise will be a kind of library.",
        "author": "Jorge Luis Borges",
        "tags": [
            "books",
            "library"
        ]
    },
    {
        "text": "Women and cats will do as they please, and men and dogs should relax and get used to the idea.",
        "author": "Robert A. Heinlein",
        "tags": [
            "cats",
            "humor",
            "women"
        ]
    },
    {
        "text": "We don't see things as they are, we see them as we are.",
        "author": "Anaïs Nin",
        "tags": []
    },
    {
        "text": "You love me. Real or not real?\"I tell him, \"Real.",
        "author": "Suzanne Collins,",
        "tags": [
            "katniss",
            "love",
            "peeta",
            "suzanne-collins",
            "the-hunger-games"
        ]
    },
    {
        "text": "You may not be her first, her last, or her only. She loved before she may love again. But if she loves you now, what else matters? She's not perfect—you aren't either, and the two of you may never be perfect together but if she can make you laugh, cause you to think twice, and admit to being human and making mistakes, hold onto her and give her the most you can. She may not be thinking about you every second of the day, but she will give you a part of her that she knows you can break—her heart. So don't hurt her, don't change her, don't analyze and don't expect more than she can give. Smile when she makes you happy, let her know when she makes you mad, and miss her when she's not there.",
        "author": "Bob Marley",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Sometimes the questions are complicated and the answers are simple.",
        "author": "Dr. Seuss",
        "tags": [
            "attributed-no-source"
        ]
    },
    {
        "text": "You can never get a cup of tea large enough or a book long enough to suit me.",
        "author": "C.S. Lewis",
        "tags": [
            "books",
            "inspirational",
            "reading",
            "tea"
        ]
    },
    {
        "text": "Never trust anyone who has not brought a book with them.",
        "author": "Lemony Snicket,",
        "tags": [
            "books",
            "reading"
        ]
    },
    {
        "text": "Life isn't about finding yourself. Life is about creating yourself.",
        "author": "George Bernard Shaw",
        "tags": [
            "inspirational",
            "life",
            "yourself"
        ]
    },
    {
        "text": "We read to know we're not alone.",
        "author": "William Nicholson,",
        "tags": [
            "misattributed-to-c-s-lewis",
            "reading"
        ]
    },
    {
        "text": "Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.",
        "author": "John Green,",
        "tags": [
            "books",
            "power-of-words",
            "reading"
        ]
    },
    {
        "text": "All you need is love. But a little chocolate now and then doesn't hurt.",
        "author": "Charles M. Schulz",
        "tags": [
            "chocolate",
            "food",
            "humor"
        ]
    },
    {
        "text": "Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.",
        "author": "Jim Henson",
        "tags": []
    },
    {
        "text": "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
        "author": "J.K. Rowling,",
        "tags": [
            "dumbledore"
        ]
    },
    {
        "text": "Today you are You, that is truer than true. There is no one alive who is Youer than You.",
        "author": "Dr. Seuss,",
        "tags": [
            "comedy",
            "life",
            "yourself"
        ]
    },
    {
        "text": "I'm not afraid of death; I just don't want to be there when it happens.",
        "author": "Woody Allen",
        "tags": [
            "death",
            "fear",
            "humor",
            "life"
        ]
    },
    {
        "text": "If one cannot enjoy reading a book over and over again, there is no use in reading it at all.",
        "author": "Oscar Wilde",
        "tags": [
            "books",
            "reading"
        ]
    },
    {
        "text": "To the well-organized mind, death is but the next great adventure.",
        "author": "J.K. Rowling,",
        "tags": [
            "death",
            "dumbledore",
            "harry",
            "inspirational",
            "philosophers-stone",
            "ron",
            "sorcerers-stone"
        ]
    },
    {
        "text": "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all—in which case, you fail by default.",
        "author": "J.K. Rowling",
        "tags": []
    },
    {
        "text": "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.",
        "author": "Albert Einstein",
        "tags": [
            "attributed-no-source",
            "children",
            "fairy-tales"
        ]
    },
    {
        "text": "I'm in love with you,\" he said quietly.\"Augustus,\" I said.\"I am,\" he said. He was staring at me, and I could see the corners of his eyes crinkling. \"I'm in love with you, and I'm not in the business of denying myself the simple pleasure of saying true things. I'm in love with you, and I know that love is just a shout into the void, and that oblivion is inevitable, and that we're all doomed and that there will come a day when all our labor has been returned to dust, and I know the sun will swallow the only earth we'll ever have, and I am in love with you.",
        "author": "John Green,",
        "tags": [
            "doomed",
            "inevitable",
            "love",
            "oblivion",
            "pleasure",
            "simple"
        ]
    },
    {
        "text": "Logic will get you from A to Z; imagination will get you everywhere.",
        "author": "Albert Einstein",
        "tags": [
            "attributed-no-source",
            "imagination"
        ]
    },
    {
        "text": "I am nothing special, of this I am sure. I am a common man with common thoughts and I've led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but I've loved another with all my heart and soul, and to me, this has always been enough..",
        "author": "Nicholas Sparks,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Whenever I feel the need to exercise, I lie down until it goes away.",
        "author": "Paul   Terry",
        "tags": [
            "exercise",
            "humor",
            "laziness",
            "misattributed-to-hutchins"
        ]
    },
    {
        "text": "The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.",
        "author": "Bob Marley",
        "tags": [
            "friendship"
        ]
    },
    {
        "text": "Sometimes people are beautiful.Not in looks.Not in what they say.Just in what they are.",
        "author": "Markus Zusak,",
        "tags": [
            "beauty",
            "life"
        ]
    },
    {
        "text": "Have you fallen in love with the wrong person yet?'Jace said, \"Unfortunately, Lady of the Haven, my one true love remains myself.\"...\"At least,\" she said, \"you don't have to worry about rejection, Jace Wayland.\"\"Not necessarily. I turn myself down occasionally, just to keep it interesting.",
        "author": "Cassandra Clare,",
        "tags": [
            "city-of-bones",
            "jace"
        ]
    },
    {
        "text": "Love looks not with the eyes, but with the mind; And therefore is wing'd Cupid painted blind. Nor hath love's mind of any judgment taste; Wings and no eyes figure unheedy haste: And therefore is love said to be a child, Because in choice he is so oft beguil'd.",
        "author": "William Shakespeare,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "You don't get to choose if you get hurt in this world...but you do have some say in who hurts you. I like my choices.",
        "author": "John Green,",
        "tags": [
            "satisfaction",
            "self-determination"
        ]
    },
    {
        "text": "Do what you can, with what you have, where you are.",
        "author": "Theodore Roosevelt",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Folks are usually about as happy as they make their minds up to be.",
        "author": "Abraham Lincoln",
        "tags": [
            "attributed-no-source",
            "happiness"
        ]
    },
    {
        "text": "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
        "author": "Dr. Seuss,",
        "tags": []
    },
    {
        "text": "There is no friend as loyal as a book.",
        "author": "Ernest Hemingway",
        "tags": [
            "books",
            "friends",
            "novelist-quotes"
        ]
    },
    {
        "text": "The story so far:In the beginning the Universe was created.This has made a lot of people very angry and been widely regarded as a bad move.",
        "author": "Douglas Adams,",
        "tags": [
            "humor",
            "scifi"
        ]
    },
    {
        "text": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "author": "Winston S. Churchill",
        "tags": [
            "bravery",
            "courage",
            "failure",
            "inspirational",
            "success"
        ]
    },
    {
        "text": "One good thing about music, when it hits you, you feel no pain.",
        "author": "Bob Marley",
        "tags": [
            "music"
        ]
    },
    {
        "text": "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.",
        "author": "Groucho Marx",
        "tags": [
            "books",
            "humor",
            "reading",
            "television"
        ]
    },
    {
        "text": "There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.",
        "author": "Jane Austen,",
        "tags": [
            "friendship",
            "love"
        ]
    },
    {
        "text": "So, this is my life. And I want you to know that I am both happy and sad and I'm still trying to figure out how that could be.",
        "author": "Stephen Chbosky,",
        "tags": [
            "charlie",
            "favourite-books",
            "inspirational",
            "sad",
            "soul-searching",
            "wallflower"
        ]
    },
    {
        "text": "Love is like the wind, you can't see it but you can feel it.",
        "author": "Nicholas Sparks,",
        "tags": [
            "love",
            "simile"
        ]
    },
    {
        "text": "When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.",
        "author": "Helen Keller",
        "tags": []
    },
    {
        "text": "Not all of us can do great things. But we can do small things with great love.",
        "author": "Mother Teresa",
        "tags": [
            "misattributed-to-mother-teresa",
            "paraphrased"
        ]
    },
    {
        "text": "Listen to the mustn'ts, child. Listen to the don'ts. Listen to the shouldn'ts, the impossibles, the won'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.",
        "author": "Shel Silverstein",
        "tags": [
            "anything-can-be",
            "hope",
            "impossible",
            "inspirational",
            "musn-t",
            "possibilities",
            "shouldn-t",
            "won-t"
        ]
    },
    {
        "text": "Some people never go crazy. What truly horrible lives they must lead.",
        "author": "Charles Bukowski",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        "author": "Albert Einstein",
        "tags": [
            "life",
            "simile"
        ]
    },
    {
        "text": "You don't love someone because they're perfect, you love them in spite of the fact that they're not.",
        "author": "Jodi Picoult,",
        "tags": [
            "imperfect",
            "love"
        ]
    },
    {
        "text": "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.",
        "author": "Joan Powers,",
        "tags": [
            "friendship",
            "misattributed-a-a-milne"
        ]
    },
    {
        "text": "People think a soul mate is your perfect fit, and that's what everyone wants. But a true soul mate is a mirror, the person who shows you everything that is holding you back, the person who brings you to your own attention so you can change your life. A true soul mate is probably the most important person you'll ever meet, because they tear down your walls and smack you awake. But to live with a soul mate forever? Nah. Too painful. Soul mates, they come into your life just to reveal another layer of yourself to you, and then leave. A soul mates purpose is to shake you up, tear apart your ego a little bit, show you your obstacles and addictions, break your heart open so new light can get in, make you so desperate and out of control that you have to transform your life, then introduce you to your spiritual master...",
        "author": "Elizabeth Gilbert,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Love never dies a natural death. It dies because we don't know how to replenish its source. It dies of blindness and errors and betrayals. It dies of illness and wounds; it dies of weariness, of witherings, of tarnishings.",
        "author": "Anais Nin",
        "tags": [
            "death",
            "love"
        ]
    },
    {
        "text": "What really knocks me out is a book that, when you're all done reading it, you wish the author that wrote it was a terrific friend of yours and you could call him up on the phone whenever you felt like it. That doesn't happen much, though.",
        "author": "J.D. Salinger,",
        "tags": [
            "authors",
            "books",
            "literature",
            "reading",
            "writing"
        ]
    },
    {
        "text": "Not all those who wander are lost.",
        "author": "J.R.R. Tolkien,",
        "tags": [
            "bilbo",
            "journey",
            "lost",
            "quest",
            "travel",
            "wander"
        ]
    },
    {
        "text": "If I had a flower for every time I thought of you...I could walk through my garden forever.",
        "author": "Alfred Tennyson",
        "tags": [
            "friendship",
            "love"
        ]
    },
    {
        "text": "It matters not what someone is born, but what they grow to be.",
        "author": "J.K. Rowling,",
        "tags": [
            "dumbledore"
        ]
    },
    {
        "text": "Saying 'I notice you're a nerd' is like saying, 'Hey, I notice that you'd rather be intelligent than be stupid, that you'd rather be thoughtful than be vapid, that you believe that there are things that matter more than the arrest record of Lindsay Lohan. Why is that?' In fact, it seems to me that most contemporary insults are pretty lame. Even 'lame' is kind of lame. Saying 'You're lame' is like saying 'You walk with a limp.' Yeah, whatever, so does 50 Cent, and he's done all right for himself.",
        "author": "John Green",
        "tags": [
            "humor",
            "nerdfighters"
        ]
    },
    {
        "text": "If you can make a woman laugh, you can make her do anything.",
        "author": "Marilyn Monroe",
        "tags": [
            "attributed-no-source",
            "girls",
            "love"
        ]
    },
    {
        "text": "We’re all a little weird. And life is a little weird. And when we find someone whose weirdness is compatible with ours, we join up with them and fall into mutually satisfying weirdness—and call it love—true love.",
        "author": "Robert Fulghum,",
        "tags": [
            "love",
            "weirdness"
        ]
    },
    {
        "text": "The difference between genius and stupidity is: genius has its limits.",
        "author": "Alexandre Dumas-fils",
        "tags": [
            "misattributed-to-einstein"
        ]
    },
    {
        "text": "It is what you read when you don't have to that determines what you will be when you can't help it.",
        "author": "Oscar Wilde",
        "tags": [
            "books",
            "reading"
        ]
    },
    {
        "text": "I wish it need not have happened in my time,\" said Frodo.\"So do I,\" said Gandalf, \"and so do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us.",
        "author": "J.R.R. Tolkien,",
        "tags": [
            "adventuring",
            "death",
            "time"
        ]
    },
    {
        "text": "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
        "author": "Terry Pratchett,",
        "tags": [
            "humor",
            "open-mind",
            "thinking"
        ]
    },
    {
        "text": "Do one thing every day that scares you.",
        "author": "Eleanor Roosevelt",
        "tags": [
            "attributed",
            "fear",
            "inspiration"
        ]
    },
    {
        "text": "I would venture to guess that Anon, who wrote so many poems without signing them, was often a woman.",
        "author": "Virginia Woolf,",
        "tags": [
            "women"
        ]
    },
    {
        "text": "Some infinities are bigger than other infinities.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "You don’t have a soul, Doctor. You are a soul. You have a body, temporarily.",
        "author": "Walter M. Miller Jr.,",
        "tags": [
            "body-soul",
            "misattributed-to-c-s-lewis"
        ]
    },
    {
        "text": "One must always be careful of books,\" said Tessa, \"and what is inside them, for words have the power to change us.",
        "author": "Cassandra Clare,",
        "tags": [
            "books"
        ]
    },
    {
        "text": "Reality continues to ruin my life.",
        "author": "Bill Watterson,",
        "tags": [
            "calvin-and-hobbes",
            "humor",
            "life"
        ]
    },
    {
        "text": "Time you enjoy wasting is not wasted time.",
        "author": "Marthe Troly-Curtin,",
        "tags": [
            "happiness",
            "misattributed-john-lennon",
            "procrastination",
            "time"
        ]
    },
    {
        "text": "Things change. And friends leave. Life doesn't stop for anybody.",
        "author": "Stephen Chbosky,",
        "tags": [
            "change",
            "life"
        ]
    },
    {
        "text": "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
        "author": "Toni Morrison",
        "tags": [
            "books",
            "writing"
        ]
    },
    {
        "text": "I declare after all there is no enjoyment like reading! How much sooner one tires of any thing than of a book! -- When I have a house of my own, I shall be miserable if I have not an excellent library.",
        "author": "Jane Austen,",
        "tags": [
            "books",
            "library",
            "reading"
        ]
    },
    {
        "text": "To love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken. If you want to make sure of keeping it intact you must give it to no one, not even an animal. Wrap it carefully round with hobbies and little luxuries; avoid all entanglements. Lock it up safe in the casket or coffin of your selfishness. But in that casket, safe, dark, motionless, airless, it will change. It will not be broken; it will become unbreakable, impenetrable, irredeemable. To love is to be vulnerable.",
        "author": "C.S. Lewis,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "There is no pretending,\" Jace said with absolute clarity. \"I love you, and I will love you until I die, and if there is life after that, I'll love you then.",
        "author": "Cassandra Clare,",
        "tags": [
            "mortal-instruments",
            "romance",
            "teen-fantasy"
        ]
    },
    {
        "text": "Who are you to judge the life I live?I know I'm not perfect-and I don't live to be-but before you start pointing fingers...make sure you hands are clean!",
        "author": "Bob Marley",
        "tags": [
            "judge",
            "life",
            "live",
            "perfection"
        ]
    },
    {
        "text": "The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.",
        "author": "Marilyn Monroe",
        "tags": [
            "attributed-no-source",
            "love"
        ]
    },
    {
        "text": "The only way out of the labyrinth of suffering is to forgive.",
        "author": "John Green,",
        "tags": [
            "compassion",
            "life",
            "suffering"
        ]
    },
    {
        "text": "The books that the world calls immoral are books that show the world its own shame.",
        "author": "Oscar Wilde,",
        "tags": [
            "books",
            "morality",
            "reading"
        ]
    },
    {
        "text": "And, when you want something, all the universe conspires in helping you to achieve it.",
        "author": "Paulo Coelho,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "When someone loves you, the way they talk about you is different. You feel safe and comfortable.",
        "author": "Jess C. Scott,",
        "tags": [
            "desire",
            "emotion",
            "friendship",
            "honesty",
            "imagination",
            "individuality",
            "life",
            "love",
            "passion",
            "reality",
            "relationships",
            "romance",
            "truth",
            "wisdom",
            "wise-words"
        ]
    },
    {
        "text": "I can never read all the books I want; I can never be all the people I want and live all the lives I want. I can never train myself in all the skills I want. And why do I want? I want to live and feel all the shades, tones and variations of mental and physical experience possible in my life. And I am horribly limited.",
        "author": "Sylvia Plath,",
        "tags": [
            "books",
            "life",
            "limits"
        ]
    },
    {
        "text": "Go to heaven for the climate and hell for the company.",
        "author": "Benjamin Franklin Wade",
        "tags": [
            "humor",
            "misattributed-mark-twain",
            "philosophy",
            "theology"
        ]
    },
    {
        "text": "The reason I talk to myself is because I’m the only one whose answers I accept.",
        "author": "George Carlin",
        "tags": [
            "humor",
            "insanity",
            "lies",
            "lying",
            "self-indulgence",
            "truth"
        ]
    },
    {
        "text": "Piglet sidled up to Pooh from behind. \"Pooh!\" he whispered.\"Yes, Piglet?\"\"Nothing,\" said Piglet, taking Pooh's paw. \"I just wanted to be sure of you.",
        "author": "A.A. Milne,",
        "tags": [
            "friendship",
            "piglet",
            "pooh",
            "reassurance"
        ]
    },
    {
        "text": "He's like a drug for you, Bella.",
        "author": "Stephenie Meyer,",
        "tags": []
    },
    {
        "text": "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        "author": "J.K. Rowling,",
        "tags": [
            "live-death-love"
        ]
    },
    {
        "text": "There is nothing to writing. All you do is sit down at a typewriter and bleed.",
        "author": "Ernest Hemingway",
        "tags": [
            "good",
            "writing"
        ]
    },
    {
        "text": "A wise girl kisses but doesn't love, listens but doesn't believe, and leaves before she is left.",
        "author": "Marilyn Monroe",
        "tags": [
            "attributed-no-source"
        ]
    },
    {
        "text": "Dumbledore watched her fly away, and as her silvery glow faded he turned back to Snape, and his eyes were full of tears.\"After all this time?\"\"Always,\" said Snape.",
        "author": "J.K. Rowling,",
        "tags": [
            "dumbledore",
            "life",
            "love",
            "snape"
        ]
    },
    {
        "text": "You should date a girl who reads.Date a girl who reads. Date a girl who spends her money on books instead of clothes, who has problems with closet space because she has too many books. Date a girl who has a list of books she wants to read, who has had a library card since she was twelve.Find a girl who reads. You’ll know that she does because she will always have an unread book in her bag. She’s the one lovingly looking over the shelves in the bookstore, the one who quietly cries out when she has found the book she wants. You see that weird chick sniffing the pages of an old book in a secondhand book shop? That’s the reader. They can never resist smelling the pages, especially when they are yellow and worn.She’s the girl reading while waiting in that coffee shop down the street. If you take a peek at her mug, the non-dairy creamer is floating on top because she’s kind of engrossed already. Lost in a world of the author’s making. Sit down. She might give you a glare, as most girls who read do not like to be interrupted. Ask her if she likes the book.Buy her another cup of coffee.Let her know what you really think of Murakami. See if she got through the first chapter of Fellowship. Understand that if she says she understood James Joyce’s Ulysses she’s just saying that to sound intelligent. Ask her if she loves Alice or she would like to be Alice.It’s easy to date a girl who reads. Give her books for her birthday, for Christmas, for anniversaries. Give her the gift of words, in poetry and in song. Give her Neruda, Pound, Sexton, Cummings. Let her know that you understand that words are love. Understand that she knows the difference between books and reality but by god, she’s going to try to make her life a little like her favorite book. It will never be your fault if she does.She has to give it a shot somehow.Lie to her. If she understands syntax, she will understand your need to lie. Behind words are other things: motivation, value, nuance, dialogue. It will not be the end of the world.Fail her. Because a girl who reads knows that failure always leads up to the climax. Because girls who read understand that all things must come to end, but that you can always write a sequel. That you can begin again and again and still be the hero. That life is meant to have a villain or two.Why be frightened of everything that you are not? Girls who read understand that people, like characters, develop. Except in the Twilight series.If you find a girl who reads, keep her close. When you find her up at 2 AM clutching a book to her chest and weeping, make her a cup of tea and hold her. You may lose her for a couple of hours but she will always come back to you. She’ll talk as if the characters in the book are real, because for a while, they always are.You will propose on a hot air balloon. Or during a rock concert. Or very casually next time she’s sick. Over Skype.You will smile so hard you will wonder why your heart hasn’t burst and bled out all over your chest yet. You will write the story of your lives, have kids with strange names and even stranger tastes. She will introduce your children to the Cat in the Hat and Aslan, maybe in the same day. You will walk the winters of your old age together and she will recite Keats under her breath while you shake the snow off your boots.Date a girl who reads because you deserve it. You deserve a girl who can give you the most colorful life imaginable. If you can only give her monotony, and stale hours and half-baked proposals, then you’re better off alone. If you want the world and the worlds beyond it, date a girl who reads.Or better yet, date a girl who writes.",
        "author": "Rosemarie Urquico",
        "tags": []
    },
    {
        "text": "You don’t forget the face of the person who was your last hope.",
        "author": "Suzanne Collins,",
        "tags": [
            "the-hunger-games"
        ]
    },
    {
        "text": "′Classic′ - a book which people praise and don't read.",
        "author": "Mark Twain",
        "tags": [
            "books",
            "classic",
            "reading"
        ]
    },
    {
        "text": "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        "author": "John Lennon",
        "tags": [
            "beatles",
            "connection",
            "dreamers",
            "dreaming",
            "dreams",
            "hope",
            "inspirational",
            "peace"
        ]
    },
    {
        "text": "I am good, but not an angel. I do sin, but I am not the devil. I am just a small girl in a big world trying to find someone to love.",
        "author": "Marilyn Monroe",
        "tags": [
            "attributed-no-source"
        ]
    },
    {
        "text": "I am free of all prejudice. I hate everyone equally.",
        "author": "W.C. Fields",
        "tags": []
    },
    {
        "text": "I've been making a list of the things they don't teach you at school. They don't teach you how to love somebody. They don't teach you how to be famous. They don't teach you how to be rich or how to be poor. They don't teach you how to walk away from someone you don't love any longer. They don't teach you how to know what's going on in someone else's mind. They don't teach you what to say to someone who's dying. They don't teach you anything worth knowing.",
        "author": "Neil Gaiman,",
        "tags": [
            "dying",
            "facts",
            "fame",
            "knowing",
            "love",
            "poverty",
            "reality",
            "school",
            "teach",
            "wealth"
        ]
    },
    {
        "text": "Finish each day and be done with it. You have done what you could. Some blunders and absurdities no doubt crept in; forget them as soon as you can. Tomorrow is a new day. You shall begin it serenely and with too high a spirit to be encumbered with your old nonsense.",
        "author": "Ralph Waldo Emerson",
        "tags": [
            "life",
            "regrets"
        ]
    },
    {
        "text": "He has achieved success who has lived well, laughed often, and loved much;Who has enjoyed the trust of pure women, the respect of intelligent men and the love of little children;Who has filled his niche and accomplished his task;Who has never lacked appreciation of Earth's beauty or failed to express it;Who has left the world better than he found it,Whether an improved poppy, a perfect poem, or a rescued soul;Who has always looked for the best in others and given them the best he had;Whose life was an inspiration;Whose memory a benediction.",
        "author": "Bessie Anderson Stanley,",
        "tags": [
            "life",
            "misattributed-to-emerson",
            "success",
            "widely-misattributed"
        ]
    },
    {
        "text": "I love mankind ... it's people I can't stand!!",
        "author": "Charles M. Schulz",
        "tags": [
            "humor",
            "mankind",
            "people"
        ]
    },
    {
        "text": "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.",
        "author": "Harper Lee,",
        "tags": [
            "better-life-empathy"
        ]
    },
    {
        "text": "I have never let my schooling interfere with my education.",
        "author": "Mark Twain",
        "tags": [
            "attributed-no-source",
            "education"
        ]
    },
    {
        "text": "The marks humans leave are too often scars.",
        "author": "John Green,",
        "tags": [
            "humans",
            "pain",
            "scars"
        ]
    },
    {
        "text": "Some day you will be old enough to start reading fairy tales again.",
        "author": "C.S. Lewis",
        "tags": [
            "age",
            "fairytales",
            "growing-up"
        ]
    },
    {
        "text": "A lady's imagination is very rapid; it jumps from admiration to love, from love to matrimony in a moment.",
        "author": "Jane Austen,",
        "tags": [
            "humor",
            "love",
            "romantic",
            "women"
        ]
    },
    {
        "text": "We are what we pretend to be, so we must be careful about what we pretend to be.",
        "author": "Kurt Vonnegut,",
        "tags": [
            "action",
            "attitude",
            "choice",
            "imagination",
            "inspiration",
            "life",
            "pretend"
        ]
    },
    {
        "text": "Remember, we're madly in love, so it's all right to kiss me anytime you feel like it.",
        "author": "Suzanne Collins,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness that most frightens us. We ask ourselves, 'Who am I to be brilliant, gorgeous, talented, fabulous?' Actually, who are you not to be? You are a child of God. Your playing small does not serve the world. There is nothing enlightened about shrinking so that other people won't feel insecure around you. We are all meant to shine, as children do. We were born to make manifest the glory of God that is within us. It's not just in some of us; it's in everyone. And as we let our own light shine, we unconsciously give other people permission to do the same. As we are liberated from our own fear, our presence automatically liberates others.",
        "author": "Marianne Williamson,",
        "tags": [
            "akeelah",
            "fear",
            "inspirational"
        ]
    },
    {
        "text": "Books are a uniquely portable magic.",
        "author": "Stephen King,",
        "tags": [
            "books",
            "magic",
            "reading"
        ]
    },
    {
        "text": "And in that moment, I swear we were infinite.",
        "author": "Stephen Chbosky,",
        "tags": [
            "infinity"
        ]
    },
    {
        "text": "To die will be an awfully big adventure.",
        "author": "J.M. Barrie,",
        "tags": [
            "adventure",
            "love"
        ]
    },
    {
        "text": "Anyone who has never made a mistake has never tried anything new.",
        "author": "Albert Einstein",
        "tags": [
            "attributed-no-source",
            "mistakes"
        ]
    },
    {
        "text": "It’s no use going back to yesterday, because I was a different person then.",
        "author": "Lewis Carroll",
        "tags": [
            "alice",
            "humor",
            "inspirational",
            "philosophy-of-life",
            "psychological",
            "yesterday"
        ]
    },
    {
        "text": "The truth is rarely pure and never simple.",
        "author": "Oscar Wilde,",
        "tags": [
            "truth"
        ]
    },
    {
        "text": "What a slut time is. She screws everybody.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "I'm the one that's got to die when it's time for me to die, so let me live my life the way I want to.",
        "author": "Jimi Hendrix,",
        "tags": [
            "death",
            "life"
        ]
    },
    {
        "text": "It takes courage to grow up and become who you really are.",
        "author": "E.E. Cummings",
        "tags": [
            "attributed-no-source",
            "courage"
        ]
    },
    {
        "text": "But better to get hurt by the truth than comforted with a lie.",
        "author": "Khaled Hosseini",
        "tags": [
            "life"
        ]
    },
    {
        "text": "You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children.",
        "author": "Madeleine L'Engle",
        "tags": [
            "books",
            "children",
            "difficult",
            "grown-ups",
            "write",
            "writers",
            "writing"
        ]
    },
    {
        "text": "I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.",
        "author": "C.S. Lewis",
        "tags": []
    },
    {
        "text": "So it's not gonna be easy. It's going to be really hard; we're gonna have to work at this everyday, but I want to do that because I want you. I want all of you, forever, everyday. You and me... everyday.",
        "author": "Nicholas Sparks,",
        "tags": [
            "love",
            "marriage"
        ]
    },
    {
        "text": "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.",
        "author": "Mark Twain",
        "tags": [
            "death",
            "life"
        ]
    },
    {
        "text": "We believe in ordinary acts of bravery, in the courage that drives one person to stand up for another.",
        "author": "Veronica Roth,",
        "tags": [
            "inspirational-quotes",
            "strength-and-courage"
        ]
    },
    {
        "text": "... a mind needs books as a sword needs a whetstone, if it is to keep its edge.",
        "author": "George R.R. Martin,",
        "tags": [
            "books",
            "mind"
        ]
    },
    {
        "text": "Memories warm you up from the inside. But they also tear you apart.",
        "author": "Haruki Murakami,",
        "tags": [
            "memories"
        ]
    },
    {
        "text": "Books are the ultimate Dumpees: put them down and they’ll wait for you forever; pay attention to them and they always love you back.",
        "author": "John Green,",
        "tags": [
            "books",
            "reading"
        ]
    },
    {
        "text": "There is nothing better than a friend, unless it is a friend with chocolate.",
        "author": "Linda Grayson",
        "tags": [
            "chocolate",
            "friendship"
        ]
    },
    {
        "text": "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.",
        "author": "Frank Herbert,",
        "tags": [
            "bene-gesserit",
            "fear",
            "litany-against-fear",
            "motivational",
            "scifi"
        ]
    },
    {
        "text": "[Dean] My dear fellow, who will let you?[Roark] That’s not the point. The point is, who will stop me?",
        "author": "Ayn Rand,",
        "tags": []
    },
    {
        "text": "There are infinite numbers between 0 and 1. There's .1 and .12 and .112 and an infinite collection of others. Of course, there is a bigger infinite set of numbers between 0 and 2, or between 0 and a million. Some infinities are bigger than other infinities. A writer we used to like taught us that. There are days, many of them, when I resent the size of my unbounded set. I want more numbers than I'm likely to get, and God, I want more numbers for Augustus Waters than he got. But, Gus, my love, I cannot tell you how thankful I am for our little infinity. I wouldn't trade it for the world. You gave me a forever within the numbered days, and I'm grateful.",
        "author": "John Green,",
        "tags": [
            "infinity"
        ]
    },
    {
        "text": "The truth.\" Dumbledore sighed. \"It is a beautiful and terrible thing, and should therefore be treated with great caution.",
        "author": "J.K. Rowling,",
        "tags": [
            "truth"
        ]
    },
    {
        "text": "A lie can travel half way around the world while the truth is putting on its shoes.",
        "author": "Mark Twain",
        "tags": [
            "misattributed-mark-twain",
            "truth"
        ]
    },
    {
        "text": "Knowing yourself is the beginning of all wisdom.",
        "author": "Aristotle",
        "tags": [
            "introspection",
            "self-discovery",
            "wisdom"
        ]
    },
    {
        "text": "Never tell the truth to people who are not worthy of it.",
        "author": "Mark Twain",
        "tags": [
            "truth"
        ]
    },
    {
        "text": "I love you as certain dark things are to be loved, in secret, between the shadow and the soul.",
        "author": "Pablo Neruda,",
        "tags": [
            "love",
            "poetry"
        ]
    },
    {
        "text": "Perhaps one did not want to be loved so much as to be understood.",
        "author": "George Orwell,",
        "tags": [
            "truth"
        ]
    },
    {
        "text": "It's the possibility of having a dream come true that makes life interesting.",
        "author": "Paulo Coelho,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Tis better to have loved and lostThan never to have loved at all.",
        "author": "Alfred Lord Tennyson,",
        "tags": [
            "paraphrase-of-congreve"
        ]
    },
    {
        "text": "Remember, if the time should come when you have to make a choice between what is right and what is easy, remember what happened to a boy who was good, and kind, and brave, because he strayed across the path of Lord Voldemort. Remember Cedric Diggory.",
        "author": "J.K. Rowling,",
        "tags": []
    },
    {
        "text": "Only the very weak-minded refuse to be influenced by literature and poetry.",
        "author": "Cassandra Clare,",
        "tags": [
            "books",
            "literature",
            "philosphy",
            "poetry",
            "reading"
        ]
    },
    {
        "text": "Just when you think it can't get any worse, it can. And just when you think it can't get any better, it can.",
        "author": "Nicholas Sparks,",
        "tags": [
            "life",
            "love"
        ]
    },
    {
        "text": "It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "happiness",
            "pain",
            "peace",
            "scar",
            "sweetness"
        ]
    },
    {
        "text": "Be nice to nerds. You may end up working for them. We all could.",
        "author": "Charles J. Sykes,",
        "tags": [
            "humor",
            "misattributed-to-bill-gates",
            "nerd",
            "nerds",
            "work"
        ]
    },
    {
        "text": "Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.",
        "author": "William Shakespeare,",
        "tags": [
            "greatness"
        ]
    },
    {
        "text": "The only true wisdom is in knowing you know nothing.",
        "author": "Socrates",
        "tags": [
            "knowledge",
            "wisdom"
        ]
    },
    {
        "text": "What you're supposed to do when you don't like a thing is change it. If you can't change it, change the way you think about it. Don't complain.",
        "author": "Maya Angelou,",
        "tags": [
            "1993",
            "advice",
            "complaining",
            "inspirational"
        ]
    },
    {
        "text": "Do you remember me telling you we are practicing non-verbal spells, Potter?\"\"Yes,\" said Harry stiffly.\"Yes, sir.\"\"There's no need to call me \"sir\" Professor.\"The words had escaped him before he knew what he was saying.",
        "author": "J.K. Rowling,",
        "tags": [
            "humor",
            "rebellion",
            "sarcasm"
        ]
    },
    {
        "text": "Happiness in intelligent people is the rarest thing I know.",
        "author": "Ernest Hemingway,",
        "tags": [
            "happiness"
        ]
    },
    {
        "text": "He’s not perfect. You aren’t either, and the two of you will never be perfect. But if he can make you laugh at least once, causes you to think twice, and if he admits to being human and making mistakes, hold onto him and give him the most you can. He isn’t going to quote poetry, he’s not thinking about you every moment, but he will give you a part of him that he knows you could break. Don’t hurt him, don’t change him, and don’t expect for more than he can give. Don’t analyze. Smile when he makes you happy, yell when he makes you mad, and miss him when he’s not there. Love hard when there is love to be had. Because perfect guys don’t exist, but there’s always one guy that is perfect for you.",
        "author": "Bob Marley",
        "tags": [
            "inspirational",
            "love"
        ]
    },
    {
        "text": "A day without laughter is a day wasted.",
        "author": "Nicolas Chamfort",
        "tags": [
            "philosophy"
        ]
    },
    {
        "text": "Yes: I am a dreamer. For a dreamer is one who can only find his way by moonlight, and his punishment is that he sees the dawn before the rest of the world.",
        "author": "Oscar Wilde,",
        "tags": []
    },
    {
        "text": "You can never be overdressed or overeducated.",
        "author": "Oscar Wilde",
        "tags": [
            "education",
            "fashion"
        ]
    },
    {
        "text": "A person's a person, no matter how small.",
        "author": "Dr. Seuss,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "I became insane, with long intervals of horrible sanity.",
        "author": "Edgar Allan Poe",
        "tags": []
    },
    {
        "text": "Thomas Edison's last words were \"It's very beautiful over there\". I don't know where there is, but I believe it's somewhere, and I hope it's beautiful.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "When we honestly ask ourselves which person in our lives mean the most to us, we often find that it is those who, instead of giving advice, solutions, or cures, have chosen rather to share our pain and touch our wounds with a warm and tender hand. The friend who can be silent with us in a moment of despair or confusion, who can stay with us in an hour of grief and bereavement, who can tolerate not knowing, not curing, not healing and face with us the reality of our powerlessness, that is a friend who cares.",
        "author": "Henri Nouwen,",
        "tags": [
            "empathy",
            "friends",
            "friendship",
            "inspirational"
        ]
    },
    {
        "text": "Oh, I wouldn't mind, Hazel Grace. It would be a privilege to have my heart broken by you.",
        "author": "John Green,",
        "tags": [
            "augustus-waters",
            "hazel",
            "heartbreak",
            "privilege"
        ]
    },
    {
        "text": "It is one of the blessings of old friends that you can afford to be stupid with them.",
        "author": "Ralph Waldo Emerson,",
        "tags": []
    },
    {
        "text": "The one you love and the one who loves you are never, ever the same person.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "life",
            "love"
        ]
    },
    {
        "text": "Numbing the pain for a while will make it worse when you finally feel it.",
        "author": "J.K. Rowling,",
        "tags": [
            "pain"
        ]
    },
    {
        "text": "I saw my life branching out before me like the green fig tree in the story. From the tip of every branch, like a fat purple fig, a wonderful future beckoned and winked. One fig was a husband and a happy home and children, and another fig was a famous poet and another fig was a brilliant professor, and another fig was Ee Gee, the amazing editor, and another fig was Europe and Africa and South America, and another fig was Constantin and Socrates and Attila and a pack of other lovers with queer names and offbeat professions, and another fig was an Olympic lady crew champion, and beyond and above these figs were many more figs I couldn't quite make out. I saw myself sitting in the crotch of this fig tree, starving to death, just because I couldn't make up my mind which of the figs I would choose. I wanted each and every one of them, but choosing one meant losing all the rest, and, as I sat there, unable to decide, the figs began to wrinkle and go black, and, one by one, they plopped to the ground at my feet.",
        "author": "Sylvia Plath,",
        "tags": [
            "life-choices-fig-trees"
        ]
    },
    {
        "text": "When adults say, \"Teenagers think they are invincible\" with that sly, stupid smile on their faces, they don't know how right they are. We need never be hopeless, because we can never be irreparably broken. We think that we are invincible because we are. We cannot be born, and we cannot die. Like all energy, we can only change shapes and sizes and manifestations. They forget that when they get old. They get scared of losing and failing. But that part of us greater than the sum of our parts cannot begin and cannot end, and so it cannot fail.",
        "author": "John Green,",
        "tags": [
            "invincible",
            "teenagers",
            "teens"
        ]
    },
    {
        "text": "I finally understood what true love meant...love meant that you care for another person's happiness more than your own, no matter how painful the choices you face might be.",
        "author": "Nicholas Sparks,",
        "tags": [
            "dear-john",
            "nicholas-sparks"
        ]
    },
    {
        "text": "Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.",
        "author": "Charles W. Eliot",
        "tags": [
            "books",
            "friends",
            "reading",
            "teachers"
        ]
    },
    {
        "text": "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
        "author": "Albert Camus",
        "tags": [
            "attributed-no-source",
            "happiness",
            "meaning-of-life"
        ]
    },
    {
        "text": "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
        "author": "Isaac Asimov",
        "tags": [
            "life",
            "science",
            "wisdom"
        ]
    },
    {
        "text": "Music expresses that which cannot be put into words and that which cannot remain silent",
        "author": "Victor Hugo",
        "tags": [
            "literature",
            "music",
            "poetry"
        ]
    },
    {
        "text": "Have you ever noticed how ‘What the hell’ is always the right decision to make?",
        "author": "Terry Johnson,",
        "tags": [
            "humor",
            "misattributed-to-marilyn-monroe",
            "philosophy"
        ]
    },
    {
        "text": "Those who don't believe in magic will never find it.",
        "author": "Roald Dahl",
        "tags": []
    },
    {
        "text": "I am no bird; and no net ensnares me: I am a free human being with an independent will.",
        "author": "Charlotte Brontë,",
        "tags": [
            "character",
            "empowerment",
            "flaws",
            "freedom",
            "gender",
            "identity",
            "image",
            "independence",
            "integrity",
            "realism",
            "self-awareness",
            "self-determination",
            "women"
        ]
    },
    {
        "text": "Be careful about reading health books. Some fine day you'll die of a misprint.",
        "author": "Markus Herz",
        "tags": [
            "books",
            "health",
            "humor",
            "misattributed-mark-twain",
            "misprints"
        ]
    },
    {
        "text": "Jesus!\" Luke exclaimed.\"Actually, it's just me,\" said Simon. \"Although I've been told the resemblance is startling.",
        "author": "Cassandra Clare",
        "tags": [
            "humor",
            "jace-wayland",
            "simon-lewis"
        ]
    },
    {
        "text": "An eye for an eye will only make the whole world blind.",
        "author": "Mahatma Gandhi",
        "tags": [
            "attributed-no-source",
            "conflict",
            "fighting",
            "peace",
            "revenge",
            "trial",
            "violence"
        ]
    },
    {
        "text": "Just because you have the emotional range of a teaspoon doesn't mean we all have.",
        "author": "J.K. Rowling,",
        "tags": [
            "hermione"
        ]
    },
    {
        "text": "You can't live your life for other people. You've got to do what's right for you, even if it hurts some people you love.",
        "author": "Nicholas Sparks,",
        "tags": [
            "inspirational",
            "the-notebook"
        ]
    },
    {
        "text": "Until I feared I would lose it, I never loved to read. One does not love breathing.",
        "author": "Harper Lee,",
        "tags": [
            "reading"
        ]
    },
    {
        "text": "When we love, we always strive to become better than we are. When we strive to become better than we are, everything around us becomes better too.",
        "author": "Paulo Coelho,",
        "tags": []
    },
    {
        "text": "I speak to everyone in the same way, whether he is the garbage man or the president of the university.",
        "author": "Albert Einstein",
        "tags": [
            "life",
            "respect"
        ]
    },
    {
        "text": "Do you hate people?I don't hate them...I just feel better when they're not around.",
        "author": "Charles Bukowski,",
        "tags": [
            "humour",
            "misanthropy",
            "paraphrased"
        ]
    },
    {
        "text": "If you're gonna be two-faced at least make one of them pretty.",
        "author": "Marilyn Monroe",
        "tags": [
            "attributed-no-source"
        ]
    },
    {
        "text": "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        "author": "Anne Frank,",
        "tags": [
            "activism",
            "life",
            "optimism",
            "philosophy",
            "world"
        ]
    },
    {
        "text": "A children's story that can only be enjoyed by children is not a good children's story in the slightest.",
        "author": "C.S. Lewis",
        "tags": [
            "books",
            "children-s-books",
            "reading"
        ]
    },
    {
        "text": "I would rather walk with a friend in the dark, than alone in the light.",
        "author": "Helen Keller",
        "tags": []
    },
    {
        "text": "With great power... comes great need to take a nap. Wake me up later.",
        "author": "Rick Riordan,",
        "tags": [
            "nico"
        ]
    },
    {
        "text": "The truth will set you free, but first it will piss you off.",
        "author": "Joe Klaas,",
        "tags": [
            "anger",
            "freedom",
            "misattributed-gloria-steinem",
            "truth"
        ]
    },
    {
        "text": "A great book should leave you with many experiences, and slightly exhausted at the end. You live several lives while reading.",
        "author": "William Styron,",
        "tags": []
    },
    {
        "text": "So I walked back to my room and collapsed on the bottom bunk, thinking that if people were rain, I was drizzle and she was a hurricane.",
        "author": "John Green,",
        "tags": [
            "johngreen",
            "lookingforalaska"
        ]
    },
    {
        "text": "Fate is like a strange, unpopular restaurant filled with odd little waiters who bring you things you never asked for and don't always like.",
        "author": "Lemony Snicket",
        "tags": [
            "fate",
            "humor",
            "simile"
        ]
    },
    {
        "text": "The Seven Social Sins are: Wealth without work. Pleasure without conscience. Knowledge without character. Commerce without morality. Science without humanity. Worship without sacrifice. Politics without principle.From a sermon given by Frederick Lewis Donaldson in Westminster Abbey, London, on March 20, 1925.",
        "author": "Frederick Lewis Donaldson",
        "tags": [
            "character",
            "commerce",
            "conscience",
            "happiness",
            "humanity",
            "knowledge",
            "misattributed-to-gandhi",
            "money",
            "morality",
            "pleasure",
            "politics",
            "principle",
            "sacrifice",
            "science",
            "sin",
            "sins",
            "wealth",
            "work",
            "worship"
        ]
    },
    {
        "text": "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
        "author": "Stephen King",
        "tags": [
            "reading",
            "writing"
        ]
    },
    {
        "text": "Creativity is knowing how to hide your sources",
        "author": "C.E.M. Joad",
        "tags": [
            "creativity",
            "humor",
            "misattributed-to-einstein",
            "paraphrased"
        ]
    },
    {
        "text": "Give a man a fire and he's warm for a day, but set fire to him and he's warm for the rest of his life.",
        "author": "Terry Pratchett,",
        "tags": [
            "humor",
            "proverb"
        ]
    },
    {
        "text": "I no longer believed in the idea of soul mates, or love at first sight. But I was beginning to believe that a very few times in your life, if you were lucky, you might meet someone who was exactly right for you. Not because he was perfect, or because you were, but because your combined flaws were arranged in a way that allowed two separate beings to hinge together.",
        "author": "Lisa Kleypas,",
        "tags": [
            "love",
            "relationships",
            "romance"
        ]
    },
    {
        "text": "I wish I could freeze this moment, right here, right now and live in it forever.",
        "author": "Suzanne Collins,",
        "tags": [
            "peeta"
        ]
    },
    {
        "text": "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.",
        "author": "George R.R. Martin,",
        "tags": [
            "identity"
        ]
    },
    {
        "text": "Happiness is when what you think, what you say, and what you do are in harmony.",
        "author": "Mahatma Gandhi",
        "tags": [
            "attributed-no-source",
            "happiness"
        ]
    },
    {
        "text": "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
        "author": "Mark Twain",
        "tags": [
            "greatness"
        ]
    },
    {
        "text": "The statistics on sanity are that one out of every four people is suffering from a mental illness. Look at your 3 best friends. If they're ok, then it's you.",
        "author": "Rita Mae Brown",
        "tags": [
            "humor",
            "insanity"
        ]
    },
    {
        "text": "Is this the part where you start tearing off strips of your shirt to bind my wounds?\"\"If you wanted me to rip my clothes off, you should have just asked.",
        "author": "Cassandra Clare,",
        "tags": [
            "clary",
            "clothes",
            "jace",
            "wounds"
        ]
    },
    {
        "text": "If we find ourselves with a desire that nothing in this world can satisfy, the most probable explanation is that we were made for another world.",
        "author": "C.S. Lewis",
        "tags": [
            "god",
            "world"
        ]
    },
    {
        "text": "Lock up your libraries if you like; but there is no gate, no lock, no bolt that you can set upon the freedom of my mind.",
        "author": "Virginia Woolf,",
        "tags": [
            "freedom",
            "women",
            "writing"
        ]
    },
    {
        "text": "He's more myself than I am. Whatever our souls are made of, his and mine are the same.",
        "author": "Emily Brontë,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "So we beat on, boats against the current, borne back ceaselessly into the past.",
        "author": "F. Scott Fitzgerald,",
        "tags": [
            "book",
            "inspirational"
        ]
    },
    {
        "text": "To the people who look at the stars and wish, Rhys.\"Rhys clinked his glass against mine. To the stars who listen— and the dreams that are answered.",
        "author": "Sarah J. Maas,",
        "tags": [
            "a-court-of-mist-and-fury",
            "acomaf",
            "feyre",
            "rhysand"
        ]
    },
    {
        "text": "Well-behaved women seldom make history.",
        "author": "Laurel Thatcher Ulrich,",
        "tags": [
            "inspirational",
            "misattributed-eleanor-roosevelt",
            "women"
        ]
    },
    {
        "text": "One is loved because one is loved. No reason is needed for loving.",
        "author": "Paulo Coelho,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Everyone thinks of changing the world, but no one thinks of changing himself.",
        "author": "Leo Tolstoy",
        "tags": [
            "change",
            "tolstoy"
        ]
    },
    {
        "text": "Life is an awful, ugly place to not have a best friend.",
        "author": "Sarah Dessen,",
        "tags": [
            "friendship"
        ]
    },
    {
        "text": "I don't know half of you half as well as I should like; and I like less than half of you half as well as you deserve.",
        "author": "J.R.R. Tolkien,",
        "tags": [
            "family",
            "friends",
            "parties",
            "social"
        ]
    },
    {
        "text": "I don't want to be a man,\" said Jace. \"I want to be an angst-ridden teenager who can't confront his own inner demons and takes it out verbally on other people instead.\"\"Well,\" said Luke, \"you're doing a fantastic job.",
        "author": "Cassandra Clare,",
        "tags": [
            "clary-fray",
            "demons",
            "growing-up",
            "humor",
            "jace-wayland",
            "luke",
            "teenager"
        ]
    },
    {
        "text": "Being a woman is a terribly difficult trade since it consists principally of dealings with men.",
        "author": "Joseph Conrad,",
        "tags": [
            "women"
        ]
    },
    {
        "text": "We're all human, aren't we? Every human life is worth the same, and worth saving.",
        "author": "J.K. Rowling,",
        "tags": [
            "human",
            "life",
            "value",
            "worth"
        ]
    },
    {
        "text": "In vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you.",
        "author": "Jane Austen,",
        "tags": [
            "love",
            "mr-darcy"
        ]
    },
    {
        "text": "The Road Not TakenTwo roads diverged in a yellow wood,And sorry I could not travel both\tAnd be one traveler, long I stood\tAnd looked down one as far as I could\tTo where it bent in the undergrowth;\t  Then took the other, as just as fair,\tAnd having perhaps the better claim,\tBecause it was grassy and wanted wear;\tThough as for that the passing there\tHad worn them really about the same,\t  And both that morning equally lay\tIn leaves no step had trodden black.\tOh, I kept the first for another day!\tYet knowing how way leads on to way,\tI doubted if I should ever come back.\t  I shall be telling this with a sigh\tSomewhere ages and ages hence:\tTwo roads diverged in a wood, and I—\tI took the one less traveled by,\tAnd that has made all the difference.",
        "author": "Robert Frost",
        "tags": []
    },
    {
        "text": "Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.",
        "author": "Henry Wadsworth Longfellow",
        "tags": [
            "coldness",
            "depression",
            "happiness",
            "life",
            "sad",
            "sadness",
            "sorrow"
        ]
    },
    {
        "text": "And above all, watch with glittering eyes the whole world around you because the greatest secrets are always hidden in the most unlikely places. Those who don't believe in magic will never find it.",
        "author": "Roald Dahl",
        "tags": [
            "believe",
            "glittering-eyes",
            "hidden",
            "magic",
            "secrets",
            "unlikely-places",
            "watch",
            "world"
        ]
    },
    {
        "text": "When I despair, I remember that all through history the way of truth and love have always won. There have been tyrants and murderers, and for a time, they can seem invincible, but in the end, they always fall. Think of it--always.",
        "author": "Mahatma Gandhi",
        "tags": [
            "despair",
            "evil",
            "goodness",
            "inspirational",
            "love",
            "sadness",
            "truth",
            "victory"
        ]
    },
    {
        "text": "The world is not a wish-granting factory.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "There's nothing like deep breaths after laughing that hard. Nothing in the world like a sore stomach for the right reasons.",
        "author": "Stephen Chbosky,",
        "tags": [
            "happiness"
        ]
    },
    {
        "text": "Never love anyone who treats you like you're ordinary.",
        "author": "Oscar Wilde",
        "tags": [
            "love",
            "ordinary",
            "people"
        ]
    },
    {
        "text": "I am not pretty. I am not beautiful. I am as radiant as the sun.",
        "author": "Suzanne Collins,",
        "tags": [
            "truth"
        ]
    },
    {
        "text": "There is only one thing that makes a dream impossible to achieve: the fear of failure.",
        "author": "Paulo Coelho,",
        "tags": []
    },
    {
        "text": "Becoming fearless isn't the point. That's impossible. It's learning how to control your fear, and how to be free from it.",
        "author": "Veronica Roth,",
        "tags": [
            "dauntless",
            "divergent",
            "fearless",
            "four",
            "tris"
        ]
    },
    {
        "text": "Perhaps all the dragons in our lives are princesses who are only waiting to see us act, just once, with beauty and courage. Perhaps everything that frightens us is, in its deepest essence, something helpless that wants our love.",
        "author": "Rainer Maria Rilke,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "It's the friends you can call up at 4 a.m. that matter.",
        "author": "Marlene Dietrich",
        "tags": [
            "attributed-no-source"
        ]
    },
    {
        "text": "I would die for you. But I won't live for you.",
        "author": "Stephen Chbosky,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Let me tell you this: if you meet a loner, no matter what they tell you, it's not because they enjoy solitude. It's because they have tried to blend into the world before, and people continue to disappoint them.",
        "author": "Jodi Picoult,",
        "tags": [
            "disappointment",
            "loneliness",
            "loner",
            "solitude"
        ]
    },
    {
        "text": "Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation.",
        "author": "Oscar Wilde,",
        "tags": [
            "identity",
            "opinions"
        ]
    },
    {
        "text": "It's far better to be unhappy alone than unhappy with someone — so far.",
        "author": "Marilyn Monroe",
        "tags": [
            "alone",
            "attributed-no-source"
        ]
    },
    {
        "text": "We love the things we love for what they are.",
        "author": "Robert Frost",
        "tags": [
            "love",
            "poetry"
        ]
    },
    {
        "text": "It takes ten times as long to put yourself back together as it does to fall apart.",
        "author": "Suzanne Collins,",
        "tags": [
            "falling-apart",
            "giving-in"
        ]
    },
    {
        "text": "Sometimes you have to be apart from people you love, but that doesn't make you love them any less. Sometimes you love them more.",
        "author": "Nicholas Sparks,",
        "tags": []
    },
    {
        "text": "If you don't know where you're going, any road'll take you there",
        "author": "George Harrison",
        "tags": [
            "life",
            "paraphrase-of-lewis-carroll"
        ]
    },
    {
        "text": "You don't have to burn books to destroy a culture. Just get people to stop reading them.",
        "author": "Ray Bradbury",
        "tags": [
            "culture",
            "reading"
        ]
    },
    {
        "text": "So, I love you because the entire universe conspired to help me find you.",
        "author": "Paulo Coelho,",
        "tags": []
    },
    {
        "text": "All God does is watch us and kill us when we get boring. We must never, ever be boring.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "god",
            "humor",
            "life"
        ]
    },
    {
        "text": "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.",
        "author": "Fyodor Dostoevsky,",
        "tags": [
            "lies",
            "love",
            "respect",
            "self-deception",
            "truth"
        ]
    },
    {
        "text": "Nothing is impossible, the word itself says 'I'm possible'!",
        "author": "Audrey Hepburn",
        "tags": [
            "attributed-no-source",
            "inspirational"
        ]
    },
    {
        "text": "You can love someone so much...But you can never love people as much as you can miss them.",
        "author": "John Green",
        "tags": [
            "breaking-up",
            "lost-love"
        ]
    },
    {
        "text": "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It is not rude, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.",
        "author": "Anonymous,",
        "tags": [
            "bible",
            "love"
        ]
    },
    {
        "text": "[...]the only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars and in the middle you see the blue centerlight pop and everybody goes Awww!",
        "author": "Jack Kerouac,",
        "tags": [
            "freethinker",
            "inspirational",
            "mad"
        ]
    },
    {
        "text": "Do what you feel in your heart to be right – for you’ll be criticized anyway.",
        "author": "Eleanor Roosevelt",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Sometimes I can hear my bones straining under the weight of all the lives I'm not living.",
        "author": "Jonathan Safran Foer,",
        "tags": [
            "life"
        ]
    },
    {
        "text": "Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.",
        "author": "Margaret Mead",
        "tags": [
            "activism",
            "attributed-no-source",
            "change",
            "inspirational",
            "life",
            "philosophy",
            "world"
        ]
    },
    {
        "text": "I can't give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.",
        "author": "Herbert Bayard Swope",
        "tags": [
            "failure",
            "inspirational",
            "misattributed-bill-cosby",
            "success"
        ]
    },
    {
        "text": "Death ends a life, not a relationship.",
        "author": "Mitch Albom,",
        "tags": [
            "death",
            "life"
        ]
    },
    {
        "text": "This life’s hard, but it’s harder if you’re stupid.",
        "author": "George V. Higgins,",
        "tags": [
            "humor",
            "life",
            "misattributed-john-wayne"
        ]
    },
    {
        "text": "Never memorize something that you can look up.",
        "author": "Albert Einstein",
        "tags": [
            "humor",
            "science"
        ]
    },
    {
        "text": "I refuse to answer that question on the grounds that I don't know the answer",
        "author": "Douglas Adams",
        "tags": [
            "attributed-no-source",
            "humor",
            "misattributed-douglas-adams",
            "wit"
        ]
    },
    {
        "text": "You talk when you cease to be at peace with your thoughts.",
        "author": "Kahlil Gibran,",
        "tags": [
            "philosophy",
            "poetry"
        ]
    },
    {
        "text": "Love is needing someone. Love is putting up with someone's bad qualities because they somehow complete you.",
        "author": "Sarah Dessen,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "All we have to decide is what to do with the time that is given us.",
        "author": "J.R.R. Tolkien,",
        "tags": [
            "encouragement",
            "gandalf"
        ]
    },
    {
        "text": "Hold fast to dreams,For if dreams dieLife is a broken-winged bird,That cannot fly.",
        "author": "Langston Hughes",
        "tags": [
            "dreams",
            "hope",
            "inspiration",
            "knowledge",
            "wisdom"
        ]
    },
    {
        "text": "I carry your heart with me (I carry it in my heart)I am never without it (anywhereI go you go,my dear; and whatever is done by only me is your doing,my darling)I fear no fate (for you are my fate,my sweet)I want no world (for beautiful you are my world,my true)and it's you are whatever a moon has always meant and whatever a sun will always sing is youhere is the deepest secret nobody knows(here is the root of the root and the bud of the bud and the sky of the sky of a tree called life; which growshigher than the soul can hope or mind can hide)and this is the wonder that's keeping the stars apartI carry your heart (I carry it in my heart)",
        "author": "E.E. Cummings",
        "tags": [
            "love",
            "poetry"
        ]
    },
    {
        "text": "The Christian does not think God will love us because we are good, but that God will make us good because He loves us.",
        "author": "C.S. Lewis",
        "tags": [
            "christianity",
            "god",
            "religion"
        ]
    },
    {
        "text": "What is the point of being alive if you don't at least try to do something remarkable?",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "May your coming year be filled with magic and dreams and good madness. I hope you read some fine books and kiss someone who thinks you're wonderful, and don't forget to make some art -- write or draw or build or sing or live as only you can. And I hope, somewhere in the next year, you surprise yourself.",
        "author": "Neil Gaiman",
        "tags": []
    },
    {
        "text": "All that we see or seem is but a dream within a dream.",
        "author": "Edgar Allan Poe",
        "tags": []
    },
    {
        "text": "Count your age by friends, not years. Count your life by smiles, not tears.",
        "author": "John Lennon",
        "tags": [
            "happiness",
            "timelessness",
            "wisdom"
        ]
    },
    {
        "text": "In the depth of winter, I finally learned that within me there lay an invincible summer.",
        "author": "Albert Camus",
        "tags": [
            "seasons",
            "strength",
            "trial",
            "triumph"
        ]
    },
    {
        "text": "Happiness is not something ready made. It comes from your own actions.",
        "author": "Dalai Lama XIV",
        "tags": [
            "happiness",
            "inspirational"
        ]
    },
    {
        "text": "Maybe our favorite quotations say more about us than about the stories and people we're quoting.",
        "author": "John Green",
        "tags": [
            "vlog"
        ]
    },
    {
        "text": "I like the night. Without the dark, we'd never see the stars.",
        "author": "Stephenie Meyer,",
        "tags": [
            "bella-swan",
            "dreams",
            "edward",
            "hope",
            "night",
            "stars"
        ]
    },
    {
        "text": "Indifference and neglect often do much more damage than outright dislike.",
        "author": "J.K. Rowling,",
        "tags": [
            "humanity",
            "kindness",
            "relationships"
        ]
    },
    {
        "text": "Sometimes you wake up. Sometimes the fall kills you. And sometimes, when you fall, you fly.",
        "author": "Neil Gaiman,",
        "tags": []
    },
    {
        "text": "What a treacherous thing to believe that a person is more than a person.",
        "author": "John Green,",
        "tags": [
            "paper-towns"
        ]
    },
    {
        "text": "The only thing worse than a boy who hates you: a boy that loves you.",
        "author": "Markus Zusak,",
        "tags": [
            "boys",
            "hate",
            "love"
        ]
    },
    {
        "text": "Do not read, as children do, to amuse yourself, or like the ambitious, for the purpose of instruction. No, read in order to live.",
        "author": "Gustave Flaubert",
        "tags": []
    },
    {
        "text": "The weak can never forgive. Forgiveness is the attribute of the strong.",
        "author": "Mahatma Gandhi,",
        "tags": [
            "forgiveness",
            "strength",
            "weakness"
        ]
    },
    {
        "text": "Wit beyond measure is man’s greatest treasure.",
        "author": "J.K. Rowling,",
        "tags": [
            "wit"
        ]
    },
    {
        "text": "Peace begins with a smile..",
        "author": "Mother Teresa",
        "tags": [
            "inspirational",
            "peace",
            "smile",
            "smiling"
        ]
    },
    {
        "text": "So, I guess we are who we are for alot of reasons. And maybe we'll never know most of them. But even if we don't have the power to choose where we come from, we can still choose where we go from there. We can still do things. And we can try to feel okay about them.",
        "author": "Stephen Chbosky,",
        "tags": [
            "the-perks-of-being-a-wallflower"
        ]
    },
    {
        "text": "We are only as strong as we are united, as weak as we are divided.",
        "author": "J.K. Rowling,",
        "tags": [
            "dumbledore",
            "strength",
            "unity"
        ]
    },
    {
        "text": "You will always be fond of me. I represent to you all the sins you never had the courage to commit.",
        "author": "Oscar Wilde,",
        "tags": [
            "sin"
        ]
    },
    {
        "text": "And those who were seen dancing were thought to be insane by those who could not hear the music.",
        "author": "Friedrich Nietzsche",
        "tags": [
            "dance",
            "music"
        ]
    },
    {
        "text": "Who controls the past controls the future. Who controls the present controls the past.",
        "author": "George Orwell,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Libraries were full of ideas—perhaps the most dangerous and powerful of all weapons.",
        "author": "Sarah J. Maas,",
        "tags": [
            "ideas",
            "libraries",
            "sarah-j-maas",
            "throne-of-glass"
        ]
    },
    {
        "text": "Imagining the future is a kind of nostalgia. (...) You spend your whole life stuck in the labyrinth, thinking about how you'll escape it one day, and how awesome it will be, and imagining that future keeps you going, but you never do it. You just use the future to escape the present.",
        "author": "John Green,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "If you were half as funny as you think you are, you'd be twice as funny as you really are.",
        "author": "H.N. Turteltaub,",
        "tags": [
            "misattributed-cassandra-clare",
            "misattributed-jace"
        ]
    },
    {
        "text": "You are my best friend as well as my lover, and I do not know which side of you I enjoy the most. I treasure each side, just as I have treasured our life together.",
        "author": "Nicholas Sparks,",
        "tags": [
            "friendship",
            "love"
        ]
    },
    {
        "text": "Man is the only creature who refuses to be what he is.",
        "author": "Albert Camus",
        "tags": [
            "human-nature",
            "man",
            "mankind",
            "philosophy"
        ]
    },
    {
        "text": "I hope she'll be a fool -- that's the best thing a girl can be in this world, a beautiful little fool.",
        "author": "F. Scott Fitzgerald,",
        "tags": [
            "inspirational",
            "women"
        ]
    },
    {
        "text": "Friendship is unnecessary, like philosophy, like art.... It has no survival value; rather it is one of those things which give value to survival.",
        "author": "C.S. Lewis,",
        "tags": [
            "friendship",
            "inspirational"
        ]
    },
    {
        "text": "You are, and always have been, my dream.",
        "author": "Nicholas Sparks,",
        "tags": []
    },
    {
        "text": "And once the storm is over, you won’t remember how you made it through, how you managed to survive. You won’t even be sure, whether the storm is really over. But one thing is certain. When you come out of the storm, you won’t be the same person who walked in. That’s what this storm’s all about.",
        "author": "Haruki Murakami,",
        "tags": [
            "adversity",
            "inspirational",
            "life-lessons",
            "problems",
            "trials"
        ]
    },
    {
        "text": "I would always rather be happy than dignified.",
        "author": "Charlotte Brontë,",
        "tags": []
    },
    {
        "text": "You're going to come across people in your life who will say all the right words at all the right times. But in the end, it's always their actions you should judge them by. It's actions, not words, that matter.",
        "author": "Nicholas Sparks,",
        "tags": [
            "friends",
            "judgement"
        ]
    },
    {
        "text": "Is it true that you shouted at Professor Umbridge?\"\"Yes.\"\"You called her a liar?\"\"Yes.\"\"You told her He Who Must Not Be Named is back?\"\"Yes.\"\"Have a biscuit, Potter.",
        "author": "J.K. Rowling,",
        "tags": []
    },
    {
        "text": "Facts do not cease to exist because they are ignored.",
        "author": "Aldous Huxley,",
        "tags": [
            "fact",
            "ignorance",
            "truth"
        ]
    },
    {
        "text": "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
        "author": "J.R.R. Tolkien",
        "tags": [
            "food",
            "happiness"
        ]
    },
    {
        "text": "In a good bookroom you feel in some mysterious way that you are absorbing the wisdom contained in all the books through your skin, without even opening them.",
        "author": "Mark Twain",
        "tags": [
            "bookroom",
            "books",
            "libraries",
            "wisdom"
        ]
    },
    {
        "text": "We came to see Jace. Is he alright?\"\"I don't know,\" Magnus said. \"Does he normally just lie on the floor like that without moving?",
        "author": "Cassandra Clare,",
        "tags": [
            "clary-fray",
            "magnus-bane"
        ]
    },
    {
        "text": "Mr. Moony presents his compliments to Professor Snape, and begs him to keep his abnormally large nose out of other people's business.Mr. Prongs agrees with Mr. Moony, and would like to add that Professor Snape is an ugly git.Mr. Padfoot would like to register his astonishment that an idiot like that ever became a professor.Mr. Wormtail bids Professor Snape good day, and advises him to wash his hair, the slimeball.",
        "author": "J.K. Rowling,",
        "tags": [
            "harry-potter",
            "humor",
            "james-potter",
            "remus-lupin",
            "sirius-black",
            "snape",
            "wormtail"
        ]
    },
    {
        "text": "Happy Hunger Games! And may the odds be ever in your favor.",
        "author": "Suzanne Collins,",
        "tags": [
            "the-hunger-games"
        ]
    },
    {
        "text": "Promise YourselfTo be so strong that nothingcan disturb your peace of mind.To talk health, happiness, and prosperityto every person you meet.To make all your friends feelthat there is something in themTo look at the sunny side of everythingand make your optimism come true.To think only the best, to work only for the best,and to expect only the best.To be just as enthusiastic about the success of othersas you are about your own.To forget the mistakes of the pastand press on to the greater achievements of the future.To wear a cheerful countenance at all timesand give every living creature you meet a smile.To give so much time to the improvement of yourselfthat you have no time to criticize others.To be too large for worry, too noble for anger, too strong for fear,and too happy to permit the presence of trouble.To think well of yourself and to proclaim this fact to the world,not in loud words but great deeds.To live in faith that the whole world is on your sideso long as you are true to the best that is in you.",
        "author": "Christian D. Larson,",
        "tags": [
            "happiness",
            "inspirational",
            "love",
            "optimism",
            "strength"
        ]
    },
    {
        "text": "For attractive lips, speak words of kindness.For lovely eyes, seek out the good in people.For a slim figure, share your food with the hungry.For beautiful hair, let a child run his fingers through it once a day.For poise, walk with the knowledge you’ll never walk alone....We leave you a tradition with a future.The tender loving care of human beings will never become obsolete.People even more than things have to be restored, renewed, revived, reclaimed and redeemed and redeemed and redeemed.Never throw out anybody.Remember, if you ever need a helping hand, you’ll find one at the end of your arm.As you grow older, you will discover that you have two hands: one for helping yourself, the other for helping others.Your good old days are still ahead of you, may you have many of them.",
        "author": "Sam Levenson,",
        "tags": [
            "beauty",
            "charity",
            "inspirational",
            "kindness",
            "misattributed-audrey-hepburn"
        ]
    },
    {
        "text": "Grief does not change you, Hazel. It reveals you.",
        "author": "John Green,",
        "tags": [
            "change",
            "grief",
            "loss",
            "revelation"
        ]
    },
    {
        "text": "A good friend will always stab you in the front.",
        "author": "Oscar Wilde",
        "tags": [
            "friends-betrayal"
        ]
    },
    {
        "text": "Don't think or judge, just listen.",
        "author": "Sarah Dessen,",
        "tags": [
            "inspirational-quotes"
        ]
    },
    {
        "text": "May you live every day of your life.",
        "author": "Jonathan Swift",
        "tags": [
            "inspirational",
            "life",
            "philosophy",
            "wisdom"
        ]
    },
    {
        "text": "You cannot find peace by avoiding life.",
        "author": "Michael Cunningham,",
        "tags": [
            "life",
            "peace"
        ]
    },
    {
        "text": "He can run faster than Severus Snape confronted with shampoo.",
        "author": "J.K. Rowling,",
        "tags": [
            "humor",
            "shampoo"
        ]
    },
    {
        "text": "When you're in jail, a good friend will be trying to bail you out. A best friend will be in the cell next to you saying, 'Damn, that was fun'.",
        "author": "Groucho Marx",
        "tags": [
            "friends",
            "humor",
            "jail"
        ]
    },
    {
        "text": "Some humans would do anything to see if it was possible to do it. If you put a large switch in some cave somewhere, with a sign on it saying 'End-of-the-World Switch. PLEASE DO NOT TOUCH', the paint wouldn't even have time to dry.",
        "author": "Terry Pratchett,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "For instance, on the planet Earth, man had always assumed that he was more intelligent than dolphins because he had achieved so much—the wheel, New York, wars and so on—whilst all the dolphins had ever done was muck about in the water having a good time. But conversely, the dolphins had always believed that they were far more intelligent than man—for precisely the same reasons.",
        "author": "Douglas Adams,",
        "tags": [
            "humour"
        ]
    },
    {
        "text": "And now I’m looking at you, he said, and you’re asking me if I still want you, as if I could stop loving you. As if I would want to give up the thing that makes me stronger than anything else ever has. I never dared give much of myself to anyone before – bits of myself to the Lightwoods, to Isabelle and Alec, but it took years to do it – but, Clary, since the first time I saw you, I have belonged to you completely. I still do. If you want me.",
        "author": "Cassandra Clare,",
        "tags": [
            "cassandra-clare",
            "city-of-glass",
            "clary",
            "jace",
            "love",
            "mortal-instruments"
        ]
    },
    {
        "text": "Those who believe in telekinetics, raise my hand.",
        "author": "Kurt Vonnegut",
        "tags": [
            "humour",
            "telekinetics"
        ]
    },
    {
        "text": "Whatever you are, be a good one.",
        "author": "Abraham Lincoln",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Be kind, for everyone you meet is fighting a harder battle.",
        "author": "Plato",
        "tags": [
            "attributed-no-source",
            "compassion",
            "kindness"
        ]
    },
    {
        "text": "I could recognize him by touch alone, by smell; I would know him blind, by the way his breaths came and his feet struck the earth. I would know him in death, at the end of the world.",
        "author": "Madeline Miller,",
        "tags": []
    },
    {
        "text": "I wanted a perfect ending. Now I've learned, the hard way, that some poems don't rhyme, and some stories don't have a clear beginning, middle, and end. Life is about not knowing, having to change, taking the moment and making the best of it, without knowing what's going to happen next.Delicious Ambiguity.",
        "author": "Gilda Radner",
        "tags": [
            "ambiguity",
            "life",
            "stories",
            "uncertainty",
            "unpredictability"
        ]
    },
    {
        "text": "Every heart sings a song, incomplete, until another heart whispers back. Those who wish to sing always find a song. At the touch of a lover, everyone becomes a poet.",
        "author": "Plato",
        "tags": []
    },
    {
        "text": "Women are meant to be loved, not to be understood.",
        "author": "Oscar Wilde,",
        "tags": []
    },
    {
        "text": "When you are courting a nice girl an hour seems like a second. When you sit on a red-hot cinder a second seems like an hour. That's relativity.",
        "author": "Albert Einstein",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "There's a fine line between genius and insanity. I have erased this line.",
        "author": "Oscar Levant",
        "tags": [
            "genius",
            "humor",
            "insanity"
        ]
    },
    {
        "text": "Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.",
        "author": "Roy T. Bennett,",
        "tags": [
            "attitude",
            "choice",
            "giving",
            "happiness",
            "inspirational",
            "kindness",
            "life-and-living",
            "life-lessons",
            "motivational",
            "positive-affirmation"
        ]
    },
    {
        "text": "Doubt thou the stars are fire;Doubt that the sun doth move;Doubt truth to be a liar;But never doubt I love.",
        "author": "William Shakespeare,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
        "author": "Antoine de Saint-Exupéry,",
        "tags": [
            "heart",
            "importance",
            "inspiration",
            "secret",
            "the-little-prince"
        ]
    },
    {
        "text": "Sleep is good, he said, and books are better.",
        "author": "George R. R. Martin",
        "tags": [
            "books",
            "reading"
        ]
    },
    {
        "text": "If my life is going to mean anything, I have to live it myself.",
        "author": "Rick Riordan,",
        "tags": [
            "inspirational",
            "life",
            "meaning"
        ]
    },
    {
        "text": "We write to taste life twice, in the moment and in retrospect.",
        "author": "Anais Nin",
        "tags": [
            "anais-nin",
            "qoutes-on-writing",
            "writing"
        ]
    },
    {
        "text": "I have hated words and I have loved them, and I hope I have made them right.",
        "author": "Markus Zusak,",
        "tags": [
            "power-of-words"
        ]
    },
    {
        "text": "Where there is love there is life.",
        "author": "Mahatma Gandhi",
        "tags": []
    },
    {
        "text": "Don't touch any of my weapons without my permission.\"\"Well, there goes my plan for selling them all on eBay,\" Clary muttered.\"Selling them on what?\"Clary smiled blandly at him. \"A mythical place of great magical power.",
        "author": "Cassandra Clare,",
        "tags": [
            "clary-fray",
            "ebay",
            "jace-wayland",
            "myth"
        ]
    },
    {
        "text": "You can't force love, I realized. It's there or it isn't. If it's not there, you've got to be able to admit it. If it is there, you've got to do whatever it takes to protect the ones you love.",
        "author": "Richelle Mead,",
        "tags": []
    },
    {
        "text": "Two wrongs don't make a right, but they make a good excuse.",
        "author": "Thomas Szasz",
        "tags": [
            "humor",
            "inspirational"
        ]
    },
    {
        "text": "Let us find the dam snack bar,\" Zoe said. \"We should eat while we can.\"Grover cracked a smile. \"The dam snack bar?\"Zoe blinked. \"Yes. What is funny?\"\"Nothing,\" Grover said, trying to keep a straight face. \"I could use some dam french fries.\"Even Thalia smiled at that. \"And I need to use the dam restroom.\"...I started cracking up, and Thalia and Grover joined in, while Zoe just looked at me. \"I do not understand.\"\"I want to use the dam water fountain,\" Grover said.\"And...\" Thalia tried to catch her breath. \"I want to buy a dam t-shirt.",
        "author": "Rick Riordan,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "Promise me you'll always remember: You're braver than you believe, and stronger than you seem, and smarter than you think.",
        "author": "Carter Crocker",
        "tags": [
            "misattributed-a-a-milne"
        ]
    },
    {
        "text": "I think you still love me, but we can’t escape the fact that I’m not enough for you. I knew this was going to happen. So I’m not blaming you for falling in love with another woman. I’m not angry, either. I should be, but I’m not. I just feel pain. A lot of pain. I thought I could imagine how much this would hurt, but I was wrong.",
        "author": "Haruki Murakami,",
        "tags": []
    },
    {
        "text": "Wicked people never have time for reading. It's one of the reasons for their wickedness.",
        "author": "Lemony Snicket",
        "tags": [
            "humor-wicked-reading"
        ]
    },
    {
        "text": "I don't want to go to heaven. None of my friends are there.",
        "author": "Oscar Wilde",
        "tags": [
            "humor-heaven"
        ]
    },
    {
        "text": "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
        "author": "Carl Gustav Jung",
        "tags": [
            "chemistry",
            "relationships"
        ]
    },
    {
        "text": "I took a deep breath and listened to the old brag of my heart. I am, I am, I am.",
        "author": "Sylvia Plath,",
        "tags": [
            "breath",
            "existence"
        ]
    },
    {
        "text": "If ever there is tomorrow when we're not together... there is something you must always remember. You are braver than you believe, stronger than you seem, and smarter than you think. But the most important thing is, even if we're apart... I'll always be with you.",
        "author": "Carter Crocker",
        "tags": [
            "confidence"
        ]
    },
    {
        "text": "I love you. I am who I am because of you. You are every reason, every hope, and every dream I've ever had, and no matter what happens to us in the future, everyday we are together is the greatest day of my life. I will always be yours.",
        "author": "Nicholas Sparks,",
        "tags": []
    },
    {
        "text": "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "author": "Roy T. Bennett,",
        "tags": [
            "dreams",
            "fearless",
            "heart",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "living",
            "mind",
            "motivation",
            "motivational",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking"
        ]
    },
    {
        "text": "Some women choose to follow men, and some women choose to follow their dreams. If you're wondering which way to go, remember that your career will never wake up and tell you that it doesn't love you anymore.",
        "author": "Lady Gaga",
        "tags": [
            "love",
            "romance",
            "work"
        ]
    },
    {
        "text": "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
        "author": "Mark Twain",
        "tags": [
            "humor",
            "writing"
        ]
    },
    {
        "text": "I've never fooled anyone. I've let people fool themselves. They didn't bother to find out who and what I was. Instead they would invent a character for me. I wouldn't argue with them. They were obviously loving somebody I wasn't.",
        "author": "Marilyn Monroe",
        "tags": []
    },
    {
        "text": "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
        "author": "Rumi",
        "tags": [
            "inspirational-love",
            "misattributed"
        ]
    },
    {
        "text": "It's really a wonder that I haven't dropped all my ideals, because they seem so absurd and impossible to carry out. Yet I keep them, because in spite of everything, I still believe that people are really good at heart.",
        "author": "Anne Frank,",
        "tags": [
            "hope",
            "human-nature"
        ]
    },
    {
        "text": "When it comes down to it, I let them think what they want. If they care enough to bother with what I do, then I'm already better than them.",
        "author": "Marilyn Monroe",
        "tags": [
            "attributed-no-source"
        ]
    },
    {
        "text": "I love sleep. My life has the tendency to fall apart when I'm awake, you know?",
        "author": "Ernest Hemingway",
        "tags": [
            "sleep"
        ]
    },
    {
        "text": "Get busy living or get busy dying.",
        "author": "Stephen King,",
        "tags": [
            "life"
        ]
    },
    {
        "text": "A clever person solves a problem. A wise person avoids it.",
        "author": "Albert Einstein",
        "tags": [
            "misattributed-to-einstein"
        ]
    },
    {
        "text": "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds. And that's what you've given me. That's what I'd hoped to give you forever",
        "author": "Nicholas Sparks",
        "tags": [
            "love",
            "nicholas-sparks",
            "romance",
            "the-notebook"
        ]
    },
    {
        "text": "Nobody has ever measured, not even poets, how much the heart can hold.",
        "author": "Zelda Fitzgerald",
        "tags": [
            "love"
        ]
    },
    {
        "text": "If you expect nothing from somebody you are never disappointed.",
        "author": "Sylvia Plath,",
        "tags": []
    },
    {
        "text": "Death's got an Invisibility Cloak?\" Harry interrupted again.\"So he can sneak up on people,\" said Ron. \"Sometimes he gets bored of running at them, flapping his arms and shrieking...",
        "author": "J.K. Rowling,",
        "tags": [
            "death",
            "humor",
            "sarcasm"
        ]
    },
    {
        "text": "You know the world is going crazy when the best rapper is a white guy, the best golfer is a black guy, the tallest guy in the NBA is Chinese, the Swiss hold the America's Cup, France is accusing the U.S. of arrogance, Germany doesn't want to go to war, and the three most powerful men in America are named \"Bush\", \"Dick\", and \"Colin.\" Need I say more?",
        "author": "Chris Rock",
        "tags": []
    },
    {
        "text": "It's only after we've lost everything that we're free to do anything.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "loss"
        ]
    },
    {
        "text": "First they ignore you. Then they ridicule you. And then they attack you and want to burn you. And then they build monuments to you.",
        "author": "Nicholas Klein",
        "tags": [
            "conflict",
            "fighting",
            "inspirational",
            "misattributed-to-gandhi",
            "trial"
        ]
    },
    {
        "text": "Out beyond ideas of wrongdoing and rightdoing there is a field.I'll meet you there.When the soul lies down in that grassthe world is too full to talk about.",
        "author": "Rumi",
        "tags": [
            "friendship",
            "love",
            "peace",
            "silence",
            "soul",
            "zen"
        ]
    },
    {
        "text": "I, with a deeper instinct, choose a man who compels my strength, who makes enormous demands on me, who does not doubt my courage or my toughness, who does not believe me naïve or innocent, who has the courage to treat me like a woman.",
        "author": "Anaïs Nin",
        "tags": [
            "men",
            "women"
        ]
    },
    {
        "text": "Destroying things is much easier than making them.",
        "author": "Suzanne Collins,",
        "tags": []
    },
    {
        "text": "There are two basic motivating forces: fear and love. When we are afraid, we pull back from life. When we are in love, we open to all that life has to offer with passion, excitement, and acceptance. We need to learn to love ourselves first, in all our glory and our imperfections. If we cannot love ourselves, we cannot fully open to our ability to love others or our potential to create. Evolution and all hopes for a better world rest in the fearlessness and open-hearted vision of people who embrace life.",
        "author": "John Lennon",
        "tags": [
            "beatles",
            "fear",
            "life",
            "love"
        ]
    },
    {
        "text": "When someone shows you who they are believe them the first time.",
        "author": "Maya Angelou",
        "tags": [
            "oprah-s-thank-you-game",
            "people"
        ]
    },
    {
        "text": "It means 'Shadowhunters: Looking Better in Black Than the Widows of our Enemies Since 1234'.",
        "author": "Cassandra Clare,",
        "tags": [
            "humor",
            "jace-wayland",
            "sarcasm"
        ]
    },
    {
        "text": "You educate a man; you educate a man. You educate a woman; you educate a generation.",
        "author": "Brigham Young",
        "tags": [
            "education",
            "feminism",
            "men",
            "women"
        ]
    },
    {
        "text": "Once upon a time there was a boy who loved a girl, and her laughter was a question he wanted to spend his whole life answering.",
        "author": "Nicole Krauss,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Well, don't expect us to be too impressed. We just saw Finnick Odair in his underwear.",
        "author": "Suzanne Collins,",
        "tags": [
            "boggs",
            "finnick",
            "funny",
            "humour",
            "hunger-games",
            "katniss",
            "mockingjay",
            "odair",
            "suzanne-collins",
            "witty"
        ]
    },
    {
        "text": "We all die. The goal isn't to live forever, the goal is to create something that will.",
        "author": "Chuck Palahniuk,",
        "tags": []
    },
    {
        "text": "I believe that imagination is stronger than knowledge. That myth is more potent than history. That dreams are more powerful than facts. That hope always triumphs over experience. That laughter is the only cure for grief. And I believe that love is stronger than death.",
        "author": "Robert Fulghum,",
        "tags": [
            "hope",
            "imagination",
            "inspirational"
        ]
    },
    {
        "text": "Tell me, what is it you plan to do with your one wild and precious life?",
        "author": "Mary Oliver",
        "tags": [
            "poetry"
        ]
    },
    {
        "text": "I can believe things that are true and things that aren't true and I can believe things where nobody knows if they're true or not. I can believe in Santa Claus and the Easter Bunny and the Beatles and Marilyn Monroe and Elvis and Mister Ed. Listen - I believe that people are perfectable, that knowledge is infinite, that the world is run by secret banking cartels and is visited by aliens on a regular basis, nice ones that look like wrinkled lemurs and bad ones who mutilate cattle and want our water and our women. I believe that the future sucks and I believe that the future rocks and I believe that one day White Buffalo Woman is going to come back and kick everyone's ass. I believe that all men are just overgrown boys with deep problems communicating and that the decline in good sex in America is coincident with the decline in drive-in movie theaters from state to state. I believe that all politicians are unprincipled crooks and I still believe that they are better than the alternative. I believe that California is going to sink into the sea when the big one comes, while Florida is going to dissolve into madness and alligators and toxic waste. I believe that antibacterial soap is destroying our resistance to dirt and disease so that one day we'll all be wiped out by the common cold like martians in War of the Worlds. I believe that the greatest poets of the last century were Edith Sitwell and Don Marquis, that jade is dried dragon sperm, and that thousands of years ago in a former life I was a one-armed Siberian shaman. I believe that mankind's destiny lies in the stars. I believe that candy really did taste better when I was a kid, that it's aerodynamically impossible for a bumble bee to fly, that light is a wave and a particle, that there's a cat in a box somewhere who's alive and dead at the same time (although if they don't ever open the box to feed it it'll eventually just be two different kinds of dead), and that there are stars in the universe billions of years older than the universe itself. I believe in a personal god who cares about me and worries and oversees everything I do. I believe in an impersonal god who set the universe in motion and went off to hang with her girlfriends and doesn't even know that I'm alive. I believe in an empty and godless universe of causal chaos, background noise, and sheer blind luck. I believe that anyone who says sex is overrated just hasn't done it properly. I believe that anyone who claims to know what's going on will lie about the little things too. I believe in absolute honesty and sensible social lies. I believe in a woman's right to choose, a baby's right to live, that while all human life is sacred there's nothing wrong with the death penalty if you can trust the legal system implicitly, and that no one but a moron would ever trust the legal system. I believe that life is a game, that life is a cruel joke, and that life is what happens when you're alive and that you might as well lie back and enjoy it.",
        "author": "Neil Gaiman,",
        "tags": [
            "belief"
        ]
    },
    {
        "text": "If the world were merely seductive, that would be easy. If it were merely challenging, that would be no problem. But I arise in the morning torn between a desire to improve the world and a desire to enjoy the world. This makes it hard to plan the day.",
        "author": "E.B. White",
        "tags": [
            "activism",
            "humor",
            "life",
            "pleasure"
        ]
    },
    {
        "text": "These woods are lovely, dark and deep,But I have promises to keep,And miles to go before I sleep,And miles to go before I sleep.",
        "author": "Robert Frost,",
        "tags": [
            "life"
        ]
    },
    {
        "text": "We loved with a love that was more than love.",
        "author": "Edgar Allen Poe",
        "tags": [
            "logic",
            "love"
        ]
    },
    {
        "text": "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?",
        "author": "L.M. Montgomery",
        "tags": [
            "beginnings",
            "fresh-start",
            "inspirational",
            "mistake",
            "mistakes",
            "new-day",
            "start-over",
            "tomorrow"
        ]
    },
    {
        "text": "The fault, dear Brutus, is not in our stars, but in ourselves.",
        "author": "William Shakespeare,",
        "tags": [
            "self-determination",
            "self-responsibility",
            "timidity"
        ]
    },
    {
        "text": "Science without religion is lame, religion without science is blind.",
        "author": "Albert Einstein",
        "tags": []
    },
    {
        "text": "Reader, suppose you were an idiot. And suppose you were a member of Congress. But I repeat myself.",
        "author": "Mark Twain",
        "tags": [
            "humor",
            "politics"
        ]
    },
    {
        "text": "Any fool can know. The point is to understand.",
        "author": "Albert Einstein",
        "tags": [
            "knowledge",
            "learning",
            "understanding",
            "wisdom"
        ]
    },
    {
        "text": "It is sometimes an appropriate response to reality to go insane.",
        "author": "Philip K. Dick,",
        "tags": [
            "qotd"
        ]
    },
    {
        "text": "Books are the perfect entertainment: no commercials, no batteries, hours of enjoyment for each dollar spent. What I wonder is why everybody doesn't carry a book around for those inevitable dead spots in life.",
        "author": "Stephen King",
        "tags": [
            "books"
        ]
    },
    {
        "text": "We have to dare to be ourselves, however frightening or strange that self may prove to be.",
        "author": "May Sarton",
        "tags": [
            "authenticity",
            "life",
            "philosophy",
            "self"
        ]
    },
    {
        "text": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
        "author": "Aristotle,",
        "tags": [
            "wisdom"
        ]
    },
    {
        "text": "Anyone who lives within their means suffers from a lack of imagination.",
        "author": "Oscar Wilde",
        "tags": [
            "imagination",
            "life",
            "money"
        ]
    },
    {
        "text": "When I look at my room, I see a girl who loves books.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "And so the lion fell in love with the lamb…\" he murmured. I looked away, hiding my eyes as I thrilled to the word.\"What a stupid lamb,\" I sighed.\"What a sick, masochistic lion.",
        "author": "Stephenie Meyer,",
        "tags": [
            "bella",
            "edward",
            "love"
        ]
    },
    {
        "text": "All the world is made of faith, and trust, and pixie dust.",
        "author": "J.M. Barrie,",
        "tags": [
            "faith",
            "life",
            "pixie-dust",
            "trust"
        ]
    },
    {
        "text": "Eleanor was right. She never looked nice. She looked like art, and art wasn't supposed to look nice; it was supposed to make you feel something.",
        "author": "Rainbow Rowell,",
        "tags": [
            "art",
            "love"
        ]
    },
    {
        "text": "You can't stay in your corner of the Forest waiting for others to come to you. You have to go to them sometimes.",
        "author": "A.A. Milne,",
        "tags": [
            "friendship",
            "inspirational",
            "pooh",
            "winnie"
        ]
    },
    {
        "text": "We fell in love, despite our differences, and once we did, something rare and beautiful was created. For me, love like that has only happened once, and that's why every minute we spent together has been seared in my memory. I'll never forget a single moment of it.",
        "author": "Nicholas Sparks,",
        "tags": []
    },
    {
        "text": "Let us read, and let us dance; these two amusements will never do any harm to the world.",
        "author": "Voltaire",
        "tags": []
    },
    {
        "text": "To love. To be loved. To never forget your own insignificance. To never get used to the unspeakable violence and the vulgar disparity of life around you. To seek joy in the saddest places. To pursue beauty to its lair. To never simplify what is complicated or complicate what is simple. To respect strength, never power. Above all, to watch. To try and understand. To never look away. And never, never to forget.",
        "author": "Arundhati Roy,",
        "tags": []
    },
    {
        "text": "Life is a book and there are a thousand pages I have not yet read.",
        "author": "Cassandra Clare,",
        "tags": [
            "chapter-24",
            "life",
            "will-herondale"
        ]
    },
    {
        "text": "I do not want people to be very agreeable, as it saves me the trouble of liking them a great deal.",
        "author": "Jane Austen,",
        "tags": [
            "friends",
            "humor",
            "people"
        ]
    },
    {
        "text": "Going to church doesn’t make you a Christian any more than going to a garage makes you an automobile.",
        "author": "Billy Sunday,",
        "tags": [
            "automobile",
            "car",
            "funny",
            "humor",
            "religious"
        ]
    },
    {
        "text": "Pain and suffering are always inevitable for a large intelligence and a deep heart. The really great men must, I think, have great sadness on earth.",
        "author": "Fyodor Dostoevsky,",
        "tags": []
    },
    {
        "text": "Life can only be understood backwards; but it must be lived forwards.",
        "author": "Søren Kierkegaard",
        "tags": [
            "future",
            "life",
            "past",
            "reflection",
            "understanding"
        ]
    },
    {
        "text": "Unless someone like you cares a whole awful lot,Nothing is going to get better. It's not.",
        "author": "Dr. Seuss,",
        "tags": [
            "activism"
        ]
    },
    {
        "text": "Chance is perhaps the pseudonym of God when he does not want to sign.",
        "author": "Théophile Gautier",
        "tags": [
            "misattributed-to-einstein"
        ]
    },
    {
        "text": "Every saint has a past, and every sinner has a future.",
        "author": "Oscar Wilde",
        "tags": [
            "saint-sinner"
        ]
    },
    {
        "text": "For those who believe in God, most of the big questions are answered. But for those of us who can't readily accept the God formula, the big answers don't remain stone-written. We adjust to new conditions and discoveries. We are pliable. Love need not be a command nor faith a dictum. I am my own god. We are here to unlearn the teachings of the church, state, and our educational system. We are here to drink beer. We are here to kill war. We are here to laugh at the odds and live our lives so well that Death will tremble to take us.",
        "author": "Charles Bukowski",
        "tags": [
            "atheism",
            "religion"
        ]
    },
    {
        "text": "This is a good sign, having a broken heart. It means we have tried for something.",
        "author": "Elizabeth Gilbert,",
        "tags": [
            "heartache",
            "love"
        ]
    },
    {
        "text": "The planet is fine. The people are fucked.",
        "author": "George Carlin",
        "tags": [
            "funny",
            "humanity",
            "humor"
        ]
    },
    {
        "text": "I would have come for you. And if I couldn't walk, I'd crawl to you, and no matter how broken we were, we'd fight our way out together-knives drawn, pistols blazing. Because that's what we do. We never stop fighting.",
        "author": "Leigh Bardugo,",
        "tags": [
            "crooked-kingdom",
            "inej-ghafa",
            "kaz-brekker",
            "six-of-crows"
        ]
    },
    {
        "text": "The secret of life, though, is to fall seven times and to get up eight times.",
        "author": "Paulo Coelho,",
        "tags": [
            "wisdom"
        ]
    },
    {
        "text": "I DON'T CARE!\" Harry yelled at them, snatching up a lunascope and throwing it into the fireplace. \"I'VE HAD ENOUGH, I'VE SEEN ENOUGH, I WANT OUT, I WANT IT TO END, I DON'T CARE ANYMORE!\"\"You do care,\" said Dumbledore. He had not flinched or made a single move to stop Harry demolishing his office. His expression was calm, almost detached. \"You care so much you feel as though you will bleed to death with the pain of it.",
        "author": "J.K. Rowling,",
        "tags": [
            "ache",
            "death",
            "dumbledore",
            "harry-potter",
            "hurt",
            "life",
            "pain"
        ]
    },
    {
        "text": "You're a prefect? Oh Ronnie! That's everyone in the family!\"\"What are Fred and I? Next door neighbors?",
        "author": "J.K. Rowling,",
        "tags": [
            "fred-weasley",
            "george-weasley",
            "ron-weasley"
        ]
    },
    {
        "text": "The more I know of the world, the more I am convinced that I shall never see a man whom I can really love. I require so much!",
        "author": "Jane Austen,",
        "tags": []
    },
    {
        "text": "Hope is the thing with feathers That perches in the soul And sings the tune without the words And never stops at all.",
        "author": "Emily Dickinson",
        "tags": [
            "feathers",
            "hope",
            "inspirational",
            "souls"
        ]
    },
    {
        "text": "You think your pain and your heartbreak are unprecedented in the history of the world, but then you read. It was books that taught me that the things that tormented me most were the very things that connected me with all the people who were alive, who had ever been alive.",
        "author": "James Baldwin",
        "tags": []
    },
    {
        "text": "We should all start to live before we get too old. Fear is stupid. So are regrets.",
        "author": "Marilyn Monroe",
        "tags": []
    },
    {
        "text": "And I'm suppose to sit by while you date boys and fall in love with someone else, get married...?\" His voice tightened. \"And meanwhile, I'll die a little bit more every day, watching.",
        "author": "Cassandra Clare,",
        "tags": [
            "mortal-instruments",
            "romance",
            "teen-fantasy"
        ]
    },
    {
        "text": "Deep in the meadow, hidden far awayA cloak of leaves, a moonbeam rayForget your woes and let your troubles layAnd when it's morning again, they'll wash awayHere it's safe, here it's warmHere the daisies guard you from every harmHere your dreams are sweet and tomorrow brings them trueHere is the place where I love you.",
        "author": "Suzanne Collins,",
        "tags": [
            "katniss",
            "rue",
            "song"
        ]
    },
    {
        "text": "There will come a time when all of us are dead. All of us. There will come a time when there are no human beings remaining to remember that anyone ever existed or that our species ever did anything. There will be no one left to remember Aristotle or Cleopatra, let alone you. Everything that we did and built and wrote and thought and discovered will be forgotten and all of this will have been for naught. Maybe that time is coming soon and maybe it is millions of years away, but even if we survive the collapse of our sun, we will not survive forever. There was time before organisms experienced consciousness, and there will be time after. And if the inevitability of human oblivion worries you, I encourage you to ignore it. God knows that’s what everyone else does.",
        "author": "John Green,",
        "tags": [
            "existence",
            "life"
        ]
    },
    {
        "text": "Never laugh at live dragons.",
        "author": "J.R.R. Tolkien",
        "tags": [
            "dragons",
            "wisdom"
        ]
    },
    {
        "text": "When I have a little money, I buy books; and if I have any left, I buy food and clothes.",
        "author": "Desiderius Erasmus Roterodamus",
        "tags": [
            "books"
        ]
    },
    {
        "text": "Some people care too much. I think it's called love.",
        "author": "A.A. Milne,",
        "tags": []
    },
    {
        "text": "Some books should be tasted, some devoured, but only a few should be chewed and digested thoroughly.",
        "author": "Sir Francis Bacon",
        "tags": [
            "books",
            "reading"
        ]
    },
    {
        "text": "Instead of worrying about what you cannot control, shift your energy to what you can create.",
        "author": "Roy T. Bennett,",
        "tags": [
            "creation",
            "creative",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "living",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "worry"
        ]
    },
    {
        "text": "Experience is merely the name men gave to their mistakes.",
        "author": "Oscar Wilde,",
        "tags": [
            "experience-mistakes-wisdom"
        ]
    },
    {
        "text": "Faithless is he that says farewell when the road darkens.",
        "author": "J.R.R. Tolkien,",
        "tags": [
            "faith"
        ]
    },
    {
        "text": "Sometimes you climb out of bed in the morning and you think, I'm not going to make it, but you laugh inside — remembering all the times you've felt that way.",
        "author": "Charles Bukowski",
        "tags": [
            "humour"
        ]
    },
    {
        "text": "One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don't throw it away.",
        "author": "Stephen Hawking",
        "tags": [
            "philosophy",
            "science"
        ]
    },
    {
        "text": "Those who dream by day are cognizant of many things which escape those who dream only by night.",
        "author": "Edgar Allan Poe,",
        "tags": []
    },
    {
        "text": "I believe in everything until it's disproved. So I believe in fairies, the myths, dragons. It all exists, even if it's in your mind. Who's to say that dreams and nightmares aren't as real as the here and now?",
        "author": "John Lennon",
        "tags": [
            "beatles",
            "dragons",
            "dreamers",
            "dreaming",
            "dreams",
            "fairies",
            "faith",
            "mythology",
            "nightmares",
            "reality",
            "truth"
        ]
    },
    {
        "text": "Eating and reading are two pleasures that combine admirably.",
        "author": "C.S. Lewis",
        "tags": [
            "eating-reading"
        ]
    },
    {
        "text": "I heard what you said. I’m not the silly romantic you think. I don’t want the heavens or the shooting stars. I don’t want gemstones or gold. I have those things already. I want…a steady hand. A kind soul. I want to fall asleep, and wake, knowing my heart is safe. I want to love, and be loved.",
        "author": "Shana Abe",
        "tags": [
            "love",
            "romance"
        ]
    },
    {
        "text": "Here’s to books, the cheapest vacation you can buy.",
        "author": "Charlaine Harris",
        "tags": [
            "books-vacation"
        ]
    },
    {
        "text": "I wanted so badly to lie down next to her on the couch, to wrap my arms around her and sleep. Not fuck, like in those movies. Not even have sex. Just sleep together in the most innocent sense of the phrase. But I lacked the courage and she had a boyfriend and I was gawky and she was gorgeous and I was hopelessly boring and she was endlessly fascinating. So I walked back to my room and collapsed on the bottom bunk, thinking that if people were rain, I was drizzle and she was hurricane.",
        "author": "John Green,",
        "tags": [
            "unrequited-love"
        ]
    },
    {
        "text": "You can talk with someone for years, everyday, and still, it won't mean as much as what you can have when you sit in front of someone, not saying a word, yet you feel that person with your heart, you feel like you have known the person for forever.... connections are made with the heart, not the tongue.",
        "author": "C. JoyBell C.",
        "tags": [
            "affection",
            "communication",
            "heartwarming",
            "human-connections",
            "human-nature",
            "humanism",
            "humanity",
            "inspirational",
            "inspirational-life",
            "inspirational-love",
            "inspirational-quotes",
            "relationships"
        ]
    },
    {
        "text": "Hell is empty and all the devils are here.",
        "author": "William Shakespeare,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "You could rattle the stars,\" she whispered. \"You could do anything, if only you dared. And deep down, you know it, too. That’s what scares you most.",
        "author": "Sarah J. Maas,",
        "tags": []
    },
    {
        "text": "A guy and a girl can be just friends, but at one point or another, they will fall for each other...Maybe temporarily, maybe at the wrong time, maybe too late, or maybe forever",
        "author": "Dave Matthews Band",
        "tags": []
    },
    {
        "text": "Pain is inevitable. Suffering is optional.",
        "author": "haruki murakami,",
        "tags": [
            "inspirational",
            "running"
        ]
    },
    {
        "text": "It is the unknown we fear when we look upon death and darkness, nothing more.",
        "author": "J.K. Rowling,",
        "tags": [
            "fear-unknown"
        ]
    },
    {
        "text": "Reading is one form of escape. Running for your life is another.",
        "author": "Lemony Snicket",
        "tags": [
            "humor-reading"
        ]
    },
    {
        "text": "The world is a book and those who do not travel read only one page.",
        "author": "St. Augustine",
        "tags": [
            "allegory",
            "books",
            "broad-mindedness",
            "classic",
            "education",
            "imagery",
            "travel",
            "world"
        ]
    },
    {
        "text": "If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?",
        "author": "Laurence J. Peter",
        "tags": [
            "misattributed-einstein"
        ]
    },
    {
        "text": "If you're reading this...Congratulations, you're alive.If that's not something to smile about,then I don't know what is.",
        "author": "Chad Sugg,",
        "tags": [
            "alive",
            "congratulations",
            "hope",
            "humanity",
            "inspiration",
            "inspirational",
            "inspire",
            "life",
            "poetry",
            "smile",
            "wisdom"
        ]
    },
    {
        "text": "One day I will find the right words, and they will be simple.",
        "author": "Jack Kerouac,",
        "tags": [
            "dharma",
            "simplicity",
            "writing"
        ]
    },
    {
        "text": "I am not young enough to know everything.",
        "author": "Oscar Wilde",
        "tags": [
            "age"
        ]
    },
    {
        "text": "Reality is merely an illusion, albeit a very persistent one.",
        "author": "Albert Einstein",
        "tags": [
            "reality"
        ]
    },
    {
        "text": "In a time of deceit telling the truth is a revolutionary act.",
        "author": "George Orwell",
        "tags": [
            "truth"
        ]
    },
    {
        "text": "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven..",
        "author": "John Milton,",
        "tags": [
            "inspirational",
            "religion"
        ]
    },
    {
        "text": "If we knew what it was we were doing, it would not be called research, would it?",
        "author": "Albert Einstein",
        "tags": [
            "science"
        ]
    },
    {
        "text": "Monsters are real, and ghosts are real too. They live inside us, and sometimes, they win.",
        "author": "Stephen King",
        "tags": [
            "life"
        ]
    },
    {
        "text": "How lucky I am to have known somebody and something that saying goodbye to is so damned awful.",
        "author": "Evans G. Valens,",
        "tags": [
            "misattributed-to-a-a-milne"
        ]
    },
    {
        "text": "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.",
        "author": "Theodore Roosevelt",
        "tags": [
            "inspirational",
            "politics",
            "presidential"
        ]
    },
    {
        "text": "I learned this, at least, by my experiment: that if one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours.",
        "author": "Henry David Thoreau,",
        "tags": []
    },
    {
        "text": "You get a little moody sometimes but I think that's because you like to read. People that like to read are always a little fucked up.",
        "author": "Pat Conroy,",
        "tags": []
    },
    {
        "text": "I might be in love with you.\" He smiles a little. \"I'm waiting until I'm sure to tell you, though.",
        "author": "Veronica Roth,",
        "tags": [
            "humorous"
        ]
    },
    {
        "text": "There is nothing either good or bad, but thinking makes it so.",
        "author": "William Shakespear,",
        "tags": [
            "philosophy"
        ]
    },
    {
        "text": "Don’t go around saying the world owes you a living. The world owes you nothing. It was here first.",
        "author": "Mark Twain",
        "tags": [
            "living",
            "world"
        ]
    },
    {
        "text": "I have no special talents. I am only passionately curious.",
        "author": "Albert Einstein",
        "tags": []
    },
    {
        "text": "Never go to bed mad. Stay up and fight.",
        "author": "Phyllis Diller",
        "tags": [
            "anger",
            "funny",
            "sleep"
        ]
    },
    {
        "text": "We live and breathe words. .... It was books that made me feel that perhaps I was not completely alone. They could be honest with me, and I with them. Reading your words, what you wrote, how you were lonely sometimes and afraid, but always brave; the way you saw the world, its colors and textures and sounds, I felt--I felt the way you thought, hoped, felt, dreamt. I felt I was dreaming and thinking and feeling with you. I dreamed what you dreamed, wanted what you wanted--and then I realized that truly I just wanted you.",
        "author": "Cassandra Clare,",
        "tags": [
            "dreams",
            "letters",
            "love",
            "love-at-first-sight",
            "power-of-words",
            "writing"
        ]
    },
    {
        "text": "There are no good girls gone wrong - just bad girls found out.",
        "author": "Mae West",
        "tags": [
            "women"
        ]
    },
    {
        "text": "Do you remember back at the hotel when you promised that if we lived, you’d get dressed up in a nurse’s outfit and give me a sponge bath?\" asked Jace.\"It was Simon who promised you the sponge bath.\"\"As soon as I’m back on my feet, handsome,\" said Simon.\"I knew we should have left you a rat.",
        "author": "Cassandra Clare,",
        "tags": [
            "bath",
            "clary-fray",
            "humor",
            "jace-wayland",
            "simon-lewis"
        ]
    },
    {
        "text": "I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It's when you know you're licked before you begin, but you begin anyway and see it through no matter what.",
        "author": "Harper Lee,",
        "tags": [
            "atticus-finch",
            "courage"
        ]
    },
    {
        "text": "I've never been lonely. I've been in a room -- I've felt suicidal. I've been depressed. I've felt awful -- awful beyond all -- but I never felt that one other person could enter that room and cure what was bothering me...or that any number of people could enter that room. In other words, loneliness is something I've never been bothered with because I've always had this terrible itch for solitude. It's being at a party, or at a stadium full of people cheering for something, that I might feel loneliness. I'll quote Ibsen, \"The strongest men are the most alone.\" I've never thought, \"Well, some beautiful blonde will come in here and give me a fuck-job, rub my balls, and I'll feel good.\" No, that won't help. You know the typical crowd, \"Wow, it's Friday night, what are you going to do? Just sit there?\" Well, yeah. Because there's nothing out there. It's stupidity. Stupid people mingling with stupid people. Let them stupidify themselves. I've never been bothered with the need to rush out into the night. I hid in bars, because I didn't want to hide in factories. That's all. Sorry for all the millions, but I've never been lonely. I like myself. I'm the best form of entertainment I have. Let's drink more wine!",
        "author": "Charles Bukowski",
        "tags": [
            "loneliness"
        ]
    },
    {
        "text": "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
        "author": "George Bernard Shaw",
        "tags": [
            "art",
            "life"
        ]
    },
    {
        "text": "It is a curious thing, the death of a loved one. We all know that our time in this world is limited, and that eventually all of us will end up underneath some sheet, never to wake up. And yet it is always a surprise when it happens to someone we know. It is like walking up the stairs to your bedroom in the dark, and thinking there is one more stair than there is. Your foot falls down, through the air, and there is a sickly moment of dark surprise as you try and readjust the way you thought of things.",
        "author": "Lemony Snicket,",
        "tags": [
            "death"
        ]
    },
    {
        "text": "The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair, and though in all lands love is now mingled with grief, it grows perhaps the greater.",
        "author": "J.R.R. Tolkien,",
        "tags": [
            "hope",
            "inspirational",
            "love"
        ]
    },
    {
        "text": "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
        "author": "Maya Angelou",
        "tags": [
            "inspiration"
        ]
    },
    {
        "text": "I like work: it fascinates me. I can sit and look at it for hours.",
        "author": "Jerome K. Jerome",
        "tags": [
            "humor",
            "work"
        ]
    },
    {
        "text": "A thing is not necessarily true because a man dies for it.",
        "author": "Oscar Wilde",
        "tags": [
            "belief",
            "death",
            "ideals",
            "martyr",
            "truth"
        ]
    },
    {
        "text": "Always do what you are afraid to do.",
        "author": "Ralph Waldo Emerson",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Talent hits a target no one else can hit. Genius hits a target no one else can see.",
        "author": "Arthur Schopenhauer",
        "tags": [
            "inspirational",
            "talent"
        ]
    },
    {
        "text": "I hope that in this year to come, you make mistakes. Because if you are making mistakes...you're Doing Something.",
        "author": "Neil Gaiman",
        "tags": []
    },
    {
        "text": "There is neither happiness nor misery in the world; there is only the comparison of one state with another, nothing more. He who has felt the deepest grief is best able to experience supreme happiness. We must have felt what it is to die, Morrel, that we may appreciate the enjoyments of life. \" Live, then, and be happy, beloved children of my heart, and never forget, that until the day God will deign to reveal the future to man, all human wisdom is contained in these two words, 'Wait and Hope.",
        "author": "Alexandre Dumas",
        "tags": [
            "hope",
            "inspirational",
            "wisdom"
        ]
    },
    {
        "text": "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.",
        "author": "John Lennon",
        "tags": [
            "inspirational",
            "life"
        ]
    },
    {
        "text": "They say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for.",
        "author": "Tom Bodett",
        "tags": [
            "happiness",
            "hope",
            "joy",
            "love",
            "wishing"
        ]
    },
    {
        "text": "I have decided to stick to love...Hate is too great a burden to bear.",
        "author": "Martin Luther King Jr.,",
        "tags": [
            "hate",
            "love"
        ]
    },
    {
        "text": "It is hard enough to remember my opinions, without also remembering my reasons for them!",
        "author": "Friedrich Nietzsche",
        "tags": [
            "humor",
            "philosophy"
        ]
    },
    {
        "text": "Our lives begin to end the day we become silent about things that matter.",
        "author": "Martin Luther King Jr.,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "There are two motives for reading a book; one, that you enjoy it; the other, that you can boast about it.",
        "author": "Bertrand Russell",
        "tags": []
    },
    {
        "text": "I think that if I ever have kids, and they are upset, I won't tell them that people are starving in China or anything like that because it wouldn't change the fact that they were upset. And even if somebody else has it much worse, that doesn't really change the fact that you have what you have.",
        "author": "Stephen Chbosky,",
        "tags": [
            "honesty"
        ]
    },
    {
        "text": "Somewhere, something incredible is waiting to be known.",
        "author": "Carl Sagan",
        "tags": [
            "astronomer",
            "science",
            "writer"
        ]
    },
    {
        "text": "What's meant to be will always find a way",
        "author": "Trisha Yearwood",
        "tags": [
            "fate",
            "inspiration",
            "love"
        ]
    },
    {
        "text": "I spent my life folded between the pages of books.In the absence of human relationships I formed bonds with paper characters. I lived love and loss through stories threaded in history; I experienced adolescence by association. My world is one interwoven web of words, stringing limb to limb, bone to sinew, thoughts and images all together. I am a being comprised of letters, a character created by sentences, a figment of imagination formed through fiction.",
        "author": "Tahereh Mafi,",
        "tags": [
            "books",
            "power-of-words",
            "reading"
        ]
    },
    {
        "text": "May I see you again?\" he asked. There was an endearing nervousness in his voice. I smiled. \"Sure.\"\"Tomorrow?\" he asked.\"Patience, grasshopper,\" I counseled. \"You don't want to seem overeager. \"Right, that's why I said tomorrow,\" he said. \"I want to see you again tonight. But I'm willing to wait all night and much of tomorrow.\" I rolled my eyes. \"I'm serious,\" he said. \"You don't even know me,\" I said. I grabbed the book from the center console. \"How about I call you when I finish this?\"\"But you don't even have my phone number,\" he said.\"I strongly suspect you wrote it in this book.\" He broke out into that goofy smile. \"And you say we don't know each other.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        "author": "Jane Austen,",
        "tags": [
            "husband",
            "marriage",
            "opening-lines",
            "wife"
        ]
    },
    {
        "text": "When his life was ruined, his family killed, his farm destroyed, Job knelt down on the ground and yelled up to the heavens, \"Why god? Why me?\" and the thundering voice of God answered, There's just something about you that pisses me off.",
        "author": "Stephen King,",
        "tags": [
            "god",
            "humor",
            "religion"
        ]
    },
    {
        "text": "Make it a rule never to give a child a book you would not read yourself.",
        "author": "George Bernard Shaw",
        "tags": [
            "books",
            "children"
        ]
    },
    {
        "text": "All happy families are alike; each unhappy family is unhappy in its own way.",
        "author": "Leo Tolstoy  ,",
        "tags": [
            "family",
            "first-sentence"
        ]
    },
    {
        "text": "That's always seemed so ridiculous to me, that people want to be around someone because they're pretty. It's like picking your breakfeast cereals based on color instead of taste.",
        "author": "John Green,",
        "tags": [
            "attraction",
            "beauty",
            "popularity"
        ]
    },
    {
        "text": "Sarcasm is the last refuge of the imaginatively bankrupt.",
        "author": "Cassandra Clare,",
        "tags": [
            "clary",
            "jace",
            "sarcasm"
        ]
    },
    {
        "text": "And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.",
        "author": "Anais Nin",
        "tags": []
    },
    {
        "text": "Do not let your fire go out, spark by irreplaceable spark in the hopeless swamps of the not-quite, the not-yet, and the not-at-all. Do not let the hero in your soul perish in lonely frustration for the life you deserved and have never been able to reach. The world you desire can be won. It exists.. it is real.. it is possible.. it's yours.",
        "author": "Ayn Rand,",
        "tags": [
            "inspirational",
            "life"
        ]
    },
    {
        "text": "Hearts are made to be broken.",
        "author": "Oscar Wilde,",
        "tags": []
    },
    {
        "text": "Be the reason someone smiles. Be the reason someone feels loved and believes in the goodness in people.",
        "author": "Roy T. Bennett,",
        "tags": [
            "being-human",
            "goodness",
            "human",
            "human-nature",
            "humanism",
            "humanity",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quote",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "kindness",
            "life",
            "life-and-living",
            "life-lessons",
            "life-philosophy",
            "life-quotes",
            "living",
            "love",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "smile",
            "smiles"
        ]
    },
    {
        "text": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King Jr.",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "And by the way, everything in life is writable about if you have the outgoing guts to do it, and the imagination to improvise. The worst enemy to creativity is self-doubt.",
        "author": "Sylvia Plath,",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "I'm coming back into focus when Caesar asks him if he has a girlfriend back home. Peeta hesitates, then gives an unconvincing shake of his head.Handsome lad like you. There must be some special girl. Come on, what’s her name?\" says Caesar.Peeta sighs. \"Well, there is this one girl. I’ve had a crush on her ever since I can remember. But I’m pretty sure she didn’t know I was alive until the reaping.\"Sounds of sympathy from the crowd. Unrequited love they can relate to.She have another fellow?\" asks Caesar.I don’t know, but a lot of boys like her,\" says Peeta.So, here’s what you do. You win, you go home. She can’t turn you down then, eh?\" says Caesar encouragingly.I don’t think it’s going to work out. Winning...won’t help in my case,\" says Peeta.Why ever not?\" says Caesar, mystified.Peeta blushes beet red and stammers out. \"Because...because...she came here with me.",
        "author": "Suzanne Collins,",
        "tags": [
            "peeta"
        ]
    },
    {
        "text": "The flower that blooms in adversity is the rarest and most beautiful of all.",
        "author": "Walt Disney Company,",
        "tags": [
            "inspiration",
            "life"
        ]
    },
    {
        "text": "There are few people whom I really love, and still fewer of whom I think well. The more I see of the world, the more am I dissatisfied with it; and every day confirms my belief of the inconsistency of all human characters, and of the little dependence that can be placed on the appearance of merit or sense.",
        "author": "Jane Austen,",
        "tags": [
            "elizabeth-bennet",
            "jane-austen"
        ]
    },
    {
        "text": "There is a theory which states that if ever anyone discovers exactly what the Universe is for and why it is here, it will instantly disappear and be replaced by something even more bizarre and inexplicable. There is another theory which states that this has already happened.",
        "author": "Douglas Adams,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "Malachi scowled. \"I don't remember the Clave inviting you into the Glass City, Magnus Bane.\"\"They didn't,\" Magnus said. \"Your wards are down.\"\"Really?\" the Consul's voice dripped sarcasm. \"I hadn't noticed.\"Magnus looked concerned. \"That's terrible. Someone should have told you.\" He glanced at Luke. \"Tell him the wards are down.",
        "author": "Cassandra Clare,",
        "tags": [
            "consul",
            "humor",
            "magnus-bane",
            "sarcasm"
        ]
    },
    {
        "text": "I have loved the stars too fondly to be fearful of the night.",
        "author": "Sarah   Williams",
        "tags": [
            "night",
            "poetry"
        ]
    },
    {
        "text": "Of all sad words of tongue or pen, the saddest are these, 'It might have been.",
        "author": "John Greenleaf Whittier",
        "tags": [
            "life",
            "words"
        ]
    },
    {
        "text": "The loneliest moment in someone’s life is when they are watching their whole world fall apart, and all they can do is stare blankly.",
        "author": "F. Scott Fitzgerald",
        "tags": [
            "loneliness",
            "misattributed"
        ]
    },
    {
        "text": "Fantasy is hardly an escape from reality. It's a way of understanding it.",
        "author": "Lloyd Alexander",
        "tags": []
    },
    {
        "text": "Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.",
        "author": "Friedrich Nietzsche",
        "tags": [
            "corruption",
            "dark-side",
            "fighting",
            "monsters",
            "soul"
        ]
    },
    {
        "text": "For you, a thousand times over",
        "author": "Khaled Hosseini,",
        "tags": []
    },
    {
        "text": "The wound is the place where the Light enters you.",
        "author": "Rumi",
        "tags": [
            "brokenness",
            "healing",
            "scars",
            "suffering"
        ]
    },
    {
        "text": "It is so hard to leave—until you leave. And then it is the easiest goddamned thing in the world.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "You don't love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear.",
        "author": "oscar wilde",
        "tags": [
            "attributed-no-source"
        ]
    },
    {
        "text": "You have enemies? Good. That means you've stood up for something, sometime in your life.",
        "author": "Winston Churchill",
        "tags": [
            "attributed-no-source",
            "convictions",
            "criticism"
        ]
    },
    {
        "text": "If you're going to try, go all the way. Otherwise, don't even start. This could mean losing girlfriends, wives, relatives and maybe even your mind. It could mean not eating for three or four days. It could mean freezing on a park bench. It could mean jail. It could mean derision. It could mean mockery--isolation. Isolation is the gift. All the others are a test of your endurance, of how much you really want to do it. And, you'll do it, despite rejection and the worst odds. And it will be better than anything else you can imagine. If you're going to try, go all the way. There is no other feeling like that. You will be alone with the gods, and the nights will flame with fire. You will ride life straight to perfect laughter. It's the only good fight there is.",
        "author": "Charles Bukowski,",
        "tags": [
            "fire",
            "flame",
            "isolation",
            "laughter",
            "loss",
            "sacrifice"
        ]
    },
    {
        "text": "Think before you speak. Read before you think.",
        "author": "Fran Lebowitz,",
        "tags": [
            "advice-for-daily-living",
            "books",
            "reader",
            "reading",
            "speaking",
            "thinking",
            "wisdom"
        ]
    },
    {
        "text": "THE FIRST TEN LIES THEY TELL YOU IN HIGH SCHOOL 1. We are here to help you. 2. You will have time to get to your class before the bell rings. 3. The dress code will be enforced. 4. No smoking is allowed on school grounds. 5. Our football team will win the championship this year. 6. We expect more of you here. 7. Guidance counselors are always available to listen. 8. Your schedule was created with you in mind. 9. Your locker combination is private. 10. These will be the years you look back on fondly. TEN MORE LIES THEY TELL YOU IN HIGH SCHOOL 1. You will use algebra in your adult lives. 2. Driving to school is a privilege that can be taken away. 3. Students must stay on campus during lunch. 4. The new text books will arrive any day now. 5. Colleges care more about you than your SAT scores. 6. We are enforcing the dress code. 7. We will figure out how to turn off the heat soon. 8. Our bus drivers are highly trained professionals. 9. There is nothing wrong with summer school. 10. We want to hear what you have to say.",
        "author": "Laurie Halse Anderson,",
        "tags": [
            "humor",
            "school"
        ]
    },
    {
        "text": "Never let your sense of morals prevent you from doing what is right.",
        "author": "Isaac Asimov,",
        "tags": [
            "humor",
            "inspirational",
            "philosophy",
            "wisdom"
        ]
    },
    {
        "text": "Whether you think you can, or you think you can't--you're right.",
        "author": "Henry Ford",
        "tags": [
            "thinking"
        ]
    },
    {
        "text": "The boy never cried again, and he never forgot what he'd learned: that to love is to destroy, and that to be loved is to be the one destroyed.",
        "author": "Cassandra Clare,",
        "tags": [
            "city-of-bones",
            "jace-wayland"
        ]
    },
    {
        "text": "If all else perished, and he remained, I should still continue to be; and if all else remained, and he were annihilated, the universe would turn to a mighty stranger.",
        "author": "Emily Jane Brontë ,",
        "tags": []
    },
    {
        "text": "Once you learn to read, you will be forever free.",
        "author": "Frederick Douglass",
        "tags": []
    },
    {
        "text": "Think of all the beauty still left around you and be happy.",
        "author": "Anne Frank",
        "tags": [
            "anne",
            "beauty",
            "frank",
            "happy"
        ]
    },
    {
        "text": "Why did you do all this for me?' he asked. 'I don't deserve it. I've never done anything for you.' 'You have been my friend,' replied Charlotte. 'That in itself is a tremendous thing.",
        "author": "E.B. White,",
        "tags": [
            "friendship"
        ]
    },
    {
        "text": "Two people in love, alone, isolated from the world, that's beautiful.",
        "author": "Milan Kundera",
        "tags": []
    },
    {
        "text": "You know, you could live a thousand lifetimes and not deserve him.",
        "author": "Suzanne Collins,",
        "tags": []
    },
    {
        "text": "I did not attend his funeral, but I sent a nice letter saying I approved of it.",
        "author": "Mark Twain",
        "tags": [
            "classic-insult",
            "funeral",
            "funny",
            "humor"
        ]
    },
    {
        "text": "Here's all you have to know about men and women: women are crazy, men are stupid. And the main reason women are crazy is that men are stupid.",
        "author": "George Carlin,",
        "tags": [
            "crazy",
            "men",
            "stupid",
            "truth",
            "women"
        ]
    },
    {
        "text": "Give a girl the right shoes, and she can conquer the world.",
        "author": "Bette Midler",
        "tags": [
            "misattributed-to-marilyn-monroe"
        ]
    },
    {
        "text": "Faith is taking the first step even when you can't see the whole staircase.",
        "author": "Martin Luther King Jr.",
        "tags": [
            "inspirational-faith"
        ]
    },
    {
        "text": "Augustus Waters was a self-aggrandizing bastard. But we forgive him. We forgive him not because he had a heart as figuratively good as his literal one sucked, or because he knew more about how to hold a cigarette than any nonsmoker in history, or because he got eighteen years when he should've gotten more.''Seventeen,' Gus corrected.'I'm assuming you've got some time, you interupting bastard.'I'm telling you,' Isaac continued, 'Augustus Waters talked so much that he'd interupt you at his own funeral. And he was pretentious: Sweet Jesus Christ, that kid never took a piss without pondering the abundant metaphorical resonances of human waste production. And he was vain: I do not believe I have ever met a more physically attractive person who was more acutely aware of his own physical attractiveness.'But I will say this: When the scientists of the future show up at my house with robot eyes and they tell me to try them on, I will tell the scientists to screw off, because I do not want to see a world without him.'I was kind of crying by then.",
        "author": "John Green,",
        "tags": [
            "john-green",
            "tfios",
            "the-fault-in-our-stars"
        ]
    },
    {
        "text": "We're all going to die, all of us, what a circus! That alone should make us love each other but it doesn't. We are terrorized and flattened by trivialities, we are eaten up by nothing.",
        "author": "Charles Bukowski",
        "tags": []
    },
    {
        "text": "This above all: to thine own self be true, And it must follow, as the night the day, Thou canst not then be false to any man.",
        "author": "William Shakespeare,",
        "tags": []
    },
    {
        "text": "The best index to a person's character is how he treats people who can't do him any good, and how he treats people who can't fight back.",
        "author": "Abigail Van Buren",
        "tags": [
            "character",
            "life",
            "wisdom"
        ]
    },
    {
        "text": "I want to stand as close to the edge as I can without going over. Out on the edge you see all kinds of things you can't see from the center.",
        "author": "Kurt Vonnegut,",
        "tags": []
    },
    {
        "text": "Books are mirrors: you only see in them what you already have inside you.",
        "author": "Carlos Ruiz Zafón,",
        "tags": [
            "books",
            "reading",
            "truth"
        ]
    },
    {
        "text": "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.",
        "author": "Maya Angelou",
        "tags": [
            "character",
            "consistency",
            "courage",
            "determination",
            "essence",
            "ethos",
            "fortitude",
            "goodness",
            "inspiration",
            "life-lessons",
            "persistence",
            "resolve",
            "self-reliance",
            "strength",
            "virtue",
            "virtues"
        ]
    },
    {
        "text": "All animals are equal, but some animals are more equal than others.",
        "author": "George Orwell,",
        "tags": [
            "animal-farm"
        ]
    },
    {
        "text": "God created war so that Americans would learn geography.",
        "author": "Mark Twain",
        "tags": [
            "americans",
            "geography",
            "war"
        ]
    },
    {
        "text": "She was a girl who knew how to be happy even when she was sad. And that’s important—you know",
        "author": "Marilyn Monroe",
        "tags": []
    },
    {
        "text": "A human being is a part of the whole called by us universe, a part limited in time and space. He experiences himself, his thoughts and feeling as something separated from the rest, a kind of optical delusion of his consciousness. This delusion is a kind of prison for us, restricting us to our personal desires and to affection for a few persons nearest to us. Our task must be to free ourselves from this prison by widening our circle of compassion to embrace all living creatures and the whole of nature in its beauty.",
        "author": "Albert Einstein",
        "tags": [
            "compassion",
            "einstein",
            "nature",
            "philosophy"
        ]
    },
    {
        "text": "Where is human nature so weak as in the bookstore?",
        "author": "Henry Ward Beecherr",
        "tags": [
            "books",
            "humor"
        ]
    },
    {
        "text": "Books so special and rare and yours that advertising your affection feels like a betrayal.",
        "author": "John Green,",
        "tags": [
            "books"
        ]
    },
    {
        "text": "If at first you don't succeed, try, try again. Then quit. No use being a damn fool about it.",
        "author": "W.C. Fields",
        "tags": []
    },
    {
        "text": "I have a history of making decisions very quickly about men. I have always fallen in love fast and without measuring risks. I have a tendency not only to see the best in everyone, but to assume that everyone is emotionally capable of reaching his highest potential. I have fallen in love more times than I care to count with the highest potential of a man, rather than with the man himself, and I have hung on to the relationship for a long time (sometimes far too long) waiting for the man to ascend to his own greatness. Many times in romance I have been a victim of my own optimism.",
        "author": "Elizabeth Gilbert,",
        "tags": [
            "disappointment",
            "love",
            "romance"
        ]
    },
    {
        "text": "If you remember me, then I don't care if everyone else forgets.",
        "author": "Haruki Murakami,",
        "tags": [
            "inspirational",
            "love"
        ]
    },
    {
        "text": "What is a friend? A single soul dwelling in two bodies.",
        "author": "Aristotle",
        "tags": [
            "friendship",
            "soul"
        ]
    },
    {
        "text": "Those who find ugly meanings in beautiful things are corrupt without being charming. This is a fault. Those who find beautiful meanings in beautiful things are the cultivated. For these there is hope. They are the elect to whom beautiful things mean only Beauty. There is no such thing as a moral or an immoral book. Books are well written, or badly written. That is all.",
        "author": "Oscar Wilde,",
        "tags": [
            "books",
            "morality",
            "reading",
            "writing"
        ]
    },
    {
        "text": "Waiting is painful. Forgetting is painful. But not knowing which to do is the worst kind of suffering.",
        "author": "Paulo Coelho,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Take responsibility of your own happiness, never put it in other people’s hands.",
        "author": "Roy T. Bennett,",
        "tags": [
            "happiness",
            "inspirational",
            "responsibility"
        ]
    },
    {
        "text": "I cannot live without books.",
        "author": "Thomas Jefferson",
        "tags": [
            "books"
        ]
    },
    {
        "text": "The very essence of romance is uncertainty.",
        "author": "Oscar Wilde,",
        "tags": [
            "love",
            "romance"
        ]
    },
    {
        "text": "I can't imagine a man really enjoying a book and reading it only once.",
        "author": "C.S. Lewis",
        "tags": [
            "books-reading"
        ]
    },
    {
        "text": "Well, I’m not kissing the mundane,\" said Jace. \"I’d rather stay down here and rot.\"\"Forever?\" said Simon. \"Forever’s an awfully long time.\"Jace raised his eyebrows. \"I knew it,\" he said. \"You want to kiss me, don’t you?",
        "author": "Cassandra Clare,",
        "tags": [
            "humor",
            "jace-wayland",
            "simon-lewis"
        ]
    },
    {
        "text": "Accept yourself, love yourself, and keep moving forward. If you want to fly, you have to give up what weighs you down.",
        "author": "Roy T. Bennett,",
        "tags": [
            "accept-yourself",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "keep-moving-forward",
            "letting-go",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "living",
            "love-yourself",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking"
        ]
    },
    {
        "text": "Nobody realizes that some people expend tremendous energy merely to be normal.",
        "author": "Albert Camus",
        "tags": [
            "humanity",
            "life",
            "mankind",
            "mortality"
        ]
    },
    {
        "text": "For the two of us, home isn't a place. It is a person. And we are finally home.",
        "author": "Stephanie Perkins,",
        "tags": [
            "home",
            "love",
            "relationships",
            "touching"
        ]
    },
    {
        "text": "The most important thing is to enjoy your life—to be happy—it's all that matters.",
        "author": "Audrey Hepburn",
        "tags": [
            "happiness",
            "life"
        ]
    },
    {
        "text": "The unexamined life is not worth living.",
        "author": "Socrates",
        "tags": [
            "inspiration",
            "truth",
            "wisdom"
        ]
    },
    {
        "text": "Be mindful. Be grateful. Be positive. Be true. Be kind.",
        "author": "Roy T. Bennett,",
        "tags": [
            "gratitude",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "kindness",
            "life",
            "life-and-living",
            "life-quotes",
            "living-life",
            "mindful",
            "mindfulness",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "truth"
        ]
    },
    {
        "text": "Bran thought about it. 'Can a man still be brave if he's afraid?''That is the only time a man can be brave,' his father told him.",
        "author": "George R.R. Martin,",
        "tags": [
            "bravery",
            "courage",
            "fear"
        ]
    },
    {
        "text": "There is always some madness in love. But there is also always some reason in madness.",
        "author": "Friedrich Nietzsche",
        "tags": [
            "love",
            "madness"
        ]
    },
    {
        "text": "People aren't either wicked or noble. They're like chef's salads, with good things and bad things chopped and mixed together in a vinaigrette of confusion and conflict.",
        "author": "Lemony Snicket,",
        "tags": [
            "life"
        ]
    },
    {
        "text": "The most courageous act is still to think for yourself. Aloud.",
        "author": "Coco Chanel",
        "tags": [
            "courage",
            "dignity",
            "empowerment",
            "freedom",
            "independence",
            "individuality",
            "judgment",
            "self-determination",
            "speaking-out",
            "thought"
        ]
    },
    {
        "text": "what matters most is how well you walk through the fire",
        "author": "Charles Bukowski",
        "tags": []
    },
    {
        "text": "Read, read, read. Read everything -- trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it.Then write. If it's good, you'll find out. If it's not, throw it out of the window.",
        "author": "William Faulkner",
        "tags": []
    },
    {
        "text": "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one’s definition of your life; define yourself.",
        "author": "Robert Frost",
        "tags": []
    },
    {
        "text": "No relationship is perfect, ever. There are always some ways you have to bend, to compromise, to give something up in order to gain something greater...The love we have for each other is bigger than these small differences. And that's the key. It's like a big pie chart, and the love in a relationship has to be the biggest piece. Love can make up for a lot.",
        "author": "Sarah Dessen,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Love is always patient and kind. It is never jealous. Love is never boastful or conceited. It is never rude or selfish. It does not take offense and is not resentful. Love takes no pleasure in other people’s sins, but delights in the truth. It is always ready to excuse, to trust, to hope, and to endure whatever comes.",
        "author": "Anonymous,",
        "tags": [
            "1-corinthians-13",
            "love"
        ]
    },
    {
        "text": "Love is so short, forgetting is so long.",
        "author": "Pablo Neruda,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Respect other people's feelings. It might mean nothing to you, but it could mean everything to them.",
        "author": "Roy T. Bennett",
        "tags": [
            "feelings",
            "inspiration",
            "inspirational-quotes"
        ]
    },
    {
        "text": "I can be changed by what happens to me. But I refuse to be reduced by it.(Popular misquote of \"You may not control all the events that happen to you, but you can decide not to be reduced by them.\")",
        "author": "Maya Angelou,",
        "tags": [
            "be-yourself",
            "inspirational",
            "misquote",
            "self-determination"
        ]
    },
    {
        "text": "Everything in the world is about sex except sex. Sex is about power.",
        "author": "Oscar Wilde",
        "tags": [
            "power",
            "sex"
        ]
    },
    {
        "text": "War is peace. Freedom is slavery. Ignorance is strength.",
        "author": "George Orwell,",
        "tags": [
            "freedom",
            "ignorance",
            "inspirational",
            "war"
        ]
    },
    {
        "text": "Many boys will bring you flowers. But someday you'll meet a boy who will learn your favorite flower, your favorite song, your favorite sweet. And even if he is too poor to give you any of them, it won't matter because he will have taken the time to know you as no one else does. Only that boy earns your heart.",
        "author": "Leigh Bardugo,",
        "tags": [
            "leigh-bardugo",
            "six-of-crows"
        ]
    },
    {
        "text": "Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.",
        "author": "Oscar Wilde",
        "tags": [
            "truth"
        ]
    },
    {
        "text": "I cannot fix on the hour, or the spot, or the look or the words, which laid the foundation. It is too long ago. I was in the middle before I knew that I had begun.",
        "author": "Jane Austen,",
        "tags": [
            "love",
            "romance"
        ]
    },
    {
        "text": "Have you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up. You build up all these defenses, you build up a whole suit of armor, so that nothing can hurt you, then one stupid person, no different from any other stupid person, wanders into your stupid life...You give them a piece of you. They didn't ask for it. They did something dumb one day, like kiss you or smile at you, and then your life isn't your own anymore. Love takes hostages. It gets inside you. It eats you out and leaves you crying in the darkness, so simple a phrase like 'maybe we should be just friends' turns into a glass splinter working its way into your heart. It hurts. Not just in the imagination. Not just in the mind. It's a soul-hurt, a real gets-inside-you-and-rips-you-apart pain. I hate love.",
        "author": "Neil Gaiman,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.",
        "author": "Martin Luther King Jr.",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "I didn't want to wake up. I was having a much better time asleep. And that's really sad. It was almost like a reverse nightmare, like when you wake up from a nightmare you're so relieved. I woke up into a nightmare.",
        "author": "Ned Vizzini,",
        "tags": [
            "depression",
            "sadness",
            "suicide"
        ]
    },
    {
        "text": "Should I kill myself, or have a cup of coffee?",
        "author": "Albert Camus",
        "tags": [
            "attributed-no-source"
        ]
    },
    {
        "text": "Not everything is about you,\" Clary said furiously.\"Possibly,\" Jace said, \"but you do have to admit that the majority of things are.",
        "author": "Cassandra Clare,",
        "tags": [
            "clary-fray",
            "ego",
            "jace-wayland"
        ]
    },
    {
        "text": "Try not to become a man of success. Rather become a man of value.",
        "author": "Albert Einstein",
        "tags": [
            "adulthood",
            "success",
            "value"
        ]
    },
    {
        "text": "They didn’t agree on much. In fact, they didn’t agree on anything. They fought all the time and challenged each other ever day. But despite their differences, they had one important thing in common. They were crazy about each other.",
        "author": "Nicholas Sparks,",
        "tags": [
            "dear-john",
            "love",
            "nicholas-sparks",
            "romance",
            "the-notebook"
        ]
    },
    {
        "text": "I generally avoid temptation unless I can't resist it.",
        "author": "Mae West",
        "tags": [
            "humor",
            "temptation"
        ]
    },
    {
        "text": "I am a man\" he told her, \"and men do not consume pink beverages. Get thee gone woman, and bring me something brown.",
        "author": "Cassandra Clare,",
        "tags": [
            "brown",
            "city-of-glass",
            "clare",
            "isabelle",
            "jace"
        ]
    },
    {
        "text": "What the hell is that?\" I laughed.\"It's my fox hat.\"\"Your fox hat?\"\"Yeah, Pudge. My fox hat.\"\"Why are you wearing your fox hat?\" I asked.\"Because no one can catch the motherfucking fox.",
        "author": "John Green,",
        "tags": [
            "funny",
            "humor"
        ]
    },
    {
        "text": "We are all different. Don’t judge, understand instead.",
        "author": "Roy T. Bennett,",
        "tags": [
            "authentic-living",
            "authentic-self",
            "authenticity",
            "compassion"
        ]
    },
    {
        "text": "It is not in the stars to hold our destiny but in ourselves.",
        "author": "William Shakespeare",
        "tags": [
            "destiny"
        ]
    },
    {
        "text": "Good books don't give up all their secrets at once.",
        "author": "Stephen King",
        "tags": [
            "books"
        ]
    },
    {
        "text": "Reader's Bill of Rights1. The right to not read 2. The right to skip pages 3. The right to not finish 4. The right to reread 5. The right to read anything 6. The right to escapism 7. The right to read anywhere 8. The right to browse 9. The right to read out loud 10. The right to not defend your tastes",
        "author": "Daniel Pennac",
        "tags": [
            "books",
            "reading",
            "rights"
        ]
    },
    {
        "text": "I think if I've learned anything about friendship, it's to hang in, stay connected, fight for them, and let them fight for you. Don't walk away, don't be distracted, don't be too busy or tired, don't take them for granted. Friends are part of the glue that holds life and faith together. Powerful stuff.",
        "author": "Jon Katz",
        "tags": [
            "faith",
            "friends",
            "friendship",
            "love"
        ]
    },
    {
        "text": "You never have to change anything you got up in the middle of the night to write.",
        "author": "Saul Bellow",
        "tags": [
            "imagination",
            "inspiration",
            "writing"
        ]
    },
    {
        "text": "Accept who you are. Unless you're a serial killer.",
        "author": "Ellen DeGeneres,",
        "tags": [
            "funny"
        ]
    },
    {
        "text": "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
        "author": "Roy T. Bennett,",
        "tags": [
            "achievement",
            "believe-in-yourself",
            "brave",
            "courage",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "living",
            "motivation",
            "motivational",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "talent"
        ]
    },
    {
        "text": "He never went out without a book under his arm, and he often came back with two.",
        "author": "Victor Hugo,",
        "tags": []
    },
    {
        "text": "Is this the part where you say if I hurt her, you'll kill me?\"\"No\" Simon said, \"If you hurt Clary she's quite capable of killing you herself. Possibly with a variety of weapons.",
        "author": "Cassandra Clare,",
        "tags": [
            "city-of-glass",
            "jace",
            "simon"
        ]
    },
    {
        "text": "I was gratified to be able to answer promptly, and I did. I said I didn’t know.",
        "author": "Mark Twain",
        "tags": [
            "humor",
            "knowledge"
        ]
    },
    {
        "text": "Deserves it! I daresay he does. Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to deal out death in judgement. For even the very wise cannot see all ends.",
        "author": "J.R.R. Tolkien,",
        "tags": []
    },
    {
        "text": "I love to see a young girl go out and grab the world by the lapels. Life's a bitch. You've got to go out and kick ass.",
        "author": "maya angelou",
        "tags": [
            "humor",
            "inspirational",
            "life"
        ]
    },
    {
        "text": "All little girls should be told they are pretty, even if they aren't.",
        "author": "Marilyn Monroe",
        "tags": [
            "beauty",
            "girls"
        ]
    },
    {
        "text": "Never allow someone to be your priority while allowing yourself to be their option.",
        "author": "Mark Twain",
        "tags": [
            "heartbreak"
        ]
    },
    {
        "text": "It's not true that I had nothing on. I had the radio on.",
        "author": "Marilyn Monroe",
        "tags": [
            "dirty",
            "funny",
            "logo",
            "sex"
        ]
    },
    {
        "text": "Either write something worth reading or do something worth writing.",
        "author": "Benjamin Franklin",
        "tags": [
            "hmmm"
        ]
    },
    {
        "text": "Once on a yellow piece of paper with green lines\the wrote a poemAnd he called it \"Chops\"\tbecause that was the name of his dogAnd that's what it was all aboutAnd his teacher gave him an A\tand a gold starAnd his mother hung it on the kitchen door\tand read it to his auntsThat was the year Father Tracy\ttook all the kids to the zooAnd he let them sing on the busAnd his little sister was born\twith tiny toenails and no hairAnd his mother and father kissed a lotAnd the girl around the corner sent him aValentine signed with a row of X's\tand he had to ask his father what the X's meantAnd his father always tucked him in bed at nightAnd was always there to do itOnce on a piece of white paper with blue lines\the wrote a poemAnd he called it \"Autumn\"\tbecause that was the name of the seasonAnd that's what it was all aboutAnd his teacher gave him an A\tand asked him to write more clearlyAnd his mother never hung it on the kitchen door\tbecause of its new paintAnd the kids told him\tthat Father Tracy smoked cigarsAnd left butts on the pewsAnd sometimes they would burn holesThat was the year his sister got glasses\twith thick lenses and black framesAnd the girl around the corner laughed\twhen he asked her to go see Santa ClausAnd the kids told him why\this mother and father kissed a lotAnd his father never tucked him in bed at nightAnd his father got mad\twhen he cried for him to do it.Once on a paper torn from his notebook\the wrote a poemAnd he called it \"Innocence: A Question\"\tbecause that was the question about his girlAnd that's what it was all aboutAnd his professor gave him an A\tand a strange steady lookAnd his mother never hung it on the kitchen door\tbecause he never showed herThat was the year that Father Tracy diedAnd he forgot how the end\tof the Apostle's Creed wentAnd he caught his sister\tmaking out on the back porchAnd his mother and father never kissed\tor even talkedAnd the girl around the corner\twore too much makeupThat made him cough when he kissed her\tbut he kissed her anyway\tbecause that was the thing to doAnd at three a.m. he tucked himself into bed\this father snoring soundlyThat's why on the back of a brown paper bag\the tried another poemAnd he called it \"Absolutely Nothing\"Because that's what it was really all aboutAnd he gave himself an A\tand a slash on each damned wristAnd he hung it on the bathroom door\tbecause this time he didn't think\the could reach the kitchen.",
        "author": "Stephen Chbosky,",
        "tags": [
            "poem"
        ]
    },
    {
        "text": "So please, oh please, we beg, we pray,Go throw your TV set away,And in its place you can installA lovely bookshelf on the wall.Then fill the shelves with lots of books.",
        "author": "Roald Dahl,",
        "tags": [
            "books",
            "humor",
            "television"
        ]
    },
    {
        "text": "Turn your wounds into wisdom.",
        "author": "Oprah Winfrey",
        "tags": [
            "experience",
            "inspirational",
            "pain",
            "wisdom",
            "wounds"
        ]
    },
    {
        "text": "Two possibilities exist: either we are alone in the Universe or we are not. Both are equally terrifying.",
        "author": "Arthur C. Clarke",
        "tags": [
            "distance",
            "life",
            "loneliness",
            "qotd",
            "sense-of-wonder",
            "universe"
        ]
    },
    {
        "text": "I'm not saying that everything is survivable. Just that everything except the last thing is.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "Stop acting so small. You are the universe in ecstatic motion.",
        "author": "Rumi",
        "tags": []
    },
    {
        "text": "The important thing is not to stop questioning. Curiosity has its own reason for existence. One cannot help but be in awe when he contemplates the mysteries of eternity, of life, of the marvelous structure of reality. It is enough if one tries merely to comprehend a little of this mystery each day.—\"Old Man's Advice to Youth: 'Never Lose a Holy Curiosity.'\" LIFE Magazine (2 May 1955) p. 64",
        "author": "Albert Einstein",
        "tags": [
            "1955",
            "curiosity",
            "mystery"
        ]
    },
    {
        "text": "My experience of life is that it is not divided up into genres; it’s a horrifying, romantic, tragic, comical, science-fiction cowboy detective novel. You know, with a bit of pornography if you're lucky.",
        "author": "Alan Moore",
        "tags": [
            "life"
        ]
    },
    {
        "text": "You must have chaos within you to give birth to a dancing star.",
        "author": "Friedrich Nietzsche",
        "tags": [
            "art",
            "chaos"
        ]
    },
    {
        "text": "You could have had anything else in the world, and you asked for me.\"She smiled up at him. Filthy as he was, covered in blood and dirt, he was the most beautiful thing she'd ever seen.\"But I don't want anything else in the world.",
        "author": "Cassandra Clare,",
        "tags": [
            "clary-fray",
            "jace-wayland",
            "love"
        ]
    },
    {
        "text": "Not my daughter, you bitch!",
        "author": "J.K. Rowling,",
        "tags": [
            "anger",
            "molly-weasley-anger"
        ]
    },
    {
        "text": "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
        "author": "Robert Frost",
        "tags": [
            "reading",
            "writing"
        ]
    },
    {
        "text": "Kiss me, and you will see how important I am.",
        "author": "Sylvia Plath,",
        "tags": [
            "importance",
            "kiss",
            "kissing"
        ]
    },
    {
        "text": "Life is too short to waste your time on people who don’t respect, appreciate, and value you.",
        "author": "Roy T. Bennett,",
        "tags": [
            "appreciate",
            "inspiration",
            "inspirational",
            "inspirational-attitude"
        ]
    },
    {
        "text": "Books may well be the only true magic.",
        "author": "Alice Hoffman",
        "tags": [
            "books"
        ]
    },
    {
        "text": "Nothing that’s worthwhile is ever easy. Remember that.",
        "author": "Nicholas Sparks,",
        "tags": []
    },
    {
        "text": "When you're struggling with something, look at all the people around you and realize that every single person you see is struggling with something, and to them, it's just as hard as what you're going through.",
        "author": "Nicholas Sparks,",
        "tags": []
    },
    {
        "text": "Happiness is a warm puppy.",
        "author": "Charles M. Schulz",
        "tags": [
            "animals",
            "dogs",
            "happiness",
            "humor",
            "puppies"
        ]
    },
    {
        "text": "When you have eliminated all which is impossible, then whatever remains, however improbable, must be the truth.",
        "author": "Arthur Conan Doyle,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Men occasionally stumble over the truth, but most of them pick themselves up and hurry off as if nothing had happened.",
        "author": "Winston S. Churchill",
        "tags": [
            "truth"
        ]
    },
    {
        "text": "Painting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen.",
        "author": "Leonardo da Vinci",
        "tags": []
    },
    {
        "text": "I wonder how many people I've looked at all my life and never seen.",
        "author": "John Steinbeck,",
        "tags": []
    },
    {
        "text": "You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.",
        "author": "Friedrich Wilhelm Nietzsche",
        "tags": [
            "amorality",
            "correct-way",
            "individuality",
            "my-way",
            "only-way",
            "right-way",
            "the-way",
            "your-way"
        ]
    },
    {
        "text": "Each day means a new twenty-four hours. Each day means everything's possible again. You live in the moment, you die in the moment, you take it all one day at a time.",
        "author": "Marie Lu,",
        "tags": []
    },
    {
        "text": "It is said that your life flashes before your eyes just before you die. That is true, it's called Life.",
        "author": "Terry Pratchett,",
        "tags": [
            "death",
            "humor",
            "life"
        ]
    },
    {
        "text": "The simple things are also the most extraordinary things, and only the wise can see them.",
        "author": "Paulo Coelho,",
        "tags": [
            "wisdom"
        ]
    },
    {
        "text": "You gain strength, courage and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I have lived through this horror. I can take the next thing that comes along.' You must do the thing you think you cannot do.",
        "author": "Eleanor Roosevelt,",
        "tags": [
            "confidence"
        ]
    },
    {
        "text": "What happens when people open their hearts?\"\"They get better.",
        "author": "Haruki Murakami,",
        "tags": [
            "healing",
            "vulnerability"
        ]
    },
    {
        "text": "Without pain, how could we know joy?' This is an old argument in the field of thinking about suffering and its stupidity and lack of sophistication could be plumbed for centuries but suffice it to say that the existence of broccoli does not, in any way, affect the taste of chocolate.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "You said you were going for a walk!? What kind of walk takes six hours?\"\"A long one?",
        "author": "Cassandra Clare,",
        "tags": [
            "mortal-instruments"
        ]
    },
    {
        "text": "Live the Life of Your Dreams: Be brave enough to live the life of your dreams according to your vision and purpose instead of the expectations and opinions of others.",
        "author": "Roy T. Bennett,",
        "tags": [
            "brave",
            "courage",
            "dreams",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "living",
            "motivation",
            "motivational",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "purpose",
            "vision"
        ]
    },
    {
        "text": "You're still trying to protect me. Real or not real,\" he whispers.\"Real,\" I answer. \"Because that's what you and I do, protect each other.",
        "author": "Suzanne Collins,",
        "tags": [
            "hunger-games",
            "katniss",
            "peeta"
        ]
    },
    {
        "text": "Religion has actually convinced people that there's an invisible man living in the sky who watches everything you do, every minute of every day. And the invisible man has a special list of ten things he does not want you to do. And if you do any of these ten things, he has a special place, full of fire and smoke and burning and torture and anguish, where he will send you to live and suffer and burn and choke and scream and cry forever and ever 'til the end of time! But He loves you. He loves you, and He needs money! He always needs money! He's all-powerful, all-perfect, all-knowing, and all-wise, somehow just can't handle money!",
        "author": "George Carlin",
        "tags": [
            "atheism",
            "humor",
            "life",
            "religion"
        ]
    },
    {
        "text": "Everyone sees what you appear to be, few experience what you really are.",
        "author": "Niccolò Machiavelli,",
        "tags": []
    },
    {
        "text": "Fantasy is a necessary ingredient in living, it's a way of looking at life through the wrong end of a telescope.",
        "author": "Dr. Seuss",
        "tags": []
    },
    {
        "text": "Many people, myself among them, feel better at the mere sight of a book.",
        "author": "Jane Smiley,",
        "tags": []
    },
    {
        "text": "I am very interested and fascinated how everyone loves each other, but no one really likes each other.",
        "author": "Stephen Chbosky,",
        "tags": [
            "moi"
        ]
    },
    {
        "text": "Don't ever tell anybody anything. If you do, you start missing everybody.",
        "author": "J. D. Salinger",
        "tags": [
            "salinger",
            "stories"
        ]
    },
    {
        "text": "Love doesn't just sit there, like a stone, it has to be made, like bread; remade all the time, made new.",
        "author": "Ursula K. Le Guin,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "To be nobody but yourself in a world which is doing its best day and night to make you like everybody else means to fight the hardest battle which any human being can fight and never stop fighting.",
        "author": "E.E. Cummings",
        "tags": [
            "poetry"
        ]
    },
    {
        "text": "Stories of imagination tend to upset those without one.",
        "author": "Terry Pratchett",
        "tags": [
            "fantasy",
            "humor",
            "imagination",
            "literature",
            "stories"
        ]
    },
    {
        "text": "You cannot protect yourself from sadness without protecting yourself from happiness.",
        "author": "Jonathan Safran Foer",
        "tags": [
            "happiness",
            "sadness"
        ]
    },
    {
        "text": "I don't know the question, but sex is definitely the answer.",
        "author": "Woody Allen",
        "tags": [
            "humor",
            "life",
            "sex"
        ]
    },
    {
        "text": "That is part of the beauty of all literature. You discover that your longings are universal longings, that you're not lonely and isolated from anyone. You belong.",
        "author": "F. Scott Fitzgerald",
        "tags": [
            "belonging",
            "company",
            "desires",
            "literature",
            "longings"
        ]
    },
    {
        "text": "Remember when you tried to convince me to feed a poultry pie to the mallards in the park to see if you could breed a race of cannibal ducks?\" \"They ate it too,\" Will reminisced. \"Bloodthirsty little beasts. Never trust a duck.",
        "author": "Cassandra Clare,",
        "tags": [
            "jem-carstairs",
            "will-herondale"
        ]
    },
    {
        "text": "Above all, be the heroine of your life, not the victim.",
        "author": "Nora Ephron",
        "tags": [
            "courage",
            "empowerment",
            "self-determination",
            "women"
        ]
    },
    {
        "text": "To go wrong in one's own way is better than to go right in someone else's.",
        "author": "Fyodor Dostoevsky,",
        "tags": [
            "independent-thought",
            "self-determination",
            "self-expression"
        ]
    },
    {
        "text": "If you have a garden and a library, you have everything you need.",
        "author": "Cicero",
        "tags": [
            "books"
        ]
    },
    {
        "text": "It may be unfair, but what happens in a few days, sometimes even a single day, can change the course of a whole lifetime...",
        "author": "Khaled Hosseini,",
        "tags": [
            "fair",
            "life"
        ]
    },
    {
        "text": "There comes a time when the world gets quiet and the only thing left is your own heart. So you'd better learn the sound of it. Otherwise you'll never understand what it's saying.",
        "author": "Sarah Dessen,",
        "tags": [
            "just-litsen",
            "sarah-dessen",
            "time"
        ]
    },
    {
        "text": "You have to die a few times before you can reallylive.",
        "author": "Charles Bukowski,",
        "tags": []
    },
    {
        "text": "The problem with the world is that the intelligent people are full of doubts, while the stupid ones are full of confidence.",
        "author": "Charles Bukowski",
        "tags": []
    },
    {
        "text": "What matters in life is not what happens to you but what you remember and how you remember it.",
        "author": "Gabriel Garcia Marquez",
        "tags": [
            "life-memories"
        ]
    },
    {
        "text": "Stupid people are dangerous.",
        "author": "Suzanne Collins,",
        "tags": []
    },
    {
        "text": "But luxury has never appealed to me, I like simple things, books, being alone, or with somebody who understands.",
        "author": "Daphne du Maurier",
        "tags": []
    },
    {
        "text": "Whatever it is you're seeking won't come in the form you're expecting.",
        "author": "Haruki Marukami",
        "tags": [
            "expectation"
        ]
    },
    {
        "text": "Life is a disease: sexually transmitted, and invariably fatal.",
        "author": "Neil Gaiman",
        "tags": []
    },
    {
        "text": "Imagine yourself as a living house. God comes in to rebuild that house. At first, perhaps, you can understand what He is doing. He is getting the drains right and stopping the leaks in the roof and so on; you knew that those jobs needed doing and so you are not surprised. But presently He starts knocking the house about in a way that hurts abominably and does not seem to make any sense. What on earth is He up to? The explanation is that He is building quite a different house from the one you thought of - throwing out a new wing here, putting on an extra floor there, running up towers, making courtyards. You thought you were being made into a decent little cottage: but He is building a palace. He intends to come and live in it Himself.",
        "author": "C.S. Lewis,",
        "tags": [
            "god-religion-house"
        ]
    },
    {
        "text": "Why fit in when you were born to stand out?",
        "author": "Dr. Seuss",
        "tags": [
            "seuss"
        ]
    },
    {
        "text": "That's the thing about books. They let you travel without moving your feet.",
        "author": "Jhumpa Lahiri,",
        "tags": []
    },
    {
        "text": "I have great faith in fools - self-confidence my friends will call it.",
        "author": "Edgar Allan Poe,",
        "tags": [
            "faith",
            "fool",
            "humor",
            "self-confidence",
            "self-irony"
        ]
    },
    {
        "text": "People are afraid of themselves, of their own reality; their feelings most of all. People talk about how great love is, but that’s bullshit. Love hurts. Feelings are disturbing. People are taught that pain is evil and dangerous. How can they deal with love if they’re afraid to feel? Pain is meant to wake us up. People try to hide their pain. But they’re wrong. Pain is something to carry, like a radio. You feel your strength in the experience of pain. It’s all in how you carry it. That’s what matters. Pain is a feeling. Your feelings are a part of you. Your own reality. If you feel ashamed of them, and hide them, you’re letting society destroy your reality. You should stand up for your right to feel your pain.",
        "author": "Jim Morrison",
        "tags": [
            "jim",
            "life",
            "morrison",
            "pain",
            "reality"
        ]
    },
    {
        "text": "Deadlines just aren't real to me until I'm staring one in the face.",
        "author": "Rick Riordan,",
        "tags": [
            "deadlines",
            "humor",
            "procrastinate"
        ]
    },
    {
        "text": "You must stay drunk on writing so reality cannot destroy you.",
        "author": "Ray Bradbury,",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "I lie to myself all the time. But I never believe me.",
        "author": "S.E. Hinton,",
        "tags": [
            "lies",
            "lying",
            "self-deception",
            "truth"
        ]
    },
    {
        "text": "Everyone should be able to do one card trick, tell two jokes, and recite three poems, in case they are ever trapped in an elevator.",
        "author": "Lemony Snicket,",
        "tags": [
            "funny"
        ]
    },
    {
        "text": "There are worse crimes than burning books. One of them is not reading them.",
        "author": "Joseph Brodsky",
        "tags": [
            "books",
            "censorship",
            "illiteracy",
            "reading"
        ]
    },
    {
        "text": "One day, in retrospect, the years of struggle will strike you as the most beautiful.",
        "author": "Sigmund Freud",
        "tags": [
            "inspirational-quotes"
        ]
    },
    {
        "text": "Prayer is not asking. It is a longing of the soul. It is daily admission of one's weakness. It is better in prayer to have a heart without words than words without a heart.",
        "author": "Mahatma Gandhi",
        "tags": [
            "god",
            "heart",
            "humanity",
            "inspirational",
            "prayer",
            "religion",
            "souls",
            "weakness"
        ]
    },
    {
        "text": "Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.",
        "author": "Roy T. Bennett",
        "tags": [
            "anger",
            "grudge",
            "happiness",
            "happy",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-quotes",
            "living",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "regret",
            "time",
            "worry"
        ]
    },
    {
        "text": "What I need is the dandelion in the spring. The bright yellow that means rebirth instead of destruction. The promise that life can go on, no matter how bad our losses. That it can be good again.",
        "author": "Suzanne Collins,",
        "tags": [
            "inspirational",
            "love"
        ]
    },
    {
        "text": "Remember: the time you feel lonely is the time you most need to be by yourself. Life's cruelest irony.",
        "author": "Douglas Coupland,",
        "tags": [
            "irony",
            "life",
            "loneliness"
        ]
    },
    {
        "text": "If you love somebody, let them go, for if they return, they were always yours. If they don't, they never were.",
        "author": "Kahlil Gibran",
        "tags": []
    },
    {
        "text": "I think God, in creating man, somewhat overestimated his ability.",
        "author": "Oscar Wilde",
        "tags": [
            "creation",
            "god",
            "humor",
            "man"
        ]
    },
    {
        "text": "My ambition is handicapped by laziness",
        "author": "Charles Bukowski,",
        "tags": []
    },
    {
        "text": "To douchebags!\" he said, gesturing to Brad. \"And to girls that break your heart,\" he bowed his head to me. His eyes lost focus. \"And to the absolute fucking horror of losing your best friend because you were stupid enough to fall in love with her.",
        "author": "Jamie McGuire,",
        "tags": [
            "best-friends",
            "heartbreak",
            "love"
        ]
    },
    {
        "text": "Don't JustDon't just learn, experience.Don't just read, absorb.Don't just change, transform.Don't just relate, advocate.Don't just promise, prove.Don't just criticize, encourage.Don't just think, ponder.Don't just take, give.Don't just see, feel.Don’t just dream, do. Don't just hear, listen.Don't just talk, act.Don't just tell, show.Don't just exist, live.",
        "author": "Roy T. Bennett,",
        "tags": [
            "act",
            "action",
            "change",
            "criticize",
            "doing",
            "dream",
            "dreams",
            "encouragement",
            "experience",
            "feeling",
            "giving",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quote",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "learning",
            "life",
            "life-and-living",
            "life-lessons",
            "life-philosophy",
            "life-quotes",
            "listening",
            "living",
            "optimism",
            "optimistic",
            "ponder",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "thinking",
            "transform"
        ]
    },
    {
        "text": "I do not fear death. I had been dead for billions and billions of years before I was born, and had not suffered the slightest inconvenience from it.",
        "author": "Mark Twain",
        "tags": [
            "death",
            "inspirational"
        ]
    },
    {
        "text": "If you're looking for sympathy you'll find it between shit and syphilis in the dictionary.",
        "author": "David Sedaris,",
        "tags": [
            "sympathy"
        ]
    },
    {
        "text": "It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.",
        "author": "J.R.R. Tolkien,",
        "tags": []
    },
    {
        "text": "Man may have discovered fire, but women discovered how to play with it.",
        "author": "Candace Bushnell,",
        "tags": [
            "love",
            "relationships"
        ]
    },
    {
        "text": "A WOMAN SHOULD HAVE .... enough money within her control to move out and rent a place of her own even if she never wants to or needs to... A WOMAN SHOULD HAVE .... something perfect to wear if the employer or date of her dreams wants to see her in an hour... A WOMAN SHOULD HAVE ... a youth she's content to leave behind.... A WOMAN SHOULD HAVE .... a past juicy enough that she's looking forward to retelling it in her old age.... A WOMAN SHOULD HAVE ..... a set of screwdrivers, a cordless drill, and a black lace bra... A WOMAN SHOULD HAVE .... one friend who always makes her laugh... and one who lets her cry... A WOMAN SHOULD HAVE .... a good piece of furniture not previously owned by anyone else in her family... A WOMAN SHOULD HAVE .... eight matching plates, wine glasses with stems, and a recipe for a meal that will make her guests feel honored... A WOMAN SHOULD HAVE .... a feeling of control over her destiny... EVERY WOMAN SHOULD KNOW... how to fall in love without losing herself.. EVERY WOMAN SHOULD KNOW... HOW TO QUIT A JOB, BREAK UP WITH A LOVER, AND CONFRONT A FRIEND WITHOUT RUINING THE FRIENDSHIP... EVERY WOMAN SHOULD KNOW... when to try harder... and WHEN TO WALK AWAY... EVERY WOMAN SHOULD KNOW... that she can't change the length of her calves, the width of her hips, or the nature of her parents.. EVERY WOMAN SHOULD KNOW... that her childhood may not have been perfect...but it's over... EVERY WOMAN SHOULD KNOW... what she would and wouldn't do for love or more... EVERY WOMAN SHOULD KNOW... how to live alone... even if she doesn't like it... EVERY WOMAN SHOULD KNOW... whom she can trust, whom she can't, and why she shouldn't take it personally... EVERY WOMAN SHOULD KNOW... where to go... be it to her best friend's kitchen table... or a charming inn in the woods... when her soul needs soothing... EVERY WOMAN SHOULD KNOW... what she can and can't accomplish in a day... a month...and a year...",
        "author": "Pamela Redmond Satran",
        "tags": []
    },
    {
        "text": "But I don’t want to go among mad people,\" Alice remarked.\"Oh, you can’t help that,\" said the Cat: \"we’re all mad here. I’m mad. You’re mad.\"\"How do you know I’m mad?\" said Alice.\"You must be,\" said the Cat, \"or you wouldn’t have come here.",
        "author": "Lewis Carroll,",
        "tags": [
            "alice-s-adventures-in-wonderland"
        ]
    },
    {
        "text": "Kaz leaned back. \"What's the easiest way to steal a man's wallet?\"\"Knife to the throat?\" asked Inej.\"Gun to the back?\" said Jesper.\"Poison in his cup?\" suggested Nina.\"You're all horrible,\" said Matthias.",
        "author": "Leigh Bardugo,",
        "tags": []
    },
    {
        "text": "There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man.",
        "author": "Patrick Rothfuss,",
        "tags": [
            "fear",
            "name-of-the-wind",
            "patrick-rothfuss",
            "wisdom"
        ]
    },
    {
        "text": "Books are my friends, my companions. They make me laugh and cry and find meaning in life.",
        "author": "Christopher Paolini,",
        "tags": [
            "books",
            "christopher-paolini",
            "eragon",
            "good-reads"
        ]
    },
    {
        "text": "Why do you go away? So that you can come back. So that you can see the place you came from with new eyes and extra colors. And the people there see you differently, too. Coming back to where you started is not the same as never leaving.",
        "author": "Terry Pratchett,",
        "tags": [
            "adventure",
            "change",
            "discworld",
            "growth",
            "travel"
        ]
    },
    {
        "text": "If you are going through hell, keep going.",
        "author": "Winston S. Churchill",
        "tags": [
            "hell",
            "perseverance"
        ]
    },
    {
        "text": "Some tourists think Amsterdam is a city of sin, but in truth it is a city of freedom. And in freedom, most people find sin.",
        "author": "John Green,",
        "tags": [
            "amsterdam",
            "freedom",
            "sin"
        ]
    },
    {
        "text": "You cannot swim for new horizons until you have courage to lose sight of the shore.",
        "author": "William Faulkner",
        "tags": [
            "courage",
            "determination",
            "hope",
            "risk"
        ]
    },
    {
        "text": "Education is the most powerful weapon which you can use to change the world.",
        "author": "Nelson Mandela",
        "tags": [
            "change",
            "education"
        ]
    },
    {
        "text": "It isn't what you have or who you are or where you are or what you are doing that makes you happy or unhappy. It is what you think about it.",
        "author": "Dale Carnegie,",
        "tags": [
            "attitude",
            "contentment",
            "happiness",
            "inspirational",
            "life"
        ]
    },
    {
        "text": "I never travel without my diary. One should always have something sensational to read in the train.",
        "author": "Oscar Wilde,",
        "tags": [
            "drama",
            "humor",
            "plays"
        ]
    },
    {
        "text": "Nothing of me is original. I am the combined effort of everyone I've ever known.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "identity",
            "originality"
        ]
    },
    {
        "text": "Laughter is timeless. Imagination has no age. And dreams are forever.",
        "author": "Walt Disney",
        "tags": []
    },
    {
        "text": "I have found the paradox, that if you love until it hurts, there can be no more hurt, only more love.",
        "author": "Daphne Rae,",
        "tags": [
            "misattributed-to-mother-teresa"
        ]
    },
    {
        "text": "As usual, there is a great woman behind every idiot.",
        "author": "John Lennon",
        "tags": [
            "beatles",
            "men",
            "women"
        ]
    },
    {
        "text": "I have never listened to anyone who criticized my taste in space travel, sideshows or gorillas. When this occurs, I pack up my dinosaurs and leave the room.",
        "author": "Ray Bradbury,",
        "tags": [
            "humour",
            "individuality",
            "science-fiction"
        ]
    },
    {
        "text": "I don't trust people who don't love themselves and tell me, 'I love you.' ... There is an African saying which is: Be careful when a naked person offers you a shirt.",
        "author": "Maya Angelou",
        "tags": [
            "1997",
            "annie-clark-tanner-lecture"
        ]
    },
    {
        "text": "They love their hair because they're not smart enough to love something more interesting.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
        "author": "Rumi",
        "tags": [
            "change",
            "cleverness",
            "misattributed",
            "self",
            "wisdom",
            "world"
        ]
    },
    {
        "text": "Beneath the makeup and behind the smile I am just a girl who wishes for the world.",
        "author": "Marilyn Monroe",
        "tags": [
            "attributed-no-source",
            "girl",
            "makeup",
            "world"
        ]
    },
    {
        "text": "But who prays for Satan? Who, in eighteen centuries, has had the common humanity to pray for the one sinner that needed it most?",
        "author": "Mark Twain",
        "tags": [
            "humor-satan"
        ]
    },
    {
        "text": "Life is pain, highness. Anyone who says differently is selling something.",
        "author": "William Goldman,",
        "tags": [
            "life",
            "pain"
        ]
    },
    {
        "text": "I like your Christ, I do not like your Christians. Your Christians are so unlike your Christ.",
        "author": "Mahatma Gandhi",
        "tags": [
            "anti-christian",
            "christianity",
            "christians",
            "jesus-christ"
        ]
    },
    {
        "text": "The difference between the almost right word and the right word is really a large matter. ’tis the difference between the lightning bug and the lightning.",
        "author": "Mark Twain,",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "That does it,\" said Jace. \"I'm going to get you a dictionary for Christmas this year.\"\"Why?\" Isabelle said.\"So you can look up 'fun.' I'm not sure you know what it means.",
        "author": "Cassandra Clare,",
        "tags": [
            "dictionary",
            "fun",
            "humor",
            "isabelle-lightwood",
            "jace-wayland"
        ]
    },
    {
        "text": "Angry people are not always wise.",
        "author": "Jane Austen,",
        "tags": [
            "anger",
            "jane-austen",
            "wisdom"
        ]
    },
    {
        "text": "Time flies like an arrow; fruit flies like a banana.",
        "author": "Anthony G. Oettinger",
        "tags": [
            "humor",
            "misattributed-to-groucho-marx",
            "time"
        ]
    },
    {
        "text": "It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.",
        "author": "Roy T. Bennett",
        "tags": [
            "change",
            "focus",
            "grow",
            "growth",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "leader",
            "leaders",
            "leadership",
            "life",
            "life-quotes",
            "living",
            "motivation",
            "motivational",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "stay-focused",
            "step-out-of-comfort-zone",
            "transform"
        ]
    },
    {
        "text": "Never be afraid to raise your voice for honesty and truth and compassion against injustice and lying and greed. If people all over the world...would do this, it would change the earth.",
        "author": "William Faulkner",
        "tags": [
            "advocacy",
            "dissent",
            "protest",
            "truth",
            "truth-telling"
        ]
    },
    {
        "text": "Love does not consist of gazing at each other, but in looking outward together in the same direction.",
        "author": "Antoine de Saint-Exupéry,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Don't let the expectations and opinions of other people affect your decisions. It's your life, not theirs. Do what matters most to you; do what makes you feel alive and happy. Don't let the expectations and ideas of others limit who you are. If you let others tell you who you are, you are living their reality — not yours. There is more to life than pleasing people. There is much more to life than following others' prescribed path. There is so much more to life than what you experience right now. You need to decide who you are for yourself. Become a whole being. Adventure.",
        "author": "Roy T. Bennett",
        "tags": [
            "action",
            "adventure",
            "authentic-living",
            "authentic-self",
            "authenticity",
            "confidence",
            "experience",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-quotes",
            "living",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "who-you-are",
            "whole-being"
        ]
    },
    {
        "text": "Resist much, obey little.",
        "author": "Walt Whitman,",
        "tags": [
            "poetry"
        ]
    },
    {
        "text": "When a man gives his opinion, he's a man. When a woman gives her opinion, she's a bitch.",
        "author": "Bette Davis",
        "tags": [
            "clichés",
            "double-standards",
            "empowerment",
            "feminism",
            "gender",
            "hypocrisy",
            "misogyny",
            "opinions",
            "speaking-out",
            "stereotypes",
            "women"
        ]
    },
    {
        "text": "What I want is to be needed. What I need is to be indispensable to somebody. Who I need is somebody that will eat up all my free time, my ego, my attention. Somebody addicted to me. A mutual addiction.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Being crazy isn't enough.",
        "author": "Dr. Seuss",
        "tags": []
    },
    {
        "text": "No book is really worth reading at the age of ten which is not equally – and often far more – worth reading at the age of fifty and beyond.",
        "author": "C.S. Lewis",
        "tags": [
            "age",
            "books",
            "re-reading",
            "reading"
        ]
    },
    {
        "text": "I don't go looking for trouble. Trouble usually finds me.",
        "author": "Katie McGarry,",
        "tags": [
            "trouble"
        ]
    },
    {
        "text": "Reading was my escape and my comfort, my consolation, my stimulant of choice: reading for the pure pleasure of it, for the beautiful stillness that surrounds you when you hear an author's words reverberating in your head.",
        "author": "Paul Auster,",
        "tags": []
    },
    {
        "text": "Even if you cannot change all the people around you, you can change the people you choose to be around. Life is too short to waste your time on people who don’t respect, appreciate, and value you. Spend your life with people who make you smile, laugh, and feel loved.",
        "author": "Roy T. Bennett,",
        "tags": [
            "appreciate",
            "change",
            "happiness",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "laugh",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "living",
            "love",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "relationship",
            "respect",
            "smile",
            "value"
        ]
    },
    {
        "text": "It was love at first sight, at last sight, at ever and ever sight.",
        "author": "Vladimir Nabokov,",
        "tags": [
            "humbert-humbert",
            "love"
        ]
    },
    {
        "text": "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
        "author": "Confucious",
        "tags": [
            "wisdom"
        ]
    },
    {
        "text": "To be a Christian means to forgive the inexcusable because God has forgiven the inexcusable in you.",
        "author": "C.S. Lewis",
        "tags": [
            "christianity",
            "forgiveness",
            "god"
        ]
    },
    {
        "text": "Every child is an artist. The problem is how to remain an artist once he grows up.",
        "author": "Pablo Picasso",
        "tags": [
            "attributed-no-source"
        ]
    },
    {
        "text": "I don't want to die without any scars.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "death",
            "scars",
            "tyler-durden"
        ]
    },
    {
        "text": "And perhaps it is the greater grief, after all, to be left on earth when another is gone.",
        "author": "Madeline Miller,",
        "tags": [
            "quotes"
        ]
    },
    {
        "text": "I like living. I have sometimes been wildly, despairingly, acutely miserable, racked with sorrow; but through it all I still know quite certainly that just to be alive is a grand thing.",
        "author": "Agatha Christie",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "A girl should be two things: classy and fabulous.",
        "author": "Coco Chanel",
        "tags": [
            "beauty",
            "class",
            "fashion",
            "girls",
            "women"
        ]
    },
    {
        "text": "It hurts to let go. Sometimes it seems the harder you try to hold on to something or someone the more it wants to get away. You feel like some kind of criminal for having felt, for having wanted. For having wanted to be wanted. It confuses you, because you think that your feelings were wrong and it makes you feel so small because it's so hard to keep it inside when you let it out and it doesn't coma back. You're left so alone that you can't explain. Damn, there's nothing like that, is there? I've been there and you have too. You're nodding your head.",
        "author": "Henry Rollins,",
        "tags": [
            "life",
            "love",
            "relationships"
        ]
    },
    {
        "text": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt",
        "tags": [
            "dreams",
            "future",
            "inspirational",
            "misattributed-eleanor-roosevelt"
        ]
    },
    {
        "text": "My daddy said, that the first time you fall in love, it changes you forever and no matter how hard you try, that feeling just never goes away.",
        "author": "Nicholas Sparks,",
        "tags": []
    },
    {
        "text": "You cannot control the behavior of others, but you can always choose how you respond to it.",
        "author": "Roy T. Bennett,",
        "tags": [
            "choices",
            "choose",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "living",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking"
        ]
    },
    {
        "text": "Some people feel the rain. Others just get wet.",
        "author": "Bob Marley",
        "tags": []
    },
    {
        "text": "Percy wouldn't notice a joke if it danced naked in front of him wearing one of Dobby's hats.",
        "author": "J.K. Rowling,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "When he shall die,Take him and cut him out in little stars,And he will make the face of heaven so fineThat all the world will be in love with nightAnd pay no worship to the garish sun.",
        "author": "William Shakespeare,",
        "tags": []
    },
    {
        "text": "Wow,\" Thalia muttered. \"Apollo is hot.\" \"He's the sun god,\" I said.\"That's not what I meant.",
        "author": "Rick Riordan,",
        "tags": [
            "apollo",
            "gods",
            "hot",
            "olympians",
            "percy-jackson",
            "sun",
            "thalia"
        ]
    },
    {
        "text": "Books are like mirrors: if a fool looks in, you cannot expect a genius to look out.",
        "author": "J.K. Rowling",
        "tags": [
            "books"
        ]
    },
    {
        "text": "With freedom, flowers, books, and the moon, who could not be perfectly happy?",
        "author": "Oscar Wilde,",
        "tags": []
    },
    {
        "text": "And, in the endThe love you takeis equal to the love you make.",
        "author": "Paul McCartney,",
        "tags": []
    },
    {
        "text": "I love people who make me laugh. I honestly think it's the thing I like most, to laugh. It cures a multitude of ills. It's probably the most important thing in a person.",
        "author": "Audrey Hepburn",
        "tags": []
    },
    {
        "text": "Truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn't.",
        "author": "Mark Twain,",
        "tags": [
            "books",
            "truth"
        ]
    },
    {
        "text": "I have a theory that selflessness and bravery aren't all that different.",
        "author": "Veronica Roth,",
        "tags": []
    },
    {
        "text": "Everything was beautiful and nothing hurt.",
        "author": "Kurt Vonnegut,",
        "tags": []
    },
    {
        "text": "I don't want to lose the boy with the bread.",
        "author": "Suzanne Collins,",
        "tags": []
    },
    {
        "text": "If he’s not calling you, it’s because you are not on his mind. If he creates expectations for you, and then doesn’t follow through on little things, he will do same for big things. Be aware of this and realize that he’s okay with disappointing you. Don’t be with someone who doesn’t do what they say they’re going to do. If he’s choosing not to make a simple effort that would put you at ease and bring harmony to a recurring fight, then he doesn’t respect your feelings and needs. Busy is another word for asshole. Asshole is another word for the guy you’re dating. You deserve a fcking phone call.",
        "author": "Greg Behrendt",
        "tags": [
            "busy",
            "call",
            "dating",
            "dating-advice",
            "faith",
            "greg-behrendt",
            "guys",
            "he-s-not-just-into-you",
            "love",
            "marriage",
            "romance",
            "true"
        ]
    },
    {
        "text": "Loyalty to country ALWAYS. Loyalty to government, when it deserves it.",
        "author": "Mark Twain",
        "tags": [
            "patriotism",
            "politics"
        ]
    },
    {
        "text": "I cannot remember the books I've read any more than the meals I have eaten; even so, they have made me.",
        "author": "Ralph Waldo Emerson",
        "tags": [
            "books",
            "reading",
            "we-are-what-we-eat",
            "we-are-what-we-read",
            "you-are-what-you-eat",
            "you-are-what-you-read"
        ]
    },
    {
        "text": "My tastes are simple: I am easily satisfied with the best.",
        "author": "Winston S. Churchill",
        "tags": [
            "humor",
            "taste"
        ]
    },
    {
        "text": "If music be the food of love, play on;Give me excess of it, that, surfeiting,The appetite may sicken, and so die.That strain again! it had a dying fall:O, it came o'er my ear like the sweet sound,That breathes upon a bank of violets,Stealing and giving odour! Enough; no more:'Tis not so sweet now as it was before.O spirit of love! how quick and fresh art thou,That, notwithstanding thy capacityReceiveth as the sea, nought enters there,Of what validity and pitch soe'er,But falls into abatement and low price,Even in a minute: so full of shapes is fancyThat it alone is high fantastical.",
        "author": "William Shakespeare,",
        "tags": [
            "music",
            "romance",
            "unrequited-love"
        ]
    },
    {
        "text": "Don't tell me the moon is shining; show me the glint of light on broken glass.",
        "author": "Anton Chekhov",
        "tags": [
            "broken-glass",
            "glass",
            "moon",
            "moonshine",
            "show-don-t-tell",
            "writing"
        ]
    },
    {
        "text": "More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate.",
        "author": "Roy T. Bennett,",
        "tags": [
            "authentic-living",
            "being-positive",
            "blessed",
            "compassion",
            "hate",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "judgment",
            "less-more",
            "life",
            "life-purpose",
            "life-quotes",
            "living",
            "love",
            "mind",
            "motivation",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "smile",
            "smiles",
            "spirituality",
            "stress",
            "stressed",
            "worry",
            "worrying"
        ]
    },
    {
        "text": "All grown-ups were once children... but only few of them remember it.",
        "author": "Antoine de Saint-Exupéry,",
        "tags": [
            "reminding"
        ]
    },
    {
        "text": "To define is to limit.",
        "author": "Oscar Wilde,",
        "tags": [
            "dandy",
            "lord-henry-wotton",
            "wilde"
        ]
    },
    {
        "text": "The so-called ‘psychotically depressed’ person who tries to kill herself doesn’t do so out of quote ‘hopelessness’ or any abstract conviction that life’s assets and debits do not square. And surely not because death seems suddenly appealing. The person in whom Its invisible agony reaches a certain unendurable level will kill herself the same way a trapped person will eventually jump from the window of a burning high-rise. Make no mistake about people who leap from burning windows. Their terror of falling from a great height is still just as great as it would be for you or me standing speculatively at the same window just checking out the view; i.e. the fear of falling remains a constant. The variable here is the other terror, the fire’s flames: when the flames get close enough, falling to death becomes the slightly less terrible of two terrors. It’s not desiring the fall; it’s terror of the flames. And yet nobody down on the sidewalk, looking up and yelling ‘Don’t!’ and ‘Hang on!’, can understand the jump. Not really. You’d have to have personally been trapped and felt flames to really understand a terror way beyond falling.",
        "author": "David Foster Wallace",
        "tags": []
    },
    {
        "text": "Everybody has a secret world inside of them. I mean everybody. All of the people in the whole world, I mean everybody — no matter how dull and boring they are on the outside. Inside them they've all got unimaginable, magnificent, wonderful, stupid, amazing worlds... Not just one world. Hundreds of them. Thousands, maybe.",
        "author": "Neil Gaiman,",
        "tags": []
    },
    {
        "text": "I don't mind living in a man's world, as long as I can be a woman in it.",
        "author": "Marilyn Monroe,",
        "tags": []
    },
    {
        "text": "Like most misery, it started with apparent happiness.",
        "author": "Markus Zusak,",
        "tags": []
    },
    {
        "text": "You do not write your life with words...You write it with actions. What you think is not important. It is only important what you do.",
        "author": "Patrick Ness,",
        "tags": [
            "philosophy",
            "wisdom"
        ]
    },
    {
        "text": "Fiction is the truth inside the lie.",
        "author": "Stephen King",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "And now these three remain: faith, hope and love. But the greatest of these is love.",
        "author": "Anonymous,",
        "tags": [
            "faith",
            "god",
            "hope",
            "love"
        ]
    },
    {
        "text": "There are too many books I haven’t read, too many places I haven’t seen, too many memories I haven’t kept long enough.",
        "author": "Irwin Shaw",
        "tags": []
    },
    {
        "text": "Fire is catching! And if we burn, you burn with us!",
        "author": "Suzanne Collins,",
        "tags": [
            "mockingjay"
        ]
    },
    {
        "text": "It's strange because sometimes, I read a book, and I think I am the people in the book.",
        "author": "Stephen Chbosky,",
        "tags": [
            "books-reading"
        ]
    },
    {
        "text": "Show me a hero, and I'll write you a tragedy.",
        "author": "F. Scott Fitzgerald",
        "tags": [
            "f-scott-fitzgerald"
        ]
    },
    {
        "text": "She is too fond of books, and it has turned her brain.",
        "author": "Louisa May Alcott,",
        "tags": [
            "books"
        ]
    },
    {
        "text": "I will not say: do not weep; for not all tears are an evil.",
        "author": "J.R.R. Tolkien,",
        "tags": [
            "gandalf",
            "grief"
        ]
    },
    {
        "text": "It's just that I don't want to be somebody's crush. If somebody likes me, I want them to like the real me, not what they think I am. And I don't want them to carry it around inside. I want them to show me, so I can feel it too.",
        "author": "Stephen Chbosky,",
        "tags": []
    },
    {
        "text": "Be patient toward all that is unsolved in your heart and try to love the questions themselves, like locked rooms and like books that are now written in a very foreign tongue. Do not now seek the answers, which cannot be given you because you would not be able to live them. And the point is, to live everything. Live the questions now. Perhaps you will then gradually, without noticing it, live along some distant day into the answer.",
        "author": "Rainer Maria Rilke",
        "tags": [
            "ambiguity",
            "virtue"
        ]
    },
    {
        "text": "Why do people have to be this lonely? What's the point of it all? Millions of people in this world, all of them yearning, looking to others to satisfy them, yet isolating themselves. Why? Was the earth put here just to nourish human loneliness?",
        "author": "Haruki Murakami,",
        "tags": [
            "isolation",
            "loneliness",
            "sadness"
        ]
    },
    {
        "text": "My nightmares are usually about losing you. I'm okay once I realize you're here.",
        "author": "Suzanne Collins,",
        "tags": [
            "romantic"
        ]
    },
    {
        "text": "Simplicity, patience, compassion.These three are your greatest treasures.Simple in actions and thoughts, you return to the source of being.Patient with both friends and enemies,you accord with the way things are.Compassionate toward yourself,you reconcile all beings in the world.",
        "author": "Lao Tzu,",
        "tags": [
            "inspirational",
            "life",
            "philosophy"
        ]
    },
    {
        "text": "She generally gave herself very good advice, (though she very seldom followed it).",
        "author": "Lewis Carroll,",
        "tags": []
    },
    {
        "text": "The fact that we live at the bottom of a deep gravity well, on the surface of a gas covered planet going around a nuclear fireball 90 million miles away and think this to be normal is obviously some indication of how skewed our perspective tends to be.",
        "author": "Douglas Adams,",
        "tags": [
            "humor",
            "perspective",
            "science"
        ]
    },
    {
        "text": "In the case of good books, the point is not to see how many of them you can get through, but rather how many can get through to you.",
        "author": "Mortimer J. Adler",
        "tags": [
            "books",
            "reading"
        ]
    },
    {
        "text": "You have power over your mind - not outside events. Realize this, and you will find strength.",
        "author": "Marcus Aurelius,",
        "tags": [
            "ataraxy",
            "inner-strength",
            "inspiration",
            "self-control",
            "strength"
        ]
    },
    {
        "text": "Love conquers all,\" Aphrodite promised. \"Look at Helen and Paris. Did they let anything come between them?\"\"Didn't they start the Trojan War and get thousands of people killed?\"\"Pfft. That's not the point. Follow your heart.",
        "author": "Rick Riordan,",
        "tags": [
            "humor",
            "true-love"
        ]
    },
    {
        "text": "It's a metaphor, see: You put the killing thing right between your teeth, but you don't give it the power to do its killing.",
        "author": "John Green,",
        "tags": [
            "john-green",
            "the-fault-in-our-stars"
        ]
    },
    {
        "text": "What you seek is seeking you.",
        "author": "Mawlana Jalal-al-Din Rumi",
        "tags": [
            "attraction",
            "rumi",
            "sufi"
        ]
    },
    {
        "text": "The nicest thing for me is sleep, then at least I can dream.",
        "author": "Marilyn Monroe",
        "tags": []
    },
    {
        "text": "Let there be spaces in your togetherness, And let the winds of the heavens dance between you. Love one another but make not a bond of love: Let it rather be a moving sea between the shores of your souls. Fill each other's cup but drink not from one cup. Give one another of your bread but eat not from the same loaf. Sing and dance together and be joyous, but let each one of you be alone, Even as the strings of a lute are alone though they quiver with the same music. Give your hearts, but not into each other's keeping. For only the hand of Life can contain your hearts. And stand together, yet not too near together: For the pillars of the temple stand apart, And the oak tree and the cypress grow not in each other's shadow.",
        "author": "Khalil Gibran,",
        "tags": [
            "love",
            "marriage"
        ]
    },
    {
        "text": "People generally see what they look for, and hear what they listen for.",
        "author": "Harper Lee,",
        "tags": []
    },
    {
        "text": "I was never really insane except upon occasions when my heart was touched.",
        "author": "Edgar Allan Poe",
        "tags": [
            "inspiration"
        ]
    },
    {
        "text": "Sometimes people don't want to hear the truth because they don't want their illusions destroyed.",
        "author": "Friedrich Nietzsche",
        "tags": []
    },
    {
        "text": "The most important things are the hardest to say. They are the things you get ashamed of, because words diminish them -- words shrink things that seemed limitless when they were in your head to no more than living size when they're brought out. But it's more than that, isn't it? The most important things lie too close to wherever your secret heart is buried, like landmarks to a treasure your enemies would love to steal away. And you may make revelations that cost you dearly only to have people look at you in a funny way, not understanding what you've said at all, or why you thought it was so important that you almost cried while you were saying it. That's the worst, I think. When the secret stays locked within not for want of a teller but for want of an understanding ear.",
        "author": "Stephen King",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "Death must be so beautiful. To lie in the soft brown earth, with the grasses waving above one's head, and listen to silence. To have no yesterday, and no tomorrow. To forget time, to forgive life, to be at peace.",
        "author": "Oscar Wilde,",
        "tags": []
    },
    {
        "text": "I am not sure exactly what heaven will be like, but I know that when we die and it comes time for God to judge us, He will not ask, 'How many good things have you done in your life?' rather He will ask, 'How much love did you put into what you did?",
        "author": "Mother Teresa",
        "tags": [
            "inspirational",
            "love"
        ]
    },
    {
        "text": "We’re all seeking that special person who is right for us. But if you’ve been through enough relationships, you begin to suspect there’s no right person, just different flavors of wrong. Why is this? Because you yourself are wrong in some way, and you seek out partners who are wrong in some complementary way. But it takes a lot of living to grow fully into your own wrongness. And it isn’t until you finally run up against your deepest demons, your unsolvable problems—the ones that make you truly who you are—that we’re ready to find a lifelong mate. Only then do you finally know what you’re looking for. You’re looking for the wrong person. But not just any wrong person: it's got to be the right wrong person—someone you lovingly gaze upon and think, This is the problem I want to have.I will find that special person who is wrong for me in just the right way.",
        "author": "Andrew  Boyd,",
        "tags": [
            "being-loved",
            "completion",
            "inspirational",
            "love",
            "relationships"
        ]
    },
    {
        "text": "Life should not be a journey to the grave with the intention of arriving safely in a pretty and well preserved body, but rather to skid in broadside in a cloud of smoke, thoroughly used up, totally worn out, and loudly proclaiming \"Wow! What a Ride!",
        "author": "Hunter S. Thompson,",
        "tags": [
            "adventure",
            "death",
            "life"
        ]
    },
    {
        "text": "What is an \"instant\" death anyway? How long is an instant? Is it one second? Ten? The pain of those seconds must have been awful as her heart burst and her lungs collapsed and there was no air and no blood to her brain and only raw panic. What the hell is instant? Nothing is instant. Instant rice takes five minutes, instant pudding an hour. I doubt that an instant of blinding pain feels particularly instantaneous.",
        "author": "John Green,",
        "tags": [
            "looking-for-alaska"
        ]
    },
    {
        "text": "No medicine cures what happiness cannot.",
        "author": "Gabriel García Márquez",
        "tags": [
            "happiness"
        ]
    },
    {
        "text": "The road to hell is paved with adverbs.",
        "author": "Stephen King,",
        "tags": []
    },
    {
        "text": "Beauty is terror. Whatever we call beautiful, we quiver before it.",
        "author": "Donna Tartt,",
        "tags": []
    },
    {
        "text": "The worst part of holding the memories is not the pain. It's the loneliness of it. Memories need to be shared.",
        "author": "Lois Lowry,",
        "tags": [
            "loneliness",
            "memories",
            "pain",
            "share"
        ]
    },
    {
        "text": "If you look for perfection, you'll never be content.",
        "author": "Leo Tolstoy,",
        "tags": [
            "perfection"
        ]
    },
    {
        "text": "He who has a why to live for can bear almost any how.",
        "author": "Friedrich Nietzsche",
        "tags": [
            "how",
            "life",
            "purpose",
            "questioning",
            "questions",
            "why"
        ]
    },
    {
        "text": "Will looked horrified. \"What kind of monster could possibly hate chocolate?",
        "author": "Cassandra Clare,",
        "tags": [
            "chocolate",
            "monsters"
        ]
    },
    {
        "text": "Fear doesn't shut you down; it wakes you up",
        "author": "Veronica Roth,",
        "tags": [
            "divergent",
            "fear"
        ]
    },
    {
        "text": "Freedom is not worth having if it does not include the freedom to make mistakes.",
        "author": "Mahatma Gandhi",
        "tags": [
            "freedom",
            "humanity",
            "mistakes"
        ]
    },
    {
        "text": "Love is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell.",
        "author": "Joan Crawford",
        "tags": []
    },
    {
        "text": "But I know, somehow, that only when it is dark enough can you see the stars.",
        "author": "Martin Luther King, Jr.",
        "tags": [
            "hope",
            "inspirational"
        ]
    },
    {
        "text": "Books are the mirrors of the soul.",
        "author": "Virginia Woolf,",
        "tags": [
            "books",
            "metaphor",
            "soul"
        ]
    },
    {
        "text": "The town was paper, but the memories were not.",
        "author": "John Green,",
        "tags": [
            "memories"
        ]
    },
    {
        "text": "I hate to hear you talk about all women as if they were fine ladies instead of rational creatures. None of us want to be in calm waters all our lives.",
        "author": "Jane Austen,",
        "tags": []
    },
    {
        "text": "I did then what I knew how to do. Now that I know better, I do better.",
        "author": "Maya Angelou",
        "tags": [
            "attributed",
            "attributed-no-source",
            "education",
            "intelligence",
            "knowledge",
            "unsourced"
        ]
    },
    {
        "text": "Everyone seems to have a clear idea of how other people should lead their lives, but none about his or her own.",
        "author": "Paulo Coelho,",
        "tags": []
    },
    {
        "text": "It is good to love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is well done.",
        "author": "Vincent Van Gogh",
        "tags": [
            "art",
            "inspiration",
            "love",
            "strength"
        ]
    },
    {
        "text": "It kills me sometimes, how people die.",
        "author": "Markus Zusak,",
        "tags": [
            "death"
        ]
    },
    {
        "text": "because nerds like us are allowed to be unironically enthusiastic about stuff. Nerds are allowed to love stuff, like jump-up-and-down-in-the-chair-can’t-control-yourself love it. Hank, when people call people nerds, mostly what they’re saying is ‘you like stuff.’ Which is just not a good insult at all. Like, ‘you are too enthusiastic about the miracle of human consciousness’.",
        "author": "John Green",
        "tags": [
            "nerdfighters"
        ]
    },
    {
        "text": "Maybe 'okay' will be our 'always",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "Unbeing dead isn't being alive.",
        "author": "E. E. Cummings",
        "tags": [
            "death",
            "life",
            "poetry"
        ]
    },
    {
        "text": "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        "author": "Robert Louis Stevenson",
        "tags": [
            "day",
            "inspirational",
            "judge",
            "plant",
            "reap",
            "seed",
            "seeds",
            "sow"
        ]
    },
    {
        "text": "You haven't got a letter on yours,\" George observed. \"I suppose she thinks you don't forget your name. But we're not stupid-we know we're called Gred and Forge.",
        "author": "J.K. Rowling,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "Nobody likes being alone that much. I don't go out of my way to make friends, that's all. It just leads to disappointment.",
        "author": "Haruki Murakami,",
        "tags": []
    },
    {
        "text": "Nobody can hurt me without my permission.",
        "author": "Mahatma Gandhi",
        "tags": [
            "fighting",
            "hurt",
            "inner-peace",
            "peace",
            "permission",
            "strength",
            "trial"
        ]
    },
    {
        "text": "Life's under no obligation to give us what we expect.",
        "author": "Margaret Mitchell",
        "tags": [
            "expectation",
            "hope",
            "life"
        ]
    },
    {
        "text": "The past is a place of reference, not a place of residence; the past is a place of learning, not a place of living.",
        "author": "Roy T. Bennett,",
        "tags": [
            "inspirational",
            "life-and-living",
            "life-lessons"
        ]
    },
    {
        "text": "I think... if it is true that there are as many minds as there are heads, then there are as many kinds of love as there are hearts.",
        "author": "Leo Tolstoy,",
        "tags": [
            "care",
            "diversity",
            "heart",
            "individuality",
            "love",
            "mind",
            "seduction",
            "soul"
        ]
    },
    {
        "text": "Live, travel, adventure, bless, and don't be sorry.",
        "author": "Jack Kerouac",
        "tags": []
    },
    {
        "text": "Fantasy is escapist, and that is its glory. If a soldier is imprisioned by the enemy, don't we consider it his duty to escape?. . .If we value the freedom of mind and soul, if we're partisans of liberty, then it's our plain duty to escape, and to take as many people with us as we can!",
        "author": "J.R.R. Tolkien",
        "tags": [
            "fantasy",
            "literature",
            "philosophy"
        ]
    },
    {
        "text": "Be careful of love. It'll twist your brain around and leave you thinking up is down and right is wrong.",
        "author": "Rick Riordan,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Happiness is having a large, loving, caring, close-knit family in another city.",
        "author": "George Burns",
        "tags": [
            "family",
            "happiness",
            "humor"
        ]
    },
    {
        "text": "I am a badass, and I recognize that you, too, are a badass.",
        "author": "Cassandra Clare",
        "tags": [
            "simon"
        ]
    },
    {
        "text": "You are the answer to every prayer I've offered. You are a song, a dream, a whisper, and I don't know how I could have lived without you for as long as I have.",
        "author": "Nicholas Sparks,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "There is nothing in the world so irresistibly contagious as laughter and good humor.",
        "author": "Charles Dickens,",
        "tags": [
            "humor",
            "laughter"
        ]
    },
    {
        "text": "I read so I can live more than one life in more than one place.",
        "author": "Anne Tyler",
        "tags": []
    },
    {
        "text": "My dear,Find what you love and let it kill you.Let it drain you of your all. Let it cling onto your back and weigh you down into eventual nothingness.Let it kill you and let it devour your remains.For all things will kill you, both slowly and fastly, but it’s much better to be killed by a lover.~ Falsely yours",
        "author": "Kinky Friedman",
        "tags": [
            "death",
            "love"
        ]
    },
    {
        "text": "If pain must come, may it come quickly. Because I have a life to live, and I need to live it in the best way possible. If he has to make a choice, may he make it now. Then I will either wait for him or forget him.",
        "author": "Paulo Coelho,",
        "tags": [
            "forgetting",
            "hope",
            "love",
            "pain",
            "suffering",
            "waiting"
        ]
    },
    {
        "text": "I don’t know if you’ve ever felt like that. That you wanted to sleep for a thousand years. Or just not exist. Or just not be aware that you do exist. Or something like that. I think wanting that is very morbid, but I want it when I get like this. That’s why I’m trying not to think. I just want it all to stop spinning.",
        "author": "Stephen Chbosky,",
        "tags": [
            "esist",
            "sleep",
            "spinning"
        ]
    },
    {
        "text": "Peter would probably throw a party if I stopped breathing.''Well,' he says, 'I would only go if there was cake.",
        "author": "Veronica Roth,",
        "tags": []
    },
    {
        "text": "People haven't always been there for me but music always has.",
        "author": "Taylor Swift",
        "tags": [
            "music"
        ]
    },
    {
        "text": "The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart",
        "author": "Helen Keller",
        "tags": [
            "by-anne-sullivan",
            "emotions",
            "feelings"
        ]
    },
    {
        "text": "None of us really changes over time. We only become more fully what we are.",
        "author": "Anne Rice,",
        "tags": []
    },
    {
        "text": "Words are, of course, the most powerful drug used by mankind.",
        "author": "Rudyard Kipling",
        "tags": [
            "words"
        ]
    },
    {
        "text": "What is hell? I maintain that it is the suffering of being unable to love.",
        "author": "Fyodor Dostoevsky,",
        "tags": [
            "hell",
            "love",
            "suffering"
        ]
    },
    {
        "text": "The truth does not change according to our ability to stomach it.",
        "author": "Flannery O'Connor",
        "tags": [
            "truth"
        ]
    },
    {
        "text": "I can feel Peeta press his forehead into my temple and he asks, 'So now that you've got me, what are you going to do with me?' I turn into him. 'Put you somewhere you can't get hurt.",
        "author": "Suzanne Collins,",
        "tags": [
            "love",
            "romance"
        ]
    },
    {
        "text": "He is half of my soul, as the poets say.",
        "author": "Madeline Miller,",
        "tags": [
            "inspirational",
            "love"
        ]
    },
    {
        "text": "I am haunted by humans.",
        "author": "Markus Zusak,",
        "tags": []
    },
    {
        "text": "Vanity and pride are different things, though the words are often used synonymously. A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us.",
        "author": "Jane Austen,",
        "tags": [
            "prejudice",
            "pride",
            "vanity"
        ]
    },
    {
        "text": "Wrinkles should merely indicate where the smiles have been.",
        "author": "Mark Twain",
        "tags": [
            "age"
        ]
    },
    {
        "text": "Life becomes easier and more beautiful when we can see the good in other people.",
        "author": "Roy T. Bennett",
        "tags": [
            "goodness",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "kindness",
            "life",
            "life-quotes",
            "living",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking"
        ]
    },
    {
        "text": "Fear cuts deeper than swords.",
        "author": "George R.R. Martin,",
        "tags": [
            "bravery",
            "fear"
        ]
    },
    {
        "text": "Angry, and half in love with her, and tremendously sorry, I turned away.",
        "author": "F. Scott Fitzgerald,",
        "tags": []
    },
    {
        "text": "Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.",
        "author": "Marcel Proust",
        "tags": [
            "gratitude",
            "happiness"
        ]
    },
    {
        "text": "You pierce my soul. I am half agony, half hope...I have loved none but you.",
        "author": "Jane Austen,",
        "tags": [
            "romantic"
        ]
    },
    {
        "text": "The most painful thing is losing yourself in the process of loving someone too much, and forgetting that you are special too.",
        "author": "Ernest Hemingway,",
        "tags": [
            "love",
            "pain",
            "relationships",
            "self"
        ]
    },
    {
        "text": "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
        "author": "Albert Einstein",
        "tags": [
            "change",
            "deep-thoughts",
            "thinking",
            "world"
        ]
    },
    {
        "text": "Without deviation from the norm, progress is not possible.",
        "author": "Frank Zappa",
        "tags": [
            "music",
            "philosophy",
            "progress"
        ]
    },
    {
        "text": "It is amazing how complete is the delusion that beauty is goodness.",
        "author": "Leo Tolstoy,",
        "tags": [
            "beauty",
            "delusion",
            "goodness",
            "lies",
            "self-deception",
            "wisdom"
        ]
    },
    {
        "text": "Do you think I am an automaton? — a machine without feelings? and can bear to have my morsel of bread snatched from my lips, and my drop of living water dashed from my cup? Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless? You think wrong! — I have as much soul as you — and full as much heart! And if God had gifted me with some beauty and much wealth, I should have made it as hard for you to leave me, as it is now for me to leave you. I am not talking to you now through the medium of custom, conventionalities, nor even of mortal flesh: it is my spirit that addresses your spirit; just as if both had passed through the grave, and we stood at God's feet, equal — as we are!",
        "author": "Charlotte Brontë,",
        "tags": [
            "chapter-xxiii"
        ]
    },
    {
        "text": "You probably wouldn’t worry about what people think of you if you could know how seldom they do.",
        "author": "Olin Miller",
        "tags": [
            "confidence",
            "misattributed-eleanor-roosevelt",
            "others",
            "think",
            "worry"
        ]
    },
    {
        "text": "Music was my refuge. I could crawl into the space between the notes and curl my back to loneliness.",
        "author": "Maya Angelou",
        "tags": [
            "loneliness",
            "music",
            "refuge"
        ]
    },
    {
        "text": "Don't order any of the faerie food,\" said Jace, looking at her over the top of his menu. \"It tends to make humans a little crazy. One minute you're munching a faerie plum, the next minute you're running naked down Madison Avenue with antlers on your head. Not,\" he added hastily, \"that this has ever happened to me.",
        "author": "Cassandra Clare,",
        "tags": [
            "cassandra-clare",
            "city-of-bones",
            "jace",
            "mortal-instruments"
        ]
    },
    {
        "text": "It's not denial. I'm just selective about the reality I accept.",
        "author": "Bill Watterson",
        "tags": []
    },
    {
        "text": "War is what happens when language fails.",
        "author": "Margaret Atwood",
        "tags": []
    },
    {
        "text": "The truth is, unless you let go, unless you forgive yourself, unless you forgive the situation, unless you realize that the situation is over, you cannot move forward.",
        "author": "Steve Maraboli,",
        "tags": [
            "forgiveness",
            "inspirational",
            "letting-go",
            "life",
            "motivational",
            "moving-forward",
            "truth"
        ]
    },
    {
        "text": "Let no man pull you so low as to hate him.",
        "author": "Martin Luther King Jr.,",
        "tags": [
            "hatred",
            "wisdom"
        ]
    },
    {
        "text": "Sometimes crying or laughing are the only options left, and laughing feels better right now.",
        "author": "Veronica Roth,",
        "tags": [
            "crying",
            "laughter",
            "options"
        ]
    },
    {
        "text": "I have something I need to tell you,\" he says. I run my fingers along the tendons in his hands and look back at him. \"I might be in love with you.\" He smiles a little. \"I'm waiting until I'm sure to tell you, though.\"\"That's sensible of you,\" I say, smiling too. \"We should find some paper so you can make a list or a chart or something.\"I feel his laughter against my side, his nose sliding along my jaw, his lips pressing my ear.\"Maybe I'm already sure,\" he says, \"and I just don't want to frighten you.\"I laugh a little. \"Then you should know better.\"\"Fine,\" he says. \"Then I love you.",
        "author": "Veronica Roth,",
        "tags": [
            "beatrice",
            "divergent",
            "humor",
            "love",
            "tobias"
        ]
    },
    {
        "text": "Blessed is he who expects nothing, for he shall never be disappointed.",
        "author": "Alexander Pope",
        "tags": [
            "beatitudes",
            "disappointment",
            "expectations",
            "hope"
        ]
    },
    {
        "text": "Everything is possible. The impossible just takes longer.",
        "author": "Dan Brown,",
        "tags": []
    },
    {
        "text": "Friendship is the hardest thing in the world to explain. It's not something you learn in school. But if you haven't learned the meaning of friendship, you really haven't learned anything.",
        "author": "Muhammad Ali",
        "tags": [
            "friendship"
        ]
    },
    {
        "text": "None but ourselves can free our minds.",
        "author": "Bob Marley",
        "tags": [
            "bob-marley",
            "inspirational",
            "music",
            "reggae"
        ]
    },
    {
        "text": "Each friend represents a world in us, a world possibly not born until they arrive, and it is only by this meeting that a new world is born.",
        "author": "Anais Nin,",
        "tags": [
            "friendship"
        ]
    },
    {
        "text": "Let everything happen to youBeauty and terrorJust keep goingNo feeling is final",
        "author": "Rainer Maria Rilke",
        "tags": [
            "enjoy-life",
            "fearlessness",
            "live-in-the-moment"
        ]
    },
    {
        "text": "Why, sometimes I've believed as many as six impossible things before breakfast.",
        "author": "Lewis Carroll,",
        "tags": [
            "alice-in-wonderland",
            "breakfast",
            "carroll"
        ]
    },
    {
        "text": "Love does not begin and end the way we seem to think it does. Love is a battle, love is a war; love is a growing up.",
        "author": "James A. Baldwin",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Never say goodbye because goodbye means going away and going away means forgetting.",
        "author": "J.M. Barrie,",
        "tags": [
            "goodbye"
        ]
    },
    {
        "text": "I felt my lungs inflate with the onrush of scenery—air, mountains, trees, people. I thought, \"This is what it is to be happy.",
        "author": "Sylvia Plath,",
        "tags": [
            "ecstasy",
            "happiness",
            "nature"
        ]
    },
    {
        "text": "What I say is, a town isn’t a town without a bookstore. It may call itself a town, but unless it’s got a bookstore, it knows it’s not foolin’ a soul.",
        "author": "Neil Gaiman,",
        "tags": [
            "books",
            "bookstore",
            "towns"
        ]
    },
    {
        "text": "Do what is right, not what is easy nor what is popular.",
        "author": "Roy T. Bennett,",
        "tags": [
            "inspirational",
            "integrity",
            "motivational",
            "what-is-right"
        ]
    },
    {
        "text": "Ever had a flying burrito hit you? Well, it's a deadly projectile, right up there with cannonballs and grenades.",
        "author": "Rick Riordan,",
        "tags": []
    },
    {
        "text": "You do not have to be good.You do not have to walk on your kneesfor a hundred miles through the desert, repenting.You only have to let the soft animal of your body love what it loves.Tell me about despair, yours, and I will tell you mine.Meanwhile the world goes on.Meanwhile the sun and the clear pebbles of the rainare moving across the landscapes,over the prairies and the deep trees,the mountains and the rivers.Meanwhile the wild geese, high in the clean blue air,are heading home again.Whoever you are, no matter how lonely,the world offers itself to your imagination,calls to you like the wild geese, harsh and exciting –over and over announcing your placein the family of things.",
        "author": "Mary Oliver",
        "tags": [
            "beauty",
            "birds",
            "nature",
            "poetry",
            "shore",
            "woods"
        ]
    },
    {
        "text": "Trust yourself. You know more than you think you do.",
        "author": "Benjamin Spock",
        "tags": [
            "parenting",
            "philosophy",
            "self-assurance"
        ]
    },
    {
        "text": "Woke up this morning with a terrific urge to lie in bed all day and read.",
        "author": "Raymond Carver",
        "tags": []
    },
    {
        "text": "If you want to be happy, do not dwell in the past, do not worry about the future, focus on living fully in the present.",
        "author": "Roy T. Bennett,",
        "tags": [
            "focus",
            "future",
            "happiness",
            "happy",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "letting-go-of-the-past",
            "life",
            "life-and-living",
            "life-quotes",
            "live",
            "living",
            "living-in-the-present",
            "living-life",
            "living-life-to-the-fullest",
            "living-now",
            "worry"
        ]
    },
    {
        "text": "Sometimes you make choices in life and sometimes choices make you.",
        "author": "Gayle Forman,",
        "tags": []
    },
    {
        "text": "You can spend minutes, hours, days, weeks, or even months over-analyzing a situation; trying to put the pieces together, justifying what could've, would've happened... or you can just leave the pieces on the floor and move the fuck on.",
        "author": "Tupac Shakur",
        "tags": [
            "moving-on"
        ]
    },
    {
        "text": "Success is not how high you have climbed, but how you make a positive difference to the world.",
        "author": "Roy T. Bennett,",
        "tags": [
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "leader",
            "leadership",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "living",
            "motivation",
            "motivational",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "success"
        ]
    },
    {
        "text": "Words can be like X-rays if you use them properly – they’ll go through anything. You read and you’re pierced.",
        "author": "Aldous Huxley,",
        "tags": [
            "reading",
            "words",
            "writing"
        ]
    },
    {
        "text": "Do not fear to be eccentric in opinion, for every opinion now accepted was once eccentric.",
        "author": "Bertrand Russell",
        "tags": [
            "confidence",
            "eccentricity",
            "philosophy"
        ]
    },
    {
        "text": "No mourners. No funerals. Among them, it passed for 'good luck.",
        "author": "Leigh Bardugo,",
        "tags": []
    },
    {
        "text": "People say nothing is impossible, but I do nothing every day.",
        "author": "A.A. Milne,",
        "tags": [
            "humor",
            "idleness",
            "inspirational"
        ]
    },
    {
        "text": "Men always say that as the defining compliment, don’t they? She’s a cool girl. Being the Cool Girl means I am a hot, brilliant, funny woman who adores football, poker, dirty jokes, and burping, who plays video games, drinks cheap beer, loves threesomes and anal sex, and jams hot dogs and hamburgers into her mouth like she’s hosting the world’s biggest culinary gang bang while somehow maintaining a size 2, because Cool Girls are above all hot. Hot and understanding. Cool Girls never get angry; they only smile in a chagrined, loving manner and let their men do whatever they want. Go ahead, shit on me, I don’t mind, I’m the Cool Girl.Men actually think this girl exists. Maybe they’re fooled because so many women are willing to pretend to be this girl. For a long time Cool Girl offended me. I used to see men – friends, coworkers, strangers – giddy over these awful pretender women, and I’d want to sit these men down and calmly say: You are not dating a woman, you are dating a woman who has watched too many movies written by socially awkward men who’d like to believe that this kind of woman exists and might kiss them. I’d want to grab the poor guy by his lapels or messenger bag and say: The bitch doesn’t really love chili dogs that much – no one loves chili dogs that much! And the Cool Girls are even more pathetic: They’re not even pretending to be the woman they want to be, they’re pretending to be the woman a man wants them to be. Oh, and if you’re not a Cool Girl, I beg you not to believe that your man doesn’t want the Cool Girl. It may be a slightly different version – maybe he’s a vegetarian, so Cool Girl loves seitan and is great with dogs; or maybe he’s a hipster artist, so Cool Girl is a tattooed, bespectacled nerd who loves comics. There are variations to the window dressing, but believe me, he wants Cool Girl, who is basically the girl who likes every fucking thing he likes and doesn’t ever complain. (How do you know you’re not Cool Girl? Because he says things like: I like strong women. If he says that to you, he will at some point fuck someone else. Because I like strong women is code for I hate strong women.)",
        "author": "Gillian Flynn,",
        "tags": [
            "what-men-really-want"
        ]
    },
    {
        "text": "It's like everyone tells a story about themselves inside their own head. Always. All the time. That story makes you what you are. We build ourselves out of that story.",
        "author": "Patrick Rothfuss,",
        "tags": [
            "identity",
            "self-image",
            "sense-of-self",
            "stories",
            "storytelling"
        ]
    },
    {
        "text": "Rather than love, than money, than fame, give me truth.",
        "author": "Henry David Thoreau,",
        "tags": [
            "truth",
            "values"
        ]
    },
    {
        "text": "When love is not madness it is not love.",
        "author": "Pedro Calderon de la Barca",
        "tags": [
            "love",
            "romance"
        ]
    },
    {
        "text": "It's all right to love someone who doesn't love you back, as long as they're worth you loving them. As long as they deserve it.",
        "author": "Cassandra Clare,",
        "tags": [
            "clockwork-angel",
            "sophie-collins"
        ]
    },
    {
        "text": "This moment will just be another story someday.",
        "author": "Stephen Chbosky,",
        "tags": []
    },
    {
        "text": "Nowadays people know the price of everything and the value of nothing.",
        "author": "Oscar Wilde,",
        "tags": [
            "cynic"
        ]
    },
    {
        "text": "There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.",
        "author": "Ernest Hemingway",
        "tags": [
            "humility",
            "self-improvement"
        ]
    },
    {
        "text": "I may die young, but at least I'll die smart.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",
        "author": "Rabindranath Tagore,",
        "tags": [
            "aspiration",
            "assurance",
            "beauty",
            "clouds",
            "color",
            "conviction",
            "inspirational",
            "maturity",
            "sunset"
        ]
    },
    {
        "text": "God has no religion.",
        "author": "Mahatma Gandhi",
        "tags": [
            "god",
            "religion"
        ]
    },
    {
        "text": "The journey of a thousand miles begins with a single step.",
        "author": "Lao Tzu",
        "tags": [
            "travel"
        ]
    },
    {
        "text": "Life has no meaning. Each of us has meaning and we bring it to life. It is a waste to be asking the question when you are the answer.",
        "author": "Joseph Campbell",
        "tags": [
            "meaning-of-life"
        ]
    },
    {
        "text": "I've got a stele we can use. Who wants to do me?\"\"A regrettable choice of words,\" muttered Magnus.",
        "author": "Cassandra Clare,",
        "tags": [
            "jace-wayland",
            "magnus-bane",
            "regret",
            "stele"
        ]
    },
    {
        "text": "Nothing is so painful to the human mind as a great and sudden change.",
        "author": "Mary Wollstonecraft Shelley,",
        "tags": [
            "change",
            "human"
        ]
    },
    {
        "text": "Perhaps when we find ourselves wanting everything, it is because we are dangerously close to wanting nothing.",
        "author": "sylvia plath",
        "tags": [
            "goals"
        ]
    },
    {
        "text": "He must have known I'd want to leave you.\"\"No, he must have known you would always want to come back.",
        "author": "J.K. Rowling,",
        "tags": [
            "dumbledore",
            "friendship",
            "harry-potter",
            "ron-weasley"
        ]
    },
    {
        "text": "It is better to fail in originality than to succeed in imitation.",
        "author": "Herman Melville",
        "tags": []
    },
    {
        "text": "Sometimes fate is like a small sandstorm that keeps changing directions. You change direction but the sandstorm chases you. You turn again, but the storm adjusts. Over and over you play this out, like some ominous dance with death just before dawn. Why? Because this storm isn't something that blew in from far away, something that has nothing to do with you. This storm is you. Something inside of you. So all you can do is give in to it, step right inside the storm, closing your eyes and plugging up your ears so the sand doesn't get in, and walk through it, step by step. There's no sun there, no moon, no direction, no sense of time. Just fine white sand swirling up into the sky like pulverized bones. That's the kind of sandstorm you need to imagine.And you really will have to make it through that violent, metaphysical, symbolic storm. No matter how metaphysical or symbolic it might be, make no mistake about it: it will cut through flesh like a thousand razor blades. People will bleed there, and you will bleed too. Hot, red blood. You'll catch that blood in your hands, your own blood and the blood of others.And once the storm is over you won't remember how you made it through, how you managed to survive. You won't even be sure, in fact, whether the storm is really over. But one thing is certain. When you come out of the storm you won't be the same person who walked in. That's what this storm's all about.",
        "author": "Haruki Murakami,",
        "tags": []
    },
    {
        "text": "No. I can survive well enough on my own— if given the proper reading material.",
        "author": "Sarah J. Maas,",
        "tags": [
            "reading",
            "survival"
        ]
    },
    {
        "text": "I don't want to repeat my innocence. I want the pleasure of losing it again.",
        "author": "F. Scott Fitzgerald,",
        "tags": [
            "lost-innocence",
            "memories"
        ]
    },
    {
        "text": "That's the problem with drinking, I thought, as I poured myself a drink. If something bad happens you drink in an attempt to forget; if something good happens you drink in order to celebrate; and if nothing happens you drink to make something happen.",
        "author": "Charles Bukowski,",
        "tags": []
    },
    {
        "text": "I loved her against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be.",
        "author": "Charles Dickens,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "there is a loneliness in this world so greatthat you can see it in the slow movement ofthe hands of a clock.people so tiredmutilatedeither by love or no love.people just are not good to each otherone on one.the rich are not good to the richthe poor are not good to the poor.we are afraid.our educational system tells usthat we can all bebig-ass winners.it hasn't told usabout the guttersor the suicides.or the terror of one personaching in one placealoneuntouchedunspoken towatering a plant.",
        "author": "Charles Bukowski,",
        "tags": []
    },
    {
        "text": "I went to the woods because I wished to live deliberately, to front only the essential facts of life, and see if I could not learn what it had to teach, and not, when I came to die, discover that I had not lived. I did not wish to live what was not life, living is so dear; nor did I wish to practise resignation, unless it was quite necessary. I wanted to live deep and suck out all the marrow of life, to live so sturdily and Spartan-like as to put to rout all that was not life, to cut a broad swath and shave close, to drive life into a corner, and reduce it to its lowest terms...",
        "author": "Henry David Thoreau",
        "tags": []
    },
    {
        "text": "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.",
        "author": "Albert Einstein,",
        "tags": [
            "1931",
            "art",
            "mystery",
            "philosophy",
            "science"
        ]
    },
    {
        "text": "There are wounds that never show on the body that are deeper and more hurtful than anything that bleeds.",
        "author": "Laurell K. Hamilton,",
        "tags": [
            "depression",
            "pain",
            "trauma"
        ]
    },
    {
        "text": "We are not necessarily doubting that God will do the best for us; we are wondering how painful the best will turn out to be.",
        "author": "C.S. Lewis",
        "tags": [
            "god"
        ]
    },
    {
        "text": "I will have you without armor, Kaz Brekker. Or I will not have you at all.",
        "author": "Leigh Bardugo,",
        "tags": [
            "six-of-crows"
        ]
    },
    {
        "text": "Who said nights were for sleep?",
        "author": "Marilyn Monroe",
        "tags": []
    },
    {
        "text": "In heaven, all the interesting people are missing.",
        "author": "Friedrich Nietzsche",
        "tags": []
    },
    {
        "text": "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
        "author": "Marcus Aurelius,",
        "tags": [
            "appreciation",
            "awe",
            "beauty",
            "life",
            "optimism",
            "positivity",
            "sense-of-wonder",
            "stars"
        ]
    },
    {
        "text": "Don’t grieve. Anything you lose comes round in another form.",
        "author": "Rumi",
        "tags": [
            "bereavement",
            "consolation",
            "grief",
            "loss",
            "reincarnation"
        ]
    },
    {
        "text": "Books are the plane, and the train, and the road. They are the destination, and the journey. They are home.",
        "author": "Anna Quindlen,",
        "tags": [
            "books",
            "journey",
            "reading",
            "travel"
        ]
    },
    {
        "text": "You know, Minister, I disagree with Dumbledore on many counts...but you cannot deny he's got style...",
        "author": "J.K. Rowling,",
        "tags": [
            "dumbledore",
            "fudge",
            "minister",
            "style"
        ]
    },
    {
        "text": "Pursue what catches your heart, not what catches your eyes.",
        "author": "Roy T. Bennett,",
        "tags": [
            "gratitude",
            "heart",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "living",
            "motivation",
            "motivational",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "thoughts"
        ]
    },
    {
        "text": "Fear of a name increases fear of the thing itself.",
        "author": "J.K. rowling,",
        "tags": [
            "fear"
        ]
    },
    {
        "text": "I’m here. I love you. I don’t care if you need to stay up crying all night long, I will stay with you. If you need the medication again, go ahead and take it—I will love you through that, as well. If you don’t need the medication, I will love you, too. There’s nothing you can ever do to lose my love. I will protect you until you die, and after your death I will still protect you. I am stronger than Depression and I am braver than Loneliness and nothing will ever exhaust me.",
        "author": "Elizabeth Gilbert,",
        "tags": [
            "comfort",
            "healing",
            "loneliness"
        ]
    },
    {
        "text": "Don't talk to me.\"\"Why not?\"\"Because I want to fix that in my memory for ever. Draco Malfoy, the amazing bouncing ferret...",
        "author": "J.K. Rowling,",
        "tags": [
            "ferret-malfoy",
            "harry-potter",
            "humor",
            "ron-weasley"
        ]
    },
    {
        "text": "All I ever wanted was to reach out and touch another human being not just with my hands but with my heart.",
        "author": "Tahereh Mafi,",
        "tags": [
            "compassion",
            "empathy",
            "loneliness",
            "love"
        ]
    },
    {
        "text": "If you go home with somebody, and they don't have books, don't fuck 'em!",
        "author": "John Waters",
        "tags": [
            "books",
            "fuck",
            "profanity",
            "reading"
        ]
    },
    {
        "text": "Sometimes our light goes out, but is blown again into instant flame by an encounter with another human being.",
        "author": "Albert Schweitzer",
        "tags": [
            "inspirational",
            "life",
            "spiritual",
            "uplifting"
        ]
    },
    {
        "text": "In the darkness, two shadows, reaching through the hopeless, heavy dusk. Their hands meet, and light spills in a flood like a hundred golden urns pouring out of the sun.",
        "author": "Madeline Miller,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "It is the time you have wasted for your rose that makes your rose so important.",
        "author": "Antoine de Saint-Exupéry,",
        "tags": [
            "caring",
            "inspirational",
            "love",
            "roses",
            "time"
        ]
    },
    {
        "text": "The most beautiful people we have known are those who have known defeat, known suffering, known struggle, known loss, and have found their way out of the depths. These persons have an appreciation, a sensitivity, and an understanding of life that fills them with compassion, gentleness, and a deep loving concern. Beautiful people do not just happen.",
        "author": "Elisabeth Kübler-Ross",
        "tags": [
            "adversity",
            "beauty",
            "empathy",
            "people",
            "understanding"
        ]
    },
    {
        "text": "Let us step into the night and pursue that flighty temptress, adventure.",
        "author": "J.K. Rowling,",
        "tags": [
            "adventure"
        ]
    },
    {
        "text": "How many slams in an old screen door? Depends how loud you shut it. How many slices in a bread? Depends how thin you cut it. How much good inside a day? Depends how good you live 'em. How much love inside a friend? Depends how much you give 'em.",
        "author": "Shel Silverstein",
        "tags": []
    },
    {
        "text": "It is more fun to talk with someone who doesn't use long, difficult words but rather short, easy words like \"What about lunch?",
        "author": "A. A. Milne,",
        "tags": [
            "friendship"
        ]
    },
    {
        "text": "Dare to BeWhen a new day begins, dare to smile gratefully.When there is darkness, dare to be the first to shine a light.When there is injustice, dare to be the first to condemn it.When something seems difficult, dare to do it anyway.When life seems to beat you down, dare to fight back.When there seems to be no hope, dare to find some.When you’re feeling tired, dare to keep going.When times are tough, dare to be tougher.When love hurts you, dare to love again.When someone is hurting, dare to help them heal.When another is lost, dare to help them find the way.When a friend falls, dare to be the first to extend a hand.When you cross paths with another, dare to make them smile.When you feel great, dare to help someone else feel great too.When the day has ended, dare to feel as you’ve done your best.Dare to be the best you can –At all times, Dare to be!",
        "author": "Steve Maraboli,",
        "tags": [
            "compassion",
            "dare-to-be",
            "gratitude",
            "inspirational",
            "life",
            "motivational",
            "seize-the-day",
            "smile",
            "success"
        ]
    },
    {
        "text": "When life gives you lemons, squirt someone in the eye.",
        "author": "Cathy Guiswite",
        "tags": [
            "eyes",
            "funny",
            "lemons"
        ]
    },
    {
        "text": "Keep GoingYour hardest times often lead to the greatest moments of your life. Keep going. Tough situations build strong people in the end.",
        "author": "Roy T. Bennett,",
        "tags": [
            "adversity",
            "authentic-living",
            "being-positive",
            "faith",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "life",
            "life-and-living",
            "life-quotes",
            "motivation",
            "never-give-up",
            "optimism",
            "optimistic",
            "persistence",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking"
        ]
    },
    {
        "text": "God will not look you over for medals, degrees or diplomas but for scars.",
        "author": "Elbert Hubbard",
        "tags": [
            "faith",
            "god",
            "wisdom"
        ]
    },
    {
        "text": "Once you can accept the universe as matter expanding into nothing that is something, wearing stripes with plaid comes easy.",
        "author": "Albert Einstein",
        "tags": [
            "funny"
        ]
    },
    {
        "text": "The silence depressed me. It wasn't the silence of silence. It was my own silence.",
        "author": "Sylvia Plath,",
        "tags": [
            "depression-silence"
        ]
    },
    {
        "text": "Begin at the beginning,\" the King said, very gravely, \"and go on till you come to the end: then stop.",
        "author": "Lewis Carroll,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "The things you do for yourself are gone when you are gone, but the things you do for others remain as your legacy.",
        "author": "Kalu Ndukwe Kalu",
        "tags": [
            "hope",
            "inspiration",
            "inspirational",
            "life",
            "truth"
        ]
    },
    {
        "text": "What you must understand about me is that I’m a deeply unhappy person.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "One of the Silent Brothers is here to see you. Hodge sent me to wake you up. Actually he offered to wake you himself, but since it's 5 a.m., I figured you'd be less cranky if you had something nice to look at.\"\"Meaning you?\"\"What else?",
        "author": "Cassandra Clare,",
        "tags": []
    },
    {
        "text": "If cats looked like frogs we'd realize what nasty, cruel little bastards they are. Style. That's what people remember.",
        "author": "Terry Pratchett,",
        "tags": [
            "cats",
            "humor",
            "life"
        ]
    },
    {
        "text": "She'd laughed, and if he could have bottled the sound and gotten drunk on it every night, he would have. It terrified him.",
        "author": "Leigh Bardugo,",
        "tags": []
    },
    {
        "text": "There may be times when we are powerless to prevent injustice, but there must never be a time when we fail to protest.",
        "author": "Elie Wiesel",
        "tags": [
            "activism",
            "ethics",
            "justice",
            "philosophy"
        ]
    },
    {
        "text": "You guessed? You must have been pretty sure, considering you could have killed me.\"\"I was ninety percent sure.\"\"I see,\" Clary said. There must have been something in her voice, because he turned to look at her. Her hand cracked across his face, a slap that rocked him back on his heels. He put his hands on his cheek, more in surprise than pain.\"What the hell was that for?\"\"The other ten percent.",
        "author": "Cassandra Clare,",
        "tags": [
            "humor",
            "paranormal-romance"
        ]
    },
    {
        "text": "Life is for the living.Death is for the dead.Let life be like music. And death a note unsaid.",
        "author": "Langston Hughes,",
        "tags": [
            "death",
            "life",
            "music"
        ]
    },
    {
        "text": "It always shocked me when I realized that I wasn’t the only person in the world who thought and felt such strange and awful things.",
        "author": "John Green,",
        "tags": [
            "john-green",
            "looking-for-alaska"
        ]
    },
    {
        "text": "The best way to find out if you can trust somebody is to trust them.",
        "author": "Ernest Hemingway",
        "tags": [
            "trust",
            "truth"
        ]
    },
    {
        "text": "Some cause happiness wherever they go; others whenever they go.",
        "author": "Oscar Wilde (attributed to)",
        "tags": [
            "classic-insult"
        ]
    },
    {
        "text": "The scariest moment is always just before you start.",
        "author": "Stephen King,",
        "tags": []
    },
    {
        "text": "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.",
        "author": "Albert Einstein",
        "tags": [
            "albert-einstein",
            "future",
            "war",
            "wisdom"
        ]
    },
    {
        "text": "People think dreams aren't real just because they aren't made of matter, of particles. Dreams are real. But they are made of viewpoints, of images, of memories and puns and lost hopes.",
        "author": "Neil Gaiman",
        "tags": []
    },
    {
        "text": "Some old wounds never truly heal, and bleed again at the slightest word.",
        "author": "George R.R. Martin,",
        "tags": [
            "hurt",
            "pain",
            "perfect",
            "truthful"
        ]
    },
    {
        "text": "We do not need magic to transform our world. We carry all the power we need inside ourselves already.",
        "author": "J.K. Rowling",
        "tags": []
    },
    {
        "text": "Tell the truth, or someone will tell it for you.",
        "author": "Stephanie Klein,",
        "tags": []
    },
    {
        "text": "Women who seek to be equal with men lack ambition.",
        "author": "Timothy Leary",
        "tags": [
            "ambition",
            "equality"
        ]
    },
    {
        "text": "Think left and think right and think low and think high. Oh, the thinks you can think up if only you try!",
        "author": "Dr. Seuss",
        "tags": [
            "humor",
            "philosophy"
        ]
    },
    {
        "text": "Knowing others is intelligence;knowing yourself is true wisdom.Mastering others is strength; mastering yourself is true power.",
        "author": "Lao Tzu,",
        "tags": [
            "wisdom"
        ]
    },
    {
        "text": "I wanted the whole world or nothing.",
        "author": "Charles Bukowski,",
        "tags": []
    },
    {
        "text": "The true soldier fights not because he hates what is in front of him, but because he loves what is behind him.",
        "author": "G.K. Chesterton",
        "tags": []
    },
    {
        "text": "Some people have lives; some people have music.",
        "author": "John Green,",
        "tags": [
            "humor",
            "life",
            "music"
        ]
    },
    {
        "text": "Enjoy it. Because it's happening.",
        "author": "Stephen Chbosky,",
        "tags": []
    },
    {
        "text": "The minute I heard my first love story,I started looking for you, not knowinghow blind that was.Lovers don't finally meet somewhere.They're in each other all along.",
        "author": "Mawlana Jalal-al-Din Rumi,",
        "tags": [
            "lovers"
        ]
    },
    {
        "text": "No person is your friend who demands your silence, or denies your right to grow.",
        "author": "Alice Walker",
        "tags": [
            "acceptance",
            "friendship"
        ]
    },
    {
        "text": "We know what we are, but not what we may be.",
        "author": "William Shakespeare",
        "tags": []
    },
    {
        "text": "Break my heart. Break it a thousand times if you like. It was only ever yours to break anyway.",
        "author": "Kiera Cass,",
        "tags": []
    },
    {
        "text": "A brave man acknowledges the strength of others.",
        "author": "Veronica Roth,",
        "tags": []
    },
    {
        "text": "Art is the lie that enables us to realize the truth.",
        "author": "Pablo Picasso",
        "tags": []
    },
    {
        "text": "Well, it seems to me that the best relationships - the ones that last - are frequently the ones that are rooted in friendship. You know, one day you look at the person and you see something more than you did the night before. Like a switch has been flicked somewhere. And the person who was just a friend is... suddenly the only person you can ever imagine yourself with.",
        "author": "Gillian Anderson",
        "tags": [
            "friendship",
            "love",
            "men",
            "relationships",
            "women"
        ]
    },
    {
        "text": "Everybody is identical in their secret unspoken belief that way deep down they are different from everyone else.",
        "author": "David Foster Wallace,",
        "tags": []
    },
    {
        "text": "I suppose I'll have to add the force of gravity to my list of enemies.",
        "author": "Lemony Snicket,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "There are no facts, only interpretations.",
        "author": "Friedrich Nietzsche",
        "tags": []
    },
    {
        "text": "You may not control all the events that happen to you, but you can decide not to be reduced by them.",
        "author": "Maya Angelou,",
        "tags": [
            "be-yourself",
            "self-determination"
        ]
    },
    {
        "text": "Finnick?\" I say, \"Maybe some pants?\"He looks down at his legs as if noticing his outfit for the first time. Then he whips off his hospital gown leaving him in just his underwear. \"Why? Do you find this\" -- he strikes a ridiculously provocative pose -- \"distracting?\"I laugh. Boggs looks embarrassed and Finnick looks more like the guy I met at the Quarter Quell",
        "author": "Suzanne Collins,",
        "tags": [
            "finnick",
            "humour",
            "hunger-games"
        ]
    },
    {
        "text": "I have the choice of being constantly active and happy or introspectively passive and sad. Or I can go mad by ricocheting in between.",
        "author": "Sylvia Plath,",
        "tags": []
    },
    {
        "text": "It has been said, 'time heals all wounds.' I do not agree. The wounds remain. In time, the mind, protecting its sanity, covers them with scar tissue and the pain lessens. But it is never gone.",
        "author": "Rose Fitzgerald Kennedy",
        "tags": [
            "healing",
            "pain",
            "remembrance",
            "scars",
            "time"
        ]
    },
    {
        "text": "If you like her, if she makes you happy, and if you feel like you know her---then don't let her go.",
        "author": "Nicholas Sparks,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "I don't want to be at the mercy of my emotions. I want to use them, to enjoy them, and to dominate them.",
        "author": "Oscar Wilde,",
        "tags": [
            "emotions",
            "mercy"
        ]
    },
    {
        "text": "The only way to find true happiness is to risk being completely cut open.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "chance",
            "happiness",
            "risk"
        ]
    },
    {
        "text": "Follow your inner moonlight; don't hide the madness.",
        "author": "Allen Ginsberg",
        "tags": [
            "be-yourself",
            "self-expression"
        ]
    },
    {
        "text": "Among other things, you'll find that you're not the first person who was ever confused and frightened and even sickened by human behavior. You're by no means alone on that score, you'll be excited and stimulated to know. Many, many men have been just as troubled morally and spiritually as you are right now. Happily, some of them kept records of their troubles. You'll learn from them—if you want to. Just as someday, if you have something to offer, someone will learn something from you. It's a beautiful reciprocal arrangement. And it isn't education. It's history. It's poetry.",
        "author": "J.D. Salinger,",
        "tags": []
    },
    {
        "text": "A painter should begin every canvas with a wash of black, because all things in nature are dark except where exposed by the light.",
        "author": "Leonardo da Vinci",
        "tags": [
            "art",
            "inspirational"
        ]
    },
    {
        "text": "Why are they all staring?\" demanded Albus as he and Rose craned around to look at the other students.\"Don’t let it worry you,\" said Ron. \"It’s me. I’m extremely famous.",
        "author": "J.K. Rowling,",
        "tags": [
            "albus-potter",
            "fame",
            "harry-potter",
            "humor",
            "ron-weasley"
        ]
    },
    {
        "text": "If I were not a physicist, I would probably be a musician. I often think in music. I live my daydreams in music. I see my life in terms of music.",
        "author": "Albert Einstein",
        "tags": [
            "music"
        ]
    },
    {
        "text": "A poem begins as a lump in the throat, a sense of wrong, a homesickness, a lovesickness.",
        "author": "Robert Frost",
        "tags": [
            "poetry"
        ]
    },
    {
        "text": "There is no surer foundation for a beautiful friendship than a mutual taste in literature.",
        "author": "P.G. Wodehouse",
        "tags": [
            "friendship",
            "literature"
        ]
    },
    {
        "text": "Only a true best friend can protect you from your immortal enemies.",
        "author": "Richelle Mead,",
        "tags": [
            "friendship",
            "humor",
            "romance"
        ]
    },
    {
        "text": "Beware; for I am fearless, and therefore powerful.",
        "author": "Mary Shelley,",
        "tags": []
    },
    {
        "text": "We live for books.",
        "author": "Umberto Eco",
        "tags": [
            "bibliophiles",
            "book-lovers",
            "books",
            "reading"
        ]
    },
    {
        "text": "Even the darkest night will end and the sun will rise.",
        "author": "Victor Hugo,",
        "tags": [
            "apothegm",
            "optimism"
        ]
    },
    {
        "text": "What are men to rocks and mountains?",
        "author": "Jane Austen,",
        "tags": [
            "men",
            "mountains",
            "rocks"
        ]
    },
    {
        "text": "Can I help you with something?\"Clary turned instant traitor against her gender. \"Those girls on the other side of the car are staring at you.\"Jace assumed an air of mellow gratification. \"Of course they are,\" he said, \"I am stunningly attractive.",
        "author": "Cassandra Clare,",
        "tags": [
            "city-of-bones",
            "clary",
            "jace"
        ]
    },
    {
        "text": "Name one hero who was happy.\"I considered. Heracles went mad and killed his family; Theseus lost his bride and father; Jason's children and new wife were murdered by his old; Bellerophon killed the Chimera but was crippled by the fall from Pegasus' back.\"You can't.\" He was sitting up now, leaning forward.\"I can't.\"\"I know. They never let you be famous AND happy.\" He lifted an eyebrow. \"I'll tell you a secret.\"\"Tell me.\" I loved it when he was like this.\"I'm going to be the first.\" He took my palm and held it to his. \"Swear it.\"\"Why me?\"\"Because you're the reason. Swear it.\"\"I swear it,\" I said, lost in the high color of his cheeks, the flame in his eyes.\"I swear it,\" he echoed.We sat like that a moment, hands touching. He grinned.\"I feel like I could eat the world raw.",
        "author": "Madeline Miller,",
        "tags": [
            "fame",
            "happiness",
            "heroes",
            "love",
            "mythology",
            "oaths"
        ]
    },
    {
        "text": "I am coming to terms with the fact that loving someone requires a leap of faith, and that a soft landing is never guaranteed.",
        "author": "Sarah Dessen,",
        "tags": []
    },
    {
        "text": "The Guide says there is an art to flying\", said Ford, \"or rather a knack. The knack lies in learning how to throw yourself at the ground and miss.",
        "author": "Douglas Adams,",
        "tags": [
            "flight",
            "flying",
            "hg2g",
            "humor"
        ]
    },
    {
        "text": "True love is rare, and it's the only thing that gives life real meaning.",
        "author": "Nicholas Sparks,",
        "tags": [
            "love",
            "romance"
        ]
    },
    {
        "text": "Live to the point of tears.",
        "author": "Albert Camus",
        "tags": [
            "life",
            "living"
        ]
    },
    {
        "text": "Mom says it's because she has PMS.Do you even know what that means?\"I'm not a little kid anymore. It means pissed-at- men syndrome",
        "author": "Nicholas Sparks,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "Why is it,\" he said, one time, at the subway entrance, \"I feel I've known you so many years?\"\"Because I like you,\" she said, \"and I don't want anything from you.",
        "author": "Ray Bradbury,",
        "tags": []
    },
    {
        "text": "Poets have been mysteriously silent on the subject of cheese.",
        "author": "G.K. Chesterton,",
        "tags": [
            "cheese",
            "poetry"
        ]
    },
    {
        "text": "Would you tell me, please, which way I ought to go from here?\"\"That depends a good deal on where you want to get to.\"\"I don't much care where –\"\"Then it doesn't matter which way you go.",
        "author": "Lewis Carroll,",
        "tags": [
            "adventure"
        ]
    },
    {
        "text": "For me, trees have always been the most penetrating preachers. I revere them when they live in tribes and families, in forests and groves. And even more I revere them when they stand alone. They are like lonely persons. Not like hermits who have stolen away out of some weakness, but like great, solitary men, like Beethoven and Nietzsche. In their highest boughs the world rustles, their roots rest in infinity; but they do not lose themselves there, they struggle with all the force of their lives for one thing only: to fulfil themselves according to their own laws, to build up their own form, to represent themselves. Nothing is holier, nothing is more exemplary than a beautiful, strong tree. When a tree is cut down and reveals its naked death-wound to the sun, one can read its whole history in the luminous, inscribed disk of its trunk: in the rings of its years, its scars, all the struggle, all the suffering, all the sickness, all the happiness and prosperity stand truly written, the narrow years and the luxurious years, the attacks withstood, the storms endured. And every young farmboy knows that the hardest and noblest wood has the narrowest rings, that high on the mountains and in continuing danger the most indestructible, the strongest, the ideal trees grow. Trees are sanctuaries. Whoever knows how to speak to them, whoever knows how to listen to them, can learn the truth. They do not preach learning and precepts, they preach, undeterred by particulars, the ancient law of life. A tree says: A kernel is hidden in me, a spark, a thought, I am life from eternal life. The attempt and the risk that the eternal mother took with me is unique, unique the form and veins of my skin, unique the smallest play of leaves in my branches and the smallest scar on my bark. I was made to form and reveal the eternal in my smallest special detail. A tree says: My strength is trust. I know nothing about my fathers, I know nothing about the thousand children that every year spring out of me. I live out the secret of my seed to the very end, and I care for nothing else. I trust that God is in me. I trust that my labor is holy. Out of this trust I live. When we are stricken and cannot bear our lives any longer, then a tree has something to say to us: Be still! Be still! Look at me! Life is not easy, life is not difficult. Those are childish thoughts. Let God speak within you, and your thoughts will grow silent. You are anxious because your path leads away from mother and home. But every step and every day lead you back again to the mother. Home is neither here nor there. Home is within you, or home is nowhere at all. A longing to wander tears my heart when I hear trees rustling in the wind at evening. If one listens to them silently for a long time, this longing reveals its kernel, its meaning. It is not so much a matter of escaping from one's suffering, though it may seem to be so. It is a longing for home, for a memory of the mother, for new metaphors for life. It leads home. Every path leads homeward, every step is birth, every step is death, every grave is mother. So the tree rustles in the evening, when we stand uneasy before our own childish thoughts: Trees have long thoughts, long-breathing and restful, just as they have longer lives than ours. They are wiser than we are, as long as we do not listen to them. But when we have learned how to listen to trees, then the brevity and the quickness and the childlike hastiness of our thoughts achieve an incomparable joy. Whoever has learned how to listen to trees no longer wants to be a tree. He wants to be nothing except what he is. That is home. That is happiness.",
        "author": "Herman Hesse,",
        "tags": [
            "eternity",
            "fear",
            "forests",
            "history",
            "holiness",
            "home",
            "life",
            "longing",
            "poet",
            "roots",
            "self-discovery",
            "spirituality",
            "strength",
            "trees",
            "trust"
        ]
    },
    {
        "text": "Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly.",
        "author": "Franz Kafka",
        "tags": [
            "honesty",
            "truth-telling",
            "writing"
        ]
    },
    {
        "text": "Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every \"superstar,\" every \"supreme leader,\" every saint and sinner in the history of our species lived there-on a mote of dust suspended in a sunbeam.The Earth is a very small stage in a vast cosmic arena. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot.Our posturings, our imagined self-importance, the delusion that we have some privileged position in the Universe, are challenged by this point of pale light. Our planet is a lonely speck in the great enveloping cosmic dark. In our obscurity, in all this vastness, there is no hint that help will come from elsewhere to save us from ourselves.The Earth is the only world known so far to harbor life. There is nowhere else, at least in the near future, to which our species could migrate. Visit, yes. Settle, not yet. Like it or not, for the moment the Earth is where we make our stand.It has been said that astronomy is a humbling and character-building experience. There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world. To me, it underscores our responsibility to deal more kindly with one another, and to preserve and cherish the pale blue dot, the only home we've ever known.",
        "author": "Carl Sagan,",
        "tags": [
            "earth",
            "perspective",
            "space"
        ]
    },
    {
        "text": "Some things don't last forever, but some things do. Like a good song, or a good book, or a good memory you can take out and unfold in your darkest times, pressing down on the corners and peering in close, hoping you still recognize the person you see there.",
        "author": "Sarah Dessen,",
        "tags": [
            "forever"
        ]
    },
    {
        "text": "I suspect the truth is that we are waiting, all of us, against insurmountable odds, for something extraordinary to happen to us.",
        "author": "Khaled Hosseini,",
        "tags": []
    },
    {
        "text": "There is a stubbornness about me that never can bear to be frightened at the will of others. My courage always rises at every attempt to intimidate me.",
        "author": "Jane Austen,",
        "tags": []
    },
    {
        "text": "Weeds are flowers, too, once you get to know them.",
        "author": "A.A. Milne",
        "tags": []
    },
    {
        "text": "but for my own part, if a book is well written, I always find it too short.",
        "author": "Jane Austen",
        "tags": [
            "books",
            "catherine",
            "or-the-bower"
        ]
    },
    {
        "text": "I’d said it before and meant it: Alive or undead, the love of my life was a badass.",
        "author": "Richelle Mead,",
        "tags": [
            "dimitri",
            "humor",
            "paranormal-romance",
            "rose",
            "urban-fantasy",
            "vampire",
            "young-adult-novels"
        ]
    },
    {
        "text": "If you don't imagine, nothing ever happens at all.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "I love you more than there are stars in the sky and fish in the sea.",
        "author": "Nicholas Sparks",
        "tags": [
            "love"
        ]
    },
    {
        "text": "A woman's heart should be so hidden in God that a man has to seek Him just to find her.",
        "author": "Max Lucado",
        "tags": [
            "inspirational",
            "love"
        ]
    },
    {
        "text": "People aren't born good or bad. Maybe they're born with tendencies either way, but its the way you live your life that matters.",
        "author": "Cassandra Clare,",
        "tags": [
            "bad",
            "good",
            "life"
        ]
    },
    {
        "text": "A woman has to live her life, or live to repent not having lived it.",
        "author": "D.H. Lawrence,",
        "tags": [
            "life",
            "living",
            "philosophy",
            "women"
        ]
    },
    {
        "text": "The man of knowledge must be able not only to love his enemies but also to hate his friends.",
        "author": "Friedrich Nietzsche",
        "tags": []
    },
    {
        "text": "Declarations of love amuse me. Especially when unrequited.",
        "author": "Cassandra Clare,",
        "tags": [
            "clary-fray",
            "jace-wayland",
            "love"
        ]
    },
    {
        "text": "It's enough for me to be sure that you and I exist at this moment.",
        "author": "Gabriel García Márquez,",
        "tags": [
            "existence",
            "truth"
        ]
    },
    {
        "text": "Find what you love and let it kill you.",
        "author": "Charles Bukowski",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Pain is temporary. Quitting lasts forever.",
        "author": "Lance Armstrong Sally Jenkins,",
        "tags": [
            "cancer",
            "failure",
            "inspiration",
            "inspirational",
            "pain",
            "quitting"
        ]
    },
    {
        "text": "Don't be afraid of your fears. They're not there to scare you. They're there to let you know that something is worth it.",
        "author": "C. JoyBell C.",
        "tags": [
            "belief",
            "bravery",
            "courage",
            "fear",
            "fears",
            "inspirational",
            "inspirational-life",
            "inspirational-quotes",
            "strength"
        ]
    },
    {
        "text": "I care for myself. The more solitary, the more friendless, the more unsustained I am, the more I will respect myself.",
        "author": "Charlotte Brontë,",
        "tags": [
            "ataraxy",
            "defiance",
            "empowerment",
            "independence",
            "individuality",
            "self-assurance",
            "self-awareness",
            "self-containment",
            "self-determination",
            "self-esteem",
            "self-reliance",
            "self-respect",
            "self-sufficiency",
            "self-trust",
            "solitude"
        ]
    },
    {
        "text": "Do I not destroy my enemies when I make them my friends?",
        "author": "Abraham Lincoln",
        "tags": [
            "abe",
            "enemies",
            "enemy",
            "friend",
            "friends",
            "friendship",
            "life",
            "lincoln"
        ]
    },
    {
        "text": "Dumbledore says people find it far easier to forgive others for being wrong than being right.",
        "author": "J.K. Rowling,",
        "tags": [
            "forgiveness"
        ]
    },
    {
        "text": "I was within and without, simultaneously enchanted and repelled by the inexhaustible variety of life.",
        "author": "Fitzgerald F. Scott,",
        "tags": [
            "philosophy"
        ]
    },
    {
        "text": "When I was a little girl I used to read fairy tales. In fairy tales you meet Prince Charming and he's everything you ever wanted. In fairy tales the bad guy is very easy to spot. The bad guy is always wearing a black cape so you always know who he is. Then you grow up and you realize that Prince Charming is not as easy to find as you thought. You realize the bad guy is not wearing a black cape and he's not easy to spot; he's really funny, and he makes you laugh, and he has perfect hair.",
        "author": "Taylor Swift",
        "tags": [
            "fairy-tales",
            "inspirational",
            "prince-charming",
            "taylor-swift"
        ]
    },
    {
        "text": "Make improvements, not excuses. Seek respect, not attention.",
        "author": "Roy T. Bennett,",
        "tags": [
            "excuse",
            "improvement",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quote",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-and-living",
            "life-lessons",
            "life-philosophy",
            "life-quotes",
            "living",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "respect"
        ]
    },
    {
        "text": "You never fail until you stop trying.",
        "author": "Albert Einstein",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "The most important kind of freedom is to be what you really are. You trade in your reality for a role. You trade in your sense for an act. You give up your ability to feel, and in exchange, put on a mask. There can't be any large-scale revolution until there's a personal revolution, on an individual level. It's got to happen inside first.",
        "author": "Jim MORRISON",
        "tags": [
            "freedom",
            "individuality",
            "inspirational",
            "mask",
            "personality",
            "revolution",
            "truth"
        ]
    },
    {
        "text": "There are no happy endings.Endings are the saddest part, So just give me a happy middleAnd a very happy start.",
        "author": "Shel Silverstein,",
        "tags": []
    },
    {
        "text": "Three things in human life are important: the first is to be kind; the second is to be kind; and the third is to be kind.",
        "author": "Henry James",
        "tags": [
            "kindness"
        ]
    },
    {
        "text": "Worry does not empty tomorrow of its sorrow, it empties today of its strength.",
        "author": "Corrie Ten Boom,",
        "tags": [
            "strength",
            "worry"
        ]
    },
    {
        "text": "Music is a total constant. That's why we have such a strong visceral connection to it, you know? Because a song can take you back instantly to a moment, or a place, or even a person. No matter what else has changed in your or the world, that one song says the same, just like that moment.",
        "author": "Sarah Dessen,",
        "tags": [
            "owen-armstrong"
        ]
    },
    {
        "text": "And the rest is rust and stardust.",
        "author": "Vladimir Nabokov,",
        "tags": []
    },
    {
        "text": "Learn to light a candle in the darkest moments of someone’s life. Be the light that helps others see; it is what gives life its deepest significance.",
        "author": "Roy T. Bennett,",
        "tags": [
            "giving",
            "goals",
            "goals-in-life",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "learn",
            "learning",
            "life",
            "life-quotes",
            "light",
            "light-and-darkness",
            "living-life",
            "meaning",
            "meaning-of-life",
            "meaningful",
            "meaningful-life",
            "wisdom",
            "wise"
        ]
    },
    {
        "text": "The most wasted of all days is one without laughter.",
        "author": "Nicolas Chamfort",
        "tags": [
            "god",
            "joy",
            "life",
            "spirituality"
        ]
    },
    {
        "text": "It's kind of fun to do the impossible.",
        "author": "Walt Disney",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "I am not sure that I exist, actually. I am all the writers that I have read, all the people that I have met, all the women that I have loved; all the cities I have visited.",
        "author": "Jorge Luis Borges",
        "tags": [
            "life"
        ]
    },
    {
        "text": "How did you die?\"\"We er....drowned in a bathtub.\"\"All three of you?\"\"It was a big bathtub.",
        "author": "Rick Riordan,",
        "tags": []
    },
    {
        "text": "There comes a time when one must take a position that is neither safe, nor politic, nor popular, but he must take it because conscience tells him it is right.",
        "author": "Martin Luther King Jr.,",
        "tags": [
            "conscience",
            "politics",
            "right"
        ]
    },
    {
        "text": "It's not the load that breaks you down, it's the way you carry it.",
        "author": "Lou Holtz",
        "tags": [
            "inspiration",
            "motivation"
        ]
    },
    {
        "text": "I think we dream so we don’t have to be apart for so long. If we’re in each other’s dreams, we can be together all the time.",
        "author": "A.A. Milne,",
        "tags": [
            "dreams",
            "together"
        ]
    },
    {
        "text": "Walk as if you are kissing the Earth with your feet.",
        "author": "Thich Nhat Hanh,",
        "tags": [
            "buddhism",
            "gratitude",
            "joy",
            "mindfulness",
            "zen"
        ]
    },
    {
        "text": "Do you think I'm pretty?I think you're beautifulBeautiful?You are so beautiful, it hurts sometimes.",
        "author": "Richelle Mead,",
        "tags": [
            "beauty",
            "love"
        ]
    },
    {
        "text": "If writers wrote as carelessly as some people talk, then adhasdh asdglaseuyt[bn[ pasdlgkhasdfasdf.",
        "author": "Lemony Snicket,",
        "tags": [
            "humor",
            "talking",
            "writers"
        ]
    },
    {
        "text": "All the darkness in the world cannot extinguish the light of a single candle.",
        "author": "St. Francis Of Assisi,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Some say the world will end in fire,Some say in ice.From what I've tasted of desire,I hold with those who favor fire. But if it had to perish twiceI think I know enough of hateTo say that for destruction iceIs also greatAnd would suffice.",
        "author": "Robert Frost",
        "tags": [
            "poetry"
        ]
    },
    {
        "text": "Investigation?\" Isabelle laughed. \"Now we're detectives? Maybe we should all have code names.\"\"Good idea,\" said Jace. \"I shall be Baron Hotschaft Von Hugenstein.",
        "author": "Cassandra Clare,",
        "tags": [
            "humor",
            "investigation",
            "isabelle-lightwood",
            "jace-wayland",
            "joke"
        ]
    },
    {
        "text": "Books are for people who wish they were somewhere else.",
        "author": "Mark Twain",
        "tags": [
            "books-reading"
        ]
    },
    {
        "text": "And that's the thing about people who mean everything they say. They think everyone else does too.",
        "author": "Khaled Hosseini,",
        "tags": [
            "earnestness",
            "gullibility",
            "honesty"
        ]
    },
    {
        "text": "There is no real ending. It’s just the place where you stop the story.",
        "author": "Frank Herbert",
        "tags": [
            "endings",
            "happy-endings",
            "writing"
        ]
    },
    {
        "text": "I was smiling yesterday,I am smiling today and I will smile tomorrow.Simply because life is too short to cry for anything.",
        "author": "Santosh Kalwar,",
        "tags": [
            "cry",
            "inspirational",
            "joke",
            "love",
            "romance",
            "smile"
        ]
    },
    {
        "text": "You know,\" Gabriel said, \"there was a time I thought we could be friends, Will.\"\"There was a time I thought I was a ferret,\" Will said, \"but that turned out to be the opium haze. Did you know it had that effect? Because I didn't.",
        "author": "Cassandra Clare,",
        "tags": [
            "ferret"
        ]
    },
    {
        "text": "Start each day with a positive thought and a grateful heart.",
        "author": "Roy T. Bennett,",
        "tags": [
            "gratitude",
            "heart",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "living",
            "motivation",
            "motivational",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "thoughts"
        ]
    },
    {
        "text": "What's this?\" he demanded, looking from Clary to his companions, as if they might know what she was doing there.\"It's a girl,\" Jace said,recovering his composure. \"Surely you've seen girls before, Alec. Your sister Isabelle is one.",
        "author": "Cassandra Clare,",
        "tags": [
            "humor",
            "jace",
            "love",
            "mortal-instruments"
        ]
    },
    {
        "text": "I mean, if the relationship can't survive the long term, why on earth would it be worth my time and energy for the short term?",
        "author": "Nicholas Sparks,",
        "tags": [
            "energy",
            "nicholas-sparks",
            "relationships",
            "the-last-song"
        ]
    },
    {
        "text": "My life amounts to no more than one drop in a limitless ocean. Yet what is any ocean, but a multitude of drops?",
        "author": "David Mitchell,",
        "tags": []
    },
    {
        "text": "There's plenty of sense in nonsense sometimes, if you wish to look for it.",
        "author": "Cassandra Clare,",
        "tags": [
            "will-herondale"
        ]
    },
    {
        "text": "If I can stop one heart from breaking, I shall not live in vain.",
        "author": "Emily Dickinson",
        "tags": [
            "life",
            "love"
        ]
    },
    {
        "text": "You smell good, too, said PatchIt’s called a shower. I was staring straight ahead. When he didn’t answer, I turned sideways. Soap. Shampoo. Hot water.Naked. I know the drill.",
        "author": "Becca Fitzpatrick,",
        "tags": [
            "hush"
        ]
    },
    {
        "text": "You'll stay with me?'Until the very end,' said James.",
        "author": "J. K. Rowling,",
        "tags": []
    },
    {
        "text": "She wasn't bitter. She was sad, though. But it was a hopeful kind of sad. The kind of sad that just takes time.",
        "author": "Stephen Chbosky,",
        "tags": [
            "the-perks-of-being-a-wallflower"
        ]
    },
    {
        "text": "A classic is a book that has never finished saying what it has to say.",
        "author": "Italo Calvino,",
        "tags": [
            "books",
            "classics",
            "literature",
            "meaning",
            "reading",
            "words"
        ]
    },
    {
        "text": "Love is an irresistible desire to be irresistibly desired.",
        "author": "Robert Frost",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Remember that wherever your heart is, there you will find your treasure.",
        "author": "Paulo Coelho,",
        "tags": [
            "confidence",
            "honesty"
        ]
    },
    {
        "text": "Everything tells me that I am about to make a wrong decision, but making mistakes is just part of life. What does the world want of me? Does it want me to take no risks, to go back to where I came from because I didn't have the courage to say \"yes\" to life?",
        "author": "Paulo Coelho,",
        "tags": [
            "eleven-minutes",
            "paulo-coelho"
        ]
    },
    {
        "text": "To the stars who listen—and the dreams that are answered.",
        "author": "Sarah J. Maas,",
        "tags": []
    },
    {
        "text": "The paradox of our time in history is that we have taller buildings but shorter tempers, wider Freeways, but narrower viewpoints. We spend more, but have less, we buy more, but enjoy less. We have bigger houses and smaller families, more conveniences, but less time. We have more degrees but less sense, more knowledge, but less judgment, more experts, yet more problems, more medicine, but less wellness.We drink too much, smoke too much, spend too recklessly, laugh too little, drive too fast, get too angry, stay up too late, get up too tired, read too little, watch TV too much, and pray too seldom. We have multiplied our possessions, but reduced our values. We talk too much, love too seldom, and hate too often.We've learned how to make a living, but not a life. We've added years to life not life to years. We've been all the way to the moon and back, but have trouble crossing the street to meet a new neighbor. We conquered outer space but not inner space. We've done larger things, but not better things.We've cleaned up the air, but polluted the soul. We've conquered the atom, but not our prejudice. We write more, but learn less. We plan more, but accomplish less. We've learned to rush, but not to wait. We build more computers to hold more information, to produce more copies than ever, but we communicate less and less.These are the times of fast foods and slow digestion, big men and small character, steep profits and shallow relationships.These are the days of two incomes but more divorce, fancier houses, but broken homes. These are days of quick trips, disposable diapers, throwaway morality, one night stands, overweight bodies, and pills that do everything from cheer, to quiet, to kill. It is a time when there is much in the showroom window and nothing in the stockroom. A time when technology can bring this letter to you, and a time when you can choose either to share this insight, or to just hit delete...Remember, to spend some time with your loved ones, because they are not going to be around forever. Remember, say a kind word to someone who looks up to you in awe, because that little person soon will grow up and leave your side.Remember, to give a warm hug to the one next to you, because that is the only treasure you can give with your heart and it doesn't cost a cent.Remember, to say, \"I love you\" to your partner and your loved ones, but most of all mean it. A kiss and an embrace will mend hurt when it comes from deep inside of you.Remember to hold hands and cherish the moment for someday that person might not be there again. Give time to love, give time to speak! And give time to share the precious thoughts in your mind.",
        "author": "Bob Moorehead,",
        "tags": [
            "misattributed-george-carlin"
        ]
    },
    {
        "text": "Success is liking yourself, liking what you do, and liking how you do it.",
        "author": "Maya Angelou",
        "tags": []
    },
    {
        "text": "I read a book one day and my whole life was changed.",
        "author": "Orhan Pamuk,",
        "tags": [
            "books",
            "orhan-pamuk",
            "reading",
            "the-new-life"
        ]
    },
    {
        "text": "That’s part of what I like about the book in some ways. It portrays death truthfully. You die in the middle of your life, in the middle of a sentence",
        "author": "John Green,",
        "tags": [
            "death-and-dying"
        ]
    },
    {
        "text": "But in the end one needs more courage to live than to kill himself.",
        "author": "Albert Camus",
        "tags": []
    },
    {
        "text": "There are far, far better things ahead than any we leave behind.",
        "author": "C.S. Lewis",
        "tags": []
    },
    {
        "text": "To see a World in a Grain of Sand And a Heaven in a Wild Flower, Hold Infinity in the palm of your hand And Eternity in an hour.",
        "author": "William Blake,",
        "tags": [
            "inspirational",
            "wonder"
        ]
    },
    {
        "text": "He thinks he'll be remembered as the villain in the story. But I forgot to tell him that the villain is usually the person who locks up the maiden and throws away the key. He was the one who let me out.",
        "author": "Sarah J. Maas,",
        "tags": [
            "a-court-of-mist-and-fury"
        ]
    },
    {
        "text": "I lived in books more than I lived anywhere else.",
        "author": "Neil Gaiman,",
        "tags": [
            "books"
        ]
    },
    {
        "text": "I love you. Remember. They cannot take it",
        "author": "Lauren Oliver,",
        "tags": [
            "amor-deliria-nervosa",
            "love"
        ]
    },
    {
        "text": "If you want to forget something or someone, never hate it, or never hate him/her. Everything and everyone that you hate is engraved upon your heart; if you want to let go of something, if you want to forget, you cannot hate.",
        "author": "C. JoyBell C.",
        "tags": [
            "forgetting",
            "hate",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "letting-go",
            "life",
            "life-and-living",
            "living",
            "strength"
        ]
    },
    {
        "text": "HopeSmiles from the threshold of the year to come, Whispering 'it will be happier'...",
        "author": "Alfred Lord Tennyson",
        "tags": [
            "happiness",
            "hope",
            "inspirational",
            "new-year"
        ]
    },
    {
        "text": "Everything can be taken from a man but one thing: the last of the human freedoms—to choose one’s attitude in any given set of circumstances, to choose one’s own way.",
        "author": "Viktor E. Frankl,",
        "tags": [
            "inspirational",
            "motivational"
        ]
    },
    {
        "text": "I have heard there are troubles of more than one kind. Some come from ahead and some come from behind. But I've bought a big bat. I'm all ready you see. Now my troubles are going to have troubles with me!",
        "author": "Dr. Seuss",
        "tags": [
            "troubles"
        ]
    },
    {
        "text": "I fell in love with her courage, her sincerity, and her flaming self respect. And it's these things I'd believe in, even if the whole world indulged in wild suspicions that she wasn't all she should be. I love her and it is the beginning of everything.",
        "author": "F. Scott Fitzgerald",
        "tags": [
            "love"
        ]
    },
    {
        "text": "And I like large parties. They’re so intimate. At small parties there isn’t any privacy.",
        "author": "F. Scott Fitzgerald,",
        "tags": [
            "jordan-baker"
        ]
    },
    {
        "text": "A book must be the axe for the frozen sea within us.",
        "author": "Franz Kafka",
        "tags": []
    },
    {
        "text": "Treat everyone with politeness and kindness, not because they are nice, but because you are.",
        "author": "Roy T. Bennett,",
        "tags": [
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "kind",
            "kindness",
            "life",
            "life-quotes",
            "living-life"
        ]
    },
    {
        "text": "Right now I’m having amnesia and déjà vu at the same time. I think I’ve forgotten this before.",
        "author": "Steven Wright",
        "tags": [
            "amnesia",
            "humor",
            "memory"
        ]
    },
    {
        "text": "All endings are also beginnings. We just don't know it at the time.",
        "author": "Mitch Albom,",
        "tags": [
            "profound"
        ]
    },
    {
        "text": "Don't Panic.",
        "author": "Douglas Adams,",
        "tags": [
            "h2g2",
            "hitchhiker-s-guide",
            "humor",
            "panic"
        ]
    },
    {
        "text": "If I cannot be better than them, I will become so much worse.",
        "author": "Holly Black,",
        "tags": []
    },
    {
        "text": "Of all forms of caution, caution in love is perhaps the most fatal to true happiness.",
        "author": "Bertrand Russell,",
        "tags": [
            "happiness",
            "love"
        ]
    },
    {
        "text": "Be grateful for what you already have while you pursue your goals. If you aren’t grateful for what you already have, what makes you think you would be happy with more.",
        "author": "Roy T. Bennett,",
        "tags": [
            "goal",
            "goals",
            "gratitude",
            "happiness",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "leader",
            "leadership",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "living",
            "motivation",
            "motivational",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking"
        ]
    },
    {
        "text": "Reading one book is like eating one potato chip.",
        "author": "Diane Duane,",
        "tags": [
            "books",
            "reading"
        ]
    },
    {
        "text": "An intellectual says a simple thing in a hard way. An artist says a hard thing in a simple way.",
        "author": "Charles Bukowski",
        "tags": []
    },
    {
        "text": "Start writing, no matter what. The water does not flow until the faucet is turned on.",
        "author": "Louis L'Amour",
        "tags": [
            "inspirational",
            "writing"
        ]
    },
    {
        "text": "And so it goes...",
        "author": "Kurt Vonnegut,",
        "tags": [
            "classics"
        ]
    },
    {
        "text": "Writing is a socially acceptable form of schizophrenia.",
        "author": "E.L. Doctorow",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "What would men be without women? Scarce, sir...mighty scarce.",
        "author": "Mark Twain",
        "tags": [
            "humor",
            "men",
            "women"
        ]
    },
    {
        "text": "No thief, however skillful, can rob one of knowledge, and that is why knowledge is the best and safest treasure to acquire.",
        "author": "L. Frank Baum,",
        "tags": [
            "knowledge",
            "thievery",
            "treasure"
        ]
    },
    {
        "text": "It is a curious thought, but it is only when you see people looking ridiculous that you realize just how much you love them.",
        "author": "Agatha Christie,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "The more I see, the less I know for sure.",
        "author": "John Lennon",
        "tags": [
            "beatles",
            "life",
            "perception",
            "truth"
        ]
    },
    {
        "text": "And now that you don't have to be perfect, you can be good.",
        "author": "John Steinbeck,",
        "tags": []
    },
    {
        "text": "The heart is an arrow. It demands aim to land true.",
        "author": "Leigh Bardugo,",
        "tags": [
            "arrow",
            "heart",
            "inej",
            "romance",
            "suli-poverb"
        ]
    },
    {
        "text": "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
        "author": "Maya Angelou",
        "tags": []
    },
    {
        "text": "You’ve got about as much charm as a dead slug.",
        "author": "Suzanne Collins,",
        "tags": [
            "the-hunger-games"
        ]
    },
    {
        "text": "Everyone has talent. What's rare is the courage to follow it to the dark places where it leads.",
        "author": "Erica Jong",
        "tags": [
            "courage",
            "talent"
        ]
    },
    {
        "text": "I can listen no longer in silence. I must speak to you by such means as are within my reach. You pierce my soul. I am half agony, half hope. Tell me not that I am too late, that such precious feelings are gone for ever. I offer myself to you again with a heart even more your own than when you almost broke it, eight years and a half ago. Dare not say that man forgets sooner than woman, that his love has an earlier death. I have loved none but you. Unjust I may have been, weak and resentful I have been, but never inconstant. You alone have brought me to Bath. For you alone, I think and plan. Have you not seen this? Can you fail to have understood my wishes? I had not waited even these ten days, could I have read your feelings, as I think you must have penetrated mine. I can hardly write. I am every instant hearing something which overpowers me. You sink your voice, but I can distinguish the tones of that voice when they would be lost on others. Too good, too excellent creature! You do us justice, indeed. You do believe that there is true attachment and constancy among men. Believe it to be most fervent, most undeviating, in F. W.I must go, uncertain of my fate; but I shall return hither, or follow your party, as soon as possible. A word, a look, will be enough to decide whether I enter your father's house this evening or never.",
        "author": "Jane Austen,",
        "tags": [
            "romance"
        ]
    },
    {
        "text": "Some birds are not meant to be caged, that's all. Their feathers are too bright, their songs too sweet and wild. So you let them go, or when you open the cage to feed them they somehow fly out past you. And the part of you that knows it was wrong to imprison them in the first place rejoices, but still, the place where you live is that much more drab and empty for their departure.",
        "author": "Stephen King,",
        "tags": [
            "birds",
            "freedom",
            "friends",
            "friendship",
            "letting-go"
        ]
    },
    {
        "text": "Tell your heart that the fear of suffering is worse than the suffering itself. And that no heart has ever suffered when it goes in search of its dreams, because every second of the search is a second's encounter with God and with eternity.",
        "author": "Paulo Coelho,",
        "tags": [
            "fear",
            "suffering"
        ]
    },
    {
        "text": "We all have our time machines, don't we. Those that take us back are memories...And those that carry us forward, are dreams.",
        "author": "H.G. Wells",
        "tags": []
    },
    {
        "text": "I believe the universe wants to be noticed. I think the universe is inprobably biased toward the consciousness, that it rewards intelligence in part because the universe enjoys its elegance being observed. And who am I, living in the middle of history, to tell the universe that it-or my observation of it-is temporary?",
        "author": "John Green,",
        "tags": [
            "john-green",
            "tfios",
            "the-fault-in-our-stars"
        ]
    },
    {
        "text": "There was nowhere to go but everywhere, so just keep on rolling under the stars.",
        "author": "Jack Kerouac,",
        "tags": []
    },
    {
        "text": "Francois Rabelais. He was a poet. And his last words were \"I go to seek a Great Perhaps.\" That's why I'm going. So I don't have to wait until I die to start seeking a Great Perhaps.",
        "author": "John Green,",
        "tags": [
            "francois-rabelais",
            "last-words"
        ]
    },
    {
        "text": "You know, one of the tragedies of real life is that there is no background music.",
        "author": "Annie Proulx",
        "tags": []
    },
    {
        "text": "Judge a man by his questions rather than by his answers.",
        "author": "Voltaire",
        "tags": [
            "answers",
            "man",
            "questions",
            "thinking"
        ]
    },
    {
        "text": "It was books that made me feel that perhaps I was not completely alone. They could be honest with me, and I with them.",
        "author": "Cassandra Clare,",
        "tags": [
            "will-herondale"
        ]
    },
    {
        "text": "Laters, baby.",
        "author": "E.L. James,",
        "tags": [
            "christina-grey",
            "e-l-james",
            "fifty-shades-of-grey"
        ]
    },
    {
        "text": "Books. Cats. Life is Good.",
        "author": "Edward Gorey",
        "tags": []
    },
    {
        "text": "Cinderella? Snow White? What's that? An illness?",
        "author": "J.K. Rowling,",
        "tags": [
            "fairytales"
        ]
    },
    {
        "text": "You believe lies so you eventually learn to trust no one but yourself.",
        "author": "Marilyn Monroe",
        "tags": []
    },
    {
        "text": "We are all atheists about most of the gods that humanity has ever believed in. Some of us just go one god further.",
        "author": "Richard Dawkins,",
        "tags": [
            "atheism",
            "philosophy"
        ]
    },
    {
        "text": "When you stop expecting people to be perfect, you can like them for who they are.",
        "author": "Donald Miller,",
        "tags": []
    },
    {
        "text": "Book collecting is an obsession, an occupation, a disease, an addiction, a fascination, an absurdity, a fate. It is not a hobby. Those who do it must do it.",
        "author": "Jeanette Winterson",
        "tags": []
    },
    {
        "text": "Learn what is to be taken seriously and laugh at the rest.",
        "author": "Herman Hesse",
        "tags": [
            "steppenwolf"
        ]
    },
    {
        "text": "He's a wallflower. You see things. You keep quiet about them. And you understand.",
        "author": "Stephen Chbosky,",
        "tags": [
            "wallflower"
        ]
    },
    {
        "text": "What Is Love? I have met in the streets a very poor young man who was in love. His hat was old, his coat worn, the water passed through his shoes and the stars through his soul",
        "author": "Victor Hugo ,",
        "tags": [
            "love",
            "soul",
            "stars"
        ]
    },
    {
        "text": "The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.",
        "author": "Friedrich Nietzsche",
        "tags": []
    },
    {
        "text": "I am a cage, in search of a bird.",
        "author": "Franz Kafka",
        "tags": []
    },
    {
        "text": "A good library will never be too neat, or too dusty, because somebody will always be in it, taking books off the shelves and staying up late reading them.",
        "author": "Lemony Snicket,",
        "tags": [
            "libraries",
            "reading"
        ]
    },
    {
        "text": "When the power of love overcomes the love of power, the world will know peace.",
        "author": "Jimi Hendrix",
        "tags": [
            "love",
            "misattributed",
            "peace",
            "william-gladstone"
        ]
    },
    {
        "text": "Believe in Your HeartBelieve in your heart that you're meant to live a life full of passion, purpose, magic and miracles.",
        "author": "Roy T. Bennett,",
        "tags": [
            "believe",
            "heart",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-quotes",
            "living",
            "magic",
            "miracles",
            "optimism",
            "optimistic",
            "passion",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "purpose"
        ]
    },
    {
        "text": "How vain it is to sit down to write when you have not stood up to live.",
        "author": "Henry David Thoreau",
        "tags": []
    },
    {
        "text": "Do you wish me a good morning, or mean that it is a good morning whether I want it or not; or that you feel good this morning; or that it is a morning to be good on?",
        "author": "J.R.R. Tolkien,",
        "tags": [
            "humor",
            "semantics",
            "suspicion"
        ]
    },
    {
        "text": "No matter how much suffering you went through, you never wanted to let go of those memories.",
        "author": "haruki murakami",
        "tags": [
            "letting-go",
            "life",
            "life-lessons",
            "memories"
        ]
    },
    {
        "text": "Why didn't I learn to treat everything like it was the last time. My greatest regret was how much I believed in the future.",
        "author": "Jonathan Safran Foer,",
        "tags": []
    },
    {
        "text": "أجمل حب هو الذي نعثر عليه أثناء بحثنا عن شيء آخر",
        "author": "أحلام مستغانمي",
        "tags": [
            "love",
            "حب"
        ]
    },
    {
        "text": "It's not natural for women to fight.\"\"It's not natural for someone to be as stupid as he is tall, and yet there you stand.",
        "author": "Leigh Bardugo,",
        "tags": []
    },
    {
        "text": "I go to seek a Great Perhaps.",
        "author": "François Rabelais",
        "tags": [
            "death",
            "french-renaissance-writer",
            "john-green",
            "last-words",
            "life",
            "looking-for-alaska",
            "meaning-of-life",
            "miles-halter"
        ]
    },
    {
        "text": "The Chinese use two brush strokes to write the word 'crisis.' One brush stroke stands for danger; the other for opportunity. In a crisis, be aware of the danger--but recognize the opportunity.",
        "author": "John F. Kennedy",
        "tags": [
            "chinese",
            "crisis",
            "danger",
            "inspirational",
            "opportunity"
        ]
    },
    {
        "text": "How do you feel, Georgie?\" whispered Mrs. Weasley.George's fingers groped for the side of his head.\"Saintlike,\" he murmured.\"What's wrong with him?\" croaked Fred, looking terrified. \"Is his mind affected?\"\"Saintlike,\" repeated George, opening his eyes and looking up at his brother. \"You see...I'm HOLEY, Fred, geddit?",
        "author": "J.K. Rowling,",
        "tags": [
            "harry-potter",
            "humor"
        ]
    },
    {
        "text": "History will be kind to me for I intend to write it.",
        "author": "Winston S. Churchill",
        "tags": [
            "history",
            "humor",
            "writing"
        ]
    },
    {
        "text": "You’re wishin’ too much, baby. You gotta stop wearing your wishbone where your backbone oughtta be.",
        "author": "Elizabeth Gilbert,",
        "tags": [
            "wish"
        ]
    },
    {
        "text": "After nourishment, shelter and companionship, stories are the thing we need most in the world.",
        "author": "Philip Pullman",
        "tags": [
            "books",
            "needs",
            "stories",
            "storytelling",
            "writing"
        ]
    },
    {
        "text": "Why are women... so much more interesting to men than men are to women?",
        "author": "Virginia Woolf",
        "tags": [
            "men",
            "rescuing",
            "women"
        ]
    },
    {
        "text": "The one thing that doesn't abide by majority rule is a person's conscience.",
        "author": "Harper Lee,",
        "tags": []
    },
    {
        "text": "It's just that...I just think that some things are meant to be broken. Imperfect. Chaotic. It's the universe's way of providing contrast, you know? There have to be a few holes in the road. It's how life is.",
        "author": "Sarah Dessen,",
        "tags": []
    },
    {
        "text": "Forever is composed of nows.",
        "author": "Emily Dickinson",
        "tags": [
            "carpe-diem",
            "live-in-the-moment"
        ]
    },
    {
        "text": "Albus Severus,\" Harry said quietly, so that nobody but Ginny could hear, and she was tactful enough to pretend to be waving to Rose, who was now on the train, \"you were named for two headmasters of Hogwarts. One of them was a Slytherin and he was probably the bravest man I ever knew.",
        "author": "J.K. Rowling,",
        "tags": []
    },
    {
        "text": "لن تكون متدينا إلا بالعلم ...فالله لا يعبد بالجهل",
        "author": "مصطفى محمود,",
        "tags": []
    },
    {
        "text": "If no one in the entire world cared about you, did you really exist at all?",
        "author": "Cassandra Clare,",
        "tags": [
            "tessa-gray",
            "theresa-gray"
        ]
    },
    {
        "text": "All the world's a stage, And all the men and women merely players; They have their exits and their entrances; And one man in his time plays many parts, His acts being seven ages.",
        "author": "William Shakespeare,",
        "tags": []
    },
    {
        "text": "To burn with desire and keep quiet about it is the greatest punishment we can bring on ourselves.",
        "author": "Federico García Lorca,",
        "tags": [
            "desire",
            "punishment",
            "unrequited-love"
        ]
    },
    {
        "text": "I don't believe in the kind of magic in my books. But I do believe something very magical can happen when you read a good book.",
        "author": "J.K. Rowling",
        "tags": [
            "books",
            "magic",
            "magic-books"
        ]
    },
    {
        "text": "Well, nowIf little by little you stop loving meI shall stop loving youLittle by littleIf suddenly you forget meDo not look for meFor I shall already have forgotten youIf you think it long and mad the wind of banners that passes through my lifeAnd you decide to leave me at the shore of the heart where I have rootsRememberThat on that day, at that hour, I shall lift my armsAnd my roots will set off to seek another land",
        "author": "Pablo Neruda,",
        "tags": [
            "forgetting",
            "heartbreak",
            "inspirational",
            "living",
            "love",
            "moving-on"
        ]
    },
    {
        "text": "Stories never really end...even if the books like to pretend they do. Stories always go on. They don't end on the last page, any more than they begin on the first page.",
        "author": "Cornelia Funke,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Basically, I have two speeds.... Hostile or smart-aleck. Your choice.",
        "author": "James Patterson,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "Don't.\" Clary raised a warning hand. \"I'm not really in the mood right now.\"\"That's got to be the first time a girl's ever said that to me,\" Jace mused.",
        "author": "Cassandra Clare,",
        "tags": [
            "clary-fray",
            "jace-wayland"
        ]
    },
    {
        "text": "If you're lonely when you're alone, you're in bad company.",
        "author": "Jean-Paul Sartre",
        "tags": [
            "loneliness",
            "solitude"
        ]
    },
    {
        "text": "Hate the sin, love the sinner.",
        "author": "Mahatma Gandhi",
        "tags": [
            "hate",
            "love",
            "religion",
            "sin",
            "sinners"
        ]
    },
    {
        "text": "I dream my painting and I paint my dream.",
        "author": "Vincent Willem van Gogh",
        "tags": [
            "art",
            "dreams",
            "inspiration",
            "painting"
        ]
    },
    {
        "text": "The function of prayer is not to influence God, but rather to change the nature of the one who prays.",
        "author": "Soren Kierkegaard",
        "tags": [
            "faith",
            "god",
            "prayer"
        ]
    },
    {
        "text": "We have to allow ourselves to be loved by the people who really love us, the people who really matter. Too much of the time, we are blinded by our own pursuits of people to love us, people that don't even matter, while all that time we waste and the people who do love us have to stand on the sidewalk and watch us beg in the streets! It's time to put an end to this. It's time for us to let ourselves be loved.",
        "author": "C. JoyBell C.",
        "tags": [
            "growing",
            "humanity",
            "inspirational",
            "inspirational-life",
            "inspirational-love",
            "inspirational-quotes",
            "learning",
            "life-and-living",
            "life-lessons",
            "love",
            "people",
            "real-love",
            "reality",
            "reality-of-life",
            "those-who-love-us",
            "to-be-loved",
            "true-love",
            "what-matters"
        ]
    },
    {
        "text": "A book, too, can be a star, a living fire to lighten the darkness, leading out into the expanding universe.",
        "author": "Madeleine L'Engle",
        "tags": [
            "books",
            "fire",
            "star",
            "universe"
        ]
    },
    {
        "text": "Nobody ever figures out what life is all about, and it doesn't matter. Explore the world. Nearly everything is really interesting if you go into it deeply enough.",
        "author": "Richard P. Feynman",
        "tags": []
    },
    {
        "text": "Life is to be enjoyed, not endured",
        "author": "Gordon B. Hinckley",
        "tags": [
            "life"
        ]
    },
    {
        "text": "Great spirits have always encountered violent opposition from mediocre minds.",
        "author": "Albert Einstein",
        "tags": [
            "greatness",
            "opposition",
            "spirit"
        ]
    },
    {
        "text": "War must be, while we defend our lives against a destroyer who would devour all; but I do not love the bright sword for its sharpness, nor the arrow for its swiftness, nor the warrior for his glory. I love only that which they defend.",
        "author": "J.R.R. Tolkien,",
        "tags": [
            "lotr",
            "war"
        ]
    },
    {
        "text": "You're off to Great Places!Today is your day!Your mountain is waiting,So... get on your way!",
        "author": "Dr. Seuss,",
        "tags": []
    },
    {
        "text": "Never close your lips to those whom you have already opened your heart.",
        "author": "Charles Dickens",
        "tags": [
            "kissing",
            "love",
            "romance"
        ]
    },
    {
        "text": "Reading is escape, and the opposite of escape; it's a way to make contact with reality after a day of making things up, and it's a way of making contact with someone else's imagination after a day that's all too real.",
        "author": "Nora Ephron",
        "tags": [
            "reading"
        ]
    },
    {
        "text": "In the midst of winter, I found there was, within me, an invincible summer.And that makes me happy. For it says that no matter how hard the world pushes against me, within me, there’s something stronger – something better, pushing right back.",
        "author": "Albert Camus",
        "tags": []
    },
    {
        "text": "People who claim that they're evil are usually no worse than the rest of us... It's people who claim that they're good, or any way better than the rest of us, that you have to be wary of.",
        "author": "Gregory Maguire,",
        "tags": [
            "evil",
            "good"
        ]
    },
    {
        "text": "If she's amazing, she won't be easy. If she's easy, she won't be amazing. If she's worth it, you wont give up. If you give up, you're not worthy. ... Truth is, everybody is going to hurt you; you just gotta find the ones worth suffering for.",
        "author": "Bob Marley,",
        "tags": [
            "inspirational",
            "love"
        ]
    },
    {
        "text": "You are imperfect, permanently and inevitably flawed. And you are beautiful.",
        "author": "Amy Bloom",
        "tags": [
            "beauty",
            "body-image",
            "imperfections",
            "self-acceptance"
        ]
    },
    {
        "text": "People are more difficult to work with than machines. And when you break a person, he can't be fixed.",
        "author": "Rick Riordan,",
        "tags": [
            "machines",
            "people"
        ]
    },
    {
        "text": "Sanity and happiness are an impossible combination.",
        "author": "Mark Twain",
        "tags": [
            "happiness",
            "sanity"
        ]
    },
    {
        "text": "The reason it hurts so much to separate is because our souls are connected.",
        "author": "Nicholas Sparks",
        "tags": [
            "hurt",
            "sad",
            "seperate",
            "soul"
        ]
    },
    {
        "text": "It isn't possible to love and part. You will wish that it was. You can transmute love, ignore it, muddle it, but you can never pull it out of you. I know by experience that the poets are right: love is eternal.",
        "author": "E.M. Forster,",
        "tags": [
            "love",
            "poets",
            "romance"
        ]
    },
    {
        "text": "Dance, when you're broken open. Dance, if you've torn the bandage off. Dance in the middle of the fighting. Dance in your blood. Dance when you're perfectly free.",
        "author": "Rumi",
        "tags": [
            "dance",
            "inspirational"
        ]
    },
    {
        "text": "there are worse thingsthan being alonebut it often takesdecades to realize thisand most often when you doit's too lateand there's nothing worsethan too late",
        "author": "Charles Bukowski",
        "tags": []
    },
    {
        "text": "Education is an admirable thing, but it is well to remember from time to time that nothing that is worth knowing can be taught.",
        "author": "Oscar Wilde",
        "tags": [
            "education-knowledge"
        ]
    },
    {
        "text": "I shut my eyes and all the world drops dead;I lift my lids and all is born again.(I think I made you up inside my head.)",
        "author": "Sylvia Plath",
        "tags": []
    },
    {
        "text": "I could easily forgive his pride, if he had not mortified mine.",
        "author": "Jane Austen,",
        "tags": []
    },
    {
        "text": "Follow your heart, listen to your inner voice, stop caring about what others think.",
        "author": "Roy T. Bennett,",
        "tags": [
            "be-yourself",
            "be-yourself-inspirational",
            "be-yourself-quote",
            "be-yourself-quotes",
            "heart",
            "inner-voice",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-quotes",
            "living",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "wisdom",
            "wise"
        ]
    },
    {
        "text": "And so with the sunshine and the great bursts of leaves growing on the trees, just as things grow in fast movies, I had that familiar conviction that life was beginning over again with the summer.",
        "author": "F. Scott Fitzgerald,",
        "tags": [
            "renewal",
            "summer"
        ]
    },
    {
        "text": "I'm so glad I live in a world where there are Octobers.",
        "author": "L. M. Montgomery,",
        "tags": []
    },
    {
        "text": "If you obey all of the rules, you miss all of the fun.",
        "author": "Katharine Hepburn",
        "tags": [
            "katharine-hepburn"
        ]
    },
    {
        "text": "You can't be happy unless you're unhappy sometimes\".",
        "author": "Lauren Oliver,",
        "tags": [
            "contrast",
            "happiness",
            "unhappiness"
        ]
    },
    {
        "text": "Things we lose have a way of coming back to us in the end, if not always in the way we expect.",
        "author": "JK Rowling,",
        "tags": [
            "death",
            "love"
        ]
    },
    {
        "text": "If you're losing your soul and you know it, then you've still got a soul left to lose",
        "author": "Charles Bukowski and Carl Weissner",
        "tags": []
    },
    {
        "text": "Just because you call an electric eel a rubber duck doesn't make it a rubber duck, does it? And God help the poor bastard who decides they want to take a bath with the duckie. (Jace Wayland)",
        "author": "Cassandra Clare,",
        "tags": [
            "city-of-bones",
            "humor",
            "jace-wayland"
        ]
    },
    {
        "text": "Now, you two – this year, you behave yourselves. If I get one more owl telling me you've – you've blown up a toilet or –\"\"Blown up a toilet? We've never blown up a toilet.\"\"Great idea though, thanks, Mum.",
        "author": "J.K. Rowling,",
        "tags": [
            "fred-weasley",
            "george-weasley",
            "humor",
            "molly-weasley",
            "toilet"
        ]
    },
    {
        "text": "When we are tired, we are attacked by ideas we conquered long ago.",
        "author": "Friedrich Nietzsche",
        "tags": []
    },
    {
        "text": "People think that intimacy is about sex. But intimacy is about truth. When you realize you can tell someone your truth, when you can show yourself to them, when you stand in front of them bare and their response is 'you're safe with me'- that's intimacy.",
        "author": "Taylor Jenkins Reid,",
        "tags": []
    },
    {
        "text": "When we are no longer able to change a situation, we are challenged to change ourselves.",
        "author": "Viktor E. Frankl,",
        "tags": [
            "motivation"
        ]
    },
    {
        "text": "Ah, said a voice from the doorway, having your annual ‘everyone thinks Will is a lunatic’ meeting, are you? It’s biannual, said Jem. And no, this is not that meeting.",
        "author": "Cassandra Clare,",
        "tags": [
            "clockwork-prince",
            "will-herondale"
        ]
    },
    {
        "text": "If you want to really hurt you parents, and you don't have the nerve to be gay, the least you can do is go into the arts. I'm not kidding. The arts are not a way to make a living. They are a very human way of making life more bearable. Practicing an art, no matter how well or badly, is a way to make your soul grow, for heaven's sake. Sing in the shower. Dance to the radio. Tell stories. Write a poem to a friend, even a lousy poem. Do it as well as you possible can. You will get an enormous reward. You will have created something.",
        "author": "Kurt Vonnegut,",
        "tags": [
            "art",
            "arts-and-humanities",
            "creative-process",
            "writing"
        ]
    },
    {
        "text": "Finally, from so little sleeping and so much reading, his brain dried up and he went completely out of his mind.",
        "author": "Miguel de Cervantes Saavedra,",
        "tags": [
            "books",
            "humor",
            "reading"
        ]
    },
    {
        "text": "This is your life and its ending one moment at a time.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "life"
        ]
    },
    {
        "text": "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
        "author": "Albert Camus",
        "tags": []
    },
    {
        "text": "Trees are poems the earth writes upon the sky, We fell them down and turn them into paper,That we may record our emptiness.",
        "author": "Kahlil Gibran",
        "tags": [
            "poetry",
            "wisdom"
        ]
    },
    {
        "text": "And on the subject of burning books: I want to congratulate librarians, not famous for their physical strength or their powerful political connections or their great wealth, who, all over this country, have staunchly resisted anti-democratic bullies who have tried to remove certain books from their shelves, and have refused to reveal to thought police the names of persons who have checked out those titles.So the America I loved still exists, if not in the White House or the Supreme Court or the Senate or the House of Representatives or the media. The America I love still exists at the front desks of our public libraries.",
        "author": "Kurt Vonnegut,",
        "tags": [
            "america",
            "books",
            "politics"
        ]
    },
    {
        "text": "A man can no more diminish God's glory by refusing to worship Him than a lunatic can put out the sun by scribbling the word 'darkness' on the walls of his cell.",
        "author": "C.S. Lewis,",
        "tags": [
            "god",
            "religion"
        ]
    },
    {
        "text": "But I don't want comfort. I want God, I want poetry, I want real danger, I want freedom, I want goodness. I want sin.",
        "author": "Aldous Huxley,",
        "tags": [
            "brave-new-world",
            "hunger",
            "thirst",
            "yearning"
        ]
    },
    {
        "text": "We are all alone, born alone, die alone, and—in spite of True Romance magazines—we shall all someday look back on our lives and see that, in spite of our company, we were alone the whole way. I do not say lonely—at least, not all the time—but essentially, and finally, alone. This is what makes your self-respect so important, and I don't see how you can respect yourself if you must look in the hearts and minds of others for your happiness.",
        "author": "Hunter S. Thompson,",
        "tags": [
            "alone",
            "birth",
            "death",
            "growing-up",
            "growth",
            "life",
            "lonely",
            "love",
            "self-respect"
        ]
    },
    {
        "text": "Maybe who we are isn't so much about what we do, but rather what we're capable of when we least expect it.",
        "author": "Jodi Picoult,",
        "tags": []
    },
    {
        "text": "Someone I loved once gave me a box full of darkness. It took me years to understand that this too, was a gift.",
        "author": "Mary Oliver",
        "tags": [
            "box",
            "darkness",
            "gift",
            "love"
        ]
    },
    {
        "text": "No amount of regretting can change the past, and no amount of worrying can change the future.",
        "author": "Roy T. Bennett,",
        "tags": [
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "life",
            "life-and-living",
            "life-quotes",
            "living-in-the-present",
            "living-life",
            "worry",
            "worrying"
        ]
    },
    {
        "text": "Many people lose the small joys in the hope for the big happiness.",
        "author": "Pearl S. Buck",
        "tags": [
            "contentment"
        ]
    },
    {
        "text": "Mom. I have something to tell you. I’m undead. Now, I know you may have some preconceived notions about the undead. I know you may not be comfortable with the idea of me being undead. But I’m here to tell you that undead are just like you and me … well, okay. Possibly more like me than you.",
        "author": "Cassandra Clare,",
        "tags": [
            "city-of-ashes",
            "humor",
            "mortal-instruments",
            "simon",
            "vampire"
        ]
    },
    {
        "text": "One cannot think well, love well, sleep well, if one has not dined well.",
        "author": "Virginia Woolf,",
        "tags": [
            "food",
            "love"
        ]
    },
    {
        "text": "The Road goes ever on and onDown from the door where it began.Now far ahead the Road has gone,And I must follow, if I can,Pursuing it with eager feet,Until it joins some larger wayWhere many paths and errands meet.And whither then? I cannot say",
        "author": "J.R.R. Tolkien,",
        "tags": [
            "road"
        ]
    },
    {
        "text": "Life is about accepting the challenges along the way, choosing to keep moving forward, and savoring the journey.",
        "author": "Roy T. Bennett,",
        "tags": [
            "challenge",
            "enjoy-the-journey",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "keep-moving-forward",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "living",
            "motivation",
            "motivational",
            "move-on",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking"
        ]
    },
    {
        "text": "I'm quite illiterate, but I read a lot.",
        "author": "J.D. Salinger,",
        "tags": [
            "holden"
        ]
    },
    {
        "text": "Once you have tasted flight, you will forever walk the earth with your eyes turned skyward, for there you have been, and there you will always long to return.",
        "author": "Leonardo da Vinci",
        "tags": [
            "flight",
            "flying",
            "inspirational"
        ]
    },
    {
        "text": "The best books... are those that tell you what you know already.",
        "author": "George Orwell,",
        "tags": [
            "books",
            "reading"
        ]
    },
    {
        "text": "The measure of intelligence is the ability to change.",
        "author": "Albert Einstein",
        "tags": [
            "adaptation",
            "flexibility",
            "intelligence",
            "open-mindedness",
            "wisdom"
        ]
    },
    {
        "text": "We have to continually be jumping off cliffs and developing our wings on the way down.",
        "author": "Kurt Vonnegut,",
        "tags": [
            "creativity",
            "invention",
            "quip",
            "wings",
            "writing"
        ]
    },
    {
        "text": "The most beautiful things in the world cannot be seen or touched, they are felt with the heart.",
        "author": "Antoine de Saint-Exupéry,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Top 15 Things Money Can’t BuyTime. Happiness. Inner Peace. Integrity. Love. Character. Manners. Health. Respect. Morals. Trust. Patience. Class. Common sense. Dignity.",
        "author": "Roy T. Bennett,",
        "tags": [
            "character",
            "class",
            "common-sense",
            "dignity",
            "happiness",
            "health",
            "inner-peace",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "integrity",
            "life",
            "life-quotes",
            "love",
            "manners",
            "money",
            "morals",
            "patience",
            "respect",
            "time",
            "trust"
        ]
    },
    {
        "text": "Be with me always - take any form - drive me mad! only do not leave me in this abyss, where I cannot find you! Oh, God! it is unutterable! I can not live without my life! I can not live without my soul!",
        "author": "Emily Brontë,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "One ought, every day at least, to hear a little song, read a good poem, see a fine picture, and, if it were possible, to speak a few reasonable words.",
        "author": "Johann Wolfgang von Goethe,",
        "tags": [
            "art",
            "good-life",
            "music",
            "poetry",
            "self-improvement"
        ]
    },
    {
        "text": "Don't be satisfied with stories, how things have gone with others. Unfold your own myth.",
        "author": "Rumi,",
        "tags": [
            "courage",
            "creativity",
            "empowerment",
            "independence",
            "inspirational-stories",
            "self-confidence",
            "self-realization"
        ]
    },
    {
        "text": "If you gave someone your heart and they died, did they take it with them? Did you spend the rest of forever with a hole inside you that couldn't be filled?",
        "author": "Jodi Picoult,",
        "tags": [
            "death",
            "heart",
            "love"
        ]
    },
    {
        "text": "Don't say you don't have enough time. You have exactly the same number of hours per day that were given to Helen Keller, Pasteur, Michelangelo, Mother Teresa, Leonardo da Vinci, Thomas Jefferson, and Albert Einstein.",
        "author": "H. Jackson Brown Jr.",
        "tags": [
            "inspirational",
            "life"
        ]
    },
    {
        "text": "Books have a unique way of stopping time in a particular moment and saying: Let’s not forget this.",
        "author": "Dave Eggers",
        "tags": [
            "books",
            "time"
        ]
    },
    {
        "text": "Have enough courage to trust love one more time and always one more time.",
        "author": "Maya Angelou",
        "tags": [
            "courage",
            "love",
            "trust"
        ]
    },
    {
        "text": "That was the thing. You never got used to it, the idea of someone being gone. Just when you think it's reconciled, accepted, someone points it out to you, and it just hits you all over again, that shocking.",
        "author": "Sarah Dessen,",
        "tags": [
            "death",
            "life"
        ]
    },
    {
        "text": "Reality is that which, when you stop believing in it, doesn't go away.",
        "author": "Philip K. Dick,",
        "tags": []
    },
    {
        "text": "You see, cuckoos are parasites. They lay their eggs in other birds' nests. When the egg hatches, the baby cuckoo pushes the other baby birds out of the nest. The poor parent birds work themselves to death trying to find enough food to feed the enormous cuckoo child who has murdered their babies and taken their places.\"\"Enormous?\" said Jace. \"Did you just call me fat?\"\"It was an analogy.\"\"I am not fat.",
        "author": "Cassandra Clare,",
        "tags": []
    },
    {
        "text": "Out of the corner of her eye she thought she saw Jace shoot her a look of white rage - but when she glanced at him, he looked as he always did: easy, confident, slightly bored.\"In future, Clarissa,\" he said, \"it might be wise to mention that you already have a man in your bed, to avoid such tedious situations.\"\"You invited him into bed?\" Simon demanded, looking shaken.\"Ridiculous, isn't it?\" said Jace. \"We would never have all fit.\"\"I didn't invite him into bed,\" Clary snapped. \"We were just kissing.\"\"Just kissing?\" Jace's tone mocked her with its false hurt. \"How swiftly you dismiss our love.",
        "author": "Cassandra Clare,",
        "tags": [
            "awkward",
            "humor"
        ]
    },
    {
        "text": "When someone is crying, of course, the noble thing to do is to comfort them. But if someone is trying to hide their tears, it may also be noble to pretend you do not notice them.",
        "author": "Lemony Snicket,",
        "tags": [
            "comfort",
            "crying",
            "tears"
        ]
    },
    {
        "text": "If you are allergic to a thing, it is best not to put that thing in your mouth, particularly if the thing is cats.",
        "author": "Lemony Snicket,",
        "tags": [
            "humor-cats-allergies"
        ]
    },
    {
        "text": "Don't take life too seriously. Punch it in the face when it needs a good hit. Laugh at it.",
        "author": "Colleen Hoover,",
        "tags": [
            "life"
        ]
    },
    {
        "text": "One love, one heart, one destiny.",
        "author": "Robert Marley",
        "tags": [
            "bob-marley",
            "compassion",
            "destiny",
            "heart",
            "humanity",
            "inspirational",
            "love"
        ]
    },
    {
        "text": "Every generation imagines itself to be more intelligent than the one that went before it, and wiser than the one that comes after it.",
        "author": "George Orwell",
        "tags": []
    },
    {
        "text": "If I should ever die, God forbid, let this be my epitaph:THE ONLY PROOF HE NEEDEDFOR THE EXISTENCE OF GODWAS MUSIC",
        "author": "kurt vonnegut",
        "tags": []
    },
    {
        "text": "If you are irritated by every rub, how will your mirror be polished?",
        "author": "Rumi",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "You don’t know what goes on in anyone’s life but your own. And when you mess with one part of a person’s life, you’re not messing with just that part. Unfortunately, you can’t be that precise and selective. When you mess with one part of a person’s life, you’re messing with their entire life. Everything. . . affects everything.",
        "author": "Jay Asher,",
        "tags": []
    },
    {
        "text": "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.",
        "author": "Plato",
        "tags": [
            "darkness",
            "dishonesty",
            "fear",
            "light",
            "willful-ignorance"
        ]
    },
    {
        "text": "I will not let anyone walk through my mind with their dirty feet.",
        "author": "Mahatma Gandhi",
        "tags": [
            "cleanliness",
            "consciousness",
            "corruption",
            "feet",
            "individuality",
            "mind",
            "purity"
        ]
    },
    {
        "text": "If you have two friends in your lifetime, you're lucky. If you have one good friend, you're more than lucky.",
        "author": "S.E. Hinton",
        "tags": [
            "friends",
            "friendship"
        ]
    },
    {
        "text": "Time is a drug. Too much of it kills you.",
        "author": "Terry Pratchett,",
        "tags": [
            "humor",
            "science"
        ]
    },
    {
        "text": "When a man is denied the right to live the life he believes in, he has no choice but to become an outlaw.",
        "author": "Nelson Mandela",
        "tags": []
    },
    {
        "text": "Holey? You have the the whole world of ear-related humor before you, you go for holey?",
        "author": "J.K. Rowling,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "I'm a grenade and at some point I'm going to blow up and I would like to minimize the casualties, okay?",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "You're not to be so blind with patriotism that you can't face reality. Wrong is wrong, no matter who does it or says it.",
        "author": "Malcolm X,",
        "tags": [
            "philosophy",
            "politics"
        ]
    },
    {
        "text": "I shut my eyes and all the world drops dead; I lift my eyes and all is born again.",
        "author": "Sylvia Plath,",
        "tags": [
            "poetry"
        ]
    },
    {
        "text": "When someone leaves, it's because someone else is about to arrive.",
        "author": "Paulo Coelho,",
        "tags": []
    },
    {
        "text": "I wantTo do with you what spring does with the cherry trees.",
        "author": "Pablo Neruda,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Love is not affectionate feeling, but a steady wish for the loved person's ultimate good as far as it can be obtained.",
        "author": "C.S. Lewis",
        "tags": []
    },
    {
        "text": "In ancient times cats were worshipped as gods; they have not forgotten this.",
        "author": "Terry Pratchett",
        "tags": []
    },
    {
        "text": "Three Rings for the Elven-kings under the sky, Seven for the Dwarf-lords in their halls of stone,Nine for Mortal Men, doomed to die, One for the Dark Lord on his dark throneIn the Land of Mordor where the Shadows lie. One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.In the Land of Mordor where the Shadows lie.",
        "author": "J.R.R. Tolkien",
        "tags": []
    },
    {
        "text": "Acts of Kindness:A random act of kindness, no matter how small, can make a tremendous impact on someone else's life.",
        "author": "Roy T. Bennett,",
        "tags": [
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "kind",
            "kindness",
            "life",
            "life-quotes",
            "living",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking"
        ]
    },
    {
        "text": "When you do things from your soul, you feel a river moving in you, a joy.",
        "author": "Rumi",
        "tags": [
            "joy"
        ]
    },
    {
        "text": "The greater the love, the greater the tragedy when it's over.",
        "author": "Nicholas Sparks,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Any fool can be happy. It takes a man with real heart to make beauty out of the stuff that makes us weep.",
        "author": "Clive Barker,",
        "tags": [
            "art",
            "inspirational",
            "love",
            "redemption",
            "sadness"
        ]
    },
    {
        "text": "Even death has a heart.",
        "author": "Markus Zusak,",
        "tags": [
            "death",
            "life"
        ]
    },
    {
        "text": "People, I have discovered, are layers and layers of secrets. You believe you know them, that you understand them, but their motives are always hidden from you, buried in their own hearts. You will never know them, but sometimes you decide to trust them.",
        "author": "Veronica Roth,",
        "tags": []
    },
    {
        "text": "Usually I'm remarkably good natured. Try me on a day that doesn't end in y.",
        "author": "Cassandra Clare",
        "tags": [
            "jace",
            "mortal-instruments"
        ]
    },
    {
        "text": "You were born with wings, why prefer to crawl through life?",
        "author": "Rumi",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "There was a clatter as the basilisk fangs cascaded out of Hermione's arms. Running at Ron, she flung them around his neck and kissed him full on the mouth. Ron threw away the fangs and broomstick he was holding and responded with such enthusiasm that he lifted Hermione off her feet. \"Is this the moment?\" Harry asked weakly, and when nothing happened except that Ron and Hermione gripped each other still more firmly and swayed on the spot, he raised his voice. \"OI! There's a war going on here!\" Ron and Hermione broke apart, their arms still around each other. \"I know, mate,\" said Ron, who looked as though he had recently been hit on the back of the head with a Bludger, \"so it's now or never, isn't it?\" \"Never mind that, what about the Horcrux?\" Harry shouted. \"D'you think you could just --- just hold it in, until we've got the diadem?\" \"Yeah --- right --- sorry ---\" said Ron, and he and Hermione set about gathering up fangs, both pink in the face.",
        "author": "J.K. Rowling,",
        "tags": [
            "love",
            "romance",
            "war"
        ]
    },
    {
        "text": "Fighting for peace is like screwing for virginity.",
        "author": "George Carlin",
        "tags": [
            "fighting",
            "humor",
            "misattributed-george-carlin",
            "peace",
            "sex"
        ]
    },
    {
        "text": "I can resist anything except temptation.",
        "author": "Oscar Wilde,",
        "tags": [
            "temptation"
        ]
    },
    {
        "text": "I, myself, am made entirely of flaws, stitched together with good intentions.",
        "author": "Augusten Burroughs",
        "tags": [
            "flaws",
            "individuality"
        ]
    },
    {
        "text": "Life shrinks or expands in proportion to one's courage.",
        "author": "Anais Nin",
        "tags": [
            "courage",
            "life"
        ]
    },
    {
        "text": "Maybe ever’body in the whole damn world is scared of each other.",
        "author": "John Steinbeck,",
        "tags": [
            "loneliness",
            "people",
            "scared",
            "world"
        ]
    },
    {
        "text": "Be brave to stand for what you believe in even if you stand alone.",
        "author": "Roy T. Bennett,",
        "tags": [
            "belief",
            "beliefs",
            "believe",
            "courage",
            "courage-quotes",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-quotes",
            "living",
            "motivation",
            "motivational",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking"
        ]
    },
    {
        "text": "Stories may well be lies, but they are good lies that say true things, and which can sometimes pay the rent.",
        "author": "Neil Gaiman",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "Forget safety.Live where you fear to live.Destroy your reputation.Be notorious.",
        "author": "Rumi",
        "tags": []
    },
    {
        "text": "There are no faster or firmer friendships than those formed between people who love the same books.",
        "author": "Irving Stone,",
        "tags": [
            "books",
            "friendship"
        ]
    },
    {
        "text": "Solitude is fine but you need someone to tell that solitude is fine.",
        "author": "Honoré de Balzac",
        "tags": []
    },
    {
        "text": "The secret of health for both mind and body is not to mourn for the past, nor to worry about the future, but to live the present moment wisely and earnestly.",
        "author": "Bukkyo Dendo Kyokai,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Because you are beautiful. I enjoy looking at beautiful people, and I decided a while ago not to deny myself the simpler pleasures of existence",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "And still, after all this time,The sun never says to the earth,\"You owe Me.\"Look what happens withA love like that,It lights the Whole Sky.",
        "author": "Hafiz",
        "tags": [
            "faith",
            "inspiration"
        ]
    },
    {
        "text": "These violent delights have violent endsAnd in their triumph die, like fire and powder,Which as they kiss consume. The sweetest honeyIs loathsome in his own deliciousnessAnd in the taste confounds the appetite.Therefore love moderately; long love doth so;Too swift arrives as tardy as too slow.",
        "author": "William Shakespeare,",
        "tags": [
            "romeo-and-juliet",
            "shakespeare"
        ]
    },
    {
        "text": "The thing about growing up with Fred and George,\" said Ginny thoughtfully, \"is that you sort of start thinking anything's possible if you've got enough nerve.",
        "author": "J. K. Rowling,",
        "tags": [
            "ginny-weasley"
        ]
    },
    {
        "text": "We all bear scars,... Mine just happen to be more visible than most.",
        "author": "Sarah J. Maas,",
        "tags": []
    },
    {
        "text": "So be sure when you step, Step with care and great tact. And remember that life's A Great Balancing Act. And will you succeed? Yes! You will, indeed! (98 and ¾ percent guaranteed) Kid, you'll move mountains.",
        "author": "Dr. Seuss,",
        "tags": [
            "humor",
            "inspirational",
            "success"
        ]
    },
    {
        "text": "Maybe there's something you're afraid to say, or someone you're afraid to love, or somewhere you're afraid to go. It's gonna hurt. It's gonna hurt because it matters.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "The moment you doubt whether you can fly, you cease for ever to be able to do it.",
        "author": "J. M. Barrie,",
        "tags": [
            "barrie",
            "belief",
            "fantasy",
            "flying",
            "imagination",
            "kensington-gardens",
            "london",
            "magic",
            "neverland",
            "park",
            "peter-pan",
            "scotland",
            "self-confidence"
        ]
    },
    {
        "text": "Always do sober what you said you'd do drunk. That will teach you to keep your mouth shut.",
        "author": "Ernest Hemingway",
        "tags": [
            "drinking"
        ]
    },
    {
        "text": "But a mermaid has no tears, and therefore she suffers so much more.",
        "author": "Hans Christian Andersen,",
        "tags": []
    },
    {
        "text": "What you do, the way you think, makes you beautiful.",
        "author": "Scott Westerfeld,",
        "tags": [
            "beauty",
            "david",
            "uglies",
            "westerfeld"
        ]
    },
    {
        "text": "You know what charm is: a way of getting the answer yes without having asked any clear question.",
        "author": "Albert Camus,",
        "tags": []
    },
    {
        "text": "I wanted to tell the book thief many things, about beauty and brutality. But what could I tell her about those things that she didn't already know? I wanted to explain that I am constantly overestimating and underestimating the human race-that rarely do I ever simply estimate it. I wanted to ask her how the same thing could be so ugly and so glorious, and its words and stories so damning and brilliant.",
        "author": "Markus Zusak,",
        "tags": []
    },
    {
        "text": "Confront the dark parts of yourself, and work to banish them with illumination and forgiveness. Your willingness to wrestle with your demons will cause your angels to sing.",
        "author": "August Wilson",
        "tags": [
            "character",
            "courage",
            "self-assessment",
            "self-esteem",
            "strength"
        ]
    },
    {
        "text": "The first draft of anything is shit.",
        "author": "Ernest Hemingway",
        "tags": [
            "attributed-no-source",
            "writing"
        ]
    },
    {
        "text": "When I was a boy of 14, my father was so ignorant I could hardly stand to have the old man around. But when I got to be 21, I was astonished at how much the old man had learned in seven years.",
        "author": "Mark Twain",
        "tags": [
            "arrogance",
            "humor",
            "ignorance"
        ]
    },
    {
        "text": "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
        "author": "Ralph Waldo Emerson",
        "tags": [
            "helping-others",
            "make-a-difference",
            "purpose",
            "purpose-of-life"
        ]
    },
    {
        "text": "I do things like get in a taxi and say, \"The library, and step on it.",
        "author": "David Foster Wallace,",
        "tags": [
            "books",
            "infinite-jest"
        ]
    },
    {
        "text": "You cannot pick and choose what parts of her to love.",
        "author": "Sarah J. Maas,",
        "tags": []
    },
    {
        "text": "After silence, that which comes nearest to expressing the inexpressible is music.",
        "author": "Aldous Huxley,",
        "tags": [
            "music"
        ]
    },
    {
        "text": "As if you were on fire from within.The moon lives in the lining of your skin.",
        "author": "Pablo Neruda",
        "tags": [
            "beauty",
            "inner-beauty",
            "love",
            "passion"
        ]
    },
    {
        "text": "You speak an infinite deal of nothing.",
        "author": "William Shakespeare,",
        "tags": [
            "insults",
            "shakespeare"
        ]
    },
    {
        "text": "It is true that those we meet can change us, sometimes so profoundly that we are not the same afterwards, even unto our names.",
        "author": "Yann Martel,",
        "tags": []
    },
    {
        "text": "An expert is a person who has made all the mistakes that can be made in a very narrow field.",
        "author": "Niels Bohr",
        "tags": [
            "science"
        ]
    },
    {
        "text": "He does something to me, that boy. Every time. It’s his only detriment. He steps on my heart. He makes me cry.",
        "author": "Markus Zusak,",
        "tags": [
            "heartbreak",
            "love",
            "sad"
        ]
    },
    {
        "text": "I am an excitable person who only understands life lyrically, musically, in whom feelings are much stronger as reason. I am so thirsty for the marvelous that only the marvelous has power over me. Anything I can not transform into something marvelous, I let go. Reality doesn't impress me. I only believe in intoxication, in ecstasy, and when ordinary life shackles me, I escape, one way or another. No more walls.",
        "author": "Anais Nin",
        "tags": [
            "anais-nin",
            "art"
        ]
    },
    {
        "text": "How did it get so late so soon?",
        "author": "Dr. Seuss",
        "tags": [
            "afternoon",
            "december",
            "flewn",
            "june",
            "late",
            "night",
            "soon",
            "time"
        ]
    },
    {
        "text": "Don't feel bad, I'm usually about to die.",
        "author": "Rick Riordan,",
        "tags": [
            "death",
            "greek",
            "humor",
            "mythology",
            "percy-jackson",
            "sorry"
        ]
    },
    {
        "text": "For last year's words belong to last year's language And next year's words await another voice.",
        "author": "T.S. Eliot,",
        "tags": [
            "language",
            "new-year",
            "voice",
            "words"
        ]
    },
    {
        "text": "All you have to do is write one true sentence. Write the truest sentence that you know.",
        "author": "Ernest Hemingway",
        "tags": [
            "truth",
            "writing",
            "writing-advice"
        ]
    },
    {
        "text": "All great and precious things are lonely.",
        "author": "John Steinbeck,",
        "tags": [
            "loneliness"
        ]
    },
    {
        "text": "I would like to be the air that inhabits you for a moment only. I would like to be that unnoticed and that necessary.",
        "author": "Margaret Atwood",
        "tags": [
            "love",
            "obsession",
            "sleep"
        ]
    },
    {
        "text": "أحيانًا يساعدنا الآخرون بأن يكونوا فى حياتنا فحسب",
        "author": "أحمد خالد توفيق",
        "tags": [
            "life"
        ]
    },
    {
        "text": "Literature is the most agreeable way of ignoring life.",
        "author": "Fernando Pessoa,",
        "tags": [
            "literature",
            "reading",
            "solitude"
        ]
    },
    {
        "text": "What makes the desert beautiful,' said the little prince, 'is that somewhere it hides a well...",
        "author": "Antoine de Saint-Exupéry,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "There are years that ask questions and years that answer.",
        "author": "Zora Neale Hurston,",
        "tags": [
            "inspiration"
        ]
    },
    {
        "text": "To me, Fearless is not the absense of fear. It's not being completely unafraid. To me, Fearless is having fears. Fearless is having doubts. Lots of them. To me, Fearless is living in spite of those things that scare you to death.",
        "author": "Taylor Swift",
        "tags": [
            "fearless",
            "inspirational",
            "love"
        ]
    },
    {
        "text": "The world was hers for the reading.",
        "author": "Betty Smith,",
        "tags": [
            "books",
            "feminist",
            "reading"
        ]
    },
    {
        "text": "Understanding is the first step to acceptance, and only with acceptance can there be recovery.",
        "author": "J.K. Rowling,",
        "tags": [
            "acceptance",
            "inspiration",
            "inspirational",
            "smart",
            "understanding",
            "wise"
        ]
    },
    {
        "text": "People demand freedom of speech as a compensation for the freedom of thought which they seldom use.",
        "author": "Søren Kierkegaard",
        "tags": [
            "civil-rights",
            "free-speech",
            "free-will",
            "freedom",
            "intelligence",
            "liberty",
            "stupidity"
        ]
    },
    {
        "text": "The world breaks everyone, and afterward, many are strong at the broken places.",
        "author": "Ernest Hemingway",
        "tags": []
    },
    {
        "text": "It is a great thing to start life with a small number of really good books which are your very own.",
        "author": "Arthur Conan Doyle",
        "tags": [
            "books",
            "humor"
        ]
    },
    {
        "text": "How wrong is it for a woman to expect the man to build the world she wants, rather than to create it herself?",
        "author": "Anais Nin",
        "tags": [
            "independence",
            "women"
        ]
    },
    {
        "text": "Imagine smiling after a slap in the face. Then think of doing it twenty-four hours a day.",
        "author": "Markus Zusak,",
        "tags": [
            "pain",
            "sadness",
            "stoicism"
        ]
    },
    {
        "text": "No, I'm just a very naughty boy. I do all sorts of bad things. I kick kittens. I make rude gestures at nuns.",
        "author": "Cassandra Clare,",
        "tags": []
    },
    {
        "text": "Do your thing and don't care if they like it.",
        "author": "Tina Fey,",
        "tags": []
    },
    {
        "text": "Both Rowling and Meyer, they’re speaking directly to young people. … The real difference is that Jo Rowling is a terrific writer and Stephenie Meyer can’t write worth a darn. She’s not very good.",
        "author": "Stephen King",
        "tags": [
            "harry-potter",
            "jk-rowling",
            "stephenie-meyer",
            "twilight"
        ]
    },
    {
        "text": "They say when you are missing someone that they are probably feeling the same, but I don't think it's possible for you to miss me as much as I'm missing you right now",
        "author": "Edna St. Vincent Millay",
        "tags": []
    },
    {
        "text": "Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.",
        "author": "Steve Maraboli",
        "tags": [
            "destiny",
            "happiness",
            "history",
            "inspirational",
            "let-go",
            "letting-go",
            "life",
            "motivational",
            "moving-on",
            "success"
        ]
    },
    {
        "text": "I dream. Sometimes I think that's the only right thing to do.",
        "author": "Haruki Murakami,",
        "tags": [
            "dreaming",
            "dreams"
        ]
    },
    {
        "text": "If you do not tell the truth about yourself you cannot tell it about other people.",
        "author": "Virginia Woolf",
        "tags": [
            "honesty",
            "lies",
            "stories",
            "truth"
        ]
    },
    {
        "text": "Many a book is like a key to unknown chambers within the castle of one’s own self.",
        "author": "Franz Kafka",
        "tags": [
            "books",
            "castle",
            "self"
        ]
    },
    {
        "text": "We should consider every day lost on which we have not danced at least once.",
        "author": "Friedrich Wilhelm Nietzsche",
        "tags": [
            "dance",
            "dancing",
            "music"
        ]
    },
    {
        "text": "The happiness of your life depends upon the quality of your thoughts.",
        "author": "Marcus Aurelius,",
        "tags": [
            "happiness"
        ]
    },
    {
        "text": "It's not the face, but the expressions on it. It's not the voice, but what you say. It's not how you look in that body, but the thing you do with it. You are beautiful.",
        "author": "Stephenie Meyer,",
        "tags": [
            "inspirational",
            "love"
        ]
    },
    {
        "text": "Isn't it odd how much fatter a book gets when you've read it several times?\" Mo had said...\"As if something were left between the pages every time you read it. Feelings, thoughts, sounds, smells...and then, when you look at the book again many years later, you find yourself there, too, a slightly younger self, slightly different, as if the book had preserved you like a pressed flower...both strange and familiar.",
        "author": "Cornelia Funke,",
        "tags": [
            "books",
            "feelings",
            "reading",
            "thoughts"
        ]
    },
    {
        "text": "Jesper knocked his head against the hull and cast his eyes heavenward. Fine. But if Pekka Rollins kills us all, I’m going to get Wylan’s ghost to teach my ghost how to play the flute just so that I can annoy the hell out of your ghost.Brekker’s lips quirked. I’ll just hire Matthias’ ghost to kick your ghost’s ass.My ghost won’t associate with your ghost, Matthias said primly, and then wondered if the sea air was rotting his brain.",
        "author": "Leigh Bardugo,",
        "tags": [
            "funny",
            "ghost",
            "jesper",
            "six-of-crows"
        ]
    },
    {
        "text": "If you ever find yourself in the wrong story, leave.",
        "author": "Mo Willems,",
        "tags": [
            "fairy-tales",
            "humor",
            "humorous",
            "philosophy",
            "psychology"
        ]
    },
    {
        "text": "Life appears to me too short to be spent in nursing animosity or registering wrongs.",
        "author": "Charlotte Bronte,",
        "tags": [
            "grudges"
        ]
    },
    {
        "text": "Atticus told me to delete the adjectives and I'd have the facts.",
        "author": "Harper Lee,",
        "tags": [
            "writing-advice"
        ]
    },
    {
        "text": "You is kind. You is smart. You is important.",
        "author": "Kathryn Stockett,",
        "tags": []
    },
    {
        "text": "Goodbye,\" said the fox. \"And now here is my secret, a very simple secret: It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
        "author": "Antoine de Saint-Exupéry",
        "tags": [
            "most-famous-novella"
        ]
    },
    {
        "text": "Suffering has been stronger than all other teaching, and has taught me to understand what your heart used to be. I have been bent and broken, but - I hope - into a better shape.",
        "author": "Charles Dickens,",
        "tags": [
            "growth",
            "heart",
            "life",
            "suffering"
        ]
    },
    {
        "text": "It is not that I'm so smart. But I stay with the questions much longer.",
        "author": "Albert Einstein",
        "tags": [
            "intelligence",
            "learning",
            "wisdom"
        ]
    },
    {
        "text": "It's been my experience that you can nearly always enjoy things if you make up your mind firmly that you will.",
        "author": "Lucy Maud Montgomery,",
        "tags": [
            "happiness"
        ]
    },
    {
        "text": "I cannot believe in a God who wants to be praised all the time.",
        "author": "Friedrich Nietzsche",
        "tags": [
            "agama",
            "agnosticism",
            "prayer",
            "religion"
        ]
    },
    {
        "text": "I think we ought to read only the kind of books that wound or stab us. If the book we're reading doesn't wake us up with a blow to the head, what are we reading for? So that it will make us happy, as you write? Good Lord, we would be happy precisely if we had no books, and the kind of books that make us happy are the kind we could write ourselves if we had to. But we need books that affect us like a disaster, that grieve us deeply, like the death of someone we loved more than ourselves, like being banished into forests far from everyone, like a suicide. A book must be the axe for the frozen sea within us. That is my belief.",
        "author": "Franz Kafka",
        "tags": []
    },
    {
        "text": "We waste time looking for the perfect lover, instead of creating the perfect love.",
        "author": "Tom Robbins",
        "tags": []
    },
    {
        "text": "There is not always a good guy. Nor is there always a bad one. Most people are somewhere in between.",
        "author": "Patrick Ness,",
        "tags": []
    },
    {
        "text": "It doesn't interest me what you do for a living. I want to know what you ache for, and if you dare to dream of meeting your heart's longing.It doesn't interest me how old you are. I want to know if you will risk looking like a fool for love, for your dream, for the adventure of being alive. It doesn't interest me what planets are squaring your moon. I want to know if you have touched the center of your own sorrow, if you have been opened by life's betrayals or have become shriveled and closed from fear of further pain!I want to know if you can sit with pain, mine or your own, without moving to hide it or fade it, or fix it. I want to know if you can be with joy, mine or your own, if you can dance with wildness and let the ecstasy fill you to the tips of your fingers and toes without cautioning us to be careful, to be realistic, to remember the limitations of being human. It doesn't interest me if the story you are telling me is true. I want to know if you can disappoint another to be true to yourself; if you can bear the accusation of betrayal and not betray your own soul; if you can be faithlessand therefore trustworthy. I want to know if you can see beauty even when it's not pretty, every day,and if you can source your own life from its presence. I want to know if you can live with failure, yours and mine, and still stand on the edge of the lake and shout to the silver of the full moon, Yes!It doesn't interest me to know where you live or how much money you have. I want to know if you can get up, after the night of grief and despair, weary and bruised to the bone, and do what needs to be done to feed the children. It doesn't interest me who you know or how you came to be here. I want to know if you will stand in the center of the fire with me and not shrink back. It doesn't interest me where or what or with whom you have studied. I want to know what sustains you, from the inside, when all else falls away. I want to know if you can be alone with yourself and if you truly like the company you keep in the empty moments.",
        "author": "Oriah Mountain Dreamer",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "The beginning of love is the will to let those we love be perfectly themselves, the resolution not to twist them to fit our own image. If in loving them we do not love what they are, but only their potential likeness to ourselves, then we do not love them: we only love the reflection of ourselves we find in them",
        "author": "Thomas Merton,",
        "tags": [
            "friendship",
            "love",
            "self-discovery",
            "trust",
            "truth"
        ]
    },
    {
        "text": "Never be afraid to trust an unknown future to a known God.",
        "author": "Corrie ten Boom",
        "tags": [
            "faith",
            "future",
            "god",
            "trust"
        ]
    },
    {
        "text": "Tonight I can write the saddest linesI loved her, and sometimes she loved me too.",
        "author": "Pablo Neruda,",
        "tags": [
            "love",
            "sadness"
        ]
    },
    {
        "text": "The bravest people are the ones who don’t mind looking like cowards.",
        "author": "T.H. White,",
        "tags": []
    },
    {
        "text": "I was thinking about the first time I ever saw you,\" he said, \"and how after that I couldn't forget you. I wanted to, but I couldn't stop myself. I forced Hodge to let me be the one who came to find you and bring you back to the Institue. And even back then, in that stupid coffee shop, when I saw you sitting on that couch with Simon, even then that felt wrong to me-- I should have been the one sitting with you. The one who made you laugh like that. I couldn't get rid of that feeling. That it should have been me. And the more I knew you, the more I felt it--it had never been like that for me before. I'd always wanted a girl and then gotten to know her and not wanted her anymore, but with you the feeling just got stronger and stronger until that night when you showed up at Renwick's and I knew.",
        "author": "Cassandra Clare,",
        "tags": [
            "mortal-instruments",
            "teen-fantasy"
        ]
    },
    {
        "text": "Today a reader, tomorrow a leader.",
        "author": "Margaret Fuller",
        "tags": [
            "read",
            "reader",
            "reading"
        ]
    },
    {
        "text": "You might be poor, your shoes might be broken, but your mind is a palace.",
        "author": "Frank McCourt,",
        "tags": [
            "intelligence",
            "mind",
            "poverty"
        ]
    },
    {
        "text": "I never change, I simply become more myself.",
        "author": "Joyce Carol Oates,",
        "tags": []
    },
    {
        "text": "A cynic is a man who knows the price of everything, and the value of nothing.",
        "author": "Oscar Wilde",
        "tags": [
            "cynicism"
        ]
    },
    {
        "text": "It's not because I want to make out with her.\"Hold on.\" He grabbed a pencil and scrawled excitedly at the paper as if he'd just made a mathematical breakthrough and then looked back up at me. \"I just did some calculations, and I've been able to determine that you're full of shit",
        "author": "John Green,",
        "tags": [
            "funny"
        ]
    },
    {
        "text": "Words are easy, like the wind; faithful friends are hard to find.",
        "author": "William Shakespeare,",
        "tags": [
            "friendship"
        ]
    },
    {
        "text": "Perhaps it's impossible to wear an identity without becoming what you pretend to be.",
        "author": "Orson Scott Card,",
        "tags": [
            "identity",
            "pretend"
        ]
    },
    {
        "text": "It happens to everyone as they grow up. You find out who you are and what you want, and then you realize that people you've known forever don't see things the way you do. So you keep the wonderful memories, but find yourself moving on.",
        "author": "Nicholas Sparks",
        "tags": [
            "moving-on"
        ]
    },
    {
        "text": "Live in the sunshine, swim the sea, drink the wild air.",
        "author": "Ralph Waldo Emerson",
        "tags": []
    },
    {
        "text": "Never lose hope. Storms make people stronger and never last forever.",
        "author": "Roy T. Bennett,",
        "tags": [
            "adversity",
            "difficulty",
            "hope",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "living",
            "motivation",
            "motivational",
            "optimism",
            "optimistic",
            "perseverance",
            "persistence",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "storms"
        ]
    },
    {
        "text": "Happiness is the consequence of personal effort. You fight for it, strive for it, insist upon it, and sometimes even travel around the world looking for it. You have to participate relentlessly in the manifestations of your own blessings. And once you have achieved a state of happiness, you must never become lax about maintaining it. You must make a mighty effort to keep swimming upward into that happiness forever, to stay afloat on top of it.",
        "author": "Elizabeth Gilbert,",
        "tags": [
            "happiness"
        ]
    },
    {
        "text": "You here to finish me off, Sweetheart?",
        "author": "Suzanne Collins,",
        "tags": [
            "humor",
            "hunger-games",
            "katniss",
            "mellark",
            "peeta",
            "romance"
        ]
    },
    {
        "text": "He stepped down, trying not to look long at her, as if she were the sun, yet he saw her, like the sun, even without looking.",
        "author": "Leo Tolstoy,",
        "tags": [
            "romantic"
        ]
    },
    {
        "text": "It is forbidden to kill; therefore all murderers are punished unless they kill in large numbers and to the sound of trumpets.",
        "author": "Voltaire",
        "tags": [
            "double-standards",
            "ethics",
            "governments",
            "humor",
            "irony",
            "killing",
            "law",
            "mankind",
            "morality",
            "murder",
            "nationalism",
            "nations",
            "war"
        ]
    },
    {
        "text": "Don't waste your time with explanations: people only hear what they want to hear.",
        "author": "Paulo Coelho",
        "tags": [
            "attitude",
            "explain",
            "gossip",
            "life",
            "people",
            "public-opinion",
            "time",
            "wisdom"
        ]
    },
    {
        "text": "Gravitation is not responsible for people falling in love.",
        "author": "Albert Einstein",
        "tags": [
            "love"
        ]
    },
    {
        "text": "At some point, you just pull off the Band-Aid, and it hurts, but then it's over and you're relieved.",
        "author": "John Green,",
        "tags": [
            "looking-for-alaska"
        ]
    },
    {
        "text": "I wasn't actually in love, but I felt a sort of tender curiosity.",
        "author": "F. Scott Fitzgerald,",
        "tags": [
            "affection",
            "amity",
            "love"
        ]
    },
    {
        "text": "Is standing by the window muttering about blood something he does all the time?\" asked Simon.\"No,\" Jace said. \"Sometimes he sits on the couch and does it.",
        "author": "Cassandra Clare,",
        "tags": []
    },
    {
        "text": "You never know what worse luck your bad luck has saved you from.",
        "author": "Cormac McCarthy,",
        "tags": []
    },
    {
        "text": "I'm sure the universe is full of intelligent life. It's just been too intelligent to come here.",
        "author": "Arthur C. Clarke",
        "tags": [
            "extraterrestrials",
            "humor",
            "intelligent-life",
            "life",
            "science",
            "universe"
        ]
    },
    {
        "text": "Don't be afraid of death; be afraid of an unlived life. You don't have to live forever, you just have to live.",
        "author": "Natalie Babbitt,",
        "tags": [
            "life"
        ]
    },
    {
        "text": "You don't remember what happened. What you remember becomes what happened.",
        "author": "John Green,",
        "tags": [
            "an-abundance-of-katherines",
            "joh-green",
            "nerdfighters"
        ]
    },
    {
        "text": "All we demanded was our right to twinkle.",
        "author": "Marilyn Monroe",
        "tags": []
    },
    {
        "text": "Sometimes it seems safer to hold it all in, where the only person who can judge is yourself.",
        "author": "Sarah Dessen",
        "tags": []
    },
    {
        "text": "Great things happen to those who don't stop believing, trying, learning, and being grateful.",
        "author": "Roy T. Bennett,",
        "tags": [
            "being-positive",
            "believe",
            "gratitude",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "life",
            "life-quotes",
            "live",
            "motivation",
            "never-stop-believing",
            "never-stop-learning",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "try",
            "trying"
        ]
    },
    {
        "text": "Time is an illusion. Lunchtime doubly so.",
        "author": "Douglas Adams,",
        "tags": [
            "humor",
            "philosophy",
            "science-fiction"
        ]
    },
    {
        "text": "If a book about failures doesn't sell, is it a success?",
        "author": "Jerry Seinfeld",
        "tags": [
            "books",
            "funny"
        ]
    },
    {
        "text": "Grover was sniffing the wind, looking nervous. He fished out his acorns and threw them into the sand, then played his pipes. They rearranged themselves in a pattern that made no sense to me, but Grover looked concerned. \"That's us,\" he said. \"Those five nuts right there.\" \"Which one is me?\" I asked. \"The little deformed one,\" Zoe suggested. \"Oh, shut up.",
        "author": "Rick Riordan,",
        "tags": [
            "acorns",
            "percy-jackson",
            "zoe-nightshade"
        ]
    },
    {
        "text": "Isabelle drifted over, Jace a pace behind her. She was wearing a long black dress with boots and an even longer cutaway coat of soft green velvet, the color of moss. \"I can't believe you did it!\" she exclaimed. \"How did you get Magnus to let Jace leave?\"\"Traded him for Alec,\" Clary said.Isabelle looked mildly alarmed. \"Not permanently?\"\"No,\" said Jace. \"Just for a few hours. Unless I don't come back,\" he added thoughtfully. \"In which case, maybe he does get to keep Alec. Think of it as a lease with an option to buy.\"Isabelle looked dubious. \"Mom and Dad won't be pleased if they find out.\"\"That you freed a possible criminal by trading away your brother to a warlock who looks like a gay Sonic the Hedgehog and dresses like the Child Catcher from Chitty Chitty Bang Bang?\" Simon inquired. \"No, probably not.",
        "author": "Cassandra Clare,",
        "tags": [
            "alec-lightwood",
            "clary-fray",
            "humor",
            "isabelle-lightwood",
            "jace-wayland",
            "simon-lewis"
        ]
    },
    {
        "text": "You need to learn how to select your thoughts just the same way you select your clothes every day. This is a power you can cultivate. If you want to control things in your life so bad, work on the mind. That's the only thing you should be trying to control.",
        "author": "Elizabeth Gilbert,",
        "tags": [
            "eat-pray-love",
            "elizabeth-gilbert",
            "inspiration"
        ]
    },
    {
        "text": "Despite my ghoulish reputation, I really have the heart of a small boy. I keep it in a jar on my desk.",
        "author": "Robert Bloch",
        "tags": []
    },
    {
        "text": "Wherever you go becomes a part of you somehow.",
        "author": "Anita Desai",
        "tags": [
            "travel"
        ]
    },
    {
        "text": "He smiled understandingly-much more than understandingly. It was one of those rare smiles with a quality of eternal reassurance in it, that you may come across four or five times in life. It faced--or seemed to face--the whole eternal world for an instant, and then concentrated on you with an irresistible prejudice in your favor. It understood you just as far as you wanted to be understood, believed in you as you would like to believe in yourself, and assured you that it had precisely the impression of you that, at your best, you hoped to convey.",
        "author": "F. Scott Fitzgerald,",
        "tags": [
            "smiling"
        ]
    },
    {
        "text": "Don't part with your illusions. When they are gone you may still exist, but you have ceased to live.",
        "author": "Mark Twain",
        "tags": [
            "illusions",
            "life"
        ]
    },
    {
        "text": "Don't feel sorry for yourself. Only assholes do that.",
        "author": "Haruki Murakami,",
        "tags": [
            "nagasawa"
        ]
    },
    {
        "text": "The very least you can do in your life is figure out what you hope for. And the most you can do is live inside that hope. Not admire it from a distance but live right in it, under its roof.",
        "author": "Barbara Kingsolver,",
        "tags": [
            "hope"
        ]
    },
    {
        "text": "There are three types of lies -- lies, damn lies, and statistics.",
        "author": "Benjamin Disraeli",
        "tags": [
            "attributed-no-source",
            "lies",
            "lying",
            "misattributed-mark-twain",
            "statistics",
            "truth"
        ]
    },
    {
        "text": "Maybe you can afford to wait. Maybe for you there's a tomorrow. Maybe for you there's one thousand tomorrows, or three thousand, or ten, so much time you can bathe in it, roll around it, let it slide like coins through you fingers. So much time you can waste it.But for some of us there's only today. And the truth is, you never really know.",
        "author": "Lauren Oliver,",
        "tags": [
            "inspirational-life"
        ]
    },
    {
        "text": "The past has no power over the present moment.",
        "author": "Eckhart Tolle",
        "tags": [
            "education",
            "inspirational",
            "life",
            "philosophy",
            "truth",
            "wisdom"
        ]
    },
    {
        "text": "Someday, somewhere - anywhere, unfailingly, you'll find yourself, and that, and only that, can be the happiest or bitterest hour of your life.",
        "author": "Pablo Neruda",
        "tags": []
    },
    {
        "text": "Youth is happy because it has the capacity to see beauty. Anyone who keeps the ability to see beauty never grows old.",
        "author": "Franz Kafka",
        "tags": [
            "beauty",
            "wonder",
            "young-at-heart",
            "youth",
            "youthfulness"
        ]
    },
    {
        "text": "I crave your mouth, your voice, your hair.Silent and starving, I prowl through the streets. Bread does not nourish me, dawn disrupts me, all day I hunt for the liquid measure of your steps. I hunger for your sleek laugh, your hands the color of a savage harvest, hunger for the pale stones of your fingernails, I want to eat your skin like a whole almond. I want to eat the sunbeam flaring in your lovely body, the sovereign nose of your arrogant face, I want to eat the fleeting shade of your lashes, and I pace around hungry, sniffing the twilight, hunting for you, for your hot heart, Like a puma in the barrens of Quitratue.",
        "author": "Pablo Neruda",
        "tags": [
            "love",
            "poetry"
        ]
    },
    {
        "text": "‎Though nobody can go back and make a new beginning... Anyone can start over and make a new ending.",
        "author": "Chico Xavier",
        "tags": [
            "inspirational",
            "life-lessons"
        ]
    },
    {
        "text": "Don't you think it's better to be extremely happy for a short while, even if you lose it, than to be just okay for your whole life?",
        "author": "Audrey Niffenegger,",
        "tags": [
            "life"
        ]
    },
    {
        "text": "Do not fear failure but rather fear not trying.",
        "author": "Roy T. Bennett,",
        "tags": [
            "failure",
            "fearless",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quote",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-and-living",
            "life-lessons",
            "life-philosophy",
            "life-quotes",
            "living",
            "motivation",
            "motivational",
            "never-give-up",
            "optimism",
            "optimistic",
            "persistence",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "trying"
        ]
    },
    {
        "text": "The reasonable man adapts himself to the world: the unreasonable one persists in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man.",
        "author": "George Bernard Shaw,",
        "tags": [
            "life",
            "philosophy",
            "philosophy-of-life",
            "progress"
        ]
    },
    {
        "text": "You will lose someone you can’t live without,and your heart will be badly broken, and the bad news is that you never completely get over the loss of your beloved. But this is also the good news. They live forever in your broken heart that doesn’t seal back up. And you come through. It’s like having a broken leg that never heals perfectly—that still hurts when the weather gets cold, but you learn to dance with the limp.",
        "author": "Anne Lamott",
        "tags": [
            "grief",
            "loss",
            "recovery"
        ]
    },
    {
        "text": "Whatever the cost of our libraries, the price is cheap compared to that of an ignorant nation.",
        "author": "Walter Cronkite",
        "tags": [
            "education",
            "ignorance",
            "intelligence",
            "libraries"
        ]
    },
    {
        "text": "Words are pale shadows of forgotten names. As names have power, words have power. Words can light fires in the minds of men. Words can wring tears from the hardest hearts.",
        "author": "Patrick Rothfuss,",
        "tags": [
            "description",
            "language",
            "power-of-words",
            "words"
        ]
    },
    {
        "text": "Knock, And He'll open the doorVanish, And He'll make you shine like the sunFall, And He'll raise you to the heavensBecome nothing, And He'll turn you into everything.",
        "author": "Jalal Ad-Din Rumi",
        "tags": [
            "islam",
            "religion",
            "spirituality"
        ]
    },
    {
        "text": "Hello babies. Welcome to Earth. It's hot in the summer and cold in the winter. It's round and wet and crowded. On the outside, babies, you've got a hundred years here. There's only one rule that I know of, babies-\"God damn it, you've got to be kind.",
        "author": "Kurt Vonnegut",
        "tags": [
            "fact"
        ]
    },
    {
        "text": "Fall down again, Bella?'No, Emmett, I punched a werewolf in the face.",
        "author": "Stephenie Meyer,",
        "tags": []
    },
    {
        "text": "Look after my heart - I've left it with you.",
        "author": "Stephenie Meyer,",
        "tags": [
            "bella",
            "edward",
            "love",
            "twilight-saga"
        ]
    },
    {
        "text": "You know, when it works, love is pretty amazing. It's not overrated. There's a reason for all those songs.",
        "author": "Sarah Dessen,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book. And then there are books like An Imperial Affliction, which you can't tell people about, books so special and rare and yours that advertising your affection feels like betrayal",
        "author": "John Green,",
        "tags": [
            "books",
            "john-green",
            "reading",
            "the-fault-in-our-stars"
        ]
    },
    {
        "text": "What you do speaks so loudly that I cannot hear what you say.",
        "author": "Ralph Waldo Emerson",
        "tags": []
    },
    {
        "text": "Travel is fatal to prejudice, bigotry, and narrow-mindedness, and many of our people need it sorely on these accounts. Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all one's lifetime.",
        "author": "Mark Twain,",
        "tags": [
            "travel"
        ]
    },
    {
        "text": "It’s probably not just by chance that I’m alone. It would be very hard for a man to live with me, unless he’s terribly strong. And if he’s stronger than I, I’m the one who can’t live with him. … I’m neither smart nor stupid, but I don’t think I’m a run-of-the-mill person. I’ve been in business without being a businesswoman, I’ve loved without being a woman made only for love. The two men I’ve loved, I think, will remember me, on earth or in heaven, because men always remember a woman who caused them concern and uneasiness. I’ve done my best, in regard to people and to life, without precepts, but with a taste for justice.",
        "author": "Coco Chanel",
        "tags": [
            "autonomy",
            "bachelorhood",
            "empowerment",
            "freedom",
            "independence",
            "individuality",
            "love",
            "marriage",
            "matrimony",
            "men",
            "self-determination",
            "self-sufficiency",
            "singles",
            "strength",
            "women"
        ]
    },
    {
        "text": "Oh well... I'd just been thinking, if you had died, you'd have been welcome to share my toilet.",
        "author": "J.K. Rowling,",
        "tags": [
            "flirting",
            "humor"
        ]
    },
    {
        "text": "You see things; you say, 'Why?' But I dream things that never were; and I say 'Why not?",
        "author": "George Bernard Shaw,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "You will do foolish things, but do them with enthusiasm.",
        "author": "Colette",
        "tags": [
            "enthusiasm",
            "foolishness",
            "silliness",
            "wisdom"
        ]
    },
    {
        "text": "Everyone you will ever meet knows something you don't.",
        "author": "Bill  Nye",
        "tags": []
    },
    {
        "text": "Growing apart doesn't change the fact that for a long time we grew side by side; our roots will always be tangled. I'm glad for that.",
        "author": "Ally Condie,",
        "tags": [
            "childhood",
            "friendship",
            "growing-up"
        ]
    },
    {
        "text": "To say goodbye is to die a little.",
        "author": "Raymond Chandler,",
        "tags": [
            "change",
            "life",
            "parting",
            "romantics"
        ]
    },
    {
        "text": "When I discover who I am, I’ll be free.",
        "author": "Ralph Ellison,",
        "tags": [
            "freedom",
            "identity",
            "independence",
            "self-awareness",
            "self-discovery"
        ]
    },
    {
        "text": "Don't stop there. I suppose there are also, what, vampires and werewolves and zombies?\"\"Of course there are. Although you mostly find zombies farther south, where the voudun priests are.\"\"What about mummies? Do they only hang around Egypt?\"\"Don't be ridiculous. No one believes in mummies.",
        "author": "Cassandra Clare,",
        "tags": [
            "clary-fray",
            "jace-wayland",
            "joke",
            "mummies",
            "sarcasm",
            "vampire",
            "werewolf",
            "zombies"
        ]
    },
    {
        "text": "We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the Universe. That makes us something very special.",
        "author": "Stephen Hawking",
        "tags": [
            "inspirational",
            "science"
        ]
    },
    {
        "text": "Say 'provoking' again. Your mouth looks provocative when you do.",
        "author": "Becca Fitzpatrick,",
        "tags": [
            "fallen-anger",
            "humor",
            "nephlim",
            "romance"
        ]
    },
    {
        "text": "Success is getting what you want, happiness is wanting what you get",
        "author": "W.P. Kinsella",
        "tags": [
            "happiness",
            "success"
        ]
    },
    {
        "text": "I woke up thinking a very pleasant thought. There is lots left in the world to read.",
        "author": "Nicholson Baker,",
        "tags": []
    },
    {
        "text": "People say that life is the thing, but I prefer reading.",
        "author": "Logan Pearsall Smith",
        "tags": [
            "life",
            "reading"
        ]
    },
    {
        "text": "I nodded, looking at Rachel with respect. \"You hit the Lord of the Titans in the eye with a blue plastic hairbrush.",
        "author": "Rick Riordan",
        "tags": [
            "percy-jackson",
            "rachel-elizabeth-dare"
        ]
    },
    {
        "text": "Live in the present, remember the past, and fear not the future, for it doesn't exist and never shall. There is only now.",
        "author": "Christopher Paolini,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Maybe...you'll fall in love with me all over again.\"\"Hell,\" I said, \"I love you enough now. What do you want to do? Ruin me?\"\"Yes. I want to ruin you.\"\"Good,\" I said. \"That's what I want too.",
        "author": "Ernest Hemingway,",
        "tags": [
            "infatuation",
            "love"
        ]
    },
    {
        "text": "That it will never come again is what makes life so sweet.",
        "author": "Emily Dickinson",
        "tags": []
    },
    {
        "text": "If you want to tell people the truth, make them laugh, otherwise they'll kill you.",
        "author": "George Bernard Shaw",
        "tags": [
            "kill",
            "laughter",
            "misattributed-oscar-wilde",
            "truth"
        ]
    },
    {
        "text": "If you want to be a writer, you must do two things above all others: read a lot and write a lot.",
        "author": "Stephen King",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "Let us learn to show our friendship for a man when he is alive and not after he is dead.",
        "author": "F. Scott Fitzgerald,",
        "tags": []
    },
    {
        "text": "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
        "author": "Marcus Aurelius ,",
        "tags": [
            "truth"
        ]
    },
    {
        "text": "The best moments in reading are when you come across something – a thought, a feeling, a way of looking at things – which you had thought special and particular to you. Now here it is, set down by someone else, a person you have never met, someone even who is long dead. And it is as if a hand has come out and taken yours.",
        "author": "Alan Bennett,",
        "tags": [
            "books",
            "history",
            "reading"
        ]
    },
    {
        "text": "I can shake off everything as I write; my sorrows disappear, my courage is reborn.",
        "author": "Anne Frank",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "I cannot teach anybody anything. I can only make them think",
        "author": "Socrates",
        "tags": [
            "knowledge",
            "philosophy"
        ]
    },
    {
        "text": "And when her lips met mine, I knew that I could live to be a hundred and visit every country in the world, but nothing would ever compare to that single moment when I first kissed the girl of my dreams and knew that my love would last forever.",
        "author": "Nicholas Sparks,",
        "tags": [
            "bestseller",
            "love",
            "nicholas-sparks",
            "north-carolina",
            "novel"
        ]
    },
    {
        "text": "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
        "author": "Joseph Campbell",
        "tags": [
            "change",
            "life",
            "open-heart",
            "open-mind",
            "resilience"
        ]
    },
    {
        "text": "What and how much had I lost by trying to do only what was expected of me instead of what I myself had wished to do?",
        "author": "Ralph Ellison,",
        "tags": []
    },
    {
        "text": "I love you like a fat kid loves cake!",
        "author": "Scott Adams",
        "tags": [
            "food",
            "humor",
            "love"
        ]
    },
    {
        "text": "And when at last you find someone to whom you feel you can pour out your soul, you stop in shock at the words you utter— they are so rusty, so ugly, so meaningless and feeble from being kept in the small cramped dark inside you so long.",
        "author": "Sylvia Plath,",
        "tags": [
            "confidences",
            "secrets",
            "sharing-secrets"
        ]
    },
    {
        "text": "Happiness [is] only real when shared",
        "author": "Jon Krakauer,",
        "tags": [
            "family",
            "happiness",
            "inspirational",
            "love",
            "marriage"
        ]
    },
    {
        "text": "If you treat an individual as he is, he will remain how he is. But if you treat him as if he were what he ought to be and could be, he will become what he ought to be and could be.",
        "author": "Johann Wolfgang von Goethe",
        "tags": [
            "inspiration"
        ]
    },
    {
        "text": "I am made of memories.",
        "author": "Madeline Miller,",
        "tags": []
    },
    {
        "text": "It was not the feeling of completeness I so needed, but the feeling of not being empty.",
        "author": "Jonathan Safran Foer,",
        "tags": []
    },
    {
        "text": "Is 'fat' really the worst thing a human being can be? Is 'fat' worse than 'vindictive', 'jealous', 'shallow', 'vain', 'boring' or 'cruel'? Not to me.",
        "author": "J.K. Rowling",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Have you ever noticed that anybody driving slower than you is an idiot, and anyone going faster than you is a maniac?",
        "author": "George Carlin",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "Welcome to the wonderful world of jealousy, he thought. For the price of admission, you get a splitting headache, a nearly irresistable urge to commit murder, and an inferiority complex. Yippee.",
        "author": "J.R. Ward,",
        "tags": [
            "humor",
            "jealousy",
            "love"
        ]
    },
    {
        "text": "When it is dark enough, you can see the stars.",
        "author": "Ralph Waldo Emerson",
        "tags": [
            "dark",
            "stars"
        ]
    },
    {
        "text": "To be, or not to be: that is the question:Whether 'tis nobler in the mind to sufferThe slings and arrows of outrageous fortune,Or to take arms against a sea of troubles,And by opposing end them? To die: to sleep;No more; and by a sleep to say we endThe heart-ache and the thousand natural shocksThat flesh is heir to, 'tis a consummationDevoutly to be wish'd. To die, to sleep;To sleep: perchance to dream: ay, there's the rub;For in that sleep of death what dreams may comeWhen we have shuffled off this mortal coil,Must give us pause: there's the respectThat makes calamity of so long life;For who would bear the whips and scorns of time,The oppressor's wrong, the proud man's contumely,The pangs of despised love, the law's delay,The insolence of office and the spurnsThat patient merit of the unworthy takes,When he himself might his quietus makeWith a bare bodkin? who would fardels bear,To grunt and sweat under a weary life,But that the dread of something after death,The undiscover'd country from whose bournNo traveller returns, puzzles the willAnd makes us rather bear those ills we haveThan fly to others that we know not of?Thus conscience does make cowards of us all;And thus the native hue of resolutionIs sicklied o'er with the pale cast of thought,And enterprises of great pith and momentWith this regard their currents turn awry,And lose the name of action.--Soft you now!The fair Ophelia! Nymph, in thy orisonsBe all my sins remember'd!",
        "author": "William Shakespeare,",
        "tags": [
            "death",
            "existence",
            "life"
        ]
    },
    {
        "text": "So it's you and a syringe against the Capitol? See, this is why no one lets you make the plans.",
        "author": "Suzanne Collins,",
        "tags": [
            "awesome-quote",
            "haymitch"
        ]
    },
    {
        "text": "Behind every exquisite thing that existed, there was something tragic.",
        "author": "Oscar Wilde,",
        "tags": [
            "aesthetics",
            "appreciation",
            "hidden-things"
        ]
    },
    {
        "text": "Men are afraid that women will laugh at them. Women are afraid that men will kill them.",
        "author": "Margaret Atwood",
        "tags": [
            "apocryphal",
            "feminism"
        ]
    },
    {
        "text": "Though she be but little, she is fierce!",
        "author": "William Shakespeare,",
        "tags": [
            "ferocity"
        ]
    },
    {
        "text": "You can't measure the mutual affection of two human beings by the number of words they exchange.",
        "author": "Milan Kundera",
        "tags": []
    },
    {
        "text": "When he died, all things soft and beautiful and bright would be buried with him.",
        "author": "Madeline Miller,",
        "tags": [
            "death",
            "death-of-a-loved-one",
            "love"
        ]
    },
    {
        "text": "Education is the ability to listen to almost anything without losing your temper or your self-confidence.",
        "author": "Robert Frost",
        "tags": [
            "education"
        ]
    },
    {
        "text": "Appear weak when you are strong, and strong when you are weak.",
        "author": "Sun Tzu,",
        "tags": [
            "deception",
            "life",
            "war"
        ]
    },
    {
        "text": "You must make a decision that you are going to move on. It wont happen automatically. You will have to rise up and say, ‘I don’t care how hard this is, I don’t care how disappointed I am, I’m not going to let this get the best of me. I’m moving on with my life.",
        "author": "Joel Osteen,",
        "tags": [
            "disappointment",
            "failure",
            "moving-on"
        ]
    },
    {
        "text": "You think your pain and your heartbreak are unprecedented in the history of the world, but then you read.",
        "author": "James Baldwin",
        "tags": []
    },
    {
        "text": "What if it lines up like it did in the Trojan War ... Athena versus Poseidon?\"\"I don't know. But I just know that I'll be fighting next to you.\"\"Why?\"\"Because you're my friend, Seaweed Brain. Any more stupid questions?",
        "author": "Rick Riordan,",
        "tags": [
            "annabeth-chase",
            "athena",
            "percy-jackson",
            "poseidon"
        ]
    },
    {
        "text": "How do you spell 'love'?\" - Piglet\"You don't spell it...you feel it.\" - Pooh",
        "author": "A.A. Milne",
        "tags": [
            "love",
            "piglet",
            "pooh-bear",
            "winnie-the-pooh"
        ]
    },
    {
        "text": "you can, you should, and if you’re brave enough to start, you will.",
        "author": "Stephen King,",
        "tags": []
    },
    {
        "text": "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.",
        "author": "Paulo Coelho",
        "tags": [
            "love"
        ]
    },
    {
        "text": "‎Life is a shipwreck, but we must not forget to sing in the lifeboats.",
        "author": "Voltaire",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Cowards die many times before their deaths; The valiant never taste of death but once. Of all the wonders that I yet have heard, It seems to me most strange that men should fear; Seeing that death, a necessary end, Will come when it will come.",
        "author": "William Shakespeare,",
        "tags": [
            "dramatist-quotes"
        ]
    },
    {
        "text": "There is no exquisite beauty… without some strangeness in the proportion.",
        "author": "Edgar Allan Poe",
        "tags": [
            "beauty",
            "imperfections"
        ]
    },
    {
        "text": "Reading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours.",
        "author": "John Locke",
        "tags": []
    },
    {
        "text": "If we wait for the moment when everything, absolutely everything is ready, we shall never begin.",
        "author": "Ivan Turgenev",
        "tags": []
    },
    {
        "text": "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like.",
        "author": "Lao Tzu",
        "tags": [
            "acceptance",
            "change",
            "life",
            "reality",
            "serenity"
        ]
    },
    {
        "text": "You won’t understand what I mean now, but someday you will: the only trick of friendship, I think, is to find people who are better than you are—not smarter, not cooler, but kinder, and more generous, and more forgiving—and then to appreciate them for what they can teach you, and to try to listen to them when they tell you something about yourself, no matter how bad—or good—it might be, and to trust them, which is the hardest thing of all. But the best, as well.",
        "author": "Hanya Yanagihara,",
        "tags": []
    },
    {
        "text": "Take pride in your pain; you are stronger than those who have none",
        "author": "Lois Lowry,",
        "tags": []
    },
    {
        "text": "What is that you express in your eyes? It seems to me more than all the print I have read in my life.",
        "author": "Walt Whitman",
        "tags": [
            "poetry"
        ]
    },
    {
        "text": "All women become like their mothers. That is their tragedy. No man does, and that is his.",
        "author": "Oscar Wilde,",
        "tags": []
    },
    {
        "text": "Anyone whose goal is 'something higher' must expect someday to suffer vertigo. What is vertigo? Fear of falling? No, Vertigo is something other than fear of falling. It is the voice of the emptiness below us which tempts and lures us, it is the desire to fall, against which, terrified, we defend ourselves.",
        "author": "Milan Kundera,",
        "tags": [
            "goals",
            "success"
        ]
    },
    {
        "text": "There are three rules for writing a novel. Unfortunately, no one knows what they are.",
        "author": "W. Somerset Maugham",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "Never say 'no' to adventures. Always say 'yes,' otherwise you'll lead a very dull life.",
        "author": "Ian Fleming",
        "tags": []
    },
    {
        "text": "Yeah, Quirrell was a great teacher. There was just that minor drawback of him having Lord Voldemort sticking out of the back of his head!",
        "author": "J.K. Rowling,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "The only way to get rid of temptation is to yield to it.",
        "author": "Oscar Wilde,",
        "tags": [
            "temptation"
        ]
    },
    {
        "text": "Money can't buy happiness, but it can make you awfully comfortable while you're being miserable.",
        "author": "Clare Boothe Luce",
        "tags": []
    },
    {
        "text": "I could not tell you if I loved you the first moment I saw you, or if it was the second or third or fourth. But I remember the first moment I looked at you walking toward me and realized that somehow the rest of the world seemed to vanish when I was with you.",
        "author": "Cassandra Clare,",
        "tags": [
            "devotion",
            "love",
            "love-at-first-sight",
            "true-love"
        ]
    },
    {
        "text": "Every great love starts with a great story...",
        "author": "Nicholas Sparks,",
        "tags": [
            "romance",
            "storytelling"
        ]
    },
    {
        "text": "Crying is all right in its way while it lasts. But you have to stop sooner or later, and then you still have to decide what to do.",
        "author": "C.S. Lewis,",
        "tags": []
    },
    {
        "text": "Every man I meet wants to protect me. I can't figure out what from.",
        "author": "Mae West",
        "tags": [
            "chivalry",
            "men",
            "protection",
            "relationships",
            "women"
        ]
    },
    {
        "text": "So you're always honest,\" I said.\"Aren't you?\"\"No,\" I told him. \"I'm not.\"\"Well, that's good to know, I guess.\"\"I'm not saying I'm a liar,\" I told him. He raised his eyebrows. \"That's not how I meant it, anyways.\"\"How'd you mean it, then?\"\"I just...I don't always say what I feel.\"\"Why not?\"\"Because the truth sometimes hurts,\" I said.\"Yeah,\" he said. \"So do lies, though.",
        "author": "Sarah Dessen,",
        "tags": [
            "lies",
            "truth"
        ]
    },
    {
        "text": "I fell in love with you, smartass, because you were one of us—because you weren’t afraid of me, and you decided to end your spectacular victory by throwing that piece of bone at Amarantha like a javelin. I felt Cassian’s spirit beside me in that moment, and could have sworn I heard him say, ‘If you don’t marry her, you stupid prick, I will.",
        "author": "Sarah J. Maas,",
        "tags": [
            "rhysand"
        ]
    },
    {
        "text": "The meek may inherit the earth, but at the moment it belongs to the conceited. Like me.",
        "author": "Cassandra Clare,",
        "tags": [
            "city-of-bones",
            "humor",
            "jace-wayland",
            "quotes"
        ]
    },
    {
        "text": "Life, he realize, was much like a song. In the beginning there is mystery, in the end there is confirmation, but it's in the middle where all the emotion resides to make the whole thing worthwhile.",
        "author": "Nicholas Sparks,",
        "tags": [
            "life",
            "love",
            "music",
            "simile",
            "song"
        ]
    },
    {
        "text": "A ship is safe in harbor, but that's not what ships are for.",
        "author": "John A. Shedd",
        "tags": [
            "courage",
            "inspirational",
            "misattributed-grace-hopper",
            "misattributed-william-g-t-shedd",
            "risk"
        ]
    },
    {
        "text": "Perhaps the greatest faculty our minds possess is the ability to cope with pain. Classic thinking teaches us of the four doors of the mind, which everyone moves through according to their need.First is the door of sleep. Sleep offers us a retreat from the world and all its pain. Sleep marks passing time, giving us distance from the things that have hurt us. When a person is wounded they will often fall unconscious. Similarly, someone who hears traumatic news will often swoon or faint. This is the mind's way of protecting itself from pain by stepping through the first door.Second is the door of forgetting. Some wounds are too deep to heal, or too deep to heal quickly. In addition, many memories are simply painful, and there is no healing to be done. The saying 'time heals all wounds' is false. Time heals most wounds. The rest are hidden behind this door.Third is the door of madness. There are times when the mind is dealt such a blow it hides itself in insanity. While this may not seem beneficial, it is. There are times when reality is nothing but pain, and to escape that pain the mind must leave reality behind. Last is the door of death. The final resort. Nothing can hurt us after we are dead, or so we have been told.",
        "author": "Patrick Rothfuss,",
        "tags": [
            "fantasy",
            "psychology"
        ]
    },
    {
        "text": "Do I contradict myself?Very well then I contradict myself,(I am large, I contain multitudes.)",
        "author": "Walt Whitman,",
        "tags": [
            "change"
        ]
    },
    {
        "text": "And I thought about how many people have loved those songs. And how many people got through a lot of bad times because of those songs. And how many people enjoyed good times with those songs. And how much those songs really mean. I think it would be great to have written one of those songs. I bet if I wrote one of them, I would be very proud. I hope the people who wrote those songs are happy. I hope they feel it's enough. I really do because they've made me happy. And I'm only one person.",
        "author": "Stephen Chbosky,",
        "tags": [
            "music",
            "songs"
        ]
    },
    {
        "text": "So many things are possible just as long as you don't know they're impossible.",
        "author": "Norton Juster,",
        "tags": []
    },
    {
        "text": "The only way to get through life is to laugh your way through it. You either have to laugh or cry. I prefer to laugh. Crying gives me a headache.",
        "author": "Marjorie Pay Hinckley",
        "tags": [
            "humour",
            "wisdom"
        ]
    },
    {
        "text": "They’re not hideous, said Tessa. Will blinked at her. What? Gideon and Gabriel, said Tessa. They’re really quite good-looking, not hideous at all. I spoke, said Will, in sepulchral tones, of the pitch-black inner depths of their souls. Tessa snorted. And what color do you suppose the inner depths of your soul are, Will Herondale? Mauve, said Will.",
        "author": "Cassandra Clare,",
        "tags": []
    },
    {
        "text": "Clary, Despite everything, I can't bear the thought of this ring being lost forever, any more then I can bear the thought of leaving you forever. And though I have no choice about the one, at least I can choose about the other. I'm leaving you our family ring because you have as much right to it as I do.I'm writing this watching the sun come up. You're asleep, dreams moving behind your restless eyelids. I wish I knew what you were thinking. I wish I could slip into your head and see the world the way you do. I wish I could see myself the way you do. But maybe I dont want to see that. Maybe it would make me feel even more than I already do that I'm perpetuating some kind of Great Lie on you, and I couldn't stand that. I belong to you. You could do anything you wanted with me and I would let you. You could ask anything of me and I'd break myself trying to make you happy. My heart tells me this is the best and greatest feeling I have ever had. But my mind knows the difference between wanting what you can't have and wanting what you shouldn't want. And I shouldn't want you.All night I've watched you sleeping, watched the moonlight come and go, casting its shadows across your face in black and white. I've never seen anything more beautiful. I think of the life we could have had if things were different, a life where this night is not a singular event, separate from everything else that's real, but every night. But things aren't different, and I can't look at you without feeling like I've tricked you into loving me.The truth no one is willing to say out loud is that no one has a shot against Valentine but me. I can get close to him like no one else can. I can pretend I want to join him and he'll believe me, up until that last moment where I end it all, one way or another. I have something of Sebastian's; I can track him to where my father's hiding, and that's what I'm going to do. So I lied to you last night. I said I just wanted one night with you. But I want every night with you. And that's why I have to slip out of your window now, like a coward. Because if I had to tell you this to your face, I couldn't make myself go. I don't blame you if you hate me, I wish you would. As long as I can still dream, I will dream of you. _Jace",
        "author": "Cassandra Clare,",
        "tags": [
            "cassandra-clare",
            "city-of-fallen-angels",
            "city-of-glass",
            "clary-fray",
            "herondale",
            "jace-lightwood",
            "letter",
            "morgenstern",
            "mortal-instruments",
            "wayland"
        ]
    },
    {
        "text": "It's funny how humans can wrap their mind around things and fit them into their version of reality.",
        "author": "Rick Riordan,",
        "tags": [
            "humanity",
            "humans",
            "mankind",
            "reality"
        ]
    },
    {
        "text": "Love is a temporary madness, it erupts like volcanoes and then subsides. And when it subsides, you have to make a decision. You have to work out whether your roots have so entwined together that it is inconceivable that you should ever part. Because this is what love is. Love is not breathlessness, it is not excitement, it is not the promulgation of promises of eternal passion, it is not the desire to mate every second minute of the day, it is not lying awake at night imagining that he is kissing every cranny of your body. No, don't blush, I am telling you some truths. That is just being \"in love\", which any fool can do. Love itself is what is left over when being in love has burned away, and this is both an art and a fortunate accident.",
        "author": "Shawn Slovo,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "You can cut all the flowers but you cannot keep Spring from coming.",
        "author": "Pablo Neruda",
        "tags": [
            "hope",
            "inevitability",
            "spring"
        ]
    },
    {
        "text": "If you ask me what I came to do in this world, I, an artist, will answer you: I am here to live out loud.",
        "author": "Émile Zola",
        "tags": [
            "art",
            "calling",
            "life"
        ]
    },
    {
        "text": "You wanna fly, you got to give up the shit that weighs you down.",
        "author": "Toni Morrison,",
        "tags": [
            "burdens",
            "empowerment",
            "flying",
            "freedom",
            "unburdening",
            "weight"
        ]
    },
    {
        "text": "Always find opportunities to make someone smile, and to offer random acts of kindness in everyday life.",
        "author": "Roy T. Bennett,",
        "tags": [
            "acts-of-kindness",
            "happiness",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "kindness",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "living",
            "opportunity",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "smile"
        ]
    },
    {
        "text": "Rivers know this: there is no hurry. We shall get there some day.",
        "author": "A.A. Milne,",
        "tags": [
            "patience",
            "perseverance"
        ]
    },
    {
        "text": "If I got rid of my demons, I’d lose my angels.",
        "author": "Tennessee Williams,",
        "tags": [
            "angels",
            "demons"
        ]
    },
    {
        "text": "Everything that irritates us about others can lead us to an understanding of ourselves.",
        "author": "Carl Gustav Jung",
        "tags": [
            "knowing-others",
            "perception",
            "self-awareness",
            "understanding"
        ]
    },
    {
        "text": "She read books as one would breathe air, to fill up and live.",
        "author": "Annie Dillard,",
        "tags": [
            "books",
            "literature",
            "reading",
            "words"
        ]
    },
    {
        "text": "Be clearly aware of the stars and infinity on high. Then life seems almost enchanted after all.",
        "author": "Vincent Van Gogh",
        "tags": []
    },
    {
        "text": "Failure is the condiment that gives success its flavor.",
        "author": "Truman Capote",
        "tags": [
            "experience",
            "failure",
            "metaphor",
            "success",
            "wisdom"
        ]
    },
    {
        "text": "Don't feel bad for one moment about doing what brings you joy.",
        "author": "Sarah J. Maas,",
        "tags": []
    },
    {
        "text": "The best thing for being sad,\" replied Merlin, beginning to puff and blow, \"is to learn something. That's the only thing that never fails. You may grow old and trembling in your anatomies, you may lie awake at night listening to the disorder of your veins, you may miss your only love, you may see the world about you devastated by evil lunatics, or know your honour trampled in the sewers of baser minds. There is only one thing for it then — to learn. Learn why the world wags and what wags it. That is the only thing which the mind can never exhaust, never alienate, never be tortured by, never fear or distrust, and never dream of regretting. Learning is the only thing for you. Look what a lot of things there are to learn.",
        "author": "T.H. White,",
        "tags": [
            "curiosity",
            "depression",
            "education",
            "learning",
            "teaching"
        ]
    },
    {
        "text": "I am too fond of reading books to care to write them.",
        "author": "Oscar Wilde,",
        "tags": [
            "reading"
        ]
    },
    {
        "text": "You couldn't relive your life, skipping the awful parts, without losing what made it worthwhile. You had to accept it as a whole--like the world, or the person you loved.",
        "author": "Stewart O'Nan,",
        "tags": [
            "acceptance",
            "life",
            "love",
            "worth"
        ]
    },
    {
        "text": "Everyone is a moon, and has a dark side which he never shows to anybody.",
        "author": "Mark Twain",
        "tags": [
            "darkness",
            "human-nature",
            "moon"
        ]
    },
    {
        "text": "Books should go where they will be most appreciated, and not sit unread, gathering dust on a forgotten shelf, don't you agree?",
        "author": "Christopher Paolini",
        "tags": [
            "books",
            "reading"
        ]
    },
    {
        "text": "And then he gives me a smile that just seems so genuinely sweet with just the right touch of shyness that unexpected warmth rushes through me.",
        "author": "Suzanne Collins,",
        "tags": [
            "hunger-games",
            "katniss-everdeen",
            "love",
            "peeta-mellark",
            "smile",
            "suzanne-collins"
        ]
    },
    {
        "text": "In politics, If you want anything said, ask a man. If you want anything done, ask a woman.",
        "author": "Margaret Thatcher",
        "tags": [
            "gender-roles",
            "gender-stereotypes",
            "men",
            "women"
        ]
    },
    {
        "text": "No woman really wants a man to carry her off; she only wants him to want to do it.",
        "author": "Elizabeth Peters",
        "tags": [
            "amelia-peabody",
            "men",
            "women"
        ]
    },
    {
        "text": "Raise your words, not voice. It is rain that grows flowers, not thunder.",
        "author": "Rumi",
        "tags": []
    },
    {
        "text": "The real story of the Fleece: there were these two children of Zeus, Cadmus and Europa, okay? They were about to get offered up as human sacrifices, when they prayed to Zeus to save them. So Zeus sent this magical flying ram with golden wool, which picked them up in Greece and carried them all the way to Colchis in Asia Minor. Well, actually it carried Cadmus. Europa fell off and died along the way, but that's not important.\"\"It was probably important to her.",
        "author": "Rick Riordan,",
        "tags": [
            "annabeth-chase",
            "gold",
            "humor",
            "percy-jackson"
        ]
    },
    {
        "text": "I'm not young enough to know everything.",
        "author": "J.M. Barrie,",
        "tags": [
            "wisdom"
        ]
    },
    {
        "text": "If you are a dreamer come inIf you are a dreamer a wisher a liarA hoper a pray-er a magic-bean-buyerIf youre a pretender com sit by my fireFor we have some flax golden tales to spinCome in! Come in!",
        "author": "Shel Silverstein",
        "tags": [
            "dreamer",
            "imagination",
            "liar",
            "make-believe",
            "poetry",
            "wisher",
            "wishes"
        ]
    },
    {
        "text": "I realize now that dying is easy. Living is hard.",
        "author": "Gayle Forman,",
        "tags": []
    },
    {
        "text": "When I am with you, we stay up all night.When you're not here, I can't go to sleep.Praise God for those two insomnias!And the difference between them.",
        "author": "Rumi",
        "tags": [
            "love"
        ]
    },
    {
        "text": "I realize only one person will be damaged beyond repair if Peeta dies. Me.",
        "author": "Suzanne Collins,",
        "tags": [
            "katniss",
            "peeta"
        ]
    },
    {
        "text": "I knew when I met you an adventure was going to happen.",
        "author": "A.A. Milne",
        "tags": []
    },
    {
        "text": "Have no fear of perfection - you'll never reach it.",
        "author": "Salvador Dali",
        "tags": [
            "failure",
            "fear",
            "imperfection",
            "mistakes",
            "perfection",
            "success"
        ]
    },
    {
        "text": "Everybody talks about wanting to change things and help and fix, but ultimately all you can do is fix yourself. And that's a lot. Because if you can fix yourself, it has a ripple effect.",
        "author": "Rob Reiner",
        "tags": []
    },
    {
        "text": "When people don't express themselves, they die one piece at a time.",
        "author": "Laurie Halse Anderson,",
        "tags": [
            "death",
            "inspirational",
            "voice"
        ]
    },
    {
        "text": "All your life, you will be faced with a choice. You can choose love or hate…I choose love.",
        "author": "Johnny Cash",
        "tags": []
    },
    {
        "text": "Tears shed for another person are not a sign of weakness. They are a sign of a pure heart.",
        "author": "José N. Harris,",
        "tags": [
            "grief",
            "grieving",
            "hope",
            "loss",
            "love",
            "pain",
            "sadness",
            "strength",
            "tears"
        ]
    },
    {
        "text": "If you don't know, the thing to do is not to get scared, but to learn.",
        "author": "Ayn Rand,",
        "tags": [
            "atlas",
            "shrugged"
        ]
    },
    {
        "text": "I am trying here to prevent anyone saying the really foolish thing that people often say about Him: I’m ready to accept Jesus as a great moral teacher, but I don’t accept his claim to be God. That is the one thing we must not say. A man who was merely a man and said the sort of things Jesus said would not be a great moral teacher. He would either be a lunatic — on the level with the man who says he is a poached egg — or else he would be the Devil of Hell. You must make your choice. Either this man was, and is, the Son of God, or else a madman or something worse. You can shut him up for a fool, you can spit at him and kill him as a demon or you can fall at his feet and call him Lord and God, but let us not come with any patronizing nonsense about his being a great human teacher. He has not left that open to us. He did not intend to.",
        "author": "C.S. Lewis,",
        "tags": [
            "faith",
            "god",
            "jesus"
        ]
    },
    {
        "text": "A good traveler has no fixed plans and is not intent on arriving.",
        "author": "Lao Tzu",
        "tags": [
            "life",
            "travel"
        ]
    },
    {
        "text": "Before you, Bella, my life was like a moonless night. Very dark, but there were stars, points of light and reason. ...And then you shot across my sky like a meteor. Suddenly everything was on fire; there was brilliancy, there was beauty. When you were gone, when the meteor had fallen over the horizon, everything went black. Nothing had changed, but my eyes were blinded by the light. I couldn’t see the stars anymore. And there was no more reason, for anything.",
        "author": "Stephenie Meyer,",
        "tags": []
    },
    {
        "text": "Some lose all mind and become soul,insane.some lose all soul and become mind, intellectual.some lose both and become accepted",
        "author": "Charles Bukowski",
        "tags": []
    },
    {
        "text": "The creatures outside looked from pig to man, and from man to pig, and from pig to man again; but already it was impossible to say which was which.",
        "author": "George Orwell,",
        "tags": [
            "animal-farm",
            "animals",
            "closing-line",
            "man",
            "satirical"
        ]
    },
    {
        "text": "A truth that's told with bad intentBeats all the lies you can invent.",
        "author": "William Blake,",
        "tags": [
            "lies",
            "logic",
            "philosophy",
            "religion",
            "truth"
        ]
    },
    {
        "text": "Biology gives you a brain. Life turns it into a mind.",
        "author": "Jeffrey Eugenides,",
        "tags": [
            "brain",
            "mind"
        ]
    },
    {
        "text": "It's just that most really good-looking people are stupid, so I exceed expectations.''Right, it's primarily his hotness,' I said.'It can be sort of blinding,' he said.'It actually did blind our friend Isaac,' I said.'Terrible tragedy, that. But can I help my own deadly beauty?''You cannot.''It is my burden, this beautiful face.''Not to mention your body.''Seriously, don't even get me started on my hot bod. You don't want to see me naked, Dave. Seeing me naked actually took Hazel Grace's breath away,' he said, nodding toward the oxygen tank.",
        "author": "John Green,",
        "tags": [
            "john-green",
            "the-fault-in-our-stars"
        ]
    },
    {
        "text": "I've found that there is always some beauty left -- in nature, sunshine, freedom, in yourself; these can all help you.",
        "author": "Anne Frank,",
        "tags": []
    },
    {
        "text": "Time is Too Slow for those who Wait, Too Swift for those who Fear, Too Long for those who Grieve, Too Short for those who Rejoice; But for those who Love, Time is not.",
        "author": "Henry van Dyke,",
        "tags": []
    },
    {
        "text": "The snake which cannot cast its skin has to die. As well the minds which are prevented from changing their opinions; they cease to be mind.",
        "author": "Friedrich Nietzsche",
        "tags": [
            "change",
            "mind",
            "nietzsche"
        ]
    },
    {
        "text": "I have absolutely no pleasure in the stimulants in which I sometimes so madly indulge. It has not been in the pursuit of pleasure that I have periled life and reputation and reason. It has been the desperate attempt to escape from torturing memories, from a sense of insupportable loneliness and a dread of some strange impending doom.",
        "author": "Edgar Allan Poe",
        "tags": [
            "addiction",
            "alchohol",
            "drinking",
            "drugs",
            "loneliness",
            "melancholy",
            "pain"
        ]
    },
    {
        "text": "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
        "author": "Douglas Adams,",
        "tags": [
            "design",
            "foolproof",
            "ingenuity"
        ]
    },
    {
        "text": "Any fool knows men and women think differently at times, but the biggest difference is this. Men forget, but never forgive; women forgive, but never forget.",
        "author": "Robert Jordan",
        "tags": [
            "forgiveness",
            "men",
            "women"
        ]
    },
    {
        "text": "Sometimes,' said Pooh, 'the smallest things take up the most room in your heart.",
        "author": "A.A. Milne",
        "tags": []
    },
    {
        "text": "Every one of us is, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another.",
        "author": "Carl Sagan,",
        "tags": [
            "humanity",
            "individuality",
            "love",
            "mercy"
        ]
    },
    {
        "text": "America will never be destroyed from the outside. If we falter and lose our freedoms, it will be because we destroyed ourselves.",
        "author": "Abraham Lincoln",
        "tags": []
    },
    {
        "text": "In life, unlike chess, the game continues after checkmate.",
        "author": "Isaac Asimov",
        "tags": []
    },
    {
        "text": "If you don't like someone's story, write your own.",
        "author": "Chinua Achebe",
        "tags": []
    },
    {
        "text": "That's why they call it the American Dream, because you have to be asleep to believe it.",
        "author": "George Carlin",
        "tags": []
    },
    {
        "text": "There is only one thing in the world worse than being talked about, and that is not being talked about.",
        "author": "Oscar Wilde,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "I regret that it takes a life to learn how to live.",
        "author": "Jonathan Safran Foer,",
        "tags": [
            "close",
            "extremely",
            "foer",
            "incredibly",
            "jonathan",
            "living",
            "loud",
            "safran"
        ]
    },
    {
        "text": "I came from a real tough neighborhood. Once a guy pulled a knife on me. I knew he wasn't a professional, the knife had butter on it.",
        "author": "Rodney Dangerfield",
        "tags": [
            "crime",
            "funny",
            "humour",
            "neighborhoods"
        ]
    },
    {
        "text": "Why were you lurking under our window?\"\"Yes - yes, good point, Petunia! What were you doing under our windows, boy?\"\"Listening to the news,\" said Harry in a resigned voice.His aunt and uncle exchanged looks of outrage.\"Listening to the news! Again?\"\"Well, it changes every day, you see,\" said Harry.",
        "author": "J.K. Rowling,",
        "tags": [
            "dursley",
            "harry-potter",
            "humor",
            "news",
            "sarcasm"
        ]
    },
    {
        "text": "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.",
        "author": "Kahlil Gibran",
        "tags": [
            "scars",
            "souls",
            "suffering"
        ]
    },
    {
        "text": "It's a lot easier to be lost than found. It's the reason we're always searching and rarely discovered--so many locks not enough keys.",
        "author": "Sarah Dessen,",
        "tags": [
            "lock-and-key"
        ]
    },
    {
        "text": "Children must be taught how to think, not what to think.",
        "author": "Margaret Mead",
        "tags": [
            "children",
            "education",
            "judgement",
            "mentoring",
            "reasoning"
        ]
    },
    {
        "text": "I loved you like a man loves a woman he never touches, only writes to, keeps little photographs of.",
        "author": "Charles Bukowski,",
        "tags": []
    },
    {
        "text": "She says nothing at all, but simply stares upward into the dark sky and watches, with sad eyes, the slow dance of the infinite stars.",
        "author": "Neil Gaiman,",
        "tags": []
    },
    {
        "text": "Stay gold, Ponyboy. Stay gold . . . The pillow seemed to sink a little, and Johnny died.",
        "author": "S.E. Hinton,",
        "tags": [
            "benediction",
            "johnny-cade",
            "ponyboy-curtis",
            "ralph-macchio"
        ]
    },
    {
        "text": "A purpose of human life, no matter who is controlling it, is to love whoever is around to be loved.",
        "author": "Kurt Vonnegut,",
        "tags": [
            "life",
            "love"
        ]
    },
    {
        "text": "Stuff your eyes with wonder, he said, live as if you'd drop dead in ten seconds. See the world. It's more fantastic than any dream made or paid for in factories.",
        "author": "Ray Bradbury,",
        "tags": []
    },
    {
        "text": "A single dream is more powerful than a thousand realities.",
        "author": "Nathaniel Hawthorne,",
        "tags": []
    },
    {
        "text": "Sometimes when I look at you, I feel I'm gazing at a distant star. It's dazzling, but the light is from tens of thousands of years ago.Maybe the star doesn't even exist any more. Yet sometimes that light seems more real to me than anything.",
        "author": "Haruki Murakami,",
        "tags": [
            "longing",
            "love"
        ]
    },
    {
        "text": "Letting go doesn't mean that you don't care about someone anymore. It's just realizing that the only person you really have control over is yourself.",
        "author": "Deborah Reber,",
        "tags": [
            "acceptance",
            "letting-go",
            "love",
            "moving-on"
        ]
    },
    {
        "text": "I stood still, vision blurring, and in that moment, I heard my heart break. It was a small, clean sound, like the snapping of a flower's stem.",
        "author": "Diana Gabaldon,",
        "tags": [
            "claire-fraser",
            "historical-fiction",
            "romance",
            "scotland",
            "time-travel"
        ]
    },
    {
        "text": "A DEFINITION NOT FOUNDIN THE DICTIONARYNot leaving: an act of trust and love,often deciphered by children",
        "author": "Markus Zusak,",
        "tags": [
            "children",
            "love"
        ]
    },
    {
        "text": "One can never have enough socks,\" said Dumbledore. \"Another Christmas has come and gone and I didn't get a single pair. People will insist on giving me books.",
        "author": "J.K. Rowling,",
        "tags": [
            "albus-dumbledore",
            "books",
            "christmas",
            "desire",
            "family",
            "joke",
            "socks"
        ]
    },
    {
        "text": "Some people say, Never let them see you cry. I say, if you’re so mad you could just cry, then cry. It terrifies everyone.",
        "author": "Tina Fey,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "All the secrets of the world are contained in books. Read at your own risk.",
        "author": "Lemony Snicket",
        "tags": [
            "reading-secrets"
        ]
    },
    {
        "text": "Was it hard?\" I ask.Letting go?\"Not as hard as holding on to something that wasn't real.",
        "author": "Lisa Schroeder",
        "tags": [
            "heartbreak",
            "life",
            "love"
        ]
    },
    {
        "text": "Success is stumbling from failure to failure with no loss of enthusiasm.",
        "author": "Winston S. Churchill",
        "tags": []
    },
    {
        "text": "There is no mistaking a real book when one meets it. It is like falling in love.",
        "author": "Christopher Morley,",
        "tags": [
            "bibliophilia",
            "books"
        ]
    },
    {
        "text": "It's often just enough to be with someone. I don't need to touch them. Not even talk. A feeling passes between you both. You're not alone.",
        "author": "Marilyn Monroe",
        "tags": [
            "feelings",
            "not-alone"
        ]
    },
    {
        "text": "The unreal is more powerful than the real. Because nothing is as perfect as you can imagine it. Because its only intangible ideas, concepts, beliefs, fantasies that last. Stone crumbles. Wood rots. People, well, they die. But things as fragile as a thought, a dream, a legend, they can go on and on. If you can change the way people think. The way they see themselves. The way they see the world. You can change the way people live their lives. That's the only lasting thing you can create.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "believe",
            "inspirational"
        ]
    },
    {
        "text": "I've got nothing to do today but smile.",
        "author": "Simon and Garfunkel",
        "tags": [
            "happiness",
            "life"
        ]
    },
    {
        "text": "Most of all, I hate you because I think of you. Often. It's disgusting, and I can't stop.",
        "author": "Holly Black,",
        "tags": [
            "cardan",
            "jude",
            "lust",
            "the-cruel-prince"
        ]
    },
    {
        "text": "A book is really like a lover. It arranges itself in your life in a way that is beautiful.",
        "author": "Maurice Sendak",
        "tags": []
    },
    {
        "text": "It's like Tolstoy said. Happiness is an allegory, unhappiness a story.",
        "author": "Haruki Murakami,",
        "tags": []
    },
    {
        "text": "Is it so bad, then, to be misunderstood? Pythagoras was misunderstood, and Socrates, and Jesus, and Luther, and Copernicus, and Galileo, and Newton, and every pure and wise spirit that ever took flesh. To be great is to be misunderstood.",
        "author": "Ralph Waldo Emerson,",
        "tags": [
            "greatness"
        ]
    },
    {
        "text": "Books say: She did this because. Life says: She did this. Books are where things are explained to you; life is where things aren't. I'm not surprised some people prefer books.",
        "author": "Julian Barnes,",
        "tags": [
            "books",
            "life"
        ]
    },
    {
        "text": "Ah! There is nothing like staying at home, for real comfort.",
        "author": "Jane Austen",
        "tags": []
    },
    {
        "text": "Clothes make the man. Naked people have little or no influence on society.",
        "author": "Mark Twain",
        "tags": [
            "clothing"
        ]
    },
    {
        "text": "I am not afraid of storms, for I am learning how to sail my ship.",
        "author": "Louisa May Alcott,",
        "tags": [
            "inspirational-ship-storms"
        ]
    },
    {
        "text": "The most common way people give up their power is by thinking they don't have any.",
        "author": "Alice Walker",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "I'm oxygen and he's dying to breathe.",
        "author": "Tahereh Mafi,",
        "tags": [
            "beautiful",
            "couples",
            "kiss",
            "love",
            "metaphor",
            "need",
            "ya"
        ]
    },
    {
        "text": "But who can say what's best? That's why you need to grab whatever chance you have of happiness where you find it, and not worry about other people too much. My experience tells me that we get no more than two or three such chances in a life time, and if we let them go, we regret it for the rest of our lives.",
        "author": "Haruki Murakami,",
        "tags": []
    },
    {
        "text": "She was the heir of ash and fire, and she would bow to no one.",
        "author": "Sarah J. Maas,",
        "tags": []
    },
    {
        "text": "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
        "author": "William Arthur Ward",
        "tags": [
            "realist"
        ]
    },
    {
        "text": "We are cups, constantly and quietly being filled. The trick is, knowing how to tip ourselves over and let the beautiful stuff out.",
        "author": "Ray Bradbury",
        "tags": []
    },
    {
        "text": "Yes, I was infatuated with you: I am still. No one has ever heightened such a keen capacity of physical sensation in me. I cut you out because I couldn't stand being a passing fancy. Before I give my body, I must give my thoughts, my mind, my dreams. And you weren't having any of those.",
        "author": "Sylvia Plath,",
        "tags": [
            "dreams",
            "infatuation",
            "love",
            "sensation",
            "thoughts"
        ]
    },
    {
        "text": "Anyway, I keep picturing all these little kids playing some game in this big field of rye and all. Thousands of little kids, and nobody's around - nobody big, I mean - except me. And I'm standing on the edge of some crazy cliff. What I have to do, I have to catch everybody if they start to go over the cliff - I mean if they're running and they don't look where they're going I have to come out from somewhere and catch them. That's all I do all day. I'd just be the catcher in the rye and all. I know it's crazy, but that's the only thing I'd really like to be.",
        "author": "J.D. Salinger",
        "tags": [
            "holden",
            "holden-caulfield",
            "hope",
            "run",
            "save"
        ]
    },
    {
        "text": "A writer is someone for whom writing is more difficult than it is for other people.",
        "author": "Thomas Mann,",
        "tags": [
            "authors",
            "creative-process",
            "struggle",
            "writers",
            "writing"
        ]
    },
    {
        "text": "I think there's just one kind of folks. Folks.",
        "author": "Harper Lee,",
        "tags": [
            "brotherhood-of-man",
            "people",
            "scout"
        ]
    },
    {
        "text": "When everyone knows you’re a monster, you needn’t waste time doing every monstrous thing.",
        "author": "Leigh Bardugo,",
        "tags": []
    },
    {
        "text": "I cannot sleep unless I am surrounded by books.",
        "author": "Jorge Luis Borges",
        "tags": [
            "books"
        ]
    },
    {
        "text": "We do not grow absolutely, chronologically. We grow sometimes in one dimension, and not in another; unevenly. We grow partially. We are relative. We are mature in one realm, childish in another. The past, present, and future mingle and pull us backward, forward, or fix us in the present. We are made up of layers, cells, constellations.",
        "author": "Anais Nin",
        "tags": [
            "growth",
            "life",
            "maturity"
        ]
    },
    {
        "text": "There are so many fragile things, after all. People break so easily, and so do dreams and hearts.",
        "author": "Neil Gaiman,",
        "tags": []
    },
    {
        "text": "Dogs never bite me. Just humans.",
        "author": "Marilyn Monroe",
        "tags": [
            "animals",
            "dogs"
        ]
    },
    {
        "text": "If neurotic is wanting two mutually exclusive things at one and the same time, then I'm neurotic as hell. I'll be flying back and forth between one mutually exclusive thing and another for the rest of my days.",
        "author": "Sylvia Plath,",
        "tags": [
            "neurosis"
        ]
    },
    {
        "text": "I'm tough, I'm ambitious, and I know exactly what I want. If that makes me a bitch, okay.",
        "author": "Madonna",
        "tags": []
    },
    {
        "text": "Respect was invented to cover the empty place where love should be.",
        "author": "Leo Tolstoy,",
        "tags": [
            "love",
            "respect"
        ]
    },
    {
        "text": "The capacity for friendship is God's way of apologizing for our families.",
        "author": "Jay McInerney,",
        "tags": [
            "family",
            "friendship",
            "humor"
        ]
    },
    {
        "text": "You endure what is unbearable, and you bear it. That is all.",
        "author": "Cassandra Clare,",
        "tags": [
            "2013",
            "goodbye",
            "james-carstairs",
            "life",
            "magnus-bane",
            "william-herondale"
        ]
    },
    {
        "text": "أتمنى أن أبكي و أرتجف , التصق بواحد من الكبار , لكن الحقيقة القاسية هي أنك الكبار! .. أنت من يجب أن يمنح القوة و الأمن للآخرين!",
        "author": "أحمد خالد توفيق",
        "tags": []
    },
    {
        "text": "Books are easily destroyed. But words will live as long as people can remember them.",
        "author": "Tahereh Mafi,",
        "tags": []
    },
    {
        "text": "Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.",
        "author": "Mother Theresa",
        "tags": [
            "carpe-diem",
            "future",
            "past",
            "present",
            "time"
        ]
    },
    {
        "text": "The clearest way into the Universe is through a forest wilderness.",
        "author": "John Muir",
        "tags": [
            "animals",
            "caring",
            "earth",
            "forests",
            "nature",
            "plants",
            "trees",
            "wilderness"
        ]
    },
    {
        "text": "If you hate a person, you hate something in him that is part of yourself. What isn't part of ourselves doesn't disturb us.",
        "author": "Hermann Hesse,",
        "tags": []
    },
    {
        "text": "If you pick up a starving dog and make him prosperous he will not bite you. This is the principal difference between a dog and man.",
        "author": "Mark Twain",
        "tags": []
    },
    {
        "text": "I believe a strong woman may be stronger than a man, particularly if she happens to have love in her heart. I guess a loving woman is indestructible.",
        "author": "John Steinbeck,",
        "tags": []
    },
    {
        "text": "You will find that it is necessary to let things go; simply for the reason that they are heavy. So let them go, let go of them. I tie no weights to my ankles.",
        "author": "C. JoyBell C.",
        "tags": [
            "forgetting",
            "forgiving",
            "inspirational-life",
            "inspirational-quotes",
            "letting-go",
            "life",
            "life-and-living",
            "moving-on",
            "people"
        ]
    },
    {
        "text": "Would it save you a lot of time if I just gave up and went mad now?",
        "author": "Douglas Adams,",
        "tags": [
            "british",
            "humor",
            "science-fiction",
            "social-commentary",
            "thumb",
            "towel"
        ]
    },
    {
        "text": "Real loneliness is not necessarily limited to when you are alone.",
        "author": "Charles Bukowski",
        "tags": []
    },
    {
        "text": "It is my belief... that the truth is generally preferable to lies.",
        "author": "J.K. Rowling,",
        "tags": [
            "truth-lies"
        ]
    },
    {
        "text": "I am selfish. I am brave.",
        "author": "Veronica Roth,",
        "tags": []
    },
    {
        "text": "It was, he thought, the difference between being dragged into the arena to face a battle to the death and walking into the arena with your head held high. Some people, perhaps, would say that there was little to choose between the two ways, but Dumbledore knew - and so do I, thought Harry, with a rush of fierce pride, and so did my parents - that there was all the difference in the world.",
        "author": "J.K. Rowling,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "You can't depend on your eyes when your imagination is out of focus.",
        "author": "Mark Twain,",
        "tags": [
            "imagination"
        ]
    },
    {
        "text": "Remember to always be yourself. Unless you suck.",
        "author": "Joss Whedon",
        "tags": [
            "individuality"
        ]
    },
    {
        "text": "I say let the world go to hell, but I should always have my tea.",
        "author": "Fyodor Dostoevsky,",
        "tags": [
            "hell",
            "individualism",
            "irony",
            "selfishness",
            "tea"
        ]
    },
    {
        "text": "Maybe everyone can live beyond what they're capable of.",
        "author": "Markus Zusak,",
        "tags": [
            "hope",
            "inspirational",
            "life",
            "philosophy"
        ]
    },
    {
        "text": "Still round the corner there may wait A new road or a secret gateAnd though I oft have passed them by A day will come at last when IShall take the hidden paths that run West of the Moon, East of the Sun.",
        "author": "J.R.R. Tolkien",
        "tags": [
            "books",
            "poetry"
        ]
    },
    {
        "text": "Don't Gain The World & Lose Your Soul, Wisdom Is Better Than Silver Or Gold.",
        "author": "Bob Marley",
        "tags": [
            "peace",
            "soul",
            "wealth",
            "wisdom"
        ]
    },
    {
        "text": "Sometimes when I'm talking, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Probably so we can think twice.",
        "author": "Bill Watterson",
        "tags": [
            "calvin-and-hobbes",
            "humor"
        ]
    },
    {
        "text": "There are good days and hard days for me—even now. Don’t let the hard days win.",
        "author": "Sarah J. Maas,",
        "tags": []
    },
    {
        "text": "You only get one life. It's actually your duty to live it as fully as possible.",
        "author": "Jojo Moyes,",
        "tags": []
    },
    {
        "text": "Science and religion are not at odds. Science is simply too young to understand.",
        "author": "Dan Brown,",
        "tags": [
            "books",
            "dan-brown",
            "religion",
            "science"
        ]
    },
    {
        "text": "People can lose their lives in libraries. They ought to be warned.",
        "author": "Saul Bellow",
        "tags": [
            "book-lovers",
            "libraries",
            "reading"
        ]
    },
    {
        "text": "Much of my life had been devoted to trying not to cry in front of people who loved me, so I knew what Augustus was doing. You clench your teeth. You look up. You tell yourself that if they see you cry, it will hurt them, and you will be nothing but a Sadness in their lives, and you must not become a mere sadness, so you will not cry, and you say all of this to yourself while looking up at the ceiling, and then you swallow even though your throat does not want to close and you look at the person who loves you and smile.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "From the moment I picked up your book until I put it down, I was convulsed with laughter. Some day I intend reading it.",
        "author": "Groucho Marx",
        "tags": [
            "books",
            "humor",
            "reading"
        ]
    },
    {
        "text": "There is a sacredness in tears....They are the messengers of overwhelming grief, of deep contrition and of unspeakable love.",
        "author": "Washington Irving",
        "tags": []
    },
    {
        "text": "It's amazing how a little tomorrow can make up for a whole lot of yesterday.",
        "author": "John Guare,",
        "tags": [
            "future",
            "hope"
        ]
    },
    {
        "text": "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.",
        "author": "Thomas Jefferson",
        "tags": [
            "inspiration",
            "motivation"
        ]
    },
    {
        "text": "Better to be strong than pretty and useless.",
        "author": "Lilith Saintcrow,",
        "tags": [
            "girls",
            "inspirational",
            "pretty",
            "strength",
            "women"
        ]
    },
    {
        "text": "Knowledge speaks, but wisdom listens",
        "author": "Jimi Hendrix",
        "tags": [
            "wisdom"
        ]
    },
    {
        "text": "I am looking for friends. What does that mean -- tame?\"\"It is an act too often neglected,\" said the fox. \"It means to establish ties.\" \"To establish ties?\" \"Just that,\" said the fox. \"To me, you are still nothing more than a little boy who is just like a hundred thousand other little boys. And I have no need of you. And you, on your part, have no need of me. To you I am nothing more than a fox like a hundred thousand other foxes. But if you tame me, then we shall need each other. To me, you will be unique in all the world. To you, I shall be unique in all the world....",
        "author": "Antoine de Saint-Exupéry,",
        "tags": []
    },
    {
        "text": "I'm not going to wear a red dress,\" she said.\"It would look stunning, My Lady,\" she called.She spoke to the bubbles gathered on the surface of the water. \"If there's anyone I wish to stun at dinner, I'll hit him in the face.",
        "author": "Kristin Cashore,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "A learning experience is one of those things that says, 'You know that thing you just did? Don't do that.",
        "author": "Douglas Adams,",
        "tags": [
            "life"
        ]
    },
    {
        "text": "The one thing we can never get enough of is love. And the one thing we never give enough of is love.",
        "author": "Henry Miller",
        "tags": []
    },
    {
        "text": "Kindred spirits are not so scarce as I used to think. It's splendid to find out there are so many of them in the world.",
        "author": "L.M. Montgomery,",
        "tags": []
    },
    {
        "text": "being alone never felt right. sometimes it felt good, but it never felt right.",
        "author": "Charles Bukowski,",
        "tags": []
    },
    {
        "text": "And he took her in his arms and kissed her under the sunlit sky, and he cared not that they stood high upon the walls in the sight of many.",
        "author": "J.R.R. Tolkien",
        "tags": []
    },
    {
        "text": "let me live, love, and say it well in good sentences",
        "author": "Sylvia Plath,",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "I like good strong words that mean something…",
        "author": "Louisa May Alcott,",
        "tags": [
            "little-women",
            "louisa-may-alcott",
            "words"
        ]
    },
    {
        "text": "There is no such thing as bad people. We’re all just people who sometimes do bad things.",
        "author": "Colleen Hoover,",
        "tags": []
    },
    {
        "text": "This is what you shall do; Love the earth and sun and the animals, despise riches, give alms to every one that asks, stand up for the stupid and crazy, devote your income and labor to others, hate tyrants, argue not concerning God, have patience and indulgence toward the people, take off your hat to nothing known or unknown or to any man or number of men, go freely with powerful uneducated persons and with the young and with the mothers of families, read these leaves in the open air every season of every year of your life, re-examine all you have been told at school or church or in any book, dismiss whatever insults your own soul, and your very flesh shall be a great poem and have the richest fluency not only in its words but in the silent lines of its lips and face and between the lashes of your eyes and in every motion and joint of your body.",
        "author": "Walt Whitman",
        "tags": [
            "activism",
            "service"
        ]
    },
    {
        "text": "We both have war inside us. Sometimes it keeps us alive. Sometimes it threatens to destroy us.",
        "author": "Veronica Roth,",
        "tags": []
    },
    {
        "text": "The only way that we can live, is if we grow. The only way that we can grow is if we change. The only way that we can change is if we learn. The only way we can learn is if we are exposed. And the only way that we can become exposed is if we throw ourselves out into the open. Do it. Throw yourself.",
        "author": "C. JoyBell C.",
        "tags": [
            "change",
            "growth",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "life-and-living",
            "life-lessons"
        ]
    },
    {
        "text": "I desire the things which will destroy me in the end.",
        "author": "Sylvia Plath,",
        "tags": []
    },
    {
        "text": "You realize that our mistrust of the future makes it hard to give up the past.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "future",
            "life",
            "past"
        ]
    },
    {
        "text": "Love the life you live.Live the life you love.",
        "author": "Bob Marley",
        "tags": [
            "awesome"
        ]
    },
    {
        "text": "Let's think the unthinkable, let's do the undoable. Let us prepare to grapple with the ineffable itself, and see if we may not eff it after all.",
        "author": "Douglas Adams,",
        "tags": [
            "philosophy"
        ]
    },
    {
        "text": "I meant,\" said Ipslore bitterly, \"what is there in this world that truly makes living worthwhile?\"Death thought about it.CATS, he said eventually. CATS ARE NICE.",
        "author": "Terry Pratchett,",
        "tags": [
            "cats",
            "death",
            "life"
        ]
    },
    {
        "text": "Great minds are always feared by lesser minds.",
        "author": "Dan Brown,",
        "tags": [
            "knowledge"
        ]
    },
    {
        "text": "Our story has three parts: a beginning, a middle, and an end. And although this is the way all stories unfold, I still can't believe that ours didn't go on forever.",
        "author": "Nicholas Sparks,",
        "tags": []
    },
    {
        "text": "It's discouraging to think how many people are shocked by honesty and how few by deceit.",
        "author": "Noël Coward,",
        "tags": [
            "deceit",
            "honesty",
            "hypocrisy",
            "morality",
            "shock",
            "top-8"
        ]
    },
    {
        "text": "But in a solitary life, there are rare moments when another soul dips near yours, as stars once a year brush the earth. Such a constellation was he to me.",
        "author": "Madeline Miller,",
        "tags": [
            "circe",
            "constellations",
            "daedalus",
            "greek-mythology",
            "love",
            "stars"
        ]
    },
    {
        "text": "You gave me a forever within the numbered days, and I'm grateful.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "I've been homesick for countries I've never been, and longed to be where I couldn't be.",
        "author": "John Cheever",
        "tags": []
    },
    {
        "text": "Three may keep a secret, if two of them are dead.",
        "author": "Benjamin Franklin,",
        "tags": [
            "secrets"
        ]
    },
    {
        "text": "Even if you are on the right track, you’ll get run over if you just sit there.",
        "author": "Will Rogers",
        "tags": [
            "enterprise",
            "humor",
            "inertia",
            "inspirational"
        ]
    },
    {
        "text": "Of all the trees we could've hit, we had to get one that hits back.",
        "author": "J.K. Rowling,",
        "tags": [
            "humor",
            "trees"
        ]
    },
    {
        "text": "She seems so cool, so focused, so quiet, yet her eyes remain fixed upon the horizon. You think you know all there is to know about her immediately upon meeting her, but everything you think you know is wrong. Passion flows through her like a river of blood. She only looked away for a moment, and the mask slipped, and you fell. All your tomorrows start here.",
        "author": "Neil Gaiman,",
        "tags": [
            "inspirational",
            "poetry"
        ]
    },
    {
        "text": "I have come to accept the feeling of not knowing where I am going. And I have trained myself to love it. Because it is only when we are suspended in mid-air with no landing in sight, that we force our wings to unravel and alas begin our flight. And as we fly, we still may not know where we are going to. But the miracle is in the unfolding of the wings. You may not know where you're going, but you know that so long as you spread your wings, the winds will carry you.",
        "author": "C. JoyBell C.",
        "tags": [
            "belief",
            "direction",
            "faith",
            "flight",
            "flying",
            "flying-spirit",
            "hope",
            "inspirational",
            "inspirational-life",
            "inspirational-quotes",
            "life",
            "life-and-living",
            "living",
            "trust",
            "uplifting",
            "winds",
            "winds-of-life",
            "wings"
        ]
    },
    {
        "text": "Anyone who falls in love is searching for the missing pieces of themselves. So anyone who's in love gets sad when they think of their lover. It's like stepping back inside a room you have fond memories of, one you haven't seen in a long time.",
        "author": "Murakami, Haruki",
        "tags": []
    },
    {
        "text": "Wisdom comes from experience. Experience is often a result of lack of wisdom.",
        "author": "Terry Pratchett",
        "tags": [
            "humor",
            "life"
        ]
    },
    {
        "text": "Beauty is only skin deep, but ugly goes clean to the bone.",
        "author": "Dorothy Parker",
        "tags": [
            "beauty",
            "classic-insult",
            "humor",
            "ugly"
        ]
    },
    {
        "text": "I cannot make you understand. I cannot make anyone understand what is happening inside me. I cannot even explain it to myself.",
        "author": "Franz Kafka,",
        "tags": []
    },
    {
        "text": "If I had a world of my own, everything would be nonsense. Nothing would be what it is, because everything would be what it isn't. And contrary wise, what is, it wouldn't be. And what it wouldn't be, it would. You see?",
        "author": "Lewis Carroll,",
        "tags": []
    },
    {
        "text": "Make your own Bible. Select and collect all the words and sentences that in all your readings have been to you like the blast of a trumpet.",
        "author": "Ralph Waldo Emerson",
        "tags": [
            "spirituality"
        ]
    },
    {
        "text": "When you spend so long trapped in darkness, Lucien, you find that the darkness begins to stare back.",
        "author": "Sarah J. Maas,",
        "tags": []
    },
    {
        "text": "Isn't it enough to see that a garden is beautiful without having to believe that there are fairies at the bottom of it too?",
        "author": "Douglas Adams,",
        "tags": [
            "atheism",
            "religion",
            "skeptic"
        ]
    },
    {
        "text": "Maybe there is a beast… maybe it's only us.",
        "author": "William Golding,",
        "tags": []
    },
    {
        "text": "Fools talk, cowards are silent, wise men listen.",
        "author": "Carlos Ruiz Zafon,",
        "tags": []
    },
    {
        "text": "The best portion of a good man's life: his little, nameless unremembered acts of kindness and love.",
        "author": "William Wordsworth,",
        "tags": [
            "finale-of-middlemarch",
            "tintern-abbey"
        ]
    },
    {
        "text": "Cruelty does not make a person dishonest, the same way bravery does not make a person kind.",
        "author": "Veronica Roth,",
        "tags": []
    },
    {
        "text": "The moon is a loyal companion.It never leaves. It’s always there, watching, steadfast, knowing us in our light and dark moments, changing forever just as we do. Every day it’s a different version of itself. Sometimes weak and wan, sometimes strong and full of light. The moon understands what it means to be human.Uncertain. Alone. Cratered by imperfections.",
        "author": "Tahereh Mafi,",
        "tags": [
            "moon",
            "spiritual"
        ]
    },
    {
        "text": "If you don't read the newspaper, you're uninformed. If you read the newspaper, you're mis-informed.",
        "author": "Mark Twain",
        "tags": [
            "misattributed-mark-twain",
            "newspapers"
        ]
    },
    {
        "text": "Believe nothing you hear, and only one half that you see.",
        "author": "Edgar Allan Poe",
        "tags": [
            "comedy",
            "horror",
            "misattributed-ben-franklin"
        ]
    },
    {
        "text": "Winter is coming.",
        "author": "George R.R. Martin,",
        "tags": [
            "forcasting",
            "mottos",
            "winter"
        ]
    },
    {
        "text": "Music expresses that which cannot be said and on which it is impossible to be silent.",
        "author": "Victor Hugo,",
        "tags": [
            "music"
        ]
    },
    {
        "text": "My Best Friend is a person who will give me a book I have not read.",
        "author": "Abraham Lincoln",
        "tags": [
            "attributed-no-source",
            "books"
        ]
    },
    {
        "text": "Sometimes it's a form of love just to talk to somebody that you have nothing in common with and still be fascinated by their presence.",
        "author": "David Byrne",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
        "author": "J.K. Rowling,",
        "tags": [
            "dumbledore",
            "philosophy"
        ]
    },
    {
        "text": "It is easier to forgive an enemy than to forgive a friend.",
        "author": "William Blake",
        "tags": [
            "betrayal",
            "disappointment"
        ]
    },
    {
        "text": "Art and love are the same thing: It’s the process of seeing yourself in things that are not you.",
        "author": "Chuck Klosterman,",
        "tags": [
            "art",
            "love",
            "profound"
        ]
    },
    {
        "text": "Lighthouses don’t go running all over an island looking for boats to save; they just stand there shining.",
        "author": "Anne Lamott",
        "tags": []
    },
    {
        "text": "Only those who will risk going too far can possibly find out how far one can go.",
        "author": "T.S. Eliot",
        "tags": [
            "poetry"
        ]
    },
    {
        "text": "A woman without a man is like a fish without a bicycle.",
        "author": "Irina Dunn",
        "tags": [
            "feminism",
            "humour",
            "misattributed-gloria-steinem"
        ]
    },
    {
        "text": "Even strength must bow to wisdom sometimes.",
        "author": "Rick Riordan,",
        "tags": []
    },
    {
        "text": "And I asked myself about the present: how wide it was, how deep it was, how much was mine to keep.",
        "author": "Kurt Vonnegut,",
        "tags": []
    },
    {
        "text": "People who deny the existence of dragons are often eaten by dragons. From within.",
        "author": "Ursula K. Le Guin,",
        "tags": []
    },
    {
        "text": "The world is full of magic things, patiently waiting for our senses to grow sharper.",
        "author": "W.B. Yeats",
        "tags": [
            "awe",
            "magic",
            "perception",
            "wonder"
        ]
    },
    {
        "text": "We can know only that we know nothing. And that is the highest degree of human wisdom.",
        "author": "Leo Tolstoy,",
        "tags": [
            "humanity",
            "nothing",
            "wisdom"
        ]
    },
    {
        "text": "To love oneself is the beginning of a lifelong romance.",
        "author": "Oscar Wilde,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "There are books of which the backs and covers are by far the best parts.",
        "author": "Charles Dickens,",
        "tags": []
    },
    {
        "text": "Children begin by loving their parents; as they grow older they judge them; sometimes they forgive them.",
        "author": "Oscar Wilde,",
        "tags": [
            "children",
            "parents"
        ]
    },
    {
        "text": "Every now and then I like to do as I'm told, just to confuse people.",
        "author": "Tamora Pierce,",
        "tags": [
            "humor",
            "obedience"
        ]
    },
    {
        "text": "It does not matter how slowly you go as long as you do not stop.",
        "author": "Confucius",
        "tags": [
            "education",
            "inspirational",
            "life",
            "perseverance"
        ]
    },
    {
        "text": "I was wise enough never to grow up, while fooling people into believing I had.",
        "author": "Margaret Mead",
        "tags": []
    },
    {
        "text": "A good book is an event in my life.",
        "author": "Stendhal,",
        "tags": [
            "books",
            "literature",
            "reading"
        ]
    },
    {
        "text": "Don't tell me,\" Jace said, \"Simon's turned himself into an ocelot and you want me to do something about it before Isabelle makes him into a stole. Well, you'll have have to wait till tomorrow. I'm out of commission.\" He pointed at himself - he was wearing blue pajamas with a hole in the sleeve. \"Look. Jammies.\"\"Jace,\" Clary said, \"this is important.\"\"Don't tell me,\" he said. \"You've got a drawing emergency. You need a nude model. Well, I'm not in the mood. You could always ask Hodge,\" he said as an afterthought. \"I hear he'll do anything for a -\"\"JACE!\" she interrupted him, her voice rising to a scream. \"JUST SHUT UP FOR A SECOND AND LISTEN, WILL YOU?",
        "author": "Cassandra Clare,",
        "tags": [
            "clary-fray",
            "jace-wayland",
            "pijamas",
            "sarcasm"
        ]
    },
    {
        "text": "Peeta, you said at the interview you’d had a crush on me forever. When did forever start?Oh, let’s see. I guess the first day of school. We were five. You had on a red plaid dress and your hair...it was in two braids instead of one. My father pointed you out when we were waiting to line up.\"Your father? Why?\"He said, ‘See that little girl? I wanted to marry her mother, but she ran off with a coal miner.'\"What? You’re making that up!\"No, true story. And I said, 'A coal miner? Why did she want a coal miner if she could’ve had you?' And he said, 'Because when he sings...even the birds stop to listen.",
        "author": "Suzanne Collins,",
        "tags": []
    },
    {
        "text": "Don't be so humble - you are not that great.",
        "author": "Golda Meir",
        "tags": [
            "funny",
            "golda",
            "meir",
            "true"
        ]
    },
    {
        "text": "People have forgotten this truth,\" the fox said. \"But you mustn’t forget it. You become responsible forever for what you’ve tamed. You’re responsible for your rose.",
        "author": "Antoine de Saint-Exupéry,",
        "tags": []
    },
    {
        "text": "Only the dead have seen the end of war.",
        "author": "Plato",
        "tags": []
    },
    {
        "text": "I am constantly torn between killing myself and killing everyone around me.",
        "author": "David Levithan,",
        "tags": [
            "homicide",
            "suicide"
        ]
    },
    {
        "text": "It's possible to go on, no matter how impossible it seems, and that in time, the grief . . . lessens. It may not go away completely, but after a while it's not so overwhelming.",
        "author": "Nicholas Sparks,",
        "tags": []
    },
    {
        "text": "Trying to define yourself is like trying to bite your own teeth.",
        "author": "Alan Watts",
        "tags": []
    },
    {
        "text": "Pain insists upon being attended to. God whispers to us in our pleasures, speaks in our consciences, but shouts in our pains. It is his megaphone to rouse a deaf world.",
        "author": "C.S. Lewis",
        "tags": [
            "god",
            "pain"
        ]
    },
    {
        "text": "There ain't no sin and there ain't no virtue. There's just stuff people do.",
        "author": "John Steinbeck,",
        "tags": []
    },
    {
        "text": "Yes, frosting. The final defense of the dying.",
        "author": "Suzanne Collins,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "If you want to keep a secret, you must also hide it from yourself.",
        "author": "George Orwell,",
        "tags": [
            "secrets"
        ]
    },
    {
        "text": "Never underestimate the power of stupid people in large groups.",
        "author": "George Carlin",
        "tags": [
            "attributed-no-source",
            "human-nature",
            "humor",
            "misattributed-george-carlin",
            "stupidity"
        ]
    },
    {
        "text": "What you do makes a difference, and you have to decide what kind of difference you want to make.",
        "author": "Jane Goodall",
        "tags": [
            "inspiration"
        ]
    },
    {
        "text": "The worst part of success is trying to find someone who is happy for you.",
        "author": "Bette Midler",
        "tags": []
    },
    {
        "text": "I had already found that it was not good to be alone, and so made companionship with what there was around me, sometimes with the universe and sometimes with my own insignificant self; but my books were always my friends, let fail all else.",
        "author": "Joshua Slocum,",
        "tags": [
            "alone",
            "books",
            "friends",
            "solitude"
        ]
    },
    {
        "text": "May the forces of evil become confused on the way to your house.",
        "author": "George Carlin",
        "tags": [
            "benediction",
            "evil",
            "goodwill",
            "humor",
            "inspirational",
            "wishes"
        ]
    },
    {
        "text": "I am glad you are here with me. Here at the end of all things, Sam.",
        "author": "J.R.R. Tolkien,",
        "tags": [
            "friendship",
            "frodo"
        ]
    },
    {
        "text": "He was going to live forever, or die in the attempt.",
        "author": "Joseph Heller,",
        "tags": []
    },
    {
        "text": "I knew the second I met youthat there was something about you I needed. Turns out it wasn’t something about you at all. It was just you.",
        "author": "Jamie McGuire,",
        "tags": []
    },
    {
        "text": "It is thanks to my evening reading alone that I am still more or less sane.",
        "author": "W.G. Sebald,",
        "tags": []
    },
    {
        "text": "My imagination functions much better when I don't have to speak to people.",
        "author": "Patricia Highsmith",
        "tags": [
            "conversations",
            "distractions",
            "imagination",
            "quiet",
            "solitude"
        ]
    },
    {
        "text": "!لك شيء في هذا العالم.. فقم",
        "author": "غسان كنفاني",
        "tags": []
    },
    {
        "text": "Everyone must leave something behind when he dies, my grandfather said. A child or a book or a painting or a house or a wall built or a pair of shoes made. Or a garden planted. Something your hand touched some way so your soul has somewhere to go when you die, and when people look at that tree or that flower you planted, you're there. It doesn't matter what you do, he said, so long as you change something from the way it was before you touched it into something that's like you after you take your hands away. The difference between the man who just cuts lawns and a real gardener is in the touching, he said. The lawn-cutter might just as well not have been there at all; the gardener will be there a lifetime.",
        "author": "Ray Bradbury,",
        "tags": [
            "dying",
            "legacy"
        ]
    },
    {
        "text": "Light thinks it travels faster than anything but it is wrong. No matter how fast light travels, it finds the darkness has always got there first, and is waiting for it.",
        "author": "Terry Pratchett,",
        "tags": []
    },
    {
        "text": "I'm not sentimental--I'm as romantic as you are. The idea, you know,is that the sentimental person thinks things will last--the romanticperson has a desperate confidence that they won't.",
        "author": "F. Scott Fitzgerald,",
        "tags": [
            "love",
            "romance",
            "romantic",
            "sentimentality"
        ]
    },
    {
        "text": "Today was good. Today was fun. Tomorrow is another one.",
        "author": "Dr. Seuss",
        "tags": []
    },
    {
        "text": "The world is a dangerous place to live, not because of the people who are evil, but because of the people who don't do anything about it.",
        "author": "Albert Einstein",
        "tags": [
            "dangerous",
            "evil",
            "people",
            "world"
        ]
    },
    {
        "text": "My tongue will tell the anger of my heart, or else my heart concealing it will break.",
        "author": "William Shakespeare,",
        "tags": []
    },
    {
        "text": "Never give up... No one knows what's going to happen next.",
        "author": "L. Frank Baum",
        "tags": []
    },
    {
        "text": "In the beginning there was nothing, which exploded.",
        "author": "Terry Pratchett,",
        "tags": [
            "humor",
            "metaphysics",
            "physics",
            "science"
        ]
    },
    {
        "text": "Who in the world am I? Ah, that's the great puzzle.",
        "author": "Lewis Carroll ,",
        "tags": [
            "alice-in-wonderland",
            "introspection",
            "self-discovery"
        ]
    },
    {
        "text": "Once you had put the pieces back together, even though you may look intact, you were never quite the same as you'd been before the fall.",
        "author": "Jodi Picoult",
        "tags": [
            "heartbreak",
            "life"
        ]
    },
    {
        "text": "It is absurd to divide people into good and bad. People are either charming or tedious.",
        "author": "Oscar Wilde,",
        "tags": [
            "bad",
            "charming",
            "good",
            "tedious"
        ]
    },
    {
        "text": "Creativity is intelligence having fun.",
        "author": "Albert Einstein",
        "tags": []
    },
    {
        "text": "One day you will kiss a man you can't breathe without, and find that breath is of little consequence.",
        "author": "Karen Marie Moning,",
        "tags": [
            "kiss",
            "love"
        ]
    },
    {
        "text": "People worry about kids playing with guns, and teenagers watching violent videos; we are scared that some sort of culture of violence will take them over. Nobody worries about kids listening to thousands - literally thousands - of songs about broken hearts and rejection and pain and misery and loss.",
        "author": "Nick Hornby,",
        "tags": [
            "music",
            "sad"
        ]
    },
    {
        "text": "If I'd observed all the rules I'd never have got anywhere.",
        "author": "Marilyn Monroe",
        "tags": []
    },
    {
        "text": "Your beliefs become your thoughts, Your thoughts become your words, Your words become your actions, Your actions become your habits, Your habits become your values, Your values become your destiny.",
        "author": "Gandhi",
        "tags": [
            "actions",
            "habits",
            "values"
        ]
    },
    {
        "text": "A dream you dream alone is only a dream. A dream you dream together is reality.",
        "author": "John Lennon",
        "tags": []
    },
    {
        "text": "My soul is from elsewhere, I'm sure of that, and I intend to end up there.",
        "author": "Mawlana Jalal-al-Din Rumi",
        "tags": []
    },
    {
        "text": "Tess, Tess, Tessa. Was there ever a more beautiful sound than your name? To speak it aloud makes my heart ring like a bell. Strange to imagine that, isn’t it – a heart ringing – but when you touch me that is what it is like: as if my heart is ringing in my chest and the sound shivers down my veins and splinters my bones with joy.Why have I written these words in this book? Because of you. You taught me to love this book where I had scorned it. When I read it for the second time, with an open mind and heart, I felt the most complete despair and envy of Sydney Carton. Yes, Sydney, for even if he had no hope that the woman he loved would love him, at least he could tell her of his love. At least he could do something to prove his passion, even if that thing was to die.I would have chosen death for a chance to tell you the truth, Tessa, if I could have been assured that death would be my own. And that is why I envied Sydney, for he was free.And now at last I am free, and I can finally tell you, without fear of danger to you, all that I feel in my heart.You are not the last dream of my soul.You are the first dream, the only dream I ever was unable to stop myself from dreaming. You are the first dream of my soul, and from that dream I hope will come all other dreams, a lifetime’s worth.With hope at least,Will Herondale",
        "author": "Cassandra Clare,",
        "tags": [
            "cassandra-clare",
            "clockwork-prince",
            "tessa-gray",
            "will-herondale",
            "will-s-letter-to-tessa"
        ]
    },
    {
        "text": "People shouldn't be afraid of their government. Governments should be afraid of their people.",
        "author": "Alan Moore,",
        "tags": [
            "democracy",
            "equality",
            "government",
            "misattributed"
        ]
    },
    {
        "text": "Promise me you'll never forget me because if I thought you would, I'd never leave.",
        "author": "A.A. Milne",
        "tags": []
    },
    {
        "text": "She leaned down and looked at his lifeless face and Leisel kissed her best friend, Rudy Steiner, soft and true on his lips. He tasted dusty and sweet. He tasted like regret in the shadows of trees and in the glow of the anarchist's suit collection. She kissed him long and soft, and when she pulled herself away, she touched his mouth with her fingers...She did not say goodbye. She was incapable, and after a few more minutes at his side, she was able to tear herself from the ground. It amazes me what humans can do, even when streams are flowing down their faces and they stagger on...",
        "author": "Markus Zusak,",
        "tags": [
            "love",
            "the-book-thief"
        ]
    },
    {
        "text": "Remember, remember, this is now, and now, and now. Live it, feel it, cling to it. I want to become acutely aware of all I’ve taken for granted.",
        "author": "Sylvia Plath",
        "tags": [
            "life"
        ]
    },
    {
        "text": "If things start happening, don't worry, don't stew, just go right along and you'll start happening too.",
        "author": "Dr. Seuss",
        "tags": [
            "dr-seuss"
        ]
    },
    {
        "text": "No matter what he does, every person on earth plays a central role in the history of the world. And normally he doesn't know it.",
        "author": "Paulo Coelho,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "If I loved you less, I might be able to talk about it more.",
        "author": "Jane Austen,",
        "tags": []
    },
    {
        "text": "DON'T THINK OF IT AS DYING, said Death. JUST THINK OF IT AS LEAVING EARLY TO AVOID THE RUSH.",
        "author": "Terry Pratchett,",
        "tags": [
            "death",
            "humor"
        ]
    },
    {
        "text": "I wish I were a girl again, half-savage and hardy, and free.",
        "author": "Emily Brontë,",
        "tags": []
    },
    {
        "text": "For what it’s worth: it’s never too late or, in my case, too early to be whoever you want to be. There’s no time limit, stop whenever you want. You can change or stay the same, there are no rules to this thing. We can make the best or the worst of it. I hope you make the best of it. And I hope you see things that startle you. I hope you feel things you never felt before. I hope you meet people with a different point of view. I hope you live a life you’re proud of. If you find that you’re not, I hope you have the courage to start all over again.",
        "author": "Eric Roth,",
        "tags": [
            "benjamin-button",
            "change",
            "courage",
            "time"
        ]
    },
    {
        "text": "Do not go gentle into that good night.Rage, rage against the dying of the light.",
        "author": "Dylan Thomas,",
        "tags": []
    },
    {
        "text": "Do not fall in love with people like me. I will take you to museums, and parks, and monuments, and kiss you in every beautiful place, so that you can never go back to them without tasting me like blood in your mouth.I will destroy you in the most beautiful way possible. And when I leave you will finally understand, why storms are named after people.",
        "author": "Caitlyn Siehl,",
        "tags": [
            "beautiful",
            "blood",
            "kiss",
            "life",
            "love",
            "mouth",
            "museums",
            "parks"
        ]
    },
    {
        "text": "He was my mum and dad's best friend. He's a convicted murderer, but he's broken out of wizard prison and he's on the run. He likes to keep in touch with me, though...keep up with my news...check if I'm happy...",
        "author": "J.K. Rowling,",
        "tags": []
    },
    {
        "text": "Those who know do not speak. Those who speak do not know.",
        "author": "Lao Tsu,",
        "tags": [
            "philosophy",
            "wayfinding"
        ]
    },
    {
        "text": "Did you know that for pretty much the entire history of the human species, the average life span was less than thirty years? You could count on ten years or so of real adulthood, right? There was no planning for retirement, There was no planning for a career. There was no planning. No time for plannning. No time for a future. But then the life spans started getting longer, and people started having more and more future. And now life has become the future. Every moment of your life is lived for the future--you go to high school so you can go to college so you can get a good job so you can get a nice house so you can afford to send your kids to college so they can get a good job so they can get a nice house so they can afford to send their kids to college.",
        "author": "John Green,",
        "tags": [
            "life-pattern"
        ]
    },
    {
        "text": "I wonder if the snow loves the trees and fields, that it kisses them so gently? And then it covers them up snug, you know, with a white quilt; and perhaps it says, \"Go to sleep, darlings, till the summer comes again.",
        "author": "Lewis Carroll,",
        "tags": [
            "appreciation",
            "nature",
            "seasons",
            "snow",
            "winter"
        ]
    },
    {
        "text": "You yourself, as much as anybody in the entire universe, deserve your love and affection.",
        "author": "Sharon Salzberg",
        "tags": [
            "inspiration",
            "life",
            "love",
            "self-acceptance",
            "self-esteem",
            "wisdom"
        ]
    },
    {
        "text": "The ships hung in the sky in much the same way that bricks don't.",
        "author": "Douglas Adams,",
        "tags": [
            "humour"
        ]
    },
    {
        "text": "Compassion is the basis of morality.",
        "author": "Arthur Schopenhauer",
        "tags": []
    },
    {
        "text": "I may not have been sure about what really did interest me, but I was absolutely sure about what didn't.",
        "author": "Albert Camus,",
        "tags": []
    },
    {
        "text": "I have learned now that while those who speak about one's miseries usually hurt, those who keep silence hurt more.",
        "author": "C. S. Lewis",
        "tags": [
            "hurt",
            "lewis",
            "misery",
            "sad",
            "truth"
        ]
    },
    {
        "text": "What are all these?\" Clary asked.\"Vials of holy water, blessed knives, steel and silver blades,\" Jace said, piling the weapons on the floor beside him, \"electrum wire - not much use at the moment but it's always good to have spares - silver bullets, charms of protetion, crucifixes, stars of David-\"\"Jesus,\" said Clary\"I doubt he'd fit.\"\"Jace.\" Clary was appalled.",
        "author": "Cassandra Clare,",
        "tags": [
            "clary-fray",
            "humor",
            "irony",
            "jace-wayland",
            "jesus"
        ]
    },
    {
        "text": "My library is an archive of longings.",
        "author": "Susan Sontag,",
        "tags": [
            "books",
            "library",
            "longing"
        ]
    },
    {
        "text": "But he who dares not grasp the thorn Should never crave the rose.",
        "author": "Anne Bronte",
        "tags": [
            "beauty",
            "defenses",
            "roses",
            "thorns"
        ]
    },
    {
        "text": "When the heart speaks, the mind finds it indecent to object.",
        "author": "Milan Kundera,",
        "tags": [
            "heart",
            "mind"
        ]
    },
    {
        "text": "Never interrupt your enemy when he is making a mistake.",
        "author": "Napoleon Bonaparte",
        "tags": [
            "enemies",
            "mistakes",
            "strategy"
        ]
    },
    {
        "text": "For whatever we lose (like a you or a me),It's always our self we find in the sea.",
        "author": "e.e. cummings,",
        "tags": [
            "water"
        ]
    },
    {
        "text": "My bounty is as boundless as the sea,My love as deep; the more I give to thee,The more I have, for both are infinite.",
        "author": "William Shakespeare,",
        "tags": []
    },
    {
        "text": "silence is the language of god, all else is poor translation.",
        "author": "Rumi",
        "tags": [
            "language",
            "power-of-words",
            "remaining-silent"
        ]
    },
    {
        "text": "No one knows for certain how much impact they have on the lives of other people. Oftentimes, we have no clue. Yet we push it just the same.",
        "author": "Jay Asher,",
        "tags": [
            "care",
            "impact",
            "life",
            "reach-out",
            "think"
        ]
    },
    {
        "text": "In a way, it's nice to know that there are Greek gods out there, because you have somebody to blame when things go wrong. For instance, when you're walking away from a bus that's just been attacked by monster hags and blown up by lightning, and it's raining on top of everything else, most people might think that's just really bad luck; when you're a half-blood, you understand that some devine force is really trying to mess up your day.",
        "author": "Rick Riordan,",
        "tags": [
            "books",
            "humor",
            "olympians"
        ]
    },
    {
        "text": "Tell me and I forget, teach me and I may remember, involve me and I learn.",
        "author": "Benjamin Franklin",
        "tags": [
            "learning",
            "mentoring",
            "parenting",
            "teacher"
        ]
    },
    {
        "text": "One thing you can't hide - is when you're crippled inside.",
        "author": "John Lennon",
        "tags": [
            "beatles",
            "emotions",
            "hypocrisy",
            "pain",
            "suffering"
        ]
    },
    {
        "text": "Though my soul may set in darkness, it will rise in perfect light; I have loved the stars too fondly to be fearful of the night.",
        "author": "Sarah   Williams,",
        "tags": [
            "poetry",
            "science",
            "stars"
        ]
    },
    {
        "text": "Sonnet XVIII do not love you as if you were salt-rose, or topaz,or the arrow of carnations the fire shoots off.I love you as certain dark things are to be loved,in secret, between the shadow and the soul.I love you as the plant that never bloomsbut carries in itself the light of hidden flowers;thanks to your love a certain solid fragrance,risen from the earth, lives darkly in my body.I love you without knowing how, or when, or from where.I love you straightforwardly, without complexities or pride;so I love you because I know no other way than this: where I does not exist, nor you,so close that your hand on my chest is my hand,so close that your eyes close as I fall asleep.",
        "author": "Pablo Neruda",
        "tags": [
            "sonnet-xvii"
        ]
    },
    {
        "text": "Most books on witchcraft will tell you that witches work naked. This is because most books on witchcraft were written by men.",
        "author": "Neil Gaiman",
        "tags": [
            "humor",
            "men",
            "witchcraft",
            "witches",
            "women"
        ]
    },
    {
        "text": "Don't wait for a light to appear at the end of the tunnel, stride down there and light the bloody thing yourself.",
        "author": "Sara Henderson",
        "tags": []
    },
    {
        "text": "There was another life that I might have had, but I am having this one.",
        "author": "Kazuo Ishiguro",
        "tags": [
            "inspirational",
            "missed-chances"
        ]
    },
    {
        "text": "I want to see you.Know your voice.Recognize you when youfirst come 'round the corner.Sense your scent when I come into a room you've just left.Know the lift of your heel,the glide of your foot.Become familiar with the way you purse your lipsthen let them part, just the slightest bit,when I lean in to your spaceand kiss you.I want to know the joy of how you whisper \"more",
        "author": "Mawlana Jalal-al-Din Rumi",
        "tags": []
    },
    {
        "text": "I must learn to be content with being happier than I deserve.",
        "author": "Jane Austen,",
        "tags": [
            "happiness"
        ]
    },
    {
        "text": "Always do what is right. It will gratify half of mankind and astound the other.",
        "author": "Mark Twain",
        "tags": [
            "morals"
        ]
    },
    {
        "text": "The best fantasy is written in the language of dreams. It is alive as dreams are alive, more real than real ... for a moment at least ... that long magic moment before we wake. Fantasy is silver and scarlet, indigo and azure, obsidian veined with gold and lapis lazuli. Reality is plywood and plastic, done up in mud brown and olive drab. Fantasy tastes of habaneros and honey, cinnamon and cloves, rare red meat and wines as sweet as summer. Reality is beans and tofu, and ashes at the end. Reality is the strip malls of Burbank, the smokestacks of Cleveland, a parking garage in Newark. Fantasy is the towers of Minas Tirith, the ancient stones of Gormenghast, the halls of Camelot. Fantasy flies on the wings of Icarus, reality on Southwest Airlines. Why do our dreams become so much smaller when they finally come true? We read fantasy to find the colors again, I think. To taste strong spices and hear the songs the sirens sang. There is something old and true in fantasy that speaks to something deep within us, to the child who dreamt that one day he would hunt the forests of the night, and feast beneath the hollow hills, and find a love to last forever somewhere south of Oz and north of Shangri-La. They can keep their heaven. When I die, I'd sooner go to middle Earth.",
        "author": "George R.R. Martin",
        "tags": [
            "fantasy-books"
        ]
    },
    {
        "text": "Love is the absence of judgment.",
        "author": "Dalai Lama XIV",
        "tags": [
            "inspiration"
        ]
    },
    {
        "text": "I didn’t need you, you idiot. I picked you. And then you picked me back.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "It's the questions we can't answer that teach us the most. They teach us how to think. If you give a man an answer, all he gains is a little fact. But give him a question and he'll look for his own answers.",
        "author": "Patrick Rothfuss,",
        "tags": [
            "fantasy",
            "fear",
            "kvothe",
            "man-s",
            "name",
            "patrick-rothfuss",
            "wind",
            "wise"
        ]
    },
    {
        "text": "You possess other people's...bodies.\"He accepted that statement with a nod.\"Do you want to possess my body?\"\"I want to do a lot of things to your body, but that's not one of them.",
        "author": "Becca Fitzpatrick,",
        "tags": [
            "humor",
            "nora",
            "patch"
        ]
    },
    {
        "text": "You're alive only once, as far as we know, and what could be worse than getting to the end of your life and realizing you hadn't lived it?",
        "author": "Edward Albee",
        "tags": []
    },
    {
        "text": "I knew, in the silence that followed, that anything could happen here. It might be too late: again, I might have missed my chance. But I would at least know I tried, that I took my heart and extended my hand, whatever the outcome.\"Okay,\" he said. He took a breath. \"What would you do, if you could do anything?\"I took a step toward him, closing the space between us. \"This,\" I said. And then I kissed him.",
        "author": "Sarah Dessen,",
        "tags": [
            "romance"
        ]
    },
    {
        "text": "In individuals, insanity is rare; but in groups, parties, nations and epochs, it is the rule.",
        "author": "Friedrich Nietzsche",
        "tags": []
    },
    {
        "text": "Our memory is a more perfect world than the universe: it gives back life to those who no longer exist.",
        "author": "Guy de Maupassant",
        "tags": [
            "memory"
        ]
    },
    {
        "text": "We can never judge the lives of others, because each person knows only their own pain and renunciation. It's one thing to feel that you are on the right path, but it's another to think that yours is the only path.",
        "author": "Paulo Coelho",
        "tags": [
            "life"
        ]
    },
    {
        "text": "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
        "author": "Marilyn Monroe",
        "tags": []
    },
    {
        "text": "There are some things you can't share without ending up liking each other, and knocking out a twelve-foot mountain troll is one of them.",
        "author": "J. K. Rowling,",
        "tags": [
            "awesome",
            "friendship",
            "inspirational"
        ]
    },
    {
        "text": "Success makes so many people hate you. I wish it wasn't that way. It would be wonderful to enjoy success without seeing envy in the eyes of those around you.",
        "author": "Marilyn Monroe",
        "tags": []
    },
    {
        "text": "Is there no way out of the mind?",
        "author": "Sylvia Plath",
        "tags": []
    },
    {
        "text": "The library is inhabited by spirits that come out of the pages at night.",
        "author": "Isabel Allende",
        "tags": [
            "books"
        ]
    },
    {
        "text": "The beauty of a woman is not in the clothes she wears, the figure that she carries, or the way she combs her hair. The beauty of a woman is seen in her eyes, because that is the doorway to her heart, the place where love resides. True beauty in a woman is reflected in her soul. It's the caring that she lovingly gives, the passion that she shows & the beauty of a woman only grows with passing years.",
        "author": "Audrey Hepburn",
        "tags": []
    },
    {
        "text": "When I had nothing to lose, I had everything. When I stopped being who I am, I found myself.",
        "author": "Paulo Coelho,",
        "tags": []
    },
    {
        "text": "There is greatness in doing something you hate for the sake of someone you love.",
        "author": "Shmuley Boteach",
        "tags": [
            "relationships"
        ]
    },
    {
        "text": "There is only one sin. and that is theft... when you tell a lie, you steal someones right to the truth.",
        "author": "Khaled Hosseini,",
        "tags": [
            "life"
        ]
    },
    {
        "text": "Youth can not know how age thinks and feels. But old men are guilty if they forget what it was to be young.",
        "author": "J.K. Rowling ,",
        "tags": [
            "age",
            "family"
        ]
    },
    {
        "text": "Art enables us to find ourselves and lose ourselves at the same time.",
        "author": "Thomas Merton ,",
        "tags": [
            "art"
        ]
    },
    {
        "text": "Confidence is ignorance. If you're feeling cocky, it's because there's something you don't know.",
        "author": "Eoin Colfer,",
        "tags": [
            "confidence",
            "humor",
            "ignorance",
            "knowledge"
        ]
    },
    {
        "text": "You have to know what you stand for, not just what you stand against.",
        "author": "Laurie Halse Anderson,",
        "tags": [
            "defend"
        ]
    },
    {
        "text": "You can have it all. Just not all at once.",
        "author": "Oprah Winfrey",
        "tags": [
            "dreams",
            "life",
            "time"
        ]
    },
    {
        "text": "Then I realize what it is. It's him. Something about him makes me feel like I am about to fall. Or turn to liquid. Or burst into flames.",
        "author": "Veronica Roth,",
        "tags": []
    },
    {
        "text": "They who can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety.",
        "author": "Benjamin Franklin,",
        "tags": [
            "freedom",
            "liberty",
            "privacy",
            "safety",
            "security"
        ]
    },
    {
        "text": "You think my first instinct is to protect you. Because you're small, or a girl, or a Stiff. But you're wrong.\"He leans his face close to mine and wraps his fingers around my chin. His hand smells like metal. When was the last time he held a gun, or a knife? My skin tingles at the point of contact, like he's transmitting electricity through his skin. \"My first instinct is to push you until you break, just to see how hard I have to press.\" he says, his fingers squeezing at the word break. My body tenses at the edge in his voice, so I am coiled as tight as a spring, and I forget to breathe.His dark eyes lifting to mine, he adds, \"But I resist it.\" \"Why...\" I swallow hard. \"Why is that your first instinct?\"\"Fear doesn't shut you down; it wakes you up. I've seen it. It's fascinating.\" He releases me but doesn't pull away, his hand grazing my jaw, my neck. \"Sometimes I just want to see it again. Want to see you awake.",
        "author": "Veronica Roth,",
        "tags": [
            "chivalry"
        ]
    },
    {
        "text": "I will remember the kisses our lips raw with love and how you gave me everything you had and how I offered you what was left of me, and I will remember your small room the feel of you the light in the window your records your books our morning coffee our noons our nights our bodies spilled together sleeping the tiny flowing currents immediate and forever your leg my leg your arm my arm your smile and the warmth of you who made me laugh again.",
        "author": "Charles Bukowski",
        "tags": []
    },
    {
        "text": "So when the moon's only partly full, you only feel a little wolfy?\" \"You could say that.\"\"Well, you can go ahead and hang your head out the car window if you feel like it.\"\"I'm a werewolf, not a golden retriever.",
        "author": "Cassandra Clare",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "We didn't talk about anything heavy or light. We were just there together. And that was enough",
        "author": "Stephen Chbosky,",
        "tags": []
    },
    {
        "text": "Silence make the real conversations between friends. Not the saying, but the never needing to say that counts.",
        "author": "Margaret Lee Runbeck",
        "tags": [
            "friendship"
        ]
    },
    {
        "text": "I wanted a perfect ending. Now I've learned, the hard way, that some poems don't rhyme, and some stories don't have a clear beginning, middle, and end.",
        "author": "Gilda Radner",
        "tags": []
    },
    {
        "text": "I do not think, sir, you have any right to command me, merely because you are older than I, or because you have seen more of the world than I have; your claim to superiority depends on the use you have made of your time and experience.",
        "author": "Charlotte Brontë,",
        "tags": [
            "age",
            "empowerment",
            "equality",
            "experience",
            "freedom",
            "gender",
            "independence",
            "men",
            "reason",
            "self-determination",
            "submission",
            "superiority",
            "women",
            "women-s-rights"
        ]
    },
    {
        "text": "Lolita, light of my life, fire of my loins. My sin, my soul. Lo-lee-ta: the tip of the tongue taking a trip of three steps down the palate to tap, at three, on the teeth. Lo. Lee. Ta. She was Lo, plain Lo, in the morning, standing four feet ten in one sock. She was Lola in slacks. She was Dolly at school. She was Dolores on the dotted line. But in my arms she was always Lolita. Did she have a precursor? She did, indeed she did. In point of fact, there might have been no Lolita at all had I not loved, one summer, an initial girl-child. In a princedom by the sea. Oh when? About as many years before Lolita was born as my age was that summer. You can always count on a murderer for a fancy prose style. Ladies and gentlemen of the jury, exhibit number one is what the seraphs, the misinformed, simple, noble-winged seraphs, envied. Look at this tangle of thorns.",
        "author": "Vladimir Nabokov,",
        "tags": [
            "amazing-writing"
        ]
    },
    {
        "text": "Everything has beauty, but not everyone sees it.",
        "author": "Confucious",
        "tags": [
            "beauty",
            "everything",
            "seeing"
        ]
    },
    {
        "text": "Have a heart that never hardens, and a temper that never tires, and a touch that never hurts.",
        "author": "Charles Dickens",
        "tags": [
            "literature"
        ]
    },
    {
        "text": "Male fantasies, male fantasies, is everything run by male fantasies? Up on a pedestal or down on your knees, it's all a male fantasy: that you're strong enough to take what they dish out, or else too weak to do anything about it. Even pretending you aren't catering to male fantasies is a male fantasy: pretending you're unseen, pretending you have a life of your own, that you can wash your feet and comb your hair unconscious of the ever-present watcher peering through the keyhole, peering through the keyhole in your own head, if nowhere else. You are a woman with a man inside watching a woman. You are your own voyeur.",
        "author": "Margaret Atwood,",
        "tags": []
    },
    {
        "text": "Owners of dogs will have noticed that, if you provide them with food and water and shelter and affection, they will think you are god. Whereas owners of cats are compelled to realize that, if you provide them with food and water and shelter and affection, they draw the conclusion that they are gods.",
        "author": "Christopher Hitchens,",
        "tags": [
            "affection",
            "atheism",
            "cats",
            "dogs",
            "food",
            "god",
            "pets",
            "religion",
            "shelter",
            "water"
        ]
    },
    {
        "text": "Courage is resistance to fear, mastery of fear - not absence of fear.",
        "author": "Mark Twain",
        "tags": [
            "courage"
        ]
    },
    {
        "text": "Nobody tells this to people who are beginners, I wish someone told me. All of us who do creative work, we get into it because we have good taste. But there is this gap. For the first couple years you make stuff, it’s just not that good. It’s trying to be good, it has potential, but it’s not. But your taste, the thing that got you into the game, is still killer. And your taste is why your work disappoints you. A lot of people never get past this phase, they quit. Most people I know who do interesting, creative work went through years of this. We know our work doesn’t have this special thing that we want it to have. We all go through this. And if you are just starting out or you are still in this phase, you gotta know its normal and the most important thing you can do is do a lot of work. Put yourself on a deadline so that every week you will finish one story. It is only by going through a volume of work that you will close that gap, and your work will be as good as your ambitions. And I took longer to figure out how to do this than anyone I’ve ever met. It’s gonna take awhile. It’s normal to take awhile. You’ve just gotta fight your way through.",
        "author": "Ira Glass",
        "tags": []
    },
    {
        "text": "A child can teach an adult three things: to be happy for no reason, to always be busy with something, and to know how to demand with all his might that which he desires.",
        "author": "Paulo Coelho",
        "tags": []
    },
    {
        "text": "Life isn't finding shelter in the storm. It's about learning to dance in the rain.",
        "author": "Sherrilyn Kenyon,",
        "tags": []
    },
    {
        "text": "I bet you could sometimes find all the mysteries of the universe in someone's hand.",
        "author": "Benjamin Alire Sáenz,",
        "tags": [
            "answers",
            "love",
            "true",
            "universe"
        ]
    },
    {
        "text": "In a time of destruction, create something.",
        "author": "Maxine Hong Kingston",
        "tags": []
    },
    {
        "text": "A girl should be two things: who and what she wants.",
        "author": "Coco Chanel,",
        "tags": [
            "be-yourself",
            "empowerment",
            "girls",
            "identity",
            "individuality",
            "self-determination",
            "women"
        ]
    },
    {
        "text": "Lost opportunities, lost possibilities, feelings we can never get back. That's part of what it means to be alive. But inside our heads - at least that's where I imagine it - there's a little room where we store those memories. A room like the stacks in this library. And to understand the workings of our own heart we have to keep on making new reference cards. We have to dust things off every once in awhile, let in fresh air, change the water in the flower vases. In other words, you'll live forever in your own private library.",
        "author": "Haruki Murakami,",
        "tags": [
            "inner-life",
            "life",
            "missed-chances"
        ]
    },
    {
        "text": "Go on with what your heart tells you, or you will lose all.",
        "author": "Rick Riordan,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "The purpose of life is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience.",
        "author": "Eleanor Roosevelt",
        "tags": [
            "adventure",
            "carpe-diem",
            "enjoy-life",
            "experience",
            "inspirational",
            "life",
            "live-in-the-moment",
            "purpose-of-life"
        ]
    },
    {
        "text": "I'm saying that I'm a moody, insecure, narrow-minded, jealous, borderline homicidal bitch, and I want you to promise me that you're okay with that, because it's who I am, and you're what I need.",
        "author": "Jeaniene Frost,",
        "tags": [
            "humor",
            "love"
        ]
    },
    {
        "text": "Quotation is a serviceable substitute for wit.",
        "author": "Oscar Wilde",
        "tags": [
            "intelligence",
            "quotation",
            "wit"
        ]
    },
    {
        "text": "و كلما أمسكت بحالة من حالاتي و قلت هذا هو أنا .. ما تلبث هذه الحالة أن تفلت من أصابعي و تحل محلها حالة أخرى .. هي أنا .. أيضاً..",
        "author": "مصطفى محمود,",
        "tags": []
    },
    {
        "text": "A book lying idle on a shelf is wasted ammunition.",
        "author": "Henry Miller,",
        "tags": [
            "books",
            "power"
        ]
    },
    {
        "text": "Nothing in the world is ever completely wrong. Even a stopped clock is right twice a day.",
        "author": "Paulo Coelho,",
        "tags": [
            "inspirational",
            "motivation"
        ]
    },
    {
        "text": "We need, in love, to practice only this: letting each other go. For holding on comes easily; we do not need to learn it.",
        "author": "Rainer Maria Rilke,",
        "tags": []
    },
    {
        "text": "I suppose a fire that burns that bright is not meant to last.",
        "author": "Veronica Roth,",
        "tags": [
            "four",
            "heartbreaking",
            "tobias"
        ]
    },
    {
        "text": "How nice -- to feel nothing, and still get full credit for being alive.",
        "author": "Kurt Vonnegut,",
        "tags": [
            "catatonia",
            "coma",
            "life"
        ]
    },
    {
        "text": "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness.",
        "author": "George R.R. Martin,",
        "tags": []
    },
    {
        "text": "Keep in mind that people change, but the past doesn't.",
        "author": "Becca Fitzpatrick,",
        "tags": [
            "becca-fitzpatrick",
            "hush-hush",
            "nora",
            "patch"
        ]
    },
    {
        "text": "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.",
        "author": "Mother Teresa",
        "tags": [
            "paraphrased"
        ]
    },
    {
        "text": "Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.",
        "author": "Zig Ziglar",
        "tags": [
            "attention",
            "direction",
            "focus",
            "inspirational",
            "motivational"
        ]
    },
    {
        "text": "Books are the carriers of civilization...They are companions, teachers, magicians, bankers of the treasures of the mind. Books are humanity in print.",
        "author": "Barbara W. Tuchman",
        "tags": []
    },
    {
        "text": "My name is Celaena Sardothien. But it makes no difference if my name's Celaena or Lillian or Bitch, because I'd still beat you, no matter what you call me.",
        "author": "Sarah J. Maas,",
        "tags": [
            "assassin"
        ]
    },
    {
        "text": "A half-read book is a half-finished love affair.",
        "author": "David Mitchell,",
        "tags": [
            "books",
            "love",
            "reading"
        ]
    },
    {
        "text": "أحسد الأطفال الرضّع، لأنهم يملكون وحدهم حق الصراخ والقدرة عليه، قبل أن تروض الحياة حبالهم الصوتية، وتعلِّمهم الصمت",
        "author": "أحلام مستغانمي,",
        "tags": []
    },
    {
        "text": "Just because you're paranoid doesn't mean they aren't after you.",
        "author": "Joseph Heller,",
        "tags": [
            "misattributed-kurt-cobain"
        ]
    },
    {
        "text": "If you want to know what God thinks of money, just look at the people he gave it to.",
        "author": "Dorothy Parker",
        "tags": [
            "god",
            "humor",
            "money"
        ]
    },
    {
        "text": "Books, she has found, are a way to live a thousand lives--or to find strength in a very long one.",
        "author": "V.E. Schwab,",
        "tags": []
    },
    {
        "text": "Your friend's poetry is terrible,\" he said.Clary blinked, caught momentarily off guard. \"What?\"\"I said his poetry was terrible. It sounds like he ate a dictionary and started vomiting up words at random.",
        "author": "Cassandra Clare,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "That which can be asserted without evidence, can be dismissed without evidence.",
        "author": "Christopher Hitchens",
        "tags": [
            "atheism",
            "reason",
            "science",
            "skeptic"
        ]
    },
    {
        "text": "A lot of you cared, just not enough.",
        "author": "Jay Asher,",
        "tags": [
            "apathy",
            "suicide",
            "tragedy"
        ]
    },
    {
        "text": "A snowball in the face is surely the perfect beginning to a lasting friendship.",
        "author": "Markus Zusak,",
        "tags": [
            "friendship",
            "snow"
        ]
    },
    {
        "text": "The glory of friendship is not the outstretched hand, not the kindly smile, nor the joy of companionship; it is the spiritual inspiration that comes to one when you discover that someone else believes in you and is willing to trust you with a friendship.",
        "author": "Ralph Waldo Emerson",
        "tags": [
            "friendship"
        ]
    },
    {
        "text": "You should never be surprised when someone treats you with respect, you should expect it.",
        "author": "Sarah Dessen,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Tact is the ability to tell someone to go to hell in such a way that they look forward to the trip.",
        "author": "Winston Churchill",
        "tags": []
    },
    {
        "text": "Older men declare war. But it is youth that must fight and die.",
        "author": "Herbert Hoover",
        "tags": [
            "age",
            "death",
            "fighting",
            "old-age",
            "war",
            "youth"
        ]
    },
    {
        "text": "Change will not come if we wait for some other person, or if we wait for some other time. We are the ones we've been waiting for. We are the change that we seek.",
        "author": "Barack Obama",
        "tags": [
            "change",
            "inspirational"
        ]
    },
    {
        "text": "What's the good of living if you don't try a few things?",
        "author": "Charles M. Schulz",
        "tags": [
            "cartoonist",
            "humor",
            "inspirational"
        ]
    },
    {
        "text": "Dreams like a podcast,Downloading truth in my ears.They tell me cool stuff.\"\"Apollo?\" I guess, because I figured nobody else could make a haiku that bad.He put his finger to his lips. \"I'm incognito. Call me Fred.\"\"A god named Fred?",
        "author": "Rick Riordan",
        "tags": [
            "apollo",
            "fred",
            "haiku",
            "humor",
            "percy-jackson",
            "poem"
        ]
    },
    {
        "text": "If you end up with a boring miserable life because you listened to your mom, your dad, your teacher, your priest, or some guy on television telling you how to do your shit, then you deserve it.",
        "author": "Frank Zappa",
        "tags": [
            "be-yourself",
            "life",
            "self-determination"
        ]
    },
    {
        "text": "Dreams do come true, if only we wish hard enough. You can have anything in life if you will sacrifice everything else for it.",
        "author": "J.M. Barrie,",
        "tags": [
            "sacrifice"
        ]
    },
    {
        "text": "When you find your path, you must not be afraid. You need to have sufficient courage to make mistakes. Disappointment, defeat, and despair are the tools God uses to show us the way.",
        "author": "Paulo Coelho,",
        "tags": [
            "disappointment",
            "life",
            "mistakes"
        ]
    },
    {
        "text": "Expose yourself to your deepest fear; after that, fear has no power, and the fear of freedom shrinks and vanishes. You are free.",
        "author": "Jim Morrison",
        "tags": []
    },
    {
        "text": "Must you go? I was rather hoping you'd stay and be a ministering angel, but if you must go, you must.\"\"I'll stay,\" Will said a bit crossly, and threw himself down in the armchair Tessa had just vacated. \"I can minister angelically.\"\"None too convincingly. And you're not as pretty to look at as Tessa is,\" Jem said, closing his eyes as he leaned back against the pillow.\"How rude. Many who have gazed upon me have compared the experience to gazing at the radiance of the sun.\"Jem still had his eyes closed. \"If they mean it gives you a headache, they aren't wrong.",
        "author": "Cassandra Clare,",
        "tags": [
            "friends",
            "humor",
            "radiance"
        ]
    },
    {
        "text": "Don't spend time beating on a wall, hoping to transform it into a door.",
        "author": "Coco Chanel",
        "tags": [
            "failure",
            "success",
            "time"
        ]
    },
    {
        "text": "Time doesn’t heal emotional pain, you need to learn how to let go.",
        "author": "Roy T. Bennett,",
        "tags": [
            "heal",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "learning",
            "let-go",
            "letting-go",
            "letting-go-of-the-past",
            "life",
            "life-quotes",
            "pain",
            "spiritual",
            "time"
        ]
    },
    {
        "text": "Kindness is a language which the deaf can hear and the blind can see.",
        "author": "Mark Twain",
        "tags": [
            "inspirational",
            "kindness"
        ]
    },
    {
        "text": "When I get lonely these days, I think: So BE lonely, Liz. Learn your way around loneliness. Make a map of it. Sit with it, for once in your life. Welcome to the human experience. But never again use another person's body or emotions as a scratching post for your own unfulfilled yearnings.",
        "author": "Elizabeth Gilbert,",
        "tags": [
            "loneliness"
        ]
    },
    {
        "text": "Atheism turns out to be too simple. If the whole universe has no meaning, we should never have found out that it has no meaning...",
        "author": "C.S. Lewis",
        "tags": [
            "atheism",
            "religion"
        ]
    },
    {
        "text": "Every book, every volume you see here, has a soul. The soul of the person who wrote it and of those who read it and lived and dreamed with it. Every time a book changes hands, every time someone runs his eyes down its pages, its spirit grows and strengthens.",
        "author": "Carlos Ruiz Zafón,",
        "tags": [
            "inspirational",
            "soul",
            "spiritual-growth"
        ]
    },
    {
        "text": "Learn to value yourself, which means: fight for your happiness.",
        "author": "Ayn Rand",
        "tags": [
            "fight",
            "happiness",
            "learn"
        ]
    },
    {
        "text": "It's all in the view. That's what I mean about forever, too. For any one of us our forever could end in an hour, or a hundred years from now. You never know for sure, so you'd better make every second count.",
        "author": "Sarah Dessen,",
        "tags": [
            "life"
        ]
    },
    {
        "text": "We're staying together,\" he promised. \"You're not getting away from me. Never again.",
        "author": "Rick Riordan,",
        "tags": [
            "annabeth-chase",
            "emotion",
            "heartbreak",
            "love",
            "percy-jackson"
        ]
    },
    {
        "text": "Where there is love, there is often also hate. They can exist side by side.",
        "author": "Cassandra Clare,",
        "tags": []
    },
    {
        "text": "All parents damage their children. It cannot be helped. Youth, like pristine glass, absorbs the prints of its handlers. Some parents smudge, others crack, a few shatter childhoods completely into jagged little pieces, beyond repair.",
        "author": "Mitch Albom,",
        "tags": [
            "family",
            "inspirational",
            "life",
            "parents"
        ]
    },
    {
        "text": "The truth is what I make it. I could set this world on fire and call it rain.",
        "author": "Victoria Aveyard,",
        "tags": []
    },
    {
        "text": "God can't give us peace and happiness apart from Himself because there is no such thing.",
        "author": "C.S. Lewis",
        "tags": [
            "god-religion-happiness"
        ]
    },
    {
        "text": "But it is the nature of stars to cross, and never was Shakespeare more wrong than when he has Cassius note, ‘The fault, dear Brutus, is not in our stars / But in ourselves.",
        "author": "John Green,",
        "tags": [
            "tfios",
            "the-fault-in-our-stars"
        ]
    },
    {
        "text": "I don't know that love changes. People change. Circumstances change.",
        "author": "Nicholas Sparks",
        "tags": []
    },
    {
        "text": "Trust is like a mirror, you can fix it if it's broken, but you can still see the crack in that mother fucker's reflection.",
        "author": "Lady Gaga",
        "tags": [
            "beyonce",
            "lady-gaga",
            "mirror",
            "trust"
        ]
    },
    {
        "text": "I'll just have them change the entry in the demonology textbook from 'almost extinct' to 'not extinct enough for Alec. He prefers his monsters really, really extinct.' Will that make you happy?",
        "author": "Cassandra Clare,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "And thus the heart will break, yet brokenly live on.",
        "author": "George Gordon Byron",
        "tags": []
    },
    {
        "text": "All alone! Whether you like it or not, alone is something you'll be quite a lot!",
        "author": "Dr. Seuss,",
        "tags": [
            "depressing",
            "hopeless",
            "lonely"
        ]
    },
    {
        "text": "The world is indeed comic, but the joke is on mankind.",
        "author": "H. P. Lovecraft",
        "tags": []
    },
    {
        "text": "If you know someone who’s depressed, please resolve never to ask them why. Depression isn’t a straightforward response to a bad situation; depression just is, like the weather.Try to understand the blackness, lethargy, hopelessness, and loneliness they’re going through. Be there for them when they come through the other side. It’s hard to be a friend to someone who’s depressed, but it is one of the kindest, noblest, and best things you will ever do.",
        "author": "Stephen Fry",
        "tags": [
            "advice",
            "depression",
            "friendship",
            "life",
            "self-help"
        ]
    },
    {
        "text": "Man only likes to count his troubles; he doesn't calculate his happiness.",
        "author": "Fyodor Dostoevsky,",
        "tags": [
            "happiness",
            "man",
            "trouble"
        ]
    },
    {
        "text": "No persons are more frequently wrong, than those who will not admit they are wrong.",
        "author": "François de La Rochefoucauld",
        "tags": [
            "cynical",
            "life",
            "truth"
        ]
    },
    {
        "text": "Do not be afraid; our fateCannot be taken from us; it is a gift.",
        "author": "Dante Alighieri,",
        "tags": [
            "faith",
            "fate",
            "fear"
        ]
    },
    {
        "text": "Families are messy. Immortal families are eternally messy. Sometimes the best we can do is to remind each other that we're related for better or for worse...and try to keep the maiming and killing to a minimum.",
        "author": "Rick Riordan,",
        "tags": [
            "family"
        ]
    },
    {
        "text": "So please, oh please, we beg, we pray, go throw your TV set away, and in its place you can install, a lovely bookshelf on the wall.",
        "author": "Roald Dahl",
        "tags": []
    },
    {
        "text": "I am free and that is why I am lost.",
        "author": "Franz Kafka",
        "tags": []
    },
    {
        "text": "We were like gods at the dawning of the world, & our joy was so bright we could see nothing else but the other.",
        "author": "Madeline Miller,",
        "tags": []
    },
    {
        "text": "Cry. Forgive. Learn. Move on. Let your tears water the seeds of your future happiness.",
        "author": "Steve Maraboli",
        "tags": [
            "cry",
            "forgive",
            "happiness",
            "inspiration",
            "learn",
            "letting-go",
            "life",
            "motivational",
            "moving-on",
            "seeds",
            "success",
            "tears",
            "water"
        ]
    },
    {
        "text": "Without suffering, there'd be no compassion.",
        "author": "Nicholas Sparks,",
        "tags": []
    },
    {
        "text": "This is the way the world endsNot with a bang but a whimper.",
        "author": "T.S. Eliot",
        "tags": [
            "apocalypse",
            "despair",
            "poetry"
        ]
    },
    {
        "text": "If people refuse to look at you in a new light and they can only see you for what you were, only see you for the mistakes you've made, if they don't realize that you are not your mistakes, then they have to go.",
        "author": "Steve Maraboli,",
        "tags": [
            "change",
            "growth",
            "inspirational",
            "letting-go",
            "life",
            "mistakes"
        ]
    },
    {
        "text": "Beautiful face. Beautiful body. Horrible attitude. It was the holy trinity of hot boys.",
        "author": "Jennifer L. Armentrout,",
        "tags": [
            "boys",
            "hot",
            "humor"
        ]
    },
    {
        "text": "The saddest people I've ever met in life are the ones who don't care deeply about anything at all. Passion and satisfaction go hand in hand, and without them, any happiness is only temporary, because there's nothing to make it last.",
        "author": "Nicholas Sparks,",
        "tags": [
            "life",
            "love",
            "passion"
        ]
    },
    {
        "text": "If conversation was the lyrics, laughter was the music, making time spent together a melody that could be replayed over and over without getting stale.",
        "author": "Nicholas Sparks",
        "tags": [
            "love",
            "nicholas-sparks",
            "relationships",
            "the-choice"
        ]
    },
    {
        "text": "A word after a word after a word is power.",
        "author": "Margaret Atwood",
        "tags": [
            "reading",
            "writing"
        ]
    },
    {
        "text": "Fill your paper with the breathings of your heart.",
        "author": "William Wordsworth",
        "tags": [
            "on-writing",
            "writing",
            "writing-from-the-heart"
        ]
    },
    {
        "text": "Politeness is deception in pretty packaging.",
        "author": "Veronica Roth,",
        "tags": []
    },
    {
        "text": "It is a good rule after reading a new book, never to allow yourself another new one till you have read an old one in between.",
        "author": "C.S. Lewis",
        "tags": [
            "books",
            "old-books",
            "reading"
        ]
    },
    {
        "text": "If there's a single lesson that life teaches us, it's that wishing doesn't make it so.",
        "author": "Lev Grossman,",
        "tags": [
            "life-truths",
            "reality-check"
        ]
    },
    {
        "text": "Worry never robs tomorrow of its sorrow, but only saps today of its strength.",
        "author": "A.J. Cronin",
        "tags": []
    },
    {
        "text": "Let our scars fall in love.",
        "author": "Galway Kinnell",
        "tags": [
            "poetry"
        ]
    },
    {
        "text": "Here is a lesson in creative writing. First rule: Do not use semicolons. They are transvestite hermaphrodites representing absolutely nothing. All they do is show you've been to college.",
        "author": "Kurt Vonnegut,",
        "tags": [
            "college",
            "semicolons",
            "writing"
        ]
    },
    {
        "text": "There is more to sex appeal than just measurements. I don't need a bedroom to prove my womanliness. I can convey just as much sex appeal, picking apples off a tree or standing in the rain.",
        "author": "Audrey Hepburn",
        "tags": [
            "sex-appeal",
            "women"
        ]
    },
    {
        "text": "Books are not made to be believed, but to be subjected to inquiry. When we consider a book, we mustn't ask ourselves what it says but what it means...",
        "author": "Umberto Eco,",
        "tags": [
            "books"
        ]
    },
    {
        "text": "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.",
        "author": "Daniel J. Boorstin",
        "tags": [
            "misattributed-stephen-hawking"
        ]
    },
    {
        "text": "They say time heals all wounds, but that presumes the source of the grief is finite",
        "author": "Cassandra Clare,",
        "tags": [
            "grief",
            "healing",
            "magnus-bane",
            "time",
            "will-herondale"
        ]
    },
    {
        "text": "I know I am but summer to your heart, and not the full four seasons of the year.",
        "author": "Edna St. Vincent Millay",
        "tags": [
            "heart",
            "infidelity",
            "relationships",
            "seasons",
            "summer"
        ]
    },
    {
        "text": "A man who procrastinates in his choosing will inevitably have his choice made for him by circumstance.",
        "author": "Hunter S. Thompson,",
        "tags": []
    },
    {
        "text": "If you want to find out what a man is to the bottom, give him power. Any man can stand adversity — only a great man can stand prosperity. It is the glory of Abraham Lincoln that he never abused power only on the side of mercy",
        "author": "Robert Ingersoll",
        "tags": [
            "adversity",
            "character",
            "power"
        ]
    },
    {
        "text": "It was a mistake,\" you said. But the cruel thing was, it felt like the mistake was mine, for trusting you.",
        "author": "David Levithan,",
        "tags": [
            "betrayal",
            "trust"
        ]
    },
    {
        "text": "You can't stop the futureYou can't rewind the pastThe only way to learn the secret...is to press play.",
        "author": "Jay Asher,",
        "tags": [
            "change",
            "future",
            "play",
            "rewind",
            "secret",
            "stop"
        ]
    },
    {
        "text": "You shall know the truth and the truth shall make you mad.",
        "author": "Aldous Huxley",
        "tags": []
    },
    {
        "text": "I want to grow old without facelifts. I want to have the courage to be loyal to the face I have made.",
        "author": "Marilyn Monroe",
        "tags": []
    },
    {
        "text": "I'm a business man,\" he'd told her. \"No more, no less.\"\"You're a thief, Kaz.\"\"Isn't that what I just said?",
        "author": "Leigh Bardugo,",
        "tags": []
    },
    {
        "text": "That's why when major badasses greet each other in movies, they don't say anything, they just nod. The nod means, 'I' am a badass, and I recognize that you, too, are a badass,' but they don't say anything because they're Wolverine and Magneto and it would mess up their vibe to explain.",
        "author": "Cassandra Clare,",
        "tags": [
            "city-of-bones",
            "simon-lewis"
        ]
    },
    {
        "text": "- \"Why don't you like to be touched?\" - \"Because I'm fifty shades of fucked-up, Anastasia",
        "author": "E.L. James,",
        "tags": []
    },
    {
        "text": "Don’t try to make life a mathematics problem with yourself in the center and everything coming out equal. When you’re good, bad things can still happen. And if you’re bad, you can still be lucky.",
        "author": "Barbara Kingsolver,",
        "tags": [
            "life",
            "unfairness"
        ]
    },
    {
        "text": "As it has been said:Love and a coughcannot be concealed.Even a small cough.Even a small love.",
        "author": "Anne Sexton",
        "tags": [
            "poetry"
        ]
    },
    {
        "text": "Who, being loved, is poor?",
        "author": "Oscar Wilde",
        "tags": [
            "love"
        ]
    },
    {
        "text": "No one can construct for you the bridge upon which precisely you must cross the stream of life, no one but you yourself alone.",
        "author": "Friedrich Nietzsche",
        "tags": []
    },
    {
        "text": "I want you always to remember me. Will you remember that I existed, and that I stood next to you here like this?",
        "author": "Haruki Murakami,",
        "tags": []
    },
    {
        "text": "If you would tell me the heart of a man, tell me not what he reads, but what he rereads.",
        "author": "Francois Mauriac",
        "tags": [
            "books",
            "literacy",
            "reading"
        ]
    },
    {
        "text": "Ever has it been that love knows not its own depth until the hour of separation.",
        "author": "Kahlil Gibran",
        "tags": [
            "emotion",
            "heartbreak",
            "lost-love",
            "love",
            "parting"
        ]
    },
    {
        "text": "I fell in love with him. But I don't just stay with him by default as if there's no one else available to me. I stay with him because I choose to, every day that I wake up, every day that we fight or lie to each other or disappoint each other. I choose him over and over again, and he chooses me.",
        "author": "Veronica Roth,",
        "tags": [
            "agency",
            "choices",
            "love"
        ]
    },
    {
        "text": "By the pricking of my thumbs, Something wicked this way comes.",
        "author": "William Shakespeare,",
        "tags": [
            "foreshadowing",
            "macbeth"
        ]
    },
    {
        "text": "You are not your job, you're not how much money you have in the bank. You are not the car you drive. You're not the contents of your wallet. You are not your fucking khakis. You are all singing, all dancing crap of the world.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "identity"
        ]
    },
    {
        "text": "Talk sense to a fool and he calls you foolish.",
        "author": "Euripides,",
        "tags": [
            "foolishness",
            "rationality",
            "reason",
            "sense",
            "stupidity",
            "understanding"
        ]
    },
    {
        "text": "We've got to live, no matter how many skies have fallen.",
        "author": "D.H. Lawrence,",
        "tags": []
    },
    {
        "text": "The nitrogen in our DNA, the calcium in our teeth, the iron in our blood, the carbon in our apple pies were made in the interiors of collapsing stars. We are made of starstuff.",
        "author": "Carl Sagan,",
        "tags": [
            "atoms",
            "cosmos",
            "dna",
            "sense-of-wonder",
            "stars"
        ]
    },
    {
        "text": "Scared is what you're feeling. Brave is what you're doing.",
        "author": "Emma Donoghue,",
        "tags": [
            "bravery",
            "courage",
            "fear"
        ]
    },
    {
        "text": "Forgive, O Lord, my little jokes on TheeAnd I'll forgive Thy great big one on me.",
        "author": "Robert Frost",
        "tags": [
            "humor",
            "poetry",
            "religion"
        ]
    },
    {
        "text": "Honestly, if you were any slower, you’d be going backward.",
        "author": "J.K. Rowling,",
        "tags": [
            "draco-malfoy",
            "stupidity"
        ]
    },
    {
        "text": "Nothing in the world is more dangerous than sincere ignorance and conscientious stupidity.",
        "author": "Martin Luther King Jr.",
        "tags": [
            "ignorance"
        ]
    },
    {
        "text": "The trouble is not in dying for a friend, but in finding a friend worth dying for.",
        "author": "Mark Twain",
        "tags": []
    },
    {
        "text": "We rip out so much of ourselves to be cured of things faster than we should that we go bankrupt by the age of thirty and have less to offer each time we start with someone new. But to feel nothing so as not to feel anything - what a waste!",
        "author": "Andre Aciman,",
        "tags": [
            "aciman",
            "call-me-by-your-name",
            "italy",
            "love"
        ]
    },
    {
        "text": "Of all the words of mice and men, the saddest are, \"It might have been.",
        "author": "Kurt Vonnegut",
        "tags": [
            "hindsight",
            "regret"
        ]
    },
    {
        "text": "Even in the Future the Story Begins with Once Upon a Time.",
        "author": "Marissa Meyer,",
        "tags": []
    },
    {
        "text": "I drink to make other people more interesting.",
        "author": "Hemingway, Ernest",
        "tags": [
            "drinking"
        ]
    },
    {
        "text": "Illegal aliens have always been a problem in the United States. Ask any Indian.",
        "author": "Robert Orben",
        "tags": [
            "humour",
            "politics",
            "truth"
        ]
    },
    {
        "text": "No one has ever become poor by giving.",
        "author": "Anne Frank,",
        "tags": [
            "charity",
            "compassion",
            "helping-others",
            "kindness"
        ]
    },
    {
        "text": "Knowing too much of your future is never a good thing.",
        "author": "Rick Riordan,",
        "tags": [
            "fate",
            "future",
            "knowledge"
        ]
    },
    {
        "text": "If A is a success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut",
        "author": "Albert Einstein",
        "tags": []
    },
    {
        "text": "It wouldn't be my move,\" Jace agreed. \"First the candy and flowers, then the apology letters, then the ravenous demon hordes. In that order.",
        "author": "Cassandra Clare,",
        "tags": []
    },
    {
        "text": "The helpful thought for which you lookIs written somewhere in a book.",
        "author": "Edward Gorey",
        "tags": []
    },
    {
        "text": "Courage is found in unlikely places.",
        "author": "J.R.R. Tolkien",
        "tags": [
            "bravery",
            "courage"
        ]
    },
    {
        "text": "If you think you are too small to make a difference, try sleeping with a mosquito.",
        "author": "Dalai Lama XIV",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "I felt like crying but nothing came out. it was just a sort of sad sickness, sick sad, when you can't feel any worse. I think you know it. I think everybody knows it now and then. but I think I have known it pretty often, too often.",
        "author": "Charles Bukowski,",
        "tags": []
    },
    {
        "text": "But how could you live and have no story to tell?",
        "author": "Fyodor Dostoevsky,",
        "tags": [
            "life",
            "story"
        ]
    },
    {
        "text": "Open your heart. Someone will come. Someone will come for you. But first you must open your heart.",
        "author": "Kate DiCamillo,",
        "tags": [
            "edward"
        ]
    },
    {
        "text": "Don't compromise yourself - you're all you have.",
        "author": "John Grisham,",
        "tags": [
            "be-yourself",
            "courtroom-drama",
            "crime"
        ]
    },
    {
        "text": "When people talk, listen completely. Most people never listen.",
        "author": "Ernest Hemingway",
        "tags": [
            "concern",
            "empathy",
            "listening",
            "understanding-others"
        ]
    },
    {
        "text": "When I was a child, adults would tell me not to make things up, warning me of what would happen if I did. As far as I can tell so far, it seems to involve lots of foreign travel and not having to get up too early in the morning.",
        "author": "Neil Gaiman,",
        "tags": []
    },
    {
        "text": "the free soul is rare, but you know it when you see it - basically because you feel good, very good, when you are near or with them.",
        "author": "Charles Bukowski,",
        "tags": []
    },
    {
        "text": "Fear is a phoenix. You can watch it burn a thousand times and still it will return.",
        "author": "Leigh Bardugo,",
        "tags": [
            "fear"
        ]
    },
    {
        "text": "We take for granted the very things that most deserve our gratitude.",
        "author": "Cynthia Ozick",
        "tags": []
    },
    {
        "text": "Time is the longest distance between two places.",
        "author": "Tennessee Williams,",
        "tags": [
            "distance",
            "time"
        ]
    },
    {
        "text": "He needed to tell her...what? That she was lovely and brave and better than anything he deserved. That he was twisted, crooked, wrong, but not so broken that he couldn't pull himself together into some semblance of a man for her. That without meaning to, he'd begun to lean on her, to look for her, to need her near. He needed to thank her for his new hat.",
        "author": "Leigh Bardugo,",
        "tags": [
            "leigh-bardugo",
            "six-of-crows"
        ]
    },
    {
        "text": "You see I usually find myself among strangers because I drift here and there trying to forget the sad things that happened to me.",
        "author": "F. Scott Fitzgerald,",
        "tags": []
    },
    {
        "text": "Wheresoever you go, go with all your heart.",
        "author": "Confucius",
        "tags": []
    },
    {
        "text": "One of the advantages of being disorganized is that one is always having surprising discoveries.",
        "author": "A.A. Milne",
        "tags": [
            "discovery",
            "eccentric",
            "life"
        ]
    },
    {
        "text": "Happiness is holding someone in your arms and knowing you hold the whole world.",
        "author": "Orhan Pamuk,",
        "tags": [
            "happiness",
            "love"
        ]
    },
    {
        "text": "A house without books is like a room without windows.",
        "author": "Horace Mann",
        "tags": [
            "books",
            "house",
            "simile",
            "windows"
        ]
    },
    {
        "text": "The mind once enlightened cannot again become dark.",
        "author": "Thomas Paine,",
        "tags": [
            "education",
            "experience",
            "wisdom"
        ]
    },
    {
        "text": "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.",
        "author": "Maya Angelou",
        "tags": [
            "adversity",
            "character",
            "failure",
            "perseverance"
        ]
    },
    {
        "text": "That's what careless words do. They make people love you a little less.",
        "author": "Arundhati Roy,",
        "tags": [
            "words"
        ]
    },
    {
        "text": "Do your little bit of good where you are; it's those little bits of good put together that overwhelm the world.",
        "author": "Desmond Tutu",
        "tags": [
            "goodness",
            "incrementalism",
            "kindness"
        ]
    },
    {
        "text": "Are you implying that shreds of my reputation remain intact?\" Will demanded with mock horror. \"Clearly I have been doing something wrong. Or not something wrong, as the case may be.\" He banged on the side of the carriage. \"Thomas! We must away at once to the nearest brothel. I seek scandal and low companionship.",
        "author": "Cassandra Clare,",
        "tags": [
            "will-herondale"
        ]
    },
    {
        "text": "Therefore, dear Sir, love your solitude and try to sing out with the pain it causes you. For those who are near you are far away... and this shows that the space around you is beginning to grow vast.... be happy about your growth, in which of course you can't take anyone with you, and be gentle with those who stay behind; be confident and calm in front of them and don't torment them with your doubts and don't frighten them with your faith or joy, which they wouldn't be able to comprehend. Seek out some simple and true feeling of what you have in common with them, which doesn't necessarily have to alter when you yourself change again and again; when you see them, love life in a form that is not your own and be indulgent toward those who are growing old, who are afraid of the aloneness that you trust.... and don't expect any understanding; but believe in a love that is being stored up for you like an inheritance, and have faith that in this love there is a strength and a blessing so large that you can travel as far as you wish without having to step outside it.",
        "author": "Rainer Maria Rilke,",
        "tags": [
            "aloneness",
            "change",
            "common-ground",
            "faith",
            "love",
            "loved-ones",
            "relationships",
            "solitude"
        ]
    },
    {
        "text": "From there to here, from here to there, funny things are everywhere!",
        "author": "Dr. Seuss,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "I'm on Aslan's side even if there isn't any Aslan to lead it. I'm going to live as like a Narnian as I can even if there isn't any Narnia.",
        "author": "C.S. Lewis,",
        "tags": [
            "hell",
            "love",
            "safe"
        ]
    },
    {
        "text": "Don't let the bastards grind you down.",
        "author": "Margaret Atwood,",
        "tags": []
    },
    {
        "text": "Our mothers always remain the strangest, craziest people we've ever met.",
        "author": "Marguerite Duras",
        "tags": [
            "mothers"
        ]
    },
    {
        "text": "If you look the right way, you can see that the whole world is a garden.",
        "author": "Frances Hodgson Burnett,",
        "tags": [
            "perspective",
            "positive-attitude"
        ]
    },
    {
        "text": "When you are content to be simply yourself and don't compare or compete, everyone will respect you.",
        "author": "Lao Tzu,",
        "tags": [
            "ataraxy",
            "be-yourself",
            "integrity",
            "self-reliance",
            "self-respect"
        ]
    },
    {
        "text": "Because you can't argue with all the fools in the world. It's easier to let them have their way, then trick them when they're not paying attention.",
        "author": "Christopher Paolini",
        "tags": [
            "common-sense",
            "humor",
            "smart"
        ]
    },
    {
        "text": "We are addicted to our thoughts. We cannot change anything if we cannot change our thinking.",
        "author": "Santosh Kalwar,",
        "tags": [
            "addiction",
            "life-lessons",
            "philosophy",
            "thinking",
            "thoughts"
        ]
    },
    {
        "text": "I have the simplest tastes. I am always satisfied with the best.",
        "author": "Oscar Wilde",
        "tags": [
            "humor",
            "taste"
        ]
    },
    {
        "text": "Strange as it may seem, I still hope for the best, even though the best, like an interesting piece of mail, so rarely arrives, and even when it does it can be lost so easily.",
        "author": "Lemony Snicket,",
        "tags": [
            "hope",
            "mail"
        ]
    },
    {
        "text": "Whenever you read a cancer booklet or website or whatever, they always list depression among the side effects of cancer. But, in fact, depression is not a side effect of cancer. Depression is a side effect of dying.",
        "author": "John Green,",
        "tags": [
            "cancer",
            "depression",
            "dying",
            "life"
        ]
    },
    {
        "text": "So many things become beautiful when you really look.",
        "author": "Lauren Oliver,",
        "tags": []
    },
    {
        "text": "Words, I think, are such unpredictable creatures. No gun, no sword, no army or king will ever be more powerful than a sentence. Swords may cut and kill, but words will stab and stay, burying themselves in our bones to become corpses we carry into the future, all the time digging and failing to rip their skeletons from our flesh.",
        "author": "Tahereh Mafi,",
        "tags": [
            "adam",
            "ignite-me"
        ]
    },
    {
        "text": "And I guess I realized at that moment that I really did love her. Because there was nothing to gain, and that didn't matter.",
        "author": "Stephen Chbosky,",
        "tags": []
    },
    {
        "text": "Crying is for plain women. Pretty women go shopping.",
        "author": "Oscar Wilde",
        "tags": [
            "beauty",
            "humour"
        ]
    },
    {
        "text": "It is a curious thing, Harry, but perhaps those who are best suited to power are those who have never sought it. Those who, like you, have leadership thrust upon them, and take up the mantle because they must, and find to their own surprise that they wear it well.",
        "author": "J.K. Rowling,",
        "tags": [
            "leadership"
        ]
    },
    {
        "text": "Love can change a person the way a parent can change a baby- awkwardly, and often with a great deal of mess.",
        "author": "Lemony Snicket,",
        "tags": [
            "babies",
            "change",
            "humor",
            "love",
            "parents"
        ]
    },
    {
        "text": "I thought I'd lie on the floor and writhe in pain for a while,\" he grunted, \"It relaxes me.\"\"It does? Oh - you're being sarcastic. That's a good sign probably.",
        "author": "Cassandra Clare,",
        "tags": [
            "funny",
            "humor"
        ]
    },
    {
        "text": "A wonderful fact to reflect upon, that every human creature is constituted to be that profound secret and mystery to every other.",
        "author": "Charles Dickens,",
        "tags": [
            "communication",
            "psychology"
        ]
    },
    {
        "text": "My concern is not whether God is on our side; my greatest concern is to be on God's side, for God is always right.",
        "author": "Abraham Lincoln",
        "tags": [
            "inspirational",
            "philosophical",
            "politics",
            "religion",
            "religious"
        ]
    },
    {
        "text": "Peeta, how come I never know when you're having a nightmare? I say.I don't know. I don't think I cry out or thrash around or anything. I just come to, paralyzed with terror, he says.You should wake me, I say, thinking about how I can interrupt his sleep two or three times on a bad night. About how long it can take to calm me down.It's not necessary. My nightmares are usually about losing you, he says. I'm okay once I realize you're here.",
        "author": "Suzanne Collins,",
        "tags": [
            "catching-fire",
            "katniss-and-peeta",
            "katniss-everdeen",
            "love",
            "peeta-mellark",
            "romance",
            "the-hunger-games"
        ]
    },
    {
        "text": "إن المرأة تحب رجلها ليس لأنه أقوى الرجال، و لا أوسمهم، و لا أغناهم، بل لأنه هو.. بضعفه و قوته.. و الحب ليس إستعراض قوة لكنه طاقة عطاء دافئة مستمرة",
        "author": "أحمد خالد توفيق",
        "tags": [
            "life"
        ]
    },
    {
        "text": "She refused to be bored chiefly because she wasn't boring.",
        "author": "Zelda Fitzgerald,",
        "tags": []
    },
    {
        "text": "I can only note that the past is beautiful because one never realises an emotion at the time. It expands later, and thus we don't have complete emotions about the present, only about the past.",
        "author": "Virginia Woolf",
        "tags": []
    },
    {
        "text": "What she was finding also was how one book led to another, doors kept opening wherever she turned and the days weren't long enough for the reading she wanted to do.",
        "author": "Alan Bennett,",
        "tags": [
            "books"
        ]
    },
    {
        "text": "The pleasure of remembering had been taken from me, because there was no longer anyone to remember with. It felt like losing your co-rememberer meant losing the memory itself, as if the things we'd done were less real and important than they had been hours before.",
        "author": "John Green,",
        "tags": [
            "grief",
            "loss",
            "memory"
        ]
    },
    {
        "text": "And I urge you to please notice when you are happy, and exclaim or murmur or think at some point, 'If this isn't nice, I don't know what is.",
        "author": "Kurt Vonnegut Jr.,",
        "tags": []
    },
    {
        "text": "Never make someone a priority when all you are to them is an option.",
        "author": "Maya Angelou",
        "tags": []
    },
    {
        "text": "I don't think of all the misery, but of the beauty that still remains.",
        "author": "Anne Frank,",
        "tags": [
            "beauty",
            "hope",
            "inspirational",
            "joy"
        ]
    },
    {
        "text": "It is good to have an end to journey toward; but it is the journey that matters, in the end.",
        "author": "Ursula K. Le Guin,",
        "tags": [
            "goals",
            "journey",
            "travel"
        ]
    },
    {
        "text": "The heart has its reasons which reason knows not.",
        "author": "Blaise Pascal",
        "tags": [
            "heart",
            "love",
            "quip",
            "reason"
        ]
    },
    {
        "text": "those who escape hellhowevernever talk aboutitand nothing muchbothers themafterthat.",
        "author": "Charles Bukowski",
        "tags": []
    },
    {
        "text": "My soul will find yours.",
        "author": "Jude Deveraux,",
        "tags": []
    },
    {
        "text": "Sometimes you have to lose all you have to find out who you truly are.",
        "author": "Roy T. Bennett,",
        "tags": [
            "be-yourself",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "living",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking"
        ]
    },
    {
        "text": "Reputation is what other people know about you. Honor is what you know about yourself.",
        "author": "Lois McMaster Bujold,",
        "tags": [
            "inspirational",
            "sci-fi",
            "vorkosigan"
        ]
    },
    {
        "text": "There is something delicious about writing the first words of a story. You never quite know where they'll take you.",
        "author": "Beatrix Potter",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "The thing that is really hard, and really amazing, is giving up on being perfect and beginning the work of becoming yourself.",
        "author": "Anna Quindlen",
        "tags": []
    },
    {
        "text": "Come sleep with me: We won't make Love, Love will make us.",
        "author": "Julio Cortázar",
        "tags": [
            "love",
            "poem",
            "relationships",
            "romance"
        ]
    },
    {
        "text": "Memories, even your most precious ones, fade surprisingly quickly. But I don’t go along with that. The memories I value most, I don’t ever see them fading.",
        "author": "Kazuo Ishiguro,",
        "tags": [
            "memory"
        ]
    },
    {
        "text": "To shine your brightest light is to be who you truly are.",
        "author": "Roy T. Bennett",
        "tags": [
            "be-yourself",
            "being-yourself",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-quotes",
            "light",
            "living",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "shine"
        ]
    },
    {
        "text": "When we least expect it, life sets us a challenge to test our courage and willingness to change; at such a moment, there is no point in pretending that nothing has happened or in saying that we are not yet ready. The challenge will not wait. Life does not look back. A week is more than enough time for us to decide whether or not to accept our destiny.",
        "author": "Paulo Coelho,",
        "tags": [
            "challenges",
            "change",
            "courage",
            "life"
        ]
    },
    {
        "text": "Sell your cleverness and buy bewilderment.",
        "author": "Rumi,",
        "tags": [
            "wisdom"
        ]
    },
    {
        "text": "Really, the combination of the scabs and the ointment looks hideous. I can't help enjoying his distress.\"Poor Finnick. Is this the first time in your life you haven't looked pretty?\" I say.\"It must be. The sensation's completely new. How have you managed it all these years?\" he asks.\"Just avoid mirrors. You'll forget about it,\" I say.\"Not if I keep looking at you,\" he says.",
        "author": "Suzanne Collins,",
        "tags": [
            "catching-fire",
            "finnick",
            "hunger-games",
            "katniss",
            "mirror",
            "pretty"
        ]
    },
    {
        "text": "True love is usually the most inconvenient kind.",
        "author": "Kiera Cass,",
        "tags": [
            "inconvenient",
            "love",
            "relationship",
            "true-love"
        ]
    },
    {
        "text": "I always channel my emotions into my work. That way, I don't hurt anyone but myself.",
        "author": "Suzanne Collins,",
        "tags": []
    },
    {
        "text": "The more you know who you are, and what you want, the less you let things upset you.",
        "author": "Stephanie Perkins,",
        "tags": [
            "acceptance",
            "life"
        ]
    },
    {
        "text": "I like to see people reunited, I like to see people run to each other, I like the kissing and the crying, I like the impatience, the stories that the mouth can't tell fast enough, the ears that aren't big enough, the eyes that can't take in all of the change, I like the hugging, the bringing together, the end of missing someone.",
        "author": "Jonathan Safran Foer,",
        "tags": []
    },
    {
        "text": "There is only one page left to write on. I will fill it with words of only one syllable. I love. I have loved. I will love.",
        "author": "Dodie Smith,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "I want to be the friend you fall hopelessly in love with. The one you take into your arms and into your bed and into the private world you keep trapped in your head. I want to be that kind of friend. The one who will memorize the things you say as well as the shape of your lips when you say them. I want to know every curve, every freckle, every shiver of your body. I want to know where to touch you, I want to know how to touch you. I want to know convince you to design a smile just for me. Yes, I do want to be your friend. I want to be your best friend in the entire world.",
        "author": "Tahereh Mafi,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Then the Grinch thought of something he hadn't before! What if Christmas, he thought, doesn't come from a store. What if Christmas...perhaps...means a little bit more!",
        "author": "Dr. Seuss,",
        "tags": [
            "christmas"
        ]
    },
    {
        "text": "May the odds be ever in your favor!",
        "author": "Suzanne Collins,",
        "tags": [
            "benediction"
        ]
    },
    {
        "text": "Those who can make you believe absurdities, can make you commit atrocities.",
        "author": "Voltaire",
        "tags": [
            "absurdities",
            "atheism",
            "atrocities",
            "barbarity",
            "injustice",
            "religion",
            "skepticism"
        ]
    },
    {
        "text": "When you play a game of thrones you win or you die.",
        "author": "George R.R. Martin,",
        "tags": []
    },
    {
        "text": "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down.",
        "author": "Abraham Lincoln",
        "tags": [
            "frienship",
            "success"
        ]
    },
    {
        "text": "The world was collapsing, and the only thing that really mattered to me was that she was alive.",
        "author": "Rick Riordan,",
        "tags": [
            "infatuation",
            "love",
            "obsession"
        ]
    },
    {
        "text": "Can you understand? Someone, somewhere, can you understand me a little, love me a little? For all my despair, for all my ideals, for all that - I love life. But it is hard, and I have so much - so very much to learn.",
        "author": "Sylvia Plath,",
        "tags": []
    },
    {
        "text": "Try a little harder to be a little better.",
        "author": "Gordon B. Hinckley",
        "tags": []
    },
    {
        "text": "She had always wanted words, she loved them; grew up on them. Words gave her clarity, brought reason, shape.",
        "author": "Michael Ondaatje,",
        "tags": [
            "words"
        ]
    },
    {
        "text": "Did you ever think that in a past life Alec was an old woman with ninety cats who was always yelling at the neighborhood kids to get off her lawn? Because I do,",
        "author": "Cassandra Clare,",
        "tags": [
            "jace"
        ]
    },
    {
        "text": "You could have fooled me. Everytime I called you, Luke said you were sick. I figured you were avoiding me. Again.\"\"I wasn't. I did want to talk to you. I've been thinking about you all the time.\"\"I've been thinking about you, too.\"\"I really was sick. I swear. I almost died back there on the ship, you know.\"\"I know. Everytime you almost die, I almost die myself.",
        "author": "Cassandra Clare,",
        "tags": [
            "die",
            "love",
            "romance"
        ]
    },
    {
        "text": "Nitwit! Blubber! Oddment! Tweak!",
        "author": "J.K. Rowling,",
        "tags": []
    },
    {
        "text": "Where you used to be, there is a hole in the world, which I find myself constantly walking around in the daytime, and falling in at night. I miss you like hell.",
        "author": "Edna St. Vincent Millay",
        "tags": [
            "loneliness",
            "loss",
            "yearning"
        ]
    },
    {
        "text": "A childhood without books – that would be no childhood. That would be like being shut out from the enchanted place where you can go and find the rarest kind of joy.",
        "author": "Astrid Lindgren",
        "tags": [
            "books",
            "children",
            "children-s-literature"
        ]
    },
    {
        "text": "Let me give you a piece of advice. The handsome young fellow who's trying to rescue you from a hideous fate is never wrong. Not even if he says the sky is purple and made of hedgehogs.",
        "author": "Cassandra Clare,",
        "tags": [
            "tessa-gray",
            "will"
        ]
    },
    {
        "text": "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
        "author": "Marcel Proust",
        "tags": [
            "discovery",
            "travel"
        ]
    },
    {
        "text": "Ah, my daughter,ʺ he said. ʺEighteen, and already youʹve been accused of murder, aided felons, and acquired a death count higher than most guardians will ever see.ʺ He paused. ʺI couldnʹt be prouder.",
        "author": "Richelle Mead,",
        "tags": [
            "abe-mazur",
            "last-sacrifice",
            "rosemarie-hathaway"
        ]
    },
    {
        "text": "The beginning of love is the will to let those we love be perfectly themselves, the resolution not to twist them to fit our own image.",
        "author": "Thomas Merton,",
        "tags": []
    },
    {
        "text": "What do we live for, if it is not to make life less difficult for each other?",
        "author": "George Eliot",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Did you know that 'I told you so' has a brother,Jacob?\" she asked cutting me off. \"His name is 'Shut the hell up'.",
        "author": "Stephenie Meyer,",
        "tags": [
            "bella",
            "jacob",
            "meyer",
            "quotes"
        ]
    },
    {
        "text": "Hope can be a powerful force. Maybe there's no actual magic in it, but when you know what you hope for most and hold it like a light within you, you can make things happen, almost like magic.",
        "author": "Laini Taylor,",
        "tags": [
            "hope",
            "hopelessness",
            "magic"
        ]
    },
    {
        "text": "Sometimes, when I have to do something I don't want to do, I pretend I'm a character from a book. It's easier to know what they would do.",
        "author": "Cassandra Clare,",
        "tags": [
            "clockwork-angel",
            "will-herondale",
            "william-herondale"
        ]
    },
    {
        "text": "Tears are words that need to be written.",
        "author": "Paulo Coelho",
        "tags": [
            "inspirational",
            "sadness",
            "writing"
        ]
    },
    {
        "text": "Have you really read all those books in your room?Alaska laughing- Oh God no. I’ve maybe read a third of ‘em. But I’m going to read them all. I call it my Life’s Library. Every summer since I was little, I’ve gone to garage sales and bought all the books that looked interesting. So I always have something to read.",
        "author": "John Green,",
        "tags": [
            "books",
            "library",
            "reading"
        ]
    },
    {
        "text": "Reading brings us unknown friends",
        "author": "Honore de Balzac",
        "tags": [
            "reading"
        ]
    },
    {
        "text": "Time was passing like a hand waving from a train I wanted to be on. I hope you never have to think about anything as much as I think about you.",
        "author": "jonathan safran foer",
        "tags": [
            "desperate",
            "life",
            "losing",
            "love",
            "nostalgia",
            "pain",
            "regret",
            "solitude"
        ]
    },
    {
        "text": "Anxiety is the dizziness of freedom.",
        "author": "Søren Kierkegaard ,",
        "tags": [
            "anxiety",
            "dizziness",
            "fear",
            "freedom",
            "life"
        ]
    },
    {
        "text": "I wrote the story myself. It's about a girl who lost her reputation and never missed it.",
        "author": "Mae West",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "I don't want tea,\" said Clary, with muffled force. \"I want to find my mother. And then I want to find out who took her in the first place, and I want to kill them.\"\"Unfortunately,\" said Hodge, \"we're all out of bitter revenge at the moment, so it's either tea or nothing.",
        "author": "Cassandra Clare,",
        "tags": [
            "clary-fray",
            "hodge",
            "humor",
            "revenge",
            "sarcasm",
            "tea"
        ]
    },
    {
        "text": "When did we see each other face-to-face? Not until you saw into my cracks and I saw into yours. Before that, we were just looking at ideas of each other, like looking at your window shade but never seeing inside. But once the vessel cracks, the light can get in. The light can get out.",
        "author": "John Green,",
        "tags": [
            "cracks"
        ]
    },
    {
        "text": "Faith is not the belief that God will do what you want. It is the belief that God will do what is right.",
        "author": "Max Lucado,",
        "tags": [
            "faith"
        ]
    },
    {
        "text": "I imagine one of the reasons people cling to their hates so stubbornly is because they sense, once hate is gone, they will be forced to deal with pain.",
        "author": "James Baldwin,",
        "tags": [
            "fear",
            "hate",
            "pain"
        ]
    },
    {
        "text": "In time, the hurt began to fade and it was easier to just let it go. At least I thought it was. But in every boy I met in the next few years, I found myself looking for you, and when the feelings got too strong, I'd write you another letter. But I never sent them for fear of what I might find. By then, you'd gone on with your life and I didn't want to think about you loving someone else. I wanted to remember us like we were that summer. I didn't ever want to lose that.",
        "author": "Nicholas Sparks,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "You are all the colors in one, at full brightness.",
        "author": "Jennifer Niven,",
        "tags": []
    },
    {
        "text": "Art washes away from the soul the dust of everyday life.",
        "author": "Pablo Picasso",
        "tags": [
            "art"
        ]
    },
    {
        "text": "You must not lose faith in humanity. Humanity is like an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.",
        "author": "Mahatma Gandhi",
        "tags": [
            "faith",
            "humanity",
            "ocean"
        ]
    },
    {
        "text": "It's not gray,\" Clary felt compelled to point out. \"It's green.\"\"If there was such a thing as terminal literalism, you'd have died in childhood,\" said Jace.",
        "author": "Cassandra Clare,",
        "tags": [
            "clary",
            "gray-book",
            "humor",
            "jace"
        ]
    },
    {
        "text": "What day is it? asked Pooh. It’s today, squeaked Piglet.My favorite day, said Pooh.",
        "author": "A.A. Milne",
        "tags": [
            "live-in-the-moment",
            "optimism"
        ]
    },
    {
        "text": "I am always saying \"Glad to've met you\" to somebody I'm not at all glad I met. If you want to stay alive, you have to say that stuff, though.",
        "author": "J.D. Salinger,",
        "tags": [
            "friendship",
            "insincerity",
            "manners"
        ]
    },
    {
        "text": "In order to riseFrom its own ashesA phoenixFirstMustBurn.",
        "author": "Octavia Butler,",
        "tags": []
    },
    {
        "text": "I am different, not less.",
        "author": "Temple Grandin",
        "tags": []
    },
    {
        "text": "I haven't been everywhere, but it's on my list.",
        "author": "Susan Sontag",
        "tags": []
    },
    {
        "text": "There is only one good, knowledge, and one evil, ignorance.",
        "author": "Socrates",
        "tags": []
    },
    {
        "text": "Ah, music,\" he said, wiping his eyes. \"A magic beyond all we do here!",
        "author": "J.K. Rowling,",
        "tags": [
            "dumbledore",
            "magic",
            "music",
            "power-of-music"
        ]
    },
    {
        "text": "و كن من أنتَ حيث تكون و احمل عبءَ قلبِكَ وحدهُ",
        "author": "محمود درويش",
        "tags": []
    },
    {
        "text": "Animals are my friends...and I don't eat my friends.",
        "author": "George Bernard Shaw",
        "tags": [
            "animals",
            "attributed-no-source",
            "friends",
            "humor",
            "vegetarianism"
        ]
    },
    {
        "text": "Be thankful for everything that happens in your life; it’s all an experience.",
        "author": "Roy T. Bennett",
        "tags": [
            "experience",
            "gratitude",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-quotes",
            "living",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "thankful"
        ]
    },
    {
        "text": "If you work really hard, and you're kind, amazing things will happen.",
        "author": "Conan O'Brien",
        "tags": []
    },
    {
        "text": "The pleasure of all reading is doubled when one lives with another who shares the same books.",
        "author": "Katherine Mansfield",
        "tags": []
    },
    {
        "text": "Friendship marks a life even more deeply than love. Love risks degenerating into obsession, friendship is never anything but sharing.",
        "author": "Elie Wiesel",
        "tags": [
            "deep",
            "friendship",
            "life",
            "love",
            "obsession",
            "sharing"
        ]
    },
    {
        "text": "There is no place like home.",
        "author": "L. Frank Baum,",
        "tags": []
    },
    {
        "text": "You're an idiot.\"\"I've never claimed to be otherwise.",
        "author": "Cassandra Clare,",
        "tags": [
            "humor",
            "idiocy"
        ]
    },
    {
        "text": "...and then, I have nature and art and poetry, and if that is not enough, what is enough?",
        "author": "Vincent Willem van Gogh",
        "tags": [
            "art",
            "nature",
            "poetry",
            "suicide"
        ]
    },
    {
        "text": "I'm going to wake Peeta,\" I say.\"No, wait,\" says Finnick. \"Let's do it together. Put our faces right in front of his.\"Well, there's so little opportunity for fun left in my life, I agree. We position ourselves on either side of Peeta, lean over until our faces are inches frim his nose, and give him a shake. \"Peeta. Peeta, wake up,\" I say in a soft, singsong voice.His eyelids flutter open and then he jumps like we've stabbed him. \"Aa!\"Finnick and I fall back in the sand, laughing our heads off. Every time we try to stop, we look at Peeta's attempt to maintain a disdainful expression and it sets us off again.",
        "author": "Suzanne Collins,",
        "tags": [
            "funny",
            "humor",
            "prank"
        ]
    },
    {
        "text": "It's not worth doing something unless someone, somewhere, would much rather you weren't doing it.",
        "author": "Terry Pratchett",
        "tags": []
    },
    {
        "text": "Whatever you're meant to do, do it now. The conditions are always impossible.",
        "author": "Doris Lessing",
        "tags": []
    },
    {
        "text": "The reason it hurts so much to separate is because our souls are connected. Maybe they always have been and will be. Maybe we've lived a thousand lives before this one and in each of them we've found each other. And maybe each time, we've been forced apart for the same reasons. That means that this goodbye is both a goodbye for the past ten thousand years and a prelude to what will come.",
        "author": "Nicholas Sparks,",
        "tags": [
            "goodbye",
            "inspiration",
            "love"
        ]
    },
    {
        "text": "There are only the pursued, the pursuing, the busy and the tired.",
        "author": "F. Scott Fitzgerald,",
        "tags": [
            "demographics"
        ]
    },
    {
        "text": "Once upon a time, an angel and a devil fell in love. It did not end well.",
        "author": "Laini Taylor,",
        "tags": []
    },
    {
        "text": "The longer and more carefully we look at a funny story, the sadder it becomes.",
        "author": "Nikolai V. Gogol",
        "tags": [
            "humor",
            "sadness"
        ]
    },
    {
        "text": "You're just worried they'll hire a male instructor and he'll be hotter than you.\" Jace's eyebrows went up. \"Hotter than me?\" \"It could happen,\" Clary said, \"You know, theoretically.\"\"Theoretically the planet could suddenly crack in half, leaving me on one side and you on the other, forever and tragically parted, but I'm not worried about that either. Some things,\" Jace said, with his customary crooked smile, \"are just too unlikely to dwell upon.",
        "author": "Cassandra Clare,",
        "tags": [
            "city-of-fallen-angels",
            "clary-fray",
            "jace-lightwood"
        ]
    },
    {
        "text": "I love books, by the way, way more than movies. Movies tell you what to think. A good book lets you choose a few thoughts for yourself. Movies show you the pink house. A good book tells you there's a pink house and lets you paint some of the finishing touches, maybe choose the roof style,park your own car out front. My imagination has always topped anything a movie could come up with. Case in point, those darned Harry Potter movies. That was so not what that part-Veela-chick, Fleur Delacour, looked like.",
        "author": "Karen Marie Moning,",
        "tags": [
            "books",
            "humor",
            "reading"
        ]
    },
    {
        "text": "I'm sick of just liking people. I wish to God I could meet somebody I could respect.",
        "author": "J.D. Salinger,",
        "tags": []
    },
    {
        "text": "Words were different when they lived inside of you.",
        "author": "Benjamin Alire Sáenz,",
        "tags": []
    },
    {
        "text": "so I wait for you like a lonely housetill you will see me again and live in me.Till then my windows ache.",
        "author": "Pablo Neruda,",
        "tags": []
    },
    {
        "text": "I myself have never been able to find out precisely what feminism is: I only know that people call me a feminist whenever I express sentiments that differentiate me from a doormat.",
        "author": "Rebecca West",
        "tags": [
            "feminism",
            "qotd"
        ]
    },
    {
        "text": "The most effective way to destroy people is to deny and obliterate their own understanding of their history.",
        "author": "George Orwell",
        "tags": [
            "history",
            "propaganda",
            "rewriting-history"
        ]
    },
    {
        "text": "Ask not what you can do for your country. Ask what’s for lunch.",
        "author": "Orson Welles",
        "tags": []
    },
    {
        "text": "Sometimes you read a book so special that you want to carry it around with you for months after you've finished just to stay near it.",
        "author": "Markus Zusak",
        "tags": [
            "book"
        ]
    },
    {
        "text": "I meant what I said and I said what I meant. An elephant's faithful one-hundred percent!",
        "author": "Dr. Seuss,",
        "tags": [
            "dr-seuss",
            "humor",
            "inspirational",
            "musical"
        ]
    },
    {
        "text": "The important thing to you is not how many years in your life, but how much life in your years!",
        "author": "Edward J. Stieglitz",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Does such a thing as 'the fatal flaw,' that showy dark crack running down the middle of a life, exist outside literature? I used to think it didn't. Now I think it does. And I think that mine is this: a morbid longing for the picturesque at all costs.",
        "author": "Donna Tartt,",
        "tags": []
    },
    {
        "text": "The trouble is not that I am single and likely to stay single, but that I am lonely and likely to stay lonely.",
        "author": "Charlotte Brontë",
        "tags": [
            "companionship",
            "loneliness",
            "marriage",
            "single",
            "spinsterhood"
        ]
    },
    {
        "text": "You are not entitled to your opinion. You are entitled to your informed opinion. No one is entitled to be ignorant.",
        "author": "Harlan Ellison",
        "tags": [
            "ignorance",
            "intelligence",
            "opinions",
            "stupidity"
        ]
    },
    {
        "text": "Sometimes beautiful things come into our lives out of nowhere. We can't always understand them, but we have to trust in them. I know you want to question everything, but sometimes it pays to just have a little faith.",
        "author": "Lauren Kate,",
        "tags": [
            "beautiful",
            "faith"
        ]
    },
    {
        "text": "Remain true to yourself, child. If you know your own heart, you will always have one friend who does not lie.",
        "author": "Marion Zimmer Bradley,",
        "tags": []
    },
    {
        "text": "Once upon a midnight dreary, while I pondered, weak and weary,Over many a quaint and curious volume of forgotten lore,While I nodded, nearly napping, suddenly there came a tapping,As of some one gently rapping, rapping at my chamber door.Tis some visitor,\" I muttered, \"tapping at my chamber door — Only this, and nothing more.\"Ah, distinctly I remember it was in the bleak December,And each separate dying ember wrought its ghost upon the floor.Eagerly I wished the morrow; — vainly I had sought to borrowFrom my books surcease of sorrow — sorrow for the lost Lenore —For the rare and radiant maiden whom the angels name Lenore — Nameless here for evermore.And the silken sad uncertain rustling of each purple curtainThrilled me — filled me with fantastic terrors never felt before;So that now, to still the beating of my heart, I stood repeating,Tis some visitor entreating entrance at my chamber door —Some late visitor entreating entrance at my chamber door; — This it is, and nothing more.\"Presently my soul grew stronger; hesitating then no longer,Sir,\" said I, \"or Madam, truly your forgiveness I implore;But the fact is I was napping, and so gently you came rapping,And so faintly you came tapping, tapping at my chamber door,That I scarce was sure I heard you\"— here I opened wide the door; — Darkness there, and nothing more.Deep into that darkness peering, long I stood there wondering, fearing,Doubting, dreaming dreams no mortals ever dared to dream before;But the silence was unbroken, and the stillness gave no token,And the only word there spoken was the whispered word, \"Lenore?\"This I whispered, and an echo murmured back the word, \"Lenore!\" — Merely this, and nothing more.Back into the chamber turning, all my soul within me burning,Soon again I heard a tapping somewhat louder than before.Surely,\" said I, \"surely that is something at my window lattice:Let me see, then, what thereat is, and this mystery explore —Let my heart be still a moment and this mystery explore; — 'Tis the wind and nothing more.\"Open here I flung the shutter, when, with many a flirt and flutter,In there stepped a stately raven of the saintly days of yore;Not the least obeisance made he; not a minute stopped or stayed he;But, with mien of lord or lady, perched above my chamber door —Perched upon a bust of Pallas just above my chamber door — Perched, and sat, and nothing more.Then this ebony bird beguiling my sad fancy into smiling,By the grave and stern decorum of the countenance it wore.Though thy crest be shorn and shaven, thou,\" I said, \"art sure no craven,Ghastly grim and ancient raven wandering from the Nightly shore —Tell me what thy lordly name is on the Night's Plutonian shore!\" Quoth the Raven, \"Nevermore.\"Much I marveled this ungainly fowl to hear discourse so plainly,Though its answer little meaning— little relevancy bore;For we cannot help agreeing that no living human beingEver yet was blest with seeing bird above his chamber door —Bird or beast upon the sculptured bust above his chamber door, With such name as \"Nevermore.",
        "author": "Edgar Allan Poe,",
        "tags": [
            "hopelessness",
            "pain"
        ]
    },
    {
        "text": "From childhood's hour I have not been. As others were, I have not seen. As others saw, I could not awaken. My heart to joy at the same tone. And all I loved, I loved alone.",
        "author": "Edgar Allan Poe",
        "tags": [
            "heartache",
            "loss",
            "love"
        ]
    },
    {
        "text": "Sometimes the Bible in the hand of one man is worse than a whisky bottle in the hand of (another)... There are just some kind of men who - who're so busy worrying about the next world they've never learned to live in this one, and you can look down the street and see the results.",
        "author": "Harper Lee,",
        "tags": [
            "bible",
            "god",
            "hatred",
            "judgement",
            "religion"
        ]
    },
    {
        "text": "Remember, darkness does not always equate to evil, just as light does not always bring good.",
        "author": "P.C. Cast,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Every time you are tempted to react in the same old way, ask if you want to be a prisoner of the past or a pioneer of the future.",
        "author": "Deepak Chopra",
        "tags": []
    },
    {
        "text": "It's hard to enjoy practical jokes when your whole life feels like one.",
        "author": "Rick Riordan,",
        "tags": [
            "enjoy",
            "humor",
            "joke",
            "prank"
        ]
    },
    {
        "text": "When one is in love, one always begins by deceiving one's self, and one always ends by deceiving others. That is what the world calls a romance.",
        "author": "Oscar Wilde,",
        "tags": [
            "romance"
        ]
    },
    {
        "text": "Give her hell from us, Peeves.",
        "author": "J.K. Rowling,",
        "tags": [
            "fred-weasley",
            "george-weasley",
            "hell",
            "mischief",
            "peeves",
            "umbridge"
        ]
    },
    {
        "text": "There are two means of refuge from the misery of life — music and cats.",
        "author": "Albert Schweitzer",
        "tags": [
            "attributed-no-source",
            "cats",
            "life",
            "music"
        ]
    },
    {
        "text": "If you love what you do and are willing to do what it takes, it's within your reach. And it'll be worth every minute you spend alone at night, thinking and thinking about what it is you want to design or build. It'll be worth it, I promise.",
        "author": "Steve Wozniak",
        "tags": []
    },
    {
        "text": "I like it when somebody gets excited about something. It's nice.",
        "author": "J.D. Salinger,",
        "tags": []
    },
    {
        "text": "Maybe some people just aren't meant to be in our lives forever. Maybe some people are just passing through. It's like some people just come through our lives to bring us something: a gift, a blessing, a lesson we need to learn. And that's why they're here. You'll have that gift forever.",
        "author": "Danielle Steel,",
        "tags": []
    },
    {
        "text": "Writing is like sex. First you do it for love, then you do it for your friends, and then you do it for money.",
        "author": "Virginia Woolf",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "You know how they say you only hurt the ones you love? Well, it works both ways.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "There are so many ways to be brave in this world. Sometimes bravery involves laying down your life for something bigger than yourself, or for someone else. Sometimes it involves giving up everything you have ever known, or everyone you have ever loved, for the sake of something greater.But sometimes it doesn't.Sometimes it is nothing more than gritting your teeth through pain, and the work of every day, the slow walk toward a better life. That is the sort of bravery I must have now.",
        "author": "Veronica Roth,",
        "tags": [
            "bravery",
            "choices",
            "courage",
            "sacrifice"
        ]
    },
    {
        "text": "Children have never been very good at listening to their elders, but they have never failed to imitate them.",
        "author": "James Baldwin",
        "tags": [
            "parenting",
            "role-models"
        ]
    },
    {
        "text": "You'd think people had better things to gossip about,\" said Ginny as she sat on the common room floor, leaning against Harry’s legs and reading the Daily Prophet. \"Three Dementor attacks in a week, and all Romilda Vane does is ask me if it’s true you’ve got a Hippogriff tattooed across your chest.\"Ron and Hermione both roared with laughter. Harry ignored them.What did you tell her?\"I told her it's a Hungarian Horntail,\" said Ginny, turning a page of the newspaper idly. \"Much more macho.\"Thanks,\" said Harry, grinning. \"And what did you tell her Ron’s got?\"A Pygmy Puff, but I didn’t say where.",
        "author": "J.K. Rowling,",
        "tags": [
            "humor-tattoo"
        ]
    },
    {
        "text": "Tomorrow may be hell, but today was a good writing day, and on the good writing days nothing else matters.",
        "author": "Neil Gaiman",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "It is a far, far better thing that I do, than I have ever done; it is a far, far better rest that I go to than I have ever known.",
        "author": "Charles Dickens,",
        "tags": [
            "closing-line",
            "last-words",
            "self-sacrifice"
        ]
    },
    {
        "text": "Time is the coin of your life. You spend it. Do not allow others to spend it for you.",
        "author": "Carl Sandburg",
        "tags": []
    },
    {
        "text": "As a woman I have no country. As a woman I want no country. As a woman, my country is the whole world.",
        "author": "Virginia Woolf",
        "tags": [
            "women"
        ]
    },
    {
        "text": "And all the books you've read have been read by other people. And all the songs you've loved have been heard by other people. And that girl that's pretty to you is pretty to other people. and that if you looked at these facts when you were happy, you would feel great because you are describing 'unity.",
        "author": "Stephen Chbosky,",
        "tags": []
    },
    {
        "text": "No one ever told me that grief felt so like fear.",
        "author": "C.S. Lewis,",
        "tags": [
            "fear",
            "grief",
            "sorrow"
        ]
    },
    {
        "text": "You never change your life until you step out of your comfort zone; change begins at the end of your comfort zone.",
        "author": "Roy T. Bennett",
        "tags": [
            "achievement",
            "change",
            "comfort-zone",
            "courage",
            "dream",
            "dreams",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "leader",
            "leaders",
            "leadership",
            "life",
            "life-quotes",
            "living",
            "motivation",
            "motivational",
            "start-up",
            "step-out-of-your-comfort-zone"
        ]
    },
    {
        "text": "You're a painter. You're a baker. You like to sleep with the windows open. You never take sugar in your tea. And you always double-knot your shoelaces.",
        "author": "Suzanne Collins,",
        "tags": [
            "katniss-everdeen",
            "peeta-mellark"
        ]
    },
    {
        "text": "May it be a light to you in dark places, when all other lights go out.",
        "author": "J.R.R. Tolkien,",
        "tags": [
            "benediction",
            "gift",
            "light"
        ]
    },
    {
        "text": "God, but life is loneliness, despite all the opiates, despite the shrill tinsel gaiety of \"parties\" with no purpose, despite the false grinning faces we all wear. And when at last you find someone to whom you feel you can pour out your soul, you stop in shock at the words you utter - they are so rusty, so ugly, so meaningless and feeble from being kept in the small cramped dark inside you so long. Yes, there is joy, fulfillment and companionship - but the loneliness of the soul in its appalling self-consciousness is horrible and overpowering.",
        "author": "Sylvia Plath,",
        "tags": [
            "grief",
            "loneliness"
        ]
    },
    {
        "text": "Happiness consists in getting enough sleep. Just that, nothing more.",
        "author": "Robert A. Heinlein,",
        "tags": []
    },
    {
        "text": "I am too intelligent, too demanding, and too resourceful for anyone to be able to take charge of me entirely. No one knows me or loves me completely. I have only myself",
        "author": "Simone de Beauvoir",
        "tags": [
            "feminism"
        ]
    },
    {
        "text": "The finest of pleasures are always the unexpected ones.",
        "author": "Erin Morgenstern,",
        "tags": []
    },
    {
        "text": "There is a crack in everything.That's how the light gets in.",
        "author": "Leonard Cohen,",
        "tags": [
            "hope",
            "light"
        ]
    },
    {
        "text": "A diary with no drawings of me in it? Where are the torrid fantasies? The romance covers?",
        "author": "Cassandra Clare,",
        "tags": [
            "clary-fray",
            "diary",
            "humor",
            "jace-wayland",
            "sarcasm"
        ]
    },
    {
        "text": "It is easy to love people in memory; the hard thing is to love them when they are there in front of you.",
        "author": "John Updike,",
        "tags": []
    },
    {
        "text": "The supreme art of war is to subdue the enemy without fighting.",
        "author": "Sun Tzu,",
        "tags": [
            "diplomacy",
            "strategy",
            "victory",
            "war"
        ]
    },
    {
        "text": "When the snows fall and the white winds blow, the lone wolf dies but the pack survives.",
        "author": "George R.R. Martin,",
        "tags": [
            "friendship",
            "loneliness"
        ]
    },
    {
        "text": "People come, people go – they’ll drift in and out of your life, almost like characters in a favorite book. When you finally close the cover, the characters have told their story and you start up again with another book, complete with new characters and adventures. Then you find yourself focusing on the new ones, not the ones from the past.",
        "author": "Nicholas Sparks,",
        "tags": [
            "friends",
            "life"
        ]
    },
    {
        "text": "You can only become truly accomplished at something you love. Don’t make money your goal. Instead pursue the things you love doing and then do them so well that people can’t take their eyes off of you.",
        "author": "Maya Angelou",
        "tags": []
    },
    {
        "text": "If you don't know history, then you don't know anything. You are a leaf that doesn't know it is part of a tree.",
        "author": "Michael Crichton",
        "tags": [
            "history"
        ]
    },
    {
        "text": "1. Be Impeccable With Your WordSpeak with integrity. Say only what you mean. Avoid using the word to speak against yourself or to gossip about others. Use the power of your word in the direction of truth and love. 2. Don't Take Anything PersonallyNothing others do is because of you. What others say and do is a projection of their own reality, their own dream. When you are immune to the opinions and actions of others, you won't be the victim of needless suffering. 3. Don't Make AssumptionsFind the courage to ask questions and to express what you really want. Communicate with others as clearly as you can to avoid misunderstandings, sadness and drama. With just this one agreement, you can completely transform your life. 4. Always Do Your BestYour best is going to change from moment to moment; it will be different when you are healthy as opposed to sick. Under any circumstance, simply do your best, and you will avoid self-judgment, self-abuse and regret.",
        "author": "Don Miguel Ruiz",
        "tags": [
            "spirituality",
            "toltec-wisdom"
        ]
    },
    {
        "text": "Tis the privilege of friendship to talk nonsense, and to have her nonsense respected.",
        "author": "Charles Lamb,",
        "tags": [
            "friendship",
            "nonsense"
        ]
    },
    {
        "text": "He was gone, and I did not have time to tell him what I had just now realized: that I forgave him, and that she forgave us, and that we had to forgive to survive in the labyrinth. There were so many of us who would have to live with things done and things left undone that day. Things that did not go right, things that seemed okay at the time because we could not see the future. If only we could see the endless string of consequences that result from our smallest actions. But we can’t know better until knowing better is useless. And as I walked back to give Takumi’s note to the Colonel, I saw that I would never know. I would never know her well enough to know her thoughts in those last minutes, would never know if she left us on purpose. But the not-knowing would not keep me from caring, and I would always love Alaska Young, my crooked neighbor, with all my crooked heart.",
        "author": "John Green,",
        "tags": [
            "simon_bolivar-s_labyrinth"
        ]
    },
    {
        "text": "I've lived through some terrible things in my life, some of which actually happened.",
        "author": "Mark Twain",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "Boring damned people. All over the earth. Propagating more boring damned people. What a horror show. The earth swarmed with them.",
        "author": "Charles Bukowski",
        "tags": []
    },
    {
        "text": "The price good men pay for indifference to public affairs is to be ruled by evil men.",
        "author": "Plato",
        "tags": [
            "philosophy"
        ]
    },
    {
        "text": "It gives me strength to have somebody to fight for; I can never fight for myself, but, for others, I can kill.",
        "author": "Emilie Autumn,",
        "tags": [
            "fight",
            "friends",
            "friendship",
            "kill",
            "loyalty",
            "strength"
        ]
    },
    {
        "text": "Sometimes, I feel the past and the future pressing so hard on either side that there's no room for the present at all.",
        "author": "Evelyn Waugh,",
        "tags": []
    },
    {
        "text": "Lost love is still love. It takes a different form, that's all. You can't see their smile or bring them food or tousle their hair or move them around a dance floor. But when those senses weaken another heightens. Memory. Memory becomes your partner. You nurture it. You hold it. You dance with it.",
        "author": "Mitch Albom",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Freeing yourself was one thing, claiming ownership of that freed self was another.",
        "author": "Toni Morrison,",
        "tags": [
            "freedom",
            "self"
        ]
    },
    {
        "text": "If we couldn't laugh we would all go insane.",
        "author": "Robert Frost",
        "tags": [
            "laughter"
        ]
    },
    {
        "text": "I was not a pet, not a doll, not an animal.I was a survivor, and I was strong.I would not be weak, or helpless again I would not, could not be broken. Tamed.",
        "author": "Sarah J. Maas,",
        "tags": [
            "a-court-of-mist-and-fury",
            "acomaf",
            "feyre"
        ]
    },
    {
        "text": "I love mankind, he said, \"but I find to my amazement that the more I love mankind as a whole, the less I love man in particular.",
        "author": "Fyodor Dostoyevsky,",
        "tags": [
            "humanity",
            "individuals",
            "love",
            "mankind"
        ]
    },
    {
        "text": "I had absolutely no interest in being somebody else's muse.I am not a muse.I am the somebody.End of fucking story.",
        "author": "Taylor Jenkins Reid,",
        "tags": []
    },
    {
        "text": "When I was your age, television was called books.",
        "author": "William Goldman,",
        "tags": [
            "book",
            "fantasy",
            "humour"
        ]
    },
    {
        "text": "No Mourners.No Funerals.",
        "author": "Leigh Bardugo,",
        "tags": []
    },
    {
        "text": "Adults are just obsolete children and the hell with them.",
        "author": "Dr. Seuss",
        "tags": [
            "adulthood",
            "childhood"
        ]
    },
    {
        "text": "He accused me of being Dumbledore's man through and through.\"\"How very rude of him.\"\"I told him I was.\"Dumbledore opened his mouth to speak and then closed it again. Fawkes the phoenix let out a low, soft, musical cry. To Harry's intense embarrassment, he suddenly realized that Dumbledore's bright blue eyes looked rather watery, and stared hastily at his own knee. When Dumbledore spoke, however, his voice was quite steady. \"I am very touched, Harry.",
        "author": "J.K. Rowling,",
        "tags": [
            "dumbledore",
            "harry-potter",
            "touching"
        ]
    },
    {
        "text": "I like too many things and get all confused and hung-up running from one falling star to another till i drop. This is the night, what it does to you. I had nothing to offer anybody except my own confusion.",
        "author": "Jack Kerouac",
        "tags": [
            "on-the-road",
            "sal-paradise"
        ]
    },
    {
        "text": "Open your eyes and see what you can with them before they close forever.",
        "author": "Anthony Doerr,",
        "tags": []
    },
    {
        "text": "I read once that the ancient Egyptians had fifty words for sand & the Eskimos had a hundred words for snow. I wish I had a thousand words for love, but all that comes to mind is the way you move against me while you sleep & there are no words for that.",
        "author": "Brian Andreas,",
        "tags": [
            "inspiration",
            "love",
            "story-people"
        ]
    },
    {
        "text": "I have for the first time found what I can truly love–I have found you. You are my sympathy–my better self–my good angel–I am bound to you with a strong attachment. I think you good, gifted, lovely: a fervent, a solemn passion is conceived in my heart; it leans to you, draws you to my centre and spring of life, wrap my existence about you–and, kindling in pure, powerful flame, fuses you and me in one.",
        "author": "Charlotte Bronte,",
        "tags": []
    },
    {
        "text": "Don't give in to your fears. If you do, you won't be able to talk to your heart.",
        "author": "Paulo Coelho,",
        "tags": [
            "fear"
        ]
    },
    {
        "text": "I must be a mermaid, Rango. I have no fear of depths and a great fear of shallow living.",
        "author": "Anais Nin",
        "tags": [
            "anais-nin",
            "inspirational",
            "living",
            "mermaids",
            "no-fear",
            "sea"
        ]
    },
    {
        "text": "It's no good pretending that any relationship has a future if your record collections disagree violently or if your favorite films wouldn't even speak to each other if they met at a party.",
        "author": "Nick Hornby",
        "tags": [
            "films",
            "music",
            "relationships"
        ]
    },
    {
        "text": "And so I try to be kind to everything I see, and in everything I see, I see him.",
        "author": "Hanya Yanagihara,",
        "tags": [
            "kindness"
        ]
    },
    {
        "text": "Always go to other people's funerals, otherwise they won't come to yours.",
        "author": "Yogi Berra,",
        "tags": [
            "funny"
        ]
    },
    {
        "text": "Do not let the memories of your past limit the potential of your future. There are no limits to what you can achieve on your journey through life, except in your mind.",
        "author": "Roy T. Bennett,",
        "tags": [
            "future",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "limit",
            "living",
            "motivation",
            "motivational",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "potential"
        ]
    },
    {
        "text": "I cannot go to school today\"Said little Peggy Ann McKay.\"I have the measles and the mumps,A gash, a rash and purple bumps.My mouth is wet, my throat is dry.I'm going blind in my right eye.My tonsils are as big as rocks,I've counted sixteen chicken pox.And there's one more - that's seventeen,And don't you think my face looks green?My leg is cut, my eyes are blue,It might be the instamatic flu.I cough and sneeze and gasp and choke,I'm sure that my left leg is broke.My hip hurts when I move my chin,My belly button's caving in.My back is wrenched, my ankle's sprained,My 'pendix pains each time it rains.My toes are cold, my toes are numb,I have a sliver in my thumb.My neck is stiff, my voice is weak,I hardly whisper when I speak.My tongue is filling up my mouth,I think my hair is falling out.My elbow's bent, my spine ain't straight,My temperature is one-o-eight.My brain is shrunk, I cannot hear,There's a hole inside my ear.I have a hangnail, and my heart is ...What? What's that? What's that you say?You say today is .............. Saturday?G'bye, I'm going out to play!",
        "author": "Shel Silverstein",
        "tags": [
            "children",
            "funny",
            "poem"
        ]
    },
    {
        "text": "I've got the guts to die. What I want to know is, have you got the guts to live?",
        "author": "Tennessee Williams,",
        "tags": []
    },
    {
        "text": "Pretty women wonder where my secret lies.I'm not cute or built to suit a fashion model's sizeBut when I start to tell them,They think I'm telling lies.I say,It's in the reach of my armsThe span of my hips,The stride of my step,The curl of my lips.I'm a womanPhenomenally.Phenomenal woman,That's me.",
        "author": "Maya Angelou,",
        "tags": [
            "phenomenal-woman"
        ]
    },
    {
        "text": "I must have loved you a lot.",
        "author": "Suzanne Collins,",
        "tags": [
            "mockingjay",
            "peeta-mellark"
        ]
    },
    {
        "text": "It's the job that's never started as takes longest to finish.",
        "author": "J.R.R. Tolkien,",
        "tags": [
            "fellowship",
            "gamgee",
            "hobbit",
            "samwise",
            "tolkien"
        ]
    },
    {
        "text": "When I was about eight, I decided that the most wonderful thing, next to a human being, was a book.",
        "author": "Margaret Walker",
        "tags": [
            "books",
            "inspirational"
        ]
    },
    {
        "text": "One wordFrees us of all the weight and pain of life:That word is love.",
        "author": "Sophocles",
        "tags": [
            "love",
            "pain"
        ]
    },
    {
        "text": "The truth will set you free. But not until it is finished with you.",
        "author": "David Foster Wallace,",
        "tags": [
            "freedom",
            "truth"
        ]
    },
    {
        "text": "I used to dream about escaping my ordinary life, but my life was never ordinary. I had simply failed to notice how extraordinary it was.",
        "author": "Ransom Riggs,",
        "tags": []
    },
    {
        "text": "It's not always necessary to be strong, but to feel strong.",
        "author": "Jon Krakauer,",
        "tags": []
    },
    {
        "text": "The trouble is if you don’t spend your life yourself, other people spend it for you.",
        "author": "Peter Shaffer,",
        "tags": [
            "life",
            "life-lessons"
        ]
    },
    {
        "text": "I think that we're all mentally ill. Those of us outside the asylums only hide it a little better - and maybe not all that much better after all.",
        "author": "Stephen King",
        "tags": []
    },
    {
        "text": "Friendship- my definition- is built on two things. Respect and trust. Both elements have to be there. And it has to be mutual. You can have respect for someone, but if you don't have trust, the friendship will crumble.",
        "author": "Stieg Larsson,",
        "tags": [
            "friendship",
            "incredibly-true",
            "mutuality",
            "reciprocity",
            "respect",
            "trust"
        ]
    },
    {
        "text": "Trust your heart if the seas catch fire, live by love though the stars walk backward.",
        "author": "E.E. Cummings",
        "tags": [
            "decisions",
            "love",
            "stars",
            "taking-chances"
        ]
    },
    {
        "text": "Very few of us are what we seem.",
        "author": "Agatha Christie,",
        "tags": []
    },
    {
        "text": "The love of learning, the sequestered nooks,And all the sweet serenity of books",
        "author": "Henry Wadsworth Longfellow",
        "tags": [
            "books",
            "learning",
            "love",
            "serenity"
        ]
    },
    {
        "text": "What do you want?\"\"Just coffee. Black - like my soul.",
        "author": "Cassandra Clare,",
        "tags": [
            "coffee",
            "soul"
        ]
    },
    {
        "text": "The brick walls are there for a reason. The brick walls are not there to keep us out. The brick walls are there to give us a chance to show how badly we want something. Because the brick walls are there to stop the people who don’t want it badly enough. They’re there to stop the other people.",
        "author": "Randy Pausch,",
        "tags": [
            "barriers",
            "challenges",
            "failure",
            "failures",
            "inspirational",
            "perseverance"
        ]
    },
    {
        "text": "Reading is the sole means by which we slip, involuntarily, often helplessly, into another's skin, another's voice, another's soul.",
        "author": "Joyce Carol Oates",
        "tags": []
    },
    {
        "text": "I was always hungry for love. Just once, I wanted to know what it was like to get my fill of it -- to be fed so much love I couldn't take any more. Just once.",
        "author": "Haruki Murakami,",
        "tags": []
    },
    {
        "text": "You can make anything by writing.",
        "author": "C.S. Lewis",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "The scar had not pained Harry for nineteen years. All was well.",
        "author": "J.K. Rowling,",
        "tags": [
            "harry-potter"
        ]
    },
    {
        "text": "We are the music makers, and we are the dreamers of dreams.",
        "author": "Arthur William Edgar O'Shaughnessy,",
        "tags": [
            "dreams",
            "music"
        ]
    },
    {
        "text": "A library is infinity under a roof.",
        "author": "Gail Carson Levine",
        "tags": []
    },
    {
        "text": "The greatness of a man is not in how much wealth he acquires, but in his integrity and his ability to affect those around him positively.",
        "author": "Bob Marley",
        "tags": [
            "inspirational-life"
        ]
    },
    {
        "text": "There's things that happen in a person's life that are so scorched in the memory and burned into the heart that there's no forgetting them.",
        "author": "John Boyne",
        "tags": []
    },
    {
        "text": "You want to know about anybody? See what books they read, and how they've been read...",
        "author": "Keri Hulme,",
        "tags": []
    },
    {
        "text": "I travel not to go anywhere, but to go. I travel for travel's sake. The great affair is to move.",
        "author": "Robert Louis Stevenson,",
        "tags": [
            "travel"
        ]
    },
    {
        "text": "Heaven knows we need never be ashamed of our tears, for they are rain upon the blinding dust of earth, overlying our hard hearts. I was better after I had cried, than before--more sorry, more aware of my own ingratitude, more gentle.",
        "author": "Charles Dickens,",
        "tags": [
            "crying",
            "heartfelt",
            "shame",
            "sorrow",
            "tears"
        ]
    },
    {
        "text": "You must write every single day of your life... You must lurk in libraries and climb the stacks like ladders to sniff books like perfumes and wear books like hats upon your crazy heads... may you be in love every day for the next 20,000 days. And out of that love, remake a world.",
        "author": "Ray Bradbury",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "I am not proud, but I am happy; and happiness blinds, I think, more than pride.",
        "author": "Alexandre Dumas,",
        "tags": [
            "happiness",
            "pride"
        ]
    },
    {
        "text": "You’re in a car with a beautiful boy, and he won’t tell you that he loves you, but he loves you. And you feel like you’ve done something terrible, like robbed a liquor store, or swallowed pills, or shoveled yourself a grave in the dirt, and you’re tired. You’re in a car with a beautiful boy, and you’re trying not to tell him that you love him, and you’re trying to choke down the feeling, and you’re trembling, but he reaches over and he touches you, like a prayer for which no words exist, and you feel your heart taking root in your body, like you’ve discovered something you didn’t even have a name for.",
        "author": "richard siken",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.",
        "author": "C.G. Jung",
        "tags": [
            "introspection",
            "psychotherapist",
            "secrets",
            "self-awareness",
            "visions"
        ]
    },
    {
        "text": "A woman's heart should be so hidden in God that a man has to seek Him just to find her.",
        "author": "Maya Angelou",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Somewhere over the rainbow, skies are blue, and the dreams that you dare to dream really do come true.",
        "author": "E.Y. Harburg",
        "tags": []
    },
    {
        "text": "Blessed are the hearts that can bend; they shall never be broken.",
        "author": "Albert Camus",
        "tags": [
            "beatitudes",
            "blessed",
            "unbreakable"
        ]
    },
    {
        "text": "Black holes are where God divided by zero.",
        "author": "Albert Einstein",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "If you have enough book space, I don't want to talk to you.",
        "author": "Terry Pratchett",
        "tags": []
    },
    {
        "text": "Stop comparing yourself to other people, just choose to be happy and live your own life.",
        "author": "Roy T. Bennett,",
        "tags": [
            "happiness",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "living",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking"
        ]
    },
    {
        "text": "please believe that things are good with me, and even when they're not, they will be soon enough. And i will always believe the same about you.",
        "author": "Stephen Chbosky,",
        "tags": [
            "happiness",
            "inspirational",
            "life"
        ]
    },
    {
        "text": "Let the improvement of yourself keep you so busy that you have no time to criticize others.",
        "author": "Roy T. Bennett,",
        "tags": [
            "improvement",
            "inspiration",
            "inspirational",
            "inspirational-attitude",
            "inspirational-life",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "leadership",
            "learning",
            "life",
            "life-and-living",
            "life-lessons",
            "life-quotes",
            "living",
            "motivation",
            "motivational",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "success"
        ]
    },
    {
        "text": "Is it possible for home to be a person and not a place?",
        "author": "Stephanie Perkins,",
        "tags": [
            "home",
            "lover",
            "person"
        ]
    },
    {
        "text": "Some people have a way with words, and other people...oh, uh, not have way.",
        "author": "Steve Martin",
        "tags": [
            "humor",
            "words"
        ]
    },
    {
        "text": "My alone feels so good, I'll only have you if you're sweeter than my solitude.",
        "author": "Warsan Shire",
        "tags": []
    },
    {
        "text": "Make your mistakes, take your chances, look silly, but keep on going. Don’t freeze up.",
        "author": "Thomas Wolfe,",
        "tags": []
    },
    {
        "text": "A word to the wise ain't necessary, it's the stupid ones who need advice.",
        "author": "Bill Cosby",
        "tags": [
            "funny"
        ]
    },
    {
        "text": "The spell. Victor said you had to want me... to care about me... for it to work.\" When he didn't say anything, I tried to grip his shirt, but my fingers were too weak. \"Did you? Did you want me?\"His words came out thickly. \"Yes, Roza. I did want you. I still do. I wish... we could be together.\"\"Then why did you lie to me?\"We reached the clinic, and he managed to open the door while still holding me. As soon as he stepped inside, he began yelling for help. \"Why did you lie?\" I murmured again.Still holding me in his arms, he looked down at me. I could hear voices and footsteps getting closer.\"Because we can't be together.\"\"Because of the age thing, right?\" I asked. \"Because you're my mentor?\"His fingertip gently wiped away a tear that had escaped down my cheek. \"That's part of it,\" he said. \"But also... well, you and I will both be Lissa's gaurdians someday. I need to protect her at all cost. If a pack of Strogoi come, I need to throw my body between them and her.\"I know that. Of course that's what you have to do.\" The black sparkles were dancing in front of my eyes again. I was fading out.\"No. If I let myself love you, I won't throw myself in front of her. I'll throw myself in front of you.",
        "author": "Richelle Mead,",
        "tags": [
            "dimitri",
            "rose",
            "vampire-academy"
        ]
    },
    {
        "text": "Truth only means something when it's hard to admit.",
        "author": "Nicholas Sparks,",
        "tags": []
    },
    {
        "text": "There must be those among whom we can sit down and weep and still be counted as warriors.",
        "author": "Adrienne Rich",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
        "author": "C.G. Jung",
        "tags": [
            "self-awareness",
            "self-discovery"
        ]
    },
    {
        "text": "Selfishness is not living as one wishes to live, it is asking others to live as one wishes to live.",
        "author": "Oscar Wilde",
        "tags": [
            "selfishness"
        ]
    },
    {
        "text": "Catherine Earnshaw, may you not rest as long as I am living. You said I killed you--haunt me then. The murdered do haunt their murderers. I believe--I know that ghosts have wandered the earth. Be with me always--take any form--drive me mad. Only do not leave me in this abyss, where I cannot find you! Oh, God! It is unutterable! I cannot live without my life! I cannot live without my soul!",
        "author": "Emily Brontë,",
        "tags": [
            "catherine",
            "haunting",
            "heathcliff",
            "love",
            "malediction",
            "restlessness"
        ]
    },
    {
        "text": "You are not special. You're not a beautiful and unique snowflake. You're the same decaying organic matter as everything else. We're all part of the same compost heap. We're all singing, all dancing crap of the world.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "unique"
        ]
    },
    {
        "text": "If you have a sister and she dies, do you stop saying you have one? Or are you always a sister, even when the other half of the equation is gone?",
        "author": "Jodi Picoult,",
        "tags": [
            "death",
            "loss",
            "sisters"
        ]
    },
    {
        "text": "I like flaws. I think they make things interesting.",
        "author": "Sarah Dessen,",
        "tags": [
            "life",
            "love"
        ]
    },
    {
        "text": "When everything goes to hell, the people who stand by you without flinching -- they are your family.",
        "author": "Jim Butcher",
        "tags": [
            "family"
        ]
    },
    {
        "text": "Even in half demon hunter clothes, Clary thought, he looked like the kind of boy who'd come over your house to pick you up for a date and be polite to your parents and nice to your pets.Jace on the other hand, looked like the kind of boy who'd come over your house and burn it down just for kicks.",
        "author": "Cassandra Clare,",
        "tags": [
            "clary-fray",
            "jace-wayland",
            "shadowhunters",
            "simon"
        ]
    },
    {
        "text": "To love another person is to see the face of God.",
        "author": "Victor Hugo,",
        "tags": []
    },
    {
        "text": "No matter how careful you are, there's going to be the sense you missed something, the collapsed feeling under your skin that you didn't experience it all. There's that fallen heart feeling that you rushed right through the moments where you should've been paying attention.Well, get used to that feeling. That's how your whole life will feel some day.This is all practice.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "life"
        ]
    },
    {
        "text": "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.\"Whenever you feel like criticizing any one,\" he told me, \"just remember that all the people in this world haven't had the advantages that you've had.",
        "author": "F. Scott Fitzgerald,",
        "tags": [
            "f-scott-fitzgerald",
            "narrator",
            "the-great-gatsby"
        ]
    },
    {
        "text": "So many people walk around with a meaningless life. They seem half-asleep, even when they're busy doing things they think are important. This is because they're chasing the wrong things. The way you get meaning into your life is to devote yourself to loving others, devote yourself to your community around you, and devote yourself to creating something that gives you purpose and meaning.",
        "author": "Mitch Albom,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "If I had my life to live over again, I would have made a rule to read some poetry and listen to some music at least once every week.",
        "author": "Charles Darwin,",
        "tags": [
            "arts",
            "life",
            "music",
            "poetry"
        ]
    },
    {
        "text": "It is not the size of the dog in the fight that counts, but the fight in the dog that wins.",
        "author": "Arthur G. Lewis,",
        "tags": [
            "bravery",
            "dog",
            "famous",
            "inspirational",
            "misattributed-dwight-eisenhower",
            "misattributed-mark-twain",
            "valour"
        ]
    },
    {
        "text": "I hope that in this year to come, you make mistakes.Because if you are making mistakes, then you are making new things, trying new things, learning, living, pushing yourself, changing yourself, changing your world. You're doing things you've never done before, and more importantly, you're Doing Something.So that's my wish for you, and all of us, and my wish for myself. Make New Mistakes. Make glorious, amazing mistakes. Make mistakes nobody's ever made before. Don't freeze, don't stop, don't worry that it isn't good enough, or it isn't perfect, whatever it is: art, or love, or work or family or life.Whatever it is you're scared of doing, Do it.Make your mistakes, next year and forever.",
        "author": "Neil Gaiman",
        "tags": []
    },
    {
        "text": "Thinking something does not make it true. Wanting something does not make it real.",
        "author": "Michelle Hodkin,",
        "tags": [
            "inspirational-quotes",
            "mara-dyer",
            "reality",
            "truth"
        ]
    },
    {
        "text": "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life, but define yourself.",
        "author": "Harvey Fierstein",
        "tags": [
            "be-yourself",
            "identity",
            "individuality",
            "inspirational",
            "life",
            "self-determination",
            "self-esteem",
            "self-expression"
        ]
    },
    {
        "text": "This was another of our fears: that Life wouldn't turn out to be like Literature.",
        "author": "Julian Barnes,",
        "tags": []
    },
    {
        "text": "The emotion that can break your heart is sometimes the very one that heals it...",
        "author": "Nicholas Sparks,",
        "tags": [
            "at-first-sight",
            "emotions",
            "healing",
            "heartbreak",
            "love",
            "nicholas",
            "nicholas-sparks",
            "sparks"
        ]
    },
    {
        "text": "Behind every beautiful thing, there's some kind of pain.",
        "author": "Bob Dylan",
        "tags": [
            "beautiful",
            "behind",
            "kind",
            "of",
            "pain",
            "thing"
        ]
    },
    {
        "text": "No sight so sad as that of a naughty child,\" he began, \"especially a naughty little girl. Do you know where the wicked go after death?\"\"They go to hell,\" was my ready and orthodox answer.\"And what is hell? Can you tell me that?\"\"A pit full of fire.\"\"And should you like to fall into that pit, and to be burning there for ever?\"\"No, sir.\"\"What must you do to avoid it?\"I deliberated a moment: my answer, when it did come was objectionable: \"I must keep in good health and not die.",
        "author": "Charlotte Brontë,",
        "tags": [
            "children",
            "hell",
            "humor",
            "religion"
        ]
    },
    {
        "text": "The best way to find yourself is to lose yourself in the service of others.",
        "author": "Mahatma Gandhi",
        "tags": [
            "attributed-no-source",
            "discovery",
            "identity",
            "self-discovery",
            "service"
        ]
    },
    {
        "text": "If I’m honest I have to tell you I still read fairy-tales and I like them best of all.",
        "author": "Audrey Hepburn",
        "tags": [
            "fairy-tales"
        ]
    },
    {
        "text": "Those who have a 'why' to live, can bear with almost any 'how'.",
        "author": "Viktor E. Frankl,",
        "tags": [
            "nietzsche"
        ]
    },
    {
        "text": "[D]on't ever apologise to an author for buying something in paperback, or taking it out from a library (that's what they're there for. Use your library). Don't apologise to this author for buying books second hand, or getting them from bookcrossing or borrowing a friend's copy. What's important to me is that people read the books and enjoy them, and that, at some point in there, the book was bought by someone. And that people who like things, tell other people. The most important thing is that people read...",
        "author": "Neil Gaiman",
        "tags": [
            "books",
            "libraries",
            "library",
            "reading"
        ]
    },
    {
        "text": "When one tugs at a single thing in nature, he finds it attached to the rest of the world.",
        "author": "John Muir",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Forgive me, for all the things I did but mostly for the ones that I did not.",
        "author": "Donna Tartt,",
        "tags": [
            "francis-abernathy",
            "the-secret-history"
        ]
    },
    {
        "text": "The only thing necessary for the triumph of evil is for good men to do nothing.",
        "author": "Edmund Burke",
        "tags": [
            "evil"
        ]
    },
    {
        "text": "Grown-ups don't look like grown-ups on the inside either. Outside, they're big and thoughtless and they always know what they're doing. Inside, they look just like they always have. Like they did when they were your age. Truth is, there aren't any grown-ups. Not one, in the whole wide world.",
        "author": "Neil Gaiman,",
        "tags": []
    },
    {
        "text": "What of Art?-It is a malady.--Love?-An Illusion.--Religion?-The fashionable substitute for Belief.--You are a sceptic.-Never! Scepticism is the beginning of Faith.--What are you?-To define is to limit.",
        "author": "Oscar Wilde ,",
        "tags": []
    },
    {
        "text": "That's the thing about depression: A human being can survive almost anything, as long as she sees the end in sight. But depression is so insidious, and it compounds daily, that it's impossible to ever see the end.",
        "author": "Elizabeth Wurtzel,",
        "tags": []
    },
    {
        "text": "Burdens are for shoulders strong enough to carry them.",
        "author": "Margaret Mitchell,",
        "tags": []
    },
    {
        "text": "I could die for you. But I couldn't, and wouldn't, live for you.",
        "author": "Ayn Rand,",
        "tags": [
            "death",
            "die",
            "fountainhead",
            "life",
            "live",
            "mortality"
        ]
    },
    {
        "text": "Let the first act of every morning be to make the following resolve for the day:- I shall not fear anyone on Earth. - I shall fear only God. - I shall not bear ill will toward anyone. - I shall not submit to injustice from anyone. - I shall conquer untruth by truth. And in resisting untruth, I shall put up with all suffering.",
        "author": "Mahatma Gandhi",
        "tags": [
            "bravery",
            "god",
            "goodness",
            "humanity",
            "justice",
            "kindness",
            "peace",
            "suffering"
        ]
    },
    {
        "text": "الكراهية تكلف أكثر من الحب.. لأنها إحساس غير طبيعي.. إحساس عكسي مثل حركة الأجسام ضد جاذبية الأرض.. تحتاج إلى قوة إضافية وتستهلك وقوداً أكثر",
        "author": "مصطفى محمود,",
        "tags": []
    },
    {
        "text": "Forbidden to remember, terrified to forget; it was a hard line to walk.",
        "author": "Stephenie Meyer,",
        "tags": [
            "memory"
        ]
    },
    {
        "text": "Life is not a matter of holding good cards, but of playing a poor hand well.",
        "author": "Robert Louis Stevenson",
        "tags": [
            "life"
        ]
    },
    {
        "text": "The mark of the immature man is that he wants to die nobly for a cause, while the mark of the mature man is that he wants to live humbly for one.",
        "author": "J.D. Salinger,",
        "tags": [
            "attributed",
            "growing-up",
            "wilhelm-stekel"
        ]
    },
    {
        "text": "Is man merely a mistake of God's? Or God merely a mistake of man?",
        "author": "Friedrich Nietzsche",
        "tags": [
            "atheism",
            "organized-religion",
            "paradox",
            "religion"
        ]
    },
    {
        "text": "Atticus, he was real nice.\"\"Most people are, Scout, when you finally see them.",
        "author": "Harper Lee,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "When you laugh, laugh like hell. And when you get angry, get good and angry. Try to be alive. You will be dead soon enough.",
        "author": "William Saroyan",
        "tags": []
    },
    {
        "text": "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
        "author": "Martin Luther King Jr.",
        "tags": [
            "challanges"
        ]
    },
    {
        "text": "Remember if people talk behind your back, it only means you are two steps ahead.",
        "author": "Fannie Flagg,",
        "tags": []
    },
    {
        "text": "Everything must be made as simple as possible. But not simpler.",
        "author": "Albert Einstein",
        "tags": [
            "einstein",
            "paraphrased",
            "science",
            "systems"
        ]
    },
    {
        "text": "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.",
        "author": "Steve Jobs",
        "tags": []
    },
    {
        "text": "To-morrow, and to-morrow, and to-morrow,Creeps in this petty pace from day to day,To the last syllable of recorded time;And all our yesterdays have lighted foolsThe way to dusty death. Out, out, brief candle!Life's but a walking shadow, a poor player,That struts and frets his hour upon the stage,And then is heard no more. It is a taleTold by an idiot, full of sound and fury,Signifying nothing.",
        "author": "William Shakespeare,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Loneliness is the human condition. Cultivate it. The way it tunnels into you allows your soul room to grow. Never expect to outgrow loneliness. Never hope to find people who will understand you, someone to fill that space. An intelligent, sensitive person is the exception, the very great exception. If you expect to find people who will understand you, you will grow murderous with disappointment. The best you'll ever do is to understand yourself, know what it is that you want, and not let the cattle stand in your way.",
        "author": "Janet Fitch,",
        "tags": [
            "loneliness"
        ]
    },
    {
        "text": "Ignite, my love. Ignite.",
        "author": "Tahereh Mafi,",
        "tags": [
            "aaron-warner",
            "juliette"
        ]
    },
    {
        "text": "Fairy tales do not tell children the dragons exist. Children already know that dragons exist. Fairy tales tell children the dragons can be killed.",
        "author": "G.K. Chesterton",
        "tags": [
            "fairy-tales",
            "hope",
            "paraphrased",
            "possiblity"
        ]
    },
    {
        "text": "Better to die fighting for freedom then be a prisoner all the days of your life.",
        "author": "Bob Marley",
        "tags": [
            "freedom",
            "liberty",
            "life",
            "revolution"
        ]
    },
    {
        "text": "It takes something more than intelligence to act intelligently.",
        "author": "Fyodor Dostoyevsky,",
        "tags": [
            "intelligence",
            "intelligent-action"
        ]
    },
    {
        "text": "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
        "author": "Nelson Mandela",
        "tags": [
            "bravery",
            "courage",
            "fear"
        ]
    },
    {
        "text": "I am lonely, yet not everybody will do. I don't know why, some people fill the gaps and others emphasize my loneliness. In reality those who satisfy me are those who simply allow me to live with my ''idea of them.",
        "author": "Anais Nin",
        "tags": [
            "diary-entry"
        ]
    },
    {
        "text": "Your silence will not protect you.",
        "author": "Audre Lorde,",
        "tags": [
            "protection",
            "silence",
            "speech"
        ]
    },
    {
        "text": "They always say time changes things, but you actually have to change them yourself.",
        "author": "Andy Warhol,",
        "tags": [
            "change",
            "initiative",
            "time"
        ]
    },
    {
        "text": "Educating the mind without educating the heart is no education at all.",
        "author": "Aristotle",
        "tags": [
            "education",
            "ethics"
        ]
    },
    {
        "text": "I will love you always. When this red hair is white, I will still love you. When the smooth softness of youth is replaced by the delicate softness of age, I will still want to touch your skin. When your face is full of the lines of every smile you have ever smiled, of every surprise I have seen flash through your eyes, when every tear you have ever cried has left its mark upon your face,I will treasure you all the more, because I was there to see it all. I will share your life with you, Meredith, and I will love you until the last breath leaves your body or mine.",
        "author": "Laurell K. Hamilton,",
        "tags": []
    },
    {
        "text": "Ginny!\" said Mr. Weasley, flabbergasted. \"Haven't I taught you anything? What have I always told you? Never trust anything that can think for itself if you can't see where it keeps its brain?",
        "author": "J.K. Rowling,",
        "tags": [
            "humor",
            "trust"
        ]
    },
    {
        "text": "You know, Hobbes, some days even my lucky rocket ship underpants don't help.",
        "author": "Bill Watterson",
        "tags": [
            "bad-day",
            "calvin-and-hobbes",
            "luck"
        ]
    },
    {
        "text": "I hate to advocate drugs, alcohol, violence, or insanity to anyone, but they've always worked for me.",
        "author": "Hunter S. Thompson",
        "tags": []
    },
    {
        "text": "Books have to be heavy because the whole world's inside them.",
        "author": "Cornelia Funke,",
        "tags": [
            "inkheart"
        ]
    },
    {
        "text": "No book can be appreciated until it has been slept with and dreamed over.",
        "author": "Eugene Field",
        "tags": []
    },
    {
        "text": "It is one of life's bitterest truths that bedtime so often arrives just when things are really getting interesting.",
        "author": "Lemony Snicket,",
        "tags": []
    },
    {
        "text": "Education: the path from cocky ignorance to miserable uncertainty.",
        "author": "Mark Twain",
        "tags": [
            "education"
        ]
    },
    {
        "text": "I am only responsible for my own heart, you offered yours up for the smashing my darling. Only a fool would give out such a vital organ",
        "author": "Anais Nin",
        "tags": []
    },
    {
        "text": "You are not rich until you have a rich heart.",
        "author": "Roy T. Bennett,",
        "tags": [
            "heart",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-quotes",
            "living",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "rich",
            "rich-heart",
            "richness"
        ]
    },
    {
        "text": "Life is too short to waste any amount of time on wondering what other people think about you. In the first place, if they had better things going on in their lives, they wouldn't have the time to sit around and talk about you. What's important to me is not others' opinions of me, but what's important to me is my opinion of myself.",
        "author": "C. JoyBell C.",
        "tags": [
            "defiant",
            "freedom",
            "inspirational",
            "inspirational-attitude",
            "inspirational-quotes",
            "inspiring",
            "life-and-living",
            "self-belief",
            "self-love",
            "self-worth",
            "society"
        ]
    },
    {
        "text": "When God Created Mothers\" When the Good Lord was creating mothers, He was into His sixth day of \"overtime\" when the angel appeared and said. \"You're doing a lot of fiddling around on this one.\" And God said, \"Have you read the specs on this order?\" She has to be completely washable, but not plastic. Have 180 moveable parts...all replaceable. Run on black coffee and leftovers. Have a lap that disappears when she stands up. A kiss that can cure anything from a broken leg to a disappointed love affair. And six pairs of hands.\" The angel shook her head slowly and said. \"Six pairs of hands.... no way.\" It's not the hands that are causing me problems,\" God remarked, \"it's the three pairs of eyes that mothers have to have.\" That's on the standard model?\" asked the angel. God nodded. One pair that sees through closed doors when she asks, 'What are you kids doing in there?' when she already knows. Another here in the back of her head that sees what she shouldn't but what she has to know, and of course the ones here in front that can look at a child when he goofs up and say. 'I understand and I love you' without so much as uttering a word.\" God,\" said the angel touching his sleeve gently, \"Get some rest tomorrow....\" I can't,\" said God, \"I'm so close to creating something so close to myself. Already I have one who heals herself when she is sick...can feed a family of six on one pound of hamburger...and can get a nine year old to stand under a shower.\" The angel circled the model of a mother very slowly. \"It's too soft,\" she sighed. But tough!\" said God excitedly. \"You can imagine what this mother can do or endure.\" Can it think?\" Not only can it think, but it can reason and compromise,\" said the Creator. Finally, the angel bent over and ran her finger across the cheek. There's a leak,\" she pronounced. \"I told You that You were trying to put too much into this model.\" It's not a leak,\" said the Lord, \"It's a tear.\" What's it for?\" It's for joy, sadness, disappointment, pain, loneliness, and pride.\" You are a genius, \" said the angel. Somberly, God said, \"I didn't put it there.",
        "author": "Erma Bombeck,",
        "tags": [
            "children",
            "family",
            "humor",
            "love",
            "mothers",
            "mothers-day",
            "sadness"
        ]
    },
    {
        "text": "The more one judges, the less one loves.",
        "author": "Honoré de Balzac,",
        "tags": [
            "human-nature",
            "love"
        ]
    },
    {
        "text": "The major problem—one of the major problems, for there are several—one of the many major problems with governing people is that of whom you get to do it; or rather of who manages to get people to let them do it to them. To summarize: it is a well-known fact that those people who must want to rule people are, ipso facto, those least suited to do it. To summarize the summary: anyone who is capable of getting themselves made President should on no account be allowed to do the job.",
        "author": "Douglas Adams,",
        "tags": [
            "elections",
            "hg2g",
            "politics",
            "rulers"
        ]
    },
    {
        "text": "Maybe there were people who lived those lives. Maybe this girl was one of them. But what about the rest of us? What about the nobodies and the nothings, the invisible girls? We learn to hold our heads as if we wear crowns. We learn to wring magic from the ordinary. That was how you survived when you weren’t chosen, when there was no royal blood in your veins. When the world owed you nothing, you demanded something of it anyway.",
        "author": "Leigh Bardugo,",
        "tags": [
            "crooked-kingdom",
            "grisha",
            "inej-ghafa",
            "six-of-crows"
        ]
    },
    {
        "text": "Waste no more time arguing about what a good man should be. Be one.",
        "author": "Marcus Aurelius,",
        "tags": [
            "integrity",
            "morality"
        ]
    },
    {
        "text": "Nothing great in the world was accomplished without passion.",
        "author": "Georg Wilhelm Friedrich Hegel",
        "tags": []
    },
    {
        "text": "Try to be a rainbow in someone's cloud.",
        "author": "Maya Angelou,",
        "tags": [
            "2008",
            "advice"
        ]
    },
    {
        "text": "One person's craziness is another person's reality.",
        "author": "Tim Burton",
        "tags": []
    },
    {
        "text": "When we don't know who to hate, we hate ourselves.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "hate",
            "self-loathing"
        ]
    },
    {
        "text": "Sometimes even to live is an act of courage.",
        "author": "Lucius Annaeus Seneca",
        "tags": [
            "perseverance",
            "suicide",
            "survival"
        ]
    },
    {
        "text": "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
        "author": "Fyodor Dostoyevsky,",
        "tags": [
            "goals-in-life",
            "purpose-of-life"
        ]
    },
    {
        "text": "My course is set for an uncharted sea.",
        "author": "Dante Alighieri",
        "tags": []
    },
    {
        "text": "Being a writer is a very peculiar sort of a job: it's always you versus a blank sheet of paper (or a blank screen) and quite often the blank piece of paper wins.",
        "author": "Neil Gaiman",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "A man who dares to waste one hour of time has not discovered the value of life.",
        "author": "Charles Darwin,",
        "tags": [
            "dare",
            "inspirational",
            "life",
            "science",
            "time",
            "value",
            "waste"
        ]
    },
    {
        "text": "We are all someone's monster.",
        "author": "Leigh Bardugo,",
        "tags": [
            "matthias"
        ]
    },
    {
        "text": "If the moon smiled, she would resemble you.You leave the same impression Of something beautiful, but annihilating.",
        "author": "Sylvia Plath,",
        "tags": []
    },
    {
        "text": "The Very first moment I beheld him, my heart was irrevocably gone.",
        "author": "Jane Austen,",
        "tags": [
            "romance"
        ]
    },
    {
        "text": "All I have seen teaches me to trust the Creator for all I have not seen.",
        "author": "Ralph Waldo Emerson",
        "tags": [
            "belief",
            "experience",
            "faith",
            "judging-from-experience",
            "religion",
            "unseen"
        ]
    },
    {
        "text": "The purpose of a storyteller is not to tell you how to think, but to give you questions to think upon.",
        "author": "Brandon Sanderson,",
        "tags": [
            "storytelling"
        ]
    },
    {
        "text": "If you're too open-minded; your brains will fall out.",
        "author": "Lawrence Ferlinghetti",
        "tags": [
            "beatnik",
            "cynical",
            "funny",
            "humour"
        ]
    },
    {
        "text": "We sometimes encounter people, even perfect strangers, who begin to interest us at first sight, somehow suddenly, all at once, before a word has been spoken.",
        "author": "Fyodor Dostoyevsky,",
        "tags": []
    },
    {
        "text": "When I saw you I fell in love, and you smiled because you knew.",
        "author": "Arrigo Boito",
        "tags": [
            "love"
        ]
    },
    {
        "text": "But if thought corrupts language, language can also corrupt thought.",
        "author": "George Orwell,",
        "tags": [
            "1946",
            "language",
            "power-of-words",
            "propaganda",
            "thought"
        ]
    },
    {
        "text": "In your light I learn how to love. In your beauty, how to make poems. You dance inside my chest where no-one sees you, but sometimes I do, and that sight becomes this art.",
        "author": "Rumi",
        "tags": [
            "love"
        ]
    },
    {
        "text": "I fell in love with her when we were together, then fell deeper in love with her in the years we were apart.",
        "author": "Nicholas Sparks,",
        "tags": [
            "love",
            "separation"
        ]
    },
    {
        "text": "Better a cruel truth than a comfortable delusion.",
        "author": "Edward Abbey",
        "tags": [
            "truth"
        ]
    },
    {
        "text": "The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently.",
        "author": "Friedrich Nietzsche",
        "tags": [
            "corruption",
            "individuality",
            "peer-pressure",
            "youth"
        ]
    },
    {
        "text": "When the first baby laughed for the first time, its laugh broke into a thousand pieces, and they all went skipping about, and that was the beginning of fairies.",
        "author": "J.M. Barrie,",
        "tags": [
            "happiness"
        ]
    },
    {
        "text": "The past is always tense, the future perfect.",
        "author": "Zadie Smith",
        "tags": [
            "future",
            "grammar",
            "language",
            "past"
        ]
    },
    {
        "text": "Things need not have happened to be true. Tales and dreams are the shadow-truths that will endure when mere facts are dust and ashes, and forgot.",
        "author": "Neil Gaiman,",
        "tags": []
    },
    {
        "text": "To choose doubt as a philosophy of life is akin to choosing immobility as a means of transportation.",
        "author": "Yann Martel,",
        "tags": []
    },
    {
        "text": "To be fully seen by somebody, then, and be loved anyhow - this is a human offering that can border on miraculous.",
        "author": "Elizabeth Gilbert,",
        "tags": [
            "acceptance",
            "being-loved",
            "love",
            "marriage",
            "relationships",
            "truth"
        ]
    },
    {
        "text": "It is never too late to be wise.",
        "author": "Daniel Defoe,",
        "tags": []
    },
    {
        "text": "Jace shook his blond head in exasperation. \"You had to make a crazy jail friend, didn't you? You couldn't just count ceiling tiles or tame a pet mouse like normal prisoners do?",
        "author": "Cassandra Clare,",
        "tags": [
            "humor",
            "jace"
        ]
    },
    {
        "text": "I don't like people who have never fallen or stumbled. Their virtue is lifeless and it isn't of much value. Life hasn't revealed its beauty to them.",
        "author": "Boris Pasternak",
        "tags": [
            "life"
        ]
    },
    {
        "text": "Pity those who don't feel anything at all.",
        "author": "Sarah J. Maas,",
        "tags": [
            "emotions",
            "pity"
        ]
    },
    {
        "text": "Remember me and smile, for it's better to forget than to remember me and cry.",
        "author": "Dr. Seuss",
        "tags": [
            "dr-seuss",
            "goodbye"
        ]
    },
    {
        "text": "Whatever you are physically...male or female, strong or weak, ill or healthy--all those things matter less than what your heart contains. If you have the soul of a warrior, you are a warrior. All those other things, they are the glass that contains the lamp, but you are the light inside.",
        "author": "Cassandra Clare,",
        "tags": []
    },
    {
        "text": "There is a pleasure in the pathless woods,There is a rapture on the lonely shore,There is society, where none intrudes,By the deep sea, and music in its roar:I love not man the less, but Nature more",
        "author": "Lord Byron",
        "tags": [
            "nature",
            "poetry",
            "solitude"
        ]
    },
    {
        "text": "You like someone who can't like you back because unrequited love can be survived in a way that once-requited love cannot.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "Great heroes need great sorrows and burdens, or half their greatness goes unnoticed. It is all part of the fairy tale.",
        "author": "Peter S. Beagle,",
        "tags": [
            "heroes",
            "inspirational"
        ]
    },
    {
        "text": "It must require bravery to be honest all the time.",
        "author": "Veronica Roth,",
        "tags": []
    },
    {
        "text": "Never marry at all, Dorian. Men marry because they are tired, women, because they are curious: both are disappointed.",
        "author": "Oscar Wilde,",
        "tags": [
            "disappointment",
            "dorian-gray",
            "marriage",
            "men",
            "relationships",
            "women"
        ]
    },
    {
        "text": "Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for.",
        "author": "Epicurus",
        "tags": [
            "desire",
            "gratitude",
            "hope"
        ]
    },
    {
        "text": "What happened down in the dungeons between you and Professor Quirrell is a complete secret, so, naturally the whole school knows.",
        "author": "J. K. Rowling,",
        "tags": [
            "dumbledore"
        ]
    },
    {
        "text": "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
        "author": "Marie Curie",
        "tags": [
            "fear",
            "life",
            "science",
            "understanding"
        ]
    },
    {
        "text": "I'd rather die on an adventure than live standing still.",
        "author": "V.E. Schwab,",
        "tags": []
    },
    {
        "text": "It ain't what they call you, it's what you answer to.",
        "author": "W.C. Fields",
        "tags": [
            "labels",
            "names"
        ]
    },
    {
        "text": "We are each our own devil, and we make this world our hell.",
        "author": "Oscar Wilde",
        "tags": [
            "devil",
            "hell",
            "world"
        ]
    },
    {
        "text": "Evil is always possible. And goodness is eternally difficult.",
        "author": "Anne Rice,",
        "tags": [
            "good-evil"
        ]
    },
    {
        "text": "The man who passes the sentence should swing the sword. If you would take a man's life, you owe it to him to look into his eyes and hear his final words. And if you cannot bear to do that, then perhaps the man does not deserve to die.",
        "author": "George R.R. Martin,",
        "tags": []
    },
    {
        "text": "Stories can conquer fear, you know. They can make the heart bigger.",
        "author": "Ben Okri",
        "tags": [
            "stories"
        ]
    },
    {
        "text": "People change and forget to tell each other.",
        "author": "Lillian Hellman",
        "tags": []
    },
    {
        "text": "Where words leave off, music begins.",
        "author": "Heinrich Heine",
        "tags": [
            "music",
            "power-of-music"
        ]
    },
    {
        "text": "A friend said to me, Hey you need to grow a pair. Grow a pair, Bro. It’s when someone calls you weak, but they associate it with a lack of testicles. Which is weird, because testicles are the most sensitive things in the world. If you suddenly just grew a pair, you’d be a lot more vulnerable. If you want to be tough, you should lose a pair. If you want to be real tough, you should grow a vagina. Those things can take a pounding.",
        "author": "Sheng Wang",
        "tags": [
            "feminism",
            "humor",
            "misattributed-betty-white"
        ]
    },
    {
        "text": "We sit silently and watch the world around us. This has taken a lifetime to learn. It seems only the old are able to sit next to one another and not say anything and still feel content. The young, brash and impatient, must always break the silence. It is a waste, for silence is pure. Silence is holy. It draws people together because only those who are comfortable with each other can sit without speaking. This is the great paradox.",
        "author": "Nicholas Sparks,",
        "tags": [
            "perception",
            "silence"
        ]
    },
    {
        "text": "I hope you're pleased with yourselves. We could all have been killed - or worse, expelled. Now if you don't mind, I'm going to bed.",
        "author": "J.K. Rowling,",
        "tags": []
    },
    {
        "text": "Only people who are capable of loving strongly can also suffer great sorrow, but this same necessity of loving serves to counteract their grief and heals them.",
        "author": "Leo Tolstoy",
        "tags": [
            "grief",
            "inspirational"
        ]
    },
    {
        "text": "Words dazzle and deceive because they are mimed by the face. But black words on a white page are the soul laid bare.",
        "author": "Guy de Maupassant",
        "tags": [
            "books"
        ]
    },
    {
        "text": "Curiouser and curiouser!",
        "author": "Lewis Carroll,",
        "tags": []
    },
    {
        "text": "The earth laughs in flowers.",
        "author": "Ralph Waldo Emerson",
        "tags": [
            "flowers",
            "laughter"
        ]
    },
    {
        "text": "Even the strongest and bravest must sometimes weep. It shows they have a great heart, one that can feel compassion for others.",
        "author": "Brian Jacques,",
        "tags": []
    },
    {
        "text": "Anyone can hide. Facing up to things, working through them, that's what makes you strong.",
        "author": "Sarah Dessen",
        "tags": [
            "inspirational",
            "strength",
            "tough-times"
        ]
    },
    {
        "text": "I kept always two books in my pocket, one to read, one to write in.",
        "author": "Robert Louis Stevenson,",
        "tags": [
            "books",
            "inspirational",
            "on-writing",
            "reading"
        ]
    },
    {
        "text": "There's nowhere you can be that isn't where you're meant to be...",
        "author": "John Lennon",
        "tags": [
            "beatles",
            "destiny",
            "fate",
            "life"
        ]
    },
    {
        "text": "It's much easier to not know things sometimes. Things change and friends leave. And life doesn't stop for anybody. I wanted to laugh. Or maybe get mad. Or maybe shrug at how strange everybody was, especially me. I think the idea is that every person has to live for his or her own life and than make the choice to share it with other people. You can't just sit their and put everybody's lives ahead of yours and think that counts as love. You just can't. You have to do things. I'm going to do what I want to do. I'm going to be who I really am. And I'm going to figure out what that is. And we could all sit around and wonder and feel bad about each other and blame a lot of people for what they did or didn't do or what they didn't know. I don't know. I guess there could always be someone to blame. It's just different. Maybe it's good to put things in perspective, but sometimes, I think that the only perspective is to really be there. Because it's okay to feel things. I was really there. And that was enough to make me feel infinite. I feel infinite.",
        "author": "Stephen Chbosky,",
        "tags": []
    },
    {
        "text": "Being entirely honest with oneself is a good exercise.",
        "author": "Sigmund Freud",
        "tags": []
    },
    {
        "text": "Sometimes things fall apart so that better things can fall together",
        "author": "Marilyn Monroe",
        "tags": []
    },
    {
        "text": "Kind words can be short and easy to speak, but their echoes are truly endless.",
        "author": "Mother Teresa",
        "tags": [
            "misattributed-to-mother-teresa"
        ]
    },
    {
        "text": "What she had realized was that love was that moment when your heart was about to burst.",
        "author": "Stieg Larsson,",
        "tags": [
            "adoration",
            "infatuation",
            "love"
        ]
    },
    {
        "text": "I always arrive late at the office, but I make up for it by leaving early.",
        "author": "Charles Lamb",
        "tags": []
    },
    {
        "text": "If you have good friends, no matter how much life is sucking , they can make you laugh.",
        "author": "P.C. Cast  Kristin Cast",
        "tags": [
            "friendship"
        ]
    },
    {
        "text": "I am awfully greedy; I want everything from life. I want to be a woman and to be a man, to have many friends and to have loneliness, to work much and write good books, to travel and enjoy myself, to be selfish and to be unselfish… You see, it is difficult to get all which I want. And then when I do not succeed I get mad with anger.",
        "author": "Simone de Beauvoir",
        "tags": [
            "anger",
            "books",
            "friends",
            "greedy",
            "life",
            "loneliness",
            "man",
            "myself",
            "selfish",
            "travel",
            "woman",
            "work",
            "write"
        ]
    },
    {
        "text": "To err is human, to forgive, divine.",
        "author": "Alexander Pope,",
        "tags": [
            "failure",
            "forgiveness",
            "humanity",
            "mistakes"
        ]
    },
    {
        "text": "Do not think that love in order to be genuine has to be extraordinary. What we need is to love without getting tired. Be faithful in small things because it is in them that your strength lies.",
        "author": "Mother Teresa",
        "tags": [
            "paraphrased"
        ]
    },
    {
        "text": "If all the world hated you and believed you wicked, while your own conscience approved of you and absolved you from guilt, you would not be without friends.",
        "author": "Charlotte Brontë,",
        "tags": [
            "conscience",
            "innocence"
        ]
    },
    {
        "text": "All human wisdom is contained in these two words - Wait and Hope",
        "author": "Alexandre Dumas,",
        "tags": [
            "book-the-count-of-monte-cristo"
        ]
    },
    {
        "text": "In the endthese things matter most:How well did you love?How fully did you live?How deeply did you let go?",
        "author": "Jack Kornfield,",
        "tags": [
            "eastern-philosophy",
            "inspirational"
        ]
    },
    {
        "text": "You do have a story inside you; it lies articulate and waiting to be written — behind your silence and your suffering.",
        "author": "Anne Rice",
        "tags": [
            "anne-rice",
            "pandora"
        ]
    },
    {
        "text": "But I love your feet only because they walked upon the earth and upon the wind and upon the waters, until they found me.",
        "author": "Pablo Neruda",
        "tags": []
    },
    {
        "text": "Shut your eyes and see.",
        "author": "James Joyce",
        "tags": []
    },
    {
        "text": "It takes courage to love, but pain through love is the purifying fire which those who love generously know. We all know people who are so much afraid of pain that they shut themselves up like clams in a shell and, giving out nothing, receive nothing and therefore shrink until life is a mere living death.",
        "author": "Eleanor Roosevelt",
        "tags": []
    },
    {
        "text": "Learn from the mistakes of others. You can never live long enough to make them all yourself.",
        "author": "Groucho Marx",
        "tags": [
            "attributed-no-source"
        ]
    },
    {
        "text": "Rare as is true love, true friendship is rarer.",
        "author": "Jean de La Fontaine",
        "tags": []
    },
    {
        "text": "I know we're fucked up, alright? I'm impulsive, and hot tempered, and you get under my skin like no one else. You act like you hate me one minute, and then need me the next. I never get anything right, and I don't deserve you...but I fucking love you, Abby. I love you more than I loved anyone or anything ever. When you're around, I don't need booze, or money, or the fighting, or the one-night stands...",
        "author": "Jamie McGuire,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "I have faith that God will show you the answer. But you have to understand that sometimes it takes a while to be able to recognize what God wants you to do. That's how it often is. God's voice is usually nothing more than a whisper, and you have to listen very carefully to hear it. But other times, in those rarest of moments, the answer is obvious and rings as loud as a church bell.",
        "author": "Nicholas Sparks,",
        "tags": [
            "god"
        ]
    },
    {
        "text": "They say I'm old-fashioned, and live in the past, but sometimes I think progress progresses too fast!",
        "author": "Dr. Seuss",
        "tags": [
            "life",
            "time"
        ]
    },
    {
        "text": "A smile is a curve that sets everything straight.",
        "author": "Phyllis Diller",
        "tags": []
    },
    {
        "text": "People tend to complicate their own lives, as if living weren't already complicated enough.",
        "author": "Carlos Ruiz Zafón,",
        "tags": []
    },
    {
        "text": "We shouldn't be looking for heroes, we should be looking for good ideas.",
        "author": "Noam Chomsky",
        "tags": []
    },
    {
        "text": "Do not read as children do to enjoy themselves, or, as the ambitious do to educate themselves. No, read to live.",
        "author": "Gustave Flaubert",
        "tags": []
    },
    {
        "text": "The only thing better than imagining Dimitri carrying me in his arms was imagining him shirtless while carrying me in his arms.",
        "author": "Richelle Mead,",
        "tags": [
            "academy",
            "mead",
            "richelle",
            "vampire"
        ]
    },
    {
        "text": "Between two evils, I always pick the one I never tried before.",
        "author": "Mae West",
        "tags": []
    },
    {
        "text": "The question is not what you look at, but what you see.",
        "author": "Henry David Thoreau",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "I guess that’s just part of loving people: You have to give things up. Sometimes you even have to give them up.",
        "author": "Lauren Oliver,",
        "tags": [
            "give",
            "love",
            "sacrifice"
        ]
    },
    {
        "text": "Did you see that dress? \"I saw the dress. \"Did you like it? He didn't answer. I took that as a yes. \"Am I going to endanger my reputation if I wear it to the dance? When he spoke, I could barely hear him. \"You'll endanger the school. I smiled and fell asleep.",
        "author": "Richelle Mead,",
        "tags": [
            "funny",
            "sweet"
        ]
    },
    {
        "text": "We need not to be let alone. We need to be really bothered once in a while. How long is it since you were really bothered? About something important, about something real?",
        "author": "Ray Bradbury,",
        "tags": [
            "reality-bothered"
        ]
    },
    {
        "text": "I don’t trust anybody. Not anybody. And the more that I care about someone, the more sure I am they’re going to get tired of me and take off.",
        "author": "Rainbow Rowell,",
        "tags": [
            "fear",
            "friendship",
            "tired",
            "trust"
        ]
    },
    {
        "text": "Um...is that thing tame?\" Frank said.The horse whinnied angrily.\"I don't think so,\" Percy guessed. \"He just said, 'I will trample you to death, silly Chinese Canadian baby man'.",
        "author": "Rick Riordan,",
        "tags": [
            "funny",
            "silly-chinese-canadian-baby-man"
        ]
    },
    {
        "text": "I can't eat and I can't sleep. I'm not doing well in terms of being a functional human, you know?",
        "author": "Ned Vizzini,",
        "tags": [
            "depression",
            "sadness",
            "suicide"
        ]
    },
    {
        "text": "Autumn is a second spring when every leaf is a flower.",
        "author": "Albert Camus",
        "tags": [
            "autumn"
        ]
    },
    {
        "text": "When I say it's you I like, I'm talking about that part of you that knows that life is far more than anything you can ever see or hear or touch. That deep part of you that allows you to stand for those things without which humankind cannot survive. Love that conquers hate, peace that rises triumphant over war, and justice that proves more powerful than greed.",
        "author": "Fred Rogers",
        "tags": [
            "friends",
            "friendship",
            "love",
            "peace"
        ]
    },
    {
        "text": "One day you will ask me which is more important? My life or yours? I will say mine and you will walk away not knowing that you are my life.",
        "author": "Khalil Gibran",
        "tags": []
    },
    {
        "text": "I will love you as a thief loves a gallery and as a crow loves a murder, as a cloud loves bats and as a range loves braes. I will love you as misfortune loves orphans, as fire loves innocence and as justice loves to sit and watch while everything goes wrong. I will love you as a battlefield loves young men and as peppermints love your allergies, and I will love you as the banana peel loves the shoe of a man who was just struck by a shingle falling off a house. I will love you as a volunteer fire department loves rushing into burning buildings and as burning buildings love to chase them back out, and as a parachute loves to leave a blimp and as a blimp operator loves to chase after it.I will love you as a dagger loves a certain person’s back, and as a certain person loves to wear dagger proof tunics, and as a dagger proof tunic loves to go to a certain dry cleaning facility, and how a certain employee of a dry cleaning facility loves to stay up late with a pair of binoculars, watching a dagger factory for hours in the hopes of catching a burglar, and as a burglar loves sneaking up behind people with binoculars, suddenly realizing that she has left her dagger at home. I will love you as a drawer loves a secret compartment, and as a secret compartment loves a secret, and as a secret loves to make a person gasp, and as a gasping person loves a glass of brandy to calm their nerves, and as a glass of brandy loves to shatter on the floor, and as the noise of glass shattering loves to make someone else gasp, and as someone else gasping loves a nearby desk to lean against, even if leaning against it presses a lever that loves to open a drawer and reveal a secret compartment. I will love you until all such compartments are discovered and opened, and until all the secrets have gone gasping into the world. I will love you until all the codes and hearts have been broken and until every anagram and egg has been unscrambled.I will love you until every fire is extinguised and until every home is rebuilt from the handsomest and most susceptible of woods, and until every criminal is handcuffed by the laziest of policemen. I will love until M. hates snakes and J. hates grammar, and I will love you until C. realizes S. is not worthy of his love and N. realizes he is not worthy of the V. I will love you until the bird hates a nest and the worm hates an apple, and until the apple hates a tree and the tree hates a nest, and until a bird hates a tree and an apple hates a nest, although honestly I cannot imagine that last occurrence no matter how hard I try. I will love you as we grow older, which has just happened, and has happened again, and happened several days ago, continuously, and then several years before that, and will continue to happen as the spinning hands of every clock and the flipping pages of every calendar mark the passage of time, except for the clocks that people have forgotten to wind and the calendars that people have forgotten to place in a highly visible area. I will love you as we find ourselves farther and farther from one another, where we once we were so close that we could slip the curved straw, and the long, slender spoon, between our lips and fingers respectively.I will love you until the chances of us running into one another slip from slim to zero, and until your face is fogged by distant memory, and your memory faced by distant fog, and your fog memorized by a distant face, and your distance distanced by the memorized memory of a foggy fog. I will love you no matter where you go and who you see, no matter where you avoid and who you don’t see, and no matter who sees you avoiding where you go. I will love you no matter what happens to you, and no matter how I discover what happens to you, and no matter what happens to me as I discover this, and now matter how I am discovered after what happens to me as I am discovering this.",
        "author": "Lemony Snicket",
        "tags": []
    },
    {
        "text": "I hope you will have a wonderful year, that you'll dream dangerously and outrageously, that you'll make something that didn't exist before you made it, that you will be loved and that you will be liked, and that you will have people to love and to like in return. And, most importantly (because I think there should be more kindness and more wisdom in the world right now), that you will, when you need to be, be wise, and that you will always be kind.",
        "author": "Neil Gaiman",
        "tags": [
            "kindness"
        ]
    },
    {
        "text": "The soul is healed by being with children.",
        "author": "Fyodor Dostoevsky",
        "tags": [
            "children",
            "healing",
            "humility",
            "inspiration",
            "love",
            "openness",
            "society"
        ]
    },
    {
        "text": "I'd rather die my way than live yours.",
        "author": "Lauren Oliver,",
        "tags": [
            "independence",
            "lena-holoway",
            "self-determination",
            "self-reliance"
        ]
    },
    {
        "text": "When we're incomplete, we're always searching for somebody to complete us. When, after a few years or a few months of a relationship, we find that we're still unfulfilled, we blame our partners and take up with somebody more promising. This can go on and on--series polygamy--until we admit that while a partner can add sweet dimensions to our lives, we, each of us, are responsible for our own fulfillment. Nobody else can provide it for us, and to believe otherwise is to delude ourselves dangerously and to program for eventual failure every relationship we enter.",
        "author": "Tom Robbins",
        "tags": []
    },
    {
        "text": "You only live twice:Once when you are bornAnd once when you look death in the face",
        "author": "Ian Fleming,",
        "tags": [
            "death",
            "haiku",
            "james-bond",
            "philosophy",
            "poetry"
        ]
    },
    {
        "text": "Whenever you feel like criticizing any one...just remember that all the people in this world haven't had the advantages that you've had.",
        "author": "F. Scott Fitzgerald",
        "tags": [
            "empathy",
            "thankful",
            "understanding",
            "understanding-others"
        ]
    },
    {
        "text": "The voice of the sea speaks to the soul.",
        "author": "Kate Chopin,",
        "tags": []
    },
    {
        "text": "The trouble was, I had been inadequate all along, I simply hadn't thought about it.",
        "author": "Sylvia Plath,",
        "tags": []
    },
    {
        "text": "If I am really a part of your dream, you'll come back one day.",
        "author": "Paulo Coelho",
        "tags": []
    },
    {
        "text": "Second star to the right and straight on 'til morning.",
        "author": "J.M. Barrie,",
        "tags": [
            "childhood-memory"
        ]
    },
    {
        "text": "Morning is wonderful. Its only drawback is that it comes at such an inconvenient time of day.",
        "author": "Glen Cook,",
        "tags": [
            "morning",
            "waking-up"
        ]
    },
    {
        "text": "I'd rather be hated for who I am, than loved for who I am not.",
        "author": "Kurt Cobain",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "I'm not a religious person but I do sometimes think God made you for me.",
        "author": "Sally Rooney,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "For me, I am driven by two main philosophies: know more today about the world than I knew yesterday and lessen the suffering of others. You'd be surprised how far that gets you.",
        "author": "Neil deGrasse Tyson",
        "tags": [
            "inspirational",
            "values"
        ]
    },
    {
        "text": "Headline?\" he asked.\"'Swing Set Needs Home,'\" I said.\"'Desperately Lonely Swing Set Needs Loving Home,'\" he said.\"'Lonely, Vaguely Pedophilic Swing Set Seeks the Butts of Children,'\" I said.",
        "author": "John Green,",
        "tags": [
            "funny",
            "humor",
            "humour",
            "internet",
            "john-green",
            "pedophile",
            "pedophilia",
            "tfios",
            "the-fault-in-our-stars"
        ]
    },
    {
        "text": "And then I am going to rattle the stars.",
        "author": "Sarah J. Maas,",
        "tags": [
            "celaena-sardothien"
        ]
    },
    {
        "text": "Science is not only compatible with spirituality; it is a profound source of spirituality.",
        "author": "Carl Sagan,",
        "tags": [
            "metaphysics",
            "philosophy",
            "science",
            "sense-of-wonder",
            "spirituality"
        ]
    },
    {
        "text": "Ignore those that make you fearful and sad, that degrade you back towards disease and death.",
        "author": "Rumi Jalalud-Din",
        "tags": []
    },
    {
        "text": "Parents can only give good advice or put them on the right paths, but the final forming of a person's character lies in their own hands.",
        "author": "Anne Frank",
        "tags": [
            "growing-up",
            "innocence",
            "inspirational",
            "parenting",
            "personal-responsibility",
            "right-of-passage",
            "self-determination",
            "self-responsibility"
        ]
    },
    {
        "text": "Our lives are not our own. We are bound to others, past and present, and by each crime and every kindness, we birth our future.",
        "author": "David Mitchell,",
        "tags": []
    },
    {
        "text": "I write differently from what I speak, I speak differently from what I think, I think differently from the way I ought to think, and so it all proceeds into deepest darkness.",
        "author": "Franz Kafka",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "I like people too much or not at all. I've got to go down deep, to fall into people, to really know them.",
        "author": "Sylvia Plath,",
        "tags": []
    },
    {
        "text": "Nothing behind me, everything ahead of me, as is ever so on the road.",
        "author": "Jack Kerouac,",
        "tags": []
    },
    {
        "text": "My rapier wit hides my inner pain.",
        "author": "Cassandra Clare",
        "tags": [
            "humor",
            "jace-wayland",
            "the-mortal-instruments",
            "tmi"
        ]
    },
    {
        "text": "The feelings that hurt most, the emotions that sting most, are those that are absurd - The longing for impossible things, precisely because they are impossible; nostalgia for what never was; the desire for what could have been; regret over not being someone else; dissatisfaction with the world’s existence. All these half-tones of the soul’s consciousness create in us a painful landscape, an eternal sunset of what we are.",
        "author": "Fernando Pessoa",
        "tags": [
            "hope",
            "longing",
            "pain",
            "regret",
            "yearning"
        ]
    },
    {
        "text": "Mental pain is less dramatic than physical pain, but it is more common and also more hard to bear. The frequent attempt to conceal mental pain increases the burden: it is easier to say My tooth is aching than to say My heart is broken.",
        "author": "C.S. Lewis,",
        "tags": [
            "depression",
            "pain"
        ]
    },
    {
        "text": "In my next life I want to live my life backwards. You start out dead and get that out of the way. Then you wake up in an old people's home feeling better every day. You get kicked out for being too healthy, go collect your pension, and then when you start work, you get a gold watch and a party on your first day. You work for 40 years until you're young enough to enjoy your retirement. You party, drink alcohol, and are generally promiscuous, then you are ready for high school. You then go to primary school, you become a kid, you play. You have no responsibilities, you become a baby until you are born. And then you spend your last 9 months floating in luxurious spa-like conditions with central heating and room service on tap, larger quarters every day and then Voila! You finish off as an orgasm!",
        "author": "Woody Allen",
        "tags": []
    },
    {
        "text": "Holding anger is a poison...It eats you from inside...We think that by hating someone we hurt them...But hatred is a curved blade...and the harm we do to others...we also do to ourselves.",
        "author": "Mitch Albom,",
        "tags": [
            "ruby-anger"
        ]
    },
    {
        "text": "He awoke each morning with the desire to do right, to be a good and meaningful person, to be, as simple as it sounded and as impossible as it actually was, happy. And during the course of each day his heart would descend from his chest into his stomach. By early afternoon he was overcome by the feeling that nothing was right, or nothing was right for him, and by the desire to be alone. By evening he was fulfilled: alone in the magnitude of his grief, alone in his aimless guilt, alone even in his loneliness. I am not sad, he would repeat to himself over and over, I am not sad. As if he might one day convince himself. Or fool himself. Or convince others--the only thing worse than being sad is for others to know that you are sad. I am not sad. I am not sad. Because his life had unlimited potential for happiness, insofar as it was an empty white room. He would fall asleep with his heart at the foot of his bed, like some domesticated animal that was no part of him at all. And each morning he would wake with it again in the cupboard of his rib cage, having become a little heavier, a little weaker, but still pumping. And by the midafternoon he was again overcome with the desire to be somewhere else, someone else, someone else somewhere else. I am not sad.",
        "author": "Jonathan Safran Foer,",
        "tags": [
            "sadness"
        ]
    },
    {
        "text": "The advantage of a bad memory is that one enjoys several times the same good things for the first time.",
        "author": "Friedrich Nietzsche",
        "tags": [
            "forgetfulness",
            "forgetting",
            "happiness",
            "memory"
        ]
    },
    {
        "text": "I opened myself to the gentle indifference of the world.",
        "author": "Albert Camus,",
        "tags": []
    },
    {
        "text": "If you liked being a teenager, there's something really wrong with you.",
        "author": "Stephen King",
        "tags": []
    },
    {
        "text": "A small but noteworthy note. I've seen so many young men over the years who think they're running at other young men. They are not. They are running at me.",
        "author": "Markus Zusak,",
        "tags": [
            "death",
            "war"
        ]
    },
    {
        "text": "Always be a poet, even in prose.",
        "author": "Charles Baudelaire",
        "tags": [
            "poetry",
            "prose",
            "writing"
        ]
    },
    {
        "text": "It would seem that Our Lord finds our desires not too strong, but too weak. We are half-hearted creatures, fooling about with drink and sex and ambition when infinite joy is offered us, like an ignorant child who wants to go on making mud pies in a slum because he cannot imagine what is meant by the offer of a holiday at the sea. We are far too easily pleased.",
        "author": "C.S. Lewis,",
        "tags": [
            "christianity"
        ]
    },
    {
        "text": "If everybody is thinking alike, then somebody isn't thinking.",
        "author": "George S. Patton",
        "tags": [
            "herd-mentality",
            "inspiration",
            "patton"
        ]
    },
    {
        "text": "Silence, I discover, is something you can actually hear.",
        "author": "Haruki Murakami,",
        "tags": []
    },
    {
        "text": "The best way to cheer yourself is to try to cheer someone else up.",
        "author": "Mark Twain",
        "tags": [
            "happiness"
        ]
    },
    {
        "text": "Those who cannot change their minds cannot change anything.",
        "author": "George Bernard Shaw",
        "tags": [
            "adaptation",
            "change",
            "open-mindedness",
            "self-improvement"
        ]
    },
    {
        "text": "I sit beside the fire and think Of all that I have seenOf meadow flowers and butterfliesIn summers that have beenOf yellow leaves and gossamerIn autumns that there wereWith morning mist and silver sunAnd wind upon my hairI sit beside the fire and thinkOf how the world will beWhen winter comes without a spring That I shall ever seeFor still there are so many thingsThat I have never seenIn every wood in every springThere is a different greenI sit beside the fire and thinkOf people long agoAnd people that will see a worldThat I shall never knowBut all the while I sit and thinkOf times there were beforeI listen for returning feet And voices at the door",
        "author": "J.R.R. Tolkien",
        "tags": [
            "life",
            "time"
        ]
    },
    {
        "text": "The only real prison is fear, and the only real freedom is freedom from fear",
        "author": "Aung San Suu Kyi",
        "tags": [
            "civil-rights"
        ]
    },
    {
        "text": "Sorrow is how we learn to love. Your heart isn't breaking. It hurts because it's getting larger. The larger it gets, the more love it holds.",
        "author": "Rita Mae Brown,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Did you really want to die?\"\"No one commits suicide because they want to die.\"\"Then why do they do it?\"\"Because they want to stop the pain.",
        "author": "Tiffanie DeBartolo,",
        "tags": [
            "intent",
            "pain",
            "suicide"
        ]
    },
    {
        "text": "Some walks you have to take alone.",
        "author": "Suzanne Collins,",
        "tags": []
    },
    {
        "text": "Holding Eleanor's hand was like holding a butterfly. Or a heartbeat. Like holding something complete, and completely alive.",
        "author": "Rainbow Rowell,",
        "tags": [
            "friendship",
            "high-school",
            "love",
            "relationships",
            "sweet",
            "teenage-love"
        ]
    },
    {
        "text": "I get a warm feeling among my books.",
        "author": "Anthony Powell",
        "tags": []
    },
    {
        "text": "The two hardest tests on the spiritual road are the patience to wait for the right moment and the courage not to be disappointed with what we encounter.",
        "author": "Paulo Coelho,",
        "tags": [
            "appreciation",
            "courage",
            "patience",
            "trials-of-life"
        ]
    },
    {
        "text": "Sometimes I wonder if there's something wrong with me. Perhaps I've spent too long in the company of my literary romantic heroes, and consequently my ideals and expectations are far too high.",
        "author": "E.L. James,",
        "tags": [
            "romance"
        ]
    },
    {
        "text": "It doesn't matter. I have books, new books, and I can bear anything as long as there are books.",
        "author": "Jo Walton,",
        "tags": [
            "books"
        ]
    },
    {
        "text": "The last enemy that shall be destroyed is death.",
        "author": "J.K. Rowling,",
        "tags": [
            "bible",
            "death",
            "enemy"
        ]
    },
    {
        "text": "You care so much you feel as though you will bleed to death with the pain of it.",
        "author": "J.K. Rowling,",
        "tags": [
            "grief",
            "harry-potter",
            "hurt",
            "pain"
        ]
    },
    {
        "text": "All happiness depends on courage and work.",
        "author": "Honoré de Balzac",
        "tags": [
            "courage",
            "happiness",
            "work"
        ]
    },
    {
        "text": "Can you surf really well, then?\"I looked at Grover, who was trying hard not to laugh.\"Jeez, Nico,\" I said. \"I've never really tried.\"He went on asking questions. Did I fight a lot with Thalia, since she was a daughter of Zeus? (I didn't answer that one.) If Annabeth's mother was Athena, the goddess of wisdom, then why didn't Annabeth know better than to fall off a cliff? (I tried not to strangle Nico for asking that one.) Was Annabeth my girlfriend? (At this point, I was ready to stick the kid in a meat-flavored sack and throw him to the wolves.)",
        "author": "Rick Riordan",
        "tags": [
            "annabeth-chase",
            "athena",
            "funny",
            "humor",
            "myth",
            "mythology",
            "olympians",
            "percy-jackson",
            "posiedon",
            "the-lightning-thief",
            "zeus"
        ]
    },
    {
        "text": "If you want a picture of the future, imagine a boot stamping on a human face—for ever.",
        "author": "George Orwell,",
        "tags": [
            "future"
        ]
    },
    {
        "text": "Life starts all over again when it gets crisp in the fall.",
        "author": "F. Scott Fitzgerald,",
        "tags": []
    },
    {
        "text": "أي علم هذا الذي لم يستطع حتى الآن أن يضع أصوات من نحب في أقراص ، أو زجاجة دواء نتناولها سرًّا ، عندما نصاب بوعكة عاطفية بدون أن يدري صاحبها كم نحن نحتاجه",
        "author": "أحلام مستغانمي,",
        "tags": []
    },
    {
        "text": "Once you have read a book you care about, some part of it is always with you.",
        "author": "Louis L'Amour,",
        "tags": [
            "books",
            "inspirational",
            "reading"
        ]
    },
    {
        "text": "The more I read, the more I acquire, the more certain I am that I know nothing.",
        "author": "Voltaire",
        "tags": []
    },
    {
        "text": "They're certainly entitled to think that, and they're entitled to full respect for their opinions... but before I can live with other folks I've got to live with myself. The one thing that doesn't abide by majority rule is a person's conscience.",
        "author": "Harper Lee,",
        "tags": [
            "integrity"
        ]
    },
    {
        "text": "Books serve to show a man that those original thoughts of his aren't very new after all.",
        "author": "Abraham Lincoln",
        "tags": [
            "books",
            "originality",
            "unique"
        ]
    },
    {
        "text": "The good thing about science is that it's true whether or not you believe in it.",
        "author": "Neil deGrasse Tyson",
        "tags": []
    },
    {
        "text": "I think; therefore I am.",
        "author": "Rene Descartes",
        "tags": []
    },
    {
        "text": "Reality doesn't impress me. I only believe in intoxication, in ecstasy, and when ordinary life shackles me, I escape, one way or another. No more walls.",
        "author": "Anaïs Nin,",
        "tags": [
            "ecstasy",
            "escape",
            "freedom",
            "intoxication",
            "reality"
        ]
    },
    {
        "text": "I wonder how many people don't get the one they want, but end up with the one they're supposed to be with.",
        "author": "Fannie Flagg,",
        "tags": [
            "couples",
            "deep",
            "dissapointment",
            "fate",
            "heart",
            "inspirational",
            "love",
            "people",
            "romance"
        ]
    },
    {
        "text": "Every day is a new day. It is better to be lucky. But I would rather be exact. Then when luck comes you are ready.",
        "author": "Ernest Hemingway,",
        "tags": []
    },
    {
        "text": "You forget what you want to remember, and you remember what you want to forget.",
        "author": "Cormac McCarthy,",
        "tags": []
    },
    {
        "text": "All good books are alike in that they are truer than if they had really happened and after you are finished reading one you will feel that all that happened to you and afterwards it all belongs to you: the good and the bad, the ecstasy, the remorse and sorrow, the people and the places and how the weather was. If you can get so that you can give that to people, then you are a writer.",
        "author": "Ernest Hemingway",
        "tags": [
            "authors",
            "good-books",
            "truth",
            "writers"
        ]
    },
    {
        "text": "Hope is a waking dream.",
        "author": "Aristotle",
        "tags": [
            "dreams",
            "hope"
        ]
    },
    {
        "text": "Even After All this timeThe Sun never says to the Earth,\"You owe me.\"LookWhat happensWith a love like that,It lights the whole sky.",
        "author": "Hafiz",
        "tags": [
            "life",
            "love",
            "sky",
            "sun"
        ]
    },
    {
        "text": "The only lies for which we are truly punished are those we tell ourselves.",
        "author": "V. S. Naipaul,",
        "tags": []
    },
    {
        "text": "I have nothing to declare except my genius.",
        "author": "Oscar Wilde",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "He died not for men, but for each man. If each man had been the only man made, He would have done no less.",
        "author": "C.S. Lewis",
        "tags": [
            "god",
            "religion"
        ]
    },
    {
        "text": "Maybe our girlfriends are our soulmates and guys are just people to have fun with.",
        "author": "Candace Bushnell,",
        "tags": [
            "dating",
            "humor",
            "relationships",
            "soulmates"
        ]
    },
    {
        "text": "There must be something in books, something we can’t imagine, to make a woman stay in a burning house; there must be something there. You don’t stay for nothing.",
        "author": "Ray Bradbury,",
        "tags": [
            "books",
            "censorship"
        ]
    },
    {
        "text": "make a radical change in your lifestyle and begin to boldly do things which you may previously never have thought of doing, or been too hesitant to attempt. So many people live within unhappy circumstances and yet will not take the initiative to change their situation because they are conditioned to a life of security, conformity, and conservation, all of which may appear to give one peace of mind, but in reality nothing is more damaging to the adventurous spirit within a man than a secure future. The very basic core of a man's living spirit is his passion for adventure. The joy of life comes from our encounters with new experiences, and hence there is no greater joy than to have an endlessly changing horizon, for each day to have a new and different sun. If you want to get more out of life, you must lose your inclination for monotonous security and adopt a helter-skelter style of life that will at first appear to you to be crazy. But once you become accustomed to such a life you will see its full meaning and its incredible beauty.",
        "author": "Jon Krakauer,",
        "tags": []
    },
    {
        "text": "Maybe some people are just meant to be in the same story.",
        "author": "Jandy Nelson,",
        "tags": []
    },
    {
        "text": "Life before Death.Strength before Weakness.Journey before Destination.",
        "author": "Brandon Sanderson,",
        "tags": [
            "inspirational",
            "motto"
        ]
    },
    {
        "text": "Trains are great dirty smoky things,\" said Will. \"You won't like it.\" Tessa was unmoved. \"I won't know if I like it until I try it, will I?\" \"I've never swum naked in the Thames before, but I know I wouldn't like it.\" \"But think how entertaining for sightseers,\" said Tessa, and she saw Jem duck his head to hide the quick flash of his grin.",
        "author": "Cassandra Clare,",
        "tags": [
            "clockwork-prince",
            "humor",
            "jem-carstairs",
            "teasing",
            "tessa-gray",
            "will-herondale"
        ]
    },
    {
        "text": "But I didn't understand then. That I could hurt somebody so badly she would never recover. That a person can, just by living, damage another human being beyond repair.",
        "author": "Haruki Murakami",
        "tags": [
            "depressing"
        ]
    },
    {
        "text": "I believe in God, but not as one thing, not as an old man in the sky. I believe that what people call God is something in all of us. I believe that what Jesus and Mohammed and Buddha and all the rest said was right. It's just that the translations have gone wrong.",
        "author": "John Lennon",
        "tags": [
            "god",
            "organized-religion",
            "religion",
            "spirituality"
        ]
    },
    {
        "text": "I don't know who invented high heels, but all women owe him a lot!",
        "author": "Marilyn Monroe",
        "tags": []
    },
    {
        "text": "Heard melodies are sweet, but those unheard, are sweeter",
        "author": "John Keats,",
        "tags": [
            "philosophy",
            "religion",
            "science"
        ]
    },
    {
        "text": "Anybody can sympathise with the sufferings of a friend, but it requires a very fine nature to sympathise with a friend's success.",
        "author": "Oscar Wilde",
        "tags": []
    },
    {
        "text": "At the end of the day, we can endure much more than we think we can.",
        "author": "Frida Kahlo",
        "tags": []
    },
    {
        "text": "Fire-breathing bitch-queen.",
        "author": "Sarah J. Maas,",
        "tags": [
            "queen-of-shadows",
            "sarah-j-maas"
        ]
    },
    {
        "text": "A love like that was a serious illness, an illness from which you never entirely recover.",
        "author": "Charles Bukowski,",
        "tags": []
    },
    {
        "text": "I know of a cure for everything: salt water...in one way or the other. Sweat, or tears, or the salt sea.",
        "author": "Karen Blixen",
        "tags": []
    },
    {
        "text": "Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough.",
        "author": "Oprah Winfrey",
        "tags": [
            "appreciation",
            "contentment",
            "dissatisfaction",
            "life",
            "perception",
            "positivity",
            "thankfulness",
            "thanksgiving"
        ]
    },
    {
        "text": "Scars have the strange power to remind us that our past is real.",
        "author": "Cormac McCarthy,",
        "tags": [
            "healing",
            "injuries",
            "memory",
            "past",
            "reality",
            "scars",
            "time"
        ]
    },
    {
        "text": "An Unbreakable Vow?\" said Ron, looking stunned. \"Nah, he can’t have.... Are you sure?\"\"Yes I’m sure,\" said Harry. \"Why, what does it mean?\"\"Well, you can’t break an Unbreakable Vow...\"\"I’d worked that much out for myself, funnily enough.",
        "author": "J.K. Rowling,",
        "tags": [
            "harry-potter",
            "humor",
            "malfoy",
            "ron-weasley",
            "snape",
            "unbreakable-vow"
        ]
    },
    {
        "text": "There are three questions every woman should be able to answer yes to before they commit to a man. If you answer no to any of the three questions, run like hell.\"[...]\"Does he treat you with respect at all times? That's the first question. The second question is, if he is the exact same person twenty years from now that he is today, would you still want to marry him? And finally, does he inspire to be a better person? You find someone you can answer yes to all three, then you've found a good man.",
        "author": "Colleen Hoover,",
        "tags": []
    },
    {
        "text": "We learn from failure, not from success!",
        "author": "Bram Stoker,",
        "tags": []
    },
    {
        "text": "If, then, I were asked for the most important advice I could give, that which I considered to be the most useful to the men of our century, I should simply say: in the name of God, stop a moment, cease your work, look around you.",
        "author": "Leo Tolstoy,",
        "tags": [
            "advice-for-writers",
            "awareness",
            "life"
        ]
    },
    {
        "text": "Don't aim at success. The more you aim at it and make it a target, the more you are going to miss it. For success, like happiness, cannot be pursued; it must ensue, and it only does so as the unintended side effect of one's personal dedication to a cause greater than oneself or as the by-product of one's surrender to a person other than oneself. Happiness must happen, and the same holds for success: you have to let it happen by not caring about it. I want you to listen to what your conscience commands you to do and go on to carry it out to the best of your knowledge. Then you will live to see that in the long-run—in the long-run, I say!—success will follow you precisely because you had forgotten to think about it",
        "author": "Viktor E. Frankl,",
        "tags": [
            "happiness",
            "success"
        ]
    },
    {
        "text": "Instructions for living a life. Pay attention. Be astonished. Tell about it.",
        "author": "Mary Oliver",
        "tags": [
            "life-lessons"
        ]
    },
    {
        "text": "I love you, not just for now, but for always, and I dream of the day that you’ll take me in your arms again.",
        "author": "Nicholas Sparks,",
        "tags": []
    },
    {
        "text": "Stars, hide your fires; Let not light see my black and deep desires.",
        "author": "William Shakespeare,",
        "tags": [
            "concealment",
            "dark-plans",
            "darkness",
            "stealth"
        ]
    },
    {
        "text": "This is how you do it: you sit down at the keyboard and you put one word after another until its done. It's that easy, and that hard.",
        "author": "Neil Gaiman",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "I'm killing time while I wait for life to shower me with meaning and happiness.",
        "author": "Bill Watterson",
        "tags": [
            "calvin-and-hobbes",
            "humor",
            "life"
        ]
    },
    {
        "text": "The future depends on what you do today.",
        "author": "Mahatma Gandhi",
        "tags": [
            "action",
            "carpe-diem",
            "future",
            "present"
        ]
    },
    {
        "text": "Patience, grasshopper,\" said Maia. \"Good things come to those who wait.\"\"I always thought that was 'Good things come to those who do the wave,'\" said Simon. \"No wonder I've been so confused all my life.",
        "author": "Cassandra Clare,",
        "tags": [
            "maia",
            "patience",
            "simon",
            "wit"
        ]
    },
    {
        "text": "No great mind has ever existed without a touch of madness.",
        "author": "Aristotle",
        "tags": [
            "aristotle",
            "genius",
            "great-minds",
            "madness"
        ]
    },
    {
        "text": "Absence diminishes small loves and increases great ones, as the wind blows out the candle and fans the bonfire.",
        "author": "Francois Duc de la Rochefoucauld,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "...you know that a good, long session of weeping can often make you feel better, even if your circumstances have not changed one bit.",
        "author": "Lemony Snicket,",
        "tags": [
            "crying"
        ]
    },
    {
        "text": "Intelligence plus character-that is the goal of true education.",
        "author": "Martin Luther King Jr.",
        "tags": [
            "education"
        ]
    },
    {
        "text": "All right,\" said Susan. \"I'm not stupid. You're saying humans need... fantasies to make life bearable.\"REALLY? AS IF IT WAS SOME KIND OF PINK PILL? NO. HUMANS NEED FANTASY TO BE HUMAN. TO BE THE PLACE WHERE THE FALLING ANGEL MEETS THE RISING APE.\"Tooth fairies? Hogfathers? Little—\"YES. AS PRACTICE. YOU HAVE TO START OUT LEARNING TO BELIEVE THE LITTLE LIES.\"So we can believe the big ones?\"YES. JUSTICE. MERCY. DUTY. THAT SORT OF THING.\"They're not the same at all!\"YOU THINK SO? THEN TAKE THE UNIVERSE AND GRIND IT DOWN TO THE FINEST POWDER AND SIEVE IT THROUGH THE FINEST SIEVE AND THEN SHOW ME ONE ATOM OF JUSTICE, ONE MOLECULE OF MERCY. AND YET—Death waved a hand. AND YET YOU ACT AS IF THERE IS SOME IDEAL ORDER IN THE WORLD, AS IF THERE IS SOME...SOME RIGHTNESS IN THE UNIVERSE BY WHICH IT MAY BE JUDGED.\"Yes, but people have got to believe that, or what's the point—\"MY POINT EXACTLY.",
        "author": "Terry Pratchett,",
        "tags": [
            "belief",
            "justice",
            "lies",
            "mercy",
            "truth"
        ]
    },
    {
        "text": "you have to love something before you can hate it.",
        "author": "Nicholas Sparks,",
        "tags": []
    },
    {
        "text": "You should write because you love the shape of stories and sentences and the creation of different words on a page. Writing comes from reading, and reading is the finest teacher of how to write.",
        "author": "Annie Proulx",
        "tags": [
            "reading",
            "words",
            "writing"
        ]
    },
    {
        "text": "The things you used to own, now they own you.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "own",
            "things"
        ]
    },
    {
        "text": "Man is the cruelest animal.",
        "author": "Friedrich Nietzsche",
        "tags": [
            "animals",
            "cruelty",
            "evil",
            "man"
        ]
    },
    {
        "text": "Do you think that I count the days? There is only one day left, always starting over: it is given to us at dawn and taken away from us at dusk.",
        "author": "Jean-Paul Sartre",
        "tags": []
    },
    {
        "text": "I’m not in this world to live up to your expectations and you’re not in this world to live up to mine.",
        "author": "Bruce Lee",
        "tags": [
            "expectations",
            "individuality",
            "peer-pressure",
            "wisdom"
        ]
    },
    {
        "text": "Either you deal with what is the reality, or you can be sure that the reality is going to deal with you.",
        "author": "Alex Haley",
        "tags": []
    },
    {
        "text": "To put everything in balance is good, to put everything in harmony is better.",
        "author": "Victor Hugo",
        "tags": []
    },
    {
        "text": "Have you ever asked yourself, do monsters make war, or does war make monsters?",
        "author": "Laini Taylor,",
        "tags": []
    },
    {
        "text": "The future is now. It's time to grow up and be strong. Tomorrow may well be too late.",
        "author": "Neil LaBute,",
        "tags": []
    },
    {
        "text": "When someone is in your heart, they're never truly gone. They can come back to you, even at unlikely times.",
        "author": "Mitch Albom,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "The homemaker has the ultimate career. All other careers exist for one purpose only - and that is to support the ultimate career.",
        "author": "C.S. Lewis",
        "tags": [
            "family"
        ]
    },
    {
        "text": "The power of a glance has been so much abused in love stories, that it has come to be disbelieved in. Few people dare now to say that two beings have fallen in love because they have looked at each other. Yet it is in this way that love begins, and in this way only.",
        "author": "Victor Hugo,",
        "tags": []
    },
    {
        "text": "An intellectual? Yes. And never deny it. An intellectual is someone whose mind watches itself. I like this, because I am happy to be both halves, the watcher and the watched. \"Can they be brought together?\" This is a practical question. We must get down to it. \"I despise intelligence\" really means: \"I cannot bear my doubts.",
        "author": "Albert Camus",
        "tags": [
            "intellectuals",
            "intelligence",
            "philosophy",
            "scholars"
        ]
    },
    {
        "text": "Marriage can wait, education cannot.",
        "author": "Khaled Hosseini,",
        "tags": [
            "education",
            "marriage"
        ]
    },
    {
        "text": "Books are no more threatened by Kindle than stairs by elevators.",
        "author": "Stephen Fry",
        "tags": [
            "books",
            "e-readers",
            "kindle",
            "reading"
        ]
    },
    {
        "text": "A man's face is his autobiography. A woman's face is her work of fiction.",
        "author": "Oscar Wilde",
        "tags": []
    },
    {
        "text": "You’re dangerous, he says.Why?Because you make me believe in the impossible",
        "author": "Simone Elkeles,",
        "tags": [
            "romance"
        ]
    },
    {
        "text": "Anti-intellectualism has been a constant thread winding its way through our political and cultural life, nurtured by the false notion that democracy means that 'my ignorance is just as good as your knowledge.'",
        "author": "Isaac Asimov",
        "tags": [
            "democracy",
            "elite",
            "elitism",
            "elitist",
            "voter",
            "voting"
        ]
    },
    {
        "text": "What is family? They were the people who claimed you. In good, in bad, in parts or in whole, they were the ones who showed up, who stayed in there, regardless. It wasn't just about blood relations or shared chromosomes, but something wider, bigger. We had many families over time. Our family of origin, the family we created, and the groups you moved through while all of this was happening: friends, lovers, sometimes even strangers. None of them perfect, and we couldn't expect them to be. You can't make any one person your world. The trick was to take what each could give you and build your world from it.",
        "author": "Sarah Dessen,",
        "tags": [
            "ruby"
        ]
    },
    {
        "text": "When you have lost hope, you have lost everything. And when you think all is lost, when all is dire and bleak, there is always hope.",
        "author": "Pittacus Lore,",
        "tags": [
            "hope"
        ]
    },
    {
        "text": "And then something invisible snapped insider her, and that which had come together commenced to fall apart.",
        "author": "John Green,",
        "tags": [
            "depressing",
            "wise"
        ]
    },
    {
        "text": "If death meant just leaving the stage long enough to change costume and come back as a new character...Would you slow down? Or speed up?",
        "author": "Chuck Palahniuk,",
        "tags": [
            "death"
        ]
    },
    {
        "text": "The only truth is music.",
        "author": "Jack Kerouac",
        "tags": [
            "music",
            "truth"
        ]
    },
    {
        "text": "You make me want to live, Rowan. Not survive; not exist. Live.",
        "author": "Sarah J. Maas,",
        "tags": []
    },
    {
        "text": "If the real world were a book, it would never find a publisher. Overlong, detailed to the point of distraction-and ultimately, without a major resolution.",
        "author": "Jasper Fforde,",
        "tags": [
            "life",
            "world"
        ]
    },
    {
        "text": "Wanting to be someone else is a waste of the person you are.",
        "author": "Marilyn Monroe",
        "tags": [
            "inspirational",
            "misattributed",
            "self-acceptance",
            "self-esteem"
        ]
    },
    {
        "text": "Alone. Yes, that's the key word, the most awful word in the English tongue. Murder doesn't hold a candle to it and hell is only a poor synonym.",
        "author": "Stephen King",
        "tags": [
            "horror",
            "vampire"
        ]
    },
    {
        "text": "He felt that his whole life was some kind of dream and he sometimes wondered whose it was and whether they were enjoying it.",
        "author": "Douglas Adams,",
        "tags": [
            "dreams"
        ]
    },
    {
        "text": "A paranoid is someone who knows a little of what's going on.",
        "author": "William S. Burroughs",
        "tags": [
            "drugs",
            "philosophy",
            "politics"
        ]
    },
    {
        "text": "It is nothing to die. It is frightful not to live.",
        "author": "Victor Hugo,",
        "tags": []
    },
    {
        "text": "Incredible change happens in your life when you decide to take control of what you do have power over instead of craving control over what you don't.",
        "author": "Steve Maraboli,",
        "tags": [
            "change",
            "control",
            "empowerment",
            "inspirational",
            "letting-go",
            "life",
            "motivational"
        ]
    },
    {
        "text": "Most men would rather deny a hard truth than face it.",
        "author": "George R.R. Martin,",
        "tags": [
            "denial",
            "honesty",
            "truth"
        ]
    },
    {
        "text": "The best way to cheer yourself is to cheer somebody else up.",
        "author": "Albert Einstein",
        "tags": []
    },
    {
        "text": "The most certain sign of wisdom is cheerfulness.",
        "author": "Michel de Montaigne",
        "tags": []
    },
    {
        "text": "Shoot for the moon. Even if you miss, you'll land among the stars.",
        "author": "Norman Vincent Peale",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Keep your face always toward the sunshine - and shadows will fall behind you.",
        "author": "Walt Whitman",
        "tags": [
            "advice-for-daily-living",
            "inspirational",
            "positive-attitude"
        ]
    },
    {
        "text": "Courage isn't having the strength to go on - it is going on when you don't have strength.",
        "author": "Napoleon Bonaparte",
        "tags": [
            "courage",
            "inspirational",
            "strength"
        ]
    },
    {
        "text": "Men go to far greater lengths to avoid what they fear than to obtain what they desire.",
        "author": "Dan Brown,",
        "tags": [
            "desire",
            "fear",
            "human-nature"
        ]
    },
    {
        "text": "What a blessing it is to love books as I love them;- to be able to converse with the dead, and to live amidst the unreal!",
        "author": "Thomas Babington Macaulay,",
        "tags": [
            "books",
            "reading"
        ]
    },
    {
        "text": "A person often meets his destiny on the road he took to avoid it.",
        "author": "Jean de La Fontaine,",
        "tags": []
    },
    {
        "text": "When will you learn that there isn't a word for everything?",
        "author": "Nicole Krauss,",
        "tags": [
            "power-of-words"
        ]
    },
    {
        "text": "If you want to get laid, go to college. If you want an education, go to the library.",
        "author": "Frank Zappa",
        "tags": [
            "education",
            "sex"
        ]
    },
    {
        "text": "I’ve been fighting to be who I am all my life. What’s the point of being who I am, if I can’t have the person who was worth all the fighting for?",
        "author": "Stephanie Lennox,",
        "tags": []
    },
    {
        "text": "I hope that one day you will have the experience of doing something you do not understand for someone you love.",
        "author": "Jonathan Safran Foer,",
        "tags": []
    },
    {
        "text": "No winter lasts forever; no spring skips its turn.",
        "author": "Hal Borland",
        "tags": []
    },
    {
        "text": "Fiction is the lie through which we tell the truth.",
        "author": "Albert Camus",
        "tags": [
            "on-fiction"
        ]
    },
    {
        "text": "Dignity/ˈdignitē/ noun 1. The moment you realize that the person you cared for has nothing intellectually or spiritually to offer you, but a headache. 2. The moment you realize God had greater plans for you that don’t involve crying at night or sad Pinterest quotes.3. The moment you stop comparing yourself to others because it undermines your worth, education and your parent’s wisdom.4. The moment you live your dreams, not because of what it will prove or get you, but because that is all you want to do. People’s opinions don’t matter. 5. The moment you realize that no one is your enemy, except yourself.6. The moment you realize that you can have everything you want in life. However, it takes timing, the right heart, the right actions, the right passion and a willingness to risk it all. If it is not yours, it is because you really didn’t want it, need it or God prevented it. 7. The moment you realize the ghost of your ancestors stood between you and the person you loved. They really don't want you mucking up the family line with someone that acts anything less than honorable.8. The moment you realize that happiness was never about getting a person. They are only a helpmate towards achieving your life mission.9. The moment you believe that love is not about losing or winning. It is just a few moments in time, followed by an eternity of situations to grow from.10. The moment you realize that you were always the right person. Only ignorant people walk away from greatness.",
        "author": "Shannon L. Alder",
        "tags": []
    },
    {
        "text": "there is a place in the heart thatwill never be filleda spaceand even during thebest momentsandthe greatest timestimeswe will know itwe will know itmore thaneverthere is a place in the heart thatwill never be filledandwe will waitandwaitin that space.",
        "author": "Charles Bukowski",
        "tags": [
            "death",
            "inspirational"
        ]
    },
    {
        "text": "Trees that are slow to grow bear the best fruit.",
        "author": "Moliere",
        "tags": [
            "inspirational",
            "patience"
        ]
    },
    {
        "text": "A bit of trash now and then is good for the severest reader. It provides the necessary roughage in the literary diet.",
        "author": "Phyllis McGinley",
        "tags": []
    },
    {
        "text": "The water hears and understands. The ice does not forgive.",
        "author": "Leigh Bardugo,",
        "tags": []
    },
    {
        "text": "لا تجالس أنصاف العشاق، ولا تصادق أنصاف الأصدقاء، لا تقرأ لأنصاف الموهوبين،لا تعش نصف حياة، ولا تمت نصف موت،لا تختر نصف حل، ولا تقف في منتصف الحقيقة، لا تحلم نصف حلم، ولا تتعلق بنصف أمل، إذا صمتّ.. فاصمت حتى النهاية، وإذا تكلمت.. فتكلّم حتى النهاية، لا تصمت كي تتكلم، ولا تتكلم كي تصمت. إذا رضيت فعبّر عن رضاك، لا تصطنع نصف رضا، وإذا رفضت.. فعبّر عن رفضك، لأن نصف الرفض قبول.. النصف هو حياة لم تعشها، وهو كلمة لم تقلها،وهو ابتسامة أجّلتها، وهو حب لم تصل إليه، وهو صداقة لم تعرفها.. النصف هو ما يجعلك غريباً عن أقرب الناس إليك، وهو ما يجعل أقرب الناس إليك غرباء عنك. النصف هو أن تصل وأن لاتصل، أن تعمل وأن لا تعمل،أن تغيب وأن تحضر.. النصف هو أنت، عندما لا تكون أنت.. لأنك لم تعرف من أنت، النصف هو أن لا تعرف من أنت.. ومن تحب ليس نصفك الآخر.. هو أنت في مكان آخر في الوقت نفسه. نصف شربة لن تروي ظمأك، ونصف وجبة لن تشبع جوعك،نصف طريق لن يوصلك إلى أي مكان، ونصف فكرة لن تعطي لك نتيجة النصف هو لحظة عجزك وأنت لست بعاجز.. لأنك لست نصف إنسان. أنت إنسان وجدت كي تعيش الحياة، وليس كي تعيش نصف حياة ليست حقيقة الإنسان بما يظهره لك.. بل بما لا يستطيع أن يظهره، لذلك.. إذا أردت أن تعرفه فلا تصغي إلى ما يقوله .. بل إلى ما لا يقوله.",
        "author": "جبران خليل جبران",
        "tags": []
    },
    {
        "text": "It's going to be all right, sir,\" Harry said over and over again, more worried by Dumbledore's silence than he had been by his weakened voice. \"We're nearly there ... I can Apparate us both back ... don't worry ...\"\"I am not worried, Harry,\" said Dumbledore, his voice a little stronger despite the freezing water. \"I am with you.",
        "author": "J.K. Rowling,",
        "tags": [
            "dumbledore",
            "harry-potter",
            "hope"
        ]
    },
    {
        "text": "You're the first Shadowhunter I've ever met.\" That’s too bad, said Jace, since all the others you meet from now on will be a terrible letdown.",
        "author": "Cassandra Clare,",
        "tags": [
            "city-of-fallen-angels",
            "jace-lightwood",
            "jordan-kyle"
        ]
    },
    {
        "text": "Nothing travels faster than the speed of light, with the possible exception of bad news, which obeys its own special laws.",
        "author": "Douglas Adams,",
        "tags": [
            "humor",
            "novelist",
            "science-fiction"
        ]
    },
    {
        "text": "I was dead until you found me, though I breathed. I was sightless, though I could see. And then you came...and I was awakened.",
        "author": "J.R. Ward,",
        "tags": []
    },
    {
        "text": "Open a book this minute and start reading. Don’t move until you’ve reached page fifty. Until you’ve buried your thoughts in print. Cover yourself with words. Wash yourself away. Dissolve.",
        "author": "Carol Shields,",
        "tags": []
    },
    {
        "text": "Tiger got to hunt, bird got to fly;Man got to sit and wonder 'why, why, why?'Tiger got to sleep, bird got to land;Man got to tell himself he understand.",
        "author": "Kurt Vonnegut,",
        "tags": [
            "life",
            "nature",
            "philosophy"
        ]
    },
    {
        "text": "Alec looked at her and shook his head. \"How do you manage never to get mud on your clothes?\"Isabelle shrugged philosophically. \"I'm pure at heart. It repels the dirt.",
        "author": "Cassandra Clare,",
        "tags": [
            "alec-lightwood",
            "city-of-ashes",
            "clean",
            "dirt",
            "humor",
            "isabelle-lightwood",
            "sarcasm"
        ]
    },
    {
        "text": "I hate men who are afraid of women's strength.",
        "author": "Anaïs Nin,",
        "tags": [
            "empowerment",
            "feminism",
            "woman",
            "women-s-strenth"
        ]
    },
    {
        "text": "Have you ever lost someone you love and wanted one more conversation, one more chance to make up for the time when you thought they would be here forever? If so, then you know you can go your whole life collecting days, and none will outweigh the one you wish you had back.",
        "author": "Mitch Albom,",
        "tags": [
            "loss"
        ]
    },
    {
        "text": "there are two types of people in the world: those who prefer to be sad among others, and those who prefer to be sad alone.",
        "author": "Nicole Krauss,",
        "tags": [
            "comfort",
            "sad",
            "sadness"
        ]
    },
    {
        "text": "Whoever is careless with the truth in small matters cannot be trusted with important matters",
        "author": "Albert Einstein",
        "tags": [
            "character",
            "honesty",
            "integrity"
        ]
    },
    {
        "text": "Fashion is a form of ugliness so intolerable that we have to alter it every six months.",
        "author": "Oscar Wilde",
        "tags": [
            "fashion"
        ]
    },
    {
        "text": "Magnus, standing by the door, snapped his fingers impatiently. \"Move it along, teenagers. The only person who gets to canoodle in my bedroom is my magnificent self.\"\"Canoodle?\" repeated Clary, never having heard the word before.\"Magnificent?\" repeated Jace, who was just being nasty. Magnus growled. The growl sounded like \"Get out.",
        "author": "Cassandra Clare,",
        "tags": [
            "canoodle",
            "city-of-bones",
            "clary-fray",
            "humor",
            "jace-wayland",
            "magnificent",
            "magnus-bane"
        ]
    },
    {
        "text": "We shall meet in the place where there is no darkness.",
        "author": "George Orwell,",
        "tags": []
    },
    {
        "text": "The impossible could not have happened, therefore the impossible must be possible in spite of appearances.",
        "author": "Agatha Christie,",
        "tags": [
            "impossible"
        ]
    },
    {
        "text": "I am both happy and sad at the same time, and I'm still trying to figure out how that could be.",
        "author": "Stephen Chbosky,",
        "tags": [
            "confused",
            "happy",
            "sad"
        ]
    },
    {
        "text": "You alone are enough. You have nothing to prove to anybody.",
        "author": "Maya Angelou",
        "tags": []
    },
    {
        "text": "The earth has its music for those who will listen",
        "author": "Reginald Vincent Holmes,",
        "tags": [
            "misattributed-george-santayana"
        ]
    },
    {
        "text": "I am not what happened to me, I am what I choose to become.",
        "author": "Carl Gustav Jung",
        "tags": [
            "life-experience"
        ]
    },
    {
        "text": "You might want to lie down,\" Magnus advised. \"I find that it helps when the crushing sense of horrible realization sets in.",
        "author": "Cassandra Clare,",
        "tags": [
            "humorous"
        ]
    },
    {
        "text": "We can't be afraid of change. You may feel very secure in the pond that you are in, but if you never venture out of it, you will never know that there is such a thing as an ocean, a sea. Holding onto something that is good for you now, may be the very reason why you don't have something better.",
        "author": "C. JoyBell C.",
        "tags": [
            "change",
            "changes",
            "courage",
            "encouragement",
            "exploration",
            "growing",
            "inspirational-quotes",
            "letting-go",
            "life-and-living",
            "self-discovery"
        ]
    },
    {
        "text": "There are much worse games to play.",
        "author": "Suzanne Collins,",
        "tags": [
            "katniss",
            "mockingjay"
        ]
    },
    {
        "text": "It's so much darker when a light goes out than it would have been if it had never shone.",
        "author": "John Steinbeck,",
        "tags": [
            "absence",
            "loss"
        ]
    },
    {
        "text": "Why are you worrying about YOU-KNOW-WHO, when you should be worrying about YOU-NO-POO? The constipation sensation that's gripping the nation!",
        "author": "J.K. Rowling,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "Come home and shout at me. Come home and fight with me. Come home and break my heart, if you must.",
        "author": "Holly Black,",
        "tags": []
    },
    {
        "text": "Whenever people agree with me I always feel I must be wrong.",
        "author": "Oscar Wilde",
        "tags": [
            "agree"
        ]
    },
    {
        "text": "People speak sometimes about the \"bestial\" cruelty of man, but that is terribly unjust and offensive to beasts, no animal could ever be so cruel as a man, so artfully, so artistically cruel.",
        "author": "Fyodor Dostoyevsky",
        "tags": [
            "animals",
            "cruelty",
            "mankind"
        ]
    },
    {
        "text": "Life is either a daring adventure or nothing at all.",
        "author": "Helen Keller,",
        "tags": [
            "carpe-diem",
            "challenges",
            "enjoy-life",
            "life",
            "risk-taking"
        ]
    },
    {
        "text": "The best way to not feel hopeless is to get up and do something. Don’t wait for good things to happen to you. If you go out and make some good things happen, you will fill the world with hope, you will fill yourself with hope.",
        "author": "Barack Obama",
        "tags": [
            "determination",
            "helping-others",
            "hope",
            "initiative",
            "just-do-it",
            "proactivity",
            "service",
            "volunteerism",
            "work"
        ]
    },
    {
        "text": "Don't cry over someone who wouldn't cry over you.",
        "author": "Lauren Conrad",
        "tags": []
    },
    {
        "text": "to love life, to love it evenwhen you have no stomach for itand everything you've held dearcrumbles like burnt paper in your hands,your throat filled with the silt of it.When grief sits with you, its tropical heatthickening the air, heavy as watermore fit for gills than lungs;when grief weights you like your own fleshonly more of it, an obesity of grief,you think, How can a body withstand this?Then you hold life like a facebetween your palms, a plain face,no charming smile, no violet eyes,and you say, yes, I will take youI will love you, again.",
        "author": "Ellen Bass",
        "tags": [
            "acceptance",
            "hope",
            "life",
            "love"
        ]
    },
    {
        "text": "There are two ways of spreading light: to be the candle or the mirror that receives it.",
        "author": "Edith Wharton",
        "tags": []
    },
    {
        "text": "I know not all that may be coming, but be it what it will, I'll go to it laughing.",
        "author": "Herman Melville,",
        "tags": [
            "adventure",
            "laughter"
        ]
    },
    {
        "text": "God does not play dice with the universe; He plays an ineffable game of His own devising, which might be compared, from the perspective of any of the other players [i.e. everybody], to being involved in an obscure and complex variant of poker in a pitch-dark room, with blank cards, for infinite stakes, with a Dealer who won't tell you the rules, and who smiles all the time.",
        "author": "Terry Pratchett,",
        "tags": [
            "einstein",
            "gaiman",
            "god",
            "humor"
        ]
    },
    {
        "text": "Great minds discuss ideas. Average minds discuss events. Small minds discuss people.",
        "author": "Henry Thomas Buckle",
        "tags": [
            "creativity",
            "dreams",
            "gossip",
            "misattributed-eleanor-roosevelt",
            "paraphrased"
        ]
    },
    {
        "text": "You’ll miss the best things if you keep your eyes shut.",
        "author": "Dr. Seuss,",
        "tags": []
    },
    {
        "text": "You deal with mythological stuff for a few years, you learn that paradises are usually places where you get killed.",
        "author": "Rick Riordan,",
        "tags": [
            "humor",
            "mythological",
            "paradise"
        ]
    },
    {
        "text": "When we are young, the words are scattered all around us. As they are assembled by experience, so also are we, sentence by sentence, until the story takes shape.",
        "author": "Louise Erdrich,",
        "tags": [
            "athe-plague-of-dives"
        ]
    },
    {
        "text": "I want to be in a relationship where you telling me you love me is just a ceremonious validation of what you already show me.",
        "author": "Steve Maraboli,",
        "tags": [
            "action",
            "being-loved",
            "inspirational",
            "life",
            "love",
            "relationships"
        ]
    },
    {
        "text": "Let the rain kiss you. Let the rain beat upon your head with silver liquid drops. Let the rain sing you a lullaby.",
        "author": "Langston Hughes",
        "tags": []
    },
    {
        "text": "Stories you read when you're the right age never quite leave you. You may forget who wrote them or what the story was called. Sometimes you'll forget precisely what happened, but if a story touches you it will stay with you, haunting the places in your mind that you rarely ever visit.",
        "author": "Neil Gaiman,",
        "tags": [
            "haunting",
            "life",
            "mind",
            "stories",
            "youth"
        ]
    },
    {
        "text": "Do you not see how necessary a world of pains and troubles is to school an intelligence and make it a soul?",
        "author": "John Keats,",
        "tags": [
            "art",
            "depression",
            "growth",
            "life",
            "pain",
            "suffering",
            "wisdom"
        ]
    },
    {
        "text": "It isn't what we say or think that defines us, but what we do.",
        "author": "Jane Austen,",
        "tags": []
    },
    {
        "text": "She feels in italics and thinks in CAPITALS.",
        "author": "Henry James",
        "tags": []
    },
    {
        "text": "I write to give myself strength. I write to be the characters that I am not. I write to explore all the things I'm afraid of.",
        "author": "Joss Whedon",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "There is more than one way to burn a book. And the world is full of people running about with lit matches.",
        "author": "Ray Bradbury",
        "tags": [
            "censorship"
        ]
    },
    {
        "text": "If no one cares for you at all, do you even really exist?",
        "author": "Cassandra Clare,",
        "tags": [
            "will-herondale"
        ]
    },
    {
        "text": "You think because he doesn't love you that you are worthless. You think that because he doesn't want you anymore that he is right -- that his judgement and opinion of you are correct. If he throws you out, then you are garbage. You think he belongs to you because you want to belong to him. Don't. It's a bad word, 'belong.' Especially when you put it with somebody you love. Love shouldn't be like that. Did you ever see the way the clouds love a mountain? They circle all around it; sometimes you can't even see the mountain for the clouds. But you know what? You go up top and what do you see? His head. The clouds never cover the head. His head pokes through, beacuse the clouds let him; they don't wrap him up. They let him keep his head up high, free, with nothing to hide him or bind him. You can't own a human being. You can't lose what you don't own. Suppose you did own him. Could you really love somebody who was absolutely nobody without you? You really want somebody like that? Somebody who falls apart when you walk out the door? You don't, do you? And neither does he. You're turning over your whole life to him. Your whole life, girl. And if it means so little to you that you can just give it away, hand it to him, then why should it mean any more to him? He can't value you more than you value yourself.",
        "author": "Toni Morrison",
        "tags": [
            "emotion",
            "love",
            "self-respect",
            "value"
        ]
    },
    {
        "text": "And Lot's wife, of course, was told not to look back where all those people and their homes had been. But she did look back, and I love her for that, because it was so human. So she was turned into a pillar of salt. So it goes.",
        "author": "Kurt Vonnegut,",
        "tags": []
    },
    {
        "text": "There is nothing like looking, if you want to find something. You certainly usually find something, if you look, but it is not always quite the something you were after.",
        "author": "J.R.R. Tolkien,",
        "tags": []
    },
    {
        "text": "You can only be young once. But you can always be immature.",
        "author": "Pat  Monahan",
        "tags": [
            "humor",
            "immature",
            "young"
        ]
    },
    {
        "text": "When you consider things like the stars, our affairs don't seem to matter very much, do they?",
        "author": "Virginia Woolf",
        "tags": [
            "life"
        ]
    },
    {
        "text": "If you never did you should. These things are fun and fun is good.",
        "author": "Dr. Seuss",
        "tags": [
            "suess"
        ]
    },
    {
        "text": "Freedom lies in being bold.",
        "author": "Robert Frost",
        "tags": [
            "boldness",
            "courage",
            "freedom"
        ]
    },
    {
        "text": "He who knows all the answers has not been asked all the questions.",
        "author": "Confucius",
        "tags": [
            "wisdom"
        ]
    },
    {
        "text": "Watch out for intellect,because it knows so much it knows nothingand leaves you hanging upside down,mouthing knowledge as your heartfalls out of your mouth.",
        "author": "Anne Sexton,",
        "tags": []
    },
    {
        "text": "Laughter is wine for the soul - laughter soft, or loud and deep, tinged through with seriousness - the hilarious declaration made by man that life is worth living.",
        "author": "Sean O'Casey",
        "tags": [
            "joy",
            "laughter"
        ]
    },
    {
        "text": "The thing that makes you exceptional, if you are at all, is inevitably that which must also make you lonely.",
        "author": "Lorraine Hansberry",
        "tags": []
    },
    {
        "text": "When I look at my life and its secret colours, I feel like bursting into tears.",
        "author": "Albert Camus,",
        "tags": []
    },
    {
        "text": "I know it's wrong - God, it's all kinds of wrong - but I just want to lie down with you and wake up with you, just once, just once ever in my life.",
        "author": "Cassandra Clare,",
        "tags": [
            "city-of-glass",
            "clary-fray",
            "jace-wayland"
        ]
    },
    {
        "text": "You’ll get over it… It’s the clichés that cause the trouble. To lose someone you love is to alter your life for ever. You don’t get over it because ‘it is the person you loved. The pain stops, there are new people, but the gap never closes. How could it? The particularness of someone who mattered enough to grieve over is not made anodyne by death. This hole in my heart is in the shape of you and no-one else can fit it. Why would I want them to?",
        "author": "Jeanette Winterson,",
        "tags": [
            "loss",
            "love"
        ]
    },
    {
        "text": "The worst type of crying wasn't the kind everyone could see--the wailing on street corners, the tearing at clothes. No, the worst kind happened when your soul wept and no matter what you did, there was no way to comfort it. A section withered and became a scar on the part of your soul that survived. For people like me and Echo, our souls contained more scar tissue than life.",
        "author": "Katie McGarry,",
        "tags": [
            "crying",
            "depression",
            "grief",
            "hurt",
            "pain",
            "sadness"
        ]
    },
    {
        "text": "All a girl really wants is for one guy to prove to her that they are not all the same.",
        "author": "Marilyn Monroe",
        "tags": []
    },
    {
        "text": "There are moments when troubles enter our lives and we can do nothing to avoid them.But they are there for a reason. Only when we have overcome them will we understand why they were there.",
        "author": "Paulo Coelho,",
        "tags": [
            "encouragement",
            "wisdom"
        ]
    },
    {
        "text": "By you, I am forever undone.",
        "author": "Holly Black,",
        "tags": [
            "cardan-greenbriar",
            "love",
            "romance"
        ]
    },
    {
        "text": "There are nights when the wolves are silent and only the moon howls.",
        "author": "George Carlin",
        "tags": []
    },
    {
        "text": "ليس هناك كتابا أقرأه و لا أستفيد منه شيئا جديدا ، فحتى الكتاب التافه أستفيد من قراءته ، أني تعلمت شيئا جديدا هو ما هي التفاهة ؟ و كيف يكتب الكتاب التافهون ؟ و فيم يفكرون ؟",
        "author": "عباس محمود العقاد",
        "tags": []
    },
    {
        "text": "Only a generation of readers will spawn a generation of writers.",
        "author": "Steven Spielberg",
        "tags": [
            "education",
            "reading"
        ]
    },
    {
        "text": "You will lose what you value most, so treasure it while you can.",
        "author": "Richelle Mead,",
        "tags": []
    },
    {
        "text": "Atticus said to Jem one day, \"I’d rather you shot at tin cans in the backyard, but I know you’ll go after birds. Shoot all the blue jays you want, if you can hit ‘em, but remember it’s a sin to kill a mockingbird.\" That was the only time I ever heard Atticus say it was a sin to do something, and I asked Miss Maudie about it. \"Your father’s right,\" she said. \"Mockingbirds don’t do one thing except make music for us to enjoy. They don’t eat up people’s gardens, don’t nest in corn cribs, they don’t do one thing but sing their hearts out for us. That’s why it’s a sin to kill a mockingbird.",
        "author": "Harper Lee,",
        "tags": [
            "scout"
        ]
    },
    {
        "text": "We do not believe in ourselves until someone reveals that deep inside us something is valuable, worth listening to, worthy of our trust, sacred to our touch. Once we believe in ourselves we can risk curiosity, wonder, spontaneous delight or any experience that reveals the human spirit.",
        "author": "E.E. Cummings",
        "tags": [
            "inspirational-human-spirit"
        ]
    },
    {
        "text": "When they asked me what I wanted to be I said I didn’t know.\"Oh, sure you know,\" the photographer said.\"She wants,\" said Jay Cee wittily, \"to be everything.",
        "author": "Sylvia Plath,",
        "tags": []
    },
    {
        "text": "Only you can control your future.",
        "author": "Dr. Seuss",
        "tags": []
    },
    {
        "text": "A mother is the truest friend we have, when trials heavy and sudden fall upon us; when adversity takes the place of prosperity; when friends desert us; when trouble thickens around us, still will she cling to us, and endeavor by her kind precepts and counsels to dissipate the clouds of darkness, and cause peace to return to our hearts.",
        "author": "Washington Irving",
        "tags": []
    },
    {
        "text": "A person who has good thoughts cannot ever be ugly. You can have a wonky nose and a crooked mouth and a double chin and stick-out teeth, but if you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
        "author": "Roald Dahl,",
        "tags": []
    },
    {
        "text": "It is easy in the world to live after the world's opinion; it is easy in solitude to live after our own; but the great man is he who in the midst of the crowd keeps with perfect sweetness the independence of solitude.",
        "author": "Ralph Waldo Emerson,",
        "tags": [
            "essay",
            "inspirational",
            "lecture",
            "nonfiction",
            "philosophy",
            "self-reliance",
            "social-commentary",
            "transcendentalism"
        ]
    },
    {
        "text": "I decided as long as I'm going to hell, I might as well do it thoroughly.",
        "author": "Stephenie Meyer,",
        "tags": [
            "host",
            "ian",
            "jamie",
            "jared",
            "melanie",
            "uncle-jeb",
            "wanda"
        ]
    },
    {
        "text": "We do not need magic to transform our world. We carry all of the power we need inside ourselves already.",
        "author": "J.K. Rowling,",
        "tags": [
            "magic"
        ]
    },
    {
        "text": "I am a forest, and a night of dark trees: but he who is not afraid of my darkness, will find banks full of roses under my cypresses.",
        "author": "Friedrich Nietzsche,",
        "tags": [
            "darkness"
        ]
    },
    {
        "text": "Behind this mask there is more than just flesh. Beneath this mask there is an idea... and ideas are bulletproof.",
        "author": "Alan Moore,",
        "tags": []
    },
    {
        "text": "I don’t know what’s worse: to not know what you are and be happy, or to become what you’ve always wanted to be, and feel alone.",
        "author": "Daniel Keyes,",
        "tags": [
            "happiness",
            "loneliness",
            "melancholy",
            "philosophy",
            "psychology"
        ]
    },
    {
        "text": "Grown-ups never understand anything by themselves, and it is tiresome for children to be always and forever explaining things to them",
        "author": "Antoine de Saint-Exupéry,",
        "tags": [
            "adults",
            "antoine-de-saint-exupery",
            "children",
            "philosophy",
            "the-little-prince"
        ]
    },
    {
        "text": "When I do good, I feel good. When I do bad, I feel bad. That's my religion.",
        "author": "Abraham Lincoln",
        "tags": [
            "abraham-lincoln",
            "religion"
        ]
    },
    {
        "text": "How long was I asleep?\" she whispered. He didn't respond. \"How long was I asleep?\" she asked again, and noticed a hint of red in his cheeks. \"You were asleep, too?\" \"Until you began drooling on my shoulder.",
        "author": "Sarah J. Maas,",
        "tags": [
            "celaena-sardothien",
            "chaol-westfall",
            "throne-of-glass"
        ]
    },
    {
        "text": "If you have the words, there's always a chance that you'll find the way.",
        "author": "Seamus Heaney,",
        "tags": [
            "expression",
            "finding-your-voice",
            "poetry"
        ]
    },
    {
        "text": "When people say impossible, they usually mean improbable.",
        "author": "Leigh Bardugo,",
        "tags": []
    },
    {
        "text": "To do the useful thing, to say the courageous thing, to contemplate the beautiful thing: that is enough for one man's life.",
        "author": "T.S. Eliot,",
        "tags": []
    },
    {
        "text": "Your assumptions are your windows on the world. Scrub them off every once in a while, or the light won't come in.",
        "author": "Alan Alda",
        "tags": [
            "assumptions",
            "close-mindedness",
            "intelligence",
            "isaac-asimov",
            "knowledge",
            "open-mind",
            "open-mindedness",
            "open-minds",
            "opinions",
            "receptivity",
            "science",
            "science-of-mind"
        ]
    },
    {
        "text": "It is better, I think, to grab at the stars than to sit flustered because you know you cannot reach them.",
        "author": "R.A. Salvatore,",
        "tags": []
    },
    {
        "text": "This is a new year. A new beginning. And things will change.",
        "author": "Taylor Swift",
        "tags": [
            "change",
            "fresh-starts",
            "new-beginnings",
            "reinvention",
            "time"
        ]
    },
    {
        "text": "Lovers don't finally meet somewhere. They're in each other all along.",
        "author": "Mawlana Jalal-al-Din Rumi",
        "tags": [
            "lovers"
        ]
    },
    {
        "text": "Never miss a good chance to shut up.",
        "author": "Will Rogers",
        "tags": [
            "advice",
            "funny",
            "reticence",
            "silence"
        ]
    },
    {
        "text": "When someone you love dies, and you're not expecting it, you don't lose her all at once; you lose her in pieces over a long time—the way the mail stops coming, and her scent fades from the pillows and even from the clothes in her closet and drawers. Gradually, you accumulate the parts of her that are gone. Just when the day comes—when there's a particular missing part that overwhelms you with the feeling that she's gone, forever—there comes another day, and another specifically missing part.",
        "author": "John Irving,",
        "tags": [
            "death",
            "grief",
            "loss"
        ]
    },
    {
        "text": "I got schooled this yearbyaboy.A boy that I'm seriously, deeply, madly, incredibly, and undeniably in",
        "author": "Colleen Hoover,",
        "tags": [
            "layken",
            "slammed"
        ]
    },
    {
        "text": "Sometimes love means letting go when you want to hold on tighter.",
        "author": "Melissa Marr,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Many people will walk in and out of your life, but only true friends will leave footprints in your heart",
        "author": "Eleanor Roosevelt",
        "tags": [
            "friends"
        ]
    },
    {
        "text": "You can't wait for inspiration. You have to go after it with a club.",
        "author": "Jack London",
        "tags": []
    },
    {
        "text": "Look at everything always as though you were seeing it either for the first or last time: Thus is your time on earth filled with glory.",
        "author": "Betty Smith,",
        "tags": []
    },
    {
        "text": "I don't go out with strangers,\" I said.\"Good thing I do. I'll pick you up at five.",
        "author": "Becca Fitzpatrick,",
        "tags": [
            "fallen-angels"
        ]
    },
    {
        "text": "The past is never where you think you left it.",
        "author": "Katherine Anne Porter",
        "tags": [
            "past"
        ]
    },
    {
        "text": "Usually we walk around constantly believing ourselves. \"I'm okay\" we say. \"I'm alright\". But sometimes the truth arrives on you and you can't get it off. That's when you realize that sometimes it isn't even an answer--it's a question. Even now, I wonder how much of my life is convinced.",
        "author": "Markus Zusak,",
        "tags": [
            "truth"
        ]
    },
    {
        "text": "All thinking men are atheists.",
        "author": "Ernest Hemingway,",
        "tags": [
            "atheism",
            "inspirational"
        ]
    },
    {
        "text": "You live like this, sheltered, in a delicate world, and you believe you are living. Then you read a book… or you take a trip… and you discover that you are not living, that you are hibernating. The symptoms of hibernating are easily detectable: first, restlessness. The second symptom (when hibernating becomes dangerous and might degenerate into death): absence of pleasure. That is all. It appears like an innocuous illness. Monotony, boredom, death. Millions live like this (or die like this) without knowing it. They work in offices. They drive a car. They picnic with their families. They raise children. And then some shock treatment takes place, a person, a book, a song, and it awakens them and saves them from death. Some never awaken.",
        "author": "Anaïs Nin,",
        "tags": [
            "anais",
            "nin"
        ]
    },
    {
        "text": "The best way out is always through.",
        "author": "Robert Frost",
        "tags": [
            "feelings",
            "persistence",
            "problems"
        ]
    },
    {
        "text": "It was a bright cold day in April, and the clocks were striking thirteen.",
        "author": "George Orwell,",
        "tags": [
            "april",
            "dystopia",
            "first-sentence",
            "opening-lines"
        ]
    },
    {
        "text": "A well-composed book is a magic carpet on which we are wafted to a world that we cannot enter in any other way.",
        "author": "Caroline Gordon",
        "tags": [
            "books",
            "imagination",
            "writing"
        ]
    },
    {
        "text": "The more clearly we can focus our attention on the wonders and realities of the universe about us, the less taste we shall have for destruction.",
        "author": "Rachel Carson",
        "tags": [
            "destruction",
            "ecology",
            "reality",
            "universe",
            "wonder"
        ]
    },
    {
        "text": "Do not train a child to learn by force or harshness; but direct them to it by what amuses their minds, so that you may be better able to discover with accuracy the peculiar bent of the genius of each.",
        "author": "Plato",
        "tags": [
            "discipline",
            "education",
            "mentoring",
            "philosophy"
        ]
    },
    {
        "text": "If someone were to harm my family or a friend or somebody I love, I would eat them. I might end up in jail for 500 years, but I would eat them.",
        "author": "Johnny Depp",
        "tags": [
            "humour",
            "love"
        ]
    },
    {
        "text": "Dreams are always crushing when they don't come true. But it's the simple dreams that are often the most painful because they seem so personal, so reasonable, so attainable. You're always close enough to touch, but never quite close enough to hold and it's enough to break your heart.",
        "author": "Nicholas Sparks,",
        "tags": [
            "life-dreams"
        ]
    },
    {
        "text": "When you trip over love, it is easy to get up. But when you fall in love, it is impossible to stand again.",
        "author": "Albert Einstein",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Be glad. Be good. Be brave.",
        "author": "Eleanor Hodgman Porter",
        "tags": []
    },
    {
        "text": "Well-read people are less likely to be evil.",
        "author": "Lemony Snicket,",
        "tags": []
    },
    {
        "text": "If he loved with all the powers of his puny being, he couldn't love as much in eighty years as I could in a day.",
        "author": "Emily Brontë,",
        "tags": []
    },
    {
        "text": "The thing I realize is, that it's not what you take, it's what you leave.",
        "author": "Jennifer Niven,",
        "tags": [
            "all-the-bright-places"
        ]
    },
    {
        "text": "Believe in your infinite potential. Your only limitations are those you set upon yourself.",
        "author": "Roy T. Bennett,",
        "tags": [
            "believe",
            "believe-in-yourself",
            "confidence",
            "empowerment",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-quotes",
            "limitations",
            "limits",
            "living",
            "motivation",
            "motivational",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "potential",
            "spiritual-growth",
            "spirituality",
            "talents"
        ]
    },
    {
        "text": "Five exclamation marks, the sure sign of an insane mind.",
        "author": "Terry Pratchett,",
        "tags": [
            "books",
            "humor"
        ]
    },
    {
        "text": "Feminism is the radical notion that women are human beings.",
        "author": "Cheris Kramarae",
        "tags": [
            "feminism",
            "women"
        ]
    },
    {
        "text": "Literature is a textually transmitted disease, normally contracted in childhood.",
        "author": "Jane Yolen,",
        "tags": [
            "childhood",
            "disease",
            "literature"
        ]
    },
    {
        "text": "I like this place and could willingly waste my time in it.",
        "author": "William Shakespeare",
        "tags": [
            "as-you-like-it",
            "celia",
            "nature",
            "poetry"
        ]
    },
    {
        "text": "If I read a book and it makes my whole body so cold no fire can ever warm me, I know that is poetry.",
        "author": "Emily Dickinson",
        "tags": []
    },
    {
        "text": "He was the crazy one who had painted himself black and defeated the world.She was the book thief without the words.Trust me, though, the words were on their way, and when they arrived, Liesel would hold them in her hands like the clouds, and she would wring them out like rain.",
        "author": "Markus Zusak,",
        "tags": []
    },
    {
        "text": "You are okay?\" he asked. \"Not eaten by monsters?\"\"Not even a little bit.\" I showed him that I still had both arms and both legs, and Tyson clapped happily.\"Yay!\" he said. \"Now we can eat peanut butter sandwiches and ride fish ponies! We can fight monsters and see Annabeth and make things go BOOM!\"I hoped he didn't mean all at the same time, but I told him absolutely, we'd have a lot of fun this summer.",
        "author": "Rick Riordan,",
        "tags": [
            "annabeth-chase",
            "olympians",
            "peanut-butter",
            "percy-jackson",
            "tyson"
        ]
    },
    {
        "text": "Jane, be still; don't struggle so like a wild, frantic bird, that is rending its own plumage in its desperation.\"\"I am no bird; and no net ensnares me; I am a free human being, with an independent will; which I now exert to leave you.",
        "author": "Charlotte Brontë ,",
        "tags": [
            "freedom",
            "inspirational",
            "literature"
        ]
    },
    {
        "text": "What is right is not always popular and what is popular is not always right.",
        "author": "Albert Einstein",
        "tags": []
    },
    {
        "text": "I am beginning to learn that it is the sweet, simple things of life which are the real ones after all.",
        "author": "Laura Ingalls Wilder",
        "tags": []
    },
    {
        "text": "Name the greatest of all inventors. Accident.",
        "author": "Mark Twain",
        "tags": [
            "inventing-humor"
        ]
    },
    {
        "text": "It stops here. With me and you. It ends with us.",
        "author": "Colleen Hoover,",
        "tags": []
    },
    {
        "text": "A man is but the product of his thoughts. What he thinks, he becomes.",
        "author": "Mahatma Gandhi",
        "tags": []
    },
    {
        "text": "The way to get started is to quit talking and begin doing.",
        "author": "Walt Disney",
        "tags": []
    },
    {
        "text": "Luxury is not a necessity to me, but beautiful and good things are.",
        "author": "Anais Nin",
        "tags": [
            "life"
        ]
    },
    {
        "text": "My life has a superb cast, but I cannot figure out the plot.",
        "author": "Ashleigh Brilliant",
        "tags": []
    },
    {
        "text": "It is not the length of life, but the depth.",
        "author": "Ralph Waldo Emerson",
        "tags": [
            "life"
        ]
    },
    {
        "text": "Maybe this world is another planet’s hell.",
        "author": "Aldous Huxley",
        "tags": [
            "hell",
            "life"
        ]
    },
    {
        "text": "Real generosity towards the future lies in giving all to the present.",
        "author": "Albert Camus,",
        "tags": [
            "carpe-diem",
            "future",
            "present"
        ]
    },
    {
        "text": "I don't mind making jokes, but I don't want to look like one.",
        "author": "Marilyn Monroe",
        "tags": [
            "appearance",
            "jokes",
            "marilyn-monroe"
        ]
    },
    {
        "text": "Do not set aside your happiness. Do not wait to be happy in the future. The best time to be happy is always now.",
        "author": "Roy T. Bennett",
        "tags": [
            "happiness",
            "happy",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "life",
            "life-quotes",
            "living",
            "living-now",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking"
        ]
    },
    {
        "text": "The desire to reach for the stars is ambitious. The desire to reach hearts is wise.",
        "author": "Maya Angelou",
        "tags": [
            "ambition",
            "inspirational",
            "wisdom"
        ]
    },
    {
        "text": "I think there should be a rule that everyone in the world should get a standing ovation at least once in their lives.",
        "author": "R.J. Palacio,",
        "tags": []
    },
    {
        "text": "Another belief of mine: that everyone else my age is an adult, whereas I am merely in disguise.",
        "author": "Margaret Atwood,",
        "tags": [
            "age-adult"
        ]
    },
    {
        "text": "All our dreams can come true, if we have the courage to pursue them.",
        "author": "Walt Disney",
        "tags": [
            "dream"
        ]
    },
    {
        "text": "We dream to give ourselves hope. To stop dreaming - well, that’s like saying you can never change your fate.",
        "author": "Amy Tan,",
        "tags": [
            "dream",
            "fate",
            "hope"
        ]
    },
    {
        "text": "Literature is a luxury; fiction is a necessity.",
        "author": "G.K. Chesterton",
        "tags": [
            "books",
            "literature",
            "on-fiction"
        ]
    },
    {
        "text": "The longer I live, the more I observe that carrying around anger is the most debilitating to the person who bears it.",
        "author": "Katharine Graham",
        "tags": []
    },
    {
        "text": "District 12: Where you can starve to death in safety.",
        "author": "Suzanne Collins,",
        "tags": [
            "young-adult-fiction"
        ]
    },
    {
        "text": "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",
        "author": "Marcus Aurelius,",
        "tags": [
            "attitude",
            "distress",
            "mind-over-body",
            "pain",
            "stoicism"
        ]
    },
    {
        "text": "Never let anyone make you feel ordinary.",
        "author": "Taylor Jenkins Reid,",
        "tags": []
    },
    {
        "text": "There's a bluebird in my heart that wants to get outbut I'm too tough for him,I say, stay in there, I'm not going to let anybody see you.",
        "author": "Charles Bukowski",
        "tags": []
    },
    {
        "text": "As long as she thinks of a man, nobody objects to a woman thinking.",
        "author": "Virginia Woolf,",
        "tags": [
            "clichés",
            "dignity",
            "double-standards",
            "empowerment",
            "feminism",
            "gender",
            "hypocrisy",
            "intelligence",
            "men",
            "misogyny",
            "self-determination",
            "social-norms",
            "stereotypes",
            "thought",
            "women"
        ]
    },
    {
        "text": "God alert!\" Blackjack yelled. \"It's the wine dude!Mr. D sighed in exasperation. \"The next person, or horse, who calls me the 'wine dude' will end up in a bottle of Merlot!",
        "author": "Rick Riordan,",
        "tags": [
            "blackjack",
            "dionysus",
            "percy-jackson"
        ]
    },
    {
        "text": "No good deed goes unpunished.",
        "author": "Oscar Wilde",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "If books could have more, give more, be more, show more, they would still need readers who bring to them sound and smell and light and all the rest that can’t be in books.\tThe book needs you.",
        "author": "Gary Paulsen,",
        "tags": [
            "books"
        ]
    },
    {
        "text": "I guess that's what saying good-bye is always like--like jumping off an edge. The worst part is making the choice to do it. Once you're in the air, there's nothing you can do but let go.",
        "author": "Lauren Oliver,",
        "tags": [
            "before-i-fall",
            "young-adult-fiction"
        ]
    },
    {
        "text": "In one aspect, yes, I believe in ghosts, but we create them. We haunt ourselves.",
        "author": "Laurie Halse Anderson,",
        "tags": [
            "ghosts",
            "haunt"
        ]
    },
    {
        "text": "What is straight? A line can be straight, or a street, but the human heart, oh, no, it's curved like a road through mountains.",
        "author": "Tennessee Williams,",
        "tags": []
    },
    {
        "text": "The only person you are destined to become is the person you decide to be.",
        "author": "Ralph Waldo Emerson",
        "tags": [
            "destiny",
            "self-determination"
        ]
    },
    {
        "text": "Death is so terribly final, while life is full of possibilities.",
        "author": "George R.R. Martin,",
        "tags": [
            "death",
            "life"
        ]
    },
    {
        "text": "Love is like a tree: it grows by itself, roots itself deeply in our being and continues to flourish over a heart in ruin. The inexplicable fact is that the blinder it is, the more tenacious it is. It is never stronger than when it is completely unreasonable.",
        "author": "Victor Hugo,",
        "tags": []
    },
    {
        "text": "But the Hebrew word, the word timshel—‘Thou mayest’— that gives a choice. It might be the most important word in the world. That says the way is open. That throws it right back on a man. For if ‘Thou mayest’—it is also true that ‘Thou mayest not.",
        "author": "John Steinbeck,",
        "tags": [
            "choice",
            "freedom",
            "freedom-of-choice",
            "hebrew",
            "language",
            "timshel"
        ]
    },
    {
        "text": "For to know a man's library is, in some measure, to know his mind.",
        "author": "Geraldine Brooks,",
        "tags": []
    },
    {
        "text": "I am broken and healing, but every piece of my heart belong to you.",
        "author": "Sarah J. Maas,",
        "tags": [
            "a-court-of-mist-and-fury"
        ]
    },
    {
        "text": "I’m on a roller coaster that only goes up, my friend.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "The man who moves a mountain begins by carrying away small stones.",
        "author": "Confucius,",
        "tags": []
    },
    {
        "text": "Demon pox, oh demon poxJust how is it acquired?One must go down to the bad part of townUntil one is very tired.Demon pox, oh demon pox, I had it all along—Not the pox, you foolish blocks,I mean this very song—For I was right, and you were wrong!\"\"Will!\" Charlotte shouted over the noise, \"Have you LOST YOUR MIND? CEASE THAT INFERNAL RACKET! Jem—\" Jem, rising to his feet, clapped his hands over Will's mouth. \"Do you promise to be quiet?\" he hissed into his friend's ear.Will nodded, blue eyes blazing. Tessa was staring at him in amazement; they all were. She had seen Will many things—amused, bitter, condescending, angry, pitying—but never giddy before.Jem let him go. \"All right, then.\"Will slid to the floor, his back against the armchair, and threw up his arms. \"A demon pox on all your houses!\" he announced, and yawned.\"Oh, God, weeks of pox jokes,\" said Jem. \"We're in for it now.",
        "author": "Cassandra Clare,",
        "tags": [
            "demon",
            "pox",
            "will"
        ]
    },
    {
        "text": "Good sex is like good bridge. If you don't have a good partner, you'd better have a good hand.",
        "author": "Mae West",
        "tags": [
            "humor",
            "sex"
        ]
    },
    {
        "text": "However many holy words you read, however many you speak, what good will they do you if you do not act on upon them?",
        "author": "Buddha Siddhartha Guatama Shakyamuni",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Unfortunately, the clock is ticking, the hours are going by. The past increases, the future recedes. Possibilities decreasing, regrets mounting.",
        "author": "Haruki Murakami,",
        "tags": [
            "clock",
            "future",
            "past",
            "possibilities",
            "ticking",
            "time"
        ]
    },
    {
        "text": "The course of true love never did run smooth; But, either it was different in blood,O cross! too high to be enthrall’d to low. Or else misgraffed in respect of years, O spite! too old to be engag’d to young. Or else it stood upon the choice of friends,O hell! to choose love by another’s eye.",
        "author": "William Shakespeare,",
        "tags": [
            "love",
            "true-love"
        ]
    },
    {
        "text": "Children learn more from what you are than what you teach.",
        "author": "W.E.B. DuBois",
        "tags": []
    },
    {
        "text": "One should always be drunk. That's all that matters...But with what? With wine, with poetry, or with virtue, as you chose. But get drunk.",
        "author": "Charles Baudelaire,",
        "tags": []
    },
    {
        "text": "Without you in my arms, I feel an emptiness in my soul. I find myself searching the crowds for your face - I know it's an impossibility, but I cannot help myself.",
        "author": "Nicholas Sparks,",
        "tags": [
            "grief",
            "love"
        ]
    },
    {
        "text": "The unfed mind devours itself.",
        "author": "Gore Vidal",
        "tags": []
    },
    {
        "text": "The mass of men lead lives of quiet desperation. What is called resignation is confirmed desperation. From the desperate city you go into the desperate country, and have to console yourself with the bravery of minks and muskrats. A stereotyped but unconscious despair is concealed even under what are called the games and amusements of mankind. There is no play in them, for this comes after work. But it is a characteristic of wisdom not to do desperate things..",
        "author": "Henry David Thoreau,",
        "tags": [
            "life",
            "self-actualization",
            "unrealized-potential"
        ]
    },
    {
        "text": "He allowed himself to be swayed by his conviction that human beings are not born once and for all on the day their mothers give birth to them, but that life obliges them over and over again to give birth to themselves.",
        "author": "Gabriel García Márquez,",
        "tags": [
            "birth",
            "identity",
            "life",
            "self"
        ]
    },
    {
        "text": "Sex is part of nature. I go along with nature.",
        "author": "Marilyn Monroe",
        "tags": []
    },
    {
        "text": "How do I love thee? Let me count the ways.I love thee to the depth and breadth and heightMy soul can reach",
        "author": "Elizabeth Barrett Browning",
        "tags": [
            "love",
            "sonnet"
        ]
    },
    {
        "text": "I love you as certain dark things are loved, secretly, between the shadow and the soul.",
        "author": "Pablo Neruda,",
        "tags": [
            "love",
            "love-quotes"
        ]
    },
    {
        "text": "Well, she's not responding to my advances,\" he observed more brightly than he felt, \"so she must be dead.\" \"Or she's a woman of good taste and sense.",
        "author": "Cassandra Clare,",
        "tags": [
            "clockwork-angel"
        ]
    },
    {
        "text": "If you're texting Magnus to say 'I think u r kewl,' I'm going to kill you.\"\"Who's Magnus?\" Max inquired.\"He's a warlock,\" said Alec.\"A sexy, sexy warlock,\" Isabelle told Max, ignoring Alec's look of total fury.\"But warlocks are bad,\" protested Max, looking baffled.\"Exactly,\" said Isabelle.",
        "author": "Cassandra Clare,",
        "tags": [
            "alec",
            "city-of-ashes",
            "isabelle",
            "magnus-bane",
            "max",
            "mortal-instruments"
        ]
    },
    {
        "text": "The greatness of a nation and its moral progress can be judged by the way its animals are treated.",
        "author": "Mahatma Gandhi",
        "tags": [
            "animals",
            "ethics",
            "gandhi",
            "morals"
        ]
    },
    {
        "text": "The role of a writer is not to say what we can all say, but what we are unable to say.",
        "author": "Anais Nin",
        "tags": []
    },
    {
        "text": "If you win, you need not have to explain...If you lose, you should not be there to explain!",
        "author": "Adolf Hitler",
        "tags": [
            "philosophy",
            "war"
        ]
    },
    {
        "text": "What draws people to be friends is that they see the same truth. They share it.",
        "author": "C. S. Lewis",
        "tags": [
            "love-friendship"
        ]
    },
    {
        "text": "Music is ... A higher revelation than all Wisdom & Philosophy",
        "author": "Ludwig van Beethoven",
        "tags": [
            "music",
            "philosophy",
            "revelation",
            "wisdom"
        ]
    },
    {
        "text": "She was a genius of sadness, immersing herself in it, separating its numerous strands, appreciating its subtle nuances. She was a prism through which sadness could be divided into its infinite spectrum.",
        "author": "Jonathan Safran Foer,",
        "tags": [
            "grief",
            "mourning",
            "sadness",
            "sorrow",
            "suffering"
        ]
    },
    {
        "text": "Now that she had nothing to lose, she was free.",
        "author": "Paulo Coelho,",
        "tags": [
            "freedom"
        ]
    },
    {
        "text": "Life is a mirror: if you frown at it, it frowns back; if you smile, it returns the greeting.",
        "author": "William Makepeace Thackeray",
        "tags": []
    },
    {
        "text": "Of course motivation is not permanent. But then, neither is bathing; but it is something you should do on a regular basis.",
        "author": "Zig Ziglar,",
        "tags": [
            "bathing",
            "humor",
            "motivation"
        ]
    },
    {
        "text": "The things we love destroy us every time, lad. Remember that.",
        "author": "George R.R. Martin,",
        "tags": [
            "love",
            "mormont"
        ]
    },
    {
        "text": "I know how devastated you must be to miss me, but leave a message, and I'll try to ease your agony",
        "author": "Richelle Mead,",
        "tags": [
            "adrian-ivashkov"
        ]
    },
    {
        "text": "...things get broken, and sometimes they get repaired, and in most cases, you realize that no matter what gets damaged, life rearranges itself to compensate for your loss, sometimes wonderfully.",
        "author": "Hanya Yanagihara,",
        "tags": []
    },
    {
        "text": "Imagination is like a muscle. I found out that the more I wrote, the bigger it got.",
        "author": "Philip José Farmer",
        "tags": [
            "imagination",
            "writing"
        ]
    },
    {
        "text": "I suffer from girlnextdooritis where the guy is friends with you and that's it.",
        "author": "Taylor Swift",
        "tags": [
            "relationships"
        ]
    },
    {
        "text": "The sunlight claps the earth, and the moonbeams kiss the sea: what are all these kissings worth, if thou kiss not me?",
        "author": "Percy Bysshe Shelley",
        "tags": [
            "kiss",
            "love",
            "nature"
        ]
    },
    {
        "text": "There is nothing more deceptive than an obvious fact.",
        "author": "Arthur Conan Doyle,",
        "tags": [
            "deception",
            "detection",
            "evidence",
            "facts",
            "obviousness",
            "sherlock-holmes"
        ]
    },
    {
        "text": "With enough courage, you can do without a reputation.",
        "author": "Margaret Mitchell",
        "tags": [
            "courage",
            "reputation"
        ]
    },
    {
        "text": "You believe in a book that has talking animals, wizards, witches, demons, sticks turning into snakes, burning bushes, food falling from the sky, people walking on water, and all sorts of magical, absurd and primitive stories, and you say that we are the ones that need help?",
        "author": "Mark Twain",
        "tags": [
            "books-bible"
        ]
    },
    {
        "text": "Women want love to be a novel. Men, a short story.",
        "author": "Daphne du Maurier",
        "tags": [
            "writing"
        ]
    },
    {
        "text": "Talking to a drunk person was like talking to an extremely happy, severely brain-damaged three-year-old.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "Listen with curiosity. Speak with honesty. Act with integrity. The greatest problem with communication is we don’t listen to understand. We listen to reply. When we listen with curiosity, we don’t listen with the intent to reply. We listen for what’s behind the words.",
        "author": "Roy T. Bennett,",
        "tags": [
            "action",
            "actions",
            "communication",
            "curiosity",
            "honest",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "integrity",
            "integrity-quotes",
            "leadership",
            "life",
            "life-quotes",
            "listen",
            "listening",
            "optimism",
            "optimistic",
            "positive",
            "positive-affirmation",
            "positive-life",
            "positive-thinking",
            "speak",
            "speaking"
        ]
    },
    {
        "text": "We dream in our waking moments, and walk in our sleep.",
        "author": "Nathaniel Hawthorne,",
        "tags": []
    },
    {
        "text": "There will be a few times in your life when all your instincts will tell you to do something, something that defies logic, upsets your plans, and may seem crazy to others. When that happens, you do it. Listen to your instincts and ignore everything else. Ignore logic, ignore the odds, ignore the complications, and just go for it.",
        "author": "Judith McNaught,",
        "tags": [
            "attitude",
            "inspirational-quotes",
            "life-lessons",
            "robert-foster"
        ]
    },
    {
        "text": "Crows remember human faces. They remember the people who feed them, who are kind to them. And the people who wrong them too. They don’t forget. They tell each other who to look after and who to watch out for.",
        "author": "Leigh Bardugo,",
        "tags": [
            "crooked-kingdom",
            "kaz-brekker",
            "leigh-bardugo"
        ]
    },
    {
        "text": "To die, it's easy. But you have to struggle for life.",
        "author": "Art Spiegelman,",
        "tags": []
    },
    {
        "text": "Freedom (n.): To ask nothing. To expect nothing. To depend on nothing.",
        "author": "Ayn Rand,",
        "tags": [
            "independence"
        ]
    },
    {
        "text": "Some things in life are out of your control. You can make it a party or a tragedy.",
        "author": "Nora Roberts,",
        "tags": []
    },
    {
        "text": "So light a fire!\" Harry choked. \"Yes...of course...but there's no wood!\" ... \"HAVE YOU GONE MAD!\" Ron bellowed. \"ARE YOU A WITCH OR NOT!",
        "author": "J.K. Rowling,",
        "tags": [
            "witch"
        ]
    },
    {
        "text": "Nobody gets everything in this life. You decide your priorities and you make your choices. I'd decided long ago that any cake I had would be eaten.",
        "author": "Donald E. Westlake,",
        "tags": []
    },
    {
        "text": "But until a person can say deeply and honestly, \"I am what I am today because of the choices I made yesterday,\" that person cannot say, \"I choose otherwise.",
        "author": "Stephen R. Covey,",
        "tags": [
            "choices",
            "misattributed-eleanor-roosevelt"
        ]
    },
    {
        "text": "Gus: \"It tastes like...\"Me: \"Food.\"Gus: \"Yes, precisely. It tastes like food, excellently prepared. But it does not taste, how do I put this delicately...?\"Me: \"It does not taste like God Himself cooked heaven into a series of five dishes which were then served to you accompanied by several luminous balls of fermented, bubbly plasma while actual and literal flower petals floated down around your canal-side dinner table.\"Gus: \"Nicely phrased.\"Gus's father: \"Our children are weird.\"My dad: \"Nicely phrased.",
        "author": "John Green,",
        "tags": [
            "food-discussion",
            "tfios"
        ]
    },
    {
        "text": "If you stay, I'll do whatever you want. I'll quit the band, go with you to New York. But if you need me to go away, I'll do that, too. I was talking to Liz and she said maybe coming back to your old life would be too painful, that maybe it'd be easier for you to erase us. And that would suck, but I'd do it. I can lose you like that if I don't lose you today. I'll let you go. If you stay.",
        "author": "Gayle Forman,",
        "tags": [
            "infatuation",
            "life",
            "love",
            "self-sacrifice"
        ]
    },
    {
        "text": "Too many of us are hung up on what we don't have, can't have, or won't ever have. We spend too much energy being down, when we could use that same energy – if not less of it – doing, or at least trying to do, some of the things we really want to do.",
        "author": "Terry McMillan ,",
        "tags": []
    },
    {
        "text": "The mountains are calling and I must go.",
        "author": "John Muir",
        "tags": [
            "nature"
        ]
    },
    {
        "text": "The most terrible poverty is loneliness, and the feeling of being unloved.",
        "author": "Mother Teresa",
        "tags": [
            "loneliness"
        ]
    },
    {
        "text": "Being with you never felt wrong. It's the one thing I did right. You're the one thing I did right.",
        "author": "Becca Fitzpatrick,",
        "tags": [
            "crescendo",
            "love",
            "patch"
        ]
    },
    {
        "text": "If you are a student you should always get a good nights sleep unless you have come to the good part of your book, and then you should stay up all night and let your schoolwork fall by the wayside, a phrase which means 'flunk'.",
        "author": "Lemony Snicket",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "I never forget a face, but in your case I'll be glad to make an exception.",
        "author": "Groucho Marx",
        "tags": []
    },
    {
        "text": "I decided it is better to scream. Silence is the real crime against humanity.",
        "author": "Nadezhda Mandelstam,",
        "tags": [
            "silence",
            "voice"
        ]
    },
    {
        "text": "I'm happy. Which often looks like crazy.",
        "author": "David Henry Hwang,",
        "tags": [
            "happiness"
        ]
    },
    {
        "text": "Nothing takes the taste out of peanut butter quite like unrequited love.",
        "author": "Charles M. Schulz",
        "tags": [
            "humor",
            "love"
        ]
    },
    {
        "text": "If there's one thing I've learned, it's this: We all want everything to be okay. We don't even wish so much for fantastic or marvelous or outstanding. We will happily settle for okay, because most of the time, okay is enough.",
        "author": "David Levithan,",
        "tags": []
    },
    {
        "text": "A girl calls and asks, \"Does it hurt very much to die?\"\"Well, sweetheart,\" I tell her, \"yes, but it hurts a lot more to keep living.",
        "author": "Chuck Palahniuk,",
        "tags": [
            "death",
            "living"
        ]
    },
    {
        "text": "That which you believe becomes your world.",
        "author": "Richard Matheson,",
        "tags": []
    },
    {
        "text": "You could say sorry,\" suggested Harry bluntly. \"What, and get attacked by another flock of canaries?\" muttered Ron.\"What did you have to imitate her for?\"\"She laughed at my mustache!\"\"So did I, it was the stupidest thing I've ever seen.",
        "author": "J.K. Rowling,",
        "tags": [
            "humor-mustache"
        ]
    },
    {
        "text": "A concept is a brick. It can be used to build a courthouse of reason. Or it can be thrown through the window.",
        "author": "Gilles Deleuze,",
        "tags": [
            "anarchy",
            "freedom",
            "inspirational",
            "lateral-thinking",
            "philosophy",
            "rationalism"
        ]
    },
    {
        "text": "When you read a book, you hold another's mind in your hands.",
        "author": "James Burke",
        "tags": []
    },
    {
        "text": "A short story is a different thing altogether – a short story is like a quick kiss in the dark from a stranger.",
        "author": "Stephen King,",
        "tags": [
            "reading",
            "writing"
        ]
    },
    {
        "text": "Lord, what fools these mortals be!",
        "author": "William Shakespeare,",
        "tags": [
            "comedy",
            "elizabethan",
            "robin-goodfellow"
        ]
    },
    {
        "text": "Let no one ever come to you without leaving better and happier. Be the living expression of God's kindness: kindness in your face, kindness in your eyes, kindness in your smile.",
        "author": "Mother Teresa",
        "tags": [
            "happiness"
        ]
    },
    {
        "text": "Will rolled up his sleeves. \"We'll probably have to knock down the door--\" \"Or,\" said Jem, reaching out and giving the knob a twist, \"not.\" The door swung open onto a rectangle of darkness. \"Now, that's simply laziness,\" said Will.",
        "author": "Cassandra Clare,",
        "tags": [
            "clockwork-angel"
        ]
    },
    {
        "text": "Have you tried talking to her?\" \"No. We've been punching her in the face repeatedly. What? You don't think that will work?",
        "author": "Cassandra Clare,",
        "tags": [
            "humor-sarcasm"
        ]
    },
    {
        "text": "You - you alone will have the stars as no one else has them...In one of the stars I shall be living. In one of them I shall be laughing. And so it will be as if all the stars were laughing, when you look at the sky at night...You - only you - will have stars that can laugh.",
        "author": "Antoine de Saint-Exupéry,",
        "tags": []
    },
    {
        "text": "I guess by now I should know enough about loss to realize that you never really stop missing someone-you just learn to live around the huge gaping hole of their absence.",
        "author": "Alyson Noel,",
        "tags": [
            "alyson",
            "evermore",
            "immortals",
            "loss",
            "noel"
        ]
    },
    {
        "text": "True friends are always together in spirit.",
        "author": "L.M. Montgomery,",
        "tags": [
            "friends",
            "friendship",
            "together",
            "together-in-spirit",
            "true-friends"
        ]
    },
    {
        "text": "It is better to offer no excuse than a bad one.",
        "author": "George Washington",
        "tags": [
            "confession",
            "excuses",
            "honesty",
            "lies",
            "lying",
            "truth"
        ]
    },
    {
        "text": "How happy is the blameless vestal’s lot!The world forgetting, by the world forgot.Eternal sunshine of the spotless mind!Each pray’r accepted, and each wish resign’d",
        "author": "Alexander Pope,",
        "tags": [
            "innocence"
        ]
    },
    {
        "text": "Humor is reason gone mad.",
        "author": "Groucho Marx",
        "tags": [
            "humor",
            "reason"
        ]
    },
    {
        "text": "My religion is very simple. My religion is kindness.",
        "author": "Dalai Lama XIV",
        "tags": [
            "buddism",
            "kindness",
            "religion"
        ]
    },
    {
        "text": "After a good dinner one can forgive anybody, even one's own relations.",
        "author": "Oscar Wilde,",
        "tags": [
            "family",
            "food",
            "thanksgiving"
        ]
    },
    {
        "text": "There is no such thing as a \"broken family.\" Family is family, and is not determined by marriage certificates, divorce papers, and adoption documents. Families are made in the heart. The only time family becomes null is when those ties in the heart are cut. If you cut those ties, those people are not your family. If you make those ties, those people are your family. And if you hate those ties, those people will still be your family because whatever you hate will always be with you.",
        "author": "C. JoyBell C.",
        "tags": [
            "broken-families",
            "divorce",
            "family",
            "family-ties",
            "forgiveness",
            "hate",
            "inspirational-life",
            "inspirational-quotes",
            "letting-go",
            "marriage",
            "moving-on",
            "soul-ties",
            "the-nature-of-family",
            "true-family"
        ]
    },
    {
        "text": "Why do beautiful songs make you sad?' 'Because they aren't true.' 'Never?' 'Nothing is beautiful and true.",
        "author": "Jonathan Safran Foer,",
        "tags": [
            "beauty",
            "music",
            "sadness"
        ]
    },
    {
        "text": "Sometimes, the best way to help someone is just to be near them.",
        "author": "Veronica Roth,",
        "tags": [
            "comfort"
        ]
    },
    {
        "text": "To survive, you must tell stories.",
        "author": "Umberto Eco,",
        "tags": [
            "stories-writing"
        ]
    },
    {
        "text": "No one is useless in this world who lightens the burdens of another.",
        "author": "Charles Dickens",
        "tags": [
            "giving",
            "helping-others"
        ]
    },
    {
        "text": "Not everything that is faced can be changed, but nothing can be changed until it is faced.",
        "author": "James Baldwin",
        "tags": []
    },
    {
        "text": "We do not remember days, we remember moments.",
        "author": "Jennifer Niven,",
        "tags": []
    },
    {
        "text": "You get what anybody gets - you get a lifetime.",
        "author": "Neil Gaiman,",
        "tags": [
            "life"
        ]
    },
    {
        "text": "Always be a first rate version of yourself and not a second rate version of someone else.",
        "author": "Judy Garland",
        "tags": [
            "be-yourself",
            "greatness",
            "individuality"
        ]
    },
    {
        "text": "Adults are always asking little kids what they want to be when they grow up ’cause they’re looking for ideas.",
        "author": "Paula Poundstone",
        "tags": []
    },
    {
        "text": "But I believe in true love, you know? I don't believe that everybody gets to keep their eyes or not get sick or whatever, but everybody should have true love, and it should last at least as long as your life does.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "Throw your dreams into space like a kite, and you do not know what it will bring back, a new life, a new friend, a new love, a new country.",
        "author": "Anais Nin",
        "tags": [
            "dreams",
            "life",
            "love"
        ]
    },
    {
        "text": "This is where it all begins. Everything starts here, today.",
        "author": "David Nicholls,",
        "tags": [
            "hope",
            "love"
        ]
    },
    {
        "text": "She looked at nice young men as if she could smell their stupidity.",
        "author": "Flannery O'Connor",
        "tags": []
    },
    {
        "text": "Life is really simple, but we insist on making it complicated.",
        "author": "Confucius",
        "tags": [
            "complexity",
            "philosophy",
            "simplicity"
        ]
    },
    {
        "text": "The easy confidence with which I know another man's religion is folly teaches me to suspect that my own is also.",
        "author": "Mark Twain",
        "tags": [
            "humor",
            "philosophy",
            "religion"
        ]
    },
    {
        "text": "When you go into the ER, one of the first things they ask you to do is rate your pain on a scale of one to ten, and from there they decide which drugs to use and how quickly to use them. I'd been asked this question hundreds of times over the years, and I remember once early on when I couldn't get my breath and it felt like my chest was on fire, flames licking the inside of my ribs fighting for a way to burn out of my body, my parents took me to the ER. nurse asked me about the pain, and I couldn't even speak, so I held up nine fingers.Later, after they'd given me something, the nurse came in and she was kind of stroking my head while she took my blood pressure and said, \"You know how I know you're a fighter? You called a ten a nine.\"But that wasn't quite right. I called it a nine because I was saving my ten. And here it was, the great and terrible ten, slamming me again and again as I lay still and alone in my bed staring at the ceiling, the waves tossing me against the rocks then pulling me back out to sea so they could launch me again into the jagged face of the cliff, leaving me floating faceup on the water, undrowned.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "One could not count the moons that shimmer on her roofs,Or the thousand splendid suns that hide behind her walls.",
        "author": "Khaled Hosseini,",
        "tags": []
    },
    {
        "text": "Sometimes you lose a battle. But mischief always wins the war",
        "author": "John Green,",
        "tags": [
            "alaska-young"
        ]
    },
    {
        "text": "Happiness is not the absence of problems, it's the ability to deal with them.",
        "author": "Steve Maraboli,",
        "tags": [
            "empowerment",
            "happiness",
            "inspirational",
            "life-lessons",
            "motivational",
            "problems"
        ]
    },
    {
        "text": "What is a person, if not the marks they leave behind?",
        "author": "V.E. Schwab,",
        "tags": []
    },
    {
        "text": "What is honor compared to a woman's love? What is duty against the feel of a newborn son in your arms . . . or the memory of a brother's smile? Wind and words. Wind and words. We are only human, and the gods have fashioned us for love. That is our great glory, and our great tragedy.",
        "author": "George R.R. Martin,",
        "tags": []
    },
    {
        "text": "In the world I amAlways a strangerI do not understand its languageIt does not understand my silence",
        "author": "Bei Dao",
        "tags": []
    },
    {
        "text": "There is a saying in Tibetan, 'Tragedy should be utilized as a source of strength.'No matter what sort of difficulties, how painful experience is, if we lose our hope, that's our real disaster.",
        "author": "Dalai Lama XIV",
        "tags": [
            "hope",
            "life",
            "pain",
            "strength",
            "tragedy"
        ]
    },
    {
        "text": "Morality is simply the attitude we adopt towards people we personally dislike.",
        "author": "Oscar Wilde,",
        "tags": [
            "morality",
            "philosophy"
        ]
    },
    {
        "text": "I hope you find someone you can't live without.I really do. And I hope you never have to know what it's like to have to try and live without them.",
        "author": "Kiera Cass,",
        "tags": [
            "america",
            "the-selection"
        ]
    },
    {
        "text": "So we shall let the reader answer this question for himself: who is the happier man, he who has braved the storm of life and lived or he who has stayed securely on shore and merely existed?",
        "author": "Hunter S. Thompson",
        "tags": [
            "gonzo",
            "happiness",
            "risk"
        ]
    },
    {
        "text": "So it’s true, when all is said and done, grief is the price we pay for love.",
        "author": "E.A. Bucchianeri,",
        "tags": [
            "grief",
            "grief-inspirational",
            "heartbreak",
            "life",
            "life-lessons",
            "love",
            "love-hurts",
            "love-story",
            "price-of-love",
            "prices",
            "romance",
            "sad",
            "sad-but-true",
            "sadness",
            "true-love"
        ]
    },
    {
        "text": "I am not an angel,' I asserted; 'and I will not be one till I die: I will be myself. Mr. Rochester, you must neither expect nor exact anything celestial of me - for you will not get it, any more than I shall get it of you: which I do not at all anticipate.",
        "author": "Charlotte Brontë,",
        "tags": [
            "character",
            "empowerment",
            "flaws",
            "freedom",
            "gender",
            "ideal-woman",
            "identity",
            "image",
            "independence",
            "integrity",
            "love",
            "men",
            "realism",
            "romance",
            "self-awareness",
            "self-determination",
            "women"
        ]
    },
    {
        "text": "Reading is like thinking, like praying, like talking to a friend, like expressing your ideas, like listening to other people's ideas, like listening to music, like looking at the view, like taking a walk on the beach.",
        "author": "Roberto Bolaño,",
        "tags": [
            "books",
            "reading"
        ]
    },
    {
        "text": "The Darkling slumped back in his chair. Fine, he said with a weary shrug. Make me your villain.",
        "author": "Leigh Bardugo,",
        "tags": [
            "the-darkling"
        ]
    },
    {
        "text": "There are perhaps many causes worth dying for, but to me, certainly, there are none worth killing for.",
        "author": "Albert Dietrich,",
        "tags": [
            "martyrdom",
            "misattributed-to-albert-camus",
            "pacifism",
            "principles",
            "war"
        ]
    },
    {
        "text": "Ask for what you want and be prepared to get it!",
        "author": "Maya Angelou",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "You never know what life is like, until you have lived it.",
        "author": "Marilyn Monroe",
        "tags": []
    },
    {
        "text": "Man often becomes what he believes himself to be. If I keep on saying to myself that I cannot do a certain thing, it is possible that I may end by really becoming incapable of doing it. On the contrary, if I have the belief that I can do it, I shall surely acquire the capacity to do it even if I may not have it at the beginning.",
        "author": "Mahatma Gandhi",
        "tags": [
            "abilities",
            "capability",
            "confidence",
            "optimism",
            "possibility",
            "skills",
            "strength"
        ]
    },
    {
        "text": "Sleep, those little slices of death — how I loathe them.",
        "author": "Edgar Allan Poe",
        "tags": [
            "death",
            "sleep"
        ]
    },
    {
        "text": "The mind I love must have wild places.",
        "author": "Katherine Mansfield",
        "tags": []
    },
    {
        "text": "When we are children we seldom think of the future. This innocence leaves us free to enjoy ourselves as few adults can. The day we fret about the future is the day we leave our childhood behind.",
        "author": "Patrick Rothfuss,",
        "tags": [
            "childhood",
            "growing-up",
            "innocence"
        ]
    },
    {
        "text": "I want everyone to meet you. You're my favorite person of all time.",
        "author": "Rainbow Rowell,",
        "tags": []
    },
    {
        "text": "I feel like someone breathed new air into my lungs. I am not Abnegation. I am not Dauntless. I am Divergent.",
        "author": "Veronica Roth,",
        "tags": []
    },
    {
        "text": "Don't waste your love on somebody, who doesn't value it.",
        "author": "William Shakespeare,",
        "tags": [
            "love",
            "romeo-and-juliet",
            "values",
            "waste"
        ]
    },
    {
        "text": "The thought of suicide is a great consolation: by means of it one gets through many a dark night.",
        "author": "Nietzsche",
        "tags": [
            "suicide"
        ]
    },
    {
        "text": "Poetry is what happens when nothing else can.",
        "author": "Charles Bukowski",
        "tags": [
            "poetry"
        ]
    },
    {
        "text": "That's the thing about girls. Every time they do something pretty, even if they're not much to look at, or even if they're sort of stupid, you fall in love with them, and then you never know where the hell you are. Girls. Jesus Christ. They can drive you crazy. They really can.",
        "author": "J.D. Salinger,",
        "tags": [
            "girls",
            "holden"
        ]
    },
    {
        "text": "What is that feeling when you're driving away from people and they recede on the plain till you see their specks dispersing? - it's the too-huge world vaulting us, and it's good-bye. But we lean forward to the next crazy venture beneath the skies.",
        "author": "Jack Kerouac,",
        "tags": [
            "adventure",
            "goodbye",
            "travel"
        ]
    },
    {
        "text": "I'm always happy,\" Sasha said. \"Sometimes I just forget.",
        "author": "Jennifer Egan,",
        "tags": []
    },
    {
        "text": "Every weirdo in the world is on my wavelength.",
        "author": "Thomas Pynchon",
        "tags": []
    },
    {
        "text": "What do you fear, lady?\" [Aragorn] asked. \"A cage,\" [Éowyn] said. \"To stay behind bars, until use and old age accept them, and all chance of doing great deeds is gone beyond recall or desire.",
        "author": "J.R.R. Tolkien,",
        "tags": [
            "caged",
            "fear",
            "gender-roles"
        ]
    },
    {
        "text": "You may tell a tale that takes up residence in someone's soul, becomes their blood and self and purpose. That tale will move them and drive them and who knows that they might do because of it, because of your words. That is your role, your gift.",
        "author": "Erin Morgenstern,",
        "tags": [
            "inspirational",
            "story-teller",
            "storytelling",
            "your-gift"
        ]
    },
    {
        "text": "The mystery of life isn't a problem to solve, but a reality to experience.",
        "author": "Frank Herbert,",
        "tags": [
            "dune"
        ]
    },
    {
        "text": "To give pleasure to a single heart by a single act is better than a thousand heads bowing in prayer.",
        "author": "Mahatma Gandhi",
        "tags": []
    },
    {
        "text": "We don’t need a list of rights and wrongs, tables of dos and don’ts: we need books, time, and silence. Thou shalt not is soon forgotten, but Once upon a time lasts forever.",
        "author": "Philip Pullman",
        "tags": [
            "books",
            "inspirational"
        ]
    },
    {
        "text": "Others have seen what is and asked why. I have seen what could be and asked why not.",
        "author": "Pablo Picasso,",
        "tags": []
    },
    {
        "text": "Poetry is what gets lost in translation.",
        "author": "Robert Frost",
        "tags": [
            "poetry"
        ]
    },
    {
        "text": "We are all born sexual creatures,thank God, but it's a pity so many people despise and crush this natural gift.",
        "author": "Marilyn Monroe",
        "tags": [
            "beauty",
            "femininity",
            "sex"
        ]
    },
    {
        "text": "It's only those who do nothing that make no mistakes, I suppose.",
        "author": "Joseph Conrad,",
        "tags": []
    },
    {
        "text": "We live as we dream--alone....",
        "author": "Joseph Conrad,",
        "tags": [
            "dream",
            "loneliness"
        ]
    },
    {
        "text": "The starting point of all achievement is DESIRE. Keep this constantly in mind. Weak desire brings weak results, just as a small fire makes a small amount of heat.",
        "author": "Napoleon Hill,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "If you want to be happy, be.",
        "author": "Tolstoy Leo",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Learn the rules, break the rules, make up new rules, break the new rules.",
        "author": "Marvin Bell",
        "tags": []
    },
    {
        "text": "To lose balance sometimes for love is part of living a balancedlife.",
        "author": "Elizabeth Gilbert,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "When I'm good, I'm very good, but when I'm bad, I'm better.",
        "author": "Mae West",
        "tags": [
            "goodness",
            "sexuality",
            "virtue"
        ]
    },
    {
        "text": "I'm afraid that sometimes you'll play lonely games too. Games you can't win 'cause you'll play against you.",
        "author": "Dr. Seuss",
        "tags": []
    },
    {
        "text": "Because,' she said, 'when you're scared but you still do it anyway, that's brave.",
        "author": "Neil Gaiman,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "Dare to live the life you have dreamed for yourself. Go forward and make your dreams come true.",
        "author": "Ralph Waldo Emerson",
        "tags": [
            "dreams"
        ]
    },
    {
        "text": "Ideally, what should be said to every child, repeatedly, throughout his or her school life is something like this: 'You are in the process of being indoctrinated. We have not yet evolved a system of education that is not a system of indoctrination. We are sorry, but it is the best we can do. What you are being taught here is an amalgam of current prejudice and the choices of this particular culture. The slightest look at history will show how impermanent these must be. You are being taught by people who have been able to accommodate themselves to a regime of thought laid down by their predecessors. It is a self-perpetuating system. Those of you who are more robust and individual than others will be encouraged to leave and find ways of educating yourself — educating your own judgements. Those that stay must remember, always, and all the time, that they are being moulded and patterned to fit into the narrow and particular needs of this particular society.",
        "author": "Doris Lessing,",
        "tags": [
            "conformity",
            "education",
            "feminism",
            "knowledge-power",
            "quip",
            "school"
        ]
    },
    {
        "text": "Imagination is everything. It is the preview of life's coming attractions.",
        "author": "Albert Einstein",
        "tags": [
            "creativity",
            "fantasy",
            "imagination",
            "inspirational"
        ]
    },
    {
        "text": "If I am not good to myself, how can I expect anyone else to be good to me?",
        "author": "Maya Angelou",
        "tags": []
    },
    {
        "text": "What's terrible is to pretend that second-rate is first-rate. To pretend that you don't need love when you do; or you like your work when you know quite well you're capable of better.",
        "author": "Doris Lessing,",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "I am going to take this bucket of water and pour it on the flames of hell, and then I am going to use this torch to burn down the gates of paradise so that people will not love God for want of heaven or fear of hell, but because He is God.",
        "author": "John Green,",
        "tags": []
    },
    {
        "text": "Threats are the last resort of a man with no vocabulary.",
        "author": "Tamora Pierce,",
        "tags": []
    },
    {
        "text": "I think and think and think, I‘ve thought myself out of happiness one million times, but never once into it.",
        "author": "Jonathan Safran Foer",
        "tags": [
            "happiness",
            "thinking",
            "wisedom"
        ]
    },
    {
        "text": "People are capable, at any time in their lives, of doing what they dream of.",
        "author": "Paulo Coelho,",
        "tags": []
    },
    {
        "text": "The sad truth is the truth is sad.",
        "author": "Lemony Snicket,",
        "tags": []
    },
    {
        "text": "Life has no remote....get up and change it yourself!",
        "author": "Mark A. Cooper,",
        "tags": [
            "confidence",
            "inspirational",
            "inspirational-attitude",
            "life",
            "life-philosophy",
            "optimism",
            "power-of-words"
        ]
    },
    {
        "text": "Man, when you lose your laugh you lose your footing.",
        "author": "Ken Kesey,",
        "tags": [
            "relationships"
        ]
    },
    {
        "text": "We should meet in another life, we should meet in air, me and you.",
        "author": "Sylvia Plath",
        "tags": [
            "couples",
            "friendship"
        ]
    },
    {
        "text": "Every deep thinker is more afraid of being understood than of being misunderstood.",
        "author": "Friedrich Neitzsche",
        "tags": []
    },
    {
        "text": "Passion makes a person stop eating, sleeping, working, feeling at peace. A lot of people are frightened because, when it appears, it demolishes all the old things it finds in its path. No one wants their life thrown into chaos. That is why a lot of people keep that threat under control, and are somehow capable of sustaining a house or a structure that is already rotten. They are the engineers of the superseded. Other people think exactly the opposite: they surrender themselves without a second thought, hoping to find in passion the solutions to all their problems. They make the other person responsible for their happiness and blame them for their possible unhappiness. They are either euphoric because something marvelous has happened or depressed because something unexpected has just ruined everything. Keeping passion at bay or surrendering blindly to it - which of these two attitudes is the least destructive? I don't know.",
        "author": "Paulo Coelho,",
        "tags": []
    },
    {
        "text": "I have not broken your heart - you have broken it; and in breaking it, you have broken mine.",
        "author": "Emily Brontë,",
        "tags": [
            "heart",
            "heartbroken"
        ]
    },
    {
        "text": "Silly things do cease to be silly if they are done by sensible people in an impudent way.",
        "author": "Jane Austen,",
        "tags": []
    },
    {
        "text": "Help others without any reason and give without the expectation of receiving anything in return.",
        "author": "Roy T. Bennett,",
        "tags": [
            "give",
            "giving",
            "inspiration",
            "inspirational",
            "inspirational-quotes",
            "inspire",
            "inspiring",
            "kindness",
            "life",
            "life-quotes",
            "living"
        ]
    },
    {
        "text": "I just want you to know that you’re very special… and the only reason I’m telling you is that I don’t know if anyone else ever has.",
        "author": "Stephen Chbosky,",
        "tags": [
            "inspirational",
            "stephen-chbosky",
            "the-perks-of-being-a-wallflower"
        ]
    },
    {
        "text": "Some things are more precious because they don't last long.",
        "author": "Oscar Wilde,",
        "tags": []
    },
    {
        "text": "Stop fighting me!\" he said, trying to pull on the arm he held.He was in a precarious position himself, straddling the rail as he tried to lean over far enough to get me and actually hold onto me.Let go of me! I yelled back.But he was too strong and managed to haul most of me over the rail, enough so that I wasn’t in total danger of falling again.See, here’s the thing. In that moment before I let go, I really had been contemplating my death. I’d come to terms with it and accepted it. I also, however, had known Dimitri might do something exactly like this. He was just that fast and that good. That was why I was holding my stake in the hand that was dangling free.I looked him in the eye. \"I will always love you.\"Then I plunged the stake into his chest.It wasn’t as precise a blow as I would have liked, not with the skilled way he was dodging. I struggled to get the stake in deep enough to his heart, unsure if I could do it from this angle. Then, his struggles stopped. His eyes stared at me, stunned, and his lips parted, almost into a smile, albeit a grisly and pained one.\"That’s what I was supposed to say. . . he gasped out.Those were his last words.",
        "author": "Richelle Mead,",
        "tags": [
            "blood",
            "bridge",
            "death",
            "dhampir",
            "dimitri",
            "love",
            "magic",
            "promise",
            "rose",
            "stake",
            "strigoi"
        ]
    },
    {
        "text": "I don't want to be married just to be married. I can't think of anything lonelier than spending the rest of my life with someone I can't talk to, or worse, someone I can't be silent with.",
        "author": "Mary Ann Shaffer,",
        "tags": [
            "companionship",
            "marriage",
            "silence",
            "talk"
        ]
    },
    {
        "text": "Well, I must endure the presence of a few caterpillars if I wish to become acquainted with the butterflies.",
        "author": "Antoine de Saint-Exupéry,",
        "tags": [
            "butterflies",
            "caterpillars",
            "philosophy"
        ]
    },
    {
        "text": "Listen up - there's no war that will end all wars.",
        "author": "Haruki Murakami,",
        "tags": []
    },
    {
        "text": "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of light, it was the season of darkness, it was the spring of hope, it was the winter of despair.",
        "author": "Charles Dickens,",
        "tags": [
            "comment-of-the-times"
        ]
    },
    {
        "text": "Sometimes it takes a good fall to really know where you stand",
        "author": "Hayley Williams",
        "tags": [
            "falling",
            "knowing",
            "lesson-on-living",
            "life",
            "paramore",
            "singer",
            "stand",
            "success",
            "truth",
            "understanding"
        ]
    },
    {
        "text": "I didn’t go to religion to make me happy. I always knew a bottle of Port would do that. If you want a religion to make you feel really comfortable, I certainly don’t recommend Christianity.",
        "author": "C. S. Lewis",
        "tags": [
            "christianity"
        ]
    },
    {
        "text": "This is what we call love. When you are loved, you can do anything in creation. When you are loved, there's no need at all to understand what's happening, because everything happens within you.",
        "author": "Paulo Coelho,",
        "tags": [
            "love"
        ]
    },
    {
        "text": "Oh, we're playing nice now? Shall we have tea first? Brew up a nice pot of kiss-my-ass?",
        "author": "Julie Kagawa,",
        "tags": []
    },
    {
        "text": "And then I felt sad because I realized that once people are broken in certain ways, they can't ever be fixed, and this is something nobody ever tells you when you are young and it never fails to surprise you as you grow older as you see the people in your life break one by one. You wonder when your turn is going to be, or if it's already happened.",
        "author": "Douglas Coupland,",
        "tags": [
            "life-lessons"
        ]
    },
    {
        "text": "We are travelers on a cosmic journey,stardust,swirling and dancing in the eddies and whirlpools of infinity. Life is eternal. We have stopped for a moment to encounter each other, to meet, to love, to share.This is a precious moment. It is a little parenthesis in eternity.",
        "author": "Paulo Coelho,",
        "tags": [
            "eternity",
            "travelers"
        ]
    },
    {
        "text": "Peace cannot be kept by force; it can only be achieved by understanding.",
        "author": "Albert Einstein",
        "tags": [
            "force",
            "peace"
        ]
    },
    {
        "text": "History does not always repeat itself. Sometimes it just yells, 'Can't you remember anything I told you?' and lets fly with a club.",
        "author": "John W. Campbell Jr.",
        "tags": []
    },
    {
        "text": "Whenever you think or you believe or you know, you're a lot of other people: but the moment you feel, you're nobody-but-yourself.",
        "author": "e.e. cummings",
        "tags": []
    },
    {
        "text": "If everybody minded their own business, the world would go around a great deal faster than it does.",
        "author": "Lewis Caroll,",
        "tags": [
            "alice-in-wonderland",
            "carroll"
        ]
    },
    {
        "text": "Never leave a friend behind. Friends are all we have to get us through this life--and they are the only things from this world that we could hope to see in the next.",
        "author": "Dean Koontz,",
        "tags": [
            "friendship"
        ]
    },
    {
        "text": "sex is the consolation you have when you can't have love",
        "author": "Gabriel García Márquez",
        "tags": [
            "desire",
            "loneliness",
            "love",
            "lust",
            "passion",
            "sex"
        ]
    },
    {
        "text": "May your trails be crooked, winding, lonesome, dangerous, leading to the most amazing view.",
        "author": "Edward Abbey",
        "tags": []
    },
    {
        "text": "Please, my darling Inej, treasure of my heart, won’t you do me the honor of acquiring me a new hat?",
        "author": "Leigh Bardugo,",
        "tags": []
    },
    {
        "text": "Of course I’ll hurt you. Of course you’ll hurt me. Of course we will hurt each other. But this is the very condition of existence. To become spring, means accepting the risk of winter. To become presence, means accepting the risk of absence.",
        "author": "Antoine de Saint-Exupéry,",
        "tags": [
            "absence",
            "existence",
            "fear",
            "hurt",
            "love",
            "risk"
        ]
    },
    {
        "text": "You're something between a dream and a miracle.",
        "author": "Elizabeth Barrett Browning",
        "tags": [
            "dream"
        ]
    },
    {
        "text": "If you try to fail, and succeed, which have you done?",
        "author": "George Carlin",
        "tags": []
    },
    {
        "text": "The unhappiest people in this world, are those who care the most about what other people think.",
        "author": "C. JoyBell C.",
        "tags": [
            "freedom",
            "inspirational",
            "inspirational-attitude",
            "inspirational-quotes",
            "life-and-living",
            "society",
            "unhappiness",
            "unhappy-life"
        ]
    },
    {
        "text": "What's up?\" I asked.You tell me,\" he said. \"You were the one about ready to start making out with Adrian.\"It was an experiment,\" I said. \"It was part of my therapy.\"What the hell kind of therapy are you in?",
        "author": "Richelle Mead,",
        "tags": [
            "fight",
            "humor"
        ]
    },
    {
        "text": "I talk to God but the sky is empty.",
        "author": "Sylvia Plath",
        "tags": [
            "doubt",
            "faith",
            "god",
            "prayer"
        ]
    },
    {
        "text": "Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done something wonderful... that's what matters to me.",
        "author": "Steve Jobs",
        "tags": []
    },
    {
        "text": "I clench his hands to the point of pain. \"Stay with me.\"His pupils contract to pinpoints, dialate again rapidly, and then return to something resembling normalcy. \"Always,\" he murmurs.",
        "author": "Suzanne Collins,",
        "tags": []
    },
    {
        "text": "Spring is the time of plans and projects.",
        "author": "Leo Tolstoy,",
        "tags": [
            "spring"
        ]
    },
    {
        "text": "Seek freedom and become captive of your desires. Seek discipline and find your liberty.",
        "author": "Frank Herbert,",
        "tags": [
            "paradox"
        ]
    },
    {
        "text": "I like it when a flower or a little tuft of grass grows through a crack in the concrete. It's so fuckin' heroic.",
        "author": "George Carlin",
        "tags": [
            "grass",
            "hero",
            "heroism",
            "individualism",
            "individuality",
            "nature"
        ]
    },
    {
        "text": "A man should hear a little music, read a little poetry, and see a fine picture every day of his life, in order that worldly cares may not obliterate the sense of the beautiful which God has implanted in the human soul.",
        "author": "Johann Wolfgang von Goethe",
        "tags": [
            "art",
            "beauty",
            "music",
            "wonder"
        ]
    },
    {
        "text": "There is no point treating a depressed person as though she were just feeling sad, saying, 'There now, hang on, you'll get over it.' Sadness is more or less like a head cold- with patience, it passes. Depression is like cancer.",
        "author": "Barbara Kingsolver,",
        "tags": [
            "depression",
            "sadness"
        ]
    },
    {
        "text": "Dogs are our link to paradise. They don't know evil or jealousy or discontent. To sit with a dog on a hillside on a glorious afternoon is to be back in Eden, where doing nothing was not boring--it was peace.",
        "author": "Milan Kundera",
        "tags": [
            "dogs",
            "peace"
        ]
    },
    {
        "text": "When things break, it's not the actual breaking that prevents them from getting back together again. It's because a little piece gets lost - the two remaining ends couldn't fit together even if they wanted to. The whole shape has changed.",
        "author": "John Green,",
        "tags": [
            "inspirational",
            "life"
        ]
    },
    {
        "text": "Don't let the muggles get you down.",
        "author": "J.K. Rowling,",
        "tags": []
    },
    {
        "text": "Love makes your soul crawl out from its hiding place.",
        "author": "Zora Neale Hurston",
        "tags": []
    },
    {
        "text": "I restore myself when I'm alone.",
        "author": "Marilyn Monroe",
        "tags": []
    },
    {
        "text": "Life doesn't imitate art, it imitates bad television.",
        "author": "Woody Allen",
        "tags": [
            "art",
            "humor",
            "life"
        ]
    },
    {
        "text": "All humans make mistakes. What determines a person's character aren't the mistakes we make. It's how we take those mistakes and turn them into lessons rather than excuses.",
        "author": "Colleen Hoover,",
        "tags": []
    },
    {
        "text": "I'm going to keep going until I succeed — or die. Don't think I don't know how this might end. I've known it for years.",
        "author": "J.K. Rowling,",
        "tags": [
            "harry-potter"
        ]
    },
    {
        "text": "Seventeen, eh!\" said Hagrid as he accepted a bucket-sized glass of wine from Fred.\"Six years to the day we met, Harry, d’yeh remember it?\"\"Vaguely,\" said Harry, grinning up at him. \"Didn’t you smash down the front door, give Dudley a pig’s tail, and tell me I was a wizard?\"\"I forge’ the details,\" Hagrid chortled.",
        "author": "J.K. Rowling,",
        "tags": [
            "birthday",
            "dursley",
            "hagrid",
            "harry-potter",
            "humor",
            "pig",
            "wizard"
        ]
    },
    {
        "text": "In the middle of difficulty lies opportunity",
        "author": "Albert Einstein",
        "tags": []
    },
    {
        "text": "We are always the same age inside.",
        "author": "Gertrude Stein",
        "tags": [
            "self-confidence"
        ]
    },
    {
        "text": "Life is like a prism. What you see depends on how you turn the glass.",
        "author": "Jonathan Kellerman",
        "tags": []
    },
    {
        "text": "You are too generous to trifle with me. If your feelings are still what they were last April, tell me so at once. My affections and wishes are unchanged; but one word from you will silence me on this subject for ever.",
        "author": "Jane Austen,",
        "tags": [
            "mr-darcy",
            "pride-and-prejudice"
        ]
    },
    {
        "text": "I know some who are constantly drunk on books as other men are drunk on whiskey.",
        "author": "H.L. Mencken",
        "tags": [
            "bibliophiles",
            "book-lovers",
            "whiskey"
        ]
    },
    {
        "text": "You have everything needed for the extravagant journey that is your life.",
        "author": "Carlos Castaneda",
        "tags": []
    },
    {
        "text": "I don't suffer from my insanity -- I enjoy every minute of it.",
        "author": "Sherrilyn Kenyon,",
        "tags": [
            "zarek"
        ]
    },
    {
        "text": "Whatever you do, you need courage. Whatever course you decide upon, there is always someone to tell you that you are wrong. There are always difficulties arising that tempt you to believe your critics are right. To map out a course of action and follow it to an end requires some of the same courage that a soldier needs. Peace has its victories, but it takes brave men and women to win them.",
        "author": "Ralph Waldo Emerson",
        "tags": [
            "courage",
            "inspirational"
        ]
    },
    {
        "text": "Happiness is something that comes into our lives through doors we don't even remember leaving open.",
        "author": "Rose Wilder Lane",
        "tags": []
    },
    {
        "text": "Years of love have been forgot, In the hatred of a minute.",
        "author": "Edgar Allan Poe,",
        "tags": []
    },
    {
        "text": "Half the world is composed of people who have something to say and can't, and the other half who have nothing to say and keep on saying it.",
        "author": "Robert Frost",
        "tags": [
            "new-england-wisdom"
        ]
    },
    {
        "text": "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the heck she is.",
        "author": "Ellen DeGeneres",
        "tags": [
            "age",
            "exercise",
            "family",
            "grandmothers",
            "grandparents",
            "humor",
            "walking"
        ]
    },
    {
        "text": "If we listened to our intellect we'd never have a love affair. We'd never have a friendship. We'd never go in business because we'd be cynical: \"It's gonna go wrong.\" Or \"She's going to hurt me.\" Or,\"I've had a couple of bad love affairs, so therefore . . .\" Well, that's nonsense. You're going to miss life. You've got to jump off the cliff all the time and build your wings on the way down.",
        "author": "Ray Bradbury",
        "tags": [
            "inspirational"
        ]
    },
    {
        "text": "to live in this worldyou must be ableto do three thingsto love what is mortal;to hold itagainst your bones knowingyour own life depends on it;and, when the time comes to let it go,to let it go",
        "author": "Mary Oliver,",
        "tags": [
            "excerpt-from-in-blackwater-woods",
            "poem",
            "poetry"
        ]
    },
    {
        "text": "Push yourself. Don't Settle. Just live well. Just LIVE.",
        "author": "Jojo Moyes,",
        "tags": []
    },
    {
        "text": "In the moment when I truly understand my enemy, understand him well enough to defeat him, then in that very moment I also love him. I think it’s impossible to really understand somebody, what they want, what they believe, and not love them the way they love themselves. And then, in that very moment when I love them.... I destroy them.",
        "author": "Orson Scott Card,",
        "tags": [
            "enemy",
            "epiphany",
            "hate",
            "love",
            "understanding"
        ]
    },
    {
        "text": "Never attempt to teach a pig to sing; it wastes your time and annoys the pig.",
        "author": "Robert Heinlein,",
        "tags": []
    },
    {
        "text": "If I should have a daughter…Instead of Mom, she’s gonna call me Point B. Because that way, she knows that no matter what happens, at least she can always find her way to me. And I’m going to paint the solar system on the back of her hands so that she has to learn the entire universe before she can say Oh, I know that like the back of my hand.She’s gonna learn that this life will hit you, hard, in the face, wait for you to get back up so it can kick you in the stomach. But getting the wind knocked out of you is the only way to remind your lungs how much they like the taste of air. There is hurt, here, that cannot be fixed by band-aids or poetry, so the first time she realizes that Wonder-woman isn’t coming, I’ll make sure she knows she doesn’t have to wear the cape all by herself. Because no matter how wide you stretch your fingers, your hands will always be too small to catch all the pain you want to heal. Believe me, I’ve tried.And Baby, I’ll tell her don’t keep your nose up in the air like that, I know that trick, you’re just smelling for smoke so you can follow the trail back to a burning house so you can find the boy who lost everything in the fire to see if you can save him. Or else, find the boy who lit the fire in the first place to see if you can change him.But I know that she will anyway, so instead I’ll always keep an extra supply of chocolate and rain boats nearby, ‘cause there is no heartbreak that chocolate can’t fix. Okay, there’s a few heartbreaks chocolate can’t fix. But that’s what the rain boots are for, because rain will wash away everything if you let it.I want her to see the world through the underside of a glass bottom boat, to look through a magnifying glass at the galaxies that exist on the pin point of a human mind. Because that’s how my mom taught me. That there’ll be days like this, There’ll be days like this my momma said when you open your hands to catch and wind up with only blisters and bruises. When you step out of the phone booth and try to fly and the very people you wanna save are the ones standing on your cape. When your boots will fill with rain and you’ll be up to your knees in disappointment and those are the very days you have all the more reason to say thank you, ‘cause there is nothing more beautiful than the way the ocean refuses to stop kissing the shoreline no matter how many times it’s sent away.You will put the wind in win some lose some, you will put the star in starting over and over, and no matter how many land mines erupt in a minute be sure your mind lands on the beauty of this funny place called life.And yes, on a scale from one to over-trusting I am pretty damn naive but I want her to know that this world is made out of sugar. It can crumble so easily but don’t be afraid to stick your tongue out and taste it.Baby, I’ll tell her remember your mama is a worrier but your papa is a warrior and you are the girl with small hands and big eyes who never stops asking for more.Remember that good things come in threes and so do bad things and always apologize when you’ve done something wrong but don’t you ever apologize for the way your eyes refuse to stop shining.Your voice is small but don’t ever stop singing and when they finally hand you heartbreak, slip hatred and war under your doorstep and hand you hand-outs on street corners of cynicism and defeat, you tell them that they really ought to meet your mother.",
        "author": "Sarah Kay",
        "tags": [
            "inspirational",
            "poem"
        ]
    },
    {
        "text": "One of the deep secrets of life is that all that is really worth the doing is what we do for others.",
        "author": "Lewis Carroll",
        "tags": []
    },
    {
        "text": "People, generally, suck.",
        "author": "Christopher Moore,",
        "tags": [
            "humor"
        ]
    },
    {
        "text": "None of us knows what might happen even the next minute, yet still we go forward. Because we trust. Because we have faith.",
        "author": "Paulo Coelho",
        "tags": [
            "faith",
            "trust"
        ]
    },
    {
        "text": "A question that sometimes drives me hazy: am I or are the others crazy?",
        "author": "Albert Einstein",
        "tags": [
            "crazy",
            "question",
            "thought-provoking"
        ]
    },
    {
        "text": "Nothing on earth can make up for the loss of one who has loved you.",
        "author": "Selma Lagerlöf",
        "tags": []
    },
    {
        "text": "Have I told you how hideous you look tonight? Cardan asks, leaning back in the elaborately carved chair, the warmth of his words turning the question into something like a compliment.No I say, glad to be annoyed back into the present. Tell me.\"I can't.",
        "author": "Holly Black,",
        "tags": [
            "hideous",
            "hideous-beauty",
            "love",
            "romance"
        ]
    },
    {
        "text": "The bird, the pin, the song, the berries, the watch, the cracker, the dress that burst into flames. I am the mockingjay. The one that survived despite the Capitol's plans. The symbol of the rebellion.",
        "author": "Suzanne Collins,",
        "tags": [
            "catching-fire",
            "hunger-games-peeta-katniss"
        ]
    }
]

export default quotes;
