import React from 'react';
import Style from '../about/About.module.scss';
import Terminal from '../about/Terminal';
import {Box} from "@mui/material";
import {info} from "../../info/Info";


export default function Internship() {
    const firstName = info.firstName.toLowerCase()

   

    function internshipText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                InternShips</p>
            <p><span style={{color: info.baseColor}}>Internships <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.internship.map((intern, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'} className={Style.green}>{intern.no} {intern.name}</Box>
                     <li><Box component={'span'} mr={'1rem'}>{intern.date}</Box></li>
                    <li><Box component={'span'} mr={'1rem'}>{intern.position}</Box></li> 
                    
                    </li>
                    
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={internshipText()}/>
           
        </Box>
    )
}