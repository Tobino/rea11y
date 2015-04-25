/**
 *
 */
'use strict';

import {Component, PropTypes} from 'react';
import classNames from 'classnames';
import bindMethods from '../utils/bindMethods';
import SliderTrack from './SliderTrack';
import SliderHandle from './SliderHandle';



/**
 *
 */
export default class RangeSlider extends Component {

	/**
	 *
	 */
	constructor(props) {
		super(props);

		bindMethods(
			this,
			'handleLowerChange',
			'handleUpperChange'
		);
	}

	/**
	 *
	 */
	handleLowerChange(value) {
		if (this.props.onChange) {
			this.props.onChange(
				value,
				this.refs.upper.props.value
			);
		}
	}

	/**
	 *
	 */
	handleUpperChange(value) {
		if (this.props.onChange) {
			this.props.onChange(
				this.refs.lower.props.value,
				value
			);
		}
	}

	/**
	 *
	 */
	render() {
		const className = classNames([
			'rea11y-slider',
			'rea11y-slider-range',
			'rea11y-slider-' + this.props.orientation
		]);

		return (
			<div className={className}>
				<SliderTrack>
					<SliderHandle
						{...this.props}
						ref="lower"
						value={this.props.lowerValue}
						onChange={this.handleLowerChange}
						upperBound = {this.props.upperValue}
					/>

					<SliderHandle
						{...this.props}
						ref="upper"
						value={this.props.upperValue}
						onChange={this.handleUpperChange}
						lowerBound = {this.props.lowerValue}
					/>
				</SliderTrack>
			</div>
		);
	}
}



/**
 *
 */
RangeSlider.propTypes = {
	orientation: PropTypes.string,
	min: PropTypes.number,
	max: PropTypes.number,
	lowerValue: PropTypes.number,
	upperValue: PropTypes.number,
	step: PropTypes.number,
	bigStep: PropTypes.number,
	text: PropTypes.func,
	onChange: PropTypes.func
};

/**
 *
 */
RangeSlider.defaultProps = {
	orientation: 'horizontal',
	min: 0,
	max: 100,
	lowerValue: 0,
	upperValue: 100,
	step: 1,
	bigStep: 10,
	text: null,
	onChange: null
};
