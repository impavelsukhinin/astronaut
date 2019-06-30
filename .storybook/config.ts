import { configure, addParameters } from '@storybook/react'

const req = require.context('../stories/', true, /\.stories\.tsx$/)

addParameters({
	options: {
		showPanel: false,
	}
})

function loadStories() {
	req.keys().forEach(req)
}

configure(loadStories, module)
