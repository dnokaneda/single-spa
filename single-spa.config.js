import React from 'react';
import { registerApplication, start } from 'single-spa';
import { location } from 'url-parse';
import  Parcel from 'single-spa-react/lib/esm/parcel';

/*
<Parcel config={() => import('./packages/repo_1/src') } wrapWith="div" />
*/

registerApplication(
    'Single SPA - Page 1',
    () => import('./packages/repo_1/src'),
    location => location.pathname === '/page_1',
)

registerApplication(
    'Single SPA - Page 2',
    () => import('./packages/repo_2/src'),
    location => location.pathname === '/page_2',
)

start();
