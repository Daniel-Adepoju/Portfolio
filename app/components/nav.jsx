"use client"
import Link from "next/link"
import { signal, effect, useSignal, computed } from "@preact/signals-react"
import { useSignals } from "@preact/signals-react/runtime"

export const active = signal(false)

const toggle = () => {
  active.value = !active.value
}

export const closeNav = () => {
  if (active.value) {
    toggle()
  } else {
    return
  }
}

function Nav() {
  useSignals()

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-white/10 bg-ink/90 px-5 backdrop-blur-md md:px-10">
      <Link href={"/"}>
        <span onClick={closeNav}>
          <img
            className="w-16 md:w-20"
            alt="logo"
            src="/Logo Files/For Web/png/White logo - no background.png"
          />
        </span>
      </Link>
      <div
        onClick={toggle}
        className="flex w-10 flex-col gap-1.5 p-2 md:hidden"
      >
        <span
          className={`h-0.5 w-full bg-gold transition-transform ${active.value ? "translate-y-2 rotate-45" : ""}`}
        ></span>
        <span
          className={`h-0.5 w-full bg-gold transition-opacity ${active.value ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`h-0.5 w-full bg-gold transition-transform ${active.value ? "-translate-y-2 -rotate-45" : ""}`}
        ></span>
      </div>

      <span
        className={`absolute right-0 top-16 flex min-h-[calc(100vh-4rem)] w-52 flex-col items-center gap-6 border-l border-white/10 bg-ash px-6 py-10 transition-transform duration-300 md:static md:min-h-0 md:w-auto md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0 ${active.value ? "translate-x-0" : "translate-x-full md:translate-x-0"}`}
      >
        <Link
          className="py-2 text-sm uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-gold"
          href={"/projects"}
        >
          <span onClick={toggle}> Projects </span>
        </Link>
        <Link
          className="py-2 text-sm uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-gold"
          href={"#contact"}
        >
          <span onClick={toggle}> Contact </span>
        </Link>
        <Link
          className="py-2 text-sm uppercase tracking-[0.2em] text-white/75 transition-colors hover:text-gold"
          href={"/#about"}
        >
          <span onClick={toggle}> About </span>
        </Link>
      </span>
    </nav>
  )
}

export default Nav
