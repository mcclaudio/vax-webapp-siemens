import React from 'react'
import { VaxData } from '../../../data/VaxData';
import VaxItem from '../../../compnents/siemens/VaxItem';

function Items23() {
  return (
    <div>
      <VaxItem itemData={VaxData.Item23} />
    </div>
  )
}

export default Items23;