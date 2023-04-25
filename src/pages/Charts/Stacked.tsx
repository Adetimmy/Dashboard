import React from 'react'
import { Stack, Header, Text } from '../../component'
import { SparklineAreaData } from '../../data/dummy'
import { useStateContext } from '../../context/ContentProvider'
const Stacked = () => {
  const { currentColor } = useStateContext()
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category='Chart' title='Stacked'/>
      <Text>Revenue Breakdown</Text>
      <div className='w-full'>
        <Stack 
          width='auto'
          height='auto'
        />
      </div>
    </div>
  )
}

export default Stacked