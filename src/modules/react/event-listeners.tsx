/**
 * @file event-listeners.tsx
 * @description A React hook that adds event listeners to the window object for resize, hashchange, and storage events.
 * 
 * This file demonstrates how to use the AbortController API to signal the event listeners to be removed when the component is unmounted.
 * It ensures that the event listeners are properly cleaned up to prevent memory leaks.
 */

import { useEffect } from 'react'

type EventHandler<T extends keyof WindowEventMap> = (event: WindowEventMap[T]) => void

type EventListeners<T extends keyof WindowEventMap> = {
  [K in T]: EventHandler<K>
}

const eventListeners:EventListeners<'resize' | 'hashchange' | 'storage'> = {
  resize: () => {},
  hashchange: () => {},
  storage: () => {},
}

useEffect(() => {
  const controller = new AbortController()

  Object.keys(eventListeners).forEach((key) => {
    window.addEventListener(
      key as keyof WindowEventMap,
      eventListeners[key as keyof typeof eventListeners] as EventListener,
      { signal: controller.signal }
    )
  })

  // Return a cleanup function to remove the event listeners
  return () => {
    controller.abort()
  }
}, [])
