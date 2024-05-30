const update_location_title = (e)=>{
    const _id  = $(e).attr('id');
    const title = document.getElementById('location-title');
    const description = document.getElementById('description');
    if (mapping.hasOwnProperty(_id)) {
        let name = mapping[_id]
        title.innerHTML = name;
        description.innerHTML = descriptions[name];
    } else {
        title.innerHTML = _id;
        description.innerHTML = "I don't know what this is."
    }

};

$('.zone').each( (i,element) => {
    $(element).on('click', (e) => {
        update_location_title(element);
    });
});

mapping = {
    //'path13': 
    'path14': 'West Hills',
    'path15': 'Chatsworth',
    'path16': 'Porter Ranch',
    'path17': 'Granada Hills',
    'path18': 'Symlar',
    'path24': 'North Hills',
    'path26': 'San Fernando',
    'path27': 'Pacoima',
    'path28': 'Arleta',
    'path29': 'Panorama City',
    'path30': 'Van Nuys',
    'path31': 'Woodland Hills',
    'path32': 'Tarzana',
    'path33': 'Echino',
    'path34': 'Sherman Oaks',
    'path35': 'Valley Glen',
    'path36': 'North Hollywood',
    'path37': 'Sun Valley',
    'path39': 'Shadow Hills',
    'path40': 'Tujunja',
    'path41': 'North Hollywood',
    'path42': 'Burbank',
    'path44': 'Lakeview Terrace',
    'path46': 'Toluca Lake',
    'path48': 'Hollywood',
    'path49': 'Griffith Park & Los Feliz',
    'path50': 'Atwater Village',
    'path51': 'Frog Town',
    'path52': 'Bererly Hills',
    'path54': 'Mid City',
    'path55': 'Bel-Air',
    'path58': 'Pacific Palisades',
    'path59': 'Santa Monica',
    'path60': 'Sawtelle',
    'path62': 'Venice',
    'path63': 'Mar Vista',
    'path64': 'Playa Vista',
    'path66': 'Playa del Rey',
    'path68': 'Culver City',
    'path69': 'Palms',
    'path70': 'Baldwin Hills',
    'path73': 'Midshire',
    'path76': 'Silver Lake',
    'path77': 'Glassel Park',
    'path79': 'Cypress Park',
    'path80': 'Highland Park',
    'path81': 'Eagle Rock',
    'path82': 'Lincoln Heights',
    'path83': 'El Sereno',
    'path84': 'Boyle Heights',
    'path85': 'Central City East',
    'path86': 'DownTown Los Angeles',
    'path87': 'South East Los Angeles',
    'path88': 'South Los Angeles',    
    'path89': 'Watts',
}
descriptions = {
    "West Hills": "West Hills is where suburbia meets the edge of the San Fernando Valley, offering residents both tranquility and a hint of wildness with the nearby Santa Susana Mountains. It's a place where you can enjoy a quiet life and still be close enough to spot the occasional coyote crossing the road. Locals boast about their proximity to hiking trails, making weekend adventures a neighborhood staple.",
    "Chatsworth": "Chatsworth, known for its rocky landscapes and historic landmarks, is the hidden gem of the Valley, where the Old West meets modern suburbia. It's the only place where you might bump into a movie star hiking up the same scenic trails you're exploring. With its equestrian roots and sprawling ranch-style homes, it's LA's nod to country living.",
    "Porter Ranch": "Porter Ranch sits high and mighty in the northern reaches of the Valley, where the views are as expansive as the real estate. Known for its upscale shopping and pristine parks, it's a neighborhood that balances luxury with a laid-back vibe. The windmills on the hills serve as both a landmark and a conversation starter among locals.",
    "Granada Hills": "Granada Hills is the Valley's best-kept secret, with its wide, leafy streets and mid-century charm. It's the perfect mix of suburban tranquility and a dash of local flair, known for its annual Granada Hills Street Fair. Local pride runs deep, especially when discussing the great schools and the hometown feel of its bustling small businesses.",
    "Symlar": "Sylmar, the northern gateway to Los Angeles, boasts a rich history of olive orchards and a community as warm as its sunny skies. Known for its equestrian lifestyle and mountain views, it's where the urban meets the rural in perfect harmony. Locals will tell you that the secret to Sylmar's charm is its tight-knit community and endless outdoor activities.",
    "North Hills": "North Hills, a slice of classic Valley life, is where diversity thrives and history runs deep. Once an agricultural haven, it now mixes the old with the new, featuring vintage homes and modern developments. Locals enjoy the blend of mom-and-pop shops and the ease of freeway access, making every commute a little less daunting.",
    "San Fernando": "San Fernando, the Valley's only city within a city, prides itself on its rich cultural heritage and small-town atmosphere. Known for its historic downtown and vibrant fiestas, it's a hub of community spirit. Locals here revel in their unique blend of city governance and close-knit community vibes.",
    "Pacoima": "Pacoima, the cultural heart of the Valley, pulsates with artistic flair and historical significance. Known for its murals and the birthplace of Richie Valens, it's a neighborhood that embraces its roots with vibrant pride. Locals will tell you that Pacoima's soul lies in its resilient community and the ever-present sound of mariachi music.",
    "Arleta": "Arleta, a quiet gem in the northeast Valley, offers a suburban retreat with a touch of rustic charm. Known for its tree-lined streets and family-friendly parks, it's a place where neighbors still know each other's names. Locals cherish the sense of community and the nostalgia of simpler times.",
    "Panorama City": "Panorama City, the melting pot of the Valley, thrives on diversity and a bustling urban spirit. Known for its shopping centers and vibrant marketplaces, it's a neighborhood that never sleeps. Locals appreciate the blend of cultures and the ever-evolving food scene that makes every meal an adventure.",
    "Van Nuys": "Van Nuys, the heart of the Valley, beats with a rhythm of urban hustle and suburban charm. Known for its bustling civic center and historic airport, it's a place where every street tells a story. Locals take pride in their central location, making it the unofficial crossroads of the Valley.",
    "Woodland Hills": "Woodland Hills, nestled against the Santa Monica Mountains, offers upscale living with a side of nature. Known for its scenic drives and shopping at The Village, it's a place where luxury meets laid-back California cool. Locals will tell you the secret to Woodland Hills' appeal is its perfect blend of city and wilderness.",
    "Tarzana": "Tarzana, named after the legendary jungle hero, swings between suburban comfort and exotic charm. Known for its lush landscapes and diverse dining options, it's a neighborhood where adventure is just around the corner. Locals love to brag about their connection to Edgar Rice Burroughs and the quiet, leafy streets.",
    "Echino": "Encino, the Valley's posh retreat, is where luxury living meets suburban serenity. Known for its sprawling estates and the famous Encino Commons, it's a place that exudes sophistication. Locals enjoy the high-end boutiques and the sense of escape just minutes from the city hustle.",
    "Sherman Oaks": "Sherman Oaks, the Valley's blend of urban sophistication and suburban ease, is where trendsetters and families coexist in harmony. Known for its vibrant Ventura Boulevard and chic shopping spots, it's a place that balances glitz with a friendly neighborhood vibe. Locals pride themselves on their stylish surroundings and the hidden gems around every corner.",
    "Valley Glen": "Valley Glen, the Valley's best-kept secret, is a haven of mid-century homes and leafy streets. Known for its diverse community and the iconic Great Wall of Los Angeles mural, it's a neighborhood that embraces its artistic roots. Locals love the quiet charm and the sense of community that makes it feel like home.",
    "North Hollywood": "North Hollywood, or NoHo as the locals call it, is the Valley's artsy enclave, brimming with creativity and character. Known for its eclectic mix of theaters, galleries, and trendy cafes, it's a neighborhood that never ceases to inspire. Locals thrive on the vibrant energy and the endless artistic endeavors.",
    "Sun Valley": "Sun Valley, the Valley's sunny spot, is where industrial meets residential in a seamless blend. Known for its auto shops and scenic parks, it's a neighborhood that wears its work ethic on its sleeve. Locals enjoy the down-to-earth vibe and the stunning views of the Verdugo Mountains.",
    "Shadow Hills": "Shadow Hills, the Valley's equestrian paradise, offers rural living with city convenience. Known for its horse trails and expansive properties, it's a place where the Wild West spirit still roams free. Locals take pride in their pastoral lifestyle and the sense of escape just minutes from the urban sprawl.",
    "Tujunja": "Tujunga, nestled in the foothills, is the Valley's rustic retreat, offering a tranquil escape from city life. Known for its stunning mountain views and small-town charm, it's a place where nature and community thrive. Locals cherish the peace and quiet, along with the rich history that dates back to its days as a health resort.",
    "Burbank": "Burbank, the media capital of the world, is where Hollywood dreams take flight and creativity knows no bounds. Known for its major studios and charming downtown, it's a place that balances glitz with a hometown feel. Locals revel in the behind-the-scenes magic and the vibrant community spirit.",
    "Lakeview Terrace": "Lakeview Terrace, a blend of suburban serenity and equestrian lifestyle, offers a peaceful retreat with stunning mountain vistas. Known for its equestrian centers and recreational parks, it's a neighborhood where outdoor living is a way of life. Locals enjoy the tranquility and the sense of space just a stone's throw from the city.",
    "Toluca Lake": "Toluca Lake, where the stars reside and the lake glistens, is the Valley's upscale enclave. Known for its celebrity residents and picturesque streets, it's a neighborhood that epitomizes elegance. Locals take pride in their pristine surroundings and the community's storied Hollywood history.",
    "Hollywood": "Hollywood, the iconic heart of the entertainment world, pulsates with glamour and endless dreams. Known for its historic landmarks and bustling nightlife, it's a neighborhood where the stars shine bright, both on and off the screen. Locals embrace the hustle and bustle, always ready for their close-up.",
    "Griffith Park & Los Feliz": "Griffith Park and Los Feliz, where nature and bohemian vibes collide, offer a perfect blend of urban and natural beauty. Known for the Griffith Observatory and hipster hangouts, it's a neighborhood that caters to both adventurers and creatives. Locals cherish the panoramic views and the eclectic charm that makes every day feel like an escape.",
    "Atwater Village": "Atwater Village, a riverside gem, blends small-town charm with urban chic in perfect harmony. Known for its indie shops and cozy cafes, it's a neighborhood where creativity and community thrive. Locals love the walkable streets and the ever-present sense of discovery.",
    "Frog Town": "Frog Town, officially known as Elysian Valley, hops to the beat of its own drum with an artistic flair. Known for its vibrant street art and proximity to the LA River, it's a neighborhood that celebrates its quirky charm. Locals delight in the unique blend of urban and natural elements that make it a hidden gem.",
    "Beverly Hills": "Beverly Hills, where luxury meets legacy, is the epitome of opulence and iconic glamour. Known for its world-renowned shopping on Rodeo Drive and star-studded residents, it's a neighborhood that sets the standard for elegance. Locals revel in the manicured streets and the timeless allure that draws visitors from around the globe.",
    "Mid City": "Mid City, the eclectic heart of LA, offers a melting pot of cultures and a pulse of urban energy. Known for its diverse dining scene and historic architecture, it's a neighborhood that embraces its vibrant mix. Locals thrive on the sense of community and the endless exploration opportunities.",
    "Bel-Air": "Bel-Air, the pinnacle of prestige, is where grand estates and celebrity mansions nestle in lush, secluded hills. Known for its exclusivity and timeless luxury, it's a neighborhood that exudes sophistication. Locals enjoy the serene privacy and the whispers of Hollywood history that echo through its canyons.",
    "Pacific Palisades": "Pacific Palisades, where the mountains meet the sea, offers a tranquil coastal retreat with an air of sophistication. Known for its stunning ocean views and charming village atmosphere, it's a neighborhood that balances nature and luxury. Locals cherish the breathtaking scenery and the tight-knit community feel.",
    "Santa Monica": "Santa Monica, the quintessential beach town, is where sun, sand, and sophistication blend seamlessly. Known for its iconic pier and vibrant Third Street Promenade, it's a place that epitomizes California cool. Locals bask in the coastal lifestyle and the ever-present ocean breeze.",
    "Sawtelle": "Sawtelle, the Little Osaka of LA, is a culinary hotspot and cultural hub rolled into one. Known for its ramen shops and trendy boutiques, it's a neighborhood that tantalizes the senses. Locals revel in the fusion of flavors and the vibrant street life that make every visit an adventure.",
    "Venice": "Venice, where bohemian spirit meets beachside bliss, is the playground for artists and free spirits alike. Known for its eclectic boardwalk and vibrant canals, it's a neighborhood that celebrates creativity and individuality. Locals embrace the laid-back vibe and the ever-present sense of inspiration.",
    "Mar Vista": "Mar Vista, the Westside's hidden treasure, offers a laid-back vibe with a touch of mid-century charm. Known for its farmers markets and tree-lined streets, it's a neighborhood where community and creativity flourish. Locals love the relaxed atmosphere and the endless opportunities for local exploration.",
    "Playa Vista": "Playa Vista, the Silicon Beach hub, blends cutting-edge innovation with coastal charm. Known for its tech campuses and modern amenities, it's a neighborhood that caters to the entrepreneurial spirit. Locals enjoy the sleek, walkable streets and the sense of being at the forefront of LA's tech scene.",
    "Playa del Rey": "Playa del Rey, the laid-back beach enclave, offers a serene coastal escape with a touch of vintage charm. Known for its quiet beaches and cozy cafes, it's a neighborhood where the ocean breeze is a constant companion. Locals cherish the relaxed pace and the hidden gems that make it feel like a seaside secret.",
    "Culver City": "Culver City, the cinematic heart of LA, pulses with creativity and a rich film history. Known for its vibrant arts scene and historic studios, it's a neighborhood that blends the past with the present. Locals take pride in the bustling downtown and the endless cultural offerings that keep the spirit of Hollywood alive.",
    "Palms": "Palms, the Westside's urban village, offers a mix of city convenience and neighborhood charm. Known for its diverse population and eclectic dining options, it's a place where every street feels like a new discovery. Locals love the central location and the vibrant community that makes it a dynamic place to call home.",
    "Baldwin Hills": "Baldwin Hills, perched above the city, offers sweeping views and a rich cultural legacy. Known for its mid-century homes and expansive parks, it's a neighborhood that balances history with modern living. Locals take pride in the stunning vistas and the sense of community that defines the area.",
    "Midshire": "Mid-Wilshire, or 'Midshire' as some locals call it, is the cultural crossroads of LA, where history and modernity collide. Known for its iconic Miracle Mile and the bustling Museum Row, it's a neighborhood that never stands still. Locals enjoy the blend of historic charm and contemporary flair that makes it uniquely vibrant.",
    "Silver Lake": "Silver Lake, the hipster haven of LA, is where indie spirit and urban chic meet in perfect harmony. Known for its trendy boutiques and the iconic reservoir, it's a neighborhood that pulses with creativity. Locals revel in the eclectic vibe and the endless possibilities for artistic expression.",
    "Glassel Park": "Glassell Park, the hidden gem of Northeast LA, offers hillside views and a burgeoning arts scene. Known for its tight-knit community and eclectic homes, it's a neighborhood that balances charm with a touch of grit. Locals love the sense of discovery and the ever-evolving landscape that makes it uniquely vibrant.",
    "Cypress Park": "Cypress Park, the up-and-coming star of the Eastside, blends historic charm with a modern twist. Known for its scenic views of the LA River and the vibrant community spirit, it's a neighborhood that's on the rise. Locals appreciate the sense of history and the exciting growth that makes it a place to watch.",
    "Highland Park": "Highland Park, the historic heart of Northeast LA, pulses with artistic energy and cultural richness. Known for its vintage shops and vibrant street art, it's a neighborhood that celebrates its diverse heritage. Locals thrive on the eclectic mix and the sense of community that makes it a true LA treasure.",
    "Eagle Rock": "Eagle Rock, the eclectic enclave of the Eastside, offers a blend of suburban charm and urban flair. Known for its historic bungalows and trendy eateries, it's a neighborhood where every corner tells a story. Locals take pride in the creative spirit and the strong sense of community that define the area.",
    "Lincoln Heights": "Lincoln Heights, one of LA's oldest neighborhoods, exudes historic charm and a vibrant community spirit. Known for its cultural landmarks and scenic views, it's a place where history and modernity coexist. Locals cherish the rich heritage and the ever-present sense of belonging that defines the neighborhood.",
    "El Sereno": "El Sereno, the serene gem of East LA, offers a peaceful retreat with a touch of urban grit. Known for its hilly landscapes and diverse community, it's a neighborhood that balances tranquility with a vibrant local culture. Locals appreciate the quiet charm and the strong sense of community that make it feel like home.",
    "Boyle Heights": "Boyle Heights, the cultural heart of East LA, pulses with vibrant energy and deep-rooted traditions. Known for its rich history and lively street festivals, it's a neighborhood that celebrates its Latino heritage with pride. Locals revel in the strong community ties and the ever-present sense of resilience that defines the area.",
    "Central City East": "Central City East, better known as Skid Row, is the epicenter of LA's ongoing struggle with homelessness and urban challenges. Known for its stark contrasts and the efforts to uplift its residents, it's a neighborhood that sparks important conversations. Locals and advocates work tirelessly to bring hope and change to this complex part of the city.",
    "Downtown Los Angeles": "Downtown Los Angeles, the urban core of the city, pulses with energy and endless possibilities. Known for its skyscrapers and cultural hotspots, it's a place where history and innovation collide. Locals thrive on the dynamic atmosphere and the sense of being at the center of it all.",
    "South East Los Angeles": "Southeast LA, a mosaic of diverse neighborhoods, offers a rich cultural tapestry and a resilient spirit. Known for its tight-knit communities and vibrant street life, it's an area that thrives on its deep-rooted connections. Locals take pride in their heritage and the sense of unity that defines the region.",
    "South Los Angeles": "South Los Angeles, a community with a storied past, balances struggles and triumphs with a strong sense of resilience. Known for its cultural landmarks and vibrant neighborhoods, it's an area that embodies the spirit of perseverance. Locals work towards progress while honoring the rich history that defines South LA.",
    "Watts": "Watts, a neighborhood with a profound history, is known for its cultural resilience and iconic landmarks. Known for the Watts Towers and a rich legacy of activism, it's a place where art and community intersect. Locals take pride in their history and the ongoing efforts to uplift and transform the neighborhood."
}
