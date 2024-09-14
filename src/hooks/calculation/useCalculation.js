export const useGeoPythagoreanDistance = (
    selfLatitude,
    selfLongitude,
    targetLatitude,
    targetLongitude,
) => {
    const latDiff = Math.abs(selfLatitude - targetLatitude);
    const lonDiff = Math.abs(selfLongitude - targetLongitude);

    const latDistance = latDiff * 111136;
    // const lonDistance = lonDiff * 90500;
    const lonDistance = lonDiff * 111325 * Math.cos((selfLatitude + targetLatitude) / 2 * (Math.PI / 180));

    const distanceMeters = Math.round(Math.sqrt(latDistance**2 + lonDistance**2));

    return distanceMeters;
};

export const PartnerDirection = (partnerLat, partnerLon, myLat, myLon) => {
    let LatitudeDifference = partnerLat - myLat
    let LongitudeDifference = partnerLon - myLon
    
    let angle = Math.atan(LatitudeDifference / LongitudeDifference) * 180 / Math.PI
    
    return(angle)
}