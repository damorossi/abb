const controls = [
	{
		id: 1,
		feature: 1,
		meassurements: {
			x: {
				value: 23,
				dev: 1,
				devOutTotal: 0.24
			},
			y: {
				value: 12,
				dev: 1,
				devOutTotal: 0.24
			},
			z: {
				value: 14,
				dev: 1,
				devOutTotal: 0.24
			}
		},
		length: 0.57,
		diameter: 1
	},
	{
		id: 2,
		feature: 1,
		meassurements: {
			x: {
				value: 23,
				dev: 1,
				devOutTotal: 0.24
			},
			y: {
				value: 12,
				dev: 1,
				devOutTotal: 0.24
			},
			z: {
				value: 14,
				dev: 1,
				devOutTotal: 0.24
			}
		},
		length: 0.57,
		diameter: 1
	},
	{
		id: 3,
		feature: 1,
		meassurements: {
			x: {
				value: 23,
				dev: 1,
				devOutTotal: 0.24
			},
			y: {
				value: 12,
				dev: 1,
				devOutTotal: 0.24
			},
			z: {
				value: 14,
				dev: 1,
				devOutTotal: 0.24
			}
		},
		length: 0.57,
		diameter: 1
	},
	{
		id: 4,
		feature: 2,
		meassurements: {
			x: {
				value: 23,
				dev: 1,
				devOutTotal: 0.24
			},
			y: {
				value: 12,
				dev: 1,
				devOutTotal: 0.24
			},
			z: {
				value: 14,
				dev: 1,
				devOutTotal: 0.24
			}
		},
		length: 0.57,
		diameter: 1
	},
	{
		id: 5,
		feature: 2,
		meassurements: {
			x: {
				value: 23,
				dev: 1,
				devOutTotal: 0.24
			},
			y: {
				value: 12,
				dev: 1,
				devOutTotal: 0.24
			},
			z: {
				value: 14,
				dev: 1,
				devOutTotal: 0.24
			}
		},
		length: 0.57,
		diameter: 1
	},
	{
		id: 6,
		feature: 3,
		meassurements: {
			x: {
				value: 23,
				dev: 1,
				devOutTotal: 0.24
			},
			y: {
				value: 12,
				dev: 1,
				devOutTotal: 0.24
			},
			z: {
				value: 14,
				dev: 1,
				devOutTotal: 0.24
			}
		},
		length: 0.57,
		diameter: 1
	},
	{
		id: 7,
		feature: 4,
		meassurements: {
			x: {
				value: 23,
				dev: 1,
				devOutTotal: 0.24
			},
			y: {
				value: 12,
				dev: 1,
				devOutTotal: 0.24
			},
			z: {
				value: 14,
				dev: 1,
				devOutTotal: 0.24
			}
		},
		length: 0.57,
		diameter: 1
	},
	{
		id: 8,
		feature: 5,
		meassurements: {
			x: {
				value: 23,
				dev: 1,
				devOutTotal: 0.24
			},
			y: {
				value: 12,
				dev: 1,
				devOutTotal: 0.24
			},
			z: {
				value: 14,
				dev: 1,
				devOutTotal: 0.24
			}
		},
		length: 0.57,
		diameter: 1
	},
	{
		id: 9,
		feature: 6,
		meassurements: {
			x: {
				value: 23,
				dev: 1,
				devOutTotal: 0.24
			},
			y: {
				value: 12,
				dev: 1,
				devOutTotal: 0.24
			},
			z: {
				value: 14,
				dev: 1,
				devOutTotal: 0.24
			}
		},
		length: 0.57,
		diameter: 1
	},
	{
		id: 10,
		feature: 6,
		meassurements: {
			x: {
				value: 23,
				dev: 1,
				devOutTotal: 0.24
			},
			y: {
				value: 12,
				dev: 1,
				devOutTotal: 0.24
			},
			z: {
				value: 14,
				dev: 1,
				devOutTotal: 0.24
			}
		},
		length: 0.57,
		diameter: 1
	}
];

const partsMock = [
	{
		feature: {
			id: 1,
			controls: [controls[0], controls[1], controls[2]]
		}
	},
	{
		feature: {
			id: 2,

			controls: [controls[3], controls[4]]
		}
	},
	{
		feature: {
			id: 3,
			controls: [controls[5]]
		}
	},
	{
		feature: {
			id: 4,
			controls: [controls[6]]
		}
	},
	{
		feature: {
			id: 5,
			controls: [controls[7]]
		}
	},
	{
		feature: {
			id: 6,
			controls: [controls[8], controls[9]]
		}
	}
];

export function fetchApiData() {
	return partsMock;
}
