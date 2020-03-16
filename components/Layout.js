// components/Layout.js
import React, { useState, useEffect } from "react";
import TwoColumn from './TwoColumn';
import Footer from "./Footer";
import SSIDProvider from '../store/SSIDProvider';
import "../theme/theme.scss";


const Layout = props => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {

    setTimeout(() => setIsLoaded(true), 500);
    document.title = 'Visitor Management System | ' + props.title.trim();
    //window.addEventListener('load', this.handleLoad);

  }, [props.title, isLoaded]);


  return (
    <SSIDProvider>
      <div id="startBody" className={isLoaded ? "loaded" : "preload"} >

        <div className="preload__wrap"></div>

        <div className="site_wrapper">

          <div id="app" className="page__wrap">

            <section className="welcome__screen">

              {props.Column == 1 &&

                <div className="welcome__screen--inner">
                  {props.children}
                </div>
              }

              {props.Column == 2 &&

                <TwoColumn top={props.top} left={props.left} right={props.right} />

              }

            </section>

            <div className="footer_wrapper">
              <Footer navButtons={props.navButtons} />
            </div>

          </div>

        </div>

      </div>

      {props.after}

      <style jsx global>
        {`
          .site_wrapper {
            opacity: 0;
            -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
            filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
          }

        `}
    </style>

    </SSIDProvider>
  );
};


export default Layout;
