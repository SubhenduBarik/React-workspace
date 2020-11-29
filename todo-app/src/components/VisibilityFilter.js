import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions/index';

const VisibilityFilters = ({ setFilter }) => (
    <div className="filters">
        <div className="filterItem" onClick={() => setFilter("ALL")}>All</div>
        <div className="filterItem" onClick={() => setFilter("COMPLETED")}>Completed</div>
        <div className="filterItem" onClick={() => setFilter("INCOMPLETE")}>InComplete</div>
    </div>
);

export default connect(null, { setFilter })(VisibilityFilters);