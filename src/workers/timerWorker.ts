/* eslint-disable no-restricted-globals */

import { Ledfx } from '../api/ledfx'

interface WorkerMessage {
  action: 'start' | 'stop'
  interval: number
  scenePL: string[]
  scenePLactiveIndex: number
  scenePLrepeat: boolean
}

let timer: ReturnType<typeof setInterval> | null = null

self.onmessage = async function (e: MessageEvent<WorkerMessage>) {
  const { action, interval, scenePL, scenePLactiveIndex, scenePLrepeat } =
    e.data

  if (action === 'start') {
    if (timer === null) {
      timer = setInterval(async () => {
        let nextIndex = scenePLactiveIndex + 1
        if (nextIndex >= scenePL.length) {
          if (scenePLrepeat) {
            nextIndex = 0
          } else {
            self.postMessage({ action: 'stop' })
            return
          }
        }

        const nextSceneId = scenePL[nextIndex]
        try {
          await Ledfx('/api/scenes', 'PUT', {
            id: nextSceneId,
            action: 'activate'
          })
          self.postMessage({ action: 'sceneChanged', nextIndex })
        } catch (error) {
          console.error('Failed to activate scene:', error)
        }
      }, interval)
    }
  } else if (action === 'stop') {
    if (timer !== null) {
      clearInterval(timer)
      timer = null
    }
  }
}
