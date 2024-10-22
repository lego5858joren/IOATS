package com.ioa.ticketing;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;

@RestController
@RequestMapping("/api/rides")
public class RideController {
    @Autowired
    private RideService rideService;

    @GetMapping
    public List<Ride> getAllRides() {
        return rideService.getAllRides();
    }

    @PostMapping
    public Ride addRide(@RequestBody Ride ride) {
        return rideService.addRide(ride);
    }
}

