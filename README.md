# [FREE] Type Beat (YouTube) API

<p>It basically responds with youtube data of free type beats.</p>
<p>It allows you to make cool embeds on your site with the data.</p>
</br>
<a href="https://free-rap-beat-api.vercel.app/api/beats">
  <p>API Link (see what it does when you reload)</p>
 </a>
<a href="https://instrumental.vercel.app/">
  <p>Demo - Click the roll the dice button for a new beat</p>
 </a>

## Usage
### HTTPS
```
GET https://free-rap-beat-api.vercel.app/api/beats
```
### JSON Response

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

## To-Do
- Add Routes/queries: 
    - Genre: Trap, Hyperpop, Dark
    - Query later
- Clean up scraped data to reduce response ms
