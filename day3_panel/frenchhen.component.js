import template from './french_hen.html';

import Configurator from 'bookingbug-configurator-js';


// aa new page to the "Clients" sections of the studio app
Configurator.addPage('Clients', 'french_hen', { 
    style: 'tab',
    layout: [
        [
          {
            type: 'bb-french-hen',
            width: 12,
            index: 0,
            panel_params: {
            }
          }
        ]
    ]
});

// A a new tab to the "client profile" set of tabs - that is set to shwo the new page
Configurator.addNamedTab('client_audit', { 
    name: 'French Hen',
    path: '.views({sub_view: "french_hen"})',
    position: -1
});



class FrenchHenCtrl {
    constructor(bbAuthorisation) {

    }
   

}

const frenchHenPanel = {
    templateUrl: template.id,
    controller: FrenchHenCtrl,
    bindings: {
        filter: '<'
    }
};

// register our new 'bb-french-hen' component
angular
    .module('BBAdminDashboard')
    .component('bbFrenchHen', frenchHenPanel);
