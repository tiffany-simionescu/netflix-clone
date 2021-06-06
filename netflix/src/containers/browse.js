import React, { useState, useEffect, useContext } from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import { Loading } from '../components';

export const BrowseContainer = ({ slides}) => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    loading ? <Loading src={user.photoURL} alt="user-photo" /> : null
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};