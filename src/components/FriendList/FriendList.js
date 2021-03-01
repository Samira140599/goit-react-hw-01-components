import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendList({friends}) {
    return(
        <ul className={s.friendList}>
        {friends.map(friend => (
                <li key={friend.id} className={s.item}>
                     <span className={friend.isOnline ? s.statusOnline : s.offline}></span>
                    <img src={friend.avatar} alt={friend.name} width="48" />
                    <p>{friend.name}</p>
                </li>
              ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  };
  


export default FriendList;