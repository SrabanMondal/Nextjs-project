import { financeData } from '@/utils/data';
import React from 'react';
import { FaArrowTrendUp } from 'react-icons/fa6';


const FinancialWellbeing: React.FC = () => {
    const {totalFranchisees, percentageChange, target, current} = financeData;
  const formatCurrency = (value: number) =>
    `$${value.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;

  return (
    <>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">Financial Wellbeing</h3>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-2xl font-bold text-gray-900">{totalFranchisees}</div>
          <div className="text-sm text-gray-600">Total Franchisees</div>
        </div>
        <span className="text-green-600 border-2 border-green-600 px-2 rounded-full text-sm flex items-center gap-1">
            <FaArrowTrendUp className="w-3 h-3" />
          {percentageChange}%
        </span>
      </div>

      {/* target and current values */}
      <div className='border-2 border-gray-200 mb-4'/>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#F6F7FB] p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600">Target</div>
          <div className="text-lg font-semibold text-gray-900">{formatCurrency(target)}</div>
        </div>
        <div className="bg-[#F6F7FB] p-4 rounded-lg text-center">
          <div className="text-sm text-gray-600">Current</div>
          <div className="text-lg font-semibold text-gray-900">{formatCurrency(current)}</div>
        </div>
      </div>
    </>
  );
};

export default FinancialWellbeing;