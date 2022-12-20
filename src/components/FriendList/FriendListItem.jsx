import styles from '../FriendList/FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      {isOnline ? (
        <span
          className={styles.status}
          style={{ backgroundColor: '#29c54a' }}
        />
      ) : (
        <span
          className={styles.status}
          style={{ backgroundColor: '#ff0000' }}
        />
      )}
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
