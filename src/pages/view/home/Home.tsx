//navigate
import { useNavigate } from "react-router-dom";

//style
import { Header } from "./HomeStyle";
import { Next } from "./HomeStyle";
import { FiChevronsDown } from "react-icons/fi";
import { Intro } from "./HomeStyle";
import { MainERP } from "./HomeStyle";
import { Details } from "./HomeStyle";
import { FiTool, FiMessageCircle,FiLock, FiBell, FiMousePointer } from "react-icons/fi";

//components
import { Navbar } from "./Navbar/Navbar";

//img
import dash_vector from '../../../assets/img/dashboard-vector.png';
import exemplo from '../../../assets/img/exemplo.png';
import { AuthContext } from "context/AuthProvider/AuthProvider";
import { useContext } from "react";


export const Home = () =>{

  const navigate = useNavigate();
  const context = useContext(AuthContext);
  

  return (
    <>
      <Header id="home">
        <Navbar />
          <Intro>
            <div className="intro_text">
              <h2>
                O controle <span>total</span> dos seus 
                <span> orçamentos </span> com apenas alguns clicks!
              </h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Ea suscipit ipsam nostrum recusandae deserunt quis iure ipsum.
                </p>
                <button onClick={() => navigate('/register')}>Acesse nosso App</button>
            </div>

            <div className="dashvector">
              <img src={dash_vector} alt="Vetor dashboard" />
            </div>
          </Intro>
      </Header>

      <Next>
        <FiChevronsDown className="icon_next" />
      </Next>

      <MainERP id="erp">
        <h3 className="erp_title">Bud <span>App</span></h3>
        <div className="cont_img">
          <img src={exemplo} alt="Ilustração cadastro de produto"/>
          <p>Cadastre seus orçamentos de acordo com suas necessidades</p>
        </div>

        <div className="cont_img dashimg">
          <p>Controle personalizado para sua empresa</p>
          <img src={exemplo} alt="Ilustração Dashboard" />
        </div>
      </MainERP>

      <Details id="advantage">
        <h2>Vantagens de utilizar nosso <span>App</span></h2>

        <div className="advantage">
            <div className="advantage_title">
                <FiTool className="advantage_icon lilas" /> 
                <p className="lilas">Controle</p>
            </div>

            <p>
              Tenha o total controle de sua empresa com apenas um clique.
              Tenha o total controle de sua empresa com apenas um clique.
            </p>
        </div>

        <div className="advantage">
            <div className="advantage_title">
                <FiMessageCircle className="advantage_icon blue" /> 
                <p className="blue">Suporte</p>
            </div>

            <p>
              Tenha o total controle de sua empresa com apenas um clique.
              Tenha o total controle de sua empresa com apenas um clique.
            </p>
        </div>

        <div className="advantage">
            <div className="advantage_title">
                <FiLock className="advantage_icon lilas" /> 
                <p className="lilas">Segurança</p>
            </div>

            <p>
              Tenha o total controle de sua empresa com apenas um clique.
              Tenha o total controle de sua empresa com apenas um clique.
            </p>
        </div>

        <div className="advantage">
        <div className="advantage_title">
                <FiBell className="advantage_icon blue" /> 
                <p className="blue">Alertas</p>
            </div>

            <p>
              Tenha o total controle de sua empresa com apenas um clique.
              Tenha o total controle de sua empresa com apenas um clique.
            </p>
        </div>

        <div className="advantage">
        <div className="advantage_title">
                <FiMousePointer className="advantage_icon green" /> 
                <p className="green">Usabilidade</p>
            </div>

            <p>
              Tenha o total controle de sua empresa com apenas um clique.
              Tenha o total controle de sua empresa com apenas um clique.
            </p>
        </div>
      </Details>
      
    </>
  )
};

