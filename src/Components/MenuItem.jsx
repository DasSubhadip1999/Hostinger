import React, { useState, useContext } from 'react'
import { v4 as uuidv4} from "uuid";
import {AnimatePresence, motion} from "framer-motion"
import MenuItemList from './MenuItemList'
import TranslationContext from '../Context/TranslationContext';

function MenuItem({data}) {
  const { t } = useContext(TranslationContext)
  const [isDrop, setIsDrop] = useState(false)
  const setDrop = () => {setIsDrop( prev => !prev)}
  return (
    <AnimatePresence>
    <div onClick={setDrop}  className='menu-item'>
        {`${t(data.title)}`}
        <i className={ isDrop ? "fa-solid fa-angle-down rotate" : "fa-solid fa-angle-down"}></i>
        {
          isDrop && (
            <motion.div
              key={uuidv4()}
              initial = { {opacity : 0} }
              animate = { { opacity : 1} }
              exit = { { opacity : 0} }
            >
              <div className='item-detail'>
                {
                  data.detail.map( (item) => {
                    return <MenuItemList key={uuidv4()} data={item} />
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