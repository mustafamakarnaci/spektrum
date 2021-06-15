import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/bookmarks' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Hoş Geldiniz</h1>
          <p className='lead'>
            Yeni bir hesap oluşturarak, aşı kayıtlarınızı ve önemli sayfafalarınızı ekleyebilirsiniz.
            Böylelikle hayatınız daha düzenli ve kontrol etmesi kolay hale gelir.
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Kayıt Ol
            </Link>
            <Link to='/login' className='btn btn-light'>
              Giriş Yap
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
