export type Step={
  name: string;
  completed: boolean;
}

export type userDataType={
    steps:Step[],
    percentage:number
}

export type Stage ={
  name:string,
  count:number
}

export type franchiseDataType = {
  total:number,
  percentageChange: number,
  stages: Stage[],
  persons: Array<string>
}

export type Feedback={
  text:string,
  sentiment?:boolean
}

export type insightsFeedbackType = {
  salesGrowth: 10,
  topPerformer?: string
  feedbacks: Feedback[],
}

export type FinanceDataType = {
  totalFranchisees: number,
  percentageChange: number,
  target: number,
  current: number,
}

export type Leads={
  name:string,
  stage:string,
  pic:string
}

export type ProspectsDataType={
  leads: Leads[]
}

export type Question = {
    name: string,
    username: string,
    question: string,
    timeAgo: string,
    pic: string,
    online: boolean,
}

export type pendingMessagesType ={
    questions: Question[],
    totalCount:number
}