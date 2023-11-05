import React  from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const TollywoodMovie = () => {
  const tollywoodMovies202= [
      
    // Add more movie entries as needed
    {
      "movieTitle": "Shyam Singha Roy",
      "releaseYear": 2023 ,
      "directors": ["Sandeep Reddy Vanga"],
      "producers": ["N. N. Venkatesh"],
      "actors": [
        {
          "name": "Nani",
          "character": "Shyam Singha Roy"
        },
        {
          "name": "Krithi Shetty",
          "character": "Name of Character"
        }
      ],
      "genre": ["Drama", "Fantasy"],
      "plot": "Shyam Singha Roy is a story of a man and his quest to rediscover his roots and understand the folklore of a Bengal village, with a touch of fantasy.",
      "posterUrl": "https://dhruvam.files.wordpress.com/2021/12/shyam-singha-roy-movie-review.jpeg",
      "trailerUrl": "https://www.youtube.com/watch?v=QliDRYaknmI&pp=ygUhc2h5YW0gc2luZ2hhIHJveSBtb3ZpZSB0cmFpbGVyIDRr",
      "runtimeMinutes": 150,
      "ratings": {
        "IMDb": 7.6,
        "RottenTomatoes": 88,
        "Metacritic": 74
      },
      "boxOffice": {
        "budget": "$10 million",
        "gross": "$20 million"
      },
      "languages": ["Telugu"],
      "country": "India",
      "awards": ["Example Award 1", "Example Award 2"]
    },
    {
      "movieTitle": "Love Story",
      "releaseYear": 2022,
      "directors": ["Sekhar Kammula"],
      "producers": ["Narayandas Narang", "P. Ram Mohan Rao"],
      "actors": [
        {
          "name": "Naga Chaitanya",
          "character": "Revant"
        },
        {
          "name": "Sai Pallavi",
          "character": "Mounica"
        }
      ],
      "genre": ["Romance", "Drama"],
      "plot": "Love Story is a heartwarming tale of two individuals from contrasting backgrounds who meet and fall in love while pursuing their dreams in the city of Hyderabad.",
      "posterUrl": "https://cdn.gulte.com/wp-content/uploads/2021/07/Love-Story3.jpg",
      "trailerUrl": "https://example.com/love-story-trailer.mp4",
      "runtimeMinutes": 135,
      "ratings": {
        "IMDb": 7.9,
        "RottenTomatoes": 88,
        "Metacritic": 80
      },
      "boxOffice": {
        "budget": "$8 million",
        "gross": "$35 million"
      },
      "languages": ["Telugu"],
      "country": "India",
      "awards": ["Best Romantic Film Award"]
    },
    {
      "movieTitle": "Narappa",
      "releaseYear": 2021,
      "directors": ["Srikanth Addala"],
      "producers": ["Suresh Babu"],
      "actors": [
        {
          "name": "Venkatesh Daggubati",
          "character": "Narappa"
        },
        {
          "name": "Priyamani",
          "character": "Sundaramma"
        }
      ],
      "genre": ["Drama", "Action"],
      "plot": "Narappa is a remake of the Tamil film 'Asuran' and tells the story of a farmer who fights against the injustices done to his family by a wealthy landlord.",
      "posterUrl": "https://1.bp.blogspot.com/-cyjwWK0c4_s/YPWvC7cp4RI/AAAAAAAACQ4/OEhzFWg8AVA5OCak6LKMRdekBi0A5C0egCLcBGAsYHQ/s1280/IMG_20210719_222625_045.jpg",
      "trailerUrl": "https://example.com/narappa-trailer.mp4",
      "runtimeMinutes": 152,
      "ratings": {
        "IMDb": 8.1,
        "RottenTomatoes": 88,
        "Metacritic": 75
      },
      "boxOffice": {
        "budget": "$10 million",
        "gross": "$30 million"
      },
      "languages": ["Telugu"],
      "country": "India",
      "awards": ["National Film Award for Best Feature Film"]
    },
    {
      "movieTitle": "Vakeel Saab",
      "releaseYear": 2021,
      "directors": ["Venu Sriram"],
      "producers": ["Dil Raju", "Boney Kapoor"],
      "actors": [
        {
          "name": "Pawan Kalyan",
          "character": "Advocate Satyadev"
        },
        {
          "name": "Nivetha Thomas",
          "character": "Vemula Palak"
        }
      ],
      "genre": ["Drama", "Thriller"],
      "plot": "Vakeel Saab is a remake of the Hindi film 'Pink' and deals with the story of three young women who face a legal battle after a serious incident and the lawyer who fights for justice.",
      "posterUrl": "https://content.tupaki.com/twdata/2021/0421/reviews/Vakeel-Saab-1617955510-1374.jpg",
      "trailerUrl": "https://example.com/vakeel-saab-trailer.mp4",
      "runtimeMinutes": 154,
      "ratings": {
        "IMDb": 8.0,
        "RottenTomatoes": 87,
        "Metacritic": 73
      },
      "boxOffice": {
        "budget": "$12 million",
        "gross": "$40 million"
      },
      "languages": ["Telugu"],
      "country": "India",
      "awards": ["Nandi Award for Best Actor - Pawan Kalyan"]
    },
    {
      "movieTitle": "Aranya",
      "releaseYear": 2021,
      "directors": ["Prabhu Solomon"],
      "producers": ["Eros International"],
      "actors": [
        {
          "name": "Rana Daggubati",
          "character": "Aranya"
        },
        {
          "name": "Zoya Hussain",
          "character": "Character Name"
        }
      ],
      "genre": ["Adventure", "Drama"],
      "plot": "Aranya is a story about a man who forms a deep bond with elephants in the forests of India and becomes their protector. His mission is to save the elephants and their natural habitat from poachers and deforestation.",
      "posterUrl": "https://www.filmiforest.com/img/movies/4/aranya-photo-8.jpg",
      "trailerUrl": "https://example.com/aranya-trailer.mp4",
      "runtimeMinutes": 135,
      "ratings": {
        "IMDb": 7.4,
        "RottenTomatoes": 75,
        "Metacritic": 68
      },
      "boxOffice": {
        "budget": "$15 million",
        "gross": "$25 million"
      },
      "languages": ["Telugu", "Tamil", "Hindi"],
      "country": "India",
      "awards": ["National Film Award for Best Special Effects"]
    },
    {
      "movieTitle": "Adipurush",
      "releaseYear": 2023,
      "directors": ["Om Raut"],
      "producers": ["Bhushan Kumar", "Krishan Kumar", "Om Raut", "Prasad Sutar", "Rajesh Nair", "Vamsi Pramod"],
      "actors": [
        {
          "name": "Prabhas",
          "character": "Lord Rama"
        },
        {
          "name": "Kriti Sanon",
          "character": "Sita"
        },
        {
          "name": "Saif Ali Khan",
          "character": "Ravana"
        }
      ],
      "genre": ["Action", "Drama", "Fantasy"],
      "plot": "A retelling of the Hindu epic Ramayana, Adipurush tells the story of Lord Rama, who battles the demon king Ravana to rescue his wife, Sita.",
      "posterUrl": "https://th.bing.com/th/id/OIP.A8oN-BwlQTEQzSk_clWELQHaJQ?pid=ImgDet&rs=1",
      "trailerUrl": "https://example.com/adipurush-trailer.mp4",
      "runtimeMinutes": 160,
      "ratings": {
        "IMDb": 7.5,
        "RottenTomatoes": 80,
        "Metacritic": 70
      },
      "boxOffice": {
        "budget": "$400 million",
        "gross": "$600 million"
      },
      "languages": ["Telugu", "Hindi"],
      "country": "India",
      "awards": ["Filmfare Award for Best Film – Telugu", "Nandi Award for Best Feature Film – Telugu"]
    },
    {
      "movieTitle": "Vaarasudu",
      "releaseYear": 2023,
      "director": "Vamshi Paidipally",
      "producer": "Dil Raju",
      "actors": [
        {
          "name": "Vijay",
          "character": "Vijay"
        },
        {
          "name": "Rashmika Mandanna",
          "character": "Aadya"
        },
        {
          "name": "R. Sarathkumar",
          "character": "Rajendran"
        },
        {
          "name": "Prakash Raj",
          "character": "Jayaprakash"
        },
        {
          "name": "Shaam",
          "character": "Aditya"
        }
      ],
      "genre": ["Action", "Drama"],
      "plot": "Vijay, the son of a wealthy businessman, returns home after seven years to save his family from a business rival. He falls in love with Aadya, the daughter of his rival, and must choose between love and duty.",
      "posterUrl": "https://th.bing.com/th/id/OIP.8TNgfN8jxxiyb36baR5lyQHaJq?pid=ImgDet&rs=1",
      "trailerUrl": "https://example.com/vaarasudu-trailer.mp4",
      "runtimeMinutes": 150,
      "ratings": {
        "IMDb": 7.5,
        "RottenTomatoes": 80,
        "Metacritic": 70
      },
      "boxOffice": {
        "budget": "$100 million",
        "gross": "$200 million"
      },
      "languages": ["Telugu"],
      "country": "India",
      "awards": []
    },
    {
      "movieTitle": "Kushi",
      "releaseYear": 2023,
      "directors": ["Shiva Nirvana"],
      "producers": ["Mythri Movie Makers"],
      "actors": [
        {
          "name": "Vijay",
          "character": "Siva"
        },
        {
          "name": "Samantha Ruth Prabhu",
          "character": "Madhavi"
        }
      ],
      "genre": ["Romantic Comedy"],
      "plot": "A young man and woman fall in love, but their relationship is threatened by their social differences.",
      "posterUrl": "https://sensongsmp3.live/wp-content/uploads/2023/05/Kushi-2023-Telugu-Movie-Songs-Download-Vijay-Devarakonda-Samantha.jpg",
      "trailerUrl": "https://example.com/kushi-trailer.mp4",
      "runtimeMinutes": 120,
      "ratings": {
        "IMDb": "3/5",
        "RottenTomatoes": "N/A",
        "Metacritic": "N/A"
      },
      "boxOffice": {
        "budget": "N/A",
        "gross": "N/A"
      },
      "languages": ["Telugu"],
      "country": "India",
      "awards": []
    },
    {
"movieTitle": "Baby 2023",
"releaseYear": 2023,
"directors": ["Sai Rajesh Neelam"],
"producers": ["SKN"],
"actors": [
{
"name": "Anand Deverakonda",
"character": "Anand"
},
{
"name": "Vaishnavi Chaitanya",
"character": "Vaishnavi "
}
],
"genre": ["Comedy", "Drama"],
"plot": "Anand and Vaishnavi are neighours and high school students, who live in a slum in Hyderabad. Vaishnavi has a crush on Anand.",
"posterUrl": "https://content.tupaki.com/en/feeds/2023/07/23/133893-b.jpg",
"trailerUrl": "https://example.com/baby-2023-trailer.mp4",
"runtimeMinutes": 130,
"ratings": {
"IMDb": 3,
"RottenTomatoes": 0,
"Metacritic": 0
},
"boxOffice": {
"budget": "₹10 croren",
"gross": "₹90 crore"
},
"languages": ["Telugu"],
"country": "India",
"awards": []
},

{
  "movieTitle": "Pushpa: The Rise - Part 1",
  "releaseYear": 2021,
  "directors": ["Sukumar"],
  "producers": ["Naveen Yerneni", "Ravi Shankar Yalamanchili"],
  "actors": [
    {
      "name": "Allu Arjun",
      "character": "Pushpa Raj"
    },
    {
      "name": "Rashmika Mandanna",
      "character": "Srivalli"
    }
  ],
  "genre": ["Action", "Thriller"],
  "plot": "Pushpa: The Rise is an action thriller that follows the story of Pushpa Raj, a red sandalwood smuggler, and his life in the forests of Andhra Pradesh.",
  "posterUrl": "https://th.bing.com/th/id/OIP.GWhTg6VoA9v5ZssHwU5EEwAAAA?pid=ImgDet&rs=1",
  "trailerUrl": "https://example.com/pushpa-1-trailer.mp4",
  "runtimeMinutes": 153,
  "languages": ["Telugu"],
  "country": "India",
  "ratings": {
    "IMDb": 8.1,
    "RottenTomatoes": 80,
    "Metacritic": 70
  },
},{
  "movieTitle": "Most Eligible Bachelor",
  "releaseYear": 2021,
  "directors": ["Bhaskar"],
  "producers": ["Allu Aravind", "Bunny Vas"],
  "actors": [
    {
      "name": "Akhil Akkineni",
      "character": "Name of Character"
    },
    {
      "name": "Pooja Hegde",
      "character": "Name of Character"
    }
  ],
  "genre": ["Romantic Comedy"],
  "plot": "Most Eligible Bachelor is a romantic comedy that explores the modern dating world and relationships, focusing on the journey of a young man and woman in search of their life partners.",
  "posterUrl": "https://1.bp.blogspot.com/-rtb-g5zHaLg/YWlPW-cfoFI/AAAAAAAAJqs/LSVCGjOlz642aQuEOBt0L1ColZA7yghbQCLcBGAsYHQ/s696/Most-Eligible-Bachelor.jpg",
  "trailerUrl": "https://example.com/most-eligible-bachelor-trailer.mp4",
  "runtimeMinutes": 150,
  "languages": ["Telugu"],
  "country": "India",
  "ratings": {
    "IMDb": 7.1
  }
  
},
{
  "movieTitle": "Maestro",
  "releaseYear": 2021,
  "directors": ["Merlapaka Gandhi"],
  "producers": ["Sudheer Babu"],
  "actors": [
    {
      "name": "Nithiin",
      "character": "Name of Character"
    },
    {
      "name": "Nabha Natesh",
      "character": "Name of Character"
    }
  ],
  "genre": ["Crime", "Comedy"],
  "plot": "Maestro is a crime-comedy film centered around a man who gets embroiled in a murder investigation and how he uses his wits and humor to navigate through the chaos.",
  "posterUrl": "https://www.telugubulletin.com/wp-content/uploads/2021/09/Maestro-Movie-Review-and-Rating.jpeg",
  "trailerUrl": "https://example.com/maestro-trailer.mp4",
  "runtimeMinutes": 140,
  "languages": ["Telugu"],
  "country": "India",
  "ratings": {
    "IMDb": 7.1
  },
},

{
  "movieTitle": "Bimbisara",
  "releaseYear": 2022,
  "directors": ["Vassishta"],
  "producers": ["Hari Krishna K"],
  "actors": [
    {
      "name": "Kalyan Ram Nandamuri",
      "character": "Bimbisara"
    },
    {
      "name": "Catherine Tresa",
      "character": "Vyjayanti"
    },
    {
      "name": "Samyuktha Menon",
      "character": "Iravathi"
    }
  ],
  "genre": ["Action", "Fantasy"],
  "plot": "A powerful king from the ancient past is transported to the present day, where he must find a way to adapt to his new surroundings and defeat a new enemy.",
  "posterUrl": "https://cdn.gulte.com/wp-content/uploads/2022/08/Bimbisara-US-Premieres.jpg",
  "trailerUrl": "https://example.com/bimbisara-trailer.mp4",
  "runtimeMinutes": 140,
  "ratings": {
    "IMDb": 7.2,
    "RottenTomatoes": 75,
    "Metacritic": 65
  },
  "boxOffice": {
    "budget": "$10 million",
    "gross": "$20 million"
  },
  "languages": ["Telugu"],
  "country": "India",
  "awards": []
},

{
  "movieTitle": "Sita Ramam",
  "releaseYear": 2022,
  "directors": ["Hanu Raghavapudi"],
  "producers": ["Swapna Dutt", "Ashwini Dutt"],
  "actors": [
    {
      "name": "Dulquer Salmaan",
      "character": "Lieutenant Ram"
    },
    {
      "name": "Mrunal Thakur",
      "character": "Sita Mahalakshmi"
    },
    {
      "name": "Rashmika Mandanna",
      "character": "Afreen"
    }
  ],
  "genre": ["Romance", "Drama", "War"],
  "plot": "The film tells the story of Lieutenant Ram, a Kashmiri Pandit soldier who falls in love with Sita Mahalakshmi, a Telugu woman, during the 1965 Indo-Pakistani War. The film also follows Afreen, a journalist who is tasked with finding Sita and delivering a letter to her from Ram.",
  "posterUrl": "https://www.mirchi9.com/wp-content/uploads/2022/08/Sita-Ramam-Telugu-Movie-Review.jpg",
  "trailerUrl": "https://example.com/sita-ramam-trailer.mp4",
  "runtimeMinutes": 160,
  "ratings": {
    "IMDb": 8.0,
    "RottenTomatoes": 90,
    "Metacritic": 75
  },
  "boxOffice": {
    "budget": "$12 million",
    "gross": "$24 million"
  },
  "languages": ["Telugu", "Tamil", "Malayalam"],
  "country": "India",
  "awards": ["Filmfare Award for Best Film – Telugu", "Nandi Award for Best Film"]
},
{
  "movieTitle": "RRR",
  "releaseYear": 2022,
  "directors": ["S. S. Rajamouli"],
  "producers": ["D. V. V. Danayya"],
  "actors": [
    {
      "name": "N. T. Rama Rao Jr.",
      "character": "Alluri Sitarama Raju"
    },
    {
      "name": "Ram Charan",
      "character": "Komaram Bheem"
    },
    {
      "name": "Alia Bhatt",
      "character": "Sita"
    },
    {
      "name": "Ajay Devgn",
      "character": "Gurunath Singh"
    }
  ],
  "genre": ["Action", "Adventure", "Historical Fiction"],
  "plot": "A fictional story about two Indian revolutionaries, Alluri Sitarama Raju (N. T. Rama Rao Jr.) and Komaram Bheem (Ram Charan), who fought against the British Raj and the Nizam of Hyderabad, respectively.",
  "posterUrl": "https://tsdcovers.files.wordpress.com/2022/07/rrr-v2.jpg?w=1200",
  "trailerUrl": "https://example.com/rrr-trailer.mp4",
  "runtimeMinutes": 180,
  "ratings": {
    "IMDb": 8.8,
    "Metacritic": 80
  },
  "boxOffice": {
    "budget": "$70 million",
    "gross": "$1 billion"
  },
  "languages": ["Telugu"],
  "country": "India",
  "awards": ["Golden Globe Award for Best Foreign Language Film", "Academy Award for Best Picture"]
},

{
  "movieTitle": "Major",
  "releaseYear": 2022,
  "directors": ["Sashi Kiran Tikka"],
  "producers": ["Sony Pictures Films India", "Mahesh Babu Entertainment"],
  "actors": [
    {
      "name": "Adivi Sesh",
      "character": "Major Sandeep Unnikrishnan"
    },
    {
      "name": "Sobhita Dhulipala",
      "character": "Pramoda"
    },
    {
      "name": "Saiee Manjrekar",
      "character": "Isha"
    }
  ],
  "genre": ["Action", "Biography"],
  "plot": "The film tells the story of Major Sandeep Unnikrishnan, an Indian Army officer who was martyred in the 2008 Mumbai attacks.",
  "posterUrl": "https://i.ytimg.com/vi/4SI-VHyNg6U/maxresdefault.jpg",
  "trailerUrl": "https://example.com/major-trailer.mp4",
  "runtimeMinutes": 143,
  "ratings": {
    "IMDb": 8.0,
    "RottenTomatoes": 90,
    "Metacritic": 75
  },
  "boxOffice": {
    "budget": "$12 million",
    "gross": "$24 million"
  },
  "languages": ["Telugu", "Hindi", "Malayalam"],
  "country": "India",
  "awards": ["National Film Award for Best Actor – Male (Special Mention)", "Filmfare Award for Best Actor – Telugu"]
},
{
  "movieTitle": "Bheemla Nayak",
  "releaseYear": 2022,
  "directors": ["Saagar K. Chandra"],
  "producers": ["Sithara Entertainments"],
  "actors": [
    {
      "name": "Pawan Kalyan",
      "character": "Bheemla Nayak"
    },
    {
      "name": "Rana Daggubati",
      "character": "Daniel Shekar"
    },
    {
      "name": "Nithya Menen",
      "character": "Saagar"
    }
  ],
  "genre": ["Action", "Drama"],
  "plot": "A remake of the Malayalam film Ayyappanum Koshiyum, Bheemla Nayak tells the story of two powerful men who clash, leading to a series of violent confrontations.",
  "posterUrl": "https://www.filmibeat.com/img/2021/12/bheemlanayak-1640067960.jpg",
  "trailerUrl": "https://example.com/bheemla-nayak-trailer.mp4",
  "runtimeMinutes": 158,
  "ratings": {
    "IMDb": 7.5,
    "RottenTomatoes": 80,
    "Metacritic": 70
  },
  "boxOffice": {
    "budget": "$10 million",
    "gross": "$20 million"
  },
  "languages": ["Telugu"],
  "country": "India",
  "awards": ["Filmfare Award for Best Actor – Telugu (Male)", "Nandi Award for Best Actor"]
},
{
  "movieTitle": "Dhamaka",
  "releaseYear": 2022,
  "directors": ["Trinadha Rao Nakkina"],
  "producers": ["People Media Factory", "Abhishek Agarwal Arts"],
  "actors": [
    {
      "name": "Ravi Teja",
      "character": "Swamy/Anand Chakravarty"
    },
    {
      "name": "Sreeleela",
      "character": "Pranavi"
    },
    {
      "name": "Jayaram",
      "character": "JP"
    },
    {
      "name": "Sachin Khedekar",
      "character": "Chakravarty"
    },
    {
      "name": "Tanikella Bharani",
      "character": "Swamy's father"
    },
    {
      "name": "Rao Ramesh",
      "character": "Minister"
    },
    {
      "name": "Chirag Jani",
      "character": "Swamy's friend"
    },
    {
      "name": "Ali",
      "character": "Swamy's boss"
    },
    {
      "name": "Praveen",
      "character": "Swamy's friend"
    }
  ],
  "genre": ["Action", "Comedy"],
  "plot": "A live news reporter finds himself in a hostage situation. He must use his wit and skills to save the hostages and expose a corrupt politician.",
  "posterUrl": "https://www.mirchi9.com/wp-content/uploads/2022/12/Dhamaka-2022-Telugu-Movie-Review.jpg",
  "trailerUrl": "https://example.com/dhamaka-trailer.mp4",
  "runtimeMinutes": 130,
  "ratings": {
    "IMDb": 7.5,
    "RottenTomatoes": 80,
    "Metacritic": 70
  },
  "boxOffice": {
    "budget": "₹70 crore",
    "gross": "₹108 crore"
  },
  "languages": ["Telugu"],
  "country": "India",
  "awards": []
},

    
  ]
  
  return (
    <div className="tollywoodMain">
        <div class="container py-4" >
    <div class="p-5 mb-4 bg-light rounded-3" id="bahubail">
      <div class="container-fluid py-5" >
        <h1 class="display-5 fw-bold" style={{color:'white'}}></h1>
        <div style={{ display: 'flex', justifyContent: 'center',alignItems:'baseline' }}>
       <img id="bahu"  data-aos="silde-up"  style={{ width: '50vw', height: '50vh', margin: 'auto' }} src="https://origin-staticv2.sonyliv.com/masthead_logo/5588907101001.png"/>
      </div><Link to="/Baahubali 2: The Conclusion"><button class="bn632-hover bn21">Play</button></Link></div>
    </div>
  </div>
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom" style={{ color: 'white' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
  <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
</svg> <span style={{color:'#49beb7'}}>TollyWood Show</span> 
      </h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {tollywoodMovies202.map((movie, index) => (
          <div id='tollywoodCard'  className="col" key={index} data-aos="fade-up">
            <Link style={{ textDecoration: 'none', }} to={`/${movie.movieTitle}`}>
              <div
                id={`tmovie${index}`}
                className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: `url(${movie.posterUrl})` }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3
                    id="movieTitle"
                    className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"
                    style={{ width: 'fit-content' }}
                  >
                    {movie.movieTitle}
                  </h3>
                  <ul id="Rating" style={{color:'#facf5a',fontWeight:'bold',backgroundColor:'black',width:'fit-content',padding:'5px',borderRadius:'8px'}} className="d-flex list-unstyled mt-auto">
  {movie && movie.ratings && movie.ratings.IMDb && (
    <li className="me-auto"  data-aos="zoom-in">IMDb Rating: <span style={{color:'#ff0000'}}>{movie.ratings.IMDb}</span></li>
  )}
  {/* Add the rest of your movie information here */}
</ul>



                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default TollywoodMovie;






