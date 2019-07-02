Youngest Common Ancestor

You're given three inputs, all of which are instances of a class that have an "ancestor" property pointing to their youngest ancestor.  The first input is the top ancestor in an ancestral tree (ie. the only instance that has no ancestor), and the other two inputs are descendants in the ancestral tree.  Write a function that returns the youngest common ancestor to the two descendants.  


You could try to simultaneously iterate through the ancestors of both input descendants until you find a common ancestor; however if none of the descendants has more ancestors than the other (ie. is lower in the ancestral tree), you won't find the youngest common ancestor.  

Start by finding the two input descendants' depth in the ancestral tree.  If one of them is deeper, iterate up through its ancestor until you reach the depth of the higher descendant.  Then, iterate through both descendant's ancestors in tandem until you find the first common ancestor.  Note that at this PointerEvent, one of the descendants will be the ancestor of the lower descendant that is at the same level as the higher descendant.  