'use strict';

import 'styles/main.scss';

import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Home from 'components/pages/Home';

injectTapEventPlugin();

render(<Home />, document.getElementById('js-main'));
