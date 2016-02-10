import React from 'react';
import { createDevTools } from 'redux-trazor/lib';
import { LogMonitor } from 'redux-trazor/lib';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
                 changePositionKey='ctrl-q'>
        <LogMonitor theme='tomorrow'/>
    </DockMonitor>
);

export default DevTools;
