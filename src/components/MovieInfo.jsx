import "../style.css";
import "../App.css";
import { img_300, unavailable } from "./config";
import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

function MovieInfo() {
  var i = 0;
  const { slug } = useParams();
  const slug1 = slug;
  const [data, setData] = useState();
  const [tap, setTap] = useState();

  // useEffect(() => {
  //   axios
  //     .get(`https://phimapi.com/phim/${slug}`)
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [slug]);

  const fetchTrending = async () => {
    const data1 = await fetch(`https://phimapi.com/phim/${slug}`);
    const dataJ = await data1.json();
    setData(dataJ.movie);
    setTap(dataJ.episodes);
  };

  useEffect(() => {
    fetchTrending();
  }, [slug]);

  return (
    <div className="container">
      <div className="content-container">
        <div className="label">
          <h1 style={{fontSize:'2.5em'}}>Thông tin phim </h1>
        </div>
        <div className="movie-detail">
          <div
            className="backdrop-image"
            style={{
              backgroundImage: `url(${data?.thumb_url})`,
            }}
          ></div>
          <div>
            <figure className="poster-box movie-poster">
              <img
                src={
                  data && data.poster_url
                    ? `${data && data.poster_url}`
                    : unavailable
                }
                alt={data && data.name}
                className="img-cover"
              />
            </figure>
            <div className="watch-movie">
              {tap && tap.map((Val) => {
                const { server_name, server_data } = Val;
                console.log(Val);

                // Extracting the first element of server_data array
                const firstChapter = server_data[0];

                if (firstChapter) {
                  const { name, slug, link_embed } = firstChapter;
                  return (
                    <div className="server-ep">
                      <NavLink
                        to={{
                          pathname: "/movieinfo/" + `${slug1}` + `/${firstChapter.slug}`,
                          aboutProps: { slug },
                        }}
                        exact
                      >
                        <button className="button-watch">
                          XEM PHIM
                        </button>
                      </NavLink>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="detail-box">
            <div className="detail-content">
              <h1 className="heading" style={{ fontSize: '3.2em' }}>{data && data.name}</h1>
              <div className="meta-list">
                {/* <div className="meta-item">
                  <span className="span">⭐ {data && data.vote_average}</span>
                </div> */}
                <div className="separator"></div>
                <div className="meta-item">{data && data.time}</div>
                <div className="separator"></div>
                <div className="meta-item">{data && data.year}</div>
                <div className="meta-item card-badge">PG-13</div>
                <p className="genre">Hành động, Khoa học - Viễn tưởng</p>
                <p className="overview">{data && data.content}</p>
                <ul className="detail-list">
                  <div className="list-item">
                    <p className="list-name">Có sự tham gia: </p>
                    <p>
                      {data &&
                        data.actor.map((Val) => {
                          if (i == 0) {
                            i = i + 1;
                            console.log(i);
                            return <>{Val}</>;
                          } else {
                            return <>, {Val}</>;
                          }
                        })}
                    </p>
                  </div>
                  <div className="list-item">
                    <p className="list-name">Đạo diễn bởi: </p>
                    <p>{data && data.director}</p>
                  </div>
                </ul>
              </div>
            </div>

            <div className="title-wrapper">
              <h3 className="title-large">Tập phim</h3>
            </div>
            <div className="slider-list">
              <div className="slider-inner">
                {/* {video1.map((Val) => {
                  const { type, key, site } = Val;
                  if (
                    (Val.type == "Teaser" || Val.type == "Trailer") &&
                    Val.site == "YouTube"
                  ) {
                    const u =
                      "https://www.youtube.com/embed/" +
                      Val.key +
                      "?theme=dark&color=white&rel=0";
                    return (
                      <>
                        <div className="video-card">
                          <iframe
                            width="500"
                            height="294"
                            src={u}
                            frameBorder="0"
                            allowFullScreen="1"
                          ></iframe>
                        </div>
                      </>
                    );
                  }
                })} */}
                {tap &&
                  tap.map((Val) => {
                    const { server_name, server_data } = Val;
                    console.log(Val);
                    return (
                      <>
                        <div className="server-ep">
                          {Val.server_data.map((Ep) => {
                            const { name, slug, link_embed } = Ep;
                            // console.log(Ep);
                            return (
                              <>
                                <NavLink
                                  to={{
                                    pathname: "/movieinfo/" + `${slug1}` + `/${Ep.slug}`,
                                    aboutProps: { slug },
                                  }}
                                  exact
                                >
                                  <button className="ep-btn">
                                    {Ep.name}
                                  </button>
                                </NavLink>
                              </>
                            );
                          })}
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
