import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Result } from "../types"
import { Col, Container, Row } from "react-bootstrap"

type Params = {
  myId: string
}

const Details = function () {
  const { myId } = useParams<Params>()
  const [article, setArticle] = useState<Result | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const fetchArticle = async () => {
    try {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/${myId}`
      )
      if (!response.ok) throw new Error("Errore nella fetch")
      const data: Result = await response.json()
      console.log(data)
      setArticle(data)
    } catch (error) {
      console.error(error)
      setHasError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchArticle()
  }, [])

  if (isLoading) return <p>Caricamento...</p>
  if (hasError || !article) return <p>Errore nel caricamento dell'articolo</p>

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10} className=" img-thumbnail">
          <Row className="align-items-start">
            <Col xs={12} md={6} className="text-center">
              <img
                src={article.image_url}
                alt={article.title}
                className="img-fluid rounded"
              />
            </Col>

            <Col xs={12} md={6}>
              <h2>{article.title}</h2>
              <p>
                <strong>Published:</strong>{" "}
                {new Date(article.published_at).toLocaleDateString()}
              </p>
              <p>{article.summary}</p>
              <Link to="/">
                <h4 className="pt-2">Go to home</h4>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Details
