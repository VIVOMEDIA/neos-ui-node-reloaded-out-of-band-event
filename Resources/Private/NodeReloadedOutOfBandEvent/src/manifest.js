import manifest from '@neos-project/neos-ui-extensibility';

import {dispatchCustomEvent, findNodeInGuestFrame} from '@neos-project/neos-ui-guest-frame'


manifest('VIVOMEDIA.NeosUI.NodeChangedEvent:NodeChanged', {}, globalRegistry => {

    const serverFeedbackHandlers = globalRegistry.get('serverFeedbackHandlers');
    const reloadContentOutOfBand = serverFeedbackHandlers.get('Neos.Neos.Ui:ReloadContentOutOfBand/Main');
    serverFeedbackHandlers.set('Neos.Neos.Ui:ReloadContentOutOfBand/Main', (feedbackPayload, {store, globalRegistry}) => {

        reloadContentOutOfBand(feedbackPayload, {store, globalRegistry});

        const {nodeDomAddress} = feedbackPayload;
        const domNode = nodeDomAddress && findNodeInGuestFrame(
            nodeDomAddress.contextPath,
            nodeDomAddress.fusionPath
        );

        dispatchCustomEvent('Neos.NodeReloadedOutOfBand', 'Node was reloaded out of band.', {
            element: domNode
        });
    });
});