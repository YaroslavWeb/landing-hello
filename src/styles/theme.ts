// Source: https://getbootstrap.com/docs/4.0/layout/grid/
export enum E_MediaQuery {
  xl = '(max-width: 1140px)',
  lg = '(max-width: 960px)',
  md = '(max-width: 720px)',
  sm = '(max-width: 540px)',
}

export const theme = {
  palette: {
    primary: '#005FF8',

    white: '#FFFFFF',
    black: '#050038',
    gray: '#5B5E6D',
    lightGray: '#5B5E6D',
  },
  media: {
    xl: E_MediaQuery.xl,
    lg: E_MediaQuery.lg,
    md: E_MediaQuery.md,
    sm: E_MediaQuery.sm,
  },
  sizes: {
    header: { height: 64 },
    sidebar: { width: 240 },
  },
}

export type Theme = typeof theme
