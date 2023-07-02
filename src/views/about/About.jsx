import NavBar from "../../common/NavBar/NavBar"
import Title from "../../common/Title/Title"
import "./About.css"
import avatar from "../../../public/assets/images/avatars/Sly.png"
import avatar1 from "../../../public/assets/images/avatars/Oswin_Nickt.png"



function About() {
    return(
    <>
        <Title />
        <NavBar />
        <div class="right-text">
            <img className='avatar' src={avatar}></img>
            <p>Javier Ramos Di Consoli</p>
            <p>Edad: 22 Años</p>
            <p>Cuarto año de Carrera</p>
            <p>Apodo: Rumuz</p>
        </div>
        <div class="right-text">
            <img className='avatar' src={avatar1}></img>
            <p>Rolf Sommer</p>
            <p>Edad: 28 Años</p>
            <p>Cuarto año de Carrera</p>
            <p>Apodo: Rolf</p>

        </div>


    </>
    )
}

export default About