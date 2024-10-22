
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './RideSelection.css';


const RideSelection = () => {
    const location = useLocation();
    const { expressPass } = location.state;
    const [isWaiting, setIsWaiting] = useState(false);
    const [rideVideoUrl, setRideVideoUrl] = useState('');

    // Ride images and associated YouTube video URLs
    const rides = [
        {
            src: '/Images/RideImages/caroseussel_sign.jpg',
            videoUrl: 'https://youtu.be/CqowyRTZr2M'
        },
        {
            src: '/Images/RideImages/cat_in_the_hat.jpg',
            videoUrl: 'https://youtu.be/Oz2RGLXIdR8'
        },
        {
            src: '/Images/RideImages/doctor_doom_fear_fall.jpg',
            videoUrl: 'https://youtu.be/ur-iEPGoP0c?t=17'
        },
        {
            src: '/Images/RideImages/forbidden_journey.jpg',
            videoUrl: 'https://youtu.be/6iBOvFcSCG8?t=9'
        },

        {
            src: '/Images/RideImages/dudley_do_rights_ripsaw_falls.jpg',
            videoUrl: 'https://youtu.be/GtkUte2dzYQ?t=20'
        },
        {
            src: '/Images/RideImages/flight_of_the_hippogriff.jpg',
            videoUrl: 'https://youtu.be/uLeEMgr2Rm0?t=40'
        },
        {
            src: '/Images/RideImages/hagrids_magical_creatures_motorbike_adventure_coaster.jpg',
            videoUrl: 'https://youtu.be/TdGbsggU2dg'
        },
        {
            src: '/Images/RideImages/high_in_the_sky.jpg',
            videoUrl: 'https://youtu.be/YPzrOK8RryA?t=20'
        },
        {
            src: '/Images/RideImages/jurassic_park_river_adventure.jpg',
            videoUrl: 'https://youtu.be/p9hC57s-Tgg?t=23'
        },
        {
            src: '/Images/RideImages/onefishtwofish.jpg',
            videoUrl: 'https://youtu.be/BJhGnBkct9E?t=26'
        },
        {
            src: '/Images/RideImages/popeye_and_blutos_bilge_rat_barges.jpeg',
            videoUrl: 'https://youtu.be/ZmltWRgt_Vc?t=22'
        },
        {
            src: '/Images/RideImages/skull_island_reign_of_kong.jpg',
            videoUrl: 'https://youtu.be/J9olxOFrUsU?t=37'
        },
        {
            src: '/Images/RideImages/spider_man_ride.jpg',
            videoUrl: 'https://youtu.be/xwo7GiNXIcY?t=14'
        },
        {
            src: '/Images/RideImages/stormforce_accelactron.jpg',
            videoUrl: 'https://youtu.be/mb3o1JnN66U?t=12'
        },
        {
            src: '/Images/RideImages/the_hulk_coaster_pic.jpg',
            videoUrl: 'https://youtu.be/3lJ-hBUtuXA'
        },
        {
            src: '/Images/RideImages/velocicoaster.jpeg',
            videoUrl: 'https://youtu.be/FJe42WzToFE'
        }
    ];

    console.log(rides);

    const handleRideSelect = (rideIndex) => {
        const selectedVideoUrl = rides[rideIndex].videoUrl;

        if (expressPass) {
            // Show video immediately if user has an express pass
            window.open(selectedVideoUrl, 'Ride Video', 'width=800,height=450');
        } else {
            // Simulate waiting in line for a random interval between 0-60 seconds
            const waitTime = Math.floor(Math.random() * 61) * 1000;
            setIsWaiting(true);
            setTimeout(() => {
                setIsWaiting(false);
                window.open(selectedVideoUrl, 'Ride Video', 'width=800,height=450');
            }, waitTime);
        }
    };

    return (
        <div className="ride-selection-container">
            <h1>Select Your Ride</h1>
            <div className="rides-list">
                {rides.map((ride, index) => (
                    <div key={index} className="ride-item" onClick={() => handleRideSelect(index)}>
                        <img src={ride.src} alt={`Ride ${index + 1}`} />
                    </div>
                ))}
            </div>
            {isWaiting && (
                <div className="waiting-bubble">
                    Please wait in line...
                </div>
            )}
        </div>
    );
};

export default RideSelection;

