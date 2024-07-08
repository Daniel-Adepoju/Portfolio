'use client'
import Link from "next/link"
import { signal, effect,useSignal, computed} from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"


 export const active = signal(false)

  const toggle = () => {
    active.value = !active.value
 } 

 export const closeNav = () => {
  if(active.value) {
     toggle()
  } else {return}
}

  function Nav() { 
 useSignals()


  return (
  <nav className='nav'>
   <Link href={'/'}>
    <span onClick={closeNav}>
      <img className="logo" alt='logo' 
    src='/Logo Files/For Web/png/White logo - no background.png'
    />
    </span>
   </Link>
     <div
     onClick={toggle}
     className={`toggleContainer ${active.value && 'active'}`}>
       <span className="toggleItem"></span>
       <span className="toggleItem"></span>
       <span className="toggleItem"></span>
     </div>
  
    <span className={`itemContainer ${active.value && 'active'} `}>
        <Link className="item" href={'/projects'}>
        <span onClick={toggle}> Projects </span>
        </Link>
   <Link  className='item' href={''}>
     <span onClick={toggle}> Contact </span>
   </Link>
       <Link className="item" href={''}> 
       <span onClick={toggle}> About </span> 
       </Link>
    </span>
  </nav>
  )
}

export default Nav