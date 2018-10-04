# ToDo

## Issues

- **heroku** - some things that work locally in **DEV** are not working in heroku **PROD**.  I suspect one culprit is breaking all of these.
  - `<a data-method="delete" href="/logout">Logout</a>` is doing `GET /logout`
  - **console** : Uncaught TypeError: Object.defineProperty called on non-object
      - application-302__44.js:704 =  Object.defineProperty(e, "__esModule", {
  - **Account dropdown menu** not working
    - deploying 'before-React' did not fix it
    - Uncaught TypeError: Cannot read property 'exclude' of undefined
      - y.matches() @ application-a97__da10.js:formatted:37 =  return null != e.exclude ? n.call(t, e.selector) && !n.call(t, e.exclude) : n.call(t, e)
      - anonymous @ application-a97__da10.js:formatted:128 =  for (e = t.target; e instanceof Element && !o(e, n); )
  - **jQuery** not working in /app/javascript/components (first occurrence in Main.js React Component)
  - **js-Routes** not working
  
  **PLAN:** 
    - try removing things until it works
    - try a new heroku app (heroku create)
    - what is diferent in **PROD**?

- Test not finding "SHARED WITH" in React Components.  Do I need a Test Framework that gets the results of React Components?

## TODO

- style for **Tasks** that are checked = `.done { color: rgba(0, 0, 0, 0.3); text-decoration: line-through; }`
- single-page app at `home#index` using ReactJS
  - fetch sharees with *GET /lists/:id/sharees*
    - add a *before_action* to share this code with *lists#show*
- Sort Lists
  - if **List's name** only comes from **Owner** table then can easily sort in *user.rb*: 
    - `has_many :owners, dependent: :destroy, -> { order(:my_list_name)}`
    - `lists#create()` needs to set name when creating owner
    - edit **List** will need to join **Owner** table?
- **Owners**
  - Share adds to **Owner**
    - list users?  or send email?
  - Delete **List** removes from **Owner**
    - if there are no other **Owners** then destroy **List**
    - protect non-owner **Lists** & their **Tasks**
  - change **List Name** updates **Owner** when more than one **Owner**, or **Name** propogated to **Owner**, or **Name** only stored in **Owner**?
- **Users**
  - **Password** reset?
- Models
  - **Timeframes**
    - default: false
  - [Validation](https://edgeguides.rubyonrails.org/active_record_validations.html)
- Features
  - Move a **Task** to another **List**
  - button on **List** to delete all **Tasks** that are done

## Consider

- **Heroku**
  - **DB:** ephemeral vs AWS S3
