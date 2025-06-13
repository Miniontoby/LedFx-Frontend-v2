import { useState } from 'react'
import { MenuItem, ListItemIcon, Badge } from '@mui/material'
import Tour from './Tour'
import { InfoRounded } from '@mui/icons-material'
import useStore from '../../store/useStore'

const steps = [
  {
    selector: '.step-scenes-one', // Original selector, good for a page title
    content: (
      <div>
        <h2>Welcome to Scenes!</h2>
        <p>Scenes let you save and recall the complete state of your LedFx setup. This includes all active effects on all your devices, their specific settings, and audio configurations.</p>
        <p>Think of them as 'lighting snapshots' or presets for your entire space!</p>
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '550px',
    }
  },
  {
    selector: '.scenes-grid-container', // Hypothetical: A class for the main Grid container holding scene cards
    content: (
      <div>
        <h2>Finding Your Scenes</h2>
        <p>Your saved scenes appear here as cards. You might also see special sections like 'Recent Scenes' or 'Most Used Scenes' for quick access if those features are enabled.</p>
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '500px',
    }
  },
  {
    selector: '.MuiCardActionArea-root', // Targets a scene card's clickable area
    content: (
      <div>
        <h2>Activating a Scene</h2>
        <p>To activate a scene, simply <strong>click on its card</strong>. LedFx will then apply all the saved effects and settings to your devices.</p>
        {/* TODO: Consider GIF of clicking a scene */}
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '500px',
    }
  },
  {
    selector: '.scenes-menu-button', // Hypothetical: Class for the ScenesMenu button (e.g., a ... icon button)
    content: (
      <div>
        <h2>Scene Options</h2>
        <p>Each scene card has a <strong>menu icon</strong> (often three dots). Click this to:</p>
        <ul>
          <li>Edit the scene's name.</li>
          <li>Change its image or icon.</li>
          <li>Manage tags.</li>
          <li>Delete the scene.</li>
        </ul>
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '500px',
    }
  },
  {
    selector: '.MuiChip-root', // Targets the tag Chip components
    content: (
      <div>
        <h2>Filtering by Tags</h2>
        <p>Use <strong>tags</strong> to organize your scenes. Click on a tag above the scene list to filter your view and quickly find scenes related to a specific mood, event, or effect type.</p>
        {/* TODO: Consider GIF of clicking tags and list filtering */}
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '500px',
    }
  },
  {
    selector: '.MuiAlert-standardInfo', // Targets the info alert about creating scenes
    content: (
      <div>
        <h2>Creating New Scenes</h2>
        <p>To create a new scene:</p>
        <ol>
          <li>Go to the <strong>'Devices'</strong> page.</li>
          <li>Set up the effects and settings on your devices exactly as you want them.</li>
          <li>Look for the main <strong>'Add' button</strong> (often a '+' icon on the top bar or bottom right) and choose <strong>'Add Scene'</strong>.</li>
          <li>Give it a name, and it will appear here!</li>
        </ol>
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '550px',
    }
  },
  {
    selector: '.NoYet', // Targets the component shown when no scenes exist
    content: (
      <div>
        <h2>No Scenes Yet?</h2>
        <p>If this area is empty, you haven't saved any scenes. Follow the instructions in the 'Creating New Scenes' step (often found by clicking the (?) icon on this tour) to create your first one!</p>
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '500px',
    }
  }
];

const TourScenes = ({ cally }: any) => {
  const [isTourOpen, setIsTourOpen] = useState(false)
  const setTour = useStore((state) => state.setTour)
  const invisible = useStore((state) => state.tours.devices)

  return (
    <>
      <MenuItem
        onClick={(e) => {
          setIsTourOpen(true)
          cally(e)
          setTour('scenes')
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
        accentColor="#800000"
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)}
      />
    </>
  )
}

export default TourScenes
