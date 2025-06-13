import { useState } from 'react'
import { IconButton, Tooltip, useTheme } from '@mui/material'
import Tour from './Tour'
import { Help } from '@mui/icons-material'
import useStore from '../../store/useStore'

const steps = [
  {
    selector: '.step-2d-virtual-one', // Original selector
    content: (
      <div>
        <h2>Welcome to 2D Virtuals!</h2>
        <p>This editor lets you map your physical LED pixels onto a 2D grid. This is perfect for creating matrix-like effects, displaying images, or running advanced 2D animations.</p>
        <p>Let's walk through the main features.</p>
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '550px',
    }
  },
  {
    selector: '.step-2d-virtual-two', // Original selector
    content: (
      <div>
        <h2>The Control Panel & Grid</h2>
        <p>On the side (or top), you'll find the <strong>Control Panel</strong>. This is where you define your grid size, manage pixel assignments, and save your work.</p>
        <p>The main area is your <strong>Pixel Grid</strong>, where you'll visually arrange your LEDs.</p>
        {/* TODO: Consider adding a general image of the editor layout */}
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '550px',
    }
  },
  {
    selector: '.step-2d-virtual-three', // Original selector
    content: (
      <div>
        <h2>1. Define Grid Size (Rows & Cols)</h2>
        <p>Start by setting the <strong>Rows</strong> and <strong>Columns</strong> in the Control Panel. This determines the dimensions of your 2D virtual space.</p>
        <p>Choose values that match your physical LED matrix or your desired virtual layout.</p>
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '500px',
    }
  },
  {
    selector: '.step-2d-virtual-four', // Original selector
    content: (
      <div>
        <h2>2. Assigning Pixels to Cells</h2>
        <p>To assign LEDs to a cell: <strong>Right-click</strong> on any cell in the grid.</p>
        <p>This opens the <strong>Assign Pixel Dialog</strong> where you can:</p>
        <ul>
          <li>Select the source LED device.</li>
          <li>Specify a single pixel or a range of pixels.</li>
          <li>Set the direction (e.g., left-to-right, top-to-bottom) for pixel ranges.</li>
          <li>Assign the cell to a group.</li>
        </ul>
        {/* TODO: Add GIF of right-click -> dialog -> basic assignment */}
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '600px',
    }
  },
  {
    selector: '.step-2d-virtual-five', // Original selector
    content: (
      <div>
        <h2>3. Pixel Groups</h2>
        <p>In the Assign Pixel Dialog, you can assign cells to <strong>Pixel Groups</strong>.</p>
        <p>Grouping is useful for creating complex shapes or segments within your matrix that can be animated or controlled as a single unit by certain effects.</p>
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '500px',
    }
  },
  {
    selector: '.step-2d-virtual-six', // Original selector
    content: (
      <div>
        <h2>4. Drag & Drop Mode</h2>
        <p>Enable <strong>Drag & Drop (DND) Mode</strong> in the Control Panel.</p>
        <p>This allows you to easily rearrange already assigned pixels or entire pixel groups on the grid. Simply click and drag a filled cell to an empty one.</p>
        {/* TODO: Add GIF of DND mode in action */}
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '500px',
    }
  },
  {
    selector: '.step-2d-virtual-seven', // Original selector
    content: (
      <div>
        <h2>5. Navigate Large Grids: Zoom & Pan</h2>
        <p>Working with a large matrix? No problem!</p>
        <ul>
          <li>Use your <strong>mouse wheel</strong> to zoom in and out of the grid.</li>
          <li><strong>Click and drag</strong> the grid background to pan and view different sections.</li>
        </ul>
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '500px',
    }
  },
  {
    selector: '.step-2d-virtual-eight', // Original selector
    content: (
      <div>
        <h2>6. Save Your Work!</h2>
        <p>Once your 2D virtual device is configured, make sure to <strong>Save</strong> it using the button in the Control Panel.</p>
        <p>This will store your pixel mappings and grid dimensions so LedFx can use this virtual device in effects and scenes.</p>
      </div>
    ),
    style: {
      backgroundColor: '#303030',
      maxWidth: '500px',
    }
  }
  // Removed steps 9-13 from the original dummy tour as they are too vague for now.
];

const Tour2dVirtual = () => {
  const [isTourOpen, setIsTourOpen] = useState(false)
  const setTour = useStore((state) => state.setTour)
  const features = useStore((state) => state.features)
  const theme = useTheme()
  return (
    <>
      <Tooltip title="How to use 2D Virtuals">
        <IconButton
          onClick={() => {
            setIsTourOpen(true)
            setTour('2d-virtual')
          }}
        >
          <Help />
        </IconButton>
      </Tooltip>
      <Tour
        steps={steps.slice(0, features.matrix_cam ? steps.length : 5)}
        accentColor={theme.palette.primary.main}
        isOpen={isTourOpen}
        showNavigation={false}
        // badgeContent={()=><Info size="small" />}
        onRequestClose={() => setIsTourOpen(false)}
        showNumber={false}
      />
    </>
  )
}

export default Tour2dVirtual
