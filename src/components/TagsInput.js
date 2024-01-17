import React, { useEffect, useState } from "react";
import "../taginput.css"


const TagsInput = props => {

	console.log('props: ',props);
	const [tags, setTags] = useState(props.tags);
	useEffect(() => {
		console.log(props.tags)
	}, [])
	useEffect(()=>{
		console.log('tags new: ',tags);
		if(props.tags !== tags){
			setTags(props.tags)
		}
	}, [props.tags])
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			props.selectedTags([...tags, event.target.value]);
			event.target.value = "";
		}
	};

	 
	return (	
		<>
		{
			// (tags && tags.length>0) ?
				<div className="tags-input">
					<ul id="tags">
						{/* {console.log('in jsx: ',tags)} */}
						{tags && tags.map((tag, index) => (
							<li key={index} className="tag">
								<span className='tag-title'>{tag}</span>
								<span className='tag-close-icon'
									onClick={() => removeTags(index)}
								>
									x
								</span>
							</li>
						))}
					</ul>
					<input
						type="text"
						onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
						placeholder="Press enter to add tags"
					/>
				</div> 
				
		}
		
		
		</>
	);
};


export default TagsInput;
