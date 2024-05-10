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
    },
    

];

export const singleFilter = [
    {
        id: "price",
        name: "Price",
        type: "radio",
        options: [
            { value: "149-399", label: "₹149-₹399" },
            { value: "400-699", label: "₹400-₹699" },
            { value: "700-999", label: "₹700-₹999" },
            { value: "1000+", label: "₹1000+" },
        ]
    },
    {
        id: "discount",
        name: "Discount Range",
        type: "radio",
        options: [
            { value: "10%", label: "10%" },
            { value: "20%", label: "20%" },
            { value: "30%", label: "30%" },
            { value: "40%", label: "40%" },
            { value: "50%", label: "50%" },
            { value: "60%", label: "60%" },
            { value: "70%", label: "70%" },
            { value: "80%", label: "80%" },
        ]
    },
    {
        id: "availability",
        name: "Availability",
        type: "radio",
        options: [
            {
                label: "In Stock",
                value: "in_stock",
                checked: false
            },
            {
                label: "Out of Stock",
                value: "out_of_stock",
                checked: false
            },
            {
                label: "Pre-order",
                value: "pre_order",
                checked: false
            }
        ]
    }
];

