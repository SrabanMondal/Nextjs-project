import { franchiseData } from '@/utils/data';
import Image from 'next/image';
import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";


const TotalFranchiseesOnboard: React.FC = () => {
    const {total, percentageChange, stages, persons} = franchiseData;
  const totalCount = stages.reduce((sum, stage) => sum + stage.count, 0);
  const stageWidths = stages.map((stage) =>
    Math.round((stage.count / totalCount) * 100)
  );

  const colors = ['bg-blue-900', 'bg-blue-400', 'bg-blue-200'];

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-md text-gray-600 font-bold">
          Total Franchisees Onboard
        </h3>
        
      </div>

    {/* total count and profiles*/}
      <div className="flex items-center mb-3 justify-between">
        <div className='flex items-center gap-4'>
        <span className="text-3xl font-bold text-gray-900">{total}</span>
        <div className="flex items-center gap-1 px-2 py-0.5 border-2 border-green-600 text-green-600 text-xs font-semibold rounded-full">
          <FaArrowTrendUp className="w-3 h-3" />
          {percentageChange}%
        </div>
        </div>
        <div className="flex -space-x-2">
          {persons.slice(0,5).map((person, i) => (
            <Image
              key={i}
              src={person}
              alt='person pic'
              width={24}
              height={24}
              className="rounded-full border-2 border-white"
            />
          ))}
          <span className="w-6 h-6 rounded-full bg-[#F2F4F7] text-[#475467] text-[10px] flex items-center justify-center border-2 border-white">
            +{persons.length-5}
          </span>
        </div>
      </div>

    {/* stages width */}
      <div className="relative h-2.5 rounded-full overflow-hidden mb-4 flex gap-1">
        {stages.map((stage, idx) => (
          <div
            key={stage.name}
            className={`${colors[idx]} h-full rounded`}
            style={{ width: `${stageWidths[idx]}%` }}
          />
        ))}
      </div>

    {/*stage name*/}
      <div className="flex flex-col gap-3">
        {stages.map((stage, idx) => (
          <div key={stage.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <span
                className={`w-2.5 h-2.5 rounded-full ${colors[idx]}`}
              ></span>
              {stage.name}
            </div>
            <span className="font-semibold text-gray-800">
              {stage.count.toString().padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default TotalFranchiseesOnboard;
