/* eslint-disable */
import simLauncher from '../../joist/js/simLauncher.js';

const image = new Image();
const unlock = simLauncher.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;