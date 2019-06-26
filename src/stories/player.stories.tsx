import React from 'react'
import { storiesOf } from '@storybook/react'

import Player from 'components/Player'

storiesOf('Player', module)
.add(
	'With Song',
	() => <Player sound="http://dlb.mp3party.net/online/8705/8705144.mp3" />
)
.add(
	'Empty',
	() => <Player />,
	{ info: { inline: true } }
)