import React from "react";
import { View } from "native-base";
import MapView from "react-native-maps";

import SearchBox from "../SearchBox"

import SearchResults from "../SearchResults"

import styles from "./MapContainerStyles";

export const MapContainer = ({region, getInputData})=>{
    return (
        <View style={styles.container}>
            <MapView
                provider={MapView.PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
            >
            <MapView.Marker
                coordinate={region}
                pinColor="green"
            />
            </MapView>
            <SearchBox getInputData={getInputData}/>
            <SearchResults/>
        </View>
    )
}

export default MapContainer;