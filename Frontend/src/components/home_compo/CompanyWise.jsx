import React from 'react'

const CompanyWise = ({item}) => {
  return (
          <div className={`h-64 w-[22rem] flex-shrink-0 rounded-xl p-6 border border-[#00b8a3] shadow hover:shadow-lg transition-shadow flex flex-col justify-between` }>
  <div>

  <h3 className='text-gray-500 font-base text-lg'>Company-Specific Preparation</h3>
  <span className='justify-center flex my-2 text-4xl'>{item.logo}</span>
   <span className=" px-2 py-1 text-red-500 font-semibold">{item.difficulty}</span>
  <h3 className="text-3xl font-bold font-sans text-[#00b8a3] mb-2">{item.name}</h3>
  <p className="hidden md:block text-gray-600 mb-4 text-sm">
    {item.description}
  </p>
  </div>

  <button className="mt-4 w-full bg-[#00b8a3] text-white py-2 px-4 rounded-lg hover:bg-[#00a693] transition-colors">
    Learn
  </button>
</div>
   
  )
}

export default CompanyWise;