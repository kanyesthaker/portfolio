import "./article.css"

export const Article = (props) => {
    const { title, body} = props;
    return (
        <div>
            <p className="article-title"></p>
            body
        </div>
    )
}