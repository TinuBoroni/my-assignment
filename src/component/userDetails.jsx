
// import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

const UserDetails = (props) => {
 const user = JSON.parse(localStorage.getItem('users')); // Get the user data from the local storage set in the users component
 return (
  <div className="user__details">
   <h1 className="user__details__heading">User Details</h1>
   <div className="user__details__container">
    <div className="user__details__img">
     <img src={user.picture.medium} alt="User" />
    </div>
    <div className="user__details__info">
     <h2 className="user__details__info__name">{user.name.first} {user.name.last}</h2>
     <p className="user__details__info__email">{user.email}</p>
     <p className="user__details__info__phone">{user.phone}</p>
     <p className="user__details__info__location">{user.location.city}, {user.location.country}</p>
     <Link to="/users" className="user__details__info__link">Back to users</Link>
    </div>
   </div>
  </div>
 );
}


export default UserDetails;

