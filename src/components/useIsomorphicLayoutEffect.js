// https://github.com/n8tb1t/use-scroll-position/tree/master/src
import { useLayoutEffect, useEffect } from 'react'

export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
