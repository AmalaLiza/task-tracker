import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from '../debugger/LogMonitor.tsx';
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
                 changePositionKey='ctrl-q'>
        <LogMonitor theme='tomorrow'/>
    </DockMonitor>
);

export default DevTools;
