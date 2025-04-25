import { insightsFeedbackData } from '@/utils/data';
import Image from 'next/image';
import React from 'react';


const KeyInsightsFeedback: React.FC = () => {
    const {salesGrowth, topPerformer, feedbacks} = insightsFeedbackData;
  const feedbackToShow = feedbacks[0];

  return (
    <>
      <h3 className="text-[16px] font-semibold text-black mb-2">Key Insights & Feedback</h3>
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="text-2xl font-bold text-gray-900">{salesGrowth}%</div>
          <div className="text-xs text-gray-600">Sales Growth</div>
        </div>
        <div>
          {topPerformer && (
            <div className='flex flex-col items-center justify-center gap-1'>
            <Image src={topPerformer} alt='top-performer' width={36} height={36} />
            <span className="bg-[#D5F2FF80] border border-[#BAE9FF] text-[#279DD4] text-xs font-medium px-3 py-0.5 rounded-[20px]">
              Top Performer
            </span>
            </div>
          )}
        </div>
      </div>
    
      <div className='border-b-[2px] border-gray-200 mb-3'/>

      {/*1 feedback */}
      <div className="bg-[#F6F7FB] px-4 py-2 rounded-[8px] hover:bg-gray-200 cursor-pointer">
        <div className="text-sm text-gray-600">Feedback</div>
        <div className="text-sm text-gray-500 mt-1">{feedbackToShow.text}</div>
      </div>
    </>
  );
};

export default KeyInsightsFeedback;