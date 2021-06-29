export const arraySorter = <T extends object>(data: T[], arg: keyof T) =>
  data.slice().sort((a, b) => +a[arg] - +b[arg])

export default arraySorter
