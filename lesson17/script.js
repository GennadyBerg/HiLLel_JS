const myPosition = [];
const myLocationLink = document.createElement("a");
navigator.geolocation.getCurrentPosition(
            function (position) {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        myPosition.push(position.coords.latitude);
                        myPosition.push(position.coords.longitude);
                        console.log(myPosition);
            });
             myLocationLink.href = `https://www.google.com/maps/@${myPosition[1]},${myPosition[2]};

            myLocationLink.innerHTML = "My Working Place";

document.body.append(myLocationLink);
            // function(error) {
            //   console.error("Ошибка при получении местоположения:", error);
            // }
          


// navigator.geolocation.getCurrentPosition()

// console.log("navigator.geolocation > ", navigator.geolocation);

// navigator.geolocation.getCurrentPosition(location => {
//             coordinates = location.coords;
//             console.log("coordinates > ", coordinates.latitude);
//             console.log("coordinates > ", coordinates.longitude);

//             const myLocationLink = document.createElement("a");
//             myLocationLink.href = `https://www.google.com/maps/@${coordinates.latitude},${coordinates.longitude},15z?entry=ttu`;
            //             myLocationLink.innerHTML = "My Living Place";

            //             document.body.append(myLocationLink);

            // });
            // 
//             function generateGoogleMapsLink(latitude, longitude) {
//                         const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
//                         return mapsLink;
//             }

// // Пример использования с координатами (замените их своими собственными)
// const myLatitude = 37.7749; // Широта
// const myLongitude = -122.4194; // Долгота

// const googleMapsLink = generateGoogleMapsLink(myLatitude, myLongitude);
// console.log("Ссылка на Google Maps:", googleMapsLink);



// if (screen.width > 4000) {
//             do something
// } else {
//     else
