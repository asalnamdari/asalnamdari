const accent: DefaultPalette = {
  get main() {
    return this[500]
  },
  50: '#ffebee',
  100: '#ffccd1',
  200: '#f79896',
  300: '#ef6f6d',
  400: '#fa4b47',
  500: '#ff3729',
  600: '#f02b29',
  700: '#de1d24',
  800: '#d1121c',
  900: '#c3000c',
}
const primary: DefaultPalette = {
  get main() {
    return this[700]
  },
  get dark() {
    return this[800]
  },
  get light() {
    return this[100]
  },
  get contrastText() {
    return accent.main
  },
  50: '#ffffff',
  100: '#e5e7eb',
  200: '#d1d5db',
  300: '#9ca3af',
  400: '#6b7280',
  500: '#4b5563',
  600: '#374151',
  700: '#262940',
  800: '#0f131a',
  900: '#000',
}

const secondary: DefaultPalette = {
  get main() {
    return this[600]
  },
  get contrastText() {
    return accent.main
  },
  50: '#EDEDED',
  100: '#cfd8df',
  200: '#b2bdc8',
  300: '#93a3b2',
  400: '#7c8ea0',
  500: '#657b8f',
  600: '#586c7e',
  700: '#485967',
  800: '#394652',
  900: '#27313a',
}

const error: DefaultPalette = {
  get main() {
    return this[900]
  },
  get contrastText() {
    return accent.main
  },
  50: '#FFEBEE',
  100: '#FFCDD2',
  200: '#EF9A9A',
  300: '#E57373',
  400: '#EF5350',
  500: '#F44336',
  600: '#E53935',
  700: '#D32F2F',
  800: '#C62828',
  900: '#B71C1C',
}

const warning: DefaultPalette = {
  get main() {
    return this[900]
  },
  get contrastText() {
    return accent.main
  },
  50: '#FFFDE7',
  100: '#FFF9C4',
  200: '#FFF59D',
  300: '#FFF176',
  400: '#FFEE58',
  500: '#FFEB3B',
  600: '#FDD835',
  700: '#FBC02D',
  800: '#F9A825',
  900: '#F57F17',
}

const info: DefaultPalette = {
  get main() {
    return this[900]
  },
  get contrastText() {
    return accent.main
  },
  50: '#E3F2FD',
  100: '#BBDEFB',
  200: '#90CAF9',
  300: '#64B5F6',
  400: '#42A5F5',
  500: '#2196F3',
  600: '#1E88E5',
  700: '#1976D2',
  800: '#1565C0',
  900: '#0D47A1',
}

const palette: IPalette = {
  background: { default: '#fff', paper: '#fff' },
  common: {
    white: '#fff',
    black: '#000',
  },
  text: {
    primary: '#fff',
    secondary: '#000',
    disabled: '#394652',
    hint: '#9ca3af',
  },
  primary,
  secondary,
  accent,
  error,
  info,
  warning,
}

export default palette
