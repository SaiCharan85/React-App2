import React from 'react'



function NewsElement (props)
 {


    let {title, description,iurl,nurl,date,author,source} = props;
    return (
      <div>
        
        <div className="card" style={{width: "20rem"}}>
        
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    </span>
  
  <img className="card-img-top" src={iurl} alt="Card image cap"/>
  <div className="card-body">
  <h5 className="card-title">{title} 
  . . .</h5>
    <p className="card-text">{description} . . .</p>
    
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={nurl} target="_blank"className="btn btn-primary">Read More</a>
  </div>
</div>

      </div>
    )
  }

export default NewsElement
