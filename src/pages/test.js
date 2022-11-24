import { setUser } from '../app/reducers';
import { useDispatch, useSelector } from 'react-redux';

function Test() {

  const dispatch = useDispatch();

  const changeEmail = () => {
    console.log('change')
    dispatch(setUser("hello@yahoo.com"))
  }

  const mail = useSelector(state => {
    console.log(state)
    return state.user.email
  })

  return (
    <div className="Test">
      <button onClick={changeEmail}>BUTTON</button>
      <p>{mail}</p>
    </div> 
  );
}

export default Test;