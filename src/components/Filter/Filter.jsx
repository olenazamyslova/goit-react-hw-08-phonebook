import { useDispatch } from 'react-redux/es/exports';
import { filterContacts } from 'redux/contactsActions';
import s from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
    const onChange = event => {
        dispatch(filterContacts(event.currentTarget.value.toLowerCase()));
    };

    return (
        <div className={s.container}>
            <label className={s.label}>
            <span className={s.label__text}>Find contacts by name</span>
                <br />
                <input type="text" onChange={onChange} />
            </label>
        </div>
    );
};
export default Filter;
