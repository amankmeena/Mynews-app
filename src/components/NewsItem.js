import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

    return (
      <div className='container my-3'>

        <div className="card">

          <div className='position-absolute' style={{display: 'flex',justifyContent: 'flex-end',right: '0'}}>
          <span className="badge rounded-pill bg-danger z-1" style={{left: "90%"}}> {source} </span>
          </div>

          <img src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDLUgPm6eqlc3xZzykaaMRKvUUlMVaaiUlA&s"} className="card-img-top" alt="..." />

          <div className="card-body">
            <h5 className="card-title"> {title} </h5>

            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary"> By {author ? author : "Unknown"} on {new Date(date).toString().slice(0, 24)} </small></p>

            <div className="d-grid gap-2 col-6 mx-auto">
              <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default NewsItem