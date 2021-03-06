const places = [
    {
        id : 1,
        name : "The Sundarbans",
        location : "Khulna, Khulna City 9100 Bangladesh",
        img : 'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/7dm8zgmet4qch5xguyx21ud4wnvs_1622033849_shutterstock_597391175.jpg',
        description :  `The Sundarbans is the world's largest mangrove forest, spread between Bangladesh and India. It is a UNESCO World Heritage site and a gateway to wildlife's unique genesis spread across 10,000 sq km. Hundreds of canals and creeks are spread across Sunderbans, where you can enjoy a morning boat ride.

        It also has a beautiful beach where you can soak the sun and enjoy many water sports activities. You can spend the night on a houseboat that is parked on the rivers in different forest areas. It also has several wildlife sanctuaries where you can watch deers, monkeys, tigers, and other animals.`,
        highlights : ` Wildlife sanctuaries, Irrawaddy dolphins, Jamtola Beach, watchtower`

    },
    {
        id : 2,
        name : "Cox's Bazar",
        location : " Bay of Bengal, Cox's Bazar Bangladesh",
        img : 'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/goycmp7sgrx6mqe4byg3o6kk6hbo_2595a1d7e592aeb5e81e1c6e432ceaef.jpg',
        description :  `If you're looking for the most popular tourist places in Bangladesh, you should definitely visit Cox's Bazar, located alongside the Bay of Bengal beach. It has the world's largest unbroken sea beach that stretches more than one hundred and twenty kilometers.

        You can also find here miles of golden sands, surfing waves, towering cliffs, rare conch shells, waterfalls, pagodas, and parks. Aggmeda Khyang, which is a huge Buddhist monastery, is the major attraction of Cox's Bazar, containing ancient manuscripts and large bronze Buddha pictures.`,
        highlights : ` Sea Beach, Restaurants, hotels, monasteries, waterfalls, pagodas.`

    },
    {
        id : 3,
        name : "Sreemangol",
        location : "Sylhet Division, North Eastern, Bangladesh",
        img : 'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/leat00e74qlxlc7x790qbszormg8_EaAOy7pXsAEi1ic.jpg',
        description :  `Srimangal is known to be Bangladesh's tea capital as it contributes to 3% of the total tea production in the entire world. It is one of the most beautiful place in Bangladesh, blessed with rolling hills carpeted with dense forest sanctuaries, tribal villages, and endless tea plantations.

        It is a prime eco-tourism destination that boasts of untouched flora and fauna and the highest waterfalls. Cycling around in its beautiful tea estates or exploring the nearby villages and forests is considered to be an amazing experience in itself.`,
        highlights : `Tea estates, tribal villages, hiking trails, forests`

    },
    {
        id : 4,
        name : "Rangamati",
        location : "Rangamati,Chittagong,Bangladesh",
        img : 'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/xjp5cwag6z2a18o2mswtal7djp2y_7d013fc8bd63f7a185c9aeb41864e919.jpg',
        description :  `Located at the side of Kaptai Lake, Rangamati is the natural habitat of various indigenous groups and tribes that have a unique way of living. It is one of the best tourist places in Bangladesh, dotted with winding hills and lush green fields making it look like a wonderland on Earth.

        Hanging Bridge, Rangamati Water Front, and Rajban Bihar Pagoda are the most popular attractions in Rangamati. You can meet with the tribal villagers, including Chakma, Marma, Tripura, Murong, Tanchangya, Bome, Khumi, Chak, Pankhoa, Kheyang, and Lusai over here.`,
        highlights : `Tribal villages, hanging bridge, Rangamati Water Front`

    },
    {
        id : 5,
        name : "Bandarban",
        location : "Bandarban,Chittagong,South-eastern Bangladesh",
        img : 'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/2ufji43e5uo9za7i3boml6fyk7xm_1622034814_shutterstock_1765012712.jpg',
        description :  `Bandarban is one of the best places to visit in Bangladesh, renowned for its exquisite greenery and exotic waterfalls. It gives a feeling of serenity to the visitors with its beautiful lake and breathtaking landscapes.

        The largest Buddhist Temple, Buddha Dhatu Jadi, is also situated in the Bandarban district of Bangladesh. Boga lake is the highest natural lake in Bandarban that attracts nature lovers in a magnetic way.`,
        highlights : `Buddha Dhatu Jadi, Boga lake`

    },
    {
        id : 6,
        name : "Saint Martin",
        location : "Saint Martin Island, Tecnaf, Coxbazar, 97150 Bangladesh",
        img : 'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/tqoi06pkedw6xqpbapzvkhgylfu8_28849d88548b64a6f18ef8dd65b07539.jpg',
        description :  `Saint Martin is situated in the southeast part of Bangladesh and is the only coral island of the country. This tiny island is called "Narikel Jinjira" by the local people as abundant coconut grows here. It is one of the best places to visit in Bangladesh that harbors some of the most picturesque beaches in Bangladesh, where you can enjoy beach sports, a bonfire, and beach parties.

        You can also go scuba diving or hire a speed boat and take a tour around the island. There are many restaurants and beach shacks here where you can enjoy local fresh seafood.`,
        highlights : `Beach sports, a bonfire, and beach parties`

    },
    {
        id : 7,
        name : "Kuakata",
        location : "Patuakhali,Barishal,Bangladesh",
        img : 'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/5rij0vbesu1vpkkzc8erfzgi24bt_880px-Kuakata_beach.jpg',
        description :  `Kuakata is a beautiful sea beach located in the southernmost part of Bangladesh where you can enjoy both sunset and sunrise. It is one of the best places in Bangladesh, with a wide sandy beach where you can enjoy the sand, surf, and the sun.

        The beach is nineteen miles long and four miles wide and is part of the Sundarban forest. Gangamati Reserved Forest is a mangrove forest in the Kuakata with different kinds of wildlife and trees. During the festivals like Maghi Purnima and Rush Purnima, many Hindu devotees take a holy bath on this beach.`,
        highlights : `Gangamati Reserved Forest, diving, sunset, sunrise`

    },
    {
        id : 8,
        name : "Dhaka city",
        location : "dhaka,Bangladesh",
        img : 'https://images.thrillophilia.com/image/upload/s--PMGjuzWL--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/371/365/original/1618293573_simon-reza-W6UpLnegQz0-unsplash.jpg.jpg',
        description :  `Dhaka is the largest city in South East Asia, situated on the northern side of the Buriganga River. It is situated in central Bangladesh on the lower reaches of the Delta Ganges. Dhaka is Bangladesh's megacity with swathes of green spaces, beautiful museums, and storied red-brick facades. Here, glossy high-rises are beautifully juxtaposed against thousands-year-old mosques, giving the city a charismatic appeal you won't find anywhere else. 

        There are many popular attractions in Dhaka that will leave you spoilt for choices during your tour. You can visit the Ahsan Manzil museum to have a glimpse of the Mughal lifestyle and head to Lalbagh Kella that is renowned for its architectural beauty. Dhakeshwari Mandir, The Khan Muhammad Mirza Mosque, and Baitul Mukarram are the most famous spiritual attractions of the city. `,
        highlights : `Capital city,architecture,mosques,life`

    },
    {
        id : 9,
        name : "Sonargaon",
        location : "29 km from Dhaka, Dhaka City Bangladesh",
        img : 'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/6ytlq8eswu1glft0hgp7g8ahzdb0_DQo9UJ9XkAEma2Z.jpg_large',
        description :  `Sonargaon is the major inland port and commercial center of Bangladesh, where you can witness mind-blowing historical sites that tell the story of human history. The main attraction here is Panam Nagar, an abandoned merchant city consisting of fifty-two houses built on a single street.

        You can also visit the Folk Arts and Crafts Museum, where the fabrics in Sonargaon have been displayed beautifully. If you're looking for eternal bliss, you can visit the fifteenth-century Goladi mosque that is the only structure from the medieval period remaining in this area.`,
        highlights : `Goaldi mosque, Folk Arts and Crafts Museum`

    },
    {
        id : 10,
        name : "Paharpur",
        location : "Mymensingh Zl, Dhaka Div, Bangladesh ",
        img : 'https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/83xcl0o4hp3bssoi1y2a8tr7ml12_EPx8dEaVAAEWKk2.jpg_large',
        description : `Paharpur is a popular archaeological site in Bangladesh where you can find the Ruins of the Buddhist Vihara. It gives evidence of the rise of Mahayana Buddhism from the seventh century onwards.

        This ancient site is over twelve hundred years old, and the structures are completely destroyed here. It has played an important role in the rise of Vajrayana, which is a new branch of Buddhism and still the dominant form practiced in Tibet.`,
        highlights : `Somapura Mahavihara monastery, Vajrayana Buddhism`
    }
];