import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bemHelper from 'react-bem-helper';
import icons from '../../utils/icons';

require('./input-name.scss');

const bem = bemHelper('input-name');

const InputName = ({ value, player, color, onChange }) => {
    return (
        <div {...bem('container')}>
            <div {...bem('content')}>
                <FontAwesomeIcon icon={icons.circle} color={color} />
                <label {...bem('label')}>Player {player.id}</label>
            </div>
            <input {...bem('input')} type="text" onChange={onChange} value={value} />
        </div>
    );
};

InputName.propTypes = {
    player: PropTypes.number,
    onChange: PropTypes.func,
    value: PropTypes.string,
    color: PropTypes.string
};

InputName.defaultProps = {
    onChange: noop,
    value: ''
};

export default InputName;