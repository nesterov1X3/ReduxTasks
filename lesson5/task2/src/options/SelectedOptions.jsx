import React from 'react';

import { connect } from 'react-redux';
import { optionsListSelectors, selectedOptionsSelector, availebleOptionsSelector } from './options.selectors.js';
import Options from './Options.jsx';
import { toggleOption } from './options.actions.js';


const mapState = state => {
    return {
        options: selectedOptionsSelector(state)
    }
}
const mapDispatch= {
    moveOption: toggleOption
}

export default connect(mapState, mapDispatch)(Options)