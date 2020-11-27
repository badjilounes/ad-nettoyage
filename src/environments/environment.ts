// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  mail: {
    from: 'lounesbadji@gmail.com',
    host: 'smtp.elasticemail.com',
    password: '3508ECE10562B3A27D620339EE05BD98BC2B',
    to: 'lounesbadji@gmail.com',
    username: 'lounesbadji@gmail.com',
  },
  production: false,
  theme: 'purple-green',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
