import { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import Layout from '../../components/MyLayout';
import Nav from "../../components/Nav";
import data from "../../static/pups";

export default function Post() {
  const [pup, setPup] = useState();
  const [mother, setMother] = useState();
  const [father, setFather] = useState();
  const router = useRouter();

  const getMother = name => {
    data.pups.map(i => {
      if (i.name === name) {
        console.log(i);
        setMother(i);
      }
    });
  };

  const getFather = name => {
    data.pups.map(i => {
      if (i.name === name) {
        console.log(i);
        setFather(i);
      }
    });
  };

  useEffect(() => {
    console.log(data.pups);
    data.pups.map(i => {
      if (
        router.query.id &&
        router.query.id.toLowerCase() === i.name.toLowerCase()
      ) {
        console.log(i);
        setPup(i);
        getMother(i.mom);
        getFather(i.dad);
      }
    });
  }, []);

  return (
    <div>
      <Nav />
      <h1 style={{ textAlign: "center" }}>
        {router.query.id
          ? router.query.id.charAt(0).toUpperCase() + router.query.id.slice(1)
          : ""}
      </h1>
      {pup
        ? <div key={pup.src} className="ml-pnl ">
            <div className="card">
              <picture>
                <source srcSet={pup.src + "?webp"} type="image/webp" />
                <source srcSet={pup.src} type="image/jpeg" />
                <img
                  className="ml-pnl__cntnt"
                  key={pup.src}
                  src={pup.src}
                  alt={pup.name}
                />
              </picture>
              <div className="cont">
                <p>
                  Born: {pup.born}
                </p>
                <p>
                  Dam/Sire: {pup.mom} & {pup.dad}
                </p>
              </div>
            </div>
          </div>
        : null}

      {mother
        ? <div key={mother.src} className="ml-pnl" style={{float: 'left', width: '49%'}}>
            <div className="card">
              <picture>
                <source srcSet={mother.src + "?webp"} type="image/webp" />
                <source srcSet={mother.src} type="image/jpeg" />
                <img
                  className="ml-pnl__cntnt"
                  key={mother.src}
                  src={mother.src}
                  alt={mother.name}
                />
              </picture>
              <div className="cont">
                <p>
                  Born: {mother.born}
                </p>
                <p>
                  Dam/Sire: {mother.mom} & {mother.dad}
                </p>
              </div>
            </div>
          </div>
        : null}

      {father
        ? <div key={father.src} className="ml-pnl" style={{float: 'right', width: '49%'}}>
            <div className="card">
              <picture>
                <source srcSet={father.src + "?webp"} type="image/webp" />
                <source srcSet={father.src} type="image/jpeg" />
                <img
                  className="ml-pnl__cntnt"
                  key={father.src}
                  src={father.src}
                  alt={father.name}
                />
              </picture>
              <div className="cont">
                <p>
                  Born: {father.born}
                </p>
                <p>
                  Dam/Sire: {father.mom} & {father.dad}
                </p>
              </div>
            </div>
          </div>
        : null}
      {/* <h1 style={{ textAlign: "center" }}>
        {router.query.id}'s Parents
      </h1> */}
      <style jsx>{`
        .container {
          width: 100%;
          color: #333;
        }
        .subMenu {
          text-align: center;
        }
        .subMenu ul {
          display: inline-table;
          padding-left: 0px;
        }
        .subMenu li {
          display: inline;
          padding: 6px 8px;
        }
        .subMenu a {
          color: black;
          text-decoration: none;
          font-size: 13px;
        }
        /* MASONRY CSS */
        .ml {
          box-sizing: border-box;
          column-count: 1;
          column-gap: 0;
          position: relative;
        }
        .ml * {
          box-sizing: border-box;
        }
        @media (min-width: 768px) {
          .ml {
            column-count: 2;
          }
        }
        @media (min-width: 1200px) {
          .ml {
            column-count: 3;
          }
        }
        .ml-pnl {
          margin: 0;
          padding: 5px;
          width: 25%;
          margin: auto;
        }
        @media (max-width: 800px) {
          .ml-pnl {
            padding: 0px;
            width: 100%;
          }
        }
        @media (max-width: 1200px) {
          .ml-pnl {
            padding: 0px;
            width: 70%;
          }
        }
        @media (min-width: 768px) {
          .ml-pnl {
            break-inside: avoid;
          }
        }
        .ml-pnl__cntnt {
          overflow: hidden;
          width: 100%;
        }
        .ml-pnl__cntnt--img {
          max-width: 100%;
          padding: 0;
        }
        .card {
          /* Add shadows to create the "card" effect */
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          border-radius: 5px; /* 5px rounded corners */
          //width: 25%;
          //margin: 10px;
        }

        /* On mouse-over, add a deeper shadow */
        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }

        /* Add some padding inside the card container */
        .cont {
          padding: 2px 16px;
        }
        img {
          border-radius: 5px 5px 0 0;
        }
        a {
          text-decoration: none;
        }
        li {
          list-style-type: none;
        }
      `}</style>
    </div>
  );
}
