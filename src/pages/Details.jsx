import { useNavigate, useParams } from 'react-router-dom';
import {useEffect} from "react";
import { IoArrowBack } from 'react-icons/io5';
import {useDispatch, useSelector} from "react-redux";
import {selectDetails} from "../store/details/details-selector";
import {loadCountryByName, setClearDetails} from "../store/details/details-actions";

import { Button } from '../components/Button';
import { Info } from '../components/Info';


export const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {currentCountry, error, status} = useSelector(selectDetails);

 useEffect(() => {
    dispatch(loadCountryByName(name));
    return () => {
        dispatch(setClearDetails());
    }
 }, [name, dispatch])

  return (
    <div>
        {status === 'loading' && <h2>Loading...</h2>}
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </div>
  );
};
