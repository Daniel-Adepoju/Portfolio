"use client"
import { closeNav } from "./nav"
import { active } from "./nav"
import { useSignals } from "@preact/signals-react/runtime"

const Backdrop = ({ children }) => {
  useSignals()
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${active.value ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={closeNav}
      ></div>
      {children}
    </>
  )
}

export default Backdrop
