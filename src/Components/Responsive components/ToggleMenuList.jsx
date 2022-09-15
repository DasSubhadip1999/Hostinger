import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"
import ToggleMenuListDetail from './ToggleMenuListDetail';
import {AnimatePresence,motion} from "framer-motion";

function ToggleMenuList({data}) {
    const [showDetailList, setShowDetailList] = useState(false);

  return (
    <AnimatePresence>
    <div onClick={() => setShowDetailList( prev => !prev)} className='toggle-menu-list'>
        <div className='toggle-menu-list-item'>
            <p>{data.title}</p>
            <i 
            className={showDetailList ? 'fa-solid fa-angle-down rotate' : 'fa-solid fa-angle-down'}
            >

            </i>
        </div>
        <motion.div
            initial ={ {opacity : 0}}
            animate = { {opacity: 1}}
            exit = { {opacity : 0}}
        >
        {
            showDetailList && (
                data.detail.map( (item) => <ToggleMenuListDetail key={uuidv4()} data={item} />)
            )
        }
        </motion.div>
    </div>
    </AnimatePresence>
  )
}

export default ToggleMenuList