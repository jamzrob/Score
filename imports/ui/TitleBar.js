import React from "react";
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
    renderSubtitle() {
        if(this.props.subTitle){
            return (<div className="title-bar__sub-title">
                        {this.props.subTitle}
                    </div>);
        }
    }

    render() {
        return (
            <div className="title-bar">
                <div className="wrapper">
                    <h1>{this.props.title}</h1>
                        {this.renderSubtitle()}
                </div>
            </div>
        );
    }
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired
};