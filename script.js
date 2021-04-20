function initVue() {

  var app = new Vue ({
   el: "#app",
   data: {
   startSearch: false,
   baseUrl: 'https://api.themoviedb.org/3/search/',
   api_key: "b61428b62e780cb1e4eaefa3361645e8",
   searchInput: '',
   resultsMovie: [],
   indexMovie: null,
   indexLanguage: 0,
   language: [
     "it-IT",
     "en-En",
     "es-ES",
     "de_DE"
   ],
   flags: [
     'it',
     'en',
     'ja',
     'es',
     'de',
    ]
   },
   methods: {
   searchFilm: function() {
     if (this.searchInput != "")  {
       axios.get(this.baseUrl + 'multi', {
         params: {
           api_key: this.api_key,
           query: this.searchInput,
           language: this.language[this.indexLanguage]
          }
        }).then( (risposta) => {
          this.resultsMovie = risposta.data.results;
          console.log(this.resultsMovie);
        });

        this.startSearch = true;
      }
    },
    containFilms: function (mediaType) {
      for (i = 0; i < this.resultsMovie.length; i++) {
        if (this.resultsMovie[i].media_type == mediaType) {
          return true;
        }
      }
      return false;
    }
   },

  });
}

function init() {
  initVue();
}
document.addEventListener("DOMContentLoaded", init);
