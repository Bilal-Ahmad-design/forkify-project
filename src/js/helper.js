import { async } from "regenerator-runtime";
import { TIMEOUT_SEC } from "./config.js";
const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

const aFunction = function () {
    console.log(`this function was added to the 'new-feature' branch`);
}
aFunction();
export const getJSON = async function (url) {
    try {

        aFunction();
        const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
        const data = await res.json();

        if (!res.ok) throw new Error(`${data.message} (${res.status})`);

        return data;
    } catch (err) {
        throw err;
    }
};

