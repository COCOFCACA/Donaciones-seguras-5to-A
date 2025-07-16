import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Home.css'
import NavBar from './Components/NavBar';

function Home() {
  // TODO: Obtener estos datos de la base de datos/contexto de autenticación
  const [userName, setUserName] = useState("Julian"); // Variable según usuario logueado
  const [userCampaigns, setUserCampaigns] = useState([
    {
      id: 1,
      name: "#TodosXBahía",
      description: "Campaña de ayuda para Bahía"
    },
    {
      id: 2, 
      name: "Abrigo para el alma",
      description: "Campaña de abrigos"
    }
  ]); // TODO: Obtener campañas del usuario desde BD

  const handleChooseCampaign = (campaignId) => {
    // TODO: Implementar lógica para manejar la selección de campaña
    console.log(`Campaña seleccionada: ${campaignId}`);
  };

  return (
    <>
      <NavBar />
      <div className="body-content">
        <div className="welcome-section">
          <h1 className="welcome-greeting">Hola, {userName}!</h1>
          <p className="welcome-subtitle">Necesitas ayuda? Estas campañas te podrían servir!</p>
          
          <div className="campaigns-container">
            {userCampaigns.map((campaign, index) => (
              <div 
                key={campaign.id} 
                className="campaign-row"
                onClick={() => handleChooseCampaign(campaign.id)}
              >
                <div className="campaign-info">
                  <span className="campaign-name">{campaign.name}</span>
                </div>
                <div className="choose-indicator">
                  Elegir
                </div>
                {index < userCampaigns.length - 1 && <div className="campaign-separator"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
