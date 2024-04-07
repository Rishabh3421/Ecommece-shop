export const color = [
    "white",
    "black",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "indigo",
    "purple",
    "pink",
];

export const filters = [
    {
        id:"color",
        name:"Color",
        options:[
            {
                label:"White",
                value:"white",
                checked:false
            },
            {
                label:"Black",
                value:"black",
                checked:false
            },
            {
                label:"Red",
                value:"red",
                checked:false
            },
            {
                label:"Orange",
                value:"orange",
                checked:false
            },
            {
                label:"Yellow",
                value:"yellow",
                checked:false
            },
            {
                label:"Green",
                value:"green",
                checked:false
            },
            {
                label:"Teal",
                value:"teal",
                checked:false
            },
            {
                label:"Blue",
                value:"blue",
                checked:false
            },
            {
                label:"Indigo",
                value:"indigo",
                checked:false
            },
            {
                label:"Purple",
                value:"purple",
                checked:false
            },
        ]
    },
    {
        id:"size",
        name:"Size",
        options:[
            {
                label:"S",
                value:"S",
                checked:false
            },
            {
                label:"M",
                value:"M",
                checked:false
            },
            {
                label:"L",
                value:"L",
                checked:false
            },
        ]
    }
];

export const singleFilter=[
    {
        id:"price",
        name:"Price",
        options:[
            {value: "149-399", lable:"₹149-₹399"},
            {value: "400-699", lable:"₹400-₹699"},
            {value: "700-999", lable:"₹700-₹999"},
            {value: "1000+", lable:"₹1000+"},
        ]
    },
    {
        id:"discount",
        name:"Discount",
        options:[
            {value: "10%", lable:"10%"},
            {value: "20%", lable:"20%"},
            {value: "30%", lable:"30%"},
            {value: "40%", lable:"40%"},
            {value: "50%", lable:"50%"},
            {value: "60%", lable:"60%"},
            {value: "70%", lable:"70%"},
            {value: "80%", lable:"80%"},
        ]
    }
]