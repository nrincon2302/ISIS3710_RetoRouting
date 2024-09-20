import { useParams } from "react-router-dom";
import Mascota from "./mascota";

function Detail() {
    const params = useParams();
    return (
      <div>
        <Mascota mascota={params.mascotaId}></Mascota>
      </div>
 );
}

export default Detail;