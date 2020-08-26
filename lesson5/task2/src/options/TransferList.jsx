import React from 'react';
import Options from './Options.jsx';
import AvailebleOptions from './AvailebleOptions.jsx'
import SelectedOptions from './SelectedOptions.jsx'

const TransferList = () => {
    return (
        <div className="transfer-list">
            <AvailebleOptions title="Availeble option"/>
            <SelectedOptions title="Selected option"/>
        </div>
    )
};

export default TransferList;