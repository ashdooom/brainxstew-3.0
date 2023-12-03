import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import brainxstew from './assets/brainxstew.png';
import gloomyBear from './assets/gloomybear.png';
import bg from './assets/bg.png';
import pinkSkull from './assets/pinkSkull.gif';
import notepad from './assets/notepad.webp';
import emoborder from './assets/emo border.png'
import gloomyflipped from './assets/gloomyflipped.png'
import pinkIpod from './assets/pinkIpod.png'
import gwittermewwo from './assets/gwittermewwo.gif';
import kuwomi from './assets/kuwomi.gif';
import halloween from './assets/halloween.webp';
import queen from './assets/queen.webp';
import gwoomygif from './assets/gwoomygif.gif';
import bwink from './assets/bwink.webp';
import starz from './assets/starz.jpeg';
import selfieee from './assets/selfieee.png'
import AudioPlayer from './components/AudioPlayer';

function App() {

  <head>
     <link rel="icon" type="image/png" href="https://i.ibb.co/hdWmjTz/Gloomy-Bear3-1.gif" />
  </head>

  return (



    <div className='background' style={{ backgroundImage: `url(${bg})` }}>
      <div className='header'>
        <div className='App'>
          <header className="App-header">
            <Container>
              <Row>
                <Col sm={{ span: 6, offset: 3 }}>
                  <img src={brainxstew} alt='brainxstew logo' className='brain' />
                  <br />


                  <div
                    className='box-container'
                    style={{
                      border: '20px outset #2fff00',
                      padding: '20px',
                      boxSizing: 'border-box',
                      position: 'relative',
                      justifyContent: 'center',
                      maxWidth: '600px',
                      margin: '0 auto',
                      backgroundImage: `url(${starz})`
                    }}
                  >

                    <div className='about-header'>



                      <div className='kuromi'>
                        <img src={kuwomi} />
                      </div>

                      <div className='about'>
                        <h1 className='about'>
                          aBoUt mE ~*~*
                        </h1>
                      </div>

                      <div className='gloomy'>
                        <img className="gloomy" src={gloomyBear} alt="gloomy bear" />
                      </div>

                      <div className='gloomy2'>
                        <img className="gloomy2" src={gloomyflipped} alt="gloomy bear" />
                      </div>

                    </div>


                    <Col md={6}>
                      <div className='selfie' style={{ position: 'relative' }}>
                        <img className='selfie' src={selfieee} alt='selfie' />
                        <img
                          className='emo-border'
                          src={emoborder}
                          alt='emo border'
                          style={{
                            position: 'absolute',
                            top: 20,
                            left: 0,
                            right: 100
                          }}
                        />
                      </div>
                    </Col>

                    <div className='asl'>
                      <h3 className='asl'>
                        AGE: 26 YEARS YUNG
                        <br />
                        SEX: FEMALE
                        <br />
                        LOCATION: SUNNY LA
                      </h3>
                    </div>

                    <div className='mewody'>
                      <img src={gwittermewwo} />
                    </div>



                    <div className='links'>
                      <a href='https://github.com/ashdooom' style={{ margin: 30 }}>
                        github
                      </a>
                      <br />
                      <a href='https://twitter.com/brainxstew' style={{ margin: 30 }}>
                        twitter
                      </a>
                      <br />
                      <a href='https://brainxstew.123guestbook.com'>
                        guestbook
                      </a>
                    </div>

                    <div className='psst'>
                      <h6>
                        <p>
                          (psssst.... the ipod is interactive☆)
                        </p>
                      </h6>
                    </div>

                    <div className='ipod-container'>
                      <div className='ipod'>
                        <img src={pinkIpod} alt="iPod Image" className='ipod-image' />
                        <div className='audio-thumbnail-container'>
                          <AudioPlayer />
                        </div>
                      </div>
                    </div>


                    <img className='gwoomy2' src={gwoomygif} />

                    <img src={halloween} className='halloween' />

                    <div className='diary-container'>
                      <div className='diary-background'>

                        <div className='date'>
                          <p className='date'>
                            11☆28☆23 6:06pm
                          </p>
                        </div>
                        <br />
                        <p className='diary-text'>
                          hey! thanks for visiting my page :3 this is brainxstew 3.0, my magnum opus. this page is a culmination of everything ive learned within my bootcamp, research, and LOTS of youtube. i truly couldnt have done it without my amazing husband ryan, he's my rock! im going to be taking commisions for your own myspace page in the new year, including hosting if youre interested ☆
                        </p>
                      </div>
                      <img src={notepad} className='diary' alt="notepad" />

                    </div>


                    <img src={queen} className='queen' />


                    <div className='pinkSkull'>
                      <img className='pinkSkull' src={pinkSkull} alt="pink skull" />
                      <img className='pinkSkull' src={pinkSkull} alt="pink skull" />
                      <img className='pinkSkull' src={pinkSkull} alt="pink skull" />

                    </div>
                  </div>

                </Col>
              </Row>
            </Container>
          </header>
        </div>
      </div>
    </div>

  );
}

export default App;

