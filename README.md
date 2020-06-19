[Ipify](https://www.ipify.org/) clone deployed on [Vercel](https://vercel.com/)
---

Using the [request-ip](https://www.npmjs.com/package/request-ip) package to actually find the IP of the request.

Live example: [https://ripal.klmntn.com/](https://ripal.klmntn.com/)

Like [ipify.org](https://www.ipify.org/), there are three APIs provided:

1. Plaintext at `/api/text`
2. JSON at `/api/json`
3. JSONP (with custom defined callback) at `/api/jsonp/customCallbackName`

Examples
---

Curl:
```sh
$ curl https://ripal.klmntn.com/api/text
```

Wget:
```sh
$ wget -qO- https://ripal.klmntn.com/api/text
```

![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https%3A%2F%2Fgithub.com%2Fkallmanation%2Fripal)
