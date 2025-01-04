import { PaletteMode } from '@mui/material'
import { createTheme, Theme } from '@mui/material/styles'
import isElectron from 'is-electron'

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary']
  }
  interface PaletteOptions {
    accent: PaletteOptions['primary']
  }
}

export const common = {
  typography: {
    fontFamily: '"Nunito", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightRegular: 400
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: 'inherit' as
          | 'error'
          | 'success'
          | 'warning'
          | 'info'
          | 'inherit'
          | 'primary'
          | 'secondary'
          | undefined,
        variant: 'outlined' as 'contained' | 'outlined' | 'text' | undefined,
        size: 'small' as 'small' | 'medium' | 'large'
      },
      styleOverrides: {
        root: {
          borderColor: '#bbb'
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined' as 'filled' | 'outlined' | 'standard' | undefined
      }
    },
    MuiSelect: {
      defaultProps: {
        variant: 'standard' as 'filled' | 'outlined' | 'standard' | undefined
        // inputProps: {
        //   disableUnderline: true,
        // },
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundImage: 'none'
        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    },
    MuiChip: {
      defaultProps: {
        variant: 'outlined' as 'outlined' | 'filled' | undefined,
        sx: {
          m: 0.3
        }
      }
    },
    MuiBottomNavigationAction: {
      defaultProps: {
        sx: { minWidth: 50, color: '#a1998e' }
      }
    }
  }
}

export const BladeDarkGreenTheme = {
  palette: {
    mode: 'dark' as PaletteMode | undefined,
    primary: {
      main: '#2BDE6A'
    },
    secondary: {
      main: '#1db94d'
    },
    accent: {
      main: '#20173c'
    }
  }
}

export const BladeLightGreenTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1db954'
    },
    secondary: {
      main: '#14833b'
    },
    accent: {
      main: '#20173c'
    },
    background: {
      default: '#fdfdfd',
      paper: '#eee'
    }
  }
})

export const BladeLightLegacyTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#009688'
    },
    secondary: {
      main: '#009688'
    },
    accent: {
      main: '#20173c'
    },
    background: {
      default: '#fdfdfd',
      paper: '#eee'
    }
  }
})

export const BladeDarkLegacyTheme = {
  palette: {
    mode: 'dark' as PaletteMode | undefined,
    primary: {
      main: '#009688'
    },
    secondary: {
      main: '#009688'
    },
    accent: {
      main: '#20173c'
    },
    background: {
      default: '#000',
      paper: '#090909'
    }
  }
}
export const BladeDarkBwTheme = {
  palette: {
    mode: 'dark' as PaletteMode | undefined,
    primary: {
      main: '#FFFFFF'
    },
    secondary: {
      main: '#000000'
    },
    accent: {
      main: '#000000'
    },
    background: {
      default: '#000',
      paper: '#090909'
    }
  }
}
export const BladeLightBwTheme = {
  palette: {
    mode: 'light' as PaletteMode | undefined,
    primary: {
      main: '#000000'
    },
    secondary: {
      main: '#FFFFFF'
    },
    accent: {
      main: '#FFFFFF'
    }
  }
}

export const BladeDarkBlueTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#f9f9fb'
    },
    primary: {
      main: '#0dbedc'
    },
    secondary: {
      main: '#0dbedc'
    },
    accent: {
      main: '#0018c'
    },
    error: {
      main: '#a00000'
    },
    background: {
      default: '#000',
      paper: '#1c1c1e'
    }
  }
})

export const BladeDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b00000'
    },
    secondary: {
      main: '#400000'
    },
    accent: {
      main: '#20173c'
    },
    background: {
      default: '#030303',
      paper: '#111'
    }
  }
})

export const BladeDarkGreyTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#333'
    },
    secondary: {
      main: '#222'
    },
    accent: {
      main: '#444'
    },
    background: {
      default: '#030303',
      paper: '#111'
    }
  }
})

export const BladeDarkOrangeTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFBF47'
    },
    secondary: {
      main: '#edad2d'
    },
    accent: {
      main: '#4281'
    },
    background: {
      default: '#030303',
      paper: '#111'
    }
  }
})

export const BladeDarkPinkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff80ab'
    },
    secondary: {
      main: '#bf026b'
    },
    accent: {
      main: '#400729'
    },
    background: {
      default: '#030303',
      paper: '#111'
    }
  }
})

export const BladeLightPinkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e91e63'
    },
    secondary: {
      main: '#c2185b'
    },
    accent: {
      main: '#ff80ab'
    },
    background: {
      default: '#fdfdfd',
      paper: '#eee'
    }
  }
})

export const BladeLightRedTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#800000'
    },
    secondary: {
      main: '#800000'
    },
    accent: {
      main: '#a00000'
    },
    background: {
      default: '#fdfdfd',
      paper: '#eee'
    }
  }
})
export const BladeLightOrangeTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#d48806'
    },
    secondary: {
      main: '#edad2d'
    },
    accent: {
      main: '#4281'
    },
    background: {
      default: '#fdfdfd',
      paper: '#eee'
    }
  }
})
export const BladeLightBlueTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#03a9f4'
    },
    secondary: {
      main: '#03a9f4'
    },
    accent: {
      main: '#0288d1'
    },
    background: {
      default: '#fdfdfd',
      paper: '#eee'
    }
  }
})

export const ledfxThemes = {
  DarkRed: BladeDarkTheme,
  DarkOrange: BladeDarkOrangeTheme,
  DarkGreen: BladeDarkGreenTheme,
  DarkBlue: BladeDarkBlueTheme,
  DarkGrey: BladeDarkGreyTheme,
  DarkPink: BladeDarkPinkTheme,
  DarkBw: BladeDarkBwTheme,
  LightRed: BladeLightRedTheme,
  LightOrange: BladeLightOrangeTheme,
  LightBlue: BladeLightBlueTheme,
  LightPink: BladeLightPinkTheme,
  LightGreen: BladeLightGreenTheme,
  LightLegacy: BladeLightLegacyTheme,
  DarkLegacy: BladeDarkLegacyTheme,
  LightBw: BladeLightBwTheme
} as any

export const themes = {
  blue: {
    dark: BladeDarkBlueTheme,
    light: BladeLightBlueTheme
  },
  red: {
    dark: BladeDarkTheme,
    light: BladeLightRedTheme
  },
  orange: {
    dark: BladeDarkOrangeTheme,
    light: BladeLightOrangeTheme
  },
  pink: {
    dark: BladeDarkPinkTheme,
    light: BladeLightPinkTheme
  },
  green: {
    dark: BladeDarkGreenTheme,
    light: BladeLightGreenTheme
  },
  legacy: {
    dark: BladeDarkLegacyTheme,
    light: BladeLightLegacyTheme
  },
  bw: {
    dark: BladeDarkBwTheme,
    light: BladeLightBwTheme
  }
}

export const ledfxTheme =
  (window.localStorage.getItem('ledfx-theme')
    ? window.localStorage.getItem('ledfx-theme')
    : window.localStorage.getItem('hassTokens')
      ? 'DarkBlue'
      : window.location.origin === 'https://my.ledfx.app'
        ? 'DarkGreen'
        : isElectron()
          ? 'DarkBw'
          : 'DarkBlue') || 'DarkBlue'
