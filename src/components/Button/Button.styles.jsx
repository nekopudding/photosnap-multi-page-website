import { Box, styled, } from '@mui/material'

export const ContainedButton = styled(Box,{
  shouldForwardProp: (prop)=> prop !== 'invertColors',
})(({ invertColors, theme }) => ({
  backgroundColor: invertColors ? theme.palette.white : theme.palette.black,
  display: 'inline-flex',
  width: 158,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  '& *': {
    textDecoration: 'none',
    color: invertColors ? theme.palette.black : theme.palette.white,
    textTransform: 'uppercase',
  },
  '&:hover *, &:hover': {
    color: theme.palette.black,
    backgroundColor: theme.palette.grey
  },
}));

export const UnderlinedButton = styled(Box,{
  shouldForwardProp: (prop)=> prop !== 'invertColors',
})(({ invertColors, theme }) => ({
  display: 'inline-block',
  cursor: 'pointer',
  '& *': {
    color: invertColors ? theme.palette.white : theme.palette.black,
    textTransform: 'uppercase',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  },
}));

export const TextButton = styled(Box,{
  shouldForwardProp: (prop)=> prop !== 'invertColors',
})(({ invertColors, theme }) => ({
  display: 'inline-block',
  cursor: 'pointer',
  '& *': {
    color: invertColors ? theme.palette.white : theme.palette.black,
    textTransform: 'uppercase',
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.darkgrey
    }
  },
}));