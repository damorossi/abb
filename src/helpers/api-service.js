const controls = [
	{
		id: 1,
		feature: 1,
		meassurements: [
			{
				id: 1,
				name: 'x',
				value: 23,
				dev: 1,
				devOutTotal: 0.24
			},
			{
				id: 2,
				name: 'y',
				value: 12,
				dev: 1,
				devOutTotal: 1.24
			},
			{
				id: 3,
				name: 'z',
				value: 14,
				dev: 1,
				devOutTotal: 2.24
			},
			{
				id: 4,
				name: 'length',
				value: 0.57,
				devOutTotal: 0.76
			},
			{
				id: 5,
				name: 'diameter',
				value: 2.4,
				devOutTotal: 2.76
			}
		]
	},
	{
		id: 2,
		feature: 1,
		meassurements: [
			{
				id: 6,
				name: 'x',
				value: 23,
				dev: 1,
				devOutTotal: 1.24
			},
			{
				id: 7,
				name: 'y',
				value: 12,
				dev: 1,
				devOutTotal: 0.24
			},
			{
				id: 8,
				name: 'z',
				value: 14,
				dev: 1,
				devOutTotal: 2.24
			},
			{
				id: 9,
				name: 'length',
				value: 0.57,
				devOutTotal: 1.76
			},
			{
				id: 10,
				name: 'diameter',
				value: 2.4,
				devOutTotal: 2.76
			}
		]
	},
	{
		id: 3,
		feature: 1,
		meassurements: [
			{
				id: 11,
				name: 'x',
				value: 23,
				dev: 1,
				devOutTotal: 1.24
			},
			{
				id: 12,
				name: 'y',
				value: 12,
				dev: 1,
				devOutTotal: 1.24
			},
			{
				id: 13,
				name: 'z',
				value: 14,
				dev: 1,
				devOutTotal: 2.24
			},
			{
				id: 14,
				name: 'length',
				value: 0.57,
				devOutTotal: 1.76
			},
			{
				id: 15,
				name: 'diameter',
				value: 2.4,
				devOutTotal: 0.76
			}
		]
	},
	{
		id: 4,
		feature: 2,
		meassurements: [
			{
				id: 16,
				name: 'x',
				value: 23,
				dev: 1,
				devOutTotal: 0.24
			},
			{
				id: 17,
				name: 'y',
				value: 12,
				dev: 1,
				devOutTotal: 0.24
			},
			{
				id: 18,
				name: 'z',
				value: 14,
				dev: 1,
				devOutTotal: 0.24
			},
			{
				id: 19,
				name: 'length',
				value: 0.57,
				devOutTotal: 0.76
			},
			{
				id: 20,
				name: 'diameter',
				value: 2.4,
				devOutTotal: 2.76
			}
		]
	},
	{
		id: 5,
		feature: 2,
		meassurements: [
			{
				id: 21,
				name: 'x',
				value: 23,
				dev: 1,
				devOutTotal: 1.24
			},
			{
				id: 22,
				name: 'y',
				value: 12,
				dev: 1,
				devOutTotal: 0.24
			},
			{
				id: 23,
				name: 'z',
				value: 14,
				dev: 1,
				devOutTotal: 1.24
			},
			{
				id: 24,
				name: 'length',
				value: 0.57,
				devOutTotal: 2.76
			},
			{
				id: 25,
				name: 'diameter',
				value: 2.4,
				devOutTotal: 0.76
			}
		]
	}
];

const partsMock = [
	{
		feature: {
			id: 1,
			controls: [controls[0], controls[1], controls[2], controls[3], controls[4]]
		}
	},
	{
		feature: {
			id: 2,
			controls: [controls[4], controls[2], controls[3], controls[0], controls[1]]
		}
	},
	{
		feature: {
			id: 3,
			controls: [controls[2], controls[3], controls[0], controls[2], controls[1]]
		}
	},
	{
		feature: {
			id: 4,
			controls: [controls[1], controls[4], controls[1], controls[1], controls[2]]
		}
	},
	{
		feature: {
			id: 6,
			controls: [controls[0], controls[2], controls[3], controls[1], controls[2]]
		}
	}
];

export function fetchApiData() {
	return partsMock;
}
