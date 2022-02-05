import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import Spinner from '../ui/Spinner';
import ErrorMessage from '../ui/ErrorMessage';
import { API_URL, API_KEY, WEB_URL } from '../../utils/properties';

const IMAGE_URL = `${WEB_URL}/t/p/w300_and_h450_bestv2`;
const isDesktopView = window.innerWidth > 810;

const Card = styled.div`
  height: 200px;
  width: 288px;
  margin: 20px auto;
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  div.card__poster {
    margin: 16px 0 16px 16px;
    height: 168px;
    min-width: 123px;
    border-radius: 12px;
    background-size: cover;
  }
  div.card__details {
    margin: 16px 0 12px 8px;
    h2 {
      font-size: 240%;
    }
    h3 {
      margin: 4px 0;
      font-size: 120%;
    }
    a {
      text-decoration: none;
      color: unset;
    }
    div.card__genres {
      display: flex;
      margin-top: 5px;
      div.card__genre {
        height: 24px;
        padding: 4px 8px;
        margin-right: 3px;
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.secondaryBackground};
        span {
          margin: 0 8px;
          font-size: 12px;
          line-height: 24px;
        }
      }
    }
    div.card__description {
      margin: 5px 0;
    }
    div.card__rating {
      span.card__average {
        margin-right: 9px;
        font-size: 120%;
      }
      span.card__total-votes {
        font-size: 120%;
        color: ${({ theme }) => theme.colors.secondaryFont};
      }
    }
  }
  @media (min-width: 810px) {
    height: 684px;
    width: 1668px;
    margin: 80px auto;
    div.card__poster {
      margin: 30px;
      height: 604px;
      min-width: 462px;
      border-radius: 24px;
    }
    div.card__details {
      margin: 30px 31px 30px 0;
      h2 {
        font-size: 480%;
        font-weight: 700;
      }
      h3 {
        margin: 32px 0;
        font-size: 240%;
      }
      p {
        label,
        span {
          font-size: 240%;
        }
        label {
          color: ${({ theme }) => theme.colors.detailsFont};
        }
      }
      div.card__genres {
        margin: 26px 0;
        display: flex;
        div.card__genre {
          height: 28px;
          margin-right: 8px;
          span {
            font-size: 200%;
            line-height: 28px;
          }
        }
      }
      div.card__description {
        label {
          font-size: 240%;
        }
        p {
          margin: 32px 0;
          padding: 0 20px;
          font-size: 180%;
          line-height: 24px;
          text-align: justify;
        }
      }
      div.card__rating {
        span.card__average {
          font-size: 240%;
        }
        span.card__total-votes {
          font-size: 240%;
        }
      }
    }
  }
`;

const Credits = styled.div`
  margin: -20px auto 40px auto;
  width: 288px;
  h2 {
    font-size: 240%;
    font-weight: 700;
  }
  div.credits__cast {
    display: flex;
  }
  @media (min-width: 810px) {
    margin: -40px auto 80px auto;
    width: 1668px;
    h2 {
      font-size: 480%;
    }
  }
`;
const Person = styled.div`
  box-shadow: ${({ theme }) => theme.shadow};
  margin-top: 40px;
  margin-right: 16px;
  width: 109px;
  height: 183px;
  div.credits__image {
    margin: 8px;
    height: 103px;
    min-width: 93px;
    border-radius: 8px;
    background-size: cover;
  }
  div.credits__name {
    text-align: center;
    strong {
      font-size: 240%;
      display: block;
    }
    span {
      font-size: 180%;
      color: ${({ theme }) => theme.colors.detailsFont};
    }
  }
  @media (min-width: 810px) {
    width: 248px;
    height: 339px;
    div.credits__image {
      margin: 10px 36px;
      height: 264px;
      width: 177px;
      border-radius: 5px;
    }
  }
`;

const MovieItem = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState(null);
  const [crew, setCrew] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/movie/${data.id}/credits?api_key=${API_KEY}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw new Error(response.statusText);
      })
      .then((data) => {
        setCast(data.cast.slice(0, 5));
        setCrew(data.crew.slice(0, 5));
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line
  }, []);

  const backgroundURL = `url(${IMAGE_URL}${data.poster_path})`;
  let genresList = data.genres;
  let title = data.title;
  let description = data.overview;
  if (isDesktopView) {
    genresList = genresList.slice(0, 3);
  } else {
    genresList = genresList.slice(0, 1);
    title = title.substring(0, 8) + '...';
    description = description.substring(0, 100) + '...';
  }

  return (
    <Fragment>
      {isLoading && <Spinner />}
      {!isLoading && !!error && <ErrorMessage errorMessage={error} />}
      {!isLoading && !error && !!cast && !!crew && (
        <Fragment>
          <Card>
            <div
              className='card__poster'
              style={{ backgroundImage: backgroundURL }}></div>
            <div className='card__details'>
              <h2>{title}</h2>
              <h3>{new Date(data.release_date).getFullYear()}</h3>
              <p>
                {isDesktopView && <label>Produkcja: </label>}
                <span>{data.production_countries[0].name}</span>
              </p>
              {isDesktopView && (
                <p>
                  <label>Data premiery: </label>
                  <span>
                    {new Date(data.release_date).toLocaleDateString('pl')}
                  </span>
                </p>
              )}
              <div className='card__genres'>
                {genresList.map((genre) => (
                  <div key={genre.id} className='card__genre'>
                    <span>{genre.name}</span>
                  </div>
                ))}
              </div>
              <div className='card__description'>
                {isDesktopView && <label>Opis</label>}
                <p>{description}</p>
              </div>
              <div className='card__rating'>
                <span className='card__average'>{data.vote_average}</span>
                <span className='card__total-votes'>
                  ({data.vote_count} głosów)
                </span>
              </div>
            </div>
          </Card>
          <Credits>
            <h2> Wystąpili:</h2>
            <div className='credits__cast'>
              {cast.map((person) => {
                return (
                  <Person key={person.id}>
                    <div
                      className='credits__image'
                      style={{
                        backgroundImage: `url(${IMAGE_URL}${person.profile_path})`,
                      }}></div>
                    <div className='credits__name'>
                      <strong>{person.name}</strong>
                      <span>{person.character}</span>
                    </div>
                  </Person>
                );
              })}
            </div>
          </Credits>
          <Credits>
            <h2>Ekipa:</h2>
            <div className='credits__cast'>
              {crew.map((person) => {
                return (
                  <Person key={person.id}>
                    <div
                      className='credits__image'
                      style={{
                        backgroundImage: `url(${IMAGE_URL}${person.profile_path})`,
                      }}></div>
                    <div className='credits__name'>
                      <strong>{person.name}</strong>
                      <span>{person.job}</span>
                    </div>
                  </Person>
                );
              })}
            </div>
          </Credits>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MovieItem;
