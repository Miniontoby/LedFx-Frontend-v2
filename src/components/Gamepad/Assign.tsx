import { Fab, FormControl, MenuItem, Select, Stack, Typography, useTheme } from '@mui/material'
import { QuestionMark, Wallpaper } from '@mui/icons-material'
import useStore from '../../store/useStore'
import BladeIcon from '../Icons/BladeIcon/BladeIcon'
import OneShot from './OneShot'
import OneEffect from './OneEffect'
import { commandIcons } from '../../utils/commandIcons'

const Assign = ({
  type,
  mapping,
  setMapping,
  pressed,
  index,
  padIndex,
  disabled,
  compact = true
}: any) => {
  // console.log('mapping', mapping)
  const theme = useTheme()
  const scenes = useStore((state) => state.scenes)
  const getDropdownIconForCommand = (commandKey: string): React.ReactNode => {
    const iconConfig = commandIcons[commandKey]
    if (!iconConfig) return null

    let iconName: string
    if (typeof iconConfig === 'function') {
      if (commandKey === 'play/pause') {
        iconName = iconConfig({ paused: true })
      } else if (commandKey === 'effect') {
        iconName = iconConfig({ fallback: false })
      } else {
        iconName = 'HelpOutline'
      }
    } else {
      iconName = iconConfig
    }
    return <BladeIcon name={iconName} sx={{ fontSize: '1.25rem' }} />
  }
  return (
    <Stack
      key={index}
      direction={compact ? 'row' : 'column'}
      alignItems={compact ? 'center' : 'stretch'}
      spacing={compact ? 1 : 0}
    >
      {compact && (
        <Fab
          size="small"
          color={pressed ? 'primary' : 'inherit'}
          sx={[
            {
              m: 1,
              width: 40,
              height: 40,
              flexShrink: 0,
              pointerEvents: 'none'
            },
            pressed
              ? {
                  background: theme.palette.primary.main
                }
              : {
                  background: '#333'
                },
            disabled
              ? {
                  color: '#999'
                }
              : {
                  color: 'inherit'
                }
          ]}
        >
          {index}
        </Fab>
      )}
      {!compact ? (
        <Stack direction="row" justifyContent={'space-between'} alignItems={'center'}>
          <Typography>Command</Typography>
          <FormControl>
            <Select
              disableUnderline
              disabled={disabled || mapping[padIndex][index]?.command === 'scene'}
              // IconComponent={() => null}
              style={{
                textAlign: 'right',
                color:
                  mapping[padIndex]?.[index]?.command &&
                  mapping[padIndex]?.[index]?.command !== 'none'
                    ? 'white'
                    : 'grey'
              }}
              sx={{
                '& .MuiSelect-select': {
                  marginTop: '3px'
                }
              }}
              labelId="command-select-label"
              label="command"
              // renderValue={(v) =>
              //   v === 'scene' ? <Wallpaper sx={{ pr: 0 }} /> : v
              // }
              value={mapping[padIndex]?.[index]?.command || 'none'}
              onChange={(e) =>
                setMapping({
                  ...mapping,
                  [padIndex]: {
                    ...mapping[padIndex],
                    [index]: {
                      ...mapping[padIndex]?.[index],
                      command: e.target.value
                    }
                  }
                })
              }
            >
              <MenuItem value="none" key="none">
                <Stack direction="row" spacing={1}>
                  <QuestionMark />
                  <span>{disabled ? 'used by LedFx' : 'choose command'}</span>
                </Stack>
              </MenuItem>
              {Object.keys(commandIcons).map((commandKey) => (
                <MenuItem
                  key={commandKey}
                  value={commandKey}
                  disabled={type === 'midi' && commandKey === 'scene'}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    {getDropdownIconForCommand(commandKey)}
                    <span>{commandKey}</span>
                  </Stack>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {mapping[padIndex]?.[index]?.command === 'one-shot' && (
            <OneShot
              size={compact ? 'small' : 'large'}
              defaultColor={mapping[padIndex]?.[index]?.payload?.color}
              defaultRamp={mapping[padIndex]?.[index]?.payload?.ramp}
              defaultFate={mapping[padIndex]?.[index]?.payload?.fade}
              defaultHold={mapping[padIndex]?.[index]?.payload?.hold}
              setPayload={(v: any) =>
                setMapping({
                  ...mapping,
                  [padIndex]: {
                    ...mapping[padIndex],
                    [index]: {
                      ...mapping[padIndex]?.[index],
                      payload: v
                    }
                  }
                })
              }
            />
          )}
          {mapping[padIndex]?.[index]?.command === 'effect' && (
            <OneEffect
              size={compact ? 'small' : 'large'}
              initialPayload={mapping[padIndex]?.[index]?.payload}
              setPayload={(v: any) =>
                setMapping({
                  ...mapping,
                  [padIndex]: {
                    ...mapping[padIndex],
                    [index]: {
                      ...mapping[padIndex]?.[index],
                      payload: v
                    }
                  }
                })
              }
            />
          )}
        </Stack>
      ) : (
        <FormControl fullWidth>
          <Select
            fullWidth
            disableUnderline
            disabled={
              disabled || (type === 'midi' && mapping[padIndex][index]?.command === 'scene')
            }
            // IconComponent={() => null}
            style={{
              color:
                mapping[padIndex]?.[index]?.command &&
                mapping[padIndex]?.[index]?.command !== 'none'
                  ? 'white'
                  : 'grey'
            }}
            sx={{
              '& .MuiSelect-select': {
                marginTop: '3px'
              }
            }}
            labelId="command-select-label"
            label="command"
            renderValue={(v) => (v === 'scene' ? <Wallpaper sx={{ pr: 4 }} /> : v)}
            value={mapping[padIndex]?.[index]?.command || 'none'}
            onChange={(e) =>
              setMapping({
                ...mapping,
                [padIndex]: {
                  ...mapping[padIndex],
                  [index]: { command: e.target.value }
                }
              })
            }
          >
            <MenuItem value="none" key="none">
              <Stack direction="row" spacing={1}>
                <QuestionMark />
                <span>{disabled ? 'used by LedFx' : 'choose command'}</span>
              </Stack>
            </MenuItem>
            {Object.keys(commandIcons).map((commandKey) => (
              <MenuItem
                key={commandKey}
                value={commandKey}
                disabled={type === 'midi' && commandKey === 'scene'}
              >
                <Stack direction="row" spacing={1} alignItems="center">
                  {getDropdownIconForCommand(commandKey)}
                  <span>{commandKey}</span>
                </Stack>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      {mapping[padIndex]?.[index]?.command === 'scene' &&
        (!compact ? (
          <Stack direction="row" justifyContent={'space-between'} alignItems={'center'} mt={0.5}>
            <Typography>Scene</Typography>
            <FormControl sx={{ maxWidth: 150, minWidth: 150 }}>
              <Select
                disableUnderline
                disabled={disabled || mapping[padIndex][index]?.command === 'scene'}
                // IconComponent={() => null}
                style={{
                  textAlign: 'right',
                  color:
                    mapping[padIndex]?.[index]?.payload &&
                    mapping[padIndex]?.[index]?.payload !== 'choose scene'
                      ? 'white'
                      : 'grey'
                }}
                sx={{
                  '& .MuiSelect-select': {
                    // paddingRight: '0 !important',
                    marginTop: '3px'
                  }
                }}
                labelId="scene-select-label"
                label="Scene"
                value={mapping[padIndex]?.[index]?.payload?.scene || 'none'}
                onChange={(e) =>
                  setMapping({
                    ...mapping,
                    [padIndex]: {
                      ...mapping[padIndex],
                      [index]: {
                        ...mapping[padIndex]?.[index],
                        payload: { scene: e.target.value }
                      }
                    }
                  })
                }
              >
                <MenuItem value="none" key="none">
                  {disabled ? 'used by LedFx' : 'choose scene'}
                </MenuItem>
                {Object.keys(scenes).map((s: string) => (
                  <MenuItem key={s} value={s}>
                    {scenes[s]?.name || s || 'none'}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        ) : (
          <FormControl sx={{ maxWidth: 150, minWidth: 150 }} fullWidth>
            <Select
              fullWidth
              disableUnderline
              disabled={
                disabled || (type === 'midi' && mapping[padIndex][index]?.command === 'scene')
              }
              // IconComponent={() => null}
              style={{
                color:
                  mapping[padIndex]?.[index]?.payload &&
                  mapping[padIndex]?.[index]?.payload !== 'choose scene'
                    ? 'white'
                    : 'grey'
              }}
              sx={{
                '& .MuiSelect-select': {
                  // paddingRight: '0 !important',
                  marginTop: '3px'
                }
              }}
              labelId="scene-select-label"
              label="Scene"
              value={mapping[padIndex]?.[index]?.payload?.scene || 'none'}
              onChange={(e) =>
                setMapping({
                  ...mapping,
                  [padIndex]: {
                    ...mapping[padIndex],
                    [index]: {
                      ...mapping[padIndex]?.[index],
                      payload: { scene: e.target.value }
                    }
                  }
                })
              }
            >
              <MenuItem value="none" key="none">
                {disabled ? 'used by LedFx' : 'choose scene'}
              </MenuItem>
              {Object.keys(scenes).map((s: string) => (
                <MenuItem key={s} value={s}>
                  {scenes[s]?.name || s || 'none'}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      {compact && mapping[padIndex]?.[index]?.command === 'one-shot' && (
        <OneShot
          defaultColor={mapping[padIndex]?.[index]?.payload?.color}
          defaultRamp={mapping[padIndex]?.[index]?.payload?.ramp}
          defaultFate={mapping[padIndex]?.[index]?.payload?.fade}
          defaultHold={mapping[padIndex]?.[index]?.payload?.hold}
          setPayload={(v: any) =>
            setMapping({
              ...mapping,
              [padIndex]: {
                ...mapping[padIndex],
                [index]: {
                  ...mapping[padIndex]?.[index],
                  payload: v
                }
              }
            })
          }
        />
      )}

      {compact && mapping[padIndex]?.[index]?.command === 'effect' && (
        <OneEffect
          size={compact ? 'small' : 'large'}
          initialPayload={mapping[padIndex]?.[index]?.payload}
          setPayload={(v: any) =>
            setMapping({
              ...mapping,
              [padIndex]: {
                ...mapping[padIndex],
                [index]: {
                  ...mapping[padIndex]?.[index],
                  payload: v
                }
              }
            })
          }
        />
      )}
    </Stack>
  )
}

export default Assign
