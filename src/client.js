import * as contentful from 'contentful'
export const client = contentful.createClient({
       space: 'heloufr9qqbc',
       accessToken: 'u6jLIkfaGXObqWB2j8of9mDfIso0WRtBrNNO27aDeXc', // from .env.development to hide the password and make it private

       /* space: process.env.REACT_APP_SPACE_ID,
       accessToken: process.env.REACT_APP_ACCESS_TOKEN, */

})

