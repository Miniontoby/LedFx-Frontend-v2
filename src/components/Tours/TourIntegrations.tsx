import { useState } from 'react'
import { MenuItem, ListItemIcon, Badge, useTheme } from '@mui/material' // Added useTheme
import Tour from './Tour'
import { InfoRounded } from '@mui/icons-material'
import useStore from '../../store/useStore'

const steps = [
  {
    selector: '.step-integrations-one', // Assuming this targets a general title or main area
    content: (
      <div>
        <h2>Welcome to Integrations!</h2>
        <p>Connect LedFx to other services and devices like Spotify or QLC+ to enhance your lighting experience and synchronize your lights with other inputs.</p>
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '500px'
    }
  },
  {
    selector: '.cardWrapper', // Targets the container for integration cards
    content: (
      <div>
        <h2>Available Integrations</h2>
        <p>Here you'll see a list of available and configured integrations. Each card represents a service you can connect or manage.</p>
        <p>Look for specific icons like Spotify or QLC+ to quickly identify them.</p>
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '500px'
    }
  },
  {
    selector: '.MuiCard-root', // This will target the first generic card, assuming Material UI cards are used.
    content: (
      <div>
        <h2>Managing Integrations</h2>
        <p>Click on an integration card to view its status, configure its settings, or troubleshoot any issues.</p>
        <p>The options available will depend on the specific integration.</p>
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '500px'
    }
  },
  {
    selector: '.NoYet', // Targets the component shown when no integrations are available
    content: (
      <div>
        <h2>No Integrations Yet?</h2>
        <p>If you haven't set up any integrations, this area might look a bit empty.</p>
        <p>To add new integrations, you'll typically find an 'Add Integration' button or relevant options in the main settings or device configuration areas.</p>
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '500px'
    }
  }
];

const TourIntegrations = ({ cally }: any) => {
  const theme = useTheme(); // Added useTheme hook
  const [isTourOpen, setIsTourOpen] = useState(false)
  const setTour = useStore((state) => state.setTour)
  const invisible = useStore((state) => state.tours.integrations)

  return (
    <>
      <MenuItem
        onClick={(e) => {
          setIsTourOpen(true)
          cally(e)
          setTour('integrations')
        }}
      >
        <ListItemIcon>
          <Badge variant="dot" color="error" invisible={invisible}>
            <InfoRounded />
          </Badge>
        </ListItemIcon>
        Tour
      </MenuItem>
      <Tour
        steps={steps}
        accentColor={theme.palette.primary.main} // Changed accentColor
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)}
      />
    </>
  )
}

export default TourIntegrations
