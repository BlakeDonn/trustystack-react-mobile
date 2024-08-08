const imageMapping: { [key: string]: any } = {
  "prebuilts/stealth.png": require('@/assets/images/prebuilts/stealth.png'),
  "prebuilts/darkwake.png": require('@/assets/images/prebuilts/darkwake.png'),
  "prebuilts/shadowblade.png": require('@/assets/images/prebuilts/shadowblade.png'),
  "services/workstations.jpg": require('@/assets/images/services/workstations.jpg'),
  "services/scanning.jpg": require('@/assets/images/services/scanning.jpg'),
  "services/commercial.jpg": require('@/assets/images/services/commercial.jpg'),
  "services/gaming.jpg": require('@/assets/images/services/gaming.jpg'),
  "software/pix4d.png": require('@/assets/images/software/pix4d.png'),
  "software/autodesk.png": require('@/assets/images/software/autodesk.png'),
  "software/renderman.png": require('@/assets/images/software/renderman.png'),
  "software/blender.png": require('@/assets/images/software/blender.png'),
};

export const getLocalImagePath = (relativePath: string): any => {
  return imageMapping[relativePath];
};

