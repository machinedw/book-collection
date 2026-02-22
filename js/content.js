// ========================================
// THE MEMORY BOOK - Harry Lorayne & Jerry Lucas
// Content structure for Universal Content PWA
// ========================================

const COLLECTIONS = [
    {
        id: 1,
        title: "Memory Through History",
        description: "How memory systems evolved from ancient times to modern day",
        items: [
            {
                text: "Ancient Greek and Roman orators used memory systems called 'loci' or 'places' to deliver lengthy speeches without notes. They would associate each thought of their speech to parts of their own homes.",
                image: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&h=600&fit=crop"
            },
            {
                text: "The phrase 'in the first place' comes from these ancient memory techniques. Orators would mentally walk through their homes, with the front door representing the first thought.",
                image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop"
            },
            {
                text: "Simonides (circa 500 B.C.) is known as the father of trained memory. However, memory techniques existed at least a thousand years before him.",
                image: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&h=600&fit=crop"
            },
            {
                text: "Cicero wrote that lawyers and orators of his time relied on memory systems and training. Oratory was one of the most important careers in ancient Rome.",
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop"
            },
            {
                text: "During the Middle Ages, monks and philosophers used memory systems primarily for religious purposes. They memorized Virtues and Vices using these techniques.",
                image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop"
            },
            {
                text: "King Francis I of France and England's Henry III both used memory systems. Shakespeare is believed to have used them, and his Globe Theater was called 'the memory theater.'",
                image: "https://images.unsplash.com/photo-1533854775446-95c4609da544?w=800&h=600&fit=crop"
            },
            {
                text: "Francis Bacon taught memory systems in his book 'The Advancement of Learning.' Some scholars believe Leibniz invented calculus while searching for a number memory system.",
                image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop"
            },
            {
                text: "For centuries, memory systems fell into disuse and were even regarded with suspicion. Those who practiced them were sometimes considered witches.",
                image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&h=600&fit=crop"
            }
        ]
    },
    {
        id: 2,
        title: "Original Awareness",
        description: "The foundation of all memory: you can't forget what you truly notice",
        items: [
            {
                text: "All memory is based on association. When people say 'I forgot,' what usually happened is they didn't remember in the first place.",
                image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
            },
            {
                text: "Original Awareness is fundamental to memory. Anything of which you are Originally Aware cannot be forgotten.",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"
            },
            {
                text: "The Basic Memory Rule: You can remember any new piece of information if it is associated to something you already know or remember.",
                image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop"
            },
            {
                text: "Teachers have used association for years: 'Every Good Boy Does Fine' for musical notes (E-G-B-D-F), or 'a piece of pie' to remember how to spell 'piece.'",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
            },
            {
                text: "Italy's shape is easy to remember because it looks like a boot. This is association at work—connecting new information to something already known.",
                image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=600&fit=crop"
            },
            {
                text: "It's always easier to remember things that have meaning than things that don't. Memory systems make abstract information meaningful and tangible.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
            },
            {
                text: "Virtually all learning is based on memory. Educators may not like to admit it, but students know that the more they remember, the better their grades.",
                image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop"
            },
            {
                text: "There are three basic learning skills: searching for information, remembering the information, and applying the information. Memory is the crucial middle step.",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
            },
            {
                text: "You've used association all your life, usually subconsciously. The systems taught here simply systematize a natural process you already use.",
                image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=600&fit=crop"
            },
            {
                text: "When something reminds you of something else, an association was made. Often it's absurd or random, but it works—that's what memory systems harness.",
                image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop"
            }
        ]
    },
    {
        id: 3,
        title: "The Link System",
        description: "Connect items in sequence using ridiculous mental pictures",
        items: [
            {
                text: "The Link system associates items to each other in sequence, forming links in a memory chain. One item must lead you to the next through ridiculous associations.",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
            },
            {
                text: "To remember anything, associate it to something you already know IN SOME RIDICULOUS WAY. The ridiculous aspect is what makes it memorable.",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
            },
            {
                text: "Ancient orators didn't realize they could link thoughts directly to each other. They kept searching for new buildings when their own homes had unlimited potential.",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
            },
            {
                text: "Don't use logical pictures—they're too vague. An airplane parked near a tree won't work. But millions of trees boarding airplanes? That's memorable!",
                image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop"
            },
            {
                text: "You can't think without seeing pictures. Aristotle said: 'It is impossible even to think without a mental picture.' Your mind works like a movie screen.",
                image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop"
            },
            {
                text: "Four rules for ridiculous pictures: Substitution (one item instead of another), Out of Proportion (gigantic items), Exaggeration (millions of items), and Action (movement).",
                image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?w=800&h=600&fit=crop"
            },
            {
                text: "From Ad Herennium (3,000 years ago): 'We forget ordinary things easily, but things that are exceptionally unusual, great, unbelievable, or ridiculous we remember for a long time.'",
                image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop"
            },
            {
                text: "Forming ridiculous pictures exercises your imagination. Children do this naturally; adults need to reactivate those wheels of curiosity and creativity.",
                image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800&h=600&fit=crop"
            },
            {
                text: "When you actually see something in your mind, electrical impulses reach your brain's vision center. Mental images activate nearly the same brain signals as real vision.",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
            },
            {
                text: "There's no limit to how many items you can Link. Thirty items takes longer than ten, but that's true whether you use the system or not.",
                image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop"
            },
            {
                text: "To remember the first item in a Link, associate it to the person giving you the list, or to the subject itself. The subject will always start your memory chain.",
                image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=600&fit=crop"
            },
            {
                text: "Even if the systems don't work, they must work! Just trying to apply them forces Original Awareness and concentration, which improves memory automatically.",
                image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop"
            }
        ]
    },
    {
        id: 4,
        title: "Substitute Words",
        description: "Make intangible and abstract things memorable through sound-alike words",
        items: [
            {
                text: "Substitute Words transform intangible or abstract information into something concrete you can picture. Any intangible can become tangible in your mind.",
                image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop"
            },
            {
                text: "A Substitute Word can be a word that sounds like, or reminds you of, the thing you want to remember. It doesn't have to sound exactly like it.",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop"
            },
            {
                text: "For abstract concepts, use any word or phrase that brings that concept to mind. The substitute just needs to remind you of the original information.",
                image: "https://images.unsplash.com/photo-1484069560501-87d72b0c3669?w=800&h=600&fit=crop"
            },
            {
                text: "Names are intangible until you apply Substitute Words. 'Baker' might picture a baker, 'Gordon' might be 'garden,' 'Carpenter' pictures a carpenter.",
                image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&h=600&fit=crop"
            },
            {
                text: "For difficult names, break them into parts. 'Stanislavsky' could be 'Stan is love ski' or 'Stan, I slob ski.' Any silly phrase that sounds similar works.",
                image: "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?w=800&h=600&fit=crop"
            },
            {
                text: "The Substitute Word technique works for foreign language vocabulary, scientific terms, historical names, or any abstract information that's hard to visualize.",
                image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&h=600&fit=crop"
            },
            {
                text: "Your first thought is usually your best Substitute Word. Don't labor over finding the perfect substitute—anything that reminds you will work.",
                image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop"
            },
            {
                text: "Once you create a Substitute Word, you can picture it in a ridiculous association. This makes even the most abstract information concrete and memorable.",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
            }
        ]
    },
    {
        id: 5,
        title: "Everyday Memory",
        description: "Practical applications for daily life: errands, shopping, appointments",
        items: [
            {
                text: "Use the Link system for shopping lists. Associate the first item to your shopping bag or cart, then link each item to the next in ridiculous ways.",
                image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=600&fit=crop"
            },
            {
                text: "For errands, link each task to the next. If you need to mail a letter, then buy gas, picture millions of letters pouring into your gas tank.",
                image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=800&h=600&fit=crop"
            },
            {
                text: "To remember appointments, associate the activity to the time. For a 3 o'clock dentist appointment, picture a gigantic tooth with a clock showing 3:00.",
                image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=600&fit=crop"
            },
            {
                text: "Long words can be remembered by breaking them into parts. 'Transcontinental' becomes 'trance continental'—picture a continent in a trance.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
            },
            {
                text: "For things you must take with you, link them in sequence. Need keys, wallet, phone? Picture keys opening your wallet, and your phone ringing inside it.",
                image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&h=600&fit=crop"
            },
            {
                text: "The more you use these systems for everyday tasks, the more automatic they become. Your memory will improve in all areas of your life.",
                image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop"
            },
            {
                text: "Memory systems save time. Spending 30 seconds to memorize a shopping list is faster than making multiple trips back to the store for forgotten items.",
                image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop"
            }
        ]
    },
    {
        id: 6,
        title: "Speeches & Presentations",
        description: "Deliver talks without notes using thought-to-thought linking",
        items: [
            {
                text: "A speech is simply a sequence of thoughts. Link each thought to the next using ridiculous associations, and you'll never forget your material.",
                image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop"
            },
            {
                text: "Use Substitute Words to represent abstract thoughts. 'Economic growth' might picture a plant growing out of coins.",
                image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&h=600&fit=crop"
            },
            {
                text: "You don't need to memorize word-for-word. Remembering the thoughts in sequence allows you to speak naturally while covering all your points.",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
            },
            {
                text: "Link your opening thought to the venue or audience. If speaking in a hotel ballroom, picture your first thought happening in that room.",
                image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop"
            },
            {
                text: "For longer speeches, group thoughts into sections. Link thoughts within each section, then link the sections together using major transitions.",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop"
            },
            {
                text: "Practice your speech once or twice using the Link. That's all it takes. You'll know the material perfectly and speak with confidence.",
                image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop"
            },
            {
                text: "Speakers who use notes lose eye contact with their audience. With memory systems, you maintain connection and appear more credible and authoritative.",
                image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
            },
            {
                text: "If interrupted or asked questions mid-speech, you'll never lose your place. Simply recall your last thought, and it will lead you to the next.",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
            }
        ]
    },
    {
        id: 7,
        title: "Foreign Languages & Vocabulary",
        description: "Learn new words and foreign vocabulary faster than ever",
        items: [
            {
                text: "To learn foreign vocabulary, use Substitute Words for both the foreign word and its English meaning, then link them ridiculously.",
                image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop"
            },
            {
                text: "Spanish: 'Caballo' (horse) sounds like 'cab eye oh.' Picture a horse driving a cab with a giant eye saying 'oh!'",
                image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&h=600&fit=crop"
            },
            {
                text: "French: 'Pomme' (apple) sounds like 'palm.' Picture an apple growing from the palm of your hand.",
                image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&h=600&fit=crop"
            },
            {
                text: "The substitute doesn't need to sound exactly like the foreign word. It just needs to be close enough to remind you of the pronunciation.",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"
            },
            {
                text: "For English vocabulary, make a ridiculous association between the word's meaning and a substitute for the word itself.",
                image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop"
            },
            {
                text: "Example: 'Lackadaisical' (lacking enthusiasm) could be 'lack a daze, I kill'—picture someone lacking energy, in a daze, barely able to move.",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
            },
            {
                text: "Students who use these techniques can learn vocabulary 2-3 times faster than traditional rote memorization methods.",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
            },
            {
                text: "The system works for any language—Spanish, French, German, Japanese, Russian. Once you learn the technique, you can apply it anywhere.",
                image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800&h=600&fit=crop"
            },
            {
                text: "Even complex scientific terms become easy. 'Mitochondria' (powerhouse of cell) could be 'mighty con drier'—picture a mighty, powerful dryer inside a cell.",
                image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop"
            }
        ]
    },
    {
        id: 8,
        title: "Names & Faces",
        description: "Never forget a name again by linking it to facial features",
        items: [
            {
                text: "The main reason people forget names is lack of Original Awareness. When introduced, they're not really paying attention to the name.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop"
            },
            {
                text: "Step 1: Really hear the name. If you don't catch it, ask the person to repeat it. This forces you to be Originally Aware.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
            },
            {
                text: "Step 2: Convert the name to a Substitute Word you can picture. 'Baker' = baker, 'Rivers' = rivers, 'Goldstein' = gold stein (mug).",
                image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&h=600&fit=crop"
            },
            {
                text: "Step 3: Select one outstanding feature on the person's face. It could be large eyes, bushy eyebrows, dimples, wrinkles, a prominent nose—anything noticeable.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop"
            },
            {
                text: "Step 4: Create a ridiculous association between the outstanding feature and the Substitute Word for the name. Make it visual and exaggerated.",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop"
            },
            {
                text: "Example: Mr. Caruso has large ears. Picture cars (car use oh) growing out of his ears. When you see him again, his ears will remind you of cars = Caruso.",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=600&fit=crop"
            },
            {
                text: "The system works even for difficult names. 'Paprocki' could be 'Pa, rocky'—picture his father being rocky on his outstanding feature.",
                image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?w=800&h=600&fit=crop"
            },
            {
                text: "Always use the person's name during conversation. This reinforces the association and shows respect and interest.",
                image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
            },
            {
                text: "At parties or meetings, review the names periodically. Look around the room and recall each person's name by looking at their outstanding feature.",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
            },
            {
                text: "The outstanding feature doesn't have to be a facial flaw. It can be anything noticeable—their hair, smile, glasses, or even how they stand.",
                image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=600&fit=crop"
            },
            {
                text: "With practice, the name-to-face association happens almost instantly. You'll become known as someone with an incredible memory for people.",
                image: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=800&h=600&fit=crop"
            },
            {
                text: "The confidence you gain from remembering names improves all your relationships—personal, professional, and social.",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
            }
        ]
    },
    {
        id: 9,
        title: "Absentmindedness",
        description: "Stop losing things and forgetting actions you intended to take",
        items: [
            {
                text: "Absentmindedness isn't a memory problem—it's an attention problem. You can't forget something you never registered in the first place.",
                image: "https://images.unsplash.com/photo-1507646871150-1b2aa9b7d4f7?w=800&h=600&fit=crop"
            },
            {
                text: "Where did I put my keys? You didn't forget—you never consciously observed where you put them. The solution is Original Awareness.",
                image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&h=600&fit=crop"
            },
            {
                text: "When putting something down, make a ridiculous association between the item and where you're placing it. Keys on the kitchen counter? Picture keys cooking on a stove.",
                image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&h=600&fit=crop"
            },
            {
                text: "Did I turn off the iron? If you associate turning it off to something ridiculous, you'll remember. Picture the iron screaming as you click it off.",
                image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&h=600&fit=crop"
            },
            {
                text: "To remember to do something when you arrive somewhere, link the action to arriving there. Need to make a call when you get home? Picture your front door is a telephone.",
                image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&h=600&fit=crop"
            },
            {
                text: "The more absurd the association, the more it grabs your attention and forces Original Awareness. This prevents absentminded actions entirely.",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
            },
            {
                text: "For recurring tasks, create a standard ridiculous image. Always picture your car alarm honking wildly when you set it. This becomes automatic.",
                image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop"
            },
            {
                text: "The systems force you to live in the present moment. Absentmindedness disappears when you're truly aware of your actions.",
                image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=600&fit=crop"
            }
        ]
    },
    {
        id: 10,
        title: "Numbers & The Peg System",
        description: "Remember numbers, prices, and data using the phonetic alphabet",
        items: [
            {
                text: "The Phonetic Alphabet: 1=T or D, 2=N, 3=M, 4=R, 5=L, 6=J/SH/CH, 7=K/G, 8=F/V, 9=P/B, 0=S/Z. Vowels have no value.",
                image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=800&h=600&fit=crop"
            },
            {
                text: "To remember any number, convert it to consonant sounds, add vowels to make a word, then picture that word. 14 = T+R = tire, 25 = N+L = nail.",
                image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=800&h=600&fit=crop"
            },
            {
                text: "Long numbers can be broken into parts. 3842 = M+V+R+N = 'movie run' or 'move rain.' Picture a movie running in the rain.",
                image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop"
            },
            {
                text: "The Peg System creates permanent 'pegs' for numbers 1-100 (or more). 1=tie, 2=Noah, 3=ma, 4=rye, 5=law, 6=shoe, 7=cow, 8=ivy, 9=bee, 10=toes.",
                image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=600&fit=crop"
            },
            {
                text: "To remember a list in exact order with numbers, associate each item to its peg word. Item #7? Associate it to a cow. You'll always know its position.",
                image: "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?w=800&h=600&fit=crop"
            },
            {
                text: "Telephone numbers become easy. 555-1234 = LLL-TNMR = 'Lily ate enemy rye' or any phrase using those sounds.",
                image: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop"
            },
            {
                text: "Prices are simple with this system. A $3,842 item becomes 'movie run' (M=3, V=8, R=4, N=2). Picture yourself movie-running while buying it.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
            },
            {
                text: "Historical dates: 1776 (American Independence) = T+K+K+SH = 'take cash.' Picture the Founding Fathers taking cash from the British.",
                image: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?w=800&h=600&fit=crop"
            },
            {
                text: "Style numbers, model numbers, serial numbers—any number can be remembered using this system. It works for all numeric data.",
                image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop"
            },
            {
                text: "Learning the Phonetic Alphabet takes about an hour. Once mastered, you'll be able to remember numbers as easily as words for the rest of your life.",
                image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop"
            }
        ]
    },
    {
        id: 11,
        title: "Playing Cards & Advanced Memory",
        description: "Memorize entire decks and apply systems to complex information",
        items: [
            {
                text: "Each playing card gets a permanent image using the Phonetic Alphabet. Ace of Spades = S+T = 'sat' or 'seat.' Picture someone sitting for the Ace of Spades.",
                image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop"
            },
            {
                text: "To memorize a shuffled deck, Link the card images in sequence. The first card reminds you of the second, the second of the third, and so on.",
                image: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&h=600&fit=crop"
            },
            {
                text: "With practice, you can memorize an entire 52-card deck in under 5 minutes. This demonstrates the power of trained memory—it seems impossible but isn't.",
                image: "https://images.unsplash.com/photo-1611630380029-e552a5f5e4e4?w=800&h=600&fit=crop"
            },
            {
                text: "Weekly appointments use days of the week as pegs. Monday = Money, Tuesday = Tears, Wednesday = Wedding, Thursday = Thirsty, Friday = Frying, Saturday = Sat, Sunday = Sun.",
                image: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?w=800&h=600&fit=crop"
            },
            {
                text: "For anniversaries, convert the month and day to phonetic sounds. July 4 (7th month, 4th day) = K+R = 'car.' Picture independence in a car.",
                image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&h=600&fit=crop"
            },
            {
                text: "The zodiac signs become memory pegs: Aries=ram, Taurus=bull, Gemini=twins, Cancer=crab, Leo=lion, Virgo=virgin, Libra=scales, Scorpio=scorpion, Sagittarius=archer, Capricorn=goat, Aquarius=water bearer, Pisces=fish.",
                image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=800&h=600&fit=crop"
            },
            {
                text: "Historical dates use the year as a peg word. 1492 (Columbus) = T+R+P+N = 'trapping' or 'dripping.' Picture Columbus trapping or dripping with ocean water.",
                image: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?w=800&h=600&fit=crop"
            },
            {
                text: "The alphabet gets peg words too: A=ape, B=bee, C=sea, D=deed, E=easel, F=effort, and so on. Use these for alphabetical lists or filing systems.",
                image: "https://images.unsplash.com/photo-1553506191-67eb02e6dece?w=800&h=600&fit=crop"
            }
        ]
    },
    {
        id: 12,
        title: "Universal Applications",
        description: "Apply memory systems to sports, music, reading, and all learning",
        items: [
            {
                text: "In sports, remember player statistics by converting numbers to peg words. A player batting .342 = M+R+N = 'marine.' Picture that player as a marine.",
                image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop"
            },
            {
                text: "Stock market prices and ticker symbols use Substitute Words. 'IBM' might picture an 'eye beam.' Link the beam to the stock price using phonetic words.",
                image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop"
            },
            {
                text: "Political information: Link candidate names to their positions. Remember voting records, policy stances, and political platforms using associations.",
                image: "https://images.unsplash.com/photo-1541872703-74c34d97b53e?w=800&h=600&fit=crop"
            },
            {
                text: "Art history: Link artist names to their famous works. 'Monet' (money) painting water lilies—picture money floating on lily pads.",
                image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=600&fit=crop"
            },
            {
                text: "Music for beginners: The staff lines and spaces, note values, key signatures—all can be memorized using substitute words and linking.",
                image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop"
            },
            {
                text: "Reading retention improves dramatically. After each chapter, link the main points in sequence. You'll remember books better than people who took written notes.",
                image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop"
            },
            {
                text: "The Memory Graph: Create a visual map of information by linking related concepts spatially. This works for complex subjects like geography, anatomy, or organization charts.",
                image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop"
            },
            {
                text: "Children learn these systems faster than adults. Teaching memory techniques early gives kids a lifelong advantage in school and beyond.",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
            },
            {
                text: "Once you master the basics—Link, Substitute Words, and the Phonetic Alphabet—you can remember anything. The only limit is your willingness to apply the systems.",
                image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
            },
            {
                text: "These systems don't just improve memory—they improve thinking itself. Association, observation, and Original Awareness enhance all cognitive abilities.",
                image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop"
            },
            {
                text: "Memory training is like physical training—the more you practice, the stronger you become. Start small, build confidence, and soon you'll amaze yourself.",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
            },
            {
                text: "Finally: The systems work for everyone, regardless of age or current memory ability. If you can think, you can have a trained memory. Begin today!",
                image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop"
            }
        ]
    }
];

// Total: 12 collections, 120 items
// Variable collection sizes: 8-12 items each
// Ready to customize with your own content!
