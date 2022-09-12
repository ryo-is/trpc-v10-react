# Client App

Client App is import remote enrty files.

## Setup

1. install modules

```
$ npm i
```

2. make `.env.local`

```
$ cp .env.sample .env.local
```

3. write remoteEntry.js path in `.env.local`

```.env.local
VITE_REMOTE_EXTARNAL_URL=https://example.com/remoteEntry.js
```

4. serve application

```
$ npm run dev
```

5. open `localhost:5173` in browser
