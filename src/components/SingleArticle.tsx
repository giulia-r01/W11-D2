import { Button, Card, Col } from "react-bootstrap"
import { Result } from "../types"
import { useNavigate } from "react-router-dom"

interface SingleArticleProps {
  article: Result
}

const SingleArticle = function (props: SingleArticleProps) {
  const navigate = useNavigate()
  return (
    <Col xs={12} md={4}>
      <Card>
        <Card.Img
          variant="top"
          src={props.article.image_url}
          className="same-height"
        />
        <Card.Body className="text-center">
          <Card.Title>{props.article.title}</Card.Title>

          <Button
            onClick={() => {
              // portare l'utente alla pagina /details/id-del-libro
              navigate("/details/" + props.article.id)
            }}
          >
            Go to details
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
export default SingleArticle
