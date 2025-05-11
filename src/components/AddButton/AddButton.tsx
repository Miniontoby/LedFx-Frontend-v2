import { Fab, IconButton, useTheme } from '@mui/material'
import { AddSharp as Add, ElectricalServices } from '@mui/icons-material'
import { useState } from 'react'
import useStore from '../../store/useStore'
import GlobalActionBar from '../GlobalActionBar'
import BladeIcon from '../Icons/BladeIcon/BladeIcon'
import { AddButtonProps } from './AddButton.props'
import { AddBStyle, AddBWrapper, AnchorState, MenuLine, StyledMenu, useStyles } from './AddB.styles'

const AddButton = ({ className, style, setBackdrop, sx }: AddButtonProps) => {
  const classes = useStyles()
  const theme = useTheme()
  const features = useStore((state) => state.features)
  const openAddScene = useStore((state) => state.setDialogOpenAddScene)
  const openAddDevice = useStore((state) => state.setDialogOpenAddDevice)
  const openAddVirtual = useStore((state) => state.setDialogOpenAddVirtual)
  const openAddInt = useStore((state) => state.setDialogOpenAddIntegration)

  const [anchorEl, setAnchorEl] = useState<AnchorState>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setBackdrop(true)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setBackdrop(false)
  }

  const menuitems = [
    {
      icon: <BladeIcon name="mdi:led-strip" />,
      name: 'Add Device',
      description: 'New light hardware',
      action: () => {
        openAddDevice(true)
        handleClose()
      }
    },
    {
      icon: <BladeIcon name="mdi:led-strip-variant" />,
      name: 'Add Virtual',
      description: 'Segments & Groups',
      action: () => {
        openAddVirtual(true)
        handleClose()
      }
    },
    {
      icon: <BladeIcon name="mdi:image-plus" />,
      name: 'Add Scene',
      description: 'Save your current setup',
      action: () => {
        openAddScene(true)
        handleClose()
      }
    }
  ]

  if (features.integrations) {
    menuitems.push({
      icon: <ElectricalServices />,
      name: 'Add Integration',
      description: 'Extend LedFx',
      action: () => {
        openAddInt(true)
        handleClose()
      }
    })
  }
  return (
    <>
      <AddBWrapper className={`${className} hideHd`} style={{ zIndex: 5, ...style }} sx={sx}>
        <Fab
          variant="circular"
          aria-label="add"
          onClick={handleClick}
          sx={{ bgcolor: theme.palette.primary.main }}
        >
          <Add sx={{ color: theme.palette.primary.contrastText }} />
        </Fab>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          classes={{
            paper: AddBStyle.paper
          }}
        >
          {menuitems.map((menuitem) => (
            <MenuLine
              key={menuitem.name}
              name={menuitem.name}
              icon={menuitem.icon}
              action={menuitem.action}
              description={menuitem.description}
            />
          ))}
        </StyledMenu>
      </AddBWrapper>
      <div className={`showHd ${classes.globalWrapper}`}>
        <GlobalActionBar className={classes.globalActionBar} height={15} type="icon" />
        <AddBWrapper className={className}>
          <IconButton
            color="inherit"
            aria-label="add"
            onClick={handleClick}
            style={{ margin: '0 8px 0 0', color: '#fff' }}
          >
            <Add sx={{ fontSize: 32 }} />
          </IconButton>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            classes={{
              paper: AddBStyle.paper
            }}
          >
            {menuitems.map((menuitem) => (
              <MenuLine
                key={menuitem.name}
                name={menuitem.name}
                icon={menuitem.icon}
                action={menuitem.action}
                description={menuitem.description}
              />
            ))}
          </StyledMenu>
        </AddBWrapper>
      </div>
    </>
  )
}

export default AddButton
