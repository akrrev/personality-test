import { Question } from './types.ts';

export const questions: Question[] = [
  {
    id: 1,
    question: 'You are really busy at work and a colleague is telling you their life story and personal woes. You:',
    options: [
      {
        title: 'Do not dare to interrupt them',
        value: 1,
      },
      {
        title: 'Think it’s more important to give them some of your time; work can wait',
        value: 2,
      },
      {
        title: 'Listen, but with only with half an ear',
        value: 3,
      },
      {
        title: 'Interrupt and explain that you are really busy at the moment',
        value: 4,
      }
    ]
  },
  {
    id: 2,
    question: 'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
    options: [
      {
        title: 'Look at your watch every two minutes',
        value: 1,
      },
      {
        title: 'Bubble with inner anger, but keep quiet',
        value: 2,
      },
      {
        title: 'Explain to other equally impatient people in the room that the doctor is always running late',
        value: 3,
      },
      {
        title: 'Complain in a loud voice, while tapping your foot impatiently',
        value: 4,
      }
    ]
  },
  {
    id: 3,
    question: 'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
    options: [
      {
        title: 'Don’t dare contradict them',
        value: 1,
      },
      {
        title: 'Think that they are obviously right',
        value: 2,
      },
      {
        title: 'Defend your own point of view, tooth and nail',
        value: 3,
      },
      {
        title: 'Continuously interrupt your colleague',
        value: 4,
      }
    ]
  },
  {
    id: 4,
    question: 'You are taking part in a guided tour of a museum. You:',
    options: [
      {
        title: 'Are a bit too far towards the back so don’t really hear what the guide is saying',
        value: 1,
      },
      {
        title: 'Follow the group without question',
        value: 2,
      },
      {
        title: 'Make sure that everyone is able to hear properly',
        value: 3,
      },
      {
        title: 'Are right up the front, adding your own comments in a loud voice',
        value: 4,
      }
    ]
  },
  {
    id: 5,
    question: 'During dinner parties at your home, you have a hard time with people who:',
    options: [
      {
        title: 'Ask you to tell a story in front of everyone else',
        value: 1,
      },
      {
        title: 'Talk privately between themselves',
        value: 2,
      },
      {
        title: 'Hang around you all evening',
        value: 3,
      },
      {
        title: 'Always drag the conversation back to themselves',
        value: 4,
      }
    ]
  }
];
