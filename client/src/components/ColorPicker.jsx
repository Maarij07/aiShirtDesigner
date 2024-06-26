import React from 'react'
import {SketchPicker} from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap=useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
      color={snap.color} 
      disableAlpha 
      onChange={(color)=>state.color=color.hex}
      presetColors={[
        '#CCC',"#EFBD4E","#80C670","#726DE8","#353934","#2ccce4","#ff8a65","#7098DA","#C19277","#ff96ad","#512314","#5F123D"
      ]}
       />
    </div>
  )
}

export default ColorPicker