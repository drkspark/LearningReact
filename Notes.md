# Monotlith Architecture
Huge big project. 
It will contain: API, UI, AUTH, DB, SMS Service, Email etc

# MicroService Architecture
Everything will be divided into small parts.
Like: Backend, UI, AUTH, DB, SMS
Every microservice can have it's own TECH STACK
The services run on their own PORT and Communicate via API calls  
Seperation of Concept
Single Responsibility Principle

# How APPs get Data from Servers
-   Load -> API -> Render
    -   Here till 500ms(Time taken by API to send us the data), the page will display ntg
    -   Once we get the data it will be rendered abruply => UX is not Good

-   Load -> Skeleton Render -> API -> Render
    -   We will be always following this
    -   This will give us a better UX 
    -   We can also put a Loading Screen
    -   We will be rendering 2-times, but react has a fast render-cycle => NO PROBLEM


    ## Use CORS extension, so that it allows, us to call Swiggy API