# Free Instrumental API

<p>It's free so anyone that is learning or is into really into music can use it.</p>
<p>I hope you have fun & make something cool.</p>
</br>
<a href="https://instrumental.vercel.app/">
  <p>Demo</p>
 </a>

## Example
### Endpoint
```
/api/beats
```
### GET Request
```
https://free-rap-beat-api.vercel.app/api/beats
```
### Response

```
{
  "0": {
    "description": "",
    "duration": 132000,
    "duration_raw": "2:12",
    "uploaded": "11 months ago",
    "views": 1044475,
    "channel": {
      "name": "ODDstatus",
      "link": "https://www.youtube.com/channel/UCgIXpunYoqLMyZiPjyPwr6A",
      "verified": false
    },
    "id": "GSb3JGYSEI4",
    "link": "https://www.youtube.com/watch?v=GSb3JGYSEI4",
    "thumbnail": "https://i.ytimg.com/vi/GSb3JGYSEI4/maxresdefault.jpg",
    "title": "[FREE] JID Type Beat \"The Recreation\"",
    "shareLink": "https://youtu.be/GSb3JGYSEI4"
  }
}

```

## How to use
1. Send GET/fetch request to https://free-rap-beat-api.vercel.app/api/beats

2. Use reponse in app

## To-Do
- I plan on adding more routes and queries
- Clean up data to reduce response time
