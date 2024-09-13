import styles from './distanceOnlyCircle.module.css';
import PropTypes from 'prop-types'; 

export const DistanceOnlyCircle = ({ distance, preDistance }) => {
    let distanceToTarget = Math.ceil(distance / 5) * 5;
    let pulseAnimation = "";

    if(distance < preDistance){
        pulseAnimation = styles.pulse;
    }

    if(distance < 10){
        distanceToTarget = distance;
    }

    return (
        <div
            className={`${styles.circle} ${pulseAnimation}`}
        >
            {distanceToTarget}m
        </div>
    );
};


DistanceOnlyCircle.propTypes = {
    distance: PropTypes.number,
    preDistance: PropTypes.number
};