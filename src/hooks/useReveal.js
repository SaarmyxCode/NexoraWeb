import { useEffect, useRef } from 'react'

export const useReveal = (options = { threshold: 0.1 }) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.classList.add('is-revealed')
        observer.unobserve(element)
      }
    }, options)

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [options])

  return ref
}
