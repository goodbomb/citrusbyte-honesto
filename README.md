# CitrusByte - Honesto Mock Project

App Deployed to: https://immense-brushlands-71606.herokuapp.com/

> Please note:
> - Heroku can take a bit of time to spin up since I'm using a free development account.
> - If you have previously visited this app, it is recommended to **delete your Local Storage** to avoid any data integrity issues.
> - Recommended browser for viewing the app: **Chrome**

## What was completed
- Seed Data stored in a .js file, then parsed into JSON and stored in Local Storage.
    - All Data Mutations were stored in local storage, following a pattern of "immutability".
- Login Page (simple simulated "Login" button, with no forms). This was used to bootstrap the seed data.
- The Nav Bar (including the "Log Out" button).
- The "Share Feedback" page.
- The Feedback "wizard", with 3 question types:
    - Multiple Choice (with 3 options)
    - Rank Score (scale of 1-10)
        - Hover styles properly update even after making your selection.
    - Free Form text entry
- The progress through the wizard is saved to localStorage.
    - If you start a form, leave the wizard part way through, then click on "Fill Out" again, it will take you to the last slide you were on.
- The "Thank You" page at the end of the feedback wizard.
- Your feedback is saved and properly retrieved from Local Storage.
    - When you finish giving feedback to a team member, that member's button changes to "View Submission" on the "Share Feedback" page.
- The "My Feedback" page, with limited functionality and styles.

## What was immediately de-scoped due to time constraints
These were elements / features that I immediately opted to remove from my development scope, as they are not critical to the functionality of the user flow.

- Logging in through google
- The "Unknown" font-family
- The "Feedback period" filter on the Share Feedback page
- The "Next Feedback Cycle" in the header. It is visualy there, but static.
- The "notification" numbers above the "Share Feedback" and "My Feedback" navbar options.
- The "No Feedback to Display" view
    - Since we're using seed data, this view would never be visible anyway.
- The "Back" button in the Feedback wizard.
- The "Progress Bar", "Star Rating", and "Flag" pieces of the feedback wizard.
- The "Skip" button in the feedback wizard.
- The "Feedback Period" filter on the My Feedback page.
- The "Publish Feedback" button.
- The "New" tag next to team members on the My Feedback page.
- The different styles of feedback bars.
    - Limited the scope to: Rank 1-10, Multiple Choice, and Free Form.
- The 404 page
- The loading mockups

## What could not be completed in time
- Creating separate "My Feedback" pages (one for Feedback Given and one for Feedback Received)
- Ran out of time with the "My Feedback" page. With another hour or two, it could have been completed based on my original scope.


## What I would have done with 1 week
- Implement all of the de-scoped functionality from above.
- Add unit tests using Jest and Enzyme.
- Polish the "My Feedback" page, creating separate views for "Given Feedback" and "Feedback Received"
- Implement a rudamentary API for data persistence
- Utilize Redux for the data store instead of localStorage
- More up-front planning and architectural design. With the time constraints, I didn't really have time to plan everything out well.

## What I would do differently if I did this again
- Implement each user flow immediately, with hard coded data first, and very little styling. Get the critical functionality working first, then add details and styles. I realized pretty quickly that I was wasting too much time in the beginning with making the app presentable, when I should have really been focused on the core functionality. It's been a while since I've had to "hack" an app together fast like this. I've been used to having time to architect a solution before building it.
