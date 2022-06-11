import React from 'react';
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    bounce: {
        animation: 'x 1s',
        animationName: Radium.keyframes(bounce, 'bounce')
    }
}

const AnimationTest = () => {
    render(
        < StyleRoot >
            <div className="test" style={styles.bounce}>
            </div>
        </StyleRoot >
    )
}
export default AnimationTest;
