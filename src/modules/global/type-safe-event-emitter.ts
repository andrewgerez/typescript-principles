/**
 * @file type-safe-event-emitter.ts
 * @description This file demonstrates how to create a type-safe event emitter in TypeScript.
 * 
 * The `EventEmitter` class allows for the registration and emission of events with type-safe payloads.
 * This approach ensures that event handlers receive the correct payload types, enhancing type safety and reducing runtime errors.
 */

type Events = {
  add: (a: number, b: number) => void
  delete: (id: string) => void
}

class EventEmitter<E extends Record<string, (...args: any[]) => void>> {
  private listeners: { [K in keyof E]?: E[K][] } = {}

  on<K extends keyof E>(event: K, listener: E[K]): void {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }

    this.listeners[event]!.push(listener)
  }

  emit<K extends keyof E>(event: K, ...args: Parameters<E[K]>): void {
    if (!this.listeners[event]) return

    for (const listener of this.listeners[event]!) {
      listener(...args)
    }
  }
}

const emitter = new EventEmitter<Events>()

emitter.on('add', (a, b) => {
  console.log(a + b)
})

emitter.emit('add', 1, 2) // ~> output: 3
