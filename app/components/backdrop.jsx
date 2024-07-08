'use client'
import { closeNav } from './nav'
import { active } from './nav'
import { useSignals } from '@preact/signals-react/runtime'

const Backdrop = ({children}) => {
 useSignals()
  return (
    <>
    <div className={active.value ? 'backDrop' : 'out'} onClick={closeNav}></div>
    {children}
    </>
  ) 
}

export default Backdrop