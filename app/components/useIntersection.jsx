import { useEffect, useRef,useCallback } from "react"

const useIntersection = (classname) => {
  const nodeRef = useRef(null)

  useEffect(() => {
    const node = nodeRef.current
    if(!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
        node.classList.add(classname, entry.isIntersecting)
      }
    },
      { threshold: 0.15 },
    )
    if (node) observer.observe(node)
    return () => observer.disconnect()
  }, [classname])

  return nodeRef
}

export default useIntersection
