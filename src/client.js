import * as contentful from 'contentful'
export const client = contentful.createClient({
       space: "heloufr9qqbc",
       accessToken: "u6jLIkfaGXObqWB2j8of9mDfIso0WRtBrNNO27aDeXc",
       
       /* space: process.env.REACT_APP_SPACE_ID,
       accessToken: process.env.REACT_APP_ACCESS_TOKEN, */
       

})

