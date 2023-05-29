import { Quiz } from 'server/types.ts';

/**
 * The mocked personality test questions.
 */
export const quiz: Quiz = {
  id: 1,
  minScore: 5,
  maxScore: 20,
  questions: [
    {
      id: 1,
      question: 'You are really busy at work and a colleague is telling you their life story and personal woes. You:',
      options: [
        {
          id: '1.1',
          title: 'Do not dare to interrupt them',
          score: 1,
        },
        {
          id: '1.2',
          title: 'Think it’s more important to give them some of your time; work can wait',
          score: 2,
        },
        {
          id: '1.3',
          title: 'Listen, but with only with half an ear',
          score: 3,
        },
        {
          id: '1.4',
          title: 'Interrupt and explain that you are really busy at the moment',
          score: 4,
        }
      ]
    },
    {
      id: 2,
      question: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
      options: [
        {
          id: '2.1',
          title: 'Look at your watch every two minutes',
          score: 1,
        },
        {
          id: '2.2',
          title: 'Bubble with inner anger, but keep quiet',
          score: 2,
        },
        {
          id: '2.3',
          title: 'Explain to other equally impatient people in the room that the doctor is always running late',
          score: 3,
        },
        {
          id: '2.4',
          title: 'Complain in a loud voice, while tapping your foot impatiently',
          score: 4,
        }
      ]
    },
    {
      id: 3,
      question: 'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
      options: [
        {
          id: '3.1',
          title: 'Don’t dare contradict them',
          score: 1,
        },
        {
          id: '3.2',
          title: 'Think that they are obviously right',
          score: 2,
        },
        {
          id: '3.3',
          title: 'Defend your own point of view, tooth and nail',
          score: 3,
        },
        {
          id: '3.4',
          title: 'Continuously interrupt your colleague',
          score: 4,
        }
      ]
    },
    {
      id: 4,
      question: 'You are taking part in a guided tour of a museum. You:',
      options: [
        {
          id: '4.1',
          title: 'Are a bit too far towards the back so don’t really hear what the guide is saying',
          score: 1,
        },
        {
          id: '4.2',
          title: 'Follow the group without question',
          score: 2,
        },
        {
          id: '4.3',
          title: 'Make sure that everyone is able to hear properly',
          score: 3,
        },
        {
          id: '4.4',
          title: 'Are right up the front, adding your own comments in a loud voice',
          score: 4,
        }
      ]
    },
    {
      id: 5,
      question: 'During dinner parties at your home, you have a hard time with people who:',
      options: [
        {
          id: '5.1',
          title: 'Ask you to tell a story in front of everyone else',
          score: 1,
        },
        {
          id: '5.2',
          title: 'Talk privately between themselves',
          score: 2,
        },
        {
          id: '5.3',
          title: 'Hang around you all evening',
          score: 3,
        },
        {
          id: '5.4',
          title: 'Always drag the conversation back to themselves',
          score: 4,
        }
      ]
    }
  ],
}

/**
 * The personality traits assessed in this test.
 */
export enum PersonalityTrait {
  Introvert = 'Introvert',
  Both = 'A bit of both 😉',
  Extrovert = 'Extrovert',
}
