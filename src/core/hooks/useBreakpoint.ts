/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useMediaQuery, useTheme } from '@material-ui/core'
import { useEffect, useMemo, useState } from 'react'

type BreakpointState = { [key in Breakpoint]: boolean } & {
  width: Breakpoint
  start: number
  end: number
}
type BreakpointEntries = [Breakpoint, number][]

export const useBreakpointDown = (key: Breakpoint) => {
  const {
    breakpoints: { down, values },
  } = useTheme() as ITheme

  return useMediaQuery(down(values[key]))
}

export const useBreakpoint = () => {
  const {
    breakpoints: { up, values, between },
  } = useTheme() as ITheme

  const [breakpoints, setBreakpoints] = useState<BreakpointState>(() => ({
    width: 'xs',
    xs: true,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    start: 0,
    end: values.sm,
  }))

  const sortBreakpoints = (entries: BreakpointEntries) =>
    entries.sort(([, v1], [, v2]) => v2 - v1)

  const sortedBreakpoints = useMemo(
    () => sortBreakpoints(Object.entries(values) as BreakpointEntries),
    [values],
  )
  const hasWidthChanged = !useMediaQuery(
    between(breakpoints.start, breakpoints.end),
  )

  const getNextStart = (
    orderedEntries: BreakpointEntries,
    currentBreakpointStart: number,
  ) =>
    orderedEntries
      .filter(([, value]) => value > currentBreakpointStart)
      .reverse()[0]?.[1] ?? window.innerWidth + 100

  const getCurrentWidth = (orderedEntries: BreakpointEntries) =>
    orderedEntries.find(
      ([_, value]) => matchMedia(`(min-width:${value}px)`).matches,
    )?.[0]

  useEffect(() => {
    if (!hasWidthChanged) {
      return
    }

    const currentWidth = getCurrentWidth(sortedBreakpoints)

    if (currentWidth === breakpoints.width) {
      return
    }

    if (!currentWidth) {
      return
    }

    const start = values[currentWidth]
    const end = getNextStart(sortedBreakpoints, start)

    setBreakpoints(({ width: lastWidth, ...rest }) => ({
      ...rest,
      start,
      end,
      [lastWidth!]: false,
      [currentWidth]: true,
      width: currentWidth,
    }))
  }, [breakpoints.width, hasWidthChanged, sortedBreakpoints, up, values])

  return breakpoints
}

export default {}
