import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MedicineItem from './MedicineItem';
import PostForm from './PostForm';
import { getMedicines } from '../../actions/post';
import axios from "axios";

const Medicines = () => {

    const [medicines, setMedicines] = useState();
    const [medicine, setMedicine] = useState("");
    const [dose, setDose] = useState("");
    const [time, setTime] = useState("");

    const onChangeMedicine = (e) => {
        setMedicine(e.target.value);
    };
    const onChangeDose = (e) => {
        setDose(e.target.value);
    };
    const onChangeTime = (e) => {
        setTime(e.target.value);
    };

    useEffect(async () => {
        //let allBookmarks = 
        console.log(await axios.get(`/api/medicines`));
        let res = await axios.get(`/api/medicines`);
        setMedicines(res.data);

    }, []);

    const handleSave = () => {
        let result = axios.put('/api/medicines', { title: medicine, dose: dose, medicinetime: time });

    };




    return (
        <div>
            <input
                type="title"
                placeholder="Yeni ilaç ekle.."
                name="title"
                value={medicine}
                onChange={(e) => onChangeMedicine(e)}
                required
            />
            <input
                type="dose"
                placeholder="Doz"
                name="dose"
                value={dose}
                onChange={(e) => onChangeDose(e)}
                required
            />
            <input
                type="title"
                placeholder="Öğün"
                name="time"
                value={time}
                onChange={(e) => onChangeTime(e)}
                required
            />
            <button className="btn btn-primary" onClick={() => handleSave()}>Kaydet</button>
            <div className="posts">
                {console.log(medicines)}
            </div>
        </div>
    );
};


export default Medicines;
