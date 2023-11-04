package com.wds.ship.util;

import com.google.gson.Gson;

public class Utils {


    public static <T1, T2> T2 convert(T1 t1, Class<T2> destinationClass) {
        // Create a Gson instance
        Gson gson = new Gson();

        // Serialize the source object to JSON
        String json = gson.toJson(t1);

        // Deserialize the JSON into the destination class
        T2 destination = gson.fromJson(json, destinationClass);

        return destination;
    }

}
