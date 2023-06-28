# Routing in React

## Important things about useEffects
-   Syntax: useEffect needs <b>callBack Function</b> and <b>Dependency Array</b>.
-   If not dependency array => useEffect is called on every render.
-   If dependency array is empty [] => useEffect is called only once for the initial (First) render.
-   If we put something inside dependency array [x, y, z] => useEffect called everytime the dependency changes.


## Important things about useState
-   Never create state variables outside a Component
-   Reason: Since the useState aims to create <b>local state variable</b>
-   Always call the useState at the <b>TOP</b> so as to have consistent data through out.
-   Never declare useState inside if-else, loops, other function apart from the functional components


## React Router Dom v6
-   browserRouter
-   RouterProvide
-   Outlet
-   Link
-   Whenever goinf to a different Route never use <b>anchor tag</b> use the Link component
