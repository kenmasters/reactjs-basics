// REGISTER ACTIONS HERE:

module.exports = {
	setName: payload => {
		return {
			type: 'SET_NAME',
			payload: payload
		}
	},
	setAge: payload => {
		return {
			type: 'SET_AGE',
			payload: payload
		}
	},
};