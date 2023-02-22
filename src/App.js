import logo from './logo.svg';
import './App.css';
import * as React from 'react';

import MenuIcon from '@mui/icons-material/Menu';

function App() {

  const butClick = () => {

  }

  const [ind, setInd] = React.useState(2);

  const showSlides = (n) => {
      console.log(ind);
      let i, slideIndex;
  }

  const nextSlide = () => {
      console.log("next");
      if(ind!=3) setInd(ind+1);
      else setInd(1);
      showSlides(ind+1);
  }

  const prevSlide = () => {
      console.log("prev");
      if(ind!=1) setInd(ind-1);
      else setInd(3);
      showSlides(ind-1);
  }

  return (
    <div>
      <div className="COM">
        <div className="logo">
          <div className='logo-flex'>
            <img src="../monkeyfilogo.png" style={{width:"116px", height:"109px"}}></img>
            <div style={{display:"flex", flexDirection:"column"}}>
              <img src="../monkeyfiletters.png" style={{width:"255px", height:"40px", paddingTop:"12%"}} />
              <p className="logo-text">Crypto made easy</p>
            </div>
          </div>
          <div className='navbar'>
            <div style={{display:"flex"}}>
              <button onClick={butClick.bind(this)}>About us</button>
              <button>Wallet</button>
              <button>Markets</button>
              <button>My Chat</button>
              <button>LitePaper</button>
              <button>Sign Up</button>
              <button className='signin'>Sign in</button>
            </div>
          </div>
        </div>

        <button className='secure'>
          <img src="../Vector.png" style={{margin:"10px", alignSelf:"center",width:"15%", height:"50%"}}></img>
          <div className="secure-flex">
            <p style={{height:"5px", marginBlockEnd:"0px", fontWeight:"bold"}}>100% Secure</p>
            <p style={{fontSize:"10px", marginBlockStart:"15px"}}>Your funds are safe!</p>
          </div>
        </button>

        <div style={{display:"flex"}}>
          <div className='advert'>
            <div className='soci'>TRADE, SOCIALIZE AND EARN CRYPTO</div>
            <div className='crypto'>trade the most popular crypto currencies, at ease.</div>
            <div className='monkey'>Monkey Finance is a next-generation cryptocurrency exchange that offers users on-boarding education, rewards, and an incredible social aspect to buying/selling cryptos.</div>
            <div style={{display:"flex", paddingTop:"80px"}}>
              <button className='wallet'>Create Wallet</button>
              &tab;
              <button className='wallet'>Socialize</button>
            </div>
          </div>
          <img className="MF" src="../MF.png"></img>
        </div>

        <div className='market'>
          <p className='big'>Markets</p>
          <div style={{display:"flex"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
              <p className='sma'>MF/USD</p>
              <p className="big">0.0342</p>
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
              <p className="sma">1.92%</p>
              <p className="big">USD</p>
            </div>
            <img src="../Vector1.png"></img>
          </div>
          <div style={{display:"flex"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
              <p className="sma">MF/USDC</p>
              <p className="big">0.0256</p>
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
              <p className="sma">1.92%</p>
              <p className="big">USDC</p>
            </div>
            <img src="../Vector2.png"></img>
          </div>
          <div style={{display:"flex"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
              <p className="sma">MF/BUSD</p>
              <p className="big">0.0342</p>
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
              <p className="sma">1.92%</p>
              <p className="big">BUSD</p>
            </div>
            <img src="../Vector3.png"></img>
          </div>
          <div style={{display:"flex"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
              <p className="sma">MF/EUR</p>
              <p className="big">0.0342</p>
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
              <p className="sma">1.92%</p>
              <p className="big">EUR</p>
            </div>
            <img src="../Vector4.png"></img>
          </div>
        </div>
        <div className='wallets'>
          <p className='big'>Wallets</p>
          <div style={{display:"flex"}}>
            <div style={{display:"flex", flexDirection:"column"}}>
              <p className='sma'>BTC</p>
              <p className="sma">You Got</p>
            </div>
            <div style={{display:"flex", flexDirection:"column"}}>
              <p className="yel">USD</p>
              <p className="yel">329, 009ETH</p>
            </div>
            <div>
            </div>
          </div>
          <button className='wallet'>Claim Rewards</button>
        </div>
        <div style={{display:"flex", flexDirection:"column"}}>
          <div className='bitcoin'>
            <img src="../bitcoin.png"></img>
            <img src="../ethereum.png"></img>
            <img src="../binance.png"></img>
          </div>
          <div className='bitcoin'>
            <img src="../Card Assets (4).png"></img>
            <img src="../Card Assets (5).png"></img>
            <img src="../Card Assets (6).png"></img>
          </div>
          <div className='bitcoin'>
            <img src="../Card Assets (7).png"></img>
            <img src="../Card Assets (8).png"></img>
            <img src="../Asset.png"></img>
          </div>
        </div>
        <br/><br/>
        <div className="lgtxt w60">The first-ever social exchange, because centralized exchanges don’t have to be boring!</div>
        <div className="smtxt w30">Monkey Finance has a variety of features that make it the best place to start trading</div>
        <div className='portfolio'>
          <img src="../Card 1.png"></img>
          <img src="../Card 3.png" style={{position:"relative", top:"40px"}}></img>
          <img src="../Card 2.png"></img>
        </div>
        <br/><br/>
        <div className="lgtxt w40">One click, instant payout with credit or debit card.</div>
        <div className="smtxt w40">Become a crypto owner in minutes using your debit or credit card and quickly purchase top cryptocurrencies.</div>
        <br/>
        <div className='buynow'>
          <div style={{display:"flex"}}>
            <button className='mybut' style={{color:"#CAFC01"}}>Buy</button>|
            <button className='mybut'>Sell</button>
          </div>
          <div>1 BTC is roughly</div>
          <div>20,073.27 USD</div>
          <img src="../Form.png"></img><br/>
          <img src="../Form1.png"></img>
          <br/>
          <button>Buy Now</button>
        </div>
        <img src="../visa.png" className="visa"></img>
        <div className='smtxt' style={{paddingTop:"100px"}}>We accept payment with many methods:</div>
        <img src="../Payment.png" style={{alignSelf:"center", width:"30%"}}></img>
        <div className='lgtxt w60'>Crypto education, awareness and inclusivity to Latin America and the rest of the world</div>
        <div className='smtxt w40'>We believe MonkeyFi is here to stay — and that a future worth building is one which opens its doors and invites everyone in.</div>
        <div style={{display:"flex", paddingTop:"20px", alignSelf:"center"}}>
          <div style={{display:"flex", flexDirection:"column", width:"400px"}}>
            <img src="../Clarify.png" style={{width:"30%", alignSelf:"center"}}></img>
            <div className='lgtxt'>Clarify</div>
            <div className='smtxt'>We help you make sense of the coins, the terms, the dense charts and market changes.</div>
          </div>
          <div style={{display:"flex", flexDirection:"column", width:"400px"}}>
            <img src="../Confidence.png" style={{width:"30%", alignSelf:"center"}}></img>
            <div className='lgtxt'>Confidence</div>
            <div className='smtxt'>Our markets are always up to date, sparking curiosity with real-world relevance.</div>
          </div>
          <div style={{display:"flex", flexDirection:"column", width:"400px"}}>
            <img src="../Community.png" style={{width:"30%", alignSelf:"center"}}></img>
            <div className='lgtxt'>Community</div>
            <div className='smtxt'>We support the crypto community, putting data in the hands which need it most.</div>
          </div>
        </div>
        <div className='lgtxt'>What the media will say about MonkeyFi?</div>
        <div className="slideshow-container">
            <a className="prev" onClick={prevSlide.bind()}>&#10094;</a>
            <div className="mySlides">
              <img src={"../img"+ind+".png"} style={{width:"100%"}} />
            </div>
            <a className="next" onClick={nextSlide.bind()}>&#10095;</a>
        </div>
        <div className='lgtxt'>Build your crypto portfolio anywhere.</div>
        <div className='smtxt'>A powerful cryptocurrency exchange in your pocket. Buy, sell and trade crypto on the go.</div>
        <div className='mobile-container'>
          <img src="../Illustration.png" style={{width:"700px", alignSelf:"center"}}></img>
          <div style={{display:"flex", alignSelf:"center"}}>
            <div className='smtxt' style={{paddingTop:"15px"}}>The</div>
            <img src="../monkeyfilogo.png" style={{width:"40px",height:"40px"}}></img>
            <img src="../monkeyfiletters.png" style={{width:"80px",height:"20px", alignSelf:"center"}}></img>
            <div className='smtxt' style={{paddingTop:"15px"}}>&nbsp;Wallet Mobile App is Coming!</div>
          </div>
          <div style={{display:"flex", alignSelf:"center"}}>
            <img src="../google.png" className='google'></img>
            <img src="../app.png" className='google'></img>
          </div>
        </div>
        
        <div className='getstarted'>
          <div className='smtxt'>Ready to start trading cryptocurrency?</div>
          <div className='lgtxt'>Be part of our beta testing group and earn up to $100! </div>
          <br/>
          <div className='email' style={{display:"flex", flexDirection:"row"}}>
            <div style={{paddingLeft:"30px", paddingTop:"15px", paddingBottom:"15px"}}>Enter your email address</div>
            <button>Get Started</button>
          </div>
        </div>
        <div className='footer'>
          <div style={{display:"flex", flexDirection:"column", paddingRight:"100px"}}>
            <img src="../part1.png"></img>
            <img src="../part1-2.png" style={{padding:"50px"}}></img>
          </div>
          <div style={{display:"flex", flexDirection:"column", paddingLeft:"20px"}}>
            <div className='smtxt' style={{textAlign:"left", alignSelf:"auto"}}>Quick Links</div>
            <div style={{display:"flex", flexDirection:"row"}}>
              <div style={{display:"flex", flexDirection:"column"}} className='quick'>
                <div>Buy/Sell</div>
                <div>Trade Now</div>
                <div>Wallet</div>
              </div>
              <div style={{display:"flex", flexDirection:"column"}} className='quick'>
                <div>My Chat</div>
                <div>LitePaper</div>
              </div>
            </div>
          </div>
          <div style={{display:"flex", flexDirection:"column", paddingLeft:"20px"}}>
            <div className='smtxt' style={{textAlign:"left", alignSelf:"auto"}}>Submit for updates</div>
            <div className='quick w70'  style={{paddingBottom:"15px"}}>Subscribe to get the latest updates from our exchange!</div>
            <div className='submit w70' style={{display:"flex", flexDirection:"row"}}>
              <div style={{paddingTop:"15px", paddingBottom:"15px"}}>Enter your email address</div>
              <button>&nbsp;&nbsp;&nbsp;Send&nbsp;&nbsp;&nbsp;</button>
            </div>
          </div>
        </div>
        <div className='copyright'>
          <div style={{display:"flex", flexDirection:'row', width:"100%"}}>
            <div style={{width:"80%", paddingLeft:"12%"}}>MonkeyFi&nbsp;&nbsp;&nbsp;.All rights reserved.</div>
            <div style={{width:"40%", display:"flex", flexDirection:'row'}}>
              <div style={{paddingLeft:"20px", paddingRight:"20px"}}>Term of Service</div>|
              <div style={{paddingLeft:"20px", paddingRight:"20px"}}>Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
      <div className='RES'>
        <div className='menu'>
          <MenuIcon />
        </div>
        <div className='res-body'>
          <div className='lgtxt w90'>A trusted and secure cryptocurrency exchange.</div>
          <div className='smtxt w70'>Your guide to the world of an open financial system. Get started with the easiest and most secure platform to buy and trade cryptocurrency.</div>
          <div className='res-but w80'>Get Started Now</div>
          <br/><br/>
          <img src="../bitcoin.png" className='smpad w80 cen'></img>
          <img src="../ethereum.png" className='smpad w80 cen'></img>
          <img src="../binance.png" className='smpad w80 cen'></img>
          <img src="../view.png" className='smpad w80 cen'></img>
          <div className='lgtxt w90'>The most trusted cryptocurrency platform.</div>
          <div className='smtxt w80'>MonkeyFi has a variety of features that make it the best place to start trading</div>
          <img src="../Card 1.png" className='smpad w80 cen'></img>
          <img src="../Card 3.png" className='smpad w80 cen'></img>
          <img src="../Card 2.png" className='w80 cen' style={{marginTop:"-10px"}}></img>
          <div className='lgtxt w90'>One click, instant payout with credit or debit card.</div>
          <div className='smtxt w80'>Become a crypto owner in minutes using your debit or credit card and quickly purchase top cryptocurrencies.</div>
          <br/><br/>
          <div className='resbuynow'>
            <div style={{display:"flex"}}>
              <button className='mybut' style={{color:"#4646cf"}}>Buy</button>|
              <button className='mybut'>Sell</button>
            </div>
            <br/>
            <br/>
            <div>1 BTC is roughly</div>
            <br/>
            <div>20,073.27 USD</div>
            <br/>
            <br/>
            <img src="../Form.png"></img><br/>
            <img src="../Form1.png"></img>
            <br/>
            <button className='res-but w100'>Buy Now</button>
          </div>
          <img src="../resvisa.png" className="resvisa"></img>
          <br/><br/><br/>
          <div className='smtxt w80'>We accept payment with many methods:</div>
          <img src="../Payment.png" className='w80 cen'></img>
          <div className='lgtxt w90'>We are the most trusted cryptocurrency platform.</div>
          <div className='smtxt w80'>We believe MonkeyFi is here to stay — and that a future worth building is one which opens its doors and invites everyone in.</div>
          <div style={{display:"flex", flexDirection:"row", width:"400px"}}>
            <img src="../resClarify.png" style={{width:"30%", alignSelf:"center", paddingLeft:"20px"}}></img>
            <div className='resplat'>
              <div className='head'>Clarify</div>
              <div className='body'>We help you make sense of the coins, the terms, the dense charts and market changes.</div>
            </div>
          </div>
          <div style={{display:"flex", flexDirection:"row", width:"400px"}}>
            <img src="../resConfidence.png" style={{width:"30%", alignSelf:"center", paddingLeft:"20px"}}></img>
            <div className='resplat'>
              <div className='head'>Confidence</div>
              <div className='body'>Our markets are always up to date, sparking curiosity with real-world relevance.</div>
            </div>
          </div>
          <div style={{display:"flex", flexDirection:"row", width:"400px"}}>
            <img src="../resCommunity.png" style={{width:"30%", alignSelf:"center", paddingLeft:"20px"}}></img>
            <div className='resplat'>
              <div className='head'>Community</div>
              <div className='body'>We supports the crypto community, putting data in the hands which need it most.</div>
            </div>
          </div>
          <div className='lgtxt w90'>What media says about MonkeyFi?</div>
          <div className="resslideshow-container">
            <a className="prev" onClick={prevSlide.bind()}>&#10094;</a>
            <div className="mySlides">
              <img src={"../img"+ind+".png"} style={{width:"300px"}} />
            </div>
            <a className="next" onClick={nextSlide.bind()}>&#10095;</a>
          </div>
          <div className='lgtxt w90'>Build your crypto portfolio anywhere.</div>
          <div className='smtxt w80'>A powerful cryptocurrency exchange in your pocket. Buy, sell and trade crypto on the go.</div>
          <img src="../Illustration.png" style={{width:"80%", alignSelf:"center"}}></img>
          <div className='smtxt w80'>Get the Cryptolly Wallet Mobile App Now!</div>
          <img src="../Google Play.png" className='google cen w80'></img>
          <br/>
          <img src="../App Store.png" className='google cen w80'></img>
          <br/><br/><br/><br/><br/>
          <div className='resgetstarted'>
            <div className='smtxt'>Ready to start trading cryptocurrency?</div>
            <div className='lgtxt'>New users can earn up to $80 in crypto rewards.</div>
            <br/>
            <div className='resemail' style={{display:"flex", flexDirection:"row"}}>
              <div style={{paddingLeft:"30px", paddingTop:"15px", paddingBottom:"15px"}}>Enter your email address</div>
              <button>Get Started</button>
            </div>
          </div>
          <br/>
        </div>
        <div className='resfooter'>
          <div style={{display:"flex", flexDirection:"column"}}><img src="../resMonkey.png" className='cen w50'></img></div>
          <div className='smtxt' style={{textAlign:"left"}}>Your best crypto parter.</div>
          <img src="../Socmed.png" ></img>
          <div className='smtxt' style={{textAlign:"left", alignSelf:"left"}}>Quick Links</div>
          <div style={{display:"flex", flexDirection:"row"}}>
            <div style={{display:"flex", flexDirection:"column"}} className='resquick'>
              <div>Buy/Sell</div>
              <div>Trade Now</div>
              <div>Pricing</div>
            </div>
            <div style={{display:"flex", flexDirection:"column"}} className='resquick'>
              <div>Wallets</div>
              <div>Company</div>
            </div>
          </div>
          <div className='smtxt' style={{textAlign:"left", alignSelf:"left"}}>Submit for updates.</div>
          <div>Subscribe to get update and notify our exchange and products</div>
          <br/><br/>
          <div className='ressubmit w80' style={{display:"flex", flexDirection:"row"}}>
            <div style={{paddingLeft:"30px", paddingTop:"15px", paddingBottom:"15px"}}>Enter your email address</div>
            <button>Send</button>
          </div>
          <br/><br/><br/>
          <div className='smtxt' style={{borderTop:"solid 1px", marginRight:"20px"}}>Term of Service&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy Policy</div>
          <div className='smtxt'>MonkeyFi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}

export default App;
