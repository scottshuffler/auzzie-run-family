import { useState } from "react";
import Link from 'next/link';
import data from '../static/pups';

const PostLink = props =>
    <Link href="/dogs/[id]" as={`/dogs/${props.id}`}>
      <a style={{textDecoration: 'none'}}>
        {props.id}
      </a>
    </Link>
  ;

function Gallery() {
  // const [category, setCategory] = useState("all");

  return (
    <div className="container">
      <div className="ml">
        {data.pups.map(i => {
          return (
            <div key={i.src} className="ml-pnl ">
              <div className="card">
                <picture>
                  <source srcSet={i.src + "?webp"} type="image/webp" />
                  <source srcSet={i.src} type="image/jpeg" />
                  <img
                    className="ml-pnl__cntnt"
                    key={i.src}
                    src={i.src}
                    alt={i.name}
                  />
                </picture>
                <div className="cont">
                  <h4>
                    <b>
                      <PostLink id={i.name} />
                    </b>
                  </h4>
                  <p>
                    Born: {i.born}
                  </p>
                  <p>
                    Dam/Sire: <PostLink id={i.mom} /> & <PostLink id={i.dad} />
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

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

export default Gallery;
