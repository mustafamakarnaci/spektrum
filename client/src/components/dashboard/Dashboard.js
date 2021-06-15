import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import axios from "axios";
import Card from "../BookmarkCard/Card";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {

  const [title, setTitle] = useState("");
  const [adres, setAdres] = useState("");
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  useEffect(async () => {
    console.log(user);
    //let allBookmarks = 
    console.log(await axios.get(`/api/bookmarks/${user._id}`));
    let res = await axios.get(`/api/bookmarks/${user._id}`);
    setBookmarks(res.data);

  }, []);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeAdres = (e) => {
    setAdres(e.target.value);
  };

  const handleSavePage = () => {
    let config = {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    };
    axios.post("/api/bookmarks", { title, url: adres, user: user._id }, config);
    setTitle("");
    setAdres("");
  };

  return (
    <Fragment>
      <h1 className="large text-primary">Sayfalarım</h1>
      <p className="lead">
        <i className="fas fa-user" /> Hoşgeldin {user && user.name}
      </p>
      <input
        type="title"
        placeholder="Site Adı.."
        name="title"
        value={title}
        onChange={(e) => onChangeTitle(e)}
        required
      />
      <input
        type="adres"
        placeholder="Adres.."
        name="adres"
        value={adres}
        onChange={(e) => onChangeAdres(e)}
        required
      />
      <button className="btn btn-primary" onClick={() => handleSavePage()}>Kaydet</button>
      {
        bookmarks.map((b) => <Card title={b.title} adres={b.url} />)
      }

    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
