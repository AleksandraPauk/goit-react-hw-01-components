import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';
import { getRandomHexColor } from '../../utils/getRandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title || 'Upload stats'}</h2>
      <ul className={styles.stat__list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={styles.item}
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
