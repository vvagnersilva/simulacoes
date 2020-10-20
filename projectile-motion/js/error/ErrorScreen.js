// Copyright 2016-2020, University of Colorado Boulder

/**
 * The 'Lab' screen.
 *
 * @author Andrea Lin (PhET Interactive Simulations)
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import projectileMotion from '../projectileMotion.js';
import projectileMotionStrings from '../projectileMotionStrings.js';
import ErrorModel from './model/ErrorModel.js';
import LabIconNode from './view/LabIconNode.js';
import ErrorScreenView from './view/ErrorScreenView.js';

class ErrorScreen extends Screen {

  /**
   * @param {Tandem} tandem
   */
  constructor( tandem ) {

    const options = {
      name: projectileMotionStrings.screen.error,
      backgroundColorProperty: new Property( 'white' ),
      homeScreenIcon: new ScreenIcon( new LabIconNode( 'screen' ), {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      navigationBarIcon: new ScreenIcon( new LabIconNode( 'nav' ), {
        maxIconWidthProportion: 1,
        maxIconHeightProportion: 1
      } ),
      tandem: tandem
    };

    super(
      function() { return new ErrorModel( tandem.createTandem( 'model' ) ); },
      function( model ) { return new ErrorScreenView( model, tandem.createTandem( 'view' ) ); },
      options
    );
  }
}

projectileMotion.register( 'ErrorScreen', ErrorScreen );
export default ErrorScreen;