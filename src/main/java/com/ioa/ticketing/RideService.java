package com.ioa.ticketing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.annotation.PostConstruct;
import java.util.List;
import com.ioa.ticketing.RideRepository;


@Service
public class RideService {
    @Autowired
    private RideRepository rideRepository;

    @PostConstruct
    public void initRides() {
        if (rideRepository.count() == 0) {
            rideRepository.save(new Ride("The Incredible Hulk Coaster", "A thrilling high-speed roller coaster.", true));
            rideRepository.save(new Ride("Doctor Doom's Fearfall", "A vertical drop experience.", true));
            rideRepository.save(new Ride("Storm Force Accelatron", "A spinning, whirlwind ride.", true));
            rideRepository.save(new Ride("The Amazing Adventures of Spider-Man", "3D adventure ride.", true));
            rideRepository.save(new Ride("Jurassic Park River Adventure", "Water ride with dinosaurs.", true));
            rideRepository.save(new Ride("Skull Island: Reign of Kong", "Immersive ride into the world of Kong.", true));
            rideRepository.save(new Ride("Flight of the Hippogriff", "Family-friendly roller coaster.", true));
            rideRepository.save(new Ride("Harry Potter and the Forbidden Journey", "Immersive Harry Potter experience.", true));
            rideRepository.save(new Ride("Hagrid's Magical Creatures Motorbike Adventure", "Motorbike ride through the Forbidden Forest.", true));
            rideRepository.save(new Ride("The High in the Sky Seuss Trolley Train Ride!", "Scenic trolley ride through Seuss Landing.", true));
            rideRepository.save(new Ride("Caro-Seuss-el", "Classic carousel with a Seussian twist.", true));
            rideRepository.save(new Ride("One Fish, Two Fish, Red Fish, Blue Fish", "Interactive water ride.", true));
            rideRepository.save(new Ride("Dudley Do-Right's Ripsaw Falls", "Water flume ride with splashes.", true));
            rideRepository.save(new Ride("Popeye & Bluto's Bilge-Rat Barges", "Water raft ride with rapids.", true));
        }
    }

    public List<Ride> getAllRides() {
        return rideRepository.findAll();
    }

    public Ride addRide(Ride ride) {
        return rideRepository.save(ride);
    }
}

