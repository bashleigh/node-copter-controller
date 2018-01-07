import React from 'react';
import {Controller} from './Helpers';
import {
    ESCReading,
    Throttle,
    Battery,
    MagneticCompass,
    HorizonGyro,
} from './Components/Pilot';


export default [
    <Controller/>,
    <Throttle/>,
    <ESCReading/>,
    <Battery/>,
    <MagneticCompass/>,
    <HorizonGyro/>,
];