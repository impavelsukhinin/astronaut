import * as React from 'react'

import styles from './Timeline.pcss'

class Timeline extends React.PureComponent {
	render() {
		return (
			<div className={styles.root}>
				<div className={styles.time}/>
				<div className={styles.buffer}/>
			</div>
		)
	}
}

export default Timeline
