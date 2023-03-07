import React from 'react';
import { marked } from 'marked';
const Post = ({article}) => {
       console.log(article);
       const {title,img, body, description} = article.fields;
       const postBody = marked(body);
       const postDescription = marked(description);
       return ( 
              <div className="post">
                     <h2>{title}</h2>
                     {img && <img className='img' src={img.fields.file.url} alt={title} width="650" height="500" />}
                     <section dangerouslySetInnerHTML={{__html:postBody}}/>
                     <p dangerouslySetInnerHTML={{__html:postDescription}}/>
              </div>
       );
}

export default Post;