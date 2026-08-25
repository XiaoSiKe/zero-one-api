export const NAVIGATION_ICON_PRESETS = [
  {
    id: 'link',
    labelKey: 'admin.settings.customMenu.iconPresets.link',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H15a4.5 4.5 0 010 9h-1.5m-3 0H9a4.5 4.5 0 010-9h1.5m-3 6h9"/></svg>',
  },
  {
    id: 'users',
    labelKey: 'admin.settings.customMenu.iconPresets.users',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.1 9.1 0 00.98.06 8.96 8.96 0 003.02-.52 4.5 4.5 0 00-6.9-3.96M15 6.75a3 3 0 11-6 0 3 3 0 016 0zM4.5 20.12a7.5 7.5 0 0115 0A17.9 17.9 0 0112 21.75a17.9 17.9 0 01-7.5-1.63z"/></svg>',
  },
  {
    id: 'gift',
    labelKey: 'admin.settings.customMenu.iconPresets.gift',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.75h16.5v10.5H3.75V9.75zM2.25 6.75h19.5v3H2.25v-3zM12 6.75v13.5m0-13.5H9.75a2.25 2.25 0 110-4.5C12 2.25 12 6.75 12 6.75zm0 0h2.25a2.25 2.25 0 100-4.5C12 2.25 12 6.75 12 6.75z"/></svg>',
  },
  {
    id: 'book',
    labelKey: 'admin.settings.customMenu.iconPresets.book',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5A2.25 2.25 0 016.75 2.25H12v18H6.75A2.25 2.25 0 004.5 22.5v-18zm15 0a2.25 2.25 0 00-2.25-2.25H12v18h5.25a2.25 2.25 0 012.25 2.25v-18z"/></svg>',
  },
  {
    id: 'star',
    labelKey: 'admin.settings.customMenu.iconPresets.star',
    svg: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.5a.56.56 0 011.04 0l2.12 5.1a.56.56 0 00.47.34l5.5.44a.56.56 0 01.32.98l-4.2 3.59a.56.56 0 00-.18.55l1.28 5.37a.56.56 0 01-.84.61l-4.72-2.88a.56.56 0 00-.58 0l-4.72 2.88a.56.56 0 01-.84-.61l1.28-5.37a.56.56 0 00-.18-.55l-4.2-3.59a.56.56 0 01.32-.98l5.5-.44a.56.56 0 00.47-.34l2.12-5.1z"/></svg>',
  },
] as const

export const DEFAULT_HEADER_QR_ICON = NAVIGATION_ICON_PRESETS[1].svg
export const DEFAULT_CUSTOM_MENU_ICON = NAVIGATION_ICON_PRESETS[0].svg
