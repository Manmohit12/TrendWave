import React from 'react'

const Newsitem=(props)=>{
  
 const { title, description, imageUrl, newsUrl,author,date,source,category} = props
    
    return (
      <div>
        <div className="card" style={{ width: "18rem",height:"24rem" }}>
                <img src={!imageUrl?"https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/7753/live/8380b9e0-da13-11ef-bc01-8f2c83dad217.jpg":imageUrl} className="card-img-top" alt="Error occured" />
                 <div className="card-body">
                <h5 className="card-title">{title}
                <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill ${(category)}`}>
                  {source}
                   </span>
                </h5>
            <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }


export default Newsitem
