# ToDo

## Issues
- single-page app at home#index using ReactJS
  - heroku: Routes is not defined in first use in Main React Component
   (\app\javascript\components\Main.js line 16)
    - 2018-09-30T21:13:30.301763+00:00 heroku[router]: at=info method=GET path="/" host=todo-devindow.herokuapp.com request_id=61ff0a92-288f-4d6c-809a-7bda3a8f4d39 fwd="75.63.25.102" dyno=web.1 connect=0ms service=24ms status=200 bytes=3447 protocol=https
    - 2018-09-30T21:13:30.401236+00:00 heroku[router]: at=info method=GET path="/packs/application-ceb88955cda433ba1293.js" host=todo-devindow.herokuapp.com request_id=470c10de-1094-47e7-b343-8d1397de0a67 fwd="75.63.25.102" dyno=web.1 connect=0ms service=1ms status=304 bytes=48 protocol=https
      - status 304 on GET /packs/application-xxx.js
  - show SHARED_WITH on each List
  - add "key" and fix other client-side console warnings
  - allow Task.done checkbox to be modified without first hitting the Edit button
  - implement new Task/List in React using a form?

## TODO

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
  - change List Name updates Owner when more than one Owner, or Name propogated to Owner?
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
