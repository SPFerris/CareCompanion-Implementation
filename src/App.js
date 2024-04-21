import React from "react";
import "./App.css";
import StickyMenu from "./scripts/StickymMenu";
import VideoCarousel from "./scripts/VideoCarousel";

function App() {
  return (
    <div className="app">
      <header className="appHeader">
        <section className="navBar">
          <ul>
            <li><a href="#videoCarousel">Anxiety Tools</a></li>
            <li><a href="#chatBotSection">ChatBot</a></li>
          </ul>
        </section>
      </header>

      <main>
        <section className="hero">
          <div>
          <a href="#chatBotSection" className="callToAction">Chat with CareCompanion now!</a>
          </div>
        </section>

        <section className="graphics">
          <div className="item">
            <img src="./media/anxiety.png"/>
            <h3>Anxiety</h3>
            <p>Manage your anxiety</p>
          </div>
          <div className="item">
            <img src="./media/support.png"/>
            <h3>Support</h3>
            <p>24/7 CareCompanion access</p>
          </div>
          <div className="item">
            <img src="./media/breath.png"/>
            <h3>Breath</h3>
            <p>Guided breathing videos</p>
          </div>
        </section>

        <section className="information"> 
          <div>
            <h4>
            CareCompanion is a web-based application designed to provide support and advice for people who 
            may have just gotten the results of a cancer diagnosis, are living with or recovering from a form 
            of cancer or families who have a loved one suffering from cancer. 
            </h4>

            <br></br>

            <h4>
            CareCompanion utilises an 
            AI-powered ChatBot that is extensively trained on cancer-related topics. 
            It is designed to provide empathetic and accurate responses based on user prompts. 
            Alongside this core feature, CareCompanion offers the user quick guides on anxiety management 
            as well as videos demonstrating breathing techniques and exercises. 
            </h4>
          </div>
        </section>

        <section id="chatBotSection" className="chatBotSection">
          <div className="chatBotContainer">
            <h2>Need support or have questions? chat with our AI Assistant</h2>
            <div className="chatBotWindow">
    <iframe
      src="https://www.chatbase.co/chatbot-iframe/amGxXNjSemMa_wvnb1pIJ"
      title="Chatbot"
      width="95%"
      style={{ height: "100%", minHeight: "100px" }}
    />
            </div>
          </div>
  
        </section>
        <section id="videoCarousel" className="videoCarousel">
      <div>
        <VideoCarousel/>
      </div>
    </section>
      
        <section><StickyMenu/></section>

      </main>

      <footer>
        <p>&copy; 2024 CareCompanion. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;