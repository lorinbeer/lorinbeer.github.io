





# Adding directives with a custom directive

The idea is simple enough: somewhere inside a directive (parent directive), a directive is set on an element of the template.

The original problem I wanted this pattern to solve turned out to be better resolved with multiple directives. Chances are simpler is better, especially in terms of software architechture. However, you may find this angular pattern useful for doing wacky hackss with directives.
 
example use cases:
- update angument to a sub-directive based on some data in the scope of your custom directive
- create a shorthand directive for multiple custom/stock directives

## it's complicated...
figuring out how to do this involved learning something about angulars inner workings:

## first pass
let M.js be a module

<pre>

</pre>

just a stub module for the example, nothing to see here

let A.js be a custom directive
<pre>
M.directive("A", function () {
    var widgetToTemplate = {
        "slider" : '<input type="range" min="1" max="10">'
    }

    return {
        // restricts to use as an attribute
        restrict : 'E',
        replace : true,
        scope : true,
        transclude: 'element',
        template : ,
        compile : function (telement, tattrs, transclude) {
            telement[0].setAttribute('ng-click', 'selectRange()');
            return function (scope, iElement, iAttrs, controller) {
            };
        }
    }
});
</pre>

our custom directive. We start by attempting to add an ng-click directive to the template element in the compile function.

check out the jsfiddle
note that the ng-click attribute is present in the compiled and linked render, but selectRange does not fire when the element is clicked.

I attempted this many different ways, all with the same result

## second pass

aimproved.js
let A2 be our improved directive
<pre>
M.directive("A2", function () {
    var widgetToTemplate = {
        "slider" : '<input type="range" min="1" max="10">'
    }

    return {
        // restricts to use as an attribute
        restrict : 'E',
        replace : true,
        scope : true,
        transclude: 'element',
        template : ,
        compile : function (telement, tattrs, transclude) {
            telement[0].setAttribute('ng-click', 'selectRange()');
            return function (scope, iElement, iAttrs, controller) {
                        iElement[0].setAttribute('ng-click', 'selectRange()');
                        $compile(iElement)(scope);
                        iElement.append(sliderelem);            
            };
        }
    }
});
</pre>

jsfiddle

line x recompiles the element
line x+1 links it to the current scope

these can be combined 

there are many permutations that can achieve the same thing. The subdirective could be added as an attribute to some part of the iElement node, or it could be included in another dom element appended to the iElement tree. You could add the directive to the template element, then compile and link as seen, or do all the work in the link function.


