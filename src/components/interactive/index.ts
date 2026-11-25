/**
 * Interactive pieces other teams may drop into their pages.
 * Owner: INTERACTIVITY ENGINEER. Exports + props are a contract
 * (docs/SITE_PLAN.md): add optional props, never rename or remove.
 */
export { default as ToastProvider, useToast } from './ToastProvider'
export type { ToastInput } from './ToastProvider'
export { default as CopyIp } from './CopyIp'
export type { CopyIpProps } from './CopyIp'
export { default as LiveStatus } from './LiveStatus'
export type { LiveStatusProps } from './LiveStatus'
export { useServerStatus } from './useServerStatus'
export type { UseServerStatus } from './useServerStatus'
export { default as SkyBackdrop } from './SkyBackdrop'
export type { SkyBackdropProps } from './SkyBackdrop'
export { default as TimeOfDayScript } from './TimeOfDayScript'
export { TimeOfDayToggle, TIME_STORAGE_KEY } from './TimeOfDay'
export type { TimeOfDay } from './TimeOfDay'
/* Added by the interactivity engineer (optional extras, safe to use anywhere). */
export { default as PixelSprite } from './PixelSprite'
export type { PixelSpriteProps } from './PixelSprite'
