import "../App.css";
import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";

function Home() {
  const [state, setState] = useState([]);
  const fetchTrending = async () => {
    const data = await fetch(`
    https://phimapi.com/danh-sach/phim-moi-cap-nhat?`);
    const dataJ = await data.json(); // fetching data from API in JSON Format
    setState(dataJ.items); //storing that data in the state
  };

  useEffect(() => {
    fetchTrending(); //calling the fetchTrending function only during the initial rendering of the app.
  }, []);


  return (
    <div className="container">
      <div className="content-container">
        <div className="label">
          {/* <div className="label-container">
            <label className="label-content">
              Chọn thể loại:
              <select name="selectedMovie" className="label-options">
                <option value="" className="content-select">
                  Action
                </option>
                <option value="" className="content-select">
                  Horror
                </option>
                <option value="" className="content-select">
                  Drama
                </option>
              </select>
            </label>
            <label className="label-content">
              Chọn quốc gia:
              <select name="selectedCountry" className="label-options">
                <option value="" className="content-select">
                  USA
                </option>
                <option value="" className="content-select">
                  UK
                </option>
                <option value="" className="content-select">
                  France
                </option>
              </select>
            </label>

            <label className="label-content">
              Năm:
              <select name="selectedCountry" className="label-options">
                <option value="" className="content-select">
                  2024
                </option>
                <option value="" className="content-select">
                  2023
                </option>
                <option value="" className="content-select">
                  2022
                </option>
              </select>
            </label>
            <div className="apply-chosen">
              <i>LỌC</i>
            </div>
          </div> */}
        </div>
        <div className="movie-list-container">
          <h1 className="movie-list-title" style={{ fontSize: '2.5em' }}>MỚI CẬP NHẬT</h1>
          <div className="movie-list-wrapper-home">
            <div className="movie-list-home">
              {state.map((Val) => {
                const {
                  _id,
                  name,
                  slug,
                  poster_url,
                  origin_name,
                  thumb_url,
                  year,
                } = Val;
                return (
                  <>
                    <MovieItem
                      _id={Val._id}
                      name={Val.name}
                      slug={Val.slug}
                      poster_url={Val.poster_url}
                      origin_name={Val.origin_name}
                      thumb_url={Val.thumb_url}
                      year={Val.year}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="movie-list-container">
          <h1 className="movie-list-title" style={{ fontSize: '2.5em' }}>SẮP CHIẾU</h1>
          <div className="movie-list-wrapper-home">
            <div className="movie-list-home">
              {state.map((Val) => {
                const {
                  _id,
                  name,
                  slug,
                  poster_url,
                  origin_name,
                  thumb_url,
                  year,
                } = Val;
                return (
                  <>
                    <MovieItem
                      _id={Val._id}
                      name={Val.name}
                      poster_url={Val.poster_url}
                      origin_name={Val.origin_name}
                      thumb_url={Val.thumb_url}
                      year={Val.year}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="movie-list-container">
          <h1 className="movie-list-title" style={{ fontSize: '2.5em' }}>ĐỀ CỬ</h1>
            <div className="movie-list-wrapper-home">
              <div className="movie-list-home">
                {state.map((Val) => {
                  const {
                    _id,
                    name,
                    slug,
                    poster_url,
                    origin_name,
                    thumb_url,
                    year,
                  } = Val;
                  return (
                    <>
                      <MovieItem
                        _id={Val._id}
                        name={Val.name}
                        poster_url={Val.poster_url}
                        origin_name={Val.origin_name}
                        thumb_url={Val.thumb_url}
                        year={Val.year}
                      />
                    </>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;
