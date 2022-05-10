# Free Rap Beat API
A free API that returns YouTube rap beats.

## About
I made this for my random instrumental website.
For those "give me a beat" moments.

<p>I made it free so anyone that is learning can use it. I hope you have fun & make something cool.</p>



## Example
### Request
https://free-rap-beat-api.vercel.app/api/beats

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
