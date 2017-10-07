import React from 'react';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import {wrapElem} from './wrapElem';
import Divider from 'material-ui/Divider';
let SelectableList = makeSelectable(List);
SelectableList = wrapElem(SelectableList);

const ListOfCities = ({...props}) => {
  //console.log(elements)
  const {elements} = props
  const currentCity = elements[0]
  return (
  	<div>
  	  <SelectableList {...props}>
  		<Subheader>Current city</Subheader>
  	      <ListItem
  	        value={0}
  	        primaryText={currentCity.name}
  	      />
  	  </SelectableList>
  	  <Divider/>
  	  <SelectableList {...props}>
  	  	<Subheader>Other city</Subheader>
    	{elements.map((elem,i) => {
        // eslint-disable-next-line
    	  if (i === 0) return;
             return (<ListItem
  	      				key = {i}
  	        	        value={i}
  	        	        primaryText={elem.name}  	     
  	        	      />)
  	     })}
      </SelectableList>
    </div>
    
   )
 };

export default ListOfCities;