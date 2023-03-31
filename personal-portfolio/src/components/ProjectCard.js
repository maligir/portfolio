import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, linkUrl, classN="proj-imgbx" }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a target="_blank" href={linkUrl}>
        <div className={classN}>
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
