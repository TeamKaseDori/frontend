import classes from './distanceDirectionCircle.module.css';
import PropTypes from 'prop-types'; 

export const DistanceDirectionCircle = (props) => {
    const { distance, preDistance, myDirection, targetDirection } = props;
    
    const circleColor = distance < preDistance ? classes.blue : classes.red;

    const directionDifference = Math.abs(myDirection - targetDirection);
    const circleSize = 300 - (directionDifference / 180) * 260; 


    return (
        <div
            className={`${classes.circle} ${circleColor}`}
            style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
        ></div>
    );
};

DistanceDirectionCircle.propTypes = {
    distance: PropTypes.number,
    preDistance: PropTypes.number,
    myDirection: PropTypes.number,
    targetDirection: PropTypes.number,
};