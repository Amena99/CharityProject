# TimeLender
###### Click [here](https://timelender.herokuapp.com/) for the website. 

## What does TimeLender do? 
This website is a platform for users looking for ways to volunteer their time to meaningful projects to connect with events occuring in their community in need of volunteers. Likewise, TimeLender provides a space for community organizations, or individuals doing good for the community to post their projects and the time resources needed to completed them. Users can then find these projects and commit volunteer hours to them. As projects are committed to, project creators can see who has committed, how many hours they have committed, and how many hours are left. 
![alt, text](https://i.imgur.com/VMcXy4jl.png)

![alt, text](https://i.imgur.com/563MQX1h.png)

## My Contributions to TimeLender
#### MySQL Database Structure and Routing
TimeLender is structured in the MVC form and uses MySQL database. I facilitated the planning and organization of the database by creating mock tables in GoogleSheets. Color coding helped to delineate which columns would be joined to columns in other tables to make the queries that we needed for our data possible. Much planning was done in advance to ensure that we would be able to store and display data as needed across five tables. 
![alt, text](https://i.imgur.com/BDAEBcXl.png)

After the map was laid, out I created the Sequelize models including appropriate joins. I subsequently completed the routing for CRUD (Create, Read, Update, Delete) operations to the database throughout the entire MVC pipline. 
![alt, text](https://i.imgur.com/kAgdV9tl.png)

#### Incorporating Stripe for Purchases
Stripe is a third party application integrated into TimeLender to facilitate monetary donations to organization. Stripe's React.js elements were imported from the Stripe library and incorporated to the commit page to provide users with an interface to complete purchases. Right now Stripe is still in test mode and does not take actual credit cards, but can be enhanced in the future to achieve full functionality. 

![alt, text](https://i.imgur.com/OhhGG76m.png)
![alt, text](https://i.imgur.com/I1U250zl.png)
