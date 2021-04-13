import React from "react";

function fetch() {
    return new Promise(resolve => setTimeout(() => resolve(42), 1000));
}

function fetchAPI(lng) {

    return fetch("127.0.0.1:8080/l10n/locale/"+lng);
}








