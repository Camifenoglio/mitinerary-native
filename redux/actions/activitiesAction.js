import axios from 'axios';

const activitiesActions = {
    getActivities: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('https://my-tinerary-fenoglio-backend.herokuapp.com/api/activities')
            dispatch({ type: 'GET_ACTIVITIES', payload: res.data.response.activities })
        }
    },
    getOneActivity: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`https://my-tinerary-fenoglio-backend.herokuapp.com/api/activities/${id}`)
            dispatch({ type: 'GET_ONE_ACTIVITY', payload: res.data.response })
        }
    },
    findActivitiesFromItinerary: (id) => {
        // console.log(id)
        return async (dispatch, getState) => {
            const res = await axios.get(`https://my-tinerary-fenoglio-backend.herokuapp.com/api/activitiesbyitinerary/${id}`)
            // console.log(res)
            return res.data.response
        }
    }
}

export default activitiesActions