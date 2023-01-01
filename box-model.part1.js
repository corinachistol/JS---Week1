//unit-px
childWidth   = 100
childPadding = 10
childBorder  = 1
childMargin  = 20

parentWidth   =110

childSize = childWidth + (childPadding + childBorder + childMargin) * 2
overflow  = childSize > parentWidth //Boolean

alert("Horizontal size:" + childSize + "px")

alert("child overflow: " + overflow ) 

alert("how much overflow:" + (childSize - parentWidth) + "px" )

