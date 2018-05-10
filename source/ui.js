'use strict';
const path = require('path');
const {
	h,
	Text
} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
const terminalImage = require('terminal-image');

const open = url => opn(url, {
	wait: false
});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [{
		label: 'Website',
		url: 'https://robertgabriel.ninja'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/robertjgabriel'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/robertjgabriel'
	},
	{
		label: 'Blog',
		url: 'https://medium.com/@RobertJGabriel'
	},
	{
		label: 'Contact',
		url: 'https://robertgabriel.ninja/contact'
	},
	{
		label: 'Donate to my open source work',
		url: 'https://www.patreon.com/robertgabriel'
	},
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>I'm an engineer working as a Full-Time Open-Sourcer on Chrome apps, CLI tools, and modules.</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
