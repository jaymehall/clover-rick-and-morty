## What architectural decisions did you make and why? Elaborate on strengths and weaknesses.

- For the creation of the app I used create-react-app so that I could get the project running as quickly as possible. I understand that because of its ease of use there is a lot of abstraction and may add unnecessary dependencies.

- For state management I used the Context API for scalability and readability. I created a custom hook in order to retrieve the location of the character with the characterId being passed in. In my custom hook and context I also created a cache so that I wouldn't have to hit the endpoint if it was already in the cache, for performance and in the event the server had rate limiting. The disadvantages to using the Context API in this project is that it is unnecessary because of how simple the application is. There aren't a lot of components so prop drilling wouldn't be an issue.

- I organized my components by functionality and wherever possible I made components dumb/stateless. Ideally my components are only responsible for doing one thing. If at any point within a component I was conditionally rendering something, I take a step back and see it would make more sense to have it's own component for readability. The drawback to this approach would mean that there would be a lot of components.

- I used react-router-dom for my routes. I know that react-router-dom is widely supported and used which was drove my decision for using it. Since there are really only 2 routes for this application, using react-router-dom is likely not necessary and costs extra overhead to use.

## How did you handle error cases? Eg: botched response, no response, etc.

- I created an error state for every API call. If the return status was 400 or greater then I would set the error state and render that using a error component.

## How did you test the app?

- I used react testing library to test CharacterLocation component to ensure that the correct data was being displayed through the props.
- For the majority of my components I manually tested.

## What third party libraries/ external code snippets did you use, if any?

- react-router-dom and mui

## If you had more time, what would you have done differently?

- I would have setup more tests for every component, primarily my CharactersProvider and the useCharacterLocation hook.

- The styling currently is very objective and lacks visual aesthetics, if more time was given I would have requested a spec so that I could model the app after that.
