import React from 'react'

const Newsitem = ( props ) => {

    const { title, description, imageUrl, newsUrl, author, date, source, category } = props

    return (
        <div>
            <div className="card" style={{ width: "18rem", height: "100%", display: "flex", flexDirection: "column" }}>
                <img src={!imageUrl?"https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/7753/live/8380b9e0-da13-11ef-bc01-8f2c83dad217.jpg":imageUrl} className="card-img-top" alt="Error occured" style={{ height: "180px", objectFit: "cover" }} />
                <div className="card-body" style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden", position: "relative" }}>
                    <h5 className="card-title" style={{ marginBottom: "10px", minHeight: "50px", paddingRight: "80px", overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }}>{title}
                    </h5>
                    <span className={`badge rounded-pill ${ ( category ) }`} style={{ position: "absolute", top: "10px", right: "10px", whiteSpace: "nowrap" }}>
                        {source}
                    </span>
                    <p className="card-text" style={{ flex: 1, overflow: "hidden", marginBottom: "10px", fontSize: "0.9rem" }}>{description}</p>
                    <p className="card-text"><small className="text-muted" style={{ fontSize: "0.8rem" }}>By {!author ? "unknown" : author} on {new Date( date ).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-dark" style={{ marginTop: "auto" }}>Go somewhere</a>
                </div>
            </div>
        </div>
    )
}


export default Newsitem
