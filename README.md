## Introduction

This app was built with the intention of developing an MVP for League of Legends players to look up their friends. Although it's been done before, I thought it would be cool to try to make another lookup app myself.

## What does the app do? 
Type in your or your friend's summoner name, and you'll be able to look at their rank, and win rate.
Alternatively, check the top 300 (Challenger) players in North America! :)

    
## Tech stack

   - React
   - Express(Node.js)
   - Riot Developer API

## Technical Challenges 

I anticipated having to research the Riot Developer API endpoints, but I didn't realize that the information I needed wouldn't be available from one request alone. Having to chain requests with information received from the past one was a new challenge for me with an unfamiliar API

## Example Uses

Search for a player!

![Search](https://media.giphy.com/media/VCmyJcxqHiNGgj1M3l/giphy.gif)

Check the top players

![Ladder](https://media.giphy.com/media/XejXrMC6NP8R5EiFQu/giphy.gif)


## Future ideas
 - Refactor the search function to get data before rendering the info component
 - Region Toggle (Currently NA only)
 - Champion Information
 - Apply for a permanent API key
 - Player Statistics by Champion 
    
