import { useEffect, useState } from "react"
import { Result } from "../types"
import { Container, Row } from "react-bootstrap"
import SingleArticle from "./SingleArticle"

const FetchArticles = function () {
  const [articles, setArticles] = useState<Result[]>([])

  const getArticles = () => {
    const articlesURL =
      "https://api.spaceflightnewsapi.net/v4/articles/?format=json"

    fetch(articlesURL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error("errore nella response")
        }
      })
      .then((data) => {
        console.log(data)
        setArticles(data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getArticles()
  }, [])

  return (
    <Container className="py-4">
      <Row className="justify-content-center g-2">
        <h2 className="text-center color">Welcome on board!</h2>
        <h3 className="text-center color">Discover space with our articles!</h3>
        {articles.map((a) => {
          return <SingleArticle article={a} key={a.id} />
        })}
      </Row>
    </Container>
  )
}

export default FetchArticles
