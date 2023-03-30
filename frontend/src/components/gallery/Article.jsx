import { Link } from "react-router-dom";
import styles from "./Article.module.scss";
import styled from "styled-components";

const ArticleWrapper = styled.div`article {background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%),  url(${props => props.imageUrl});}`

const Article = ({ data }) => {
    const { id, title } = data;
    return (
        <ArticleWrapper imageUrl={data.cover}>
            <Link to={`./logements/${id}`}>
                <article className={styles.item}>
                    <h2>{title}</h2>

                </article>
            </Link>
        </ArticleWrapper>
    )
}
export default Article;