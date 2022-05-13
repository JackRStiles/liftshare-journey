# Liftshare Journey App
This application was built as part of a technical task for [Liftshare](https://liftshare.com/). I only had a few evenings to work on it, and it was my first time using Vue which made it a challenge.

## Improvements
Given the time, these are a few improvements I would make to the application to make it better.
- Stop the map re-rendering every time the state / store changes
- Add validation to the fields
- Add a display of the journeys total miles
- Make better use of components

## Warning From The Developer
For this to work you'll need a valid Google Maps API script tag in the index.html file. It will need to have an API key set up to use the Directions, Maps, and Places APIs or use the script tag provided by me if you have received one.

The tag itself should look like this:
```
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR-API-KEY-HERE&libraries=places"></script>
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
