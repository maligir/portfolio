import java from "../assets/img/skills/java.png";
import cpp from "../assets/img/skills/c++.png";
import adobe from "../assets/img/skills/adobe.png";
import ai from "../assets/img/skills/ai.png";
import amazonwebservices from "../assets/img/skills/amazonwebservices.png";
import android from "../assets/img/skills/android.png";
import atlassian from "../assets/img/skills/atlassian.png";
import aws from "../assets/img/skills/aws.png";
import azure from "../assets/img/skills/azure.png";
import bitbucker from "../assets/img/skills/bitbucker.png";
import bootstrap from "../assets/img/skills/bootstrap.png";
import bootstrap4 from "../assets/img/skills/bootstrap4.png";
import bootstrap5 from "../assets/img/skills/bootstrap5.png";
import csharp from "../assets/img/skills/csharp.png";
import css from "../assets/img/skills/css.png";
import django from "../assets/img/skills/django.png";
import docker from "../assets/img/skills/docker.png";
import figma from "../assets/img/skills/figma.png";
import firebase from "../assets/img/skills/firebase.png";
import flask from "../assets/img/skills/flask.png";
import flutter from "../assets/img/skills/flutter.png";
import git from "../assets/img/skills/git.png";
import gitlab from "../assets/img/skills/gitlab.png";
import heroku from "../assets/img/skills/heroku.png";
import html5 from "../assets/img/skills/html5.png";
import jira from "../assets/img/skills/jira.png";
import jquery from "../assets/img/skills/jquery.png";
import js from "../assets/img/skills/js.png";
import json from "../assets/img/skills/json.png";
import linux from "../assets/img/skills/linux.png";
import microsoft from "../assets/img/skills/microsoft.png";
import mongodb from "../assets/img/skills/mongodb.png";
import mysql from "../assets/img/skills/mysql.png";
import nodejs from "../assets/img/skills/nodejs.png";
import npm from "../assets/img/skills/npm.png";
import onedrive from "../assets/img/skills/onedrive.png";
import openai from "../assets/img/skills/openai.png";
import oracle from "../assets/img/skills/oracle.png";
import postman from "../assets/img/skills/postman.png";
import powershell from "../assets/img/skills/powershell.png";
import prettier from "../assets/img/skills/prettier.png";
import python from "../assets/img/skills/python.png";
import reactjs from "../assets/img/skills/reactjs.png";
import swift from "../assets/img/skills/swift.png";
import tailwind from "../assets/img/skills/tailwind.png";
import ubuntu from "../assets/img/skills/ubuntu.png";
import visualBasic from "../assets/img/skills/visualBasic.png";
import vs from "../assets/img/skills/vs.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
        slidesToSlide: 2, // optional, default to 1.
        partialVisibilityGutter: 30

    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here are all of the skills I have accumulated over my 6 year journey thus far.<br></br> My skillset ranges from the fundamentals of software engineering, including the<br></br> core programming languages, to the intricacies of artificial intelligence development.</p>
                        <Carousel 
                        additionalTransfrom={0}
                        autoPlay={true}
                        autoPlaySpeed={1}
                        containerClass="container-with-dots"
                        customTransition="all 10s linear"
                        responsive={responsive} 
                        swipeable={true} 
                        infinite={true} 
                        arrows={false} 
                        showDots={false} 
                        transitionDuration={10000}
                        slidesToSlide={1}
                        shouldResetAutoplay={false}
                        draggable={true}
                        pauseOnHover={true}
                        className="owl-carousel owl-theme skill-slider"
                        
                        >
                            <div className="item">
                                <img src={adobe} alt="Image" />
                                <h5>Adobe</h5>
                            </div>
                            <div className="item">
                                <img src={ai} alt="Image" />
                                <h5>AI</h5>
                            </div>
                            <div className="item">
                                <img src={amazonwebservices} alt="Image" />
                                <h5>Amazon Web Services</h5>
                            </div>
                            <div className="item">
                                <img src={android} alt="Image" />
                                <h5>Android</h5>
                            </div>
                            <div className="item">
                                <img src={atlassian} alt="Image" />
                                <h5>Atlassian</h5>
                            </div>
                            <div className="item">
                                <img src={aws} alt="Image" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={azure} alt="Image" />
                                <h5>Azure</h5>
                            </div>
                            <div className="item">
                                <img src={bitbucker} alt="Image" />
                                <h5>BitBucket</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap4} alt="Image" />
                                <h5>Bootstrap4</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap5} alt="Image" />
                                <h5>Bootstrap5</h5>
                            </div>
                            <div className="item">
                                <img src={csharp} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={cpp} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={django} alt="Image" />
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                <img src={docker} alt="Image" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={figma} alt="Image" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={firebase} alt="Image" />
                                <h5>FireBase</h5>
                            </div>
                            <div className="item">
                                <img src={flask} alt="Image" />
                                <h5>Flask</h5>
                            </div>
                            <div className="item">
                                <img src={flutter} alt="Image" />
                                <h5>Flutter</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={gitlab} alt="Image" />
                                <h5>GitLab</h5>
                            </div>
                            <div className="item">
                                <img src={heroku} alt="Image" />
                                <h5>Heroku</h5>
                            </div>
                            <div className="item">
                                <img src={html5} alt="Image" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={java} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={jira} alt="Image" />
                                <h5>Jira</h5>
                            </div>
                            <div className="item">
                                <img src={jquery} alt="Image" />
                                <h5>JQuery</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={json} alt="Image" />
                                <h5>JSON</h5>
                            </div>
                            <div className="item">
                                <img src={linux} alt="Image" />
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                                <img src={microsoft} alt="Image" />
                                <h5>Microsoft</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="Image" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={npm} alt="Image" />
                                <h5>NPM</h5>
                            </div>
                            <div className="item">
                                <img src={onedrive} alt="Image" />
                                <h5>OneDrive</h5>
                            </div>
                            <div className="item">
                                <img src={openai} alt="Image" />
                                <h5>OpenAI</h5>
                            </div>
                            <div className="item">
                                <img src={oracle} alt="Image" />
                                <h5>Oracle</h5>
                            </div>
                            <div className="item">
                                <img src={postman} alt="Image" />
                                <h5>Postman</h5>
                            </div>
                            <div className="item">
                                <img src={powershell} alt="Image" />
                                <h5>Powershell</h5>
                            </div>
                            <div className="item">
                                <img src={prettier} alt="Image" />
                                <h5>Prettier</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={reactjs} alt="Image" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={swift} alt="Image" />
                                <h5>Swift</h5>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="Image" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={ubuntu} alt="Image" />
                                <h5>Ubuntu</h5>
                            </div>
                            <div className="item">
                                <img src={visualBasic} alt="Image" />
                                <h5>Visual Basic</h5>
                            </div>
                            <div className="item">
                                <img src={vs} alt="Image" />
                                <h5>VS Code</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
