import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {selectCountries, selectVisibleCountries} from "../store/countries/counrties-selectors";
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import {loadCountries} from "../store/countries/countries-action";
import {selectControls, selectSearch} from "../store/controls/controls-selectors";

export const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {search, region} = useSelector(selectControls);
  const countries = useSelector(state => selectVisibleCountries(state, {search, region}));
  const {status, qty} = useSelector(selectCountries);

    useEffect(() => {
        if(!qty){
          dispatch(loadCountries());
        }
    }, [qty, dispatch]);
  return (
    <>
      <Controls />
        {status === 'loading' && <h1>Loading...</h1>}
      <List>
            {countries.map((c) => {
              const countryInfo = {
                img: c.flags.png,
                name: c.name,
                info: [
                  {
                    title: 'Population',
                    description: c.population.toLocaleString(),
                  },
                  {
                    title: 'Region',
                    description: c.region,
                  },
                  {
                    title: 'Capital',
                    description: c.capital,
                  },
                ],
              };

              return (
                <Card
                  key={c.name}
                  onClick={() => navigate(`/country/${c.name}`)}
                  {...countryInfo}
                />
              );
            })}
          </List>
    </>
  );
};
