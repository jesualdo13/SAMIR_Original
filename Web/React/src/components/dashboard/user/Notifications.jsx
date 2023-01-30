import React from "react";

import { IconAlert } from "../../../base/Icons";

const Notifications = () => {
  return (
    <div id="notifications" className="screen">
      <h1>Notificaciones</h1>

      <div className="container">
        <div className="notification">
          <div className="icon">
            <IconAlert />
          </div>
          <div className="inner">
            <div className="title">Alerta</div>
            <div className="text">Este es el texto de la notificación</div>
          </div>
        </div>
        <div className="notification">
          <div className="icon">
            <IconAlert />
          </div>
          <div className="inner">
            <div className="title">Lorem</div>
            <div className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              minima saepe dolor numquam vero. Vitae quis tempore nihil soluta
              ab dolores sapiente ipsum et voluptatum incidunt, placeat mollitia
              cupiditate delectus!
            </div>
          </div>
        </div>
        <div className="notification">
          <div className="icon">
            <IconAlert />
          </div>
          <div className="inner">
            <div className="title">Notificación</div>
            <div className="text">Este es el texto de la notificación</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
