import React from 'react';
import CircularProgressBar from './CircularProgressBar';
import { BiCircle } from 'react-icons/bi';
import { TbCircleCheckFilled } from "react-icons/tb";
import { userDataType } from '@/utils/type';
import { demoUserData } from '@/utils/data';


const AccountProgress: React.FC = () => {
  const demoData:userDataType = demoUserData

  const completedSteps = demoData.steps.filter((s) => s.completed);
  const remainingSteps = demoData.steps.filter((s) => !s.completed);

  return (
    <>
      <h3 className="text-lg font-semibold text-center text-gray-900">Account Progress</h3>

      <div className="flex justify-center py-4">
        <CircularProgressBar percentage={demoData.percentage} />
      </div>

      <div className="border-t border-gray-200 mt-2 py-3" />

      {/*Steps completed */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Steps Completed</h4>
        <ul className="space-y-2">
          {completedSteps.map((step, idx) => (
            <li key={idx} className="flex items-center justify-between text-sm text-gray-800">
              <div className="flex items-center gap-2">
                <BiCircle size={12} className="text-gray-300" />
                {step.name}
              </div>
              <TbCircleCheckFilled size={16} className="text-green-600" />
            </li>
          ))}
        </ul>
      </div>

      {/*Steps not completed */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Steps Remaining</h4>
        <ul className="space-y-2">
          {remainingSteps.map((step, idx) => (
            <li key={idx} className="flex items-center justify-between text-sm text-gray-800">
              <div className="flex items-center gap-2">
                <BiCircle size={12} className="text-gray-300" />
                {step.name}
              </div>
              <TbCircleCheckFilled size={16} className="text-green-600/30" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AccountProgress;
