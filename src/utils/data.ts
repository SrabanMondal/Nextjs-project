import { FinanceDataType, franchiseDataType, insightsFeedbackType, pendingMessagesType, ProspectsDataType, Step, userDataType } from "./type";

export const demoUserData:userDataType = {
    steps: [
      { name: 'Profile Setup', completed: true },
      { name: 'Initial Training', completed: true },
      { name: 'Legal Documents', completed: false },
      { name: 'Financial Integration', completed: false },
      { name: 'Final Review', completed: false },
    ] as Step[],
    percentage: 85,
  };

  export const franchiseData:franchiseDataType = {
    total: 24,
    percentageChange: 7.4,
    stages: [
      { name: 'Stage 1 (Initial Inquiry)', count: 12 },
      { name: 'Stage 2 (Document Submission)', count: 7 },
      { name: 'Stage 3 (Training)', count: 5 },
    ],
    persons: [ '/persons/p1.png',
                '/persons/p2.png',
                '/persons/p3.png',
                '/persons/p4.png',
                '/persons/p5.png',
                '/persons/p6.png',
                '/persons/p7.png',
                '/persons/p8.png',
                '/persons/p9.png',
                '/persons/p10.png',
               ]
  }

export const insightsFeedbackData:insightsFeedbackType = {
    salesGrowth: 10,
    topPerformer: '/top/topPerformer.png',
    feedbacks: [{ text: 'Franchisees are requesting more detailed training materials.' }],
  }

export const financeData:FinanceDataType = {
    totalFranchisees: 20,
    percentageChange: 2.1,
    target: 500000,
    current: 450000,
  }

export const prospectsData:ProspectsDataType={
    leads: [
        { name: 'Wade Warren', stage: 'Initial Inquiry', pic:'/prospects/pros1.png' },
        { name: 'Ava Wright', stage: 'Initial Inquiry', pic:'/prospects/pros2.png' },
        { name: 'Cody Fisher', stage: 'Initial Inquiry', pic:'/prospects/pros3.png' },
      ]
}

export const pendingMessages:pendingMessagesType = {
    questions: [
      {
        name: 'Phoenix Baker',
        username: '@phoenix',
        question: 'What are the requirements for opening a new store?',
        timeAgo: '5min ago',
        pic: '/pending/chat1.png',
        online: true,
      },
      {
        name: 'Koray Okumus',
        username: '@koray',
        question: 'How do I manage inventory effectively?',
        timeAgo: '4hr ago',
        pic: '/pending/chat2.png',
        online: true,
      },
    ],
    totalCount: 2,
  }