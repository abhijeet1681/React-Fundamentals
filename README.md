# React-Fundamentals

tilda(~) : It is responsible for autoupdating till path version of dependancy [2.12.0 it will always be in beteen 2.13.0]

caret(^) : It is responsible for autoupdating till minor version and path version of dependancy [2.12.0 it will always less than 3.0.0]

(*) : It is responsible for autoupdating till major version, pathch version & minor version of dependancy [2.12.0 it will always direct be 3.0.0]


#packages
1) Parcel (development dependency)
ADVANTAGES:--
        (A)HMR : Hot Module Replacement ==> [If we write any code and save it then the changes are reflecting automatically without reloading the page.]
		(B)Caching
    	(C)Development server ==> (i.e localhost 1234)
    	(D)Development build & Production build
		(E)Image optimization
		(F)Tree shaking  ==> [Unnecessary lines of codes are removed]
		(G)Differential bundling ==> [For running your Project in all Browser as well as their old Version]

To Know the vesion visit :- 

https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
{
https://github.com/browserslist/browserslist
https://github.com/browserslist/browserslist#query-composition
}
In Browserslist you can see Query Composition ==>
Click on it git hub page will open.
Then scroll and search config file in that package.json and copy seconnd code ==>
→See Best Practices and copy code>
Past it in your Package.json file after the ↓ dependencies. ↓

"browserslist": [
    "last 10 version",
    "> 1%",
    "not dead"
  ]
---------------------------------------------------------------------------------------------------------------------------------------------------

2) # JSX
JSX ==>(gets converted into) React.createElement (and then it gets converted into) ==>HTML (Babel)
JSX is not a html neither js its is ==> Html like syntax


#Components
1) Function based components : Latest
It is a javascript function that returns some piece of JSX 
2) Class based components : Older one

https://react.dev/learn/writing-markup-with-jsx

1. Return a single root Element
2. Close all the tags
3. camelCase all most of the things

> Additional Feature
1. Passing string with quotes
2. Writting Js in single curly bracket
3. Using "double curly brackets"