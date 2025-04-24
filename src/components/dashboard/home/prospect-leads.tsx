import { prospectsData } from '@/utils/data';
import Image from 'next/image';
import React from 'react';

const ProspectLeads: React.FC = () => {
    const {leads} = prospectsData
  return (
    <>
      <h3 className="text-[16px] font-semibold text-gray-900 mb-2">Prospect Leads</h3>

      {/*Prospect leads */}
      <div className="space-y-1">
        {leads.map((lead, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#F6F7FB] py-[10px] px-[16px] rounded-lg"
          >
            <div className="flex items-center gap-3">
              <Image
              src={lead.pic}
              alt='prospect pic'
              width={36}
              height={36}
              className='rounded-full'
              />
              <span className="text-sm font-medium text-[#101828]">{lead.name}</span>
            </div>
            <span className="text-sm font-medium text-[#475467]">Stage: {lead.stage}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProspectLeads;