import React from "react";
import home from "../Assets/accueil_image.png"

class HeaderNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { appName:"Sportsee"}
    }
    static getOtherColor(props) {
        return {appName: props}
    }
    render() {
        return <div>
            <h1> Bienvenue sur l'application {this.state.appName}</h1>
            <img src={home} alt={"img_app_presentation"} style={{width:"800px", height:"600px", marginTop:"100px", marginLeft:"150px"}}/>
        </div>
    }
}
export default HeaderNav

/*export default function Home (){

    /!*const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('/Datas/DataMain.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setLocations(data)
            })
    }, [])*!/

  return (
    <div>
        <img src={home} alt={"img_app_presentation"} style={{width:"800px", height:"600px", marginTop:"100px", marginLeft:"150px"}}/>
    </div>


  )
}*/

