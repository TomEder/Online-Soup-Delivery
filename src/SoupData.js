import majssoppa from './images/majssoppa.jpg'
import gulasch from './images/gulasch.png'
import kött from './images/kött.png'
import laxSoppa from './images/laxSoppa.png'
import morot from './images/morot.png'
import ramen from './images/ramen.png'
import skaldjurssoppa from './images/skaldjurssoppa.png'
import toscana from './images/toscana.png'
import rameninfo from './images/ramenInfo.png'
import köttinfo from './images/köttinfo.png'
import toscanainfo from './images/toscanainfo.png'
import gulaschinfo from './images/gulaschinfo.png'
import majsinfo from './images/majsinfo.png'
import morotsinfo from './images/morotsinfo.png'
import skalinfo from './images/skalinfo.png'
import laxinfo from './images/laxinfo.png'


export const soups = [
    {
        id: 1000,
        name: "Ramen",
        type: "Kyckling",
        image: ramen,
        infoimage: rameninfo,
        price: 62,
        ingredients: ["Kyckling, ", "Ägg, ", "Majs, ", "Paprika"],
        nutrients: [
            {
                name: "protein",
                value: 0.9,
                unit: "g"
            },
            {
                name: "fibrer",
                value: 0.8,
                unit: "g"
            },
            {
                name: "kolhydrater",
                value: 3.3,
                unit: "g"
            },
            {
                name: "vatten",
                value: 91.4,
                unit: "g"
            },
            {
                name: "fett",
                value: 91.4,
                unit: "g"
            },
            {
                name: "aska",
                value: 1.4,
                unit: "g"
            },
            {
                name: "energi",
                value: 105,
                unit: "kcal"
            }
        ]
    },
    {
        id: 1001,
        name: "Köttsoppa",
        type: "Kött",
        image: kött,
        infoimage: köttinfo,
        price: 62,
        ingredients: ["Rotfrukter, ", "Vitkål"],
        nutrients: [
            {
                name: "protein",
                value: 0.9,
                unit: "g"
            },
            {
                name: "fibrer",
                value: 0.8,
                unit: "g"
            },
            {
                name: "kolhydrater",
                value: 3.3,
                unit: "g"
            },
            {
                name: "vatten",
                value: 91.4,
                unit: "g"
            },
            {
                name: "fett",
                value: 91.4,
                unit: "g"
            },
            {
                name: "aska",
                value: 1.4,
                unit: "g"
            },
            {
                name: "energi",
                value: 105,
                unit: "kcal"
            }
        ]
    },
    {
        id: 1002,
        name: "Toscana",
        type: "Vegetarisk",
        image: toscana,
        infoimage: toscanainfo,
        price: 62,
        ingredients: ["Potatis, ", "Morötter, ", "Tomat, ", "Paprika, ", "Vita bönor"],
        nutrients: [
            {
                name: "protein",
                value: 0.9,
                unit: "g"
            },
            {
                name: "fibrer",
                value: 0.8,
                unit: "g"
            },
            {
                name: "kolhydrater",
                value: 3.3,
                unit: "g"
            },
            {
                name: "vatten",
                value: 91.4,
                unit: "g"
            },
            {
                name: "fett",
                value: 91.4,
                unit: "g"
            },
            {
                name: "aska",
                value: 1.4,
                unit: "g"
            },
            {
                name: "energi",
                value: 105,
                unit: "kcal"
            }
        ]
    },
    {
        id: 1003,
        name: "Vegetarisk Gulasch",
        type: "Vegetarisk",
        image: gulasch,
        infoimage: gulaschinfo,
        price: 62,
        ingredients: ["Bönor, ", "Potatis, ", "Paprika, ", "Lök"],
        nutrients: [
            {
                name: "protein",
                value: 0.9,
                unit: "g"
            },
            {
                name: "fibrer",
                value: 0.8,
                unit: "g"
            },
            {
                name: "kolhydrater",
                value: 3.3,
                unit: "g"
            },
            {
                name: "vatten",
                value: 91.4,
                unit: "g"
            },
            {
                name: "fett",
                value: 91.4,
                unit: "g"
            },
            {
                name: "aska",
                value: 1.4,
                unit: "g"
            },
            {
                name: "energi",
                value: 105,
                unit: "kcal"
            }
        ]
    },
    {
        id: 1004,
        name: "Rostad majssoppa",
        type: "Vegetarisk",
        image: majssoppa,
        infoimage: majsinfo,
        price: 62,
        ingredients: ["Quesadillas"],
        nutrients: [
            {
                name: "protein",
                value: 0.9,
                unit: "g"
            },
            {
                name: "fibrer",
                value: 0.8,
                unit: "g"
            },
            {
                name: "kolhydrater",
                value: 3.3,
                unit: "g"
            },
            {
                name: "vatten",
                value: 91.4,
                unit: "g"
            },
            {
                name: "fett",
                value: 91.4,
                unit: "g"
            },
            {
                name: "aska",
                value: 1.4,
                unit: "g"
            },
            {
                name: "energi",
                value: 105,
                unit: "kcal"
            }
        ]
    },
    {
        id: 1005,
        name: "Morotssoppa",
        type: "Vegetarisk",
        image: morot,
        infoimage: morotsinfo,
        price: 62,
        ingredients: ["Avocado"],
        nutrients: [
            {
                name: "protein",
                value: 0.9,
                unit: "g"
            },
            {
                name: "fibrer",
                value: 0.8,
                unit: "g"
            },
            {
                name: "kolhydrater",
                value: 3.3,
                unit: "g"
            },
            {
                name: "vatten",
                value: 91.4,
                unit: "g"
            },
            {
                name: "fett",
                value: 91.4,
                unit: "g"
            },
            {
                name: "aska",
                value: 1.4,
                unit: "g"
            },
            {
                name: "energi",
                value: 105,
                unit: "kcal"
            }
        ]
    },
    {
        id: 1006,
        name: "Skaldjurssoppa",
        type: "Fisk och skaldjur",
        image: skaldjurssoppa,
        infoimage: skalinfo,
        price: 62,
        ingredients: ["Blåmusslor, ", "Havskräftor, ", "Räkor, ", "Lök"],
        nutrients: [
            {
                name: "protein",
                value: 0.9,
                unit: "g"
            },
            {
                name: "fibrer",
                value: 0.8,
                unit: "g"
            },
            {
                name: "kolhydrater",
                value: 3.3,
                unit: "g"
            },
            {
                name: "vatten",
                value: 91.4,
                unit: "g"
            },
            {
                name: "fett",
                value: 91.4,
                unit: "g"
            },
            {
                name: "aska",
                value: 1.4,
                unit: "g"
            },
            {
                name: "energi",
                value: 105,
                unit: "kcal"
            }
        ]
    },
    {
        id: 1007,
        name: "Laxsoppa",
        type: "Fisk och skaldjur",
        image: laxSoppa,
        infoimage: laxinfo,
        price: 75,
        ingredients: ["Morot, ", "Dill, ", "Ärtor"],
        nutrients: [
            {
                name: "protein",
                value: 0.9,
                unit: "g"
            },
            {
                name: "fibrer",
                value: 0.8,
                unit: "g"
            },
            {
                name: "kolhydrater",
                value: 3.3,
                unit: "g"
            },
            {
                name: "vatten",
                value: 91.4,
                unit: "g"
            },
            {
                name: "fett",
                value: 91.4,
                unit: "g"
            },
            {
                name: "aska",
                value: 1.4,
                unit: "g"
            },
            {
                name: "energi",
                value: 105,
                unit: "kcal"
            }
        ]
    }
];
