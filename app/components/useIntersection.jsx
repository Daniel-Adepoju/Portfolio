
import { useRef, useCallback } from "react"

const useIntersection = (classname) => {
    
    const observer = useRef()
    
    return  useCallback(node => {
        // if (observer.current) observer.current.disconnect();
        
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(classname)
                } else if (!entry.isIntersecting) {
            entry.target.classList.remove(classname)
          }
         })
      
       },[])
       if (node) observer.current.observe(node)
       })
    
    
}

export default useIntersection