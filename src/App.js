import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar';
import CardProvider from './components/card/card';
import './App.css'
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Card, Modal, Form, Input, Button, Space } from 'antd';
import { DiJavascript1, DiNodejs, DiReact, DiBootstrap, DiSass, DiPostgresql, DiJava } from 'react-icons/di';
import { SiTypescript, SiStyledcomponents, SiFirebase, SiLeaflet, SiSelenium, SiSequelize, SiExpress } from 'react-icons/si';
import { TbBrandNextjs, TbBrandVue } from 'react-icons/tb';
import { FaGit } from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai';
import cv from './/bobii.pdf'
import emailjs from 'emailjs-com';
import axios from 'axios';
// import { Document, Page } from 'react-pdf';

const { Meta } = Card;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 19,
  },
};

function App() {
  // state
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInput, setUserInput] = useState({})
  // const [pageNumber, setPageNumber] = useState(1);
  // const [numPages, setNumPages] = useState(null);
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
  };

  // Function
  function scrollToTop() {
    scroll.scrollToTop();
  }
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  /* eslint-enable no-template-curly-in-string */

  // const onFinish = () => {
  //   console.log(userInput)
  //   // console.log(values);
  //   // console.log('yew');
  //   if (userInput) {
  //     // emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, userInput , process.env.YOUR_USER_ID)
  //     // .then((result) => {
  //     //   console.log('sini');
  //     //   console.log(result.text);
  //     // }, (error) => {
  //     //   console.log('gagal');
  //     //   console.log(error.text);
  //     // });
  //     // https://api.elasticemail.com/v2/email/send?apikey=7H29A61A88F5D6F1CX5CC79IWQADW3EFC98CD5F4428W7WU2B873256BCECCDCIAP8A5C4JS6A29675XHFBED2DFCDF9I1QW&subject=&from=&fromName=&sender=&senderName=&msgFrom=&msgFromName=&replyTo=&replyToName=&to=&msgTo=&msgCC=&msgBcc=&lists=&segments=&mergeSourceFilename=&dataSource=&channel=&bodyHtml=&bodyText=&charset=&charsetBodyHtml=&charsetBodyText=&encodingType=&template=&headers_firstname=firstname: myValueHere&postBack=&merge_firstname=John&timeOffSetMinutes=&poolName=My Custom Pool&isTransactional=false&attachments=&trackOpens=true&trackClicks=true&utmSource=source1&utmMedium=medium1&utmCampaign=campaign1&utmContent=content1&bodyAmp=&charsetBodyAmp=
  //     const data = {
  //       apikey: '40F0FD0064DD0BA824A48B31C4DD7CAC420ACB26F9661976C33B7C495CDE0377BAC0F6C45342F889A47C78A7CB19DE42',
  //       subject: 'Test Email',
  //       from: 'abi@gmail.com',
  //       fromName : "Abi",
  //       to: 'bobybewa6@gmail.com',
  //       bodyText: 'This is a test email sent from Elastic Email API.',
  //     };
  //     axios.post('https://api.elasticemail.com/v2/email/send', data)
  //       .then((response) => {
  //         console.log('suskes')
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.log('gaal')
  //         console.log(error.response.data.error);
  //       });
  //   }
  // };

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  // UseEffect
  //   useEffect(() => {
  // console.log(userInput,'userInput')
  //   },[userInput])
  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="App">
      <Navbar />
      {/* <button onClick={scrollToSection}>Scroll to Section</button> */}
      <CardProvider className="card-section">
        <h1 style={{ textAlign: 'center', letterSpacing: '1px' }}>Boby Bewa</h1>
        <p style={{ letterSpacing: '1px' }}>A results-driven web developer with experience creating responsive and user-friendly websites. Proficient in front-end technologies such as HTML, CSS, JavaScript, and React.js, Next js, etc. Skilled in translating design concepts into efficient and maintainable code. Strong problem-solving skills and a passion for staying up-to-date with emerging web technologies. Committed to providing high quality solutions that meet client objectives and enhance user experience. Excellent collaboration and communication skills, working effectively in an independent and team oriented environment.
        </p>
        <div className='button-container'>
          <a href={cv} className='a-child' download>
            <p className='child-button-container'>View Resume <ArrowRightOutlined /></p>
          </a>
        </div>
      </CardProvider>

      <CardProvider className="card-section">
        <h1 style={{ textAlign: 'center', letterSpacing: '1px' }}>Projects</h1>
        {/* This is a collection of individual projects that I have worked on */}
        <div class="grid-container">
          <div class="grid-item">
            <div>
              <div>
                <a target='blank' className='a-child' href='https://covid19-details-and-get-news.web.app/'>
                  <img className="img-project" src="/covid.jpg" />
                </a>
              </div>
              <div>
                <a target='blank' className='a-child' href='https://covid19-details-and-get-news.web.app/'>
                  <h2 className='description-project'>Portal Covid-19</h2>
                </a>
                <p className='description-project'>This website provides information related to Covid cases in Indonesia and also the world</p>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div>
              <div>
                <a target='blank' className='a-child' href='https://galery-010.web.app/'>
                  <img className="img-project" src="/gallery.jpg" />
                </a>
              </div>
              <div>
                <a target='blank' className='a-child' href='https://galery-010.web.app/'>
                  <h2 className='description-project'>Gallery</h2>
                </a>
                <p className='description-project'> It serves as a resource for photographers, designers, and content creators who are in need of visually appealing and diverse images for various projects.</p>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div>
              <div>
                <a target='blank' className='a-child' href='https://fancy-todo-306820.web.app/'>
                  <img className="img-project" src="/todo.jpg" />
                </a>
              </div>
              <div>
                <a target='blank' className='a-child' href='https://fancy-todo-306820.web.app/'>
                  <h2 className='description-project'>Todo App</h2>
                </a>
                <p className='description-project'>To help users organize and manage their tasks and to-do lists</p>
              </div>
            </div>
          </div>
        </div>
        <div className='button-container'>
          <a target='blank' href='https://landing-page-16e52.firebaseapp.com/personal#projects' className='a-child'>
            <p className='child-button-container'>More Projects <ArrowRightOutlined /></p>
          </a>
        </div>
      </CardProvider>

      <CardProvider className="card-section-1">
        <h1 style={{ textAlign: 'center', letterSpacing: '1px' }}>Skills & Experiences</h1>
        <p style={{ letterSpacing: '1px' }}>
          Experience with front-end frameworks and also Collaborated with back-end developers to integrate front-end and back-end systems. These are some of the frameworks I've used
        </p>
        <div className='icon-experiences'>
          <DiJavascript1 />
          <DiNodejs />
          <SiTypescript />
          <DiReact />
          <DiBootstrap />
          <DiSass />
          <DiPostgresql />
          <TbBrandNextjs />
          <SiStyledcomponents />
          <SiFirebase />
          <TbBrandVue />
          <FaGit />
          <SiLeaflet />
          <SiSequelize />
          <SiSelenium />
          <SiExpress />
          <DiJava />
        </div>
        <div className='button-container'>
          {/* <p className='child-button-container' onClick={showModal}>Get In Touch <ArrowRightOutlined /></p> */}
        </div>
        {isVisible &&
          <AiOutlineArrowUp onClick={scrollToTop} className='icon-scroll' />
        }
      </CardProvider>
    </div>
  );
}

export default App;
