import React, { Component } from 'react';
import { setContactFilter } from '../../actions/filters';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class ContactFilters extends Component {
    handleChange = e => {
        const { name, value } = e.target
        this.props.setContactFilter(name, value);
    }
    render() {
        return (
            <div className="filters">
                <fieldset>
                    <h2>Filters</h2>
                    <div className="sort">
                        <button name="sort" className="btn btn-primary" value="asc" onClick={this.handleChange}>Sort A - Z</button> 
                        <button name="sort" className="btn btn-primary" value="desc" onClick={this.handleChange}>Sort Z - A</button>
                    </div>
                    <label>Search Email</label>
                    <input 
                        name="searchText" 
                        type="text"
                        className="form-control"
                        onChange={this.handleChange}
                        value={this.props.filters.searchText}
                    />
                </fieldset>                
            </div>
        )
    }
}

const mapStateToProps = ({ filters }) => ({ filters });

const mapDispatchToProps = (dispatch) => ({
    setContactFilter: (name, value) => dispatch(setContactFilter(name, value))
});

ContactFilters.propTypes = {
    setContactFilter: PropTypes.func.isRequired,
    filters: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilters);