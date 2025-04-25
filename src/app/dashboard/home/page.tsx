import AccountProgress from '@/components/dashboard/home/AccountProgress/account-progress'
import AIChatAssistant from '@/components/dashboard/home/ai-chat'
import FinancialWellbeing from '@/components/dashboard/home/finance'
import KeyInsightsFeedback from '@/components/dashboard/home/insights-feedback'
import TopNavbar from '@/components/dashboard/home/nav'
import PendingMessages from '@/components/dashboard/home/pending-messages'
import ProspectLeads from '@/components/dashboard/home/prospect-leads'
import TotalFranchiseesOnboard from '@/components/dashboard/home/total-franchise'
import React from 'react'

const page = () => {
  return (
<div className='w-full md:w-[calc(100vw-16rem)]'>
  <TopNavbar />

  <div className="flex flex-wrap gap-4 px-5 py-4 w-full">

    <div className="w-full md:w-[45%] lg:w-[25%] flex-grow md:flex-grow-0">
      <div className="bg-white p-6 w-full rounded-xl shadow-sm border border-[#EAECF0] h-full">
        <AccountProgress />
      </div>
    </div>

    <div className="w-full md:w-[50%] flex flex-col gap-4 md:min-w-[20rem] lg:w-[35%]">
      <div className="bg-white p-6 w-full rounded-xl shadow-sm border border-[#EAECF0] flex-1">
        <TotalFranchiseesOnboard />
      </div>
      <div className="bg-white p-6 w-full rounded-xl shadow-sm border border-[#EAECF0] flex-1">
        <FinancialWellbeing />
      </div>
    </div>

    <div className="w-full lg:w-[35%] flex flex-col md:flex-row gap-4 md:min-w-[27rem] lg:flex-col">
      <div className="bg-white p-6 w-full rounded-xl shadow-sm border border-[#EAECF0] flex-1">
        <KeyInsightsFeedback />
      </div>
      <div className="bg-white p-6 w-full rounded-xl shadow-sm border border-[#EAECF0] flex-1">
        <ProspectLeads />
      </div>
    </div>
  </div>

  <div className='w-full flex flex-col md:flex-wrap md:flex-row'>
      <PendingMessages />
      <AIChatAssistant />
    
  </div>
</div>

  )
}

export default page