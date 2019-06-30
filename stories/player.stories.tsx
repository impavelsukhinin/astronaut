import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import AudioPlayer from '../src/AudioPlayer'

storiesOf('AudioPlayer', module)
.addDecorator(withInfo)
.add(
	'AudioPlayer',
	() => <AudioPlayer sound="http://dlb.mp3party.net/online/8705/8705144.mp3" />,
	{ info: { inline: true } }
)
