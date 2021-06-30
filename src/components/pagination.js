import React from 'react'
import { Link } from 'gatsby'
import ArticlePreview from '../components/article-preview'

const Pagination = ({next, previous}) => {

    return (
        <article className="message mb-6">
            <div className="message-body">
            <ul className="columns is-multiline">
                <li className="column is-5" key="next">
                    {next ? 
                    <>
                        <h2 className="notification title is-4">Next Article</h2>
                        <ArticlePreview article={next} />
                    </> : 
                    <div />}
                </li>
                <li className="column is-2" key="margin">
                    <div />
                </li>
                <li className="column is-5" key="previous">
                    
                    {previous ? 
                    <>
                        <h2 className="notification title is-4">Previous Article</h2>
                        <ArticlePreview article={previous} />
                    </> : 
                    <div />}
                </li>
            </ul>
            </div>
        </article>
    )

}

export default Pagination;
