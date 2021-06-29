const useDynamicImport = (path: string) => {
  const reqFiles = require.context(path, true, /\.jpg$/)
  const paths = reqFiles.keys()
  const files = paths.map((p: any) => reqFiles(p))

  return files
}

export default useDynamicImport
