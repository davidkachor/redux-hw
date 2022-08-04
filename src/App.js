import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPeople } from "./store/slices/peopleSlice";
import styled from "styled-components";
import { fetchPlanets } from "./store/reducers/planetReducer";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

function App() {
  const peopleState = useSelector((state) => state.people);
  const planetState = useSelector((state) => state.planets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (peopleState.status === null) {
      dispatch(fetchPeople());
    }
    if (planetState.status === null) {
      dispatch(fetchPlanets());
    }
  }, [dispatch, peopleState, planetState.status]);

  return (
    <Wrapper>
      <div>
        <h2>People (made with slices)</h2>
        <ul>
          {peopleState.people.map((e) => (
            <li key={e.url}>{e.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Planets (made with reducer)</h2>
        <ul>
          {planetState.planets.map((e) => (
            <li key={e.url}>{e.name}</li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

export default App;
