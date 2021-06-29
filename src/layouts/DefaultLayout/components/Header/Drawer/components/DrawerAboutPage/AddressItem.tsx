import { Typography } from '@material-ui/core'
import React, { FC, ReactNode } from 'react'
import { makePrStyles } from 'theme'

const useAddressItemStyle = makePrStyles(
  ({ spacing }) => ({
    root: { margin: spacing(2, 0), display: 'flex', alignItems: 'center' },
    text: { margin: spacing(0, 2), fontSize: '1rem' },
  }),
  { name: 'AddressItem' },
)
export const AddressItem: FC<{ icon?: ReactNode; children: ReactNode }> = ({
  children,
  icon,
}) => {
  const classes = useAddressItemStyle()
  return (
    <div className={classes.root}>
      {icon}
      {typeof children === 'string' ? (
        <Typography className={classes.text}>{children}</Typography>
      ) : (
        children
      )}
    </div>
  )
}

export default AddressItem
