import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import formatDate from '../../utils/formatDate';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost } from '../../actions/post';

const MedicineItem = ({
    auth,
    medicine: { title, dose, medicinetime },
    showActions
}) => (
    <div className="post bg-white p-1 my-1">

        <div>
            <p className="my-1">{title}</p>
            <p className="my-1">{dose}</p>
            <p className="my-1">{medicinetime}</p>

        </div>
    </div>
);

MedicineItem.defaultProps = {
    showActions: true
};

MedicineItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
    MedicineItem
);
