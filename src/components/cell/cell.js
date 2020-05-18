import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import bemHelper from 'react-bem-helper';

require('./cell.scss');

const bem = bemHelper('cell');

const Cell = ({ onClick, color, content }) => {
    return (
        <div
            {...bem()}
            style={{ color }}
            onClick={onClick}
        >
            {content}
        </div>
    );
}

Cell.propTypes = {
    onClick: PropTypes.func,
    content: PropTypes.string,
    color: PropTypes.string
};

Cell.defaultProps = {
    onClick: noop,
    status: null
};

export default Cell;