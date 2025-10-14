import React from 'react'
import { VaxData } from '../../../data/VaxData';
import VaxItem from '../../../compnents/siemens/VaxItem';

function Items21() {
  return (
    <div>
      <VaxItem itemData={VaxData.Item21} />
    </div>
  )
}

export default Items21;