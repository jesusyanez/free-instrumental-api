# Key Features
1. YouTube metadata scraping (w/o YouTube API)
2. Next.js API w/ Serverless Functions


### Stack
- JavaScript
- Node
- ~~Express~~
- Next.js

## Scraper
- Scrapes youtube search for metadata and creates a JSON file.
- Made an artists array and looped the script to search for each array item, so I would get one final array.
- Quality Control: Filtered to only save data for videos over 30k views.
- Variety: Right now the data includes metadata of 850+ YouTube videos (30+ artists).

## API
- Has one endpoint which returns a random object.
- Used it for my [free rap beat app](https://rapgelo.vercel.app/)
- At first I made it with TypeScript and Express.
- Changed it to a Next.js API to utilize Serverless Functions on Vercel.com

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
- [X] Create Rest API that sends random video metadata object
- [ ] Automate scraper with cronjob maybe
- [ ] Add custom queries: 
    - [ ] Genres: Trap, Hyperpop, Dark
    - [ ] Artists
- [ ] Clean up scraped data to reduce API bandwidth & response times 
