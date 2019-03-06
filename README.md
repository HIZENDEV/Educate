<p align="center">
 <img src="https://i.imgur.com/i7FID28.png" alt="Student Manager"/>
</p>



## How it works

Just a simple student manager, students arent display on cards. This project only manages a few students this choice is wise. However with a larger student database, it might be better to use a table system.

You can add, edit, and delete students by simple click.



## Add to your project

Use NPM or Yarn as you like

### Installation

 Simply clone this repository

```git
       git clone 'https://github.com/HIZENDEV/Educate.git'
```

Install the node modules

```bash
       npm i
       #yarn also available
```

Then you can start the  server

```bash
        npm start
        #localhost:3000 by default
```



### Why Mobx?

Mobx is a greate state management. Unlike Redux, this one is very simple to use so for a small project like this it allows to have a more maintainable code. It also offers a wide range of very useful functions, very much like VueX which makes it very popular with Vue developers



### Why Grommet

Many people like working with a css framework, however for React, there are very few that work with the flex-box system. This one that offers a lot of custom assets that improve the development time.



### From development to production

Before sent this project on production server, you would probably set your own database instead of the mock folder, just use Axios (already in nodes modules) and open a web socket channel on the store constructor.

In this way Mobx will fetch the database and stay in keep abreast of any changes and fetch them.

Some example on 'PeaksCircle repo'




