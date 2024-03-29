import React, {useContext, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";



export const DetailsPLanets = () => {
    const { store, actions } = useContext(Context);
    const { detailsPlanet } = store
    const params = useParams();
    const id = params.id;

    const handleOnError = (event)=> {
        event.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"
      }

    return (
        <div className="card text-light bg-dark m-3" style={{width : "540px;"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img onError={handleOnError} src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{detailsPlanet.name}</h4>
                        <p className="card-text"><b>Diameter: </b>{detailsPlanet.diameter}</p>
                        <p className="card-text"><b>Rotation: </b>{detailsPlanet.rotation_period}</p>
                        <p className="card-text"><b>Orbita: </b>{detailsPlanet.orbital_period}</p>
                        <p className="card-text"><b>Gravity: </b>{detailsPlanet.gravity}</p>
                        <p className="card-text"><b>Population: </b>{detailsPlanet.population}</p>
                        <p className="card-text"><b>Climate: </b>{detailsPlanet.climate}</p>
                        <p className="card-text"><b>Water Surface: </b>{detailsPlanet.surface_water}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}