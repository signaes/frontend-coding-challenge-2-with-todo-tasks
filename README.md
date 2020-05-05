## Objective
We would like to see how someone works. Prefer to do things in a correct way over completing every task.

## General guidelines
- Time boxed: 120 minutes.
- Improve the existing single page application – it has 3 screens (Question Details, Question List, Create Question).
- Use the provided TODO list.
- The API is documented in: https://pollsapi.docs.apiary.io/.
- Feel free to improve or refactor, if you see the need for it.
- Write tests for what you find relevant.
- Style the UI as much as you want.

## TODO
### :beetle: Fix Bugs
- **Question Details**: When you vote the same choice by smashing the mouse button repeatedly, the vote count and percentage don’t consistently update in real time - they should.
- **Create Question**: When adding a new choice, it doesn’t appear in the list of choices.
### :alembic: Testing
- **Questions Loader**: Implement the tests predefined in `QuestionsLoader.test.js`.
### :nail_care: Styling
- **Questions List**: Turn question list into a grid layout.
### :sparkles: Improvements
- **Questions List**: Make *published_at* readable to humans.
- **Questions List**: Sort questions by published date, with new questions on the bottom.
- **Question List**: Improve the percentage precision to 2 decimal points.
### :gem: Feature
- **Create Question**: Finish implementing functionality of adding new question to the API.

## Wireframes
![Screen Shot 2018-06-26 at 12.51.19.png](https://i.imgur.com/P3z9J3x.png)
![Screen Shot 2018-06-26 at 12.48.01.png](https://i.imgur.com/MfOTP7x.png)
