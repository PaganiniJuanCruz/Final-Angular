// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlMovieAPI: 'https://api.themoviedb.org/3/discover/movie?api_key=31071a84eb5283914ae9190214c1a7f4&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate',
  urlUsersAPI: 'https://61bcb895d8542f00178249b1.mockapi.io/api/persons',
  keyAPI:'?api_key=d3205dd298d1b900ec260c14e96e1d71',
  urlAPI: 'https://api.themoviedb.org/3/movie/',
  userRestApi: 'https://61cb6878194ffe0017788d45.mockapi.io/api',
  cartRestApi: 'http://localhost:3000/api/cart',
  apiRest: 'http://localhost:3000/api/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
