/* ===================================
   CONTENT COLLECTIONS - DATA STRUCTURE
   Content-agnostic template for ANY topic
   
   HOW TO USE THIS FILE:
   1. Each collection represents a themed group of content
   2. Each item is a short piece of content (2-4 sentences) + image
   3. Add/remove collections freely - no limit
   4. Variable item counts per collection (1-1000+ items)
   5. Replace text with your own content on ANY topic
   
   TEMPLATE STRUCTURE:
   {
       id: [unique number],
       title: "[Your Collection Name]",
       description: "[Brief description]",
       items: [
           {
               text: "[Your content text here. Keep it short and impactful.]",
               image: "[Image URL - Unsplash, your own CDN, etc.]"
           }
       ]
   }
   =================================== */

const COLLECTIONS = [
    // Collection 1: 16 items
    {
        id: 1,
        title: "Morning Reflections",
        description: "Start your day with clarity",
        items: [
            {
                text: "The obstacle is the way. What stands in the path becomes the path itself. Every challenge you face is an opportunity to practice virtue and develop strength.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            },
            {
                text: "You have power over your mind, not outside events. Realize this, and you will find strength in every situation you encounter.",
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop"
            },
            {
                text: "Waste no more time arguing what a good person should be. Be one. Action speaks louder than endless contemplation.",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop"
            },
            {
                text: "If it is not right, do not do it. If it is not true, do not say it. Let your actions and words align with your principles.",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
            },
            {
                text: "The happiness of your life depends on the quality of your thoughts. Guard your mind carefully, for it shapes your entire existence.",
                image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&h=600&fit=crop"
            },
            {
                text: "Accept the things to which fate binds you. Love the people with whom fate brings you together, but do so with all your heart.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            },
            {
                text: "Do every act of your life as though it were your last. Let urgency guide your actions, but not anxiety cloud your judgment.",
                image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop"
            },
            {
                text: "The best revenge is to be unlike him who performed the injury. Rise above pettiness by embodying excellence in character.",
                image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=600&fit=crop"
            },
            {
                text: "Confine yourself to the present. The past cannot be changed, and the future is not yet here. This moment is all you truly have.",
                image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop"
            },
            {
                text: "Very little is needed to make a happy life. It is all within yourself, in your way of thinking and being present.",
                image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop"
            },
            {
                text: "How much more grievous are the consequences of anger than the causes of it. Control your reactions, not external circumstances.",
                image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop"
            },
            {
                text: "When you arise in the morning, think of what a precious privilege it is to be alive. To breathe, to think, to enjoy, to love.",
                image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800&h=600&fit=crop"
            },
            {
                text: "You could leave life right now. Let that determine what you do and say and think. Live each moment fully aware of its impermanence.",
                image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
            },
            {
                text: "The soul becomes dyed with the color of its thoughts. Choose your mental patterns wisely, for they shape who you become.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
            },
            {
                text: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth. Remain humble in your judgments.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            },
            {
                text: "Nowhere can you find a more peaceful place than in your own soul. Take refuge in inner tranquility when the world grows chaotic.",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop"
            }
        ]
    },

    // Collection 2: 17 items
    {
        id: 2,
        title: "Strength in Adversity",
        description: "Build resilience through challenge",
        items: [
            {
                text: "Difficulty is what wakes up the genius. Without resistance, there is no growth. Welcome the struggle as your greatest teacher.",
                image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=800&h=600&fit=crop"
            },
            {
                text: "What doesn't transmit light creates its own darkness. Choose to be a source of illumination rather than an obstacle to it.",
                image: "https://images.unsplash.com/photo-1429277096327-11ee3b761c93?w=800&h=600&fit=crop"
            },
            {
                text: "The impediment to action advances action. What stands in the way becomes the way forward. Transform obstacles into opportunities.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            },
            {
                text: "It's not what happens to you, but how you react that matters. Your response defines your character, not the circumstance itself.",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
            },
            {
                text: "The mind that is anxious about future events is miserable. Focus on what you can control today, this hour, this moment.",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop"
            },
            {
                text: "He who fears death will never do anything worthy of life. Live boldly, knowing that impermanence makes each moment precious.",
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop"
            },
            {
                text: "No person has the power to have everything they want, but they have the power not to want what they don't have. Choose contentment.",
                image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&h=600&fit=crop"
            },
            {
                text: "Begin at once to live, and count each day as a separate life. Don't wait for perfect conditions that may never arrive.",
                image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop"
            },
            {
                text: "Luck is what happens when preparation meets opportunity. Position yourself wisely, then embrace what comes your way.",
                image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=600&fit=crop"
            },
            {
                text: "True happiness is to enjoy the present, without anxious dependence upon the future. Find peace in this very moment.",
                image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop"
            },
            {
                text: "We suffer more in imagination than in reality. Most of your fears will never materialize if you focus on present action.",
                image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop"
            },
            {
                text: "It is not the man who has too little, but the man who craves more, that is poor. Recognize abundance in simplicity.",
                image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop"
            },
            {
                text: "Life is long if you know how to use it. Quality of time matters far more than quantity of years.",
                image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800&h=600&fit=crop"
            },
            {
                text: "Associate with people who are likely to improve you. Choose companions who elevate your character and challenge your thinking.",
                image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
            },
            {
                text: "Wherever there is a human being, there is an opportunity for kindness. Never miss a chance to express compassion.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
            },
            {
                text: "Nothing, to my way of thinking, is better proof of a well-ordered mind than being able to stop and dwell wherever one is.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            },
            {
                text: "The greatest obstacle to living is expectancy. Release your attachment to specific outcomes and embrace what unfolds.",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop"
            }
        ]
    },

    // Collection 3: 16 items
    {
        id: 3,
        title: "Daily Wisdom",
        description: "Practical guidance for living",
        items: [
            {
                text: "First say to yourself what you would be, then do what you have to do. Clarity of intention must precede action.",
                image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=800&h=600&fit=crop"
            },
            {
                text: "Wealth consists not in having great possessions, but in having few wants. Simplicity is the ultimate sophistication.",
                image: "https://images.unsplash.com/photo-1429277096327-11ee3b761c93?w=800&h=600&fit=crop"
            },
            {
                text: "He who laughs at himself never runs out of things to laugh at. Cultivate humility through self-awareness.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            },
            {
                text: "Don't explain your philosophy. Embody it. Your life is the most powerful argument for your beliefs.",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
            },
            {
                text: "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop"
            },
            {
                text: "Caretake this moment. Immerse yourself in its particularity. Respond to the unique demands it presents.",
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop"
            },
            {
                text: "Make the best use of what is in your power, and take the rest as it happens. Distinguish effort from outcome.",
                image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&h=600&fit=crop"
            },
            {
                text: "It's not because things are difficult that we dare not venture. It's because we dare not venture that they are difficult.",
                image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop"
            },
            {
                text: "If a man knows not which port he sails, no wind is favorable. Define your destination before setting sail.",
                image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=600&fit=crop"
            },
            {
                text: "Only the educated are free. Knowledge liberates the mind from ignorance and expands your possibilities.",
                image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop"
            },
            {
                text: "No man is free who is not master of himself. Self-control is the foundation of all other freedoms.",
                image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop"
            },
            {
                text: "First learn the meaning of what you say, and then speak. Thoughtful words carry weight that hasty ones cannot.",
                image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop"
            },
            {
                text: "Any person capable of angering you becomes your master. Guard your emotional sovereignty carefully.",
                image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800&h=600&fit=crop"
            },
            {
                text: "It's not what you look at that matters, it's what you see. Perception shapes reality more than facts do.",
                image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
            },
            {
                text: "Know, first, who you are, and then adorn yourself accordingly. Authenticity must precede presentation.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
            },
            {
                text: "The chief task in life is simply this: to identify what is yours and what is not. Focus only on what you control.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            }
        ]
    },

    // Collection 4: 51 items (largest collection)
    {
        id: 4,
        title: "Character Development",
        description: "Building virtue through practice",
        items: [
            {
                text: "The person who has virtue has everything. External possessions come and go, but strong character endures all circumstances.",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop"
            },
            {
                text: "Practice poverty to appreciate wealth. Voluntary discomfort builds resilience and gratitude for what you have.",
                image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=800&h=600&fit=crop"
            },
            {
                text: "Set aside a certain number of days to be content with little. Test your resources and strengthen your resolve.",
                image: "https://images.unsplash.com/photo-1429277096327-11ee3b761c93?w=800&h=600&fit=crop"
            },
            {
                text: "Nothing is enough for the person to whom enough is too little. Insatiable desire creates perpetual dissatisfaction.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            },
            {
                text: "The person who pursues pleasure as a good will never find it. Joy comes as a byproduct of meaningful action.",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
            },
            {
                text: "Be tolerant with others and strict with yourself. Hold yourself to high standards while showing compassion to others.",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop"
            },
            {
                text: "When you wake up in the morning, tell yourself: I will meet people who interfere and are ungrateful. Prepare for reality.",
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop"
            },
            {
                text: "The best revenge is not to be like that. Rising above pettiness demonstrates true strength of character.",
                image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&h=600&fit=crop"
            },
            {
                text: "Think of the life you have lived until now as over. From now on, see what you can make of your remaining time.",
                image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop"
            },
            {
                text: "The present moment is the same for everyone; what differs is the value we place on it. Choose to value it highly.",
                image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=600&fit=crop"
            },
            {
                text: "Look well into thyself; there is a source of strength which will always spring up if thou wilt always look.",
                image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop"
            },
            {
                text: "A gem cannot be polished without friction, nor a person perfected without trials. Welcome difficulty as refinement.",
                image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop"
            },
            {
                text: "Receive wealth or prosperity without arrogance; and be ready to let it go. Hold all things lightly in your hands.",
                image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop"
            },
            {
                text: "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it.",
                image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800&h=600&fit=crop"
            },
            {
                text: "Today I escaped anxiety. Or no, I discarded it, because it was within me, in my own perceptions.",
                image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
            },
            {
                text: "External thinks are not the problem. It's your assessment of them. Which you can erase right now. Change your mind.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
            },
            {
                text: "You have been formed of three parts: body, breath, and mind. Of these, the first two are yours only insofar as you care for them.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            },
            {
                text: "Think of yourself as dead. You have lived your life. Now take what's left and live it properly.",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop"
            },
            {
                text: "The present is all we have. The past is gone, the future uncertain. Work with what you have right now.",
                image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=800&h=600&fit=crop"
            },
            {
                text: "How ridiculous not to flee from one's own wickedness, which is possible, yet endeavor to flee from others' wickedness.",
                image: "https://images.unsplash.com/photo-1429277096327-11ee3b761c93?w=800&h=600&fit=crop"
            },
            {
                text: "Ambition means tying your well-being to what others say or do. Sanity means tying it to your own actions.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            },
            {
                text: "You don't have to turn this into something. It doesn't have to upset you. Things can't shape our decisions by themselves.",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
            },
            {
                text: "Choose not to be harmed, and you won't feel harmed. Don't feel harmed, and you haven't been. Perception is power.",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop"
            },
            {
                text: "If anyone tells you that a certain person speaks ill of you, do not defend yourself. Say: He does not know my other faults.",
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop"
            },
            {
                text: "Don't demand things happen as you wish. Wish them to happen as they do, and you will get along well.",
                image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&h=600&fit=crop"
            },
            {
                text: "Give yourself fully to your endeavors, and then release attachment to the outcome. Do your best, accept the result.",
                image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop"
            },
            {
                text: "Keep your attention on what is truly your own concern. Be indifferent to what does not concern you. Focus your energy wisely.",
                image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=600&fit=crop"
            },
            {
                text: "Circumstances don't make the person; they reveal them to themselves. Crisis shows you who you truly are.",
                image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop"
            },
            {
                text: "Character is revealed in times of difficulty. Anyone can be pleasant when circumstances are favorable. Who are you when they're not?",
                image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop"
            },
            {
                text: "The cucumber is bitter? Put it down. There are thorns in the path? Turn aside. That is enough. Simple solutions exist.",
                image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop"
            },
            {
                text: "Be like the rock that the waves keep crashing over. It stands unmoved and calms the fury of the sea around it.",
                image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800&h=600&fit=crop"
            },
            {
                text: "You can endure anything your mind can make endurable, by treating it as in your interest to do so. Reframe difficulty.",
                image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
            },
            {
                text: "If you seek tranquility, do less. Better yet, do what's essential. Ask yourself at every moment: Is this necessary?",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
            },
            {
                text: "Treat what you don't have as nonexistent. Look at what you have and think how you'd crave them if they weren't yours.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            },
            {
                text: "Remember: the person who feels insulted by your words has chosen to interpret them as insulting. They control their reaction.",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop"
            },
            {
                text: "Don't be ashamed to need help. You have a duty to fulfill just like a soldier on the wall of battle.",
                image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=800&h=600&fit=crop"
            },
            {
                text: "The tranquility that comes when you stop caring what others say or think or do. Only what you do matters.",
                image: "https://images.unsplash.com/photo-1429277096327-11ee3b761c93?w=800&h=600&fit=crop"
            },
            {
                text: "Concentrate every minute on doing what's in front of you with precise and genuine seriousness. Free your mind from distractions.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            },
            {
                text: "People who labor all their lives but have no purpose to direct every thought and impulse accomplish nothing.",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
            },
            {
                text: "Stop allowing your mind to be a slave, to be jerked about by selfish impulses. Give yourself the gift of self-mastery.",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop"
            },
            {
                text: "Your time is limited. Don't waste it living someone else's life. Have the courage to follow your own path.",
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop"
            },
            {
                text: "The present is the only thing of which a person can be deprived. You cannot lose the past or future, as you don't possess them.",
                image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&h=600&fit=crop"
            },
            {
                text: "To move from one unselfish action to another with God in mind is what life is about. All else is meaningless distraction.",
                image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop"
            },
            {
                text: "When forced by circumstances into being upset, quickly return to yourself. Don't remain out of tune longer than necessary.",
                image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=600&fit=crop"
            },
            {
                text: "Words that everyone once used are now obsolete. So are the men whose names were once on everyone's lips. Everything fades.",
                image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop"
            },
            {
                text: "Reject your sense of injury and the injury itself disappears. Healing begins when you change your interpretation of events.",
                image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop"
            },
            {
                text: "A blazing fire makes flame and brightness out of everything thrown into it. Transform obstacles into fuel for your purpose.",
                image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop"
            },
            {
                text: "Take care not to ever be found as you accused others of being. Hold yourself to the standard you demand of others.",
                image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800&h=600&fit=crop"
            },
            {
                text: "The art of living is more like wrestling than dancing. Be ready to stand firm against sudden and unexpected attacks.",
                image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
            },
            {
                text: "How long are you going to wait before you demand the best for yourself? Now is the time to step into excellence.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
            },
            {
                text: "The willing are led by fate, the reluctant dragged. Choose to align yourself with what must happen anyway.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            }
        ]
    },

    // Collection 5: 36 items
    {
        id: 5,
        title: "Evening Contemplations",
        description: "Reflect on the day behind you",
        items: [
            {
                text: "Before you sleep, review your day. What did you do well? Where did you fall short? Tomorrow is a chance to improve.",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop"
            },
            {
                text: "Put each day to rest with gratitude. Appreciate what you experienced, learned, and endured. Tomorrow begins fresh.",
                image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=800&h=600&fit=crop"
            },
            {
                text: "The day is done. Let go of what you cannot change. Prepare your mind for restful sleep and renewal.",
                image: "https://images.unsplash.com/photo-1429277096327-11ee3b761c93?w=800&h=600&fit=crop"
            },
            {
                text: "Did you live today according to your values? If yes, rejoice. If no, plan how to do better tomorrow.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            },
            {
                text: "End each day as if it were your last. Would you be satisfied with how you spent these precious hours?",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
            },
            {
                text: "Sleep is a preview of death. Embrace rest without fear, knowing you lived this day fully and with purpose.",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop"
            },
            {
                text: "Let your evening ritual be simple: reflect, release, rest. Create a boundary between day and night.",
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop"
            },
            {
                text: "What irritated you today? Was it worth the energy you gave it? Learn to distinguish the worthy from the trivial.",
                image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&h=600&fit=crop"
            },
            {
                text: "Count your blessings, not your problems. Evening is the time to acknowledge all that went right today.",
                image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop"
            },
            {
                text: "Did you help someone today? Did you harm anyone? Honest accounting builds a sound character over time.",
                image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=600&fit=crop"
            },
            {
                text: "Tomorrow is not guaranteed. If this were your last evening, would you be at peace? Live accordingly.",
                image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop"
            },
            {
                text: "Release the tensions of the day. Your body carried you through challenges. Thank it with rest and care.",
                image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop"
            },
            {
                text: "Evening silence is golden. Turn off the noise and listen to your inner voice. What does it tell you?",
                image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop"
            },
            {
                text: "Prepare tomorrow's intentions tonight. A clear plan allows you to wake with purpose rather than confusion.",
                image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800&h=600&fit=crop"
            },
            {
                text: "Did you waste time today? Learn from it. Time is the only resource you cannot replenish.",
                image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
            },
            {
                text: "Forgive yourself for imperfections. You are human, learning as you go. Tomorrow offers another opportunity.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
            },
            {
                text: "What did you learn today? Extract wisdom from every experience, pleasant or painful. Growth requires reflection.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            },
            {
                text: "End conflicts before sleep. Don't carry resentment into your rest. Let go and wake lighter.",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop"
            },
            {
                text: "The evening belongs to reflection, not regret. Observe without harsh judgment. Learn without self-punishment.",
                image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=800&h=600&fit=crop"
            },
            {
                text: "Did you speak truth today? Did you act with integrity? Align your actions with your principles daily.",
                image: "https://images.unsplash.com/photo-1429277096327-11ee3b761c93?w=800&h=600&fit=crop"
            },
            {
                text: "Close the day with a clear conscience. Make amends where needed. Don't let guilt disturb your peace.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            },
            {
                text: "Evening is for letting go. Release what served its purpose. Cling to nothing but wisdom and virtue.",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
            },
            {
                text: "Were you present today, or did you sleepwalk through your hours? Practice awareness tomorrow.",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop"
            },
            {
                text: "Thank those who challenged you today. They revealed where you need to grow stronger. Difficulty refines character.",
                image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop"
            },
            {
                text: "End your day in simplicity. Complex thoughts can wait for morning. Rest requires a quiet mind.",
                image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&h=600&fit=crop"
            },
            {
                text: "Did you make progress toward your goals? Celebrate small steps. Consistency builds extraordinary results over time.",
                image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop"
            },
            {
                text: "Evening reveals what daytime hides. In stillness, truth emerges. Listen carefully to what it tells you.",
                image: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&h=600&fit=crop"
            },
            {
                text: "Let go of perfectionism before bed. You did your best with what you knew. That is always enough.",
                image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=600&fit=crop"
            },
            {
                text: "Close your day with intention, not exhaustion. Create a ritual that honors the transition from action to rest.",
                image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=600&fit=crop"
            },
            {
                text: "What patterns do you notice in your days? Identify them tonight. Change requires awareness first, action second.",
                image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop"
            },
            {
                text: "Evening gratitude multiplies your blessings. Name three good things from today. Train your mind toward abundance.",
                image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800&h=600&fit=crop"
            },
            {
                text: "Did you honor your body today? Proper rest is not laziness, it's essential maintenance. Sleep deeply without guilt.",
                image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop"
            },
            {
                text: "Let the day's conversations go. Words were spoken, heard, or misunderstood. Release them all into the night.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
            },
            {
                text: "End this day without comparison. You are on your own path, at your own pace. Honor where you are.",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            },
            {
                text: "Tomorrow awaits, but tonight belongs to rest. Surrender to sleep with a peaceful heart and quiet mind.",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop"
            },
            {
                text: "Close your eyes knowing you gave today your honest effort. That is all that can be asked of anyone.",
                image: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?w=800&h=600&fit=crop"
            }
        ]
    },

    // Collection 6: 39 items
    {
        id: 6,
        title: "Relationships & Community",
        description: "Connecting with others wisely",
        items: [
            {
                text: "We are social creatures by nature. Your well-being is tied to the quality of your relationships. Choose connections wisely.",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
            },
            {
                text: "Treat everyone with kindness, but share your innermost thoughts only with those who have earned your trust through time.",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
            },
            {
                text: "You become like the people you spend time with. Surround yourself with those who inspire your growth and challenge your thinking.",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
            },
            {
                text: "Listen more than you speak. True understanding comes from genuine curiosity about others' experiences and perspectives.",
                image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop"
            },
            {
                text: "Forgive quickly but remember carefully. Learn from how people treat you, then decide how much access they deserve to your life.",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
            },
            {
                text: "Give without expecting return. True generosity asks for nothing back. The act itself should be your reward.",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
            },
            {
                text: "Boundaries are acts of self-respect, not selfishness. You teach people how to treat you by what you allow.",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
            },
            {
                text: "Support others in their victories without jealousy. Celebrate their success as if it were your own. Abundance multiplies through joy.",
                image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop"
            },
            {
                text: "When someone shows you their true character, believe them the first time. People tell you who they are through actions.",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
            },
            {
                text: "Conflict is inevitable, but cruelty is optional. Disagree with respect. Attack ideas, never people's dignity.",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
            },
            {
                text: "Your parents will not be here forever. Honor them while you can. Time with loved ones is the most precious resource.",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
            },
            {
                text: "Quality trumps quantity in friendships. A few genuine connections matter more than hundreds of superficial acquaintances.",
                image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop"
            },
            {
                text: "Show up for people in their difficult moments. Fair-weather friends are abundant. Be the one who stays when it's hard.",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
            },
            {
                text: "Don't try to change anyone. Accept people as they are or create distance. Your job is to manage yourself, not others.",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
            },
            {
                text: "Express appreciation regularly. Don't assume people know you care. Words of affirmation cost nothing but mean everything.",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
            },
            {
                text: "Choose your battles carefully. Not every disagreement deserves your energy. Preserve relationships over being right.",
                image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop"
            },
            {
                text: "Be the friend you want to have. Embody the qualities you seek in others. Like attracts like over time.",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
            },
            {
                text: "Loneliness and solitude are different. Learn to enjoy your own company. Neediness repels; self-sufficiency attracts.",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
            },
            {
                text: "Don't gossip. Speaking ill of others reveals more about your character than theirs. Protect people's reputations in their absence.",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
            },
            {
                text: "Make time for relationships intentionally. Connection doesn't happen accidentally. Schedule it like you would any important commitment.",
                image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop"
            },
            {
                text: "Apologize sincerely when you're wrong. Pride destroys relationships faster than almost any other fault. Humility heals.",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
            },
            {
                text: "Trust is built slowly and destroyed quickly. Guard it carefully in all your relationships. It's the foundation of connection.",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
            },
            {
                text: "Be present when with others. Put away distractions. Attention is the most valuable gift you can offer anyone.",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
            },
            {
                text: "Don't compare your relationships to others'. Every connection is unique. Water your own garden instead of envying others'.",
                image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop"
            },
            {
                text: "Vulnerability builds intimacy. Share your struggles, not just your successes. Authenticity creates deeper bonds than perfection.",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
            },
            {
                text: "Let people go who no longer align with your values. Growth sometimes means outgrowing relationships. This is natural and healthy.",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
            },
            {
                text: "Compliment sincerely and specifically. Generic praise means little. Notice the details and acknowledge genuine efforts.",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
            },
            {
                text: "Don't keep score in relationships. Love is not transactional. Give freely without tallying who did more for whom.",
                image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop"
            },
            {
                text: "Respect people's time. Be punctual. Follow through on commitments. Reliability is a cornerstone of respect.",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
            },
            {
                text: "Accept that you can't please everyone. Some people won't like you no matter what you do. Make peace with this reality.",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
            },
            {
                text: "Mentor someone younger. Share your hard-won wisdom. Teaching others reinforces your own understanding and creates legacy.",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
            },
            {
                text: "Seek feedback from people you trust. Growth requires outside perspective. Welcome constructive criticism as a gift.",
                image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop"
            },
            {
                text: "Laugh together often. Joy shared is joy multiplied. Don't take relationships so seriously that you forget to enjoy them.",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
            },
            {
                text: "Defend people who can't defend themselves. Stand up against injustice even when it's uncomfortable. Character shows in action.",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
            },
            {
                text: "Remember important details about people's lives. Ask follow-up questions. Remembering shows you care and were listening.",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
            },
            {
                text: "Create traditions with loved ones. Rituals bind relationships across time. Build memories intentionally through recurring experiences.",
                image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop"
            },
            {
                text: "End relationships gracefully when necessary. You can leave with dignity and wish people well even when parting ways.",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
            },
            {
                text: "Invest in your community. Contribute beyond your immediate circle. A strong community elevates everyone within it.",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop"
            },
            {
                text: "Love is verb, not just a feeling. Show up. Do the work. Feelings fluctuate, but commitment remains steady through seasons.",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
            }
        ]
    },

    // Collections 7-12: 6 items each (shorter collections)
    {
        id: 7,
        title: "Focus & Productivity",
        description: "Work with intention and energy",
        items: [
            {
                text: "Do first what matters most. Tackle your most important task before anything else. Energy and focus are highest in the morning.",
                image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop"
            },
            {
                text: "Eliminate distractions ruthlessly. Every interruption costs you more than the time it takes. Protect your attention like gold.",
                image: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=800&h=600&fit=crop"
            },
            {
                text: "Work in focused sprints, then rest intentionally. Sustainable productivity comes from rhythm, not constant grinding.",
                image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop"
            },
            {
                text: "Done is better than perfect. Ship your work and improve later. Perfectionism is often disguised procrastination.",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"
            },
            {
                text: "One task at a time. Multitasking is a myth that reduces the quality of everything you touch. Focus produces excellence.",
                image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&h=600&fit=crop"
            },
            {
                text: "Know when to stop for the day. Rest is not the enemy of productivity; it's the foundation. Recovery enables performance.",
                image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=800&h=600&fit=crop"
            }
        ]
    },

    {
        id: 8,
        title: "Health & Vitality",
        description: "Care for your physical temple",
        items: [
            {
                text: "Move your body daily. Exercise is not optional for a good life. Physical strength supports mental clarity.",
                image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=600&fit=crop"
            },
            {
                text: "Eat real food, mostly plants. Nutrition affects everything: mood, energy, focus, longevity. Fuel yourself well.",
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop"
            },
            {
                text: "Prioritize sleep above almost everything else. You cannot think clearly, perform well, or regulate emotions without adequate rest.",
                image: "https://images.unsplash.com/photo-1541480551145-2370a440d585?w=800&h=600&fit=crop"
            },
            {
                text: "Drink more water. Dehydration impairs cognition before you feel thirsty. Keep your system running optimally.",
                image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&h=600&fit=crop"
            },
            {
                text: "Spend time outdoors regularly. Nature restores mental energy and provides perspective. You are part of the natural world.",
                image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
            },
            {
                text: "Listen to your body's signals. Pain, fatigue, hunger, and thirst are information. Respond with care, not suppression.",
                image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=600&fit=crop"
            }
        ]
    },

    {
        id: 9,
        title: "Learning & Growth",
        description: "Expand your mind continuously",
        items: [
            {
                text: "Read daily. Books contain concentrated wisdom from people you'll never meet. Learning compounds over time.",
                image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop"
            },
            {
                text: "Ask better questions. The quality of your questions determines the quality of your understanding. Curiosity is a skill.",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
            },
            {
                text: "Embrace being a beginner. The willingness to look foolish while learning is the gateway to mastery.",
                image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
            },
            {
                text: "Teach what you learn. Explaining concepts to others reveals gaps in your own understanding and cements knowledge.",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop"
            },
            {
                text: "Seek out people who know more than you. Proximity to excellence accelerates your development. Choose your influences wisely.",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop"
            },
            {
                text: "Apply what you learn immediately. Knowledge without action is merely entertainment. Implementation creates transformation.",
                image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=600&fit=crop"
            }
        ]
    },

    {
        id: 10,
        title: "Money & Resources",
        description: "Manage wealth with wisdom",
        items: [
            {
                text: "Spend less than you earn. This simple principle creates financial security and peace of mind over time.",
                image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop"
            },
            {
                text: "Invest in assets that appreciate. Time spent building valuable skills pays dividends for life. Invest in yourself first.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
            },
            {
                text: "Money buys freedom, not happiness. Pursue financial security to create options, not to impress others.",
                image: "https://images.unsplash.com/photo-1621981386829-9b458a2cddde?w=800&h=600&fit=crop"
            },
            {
                text: "Avoid debt for consumption. Borrow only for investments that increase your earning capacity. Debt is a heavy chain.",
                image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&h=600&fit=crop"
            },
            {
                text: "Give generously from whatever you have. Generosity creates abundance mindset and strengthens community bonds.",
                image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=600&fit=crop"
            },
            {
                text: "Track where your money goes. Awareness enables conscious choices. You can't manage what you don't measure.",
                image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&h=600&fit=crop"
            }
        ]
    },

    {
        id: 11,
        title: "Creativity & Expression",
        description: "Create and share your gifts",
        items: [
            {
                text: "Create something, anything, regularly. Expression is a human need. Don't wait for permission or perfect conditions.",
                image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop"
            },
            {
                text: "Share your work before it's perfect. Feedback helps you improve. Hiding your creativity serves no one.",
                image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&h=600&fit=crop"
            },
            {
                text: "Creativity requires space. Boredom and silence are fertile ground for ideas. Constant stimulation kills inspiration.",
                image: "https://images.unsplash.com/photo-1506880135364-e28660dc35fa?w=800&h=600&fit=crop"
            },
            {
                text: "Study the masters of your craft. Learn the rules deeply so you know which ones to break intentionally.",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
            },
            {
                text: "Quantity leads to quality. Create volume without judgment. Your best work emerges through consistent practice.",
                image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop"
            },
            {
                text: "Your unique perspective matters. Stop trying to sound like someone else. Authenticity is your competitive advantage.",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
            }
        ]
    },

    {
        id: 12,
        title: "Purpose & Meaning",
        description: "Connect with something larger",
        items: [
            {
                text: "Know your 'why' deeply. Purpose gives direction when motivation fades. Connect daily actions to larger meaning.",
                image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=800&h=600&fit=crop"
            },
            {
                text: "Serve something beyond yourself. Contributing to others creates fulfillment that self-focus never provides.",
                image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop"
            },
            {
                text: "Your legacy is built daily. How you treat people and what you create matters more than what you accumulate.",
                image: "https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?w=800&h=600&fit=crop"
            },
            {
                text: "Question inherited beliefs regularly. Live according to examined values, not societal defaults or family conditioning.",
                image: "https://images.unsplash.com/photo-1473830394358-91588751b241?w=800&h=600&fit=crop"
            },
            {
                text: "Find meaning in both peaks and valleys. Purpose isn't just for mountaintop moments. Ordinary days matter most.",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop"
            },
            {
                text: "You will die. Let this fact focus your choices, not paralyze them. Impermanence makes every moment valuable.",
                image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop"
            }
        ]
    }
];

// Calculate total item count across all collections
const TOTAL_ITEMS = COLLECTIONS.reduce((sum, collection) => sum + collection.items.length, 0);

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { COLLECTIONS, TOTAL_ITEMS };
}
