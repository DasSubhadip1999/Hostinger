import React, { useState } from 'react'
import {AnimatePresence, motion} from "framer-motion"
import MenuItemList from './MenuItemList'

function MenuItem({data}) {
  const [isDrop, setIsDrop] = useState(false)
  const setDrop = () => {setIsDrop( prev => !prev)}

  return (
    <AnimatePresence>
    <div onClick={setDrop}  className='menu-item'>
        {data.title}
        <i className="fa-solid fa-angle-down"></i>
        {
          isDrop && (
            <motion.div
              key={data.id}
              initial = { {opacity : 0} }
              animate = { { opacity : 1} }
              exit = { { opacity : 0} }
            >
              <div className='item-detail'>
                {
                  data.detail.map( (item) => {
                    return <MenuItemList data={item} />
                  })
                }

              </div>
            </motion.div>
          )
        }
    </div>
    </AnimatePresence>
  )
}

export default MenuItem