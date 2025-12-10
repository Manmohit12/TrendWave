import React from 'react'

const Newsitem = ( props ) => {

    const { title, description, imageUrl, newsUrl, author, date, source, category } = props

    return (
        <div>
            <div className="card news-card d-flex flex-column h-100">
                <img src={!imageUrl ? "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/7753/live/8380b9e0-da13-11ef-bc01-8f2c83dad217.jpg" : imageUrl} className="card-img-top" alt="Error occured" />
                <span className={`badge rounded-pill ${ ( category ) } news-badge`}>
                    {source}
                </span>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title clamp-2">{title}</h5>
                    <p className="card-text clamp-3" style={{ marginBottom: "10px", fontSize: "0.9rem" }}>{description}</p>
                    <p className="card-text"><small className="text-muted" style={{ fontSize: "0.8rem" }}>By {!author ? "unknown" : author} on {new Date( date ).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark mt-auto">Read</a>
                </div>
            </div>
        </div>
    )
}


export default Newsitem
