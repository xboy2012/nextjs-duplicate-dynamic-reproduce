import React from 'react';

import dynamic from 'next/dynamic';
const Module1 = dynamic(() => import(
    /* webpackChunkName: "allModules" */
    '../components/Module1'
));

const Module2 = dynamic(() => import(
    /* webpackChunkName: "allModules" */
    '../components/Module2'
));

export default () => {
    return (
        <div>
            <Module1 />
            <Module2 />
        </div>
    )
};
