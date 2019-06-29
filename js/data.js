
// var dataService = new function () {
//     getMainDoc = function (callback) {
//         restEndPoint = 'products.txt?timestamp=' + $.now();
//         data = "";
//         makeGetAjaxCall(callback);
//     };
//     makeAjaxCall = function (callback) {
//         $.ajax({
//           type: "GET",
//           url: restEndPoint,
//           contentType: "application/x-www-form-urlencoded; charset=utf-8",
//           dataType: "json",
//           data: data,
//           success: function (data) {
//               console.log("weldone");
            
//           },
//           error: function () {
//             alert("Something is wrong.");
//           },
    
//             complete: function (xhr, status) {
//                 //$('#showresults').slideDown('slow')
//             }
//         });
//       };
//       return {
//         getMainDoc: getMainDoc,
//       };
// }();

    getMainDoc = function (callback) {
        restEndPoint = 'products.txt?timestamp=' + $.now();
        data = "";
        makeGetAjaxCall(callback);
    };    
$.ajax({
    type: "GET",
    url: 'products.txt?timestamp=' + $.now(),
    dataType: "json",
    // async: true,
    // crossDomain: true,
    jsonp: "callback",
    beforeSend: function (xhr) {
        xhr.setRequestHeader('Content-type', 'application/json;charset=utf-8');
    },
    success: function (xml) {
        // debugger;
        // alert("YAY!");
        // message


        console.log(xml);



       

    },
    error: function () {
        alert("Something is wrong.");
    },

    complete: function (xhr, status) {
        //$('#showresults').slideDown('slow')
    }
});