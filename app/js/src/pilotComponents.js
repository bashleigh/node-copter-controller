import React from 'react';
import {Controller} from './Helpers';
import {
    ESCReading,
    Throttle,
    Battery,
    MagneticCompass,
} from './Components/Pilot';


export default [
    <Controller/>,
    <Throttle/>,
    <ESCReading/>,
    <Battery/>,
    <MagneticCompass/>
];