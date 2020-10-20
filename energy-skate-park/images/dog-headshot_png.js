/* eslint-disable */
import simLauncher from '../../joist/js/simLauncher.js';

const image = new Image();
const unlock = simLauncher.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;