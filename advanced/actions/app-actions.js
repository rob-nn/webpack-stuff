import constants from '../constants/app-constants.js'
import dispatcher from '../dispatcher/dispatcher.js'

export let incrementActions = {
	incrementCount: () =>{
		console.log('increment
		dispatcher.dispatch({
			actionType: constants.INCREMENT
		})
	}
}
