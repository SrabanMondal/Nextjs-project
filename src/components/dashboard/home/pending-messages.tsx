import { pendingMessages } from '@/utils/data';
import Image from 'next/image';
import React from 'react';

const PendingMessages: React.FC = () => {
  const { questions, totalCount } = pendingMessages;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border md:min-w-[20rem] border-[#EAECF0] w-full lg:max-w-[26rem] flex-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-900">Pending Questions</h3>
        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          {totalCount.toString().padStart(2, '0')}
        </span>
      </div>

      {/*pending Chat */}
      <div className='flex flex-col'>
        {questions.map((question, index) => (
          <div
            key={index}
            className={`flex flex-col items-start w-full gap-3 rounded-md p-2 mb-2 cursor-pointer hover:bg-gray-100 ${
              index !== questions.length - 1 ? 'border-b border-[#EAECF0]' : ''
            }`}
          >
            
            <div className='flex justify-between gap-2 w-full items-stretch'>
                <div className=' flex items-center'>

                
            <div className=" w-2 h-2 rounded-full bg-blue-600" />

            <div className="relative">
              <Image
                src={question.pic}
                alt="Profile picture"
                width={40}
                height={40}
                className="rounded-full"
                />
              {question.online && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white" />
                )}
            </div>
            <div className='flex-1'>
            <div className="text-sm font-medium text-[#344054]">{question.name}</div>
            <div className="text-xs text-[#475467]">{question.username}</div>
            </div>
            </div>

            <div className="text-xs text-[#475467] whitespace-nowrap">
                <div>{question.timeAgo}</div>
              
            </div>
                </div>
            <div className="flex-1">
              <div className="text-sm text-gray-600 mt-1">{question.question}</div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingMessages;
