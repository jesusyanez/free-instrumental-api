# About

<p>This api serves randomly selected youtube video metadata. Right now it is comprised of 850+ videos whose metadata was collected from YouTube using a scraping script. The script searches for certain keywords, with "type beat" appended to the end of each, and filters video results to only store metadata on videos that are over a certain view count, such as 30k views.</p>
<p>I used the api to make a random rap beat generator app.</p>
</br>
<a href="https://free-instrumental-api.vercel.app/api/beats">
  <p>API Link (reload for new random query)</p>
 </a>

## Usage
### HTTPS
```
GET https://free-instrumental-api.vercel.app/api/beats
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
- [X] Scrape Youtube search results
  - [X] Use requests
  - [X] No Google/YouTube API
- [X] Create Rest API that sends random metadata(video) object
- [ ] Automate scraper with cronjob
- [ ] Add custom queries: 
    - [ ] Genre: Trap, Hyperpop, Dark
- [ ] Clean up scraped data to reduce bandwidth & response times 
