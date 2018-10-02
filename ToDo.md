# ToDo

## Issues

- fix client-side console warnings locally & in heroku production

- heroku - some things that work locally in develop are not working in heroku production.  I suspect one culprit is breaking all of these.
  - Account dropdown not working
    - deploying 'before-React' did not fix it
    - Uncaught TypeError: Cannot read property 'exclude' of undefined
      - y.matches() @ application-a97__da10.js:formatted:37 =  return null != e.exclude ? n.call(t, e.selector) && !n.call(t, e.exclude) : n.call(t, e)
      - anonymous @ application-a97__da10.js:formatted:128 =  for (e = t.target; e instanceof Element && !o(e, n); )
  - jQuery not working in /app/javascript/components (first occurrence in Main.js React Component)
  - js-Routes not working
  PLAN: 
    - try removing things until it works
    - try a new heroku app (heroku create)

## TODO

- .done {
  color: rgba(0, 0, 0, 0.3);
  text-decoration: line-through;
}
- single-page app at home#index using ReactJS
  - implement new Task/List in React using a form?
  - show SHARED_WITH on each List
- Sort Lists
  - if list's name only comes from Owner table then can easily sort in user.rb: 
    - has_many :owners, dependent: :destroy, -> { order(:my_list_name)}
    - lists#create() needs to set name when creating owner
    - edit list will need to join owner table?
- Owners
  - Share adds to Owner
    - list users?  or send email?
  - Delete removes from Owners
    - if there are no other owners then destroy List
    - protect non-owner Lists & their Tasks
  - change List Name updates Owner when more than one Owner, or Name propogated to Owner, or Name only stored in Owner?
- Users
  - password reset?
- Models
  - **Timeframes**
    - default: false
  - [Validation](https://edgeguides.rubyonrails.org/active_record_validations.html)
- Features
  - Move a **Task** to another **List**
  - button on List to delete all Tasks that are done

## Consider

- Heroku
  - DB: ephemeral vs AWS S3
