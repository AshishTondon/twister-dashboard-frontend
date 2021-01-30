# twister-dashboard-frontend
This is Reactjs admin dashboard with complete session check at clinet side.

## Important Modules
<ul>
<li>
Typescript
</li>

<li>
React
</li>

<li>
react-router-dom
</li>

<li>
axios
</li>
</ul>

## Scripts
```bash
"start": "react-scripts start",
"build": "react-scripts build",
```
## Steps to configure the template
<ul>
<li>
Download template from GitHub
</li>
<li>
Open file ./Routes/routeconfig.ts
</li>
<li>

**Delete `basename` parameter from package.json**
</li>
<li>
Configure routes variable in routeconfig.ts. Following is the interface for routes variable.

```typescript
export interface routeDef {
    path: string,   // configure route URL
    component: any, // Add Module
    routes?: routeDef[], // Array of Subroutes
    isAuth:boolean, // true, if session is required to access the page.
    isDisplay?:boolean, // true, To display route in side menu
    displayName?:string, // Display name of the Route in menu
    icon?:string // Icon name to display in menu 
}
```
</li>
<li>
Declare path in routeconfig.ts file. Default paths are already set in the file.
</li>
<li>
Import layout and pages module 
</li>
</ul>

## Use BrowserRouter Vs HashRouter

By Default this App uses _HashRouter_. For switching to _BrowserRouter_. Follow following steps:
<ul>
<li>
In file ./Routes/routeconfig.ts

<ul>
<li>
Set `ISHASHURL` to false
</li>
<li>
Replace HashRouter with BrowserRouter in following file

```
./src/Routes/index.tsx
./src/Layout/auth-frame.tsx
./src/Layout/user-frame.tsx
```
</li>
</ul>
</li>
<li>
In file ./Pulic/index.html

<ul>
<li>
JS and CSS file should have address started with '/'

```html
<link rel="stylesheet" href="/assets/vendors/mdi/css/materialdesignicons.min.css">
<link rel="stylesheet" href="/assets/vendors/css/vendor.bundle.base.css">
<link rel="stylesheet" href="/assets/css/style.css">
```
</li>
</ul>
</li>
</ul>