export type SubLinks = {
    header?: string;
    subMenu?: { label: string; href: string; }[];
    subImages?: { label: string; href: string; image: string; }[];
}

export type Links = {
    label: string;
    href: string;
    navImage?: string;
    caption?: string;
    subLinks?: SubLinks[];
}

export const links: Links[] = [
    {
        label: "Men",
        href: "/mens",
        navImage: "/men-snowboarding.jpg",
        caption: "Men's Snowboarding",
        subLinks: [
            {
                header: "Snowboarding",
                subMenu: [
                    {
                        label: "Snowboards",
                        href: "/",
                    },
                    {
                        label: "Snowboard Bindings",
                        href: "/",
                    },
                    {
                        label: "Snowboard Boots",
                        href: "/",
                    },
                    {
                        label: "Snowboard Accessories",
                        href: "/",
                    },                   
                ],
            },
            {
                header: "Clothing",
                subMenu: [
                    {
                        label: "Hodies",
                        href: "/",
                    },
                    {
                        label: "Jackets",
                        href: "/",
                    },
                    {
                        label: "Sweatshirts",
                        href: "/",
                    },
                    {
                        label: "T-Shirts",
                        href: "/",
                    },
                    {
                        label: "Snowpants",
                        href: "/",
                    },                   
                ],
            },
            {
                header: "Accessories",
                subMenu: [
                    {
                        label: "Gloves",
                        href: "/",
                    },
                    {
                        label: "Hats & Beanies",
                        href: "/",
                    },
                    {
                        label: "Socks",
                        href: "/",
                    },
                    {
                        label: "Helmets",
                        href: "/",
                    },
                    {
                        label: "Goggles",
                        href: "/",
                    },          
                ],
            },
        ],
    }, 
    {
        label: "Women",
        href: "/womens",
        navImage: "/womens-snowboarding.jpg",
        caption: "Women's Snowboarding",
        subLinks: [
            {
                header: "Snowboarding",
                subMenu: [
                    {
                        label: "Snowboards",
                        href: "/",
                    },
                    {
                        label: "Snowboard Bindings",
                        href: "/",
                    },
                    {
                        label: "Snowboard Boots",
                        href: "/",
                    },
                    {
                        label: "Snowboard Accessories",
                        href: "/",
                    },                   
                ],
            },
            {
                header: "Clothing",
                subMenu: [
                    {
                        label: "Hodies",
                        href: "/",
                    },
                    {
                        label: "Jackets",
                        href: "/",
                    },
                    {
                        label: "Sweatshirts",
                        href: "/",
                    },
                    {
                        label: "T-Shirts",
                        href: "/",
                    },
                    {
                        label: "Snowpants",
                        href: "/",
                    },                   
                ],
            },
            {
                header: "Accessories",
                subMenu: [
                    {
                        label: "Gloves",
                        href: "/",
                    },
                    {
                        label: "Hats & Beanies",
                        href: "/",
                    },
                    {
                        label: "Socks",
                        href: "/",
                    },
                    {
                        label: "Helmets",
                        href: "/",
                    },
                    {
                        label: "Goggles",
                        href: "/",
                    },          
                ],
            },
        ],
    }, 
    {
        label: "Kids",
        href: "/kids",
        navImage: "/kids-snowboarding.jpg",
        caption: "Kid's Snowboarding",
        subLinks: [
            {
                header: "Snowboarding",
                subMenu: [
                    {
                        label: "Snowboards",
                        href: "/",
                    },
                    {
                        label: "Snowboard Bindings",
                        href: "/",
                    },
                    {
                        label: "Snowboard Boots",
                        href: "/",
                    },
                    {
                        label: "Snowboard Accessories",
                        href: "/",
                    },                   
                ],
            },
            {
                header: "Clothing",
                subMenu: [
                    {
                        label: "Hodies",
                        href: "/",
                    },
                    {
                        label: "Jackets",
                        href: "/",
                    },
                    {
                        label: "Sweatshirts",
                        href: "/",
                    },
                    {
                        label: "T-Shirts",
                        href: "/",
                    },
                    {
                        label: "Snowpants",
                        href: "/",
                    },                   
                ],
            },
            {
                header: "Accessories",
                subMenu: [
                    {
                        label: "Gloves",
                        href: "/",
                    },
                    {
                        label: "Hats & Beanies",
                        href: "/",
                    },
                    {
                        label: "Socks",
                        href: "/",
                    },
                    {
                        label: "Helmets",
                        href: "/",
                    },
                    {
                        label: "Goggles",
                        href: "/",
                    },          
                ],
            },
        ],
    },
    {
        label: "Resorts",
        href: "/resorts",
        subLinks: [
            {
                subImages: [
                    {
                        label: "Bear Mountain",
                        href: "/",
                        image: "/bear-mountain.jpg",
                    },
                    {
                        label: "Lion's Peak",
                        href: "/",
                        image: "/lions-peak.jpg",
                    },
                    {
                        label: "Copper Mountain",
                        href: "/",
                        image: "/copper-mountain.jpg",
                    },
                    {
                        label: "Fallen Valley",
                        href: "/",
                        image: "/fallen-valley.jpg",
                    },
                ],
            },
        ],
        
    } ,
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Add-Products",
        href: "/add_items",
    },
    {
        label: "Sign-in",
        href: "/sign-in",
    }
];